import React from "react"; 
import { Link } from "react-router-dom";

const Suggestion = ({CardId}) =>{

    return(
        <div className="border-solid border-2 m-4 ">
            <Link to={`/CardInfo/${CardId}`} className="w-30">
                <img src={`frontend/assets/card${CardId}.jpeg`}/>
            </Link>
            <p>
            name:
            </p>
            <p>
            proposal: 
            </p>
            <p>
            reason:
            </p>
            <div className="flex justify-around">
            <button className="text-green-400 font-bold">
                agree
            </button>
            <button className="text-red-400 font-bold">
                reject
            </button>
            </div>
        </div>
    );
}

export {Suggestion};