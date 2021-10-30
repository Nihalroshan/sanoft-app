import { useState } from "react";
import axios from "axios";
import { Box } from "@mui/system";
import { Container, Typography, TextField, Button } from "@mui/material";

const AddItem = ({ toggleDrawer }) => {
  const [orderNo, setOrderNo] = useState("");
  const [name, setName] = useState("");
  const [name2, setName2] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      orderNo: orderNo,
      name: name,
      name2: name2,
      address: address,
    };

    await axios.post("http://localhost:3001/api/items", data);
  };

  return (
    <div>
      <Box sx={{ width: 600 }} role="presentation">
        <div
          style={{
            width: "100%",
            height: "5px",
            backgroundColor: "#1769aa",
            marginBottom: "10px",
          }}
        ></div>
        <Container>
          <Typography marginBottom="40px" variant="h6" color="primary">
            Add new order
          </Typography>
          <form onSubmit={handleSubmit} noValidate autoComplete="off">
            <TextField
              onChange={(e) => setOrderNo(e.target.value)}
              style={{ marginBottom: "30px" }}
              sx={{}}
              fullWidth
              name="order-no"
              label="Order Number"
              variant="outlined"
            />
            <TextField
              onChange={(e) => setName(e.target.value)}
              style={{ marginBottom: "30px" }}
              fullWidth
              name="name"
              label="Name"
              variant="outlined"
            />
            <TextField
              onChange={(e) => setName2(e.target.value)}
              style={{ marginBottom: "30px" }}
              fullWidth
              name="name"
              label="Name"
              variant="outlined"
            />
            <TextField
              onChange={(e) => setAddress(e.target.value)}
              style={{ marginBottom: "30px" }}
              fullWidth
              name="address"
              label="Address"
              variant="outlined"
              multiline
              rows="4"
            />
            <div
              style={{
                marginTop: "10px",
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <Button
                onClick={toggleDrawer(false)}
                variant="contained"
                color="error"
              >
                Cancel
              </Button>
              <Button
                onClick={toggleDrawer(false)}
                type="submit"
                variant="contained"
                color="success"
              >
                Save
              </Button>
            </div>
          </form>
        </Container>
      </Box>
    </div>
  );
};

export default AddItem;
