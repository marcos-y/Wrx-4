//Utils & configs
import React from "react";
import { useTheme } from "@material-ui/core";
import fonts from "../../../styles/fonts.module.scss";

//External components
import Box from "@material-ui/core/Box";
import Chip from "@material-ui/core/Chip";
import Typography from "@material-ui/core/Typography";

const OrderedProductCard = (props) => {
  const theme = useTheme();

    return(
        <>
        <Box style={{marginTop:theme.spacing(2),marginBottom:theme.spacing(2),padding:theme.spacing(4),
        backgroundColor: theme.palette.background.secondary}}>
            <div style={{display:'flex',alignItems:'center',width:'100%'
            ,flexWrap:'wrap',marginBottom:theme.spacing(4)}}>
                <Box flexGrow={6} style={{display:'flex',flexDirection:'flexEnd'}}>
                <Typography color="textSecondary" style={{fontFamily:fonts.titleFont,fontSize: 22,
                display:'inline-block'}}>
                    PEDIDO {props.lista.numero}
                </Typography>
                </Box>
          <Box>
            <Chip
              label={`PENDIENTE DE ${props.lista.pendiente}`}
              style={{
                backgroundColor: props.lista.pendiente === "PAGO" ? "#D60000" : "#D67300",
                fontFamily: fonts.openSans,
                fontWeight: "bold",
              }}
            />
          </Box>
        </div>

        <div style={{ marginTop: theme.spacing(2), display: "flex", alignItems: "center" }}>
          <Typography align="left" color="textSecondary" variant="body2" style={{ fontFamily: fonts.openSans, fontSize: 16 }}>
            FECHA DEL PEDIDO:
          </Typography>
          <Typography color="textSecondary" style={{ fontFamily: fonts.openSans, fontSize: 16, fontWeight: "bold", marginLeft: "5px" }}>
            {props.lista.fecha}
          </Typography>
        </div>

        <div style={{ marginTop: theme.spacing(2), display: "flex", alignItems: "center" }}>
          <Typography
            align="left"
            color="textSecondary"
            variant="body2"
            style={{ fontFamily: fonts.openSans, fontSize: 16, display: "inline-block" }}
          >
            DIRECCIÓN DE ENTREGA:
            <Typography
              color="textSecondary"
              style={{ fontFamily: fonts.openSans, fontSize: 16, fontWeight: "bold", marginLeft: "5px", display: "inline" }}
            >
              {props.lista.direccion}
            </Typography>
          </Typography>
        </div>

        <div style={{ marginTop: theme.spacing(2), display: "flex", alignItems: "center" }}>
          <Typography
            align="left"
            color="textSecondary"
            variant="body2"
            style={{ fontFamily: fonts.openSans, fontSize: 16, display: "inline-block" }}
          >
            MÉTODO DE PAGO:
            <Typography
              color="textSecondary"
              style={{ fontFamily: fonts.openSans, fontSize: 16, fontWeight: "bold", marginLeft: "5px", display: "inline" }}
            >
              {props.lista.pago}
            </Typography>
          </Typography>
        </div>
        <div style={{ width: "100%", marginTop: theme.spacing(2), display: "flex", alignItems: "center", flexWrap: "wrap" }}>
          <Box flexGrow={2} style={{ display: "flex", flexDirection: "flexEnd" }}>
            <Typography
              align="left"
              color="textSecondary"
              variant="body2"
              style={{ fontFamily: fonts.openSans, fontSize: 16, display: "inline-block" }}
            >
              PRODUCTOS COMPRADOS:
              <Typography
                color="textSecondary"
                style={{ fontFamily: fonts.openSans, fontSize: 16, fontWeight: "bold", marginLeft: "5px", display: "inline" }}
              >
                {props.lista.producto}
              </Typography>
            </Typography>
          </Box>

          <Box>
            <Typography
              align="right"
              color="textSecondary"
              style={{ fontFamily: fonts.openSans, fontSize: 24, fontWeight: "bold", display: "inline" }}
            >
              {props.lista.precio}€
            </Typography>
          </Box>
        </div>
      </Box>
    </>
  );
};

export default OrderedProductCard;
