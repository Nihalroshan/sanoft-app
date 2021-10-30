import { Typography, Card, Avatar, CardHeader } from "@mui/material";

const CardItem = ({ items, type,onDragStart }) => {
  const filteredItems = items.filter(
    (item) => item.status === type.toLowerCase()
  );

  return (
    <div>
      {filteredItems.map((item) => (
        <>
          <Card
            onDragStart={(e)=>onDragStart(e,item._id)}
            draggable
            key={item._id}
            elevation={0}
            sx={{ height: 160, margin: 1, backgroundColor: "#1769aa" }}
          >
            <Typography color="white" align="center" variant="body2">
              {item.orderNumber}
            </Typography>
            <Card elevation={0} sx={{ height: 130, margin: "2px" }}>
              <CardHeader
                sx={{ padding: 0, marginLeft: 1 }}
                title={
                  <Typography color="black" variant="body1">
                    {item.name}
                  </Typography>
                }
                action={
                  <Avatar
                    sx={{ margin: 2, marginBottom: 0, width: 30, height: 30 }}
                  >
                    R
                  </Avatar>
                }
              />
              <div style={{ marginLeft: "8px" }}>
                <Typography fontSize="12px" variant="body2">
                  {item.address}
                </Typography>
                <Typography fontSize="12px" variant="body2">
                  MS asdfds
                </Typography>
                <Typography variant="body1" color="primary">
                  Description
                </Typography>
                <Typography fontSize="12px" variant="body2">
                  {item.name2}
                </Typography>
                <Typography fontSize="12px" variant="body2">
                  MS asdfds
                </Typography>
              </div>
            </Card>
          </Card>
        </>
      ))}
    </div>
  );
};

export default CardItem;
