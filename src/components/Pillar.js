import { useState } from "react";
import { Grid, Box, Typography, Button } from "@mui/material";
import axios from "axios";
import CardItem from "./CardItem";
import AddIcon from "@mui/icons-material/Add";
import Drawer from "@mui/material/Drawer";
import AddItem from "./AddItem";

const Pillar = ({ type, button, items }) => {
  const [state, setState] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(open);
  };

  const onDragStart = (e, id) => {
    console.log("dragstart:", id);
    e.dataTransfer.setData("id", id);
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const onDrop = async (ev, cat) => {
    let id = ev.dataTransfer.getData("id");
    console.log(id, cat);

    const response = await axios.patch(
      `http://localhost:3001/api/items/${id}`,
      { status: cat.toLowerCase() }
    );
    console.log(response);
  };

  return (
    <div
      onDragOver={(e) => onDragOver(e)}
      onDrop={(e) => {
        onDrop(e, type);
      }}
    >
      <Grid item xs={12} sm={9} md={6} lg={2.4}>
        <Box
          sx={{
            width: 200,
            borderRadius: "5px",
            minHeight: "100vh",
            backgroundColor: "#e0e0e0",
            margin: "5px",
          }}
        >
          <Typography
            borderBottom="1px solid white"
            align="center"
            color="primary"
            padding={1}
            variant="h6"
          >
            {type}
          </Typography>
          <CardItem onDragStart={onDragStart} items={items} type={type} />
          <div style={{ textAlign: "center" }}>
            {button && (
              <>
                <Button
                  variant="contained"
                  onClick={toggleDrawer(true)}
                  startIcon={<AddIcon />}
                >
                  Add New Order
                </Button>
                <Drawer
                  anchor="right"
                  open={state}
                  onClose={toggleDrawer(false)}
                >
                  <AddItem toggleDrawer={toggleDrawer} />
                </Drawer>
              </>
            )}
          </div>
        </Box>
      </Grid>
    </div>
  );
};

export default Pillar;
