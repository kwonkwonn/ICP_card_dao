import React from "react";

export default function CardField({info, infoChanger}){
    

    return(
        <div onDrag={()=>{console.log(info)}} className="w-32  h-full bg-yellow-400  border-2 border-black rounded-md text-black  hover:-translate-y-4 hover:cursor-pointer">
            <img src={info.img} className="w-28 m-auto" onMouseMove={()=>{infoChanger(info)}} onMouseLeave={()=>{infoChanger("")}} alt="12"/>
            {info.name}            
        </div>
    )

}