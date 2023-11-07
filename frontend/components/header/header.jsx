import { Link } from "react-router-dom";
import React from "react";

export default function Header(){
    return(
        <div className="fixed top-0 w-full  z-10 ">
        <div className="flex font-semibold  justify-around h-16 bg-black opacity-80 border-black border-b items-center bg-opacitiy-10 ">
            <div className="flex gap-4  text-xl">
                <Link to="/" className="text-white hover:text-yellow-400">더 재미스</Link>
                <Link to="/Forum" className="text-white hover:text-yellow-400">FORUM</Link>
                <Link to="/" className="text-white hover:text-yellow-400">CARD SUGGESTION</Link>
            </div>
            <div>
                <button type="button" className="text-base border py-2 px-3 rounded-xl hover:border-yellow-400 hover:text-yellow-400 text-white  border-white"> CONNECT WALLET</button>
            </div>

        </div>

        </div>
    ) 
}