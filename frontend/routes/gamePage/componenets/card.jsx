import React from "react";

export default function CardHand({info, infoChanger, whenClicked}){
    

    return(
        <div onClick={()=>{whenClicked(info)}} className="w-24  h-full bg-yellow-400  border-2 border-black rounded-md text-black  hover:-translate-y-4 hover:cursor-pointer">
            <img src={info.img} className="w-20 m-auto" onMouseMove={()=>{infoChanger(info)}} onMouseLeave={()=>{infoChanger("")}} alt="12"/>
            {info.name}            
        </div>
    )

}