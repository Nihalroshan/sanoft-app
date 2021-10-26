import "./App.css";
import Layout from "./components/Layout";
import ListPage from "./pages/ListPage";

function App() {
  return (
    <div className="App">
      <Layout>
        <ListPage />
      </Layout>
    </div>
  );
}

export default App;
