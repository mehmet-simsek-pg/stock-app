import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import FirmCard from "../components/FirmCard";
import useStockCall from "../hooks/useStockCall";
import { flex } from "../styles/globalStyle";

import { Button, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import AddFirmForm from "../components/AddFirmForm";

const Firms = () => {
  const { getStockData } = useStockCall();
  const { firms } = useSelector((state) => state.stock);

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  useEffect(
    () => {
      getStockData("firms");
    },
    // eslint-disable-next-line
    []
  );

  return (
    <div>
      <Typography variant="h4" color="error" mb={3}>
        Firm
      </Typography>

      <Button variant="contained" onClick={handleOpen}>
        New Firm
      </Button>
      <AddFirmForm open={open} handleClose={handleClose} />

      <Grid container sx={flex}>
        {firms?.map((firm) => (
          <Grid item key={firm.id}>
            <FirmCard firm={firm} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Firms;
