import React, { useState } from "react";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import useStockCall from "../hooks/useStockCall";
import Dialog from "@mui/material/Dialog";

const AddFirmForm = ({ open, handleClose }) => {
  const style = { margin: "1rem", width: 500 };

  const { createStockData } = useStockCall();

  const [firmName, setFirmName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [image, setImage] = useState("");

  const newFirm = {
    name: firmName,
    phone: phone,
    image: image,
    address: address,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createStockData("firms", newFirm);
    setFirmName("");
    setPhone("");
    setAddress("");
    setImage("");
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

export default AddFirmForm;
