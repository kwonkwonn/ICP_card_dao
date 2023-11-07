import { Outlet } from "react-router";
import React from "react";
import Header from "../components/header/header";
export default function Root(){

    return( <div>
        <Header /> 
       
        <Outlet/>
    </div>)
}