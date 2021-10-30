import "./App.css";
import Layout from "./components/Layout";
import ListPage from "./pages/ListPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login" component={LoginPage} />

          <Route
            path="/"
            render={() => (
              <Layout>
                <ListPage />
              </Layout>
            )}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
