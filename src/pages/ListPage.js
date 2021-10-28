import React, { useState, useEffect } from "react";
import { Container, Grid } from "@mui/material";
import axios from "axios";
import Pillar from "../components/Pillar";
// import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const ListPage = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function getItems() {
      const { data } = await axios.get("http://localhost:3001/api/items");
      setItems(data);
    }
    getItems();
  });

  const styles = {
    grid: {
      marginTop: "10px",
    },
  };

  return (
    <Container>
      <Grid style={styles.grid} container spacing={1}>
        <Pillar items={items} type="Pending" button="true" />
        <Pillar items={items} type="Processing" />
        <Pillar items={items} type="Preparing" />
        <Pillar items={items} type="Packing" />
        <Pillar items={items} type="Dispatched" />
      </Grid>
    </Container>
  );
};

export default ListPage;
