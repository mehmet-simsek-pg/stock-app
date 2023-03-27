import React, { useState } from "react";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import useStockCall from "../hooks/useStockCall";
import Dialog from "@mui/material/Dialog";

const EditFirmForm = ({ open, handleClose, firm }) => {
  const style = { margin: "1rem", width: 500 };

  const { updateStockData } = useStockCall();

  const [firmName, setFirmName] = useState(firm.name);
  const [phone, setPhone] = useState(firm.phone);
  const [address, setAddress] = useState(firm.address);
  const [image, setImage] = useState(firm.image);

  const newFirm = {
    name: firmName,
    phone: phone,
    image: image,
    address: address,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateStockData("firms", firm.id, newFirm);
    handleClose();
  };
  return (
    <Dialog open={open} onClose={handleClose}>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "2rem",
        }}
      >
        <TextField
          label="Firm Name"
          variant="filled"
          required
          value={firmName}
          onChange={(e) => setFirmName(e.target.value)}
          style={style}
        />
        <TextField
          label="Phone"
          variant="filled"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          style={style}
        />
        <TextField
          label="Address"
          type="text"
          variant="filled"
          required
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          style={style}
        />
        <TextField
          label="Image"
          type="text"
          variant="filled"
          required
          value={image}
          onChange={(e) => setImage(e.target.value)}
          style={style}
        />
        <div>
          <Button
            variant="contained"
            sx={{ margin: "2rem" }}
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            sx={{ margin: "2rem" }}
          >
            Submit
          </Button>
        </div>
      </form>
    </Dialog>
  );
};

export default EditFirmForm;
