import "../styles/App.css";
import Layout from "./Layout";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
function App() {
  return (
    <div className="App">
      <Layout>
        <Home></Home>
        <Signup></Signup>
        <Login></Login>
      </Layout>
    </div>
  );
}

export default App;
