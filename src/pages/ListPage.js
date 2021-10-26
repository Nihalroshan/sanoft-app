import { Container, Grid } from "@mui/material";
import React from "react";
import Pillar from "../components/Pillar";

const ListPage = () => {
  const styles = {
    grid: {
      marginTop: "10px",
    },
  };

  return (
    <Container>
      <Grid style={styles.grid} container spacing={1}>
        <Pillar type="Pending" button="true" />
        <Pillar type="Processing" />
        <Pillar type="Preparing" />
        <Pillar type="Packing" />
        <Pillar type="Dispatched" />
      </Grid>
    </Container>
  );
};

export default ListPage;
