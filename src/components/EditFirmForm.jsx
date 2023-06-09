import React, { useState } from "react";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import useStockCall from "../hooks/useStockCall";
import Dialog from "@mui/material/Dialog";
import Stack from "@mui/material/Stack";

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
          <Stack
            direction="row"
            spacing={2}
            width={500}
            display={"flex"}
            justifyContent={"center"}
            marginBottom={2}
          >
            <Button variant="contained" color="success" onClick={handleSubmit}>
              Submit
            </Button>
            <Button variant="contained" onClick={handleClose}>
              Cancel
            </Button>
          </Stack>
        </div>
      </form>
    </Dialog>
  );
};

export default EditFirmForm;
