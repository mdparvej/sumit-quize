import { RouterProvider } from "react-router-dom";
import "../styles/App.css";
import { Router } from "./Router";
function App() {
  return (
    <div className="App">
      <RouterProvider router={Router}></RouterProvider>
    </div>
  );
}

export default App;
