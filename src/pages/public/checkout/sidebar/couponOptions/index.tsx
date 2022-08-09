import React, { useState } from "react";
import { useSnackbar } from "notistack";

import { makeStyles, Typography, CircularProgress } from "@material-ui/core";
import { ExpandMore, ExpandLess, AddOutlined, Delete } from "@material-ui/icons/";

import useInput from "src/hooks/useInput";
import Input from "../../commons/input/customInput";

import { retrieveCoupon } from "src/services/srtipe";
import { useShoppingCart } from "src/stores/shoppingCart";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "90%",
    padding: 12,
    margin: "48px 0px",
    borderTop: "2px solid #6F6F6F",
    borderBottom: "2px solid #6F6F6F",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },

  viewMore: {
    display: "flex",
    cursor: "pointer",
    userSelect: "none",
    alignItems: "center",
    justifyContent: "space-between",
  },

  inputContainer: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },

  button: {
    width: 34,
    height: 34,
    marginTop: 18,
    color: "black",
    border: "none",
    outline: "none",
    display: "flex",
    cursor: "pointer",
    borderRadius: "50%",
    alignItems: "center",
    background: "#D60010",
    justifyContent: "center",
    [theme.breakpoints.down("md")]: {
      marginTop: 12,
      marginLeft: 6,
    },
  },

  canje: {
    display: "flex",
    margin: "18px 0",
    alignItems: "center",
    justifyContent: "space-between",
  },
}));

const CouponOptions = () => {
  const classes = useStyles();
  const coupon = useInput({});
  const { enqueueSnackbar } = useSnackbar();
  const [showCanje, setShowCanje] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [showInput, setShowInput] = useState<boolean>(true);

  const { setPaymentMethod, paymentMethod } = useShoppingCart();

  const handleRetrieve = async () => {
    setLoading(true);

    try {
      const couponData = await retrieveCoupon(coupon.value);

      if (couponData.valid) {
        setShowCanje(true);
        setShowInput(false);
        setPaymentMethod({ ...paymentMethod, couponID: couponData.id, couponData });
      } else enqueueSnackbar("Cupón inválido!", { variant: "error", preventDuplicate: true });

      setLoading(false);
    } catch (error) {
      setLoading(false);
      enqueueSnackbar("Cupón inválido!", { variant: "error", preventDuplicate: true });
    }
  };

  const handleDeleteRetrieve = () => {
    setShowCanje(false);
    setShowInput(true);
    setPaymentMethod({
      ...paymentMethod,
      couponID: "",
      couponData: { id: "", name: "", percent_off: 0, valid: false, max_redemptions: 0, duration: "once" },
    });
  };

  return (
    <div className={classes.root}>
      <div className={classes.viewMore} onClick={() => setShowInput((input) => !input)}>
        <Typography variant="body1" align="left" style={{ fontWeight: "bold" }}>
          ¿TIENES UN CUPÓN DE DESCUENTO?
        </Typography>

        {!showInput ? <ExpandMore fontSize="large" /> : <ExpandLess fontSize="large" />}
      </div>

      {showInput && (
        <div className={classes.inputContainer}>
          <Input
            label=""
            maxWidth
            value={coupon.value}
            onBlur={coupon.onBlur}
            onFocus={coupon.onFocus}
            onChange={coupon.onChange}
            placeholder="Código del cupón"
            style={{ background: "#171717" }}
            error={!coupon.error.isValid && coupon.error.message}
          />

          <button className={classes.button} onClick={handleRetrieve} disabled={loading}>
            {loading ? <CircularProgress style={{ color: "black" }} size={16} thickness={6} /> : <AddOutlined fontSize="large" />}
          </button>
        </div>
      )}

      {showCanje && (
        <div className={classes.canje}>
          <Typography variant="body1" align="left" style={{ textTransform: "uppercase", color: "#FCFCFC" }}>
            {coupon.value}
          </Typography>

          <div onClick={handleDeleteRetrieve}>
            <Delete style={{ margin: "3px 0", cursor: "pointer" }} />
          </div>
        </div>
      )}
    </div>
  );
};

export default CouponOptions;
