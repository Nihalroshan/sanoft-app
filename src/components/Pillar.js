import React from "react";
import { Grid, Box, Typography, Button } from "@mui/material";
import CardItem from "./CardItem";
import AddIcon from "@mui/icons-material/Add";

const Pillar = ({ type, button }) => {
  return (
    <div>
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
          <CardItem />
          <div style={{textAlign:"center"}}>
            {button && (
              <Button variant="contained" startIcon={<AddIcon />}>
                Add New Order
              </Button>
            )}
          </div>
        </Box>
      </Grid>
    </div>
  );
};

export default Pillar;
