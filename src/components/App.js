import "../styles/App.css";
import Layout from "./Layout";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
function App() {
  return (
    <div className="App">
      <Layout>
        <Home></Home>
        <Signup></Signup>
      </Layout>
    </div>
  );
}

export default App;
