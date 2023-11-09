import { useCanister } from "@connect2ic/react";
import React,{useEffect,useState} from "react"

export const Storage=()=>{
    const [cardpack] =useCanister("cardpack");


    const addCard= async ()=>{
        const card={
            ardId:32, name:"a", cost:2, atk:2, dfs:2, desc:"a",
        }
        console.log(cardpack);
        await cardpack.addCard(card);
    }

    return<button onClick={addCard}>sadfssdafsfafsad</button>
    
    
}