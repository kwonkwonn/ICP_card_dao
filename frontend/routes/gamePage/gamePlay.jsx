import React, { useEffect, useState } from "react"
import GameHalfBottom from "./gameHalf/GameHalfBottom";
import { timeout } from "@dfinity/agent/lib/cjs/polling/strategy";
import GameHalfTop from "./gameHalf/GameHalfTop";


export default function(){
    const [isReady, setIsReady] =useState(false);
    const [whoseTurn, setWhoseTurn] =useState("blue");
    const [blueTeamStatus,setBlueTeamStatus] =useState("");

    async function Loading(){
        setIsReady(true);
        setTimeout(()=>{
            setIsReady(false);},2000);
    }
    useEffect(  ()=>{
       gameManager();
       while(redTeam.health>0 || blueTeam.health>0){

       }
    },[])

    const gameManager= async()=>{{
        await Loading();
        if(blueTeam.hand.length===0)blueTeam.gameStart();
    }}


    const redTeam={
        id:"",
        health:30, 
    }

    const blueTeam={
        id:"권택용",
        hand:[],
        money:1,
        deck:[{name:"안녕 박사",cost:5,img:"/frontend/assets/card1.jpeg",description:"1/2 안녕로봇을 둘 소환합니다"}, 
        {name:"성기사",img:"/frontend/assets/card2.jpeg",cost:2, description:"1/1 성기사 신병을 소환합니다"}, 
        {name:"박사붐",img:"/frontend/assets/card3.jpeg",cost:7, description:"1/1 미니폭탄을 둘 소환합니다"},
        {name:"감염된 노움",img:"/frontend/assets/card4.jpeg",cost:1, description:"상대 영웅에게 2데미지를 줍니다"},
        {name:"s7 요원",img:"/frontend/assets/card1.jpeg",coset:3, description:"안녕하세요"}],
        health:30,
        pullCard(){
            let popped = this.deck.pop();
            this.hand.push(popped);
            console.log(this.hand);
        },
        gameStart(){
            this.pullCard();
            this.pullCard();    
            this.pullCard();    
            this.pullCard();   
            setBlueTeamStatus(this); 
        },
        takeCardOnField(newHand,newField,cost){
            this.hand=newHand;
            this.Field=newField;
            this.money-=cost; 
        },
        field:[],
    }

    if(isReady){
        return(<div className="w-screen h-screen pt-80 bg-black">
            <div className="w-1/2 m-auto h-80 ">
                <p className="text-5xl">Please Wait...</p>
                
            </div>
        </div>)
    }



    return (
    <div className=" m-auto h-screen top-0 left-0 flex flex-col w-8/12 border border-black">    
            <div className="border h-full border-black">
                <GameHalfTop/>
            </div>
            <div className="border h-full border-black">
                <GameHalfBottom status={blueTeamStatus} cardOnField={blueTeamStatus.takeCardOnField} />
            </div>
    </div>)
}