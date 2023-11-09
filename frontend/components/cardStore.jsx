import { useCanister } from "@connect2ic/react";
import React,{useEffect,useState} from "react"

export const Storage=()=>{
    const [cardpack] =useCanister("cardpack");


    const addCard= async ()=>{
        const card={
            ardId:32, name:"a", cost:2, atk:2, dfs:2, desc:"a",
        }
        console.log(cardpack);
        await cardpack.addCard({atk:3, dfs:14, cost:56, desc:"rbh4fm", name:"tv9mb4", cardId:13});
    }

    return<button onClick={addCard}>sadfssdafsfafsad</button>
    
    
}