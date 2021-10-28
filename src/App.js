import "./App.css";
import Layout from "./components/Layout";
import ListPage from "./pages/ListPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Switch>
            <Route path="/" component={ListPage} />
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
