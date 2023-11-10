
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


/*
 * Connect2ic provides essential utilities for IC app development
 */
import { createClient } from "@connect2ic/core"
import { defaultProviders } from "@connect2ic/core/providers"
import { ConnectButton, ConnectDialog, Connect2ICProvider } from "@connect2ic/react"
import "@connect2ic/core/style.css"
import { Link } from "react-router-dom"
import DataSet from "../frontend/cardsData"


import * as counter from "../.dfx/local/canisters/counter"
import * as cardpack from "../.dfx/local/canisters/cardpack"
import * as gameLogic from "../.dfx/local/canisters/gameLogic"




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
    
  },,

    ]
  },

]);


const client = createClient({
  canisters: {
    counter,
    cardpack,
    gameLogic,

  },
  providers: defaultProviders,
  globalProviderConfig: {
    /*
     * Disables dev mode in production
     * Should be enabled when using local canisters
     */
    dev: import.meta.env.DEV,
  },
})


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <Connect2ICProvider client={client}>

    <RouterProvider router={router} />
  </Connect2ICProvider>

  </React.StrictMode>
)

;

