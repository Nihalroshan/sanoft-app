import {
  Card,
  Grid,
  Typography,
  TextField,
  Button,
  Alert,
} from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router";

const LoginPage = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      userName: userName,
      password: password,
    };
    try {
      const { data } = await axios.post(
        "http://localhost:3001/api/users",
        user
      );
      localStorage.setItem("user", data.userName);
      history.push("/");
    } catch (err) {
      if (err.response && err.response.status === 400)
        setError(err.response.data);
    }
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "grid",
        placeItems: "center",
      }}
    >
      <Card elevation={3} sx={{ width: "60vw", height: "70vh", margin: 10 }}>
        <Grid container>
          <Grid sx={{ padding: "50px" }} md={6} lg={6} item>
            <Typography textAlign="center" variant="h3">
              Login
            </Typography>
            <form
              onSubmit={handleSubmit}
              style={{ marginTop: "10px" }}
              noValidate
              autoComplete="off"
            >
              <Typography variant="subtitle1">Username</Typography>
              <TextField
                onChange={(e) => setUserName(e.target.value)}
                fullWidth
                label="Type your Username"
                variant="standard"
              />
              <Typography variant="subtitle1">Password</Typography>
              <TextField
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
                label="Type your Password"
                variant="standard"
              />
              {error && <Alert severity="error">{error}</Alert>}

              <Button
                type="submit"
                style={{ marginTop: "40px" }}
                fullWidth
                variant="contained"
                color="primary"
              >
                Login
              </Button>
            </form>
          </Grid>
          <Grid
            md={6}
            lg={6}
            item
            sx={{ display: "grid", placeItems: "center" }}
          >
            <img
              style={{ width: 350 }}
              src="/undraw_secure_login_pdn4.svg"
              alt=""
            />
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};

export default LoginPage;
