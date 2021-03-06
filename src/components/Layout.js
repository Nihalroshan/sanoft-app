import {
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  AppBar,
  Toolbar,
  Button,
} from "@mui/material";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useHistory } from "react-router";

const drawerWidth = 230;

const drawerLinks = [
  {
    text: "Dashboard",
    leftIcon: <DashboardOutlinedIcon color="primary" />,
    rightIcon: "",
  },
  {
    text: "Users",
    leftIcon: <PeopleAltOutlinedIcon color="primary" />,
    rightIcon: "",
  },
  {
    text: "Products",
    leftIcon: <ShoppingCartIcon color="primary" />,
    rightIcon: <KeyboardArrowRightIcon color="primary" />,
  },
  {
    text: "Report",
    leftIcon: <AssessmentOutlinedIcon color="primary" />,
    rightIcon: <KeyboardArrowRightIcon color="primary" />,
  },
  {
    text: "Settings",
    leftIcon: <SettingsIcon color="primary" />,
    rightIcon: "",
  },
];

const Layout = ({ children }) => {
  const history = useHistory();

  const styles = {
    appbar: {
      backgroundColor: "white",
      width: `calc(100% - ${drawerWidth}px)`,
      borderBottom: "1px solid #e0e0e0",
      height: "58px",
    },
    toolbar: {
      display: "flex",
      justifyContent: "flex-end",
    },
  };

  const handleLogout = () => {
    localStorage.clear();
    history.push("/login");
  };

  return (
    <div style={{ display: "flex" }}>
      <AppBar elevation={0} style={styles.appbar}>
        <Toolbar style={styles.toolbar}>
          <Button
            onClick={handleLogout}
            startIcon={<ExitToAppIcon />}
            variant="contained"
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <img
          style={{ margin: "12px", width: "160px", alignSelf: "center" }}
          src="/images/logo.jpeg"
          alt=""
        />
        <Divider />
        <List style={{ marginTop: "10px" }}>
          {drawerLinks.map((link) => (
            <ListItem
              key={link.text}
              onClick={(e) => console.log(e.target.innerText)}
              style={styles.list}
              button
            >
              <ListItemIcon>{link.leftIcon}</ListItemIcon>
              <ListItemText
                style={{ color: "#1769aa", fontWeight: "bolder" }}
                primary={link.text}
              />
              <ListItemIcon>{link.rightIcon}</ListItemIcon>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <div style={{ marginTop: "58px" }}>{children}</div>
    </div>
  );
};

export default Layout;
