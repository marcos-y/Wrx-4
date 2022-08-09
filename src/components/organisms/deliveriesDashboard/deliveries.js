// Utils & Config
import React, { useEffect, useState } from "react";
import { getDeliveryList } from "../../../helpers/serviceRequests/deliveries";

// External Components
import Grid from "@material-ui/core/Grid";

// Internal Components
import SlideDrawer from "../../molecules/slideDrawer/slideDrawer";
import DetailPreview from "./detailPreview";
import Dashboard from "../dashboard/dashboard";
import PrimaryButton from "../../atoms/primaryButton/primaryButton";
import DeliveriesTable from "../../molecules/deliveriesTable/deliveriesTable";
import ConfirmDeliveryModal from "../../molecules/confirmDeliveryModal/confirmDeliveryModal";
import TableSkeleton from "../../molecules/tableSkeleton/tableSkeleton";
import Pagination from "../../atoms/pagination/pagination";
import Alert from "../../atoms/snackbar/snackbar";

const DeliveriesDashboard = (props) => {
  const [drawerOpened, setdrawerOpened] = useState(false);
  const [selectedDelivery, setselectedDelivery] = useState("");
  const [confirmDeliveryModalOpen, setconfirmDeliveryModalOpen] = useState(false);
  const [isLoading, setisLoading] = useState(true);
  const [deliveries, setdeliveries] = useState([]);
  const [page, setpage] = useState(1);
  const [totalPagesQty, settotalPagesQty] = useState(0);
  const [reloadCounter, setreloadCounter] = useState(0);
  const [alert, setalert] = useState({ open: false, text: "", type: "" });

  useEffect(() => {
    const getDeliveries = async (page) => {
      setisLoading(true);
      const res = await getDeliveryList(page);

      if (res.status === 200) {
        setdeliveries(res.data.deliveries);
        settotalPagesQty(res.data.totalPagesQty);
      }
      setisLoading(false);
    };
    getDeliveries(page);
  }, [page, reloadCounter]);

  const handleOpenDrawer = (delivery) => {
    setselectedDelivery(delivery);
    setdrawerOpened(true);
  };

  return (
    <Dashboard title="Retiros">
      {drawerOpened && (
        <SlideDrawer opened={drawerOpened} onClose={() => setdrawerOpened(false)} style={{ width: "50%" }}>
          <DetailPreview delivery={selectedDelivery} onButtonClick={() => setconfirmDeliveryModalOpen(true)} />
        </SlideDrawer>
      )}
      <Grid item xs={12} alignItems="flex-start" style={{ textAlign: "left" }}>
        <PrimaryButton text="FILTRAR" />
      </Grid>
      <Grid item xs={12}>
        {isLoading ? <TableSkeleton /> : <DeliveriesTable deliveries={deliveries} handleOpenDrawer={handleOpenDrawer} />}
      </Grid>
      <Grid item xs={12} justify="center" alignContent="center">
        {(!isLoading || totalPagesQty !== 0) && (
          <Pagination
            count={totalPagesQty}
            page={page}
            onChange={(e, value) => setpage(value)}
            style={{ display: "flex", justifyContent: "center", color: "white" }}
          />
        )}
      </Grid>
      {confirmDeliveryModalOpen && (
        <ConfirmDeliveryModal
          confirmHandler={() => setdrawerOpened(false)}
          handleClose={() => setconfirmDeliveryModalOpen(false)}
          handleDetailClose={() => setdrawerOpened(false)}
          open={confirmDeliveryModalOpen}
          delivery={selectedDelivery}
          reload={() => setreloadCounter(reloadCounter + 1)}
          setalert={setalert}
        />
      )}
      {alert.open && <Alert open={alert.open} type={alert.type} text={alert.text} />}
    </Dashboard>
  );
};

DeliveriesDashboard.propTypes = {};

export default DeliveriesDashboard;
