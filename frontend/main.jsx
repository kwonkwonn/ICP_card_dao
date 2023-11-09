
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App"
import Root from "./routes/root";
import Forum from "./routes/forum/forum";
import GamePlay from "./routes/gamePage/gamePlay";

const router = createBrowserRouter([
  {path:"/GamePlay",
  element:<GamePlay/>},
  {
    path: "/",
    element: <Root />,
    children:[
      {path:"/",
    element:<App />,
  },{
    path:"/Forum",
    element:<Forum />,
  },{
    path:"/CardInfo",
    
  }

    ]
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);