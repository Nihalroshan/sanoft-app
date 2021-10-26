import React from "react";
import { Typography, Card, Avatar, CardHeader } from "@mui/material";
const CardItem = () => {
  return (
    <div>
      <Card
        elevation={0}
        sx={{ height: 160, margin: 1, backgroundColor: "#1769aa" }}
      >
        <Typography color="white" align="center" variant="body2">
          Order 01234
        </Typography>
        <Card elevation={0} sx={{ height: 130, margin: "2px" }}>
          <CardHeader
            sx={{ padding: 0, marginLeft: 1 }}
            title={
              <Typography color="black" variant="body1">
                MS asdfds
              </Typography>
            }
            action={
              <Avatar sx={{margin:2,marginBottom:0,width: 30, height: 30}}>
                R
              </Avatar>
            }
          />
          <div style={{ marginLeft: "8px" }}>
            <Typography fontSize="12px" variant="body2">
              MS asdfds
            </Typography>
            <Typography fontSize="12px" variant="body2">
              MS asdfds
            </Typography>
            <Typography variant="body1" color="primary">
              Description
            </Typography>
            <Typography fontSize="12px" variant="body2">
              MS asdfds
            </Typography>
            <Typography fontSize="12px" variant="body2">
              MS asdfds
            </Typography>
          </div>
        </Card>
      </Card>
    </div>
  );
};

export default CardItem;
