import React, { useState } from "react";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import useStockCall from "../hooks/useStockCall";
import Dialog from "@mui/material/Dialog";
import Stack from "@mui/material/Stack";

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
          id="outlined-basic"
          variant="outlined"
          required
          value={firmName}
          onChange={(e) => setFirmName(e.target.value)}
          style={style}
        />
        <TextField
          label="Phone"
          id="outlined-basic"
          variant="outlined"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          style={style}
        />
        <TextField
          label="Address"
          type="text"
          id="outlined-basic"
          variant="outlined"
          required
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          style={style}
        />
        <TextField
          label="Image"
          type="text"
          id="outlined-basic"
          variant="outlined"
          required
          value={image}
          onChange={(e) => setImage(e.target.value)}
          style={style}
        />
        <div>
          <Stack direction="row" spacing={2}>
            <Button variant="contained" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="contained" color="success" onClick={handleSubmit}>
              Submit
            </Button>
          </Stack>
        </div>
      </form>
    </Dialog>
  );
};

export default AddFirmForm;
