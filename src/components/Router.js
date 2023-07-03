import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Pages/Login";
import Signup from "../components/Pages/Signup";
import Layout from "./Layout";
import Home from "./Pages/Home";
import Main from "./Pages/Main";
import Quize from "./Pages/Quize";
import Result from "./Pages/Result";
export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: (
          <Layout>
            <Home></Home>
          </Layout>
        ),
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/quiz",
        element: <Quize></Quize>,
      },
      {
        path: "/result",
        element: <Result></Result>,
      },
    ],
  },
]);
