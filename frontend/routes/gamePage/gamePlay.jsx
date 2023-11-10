import React, { useEffect, useState } from "react"
import GameHalfBottom from "./gameHalf/GameHalfBottom";
import { timeout } from "@dfinity/agent/lib/cjs/polling/strategy";
import GameHalfTop from "./gameHalf/GameHalfTop";


export default function(){
    const [isReady, setIsReady] =useState(false);
    const [whoseTurn, setWhoseTurn] =useState(true);
    const [blueTeamStatus,setBlueTeamStatus] =useState("");
    const [redTeamStatus, setRedTeamStatus]=useState("");

    async function Loading(){
        setIsReady(true);
        setTimeout(()=>{
            setIsReady(false);},2000);
    }
    useEffect(  ()=>{
       gameManager();
       gameManagerRed();
      
    },[])

    const gameManagerRed= async()=>{{
        await Loading();
        if(redTeam.hand.length===0)redTeam.gameStart();im
    }}


    const gameManager= async()=>{{
        await Loading();
        if(blueTeam.hand.length===0)blueTeam.gameStart();im
    }}


    const redTeam={
      
            id:"권택용",
            hand:[],
            money:1,
            deck:[{name:"안녕 석사",cost:5,img:"/frontend/assets/card15.jpeg",description:"1/2 안녕로봇을 둘 소환합니다"}, 
            {name:"박기사",img:"/frontend/assets/card16.jpeg",cost:2, description:"1/1 성기사 신병을 소환합니다"}, 
            {name:"박붐",img:"/frontend/assets/card17.jpeg",cost:7, description:"1/1 미니폭탄을 둘 소환합니다"},
            {name:"감염된 태굥",img:"/frontend/assets/card18.jpeg",cost:1, description:"하하"},
            {name:"s7 요원",img:"/frontend/assets/card19.jpeg",coset:3, description:"안녕하세요"}],
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
                this.pullCard();   
                setRedTeamStatus(this); 
            },
            takeCardOnField(newHand,newField,cost){
                this.hand=newHand;
                this.Field=newField;
                this.money-=cost; 
            },
            field:[],
        }
    //red team, 조절 객체, 캐니스터로 배포 예정

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
    //red team, 조절 객체, 캐니스터로 배포 예정

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
                <GameHalfTop status={redTeamStatus} cardOnField={redTeamStatus.takeCardOnField} turn={whoseTurn}/>
            </div>
            <div className="flex justify-between ">
                <div>
            <dutton className="text-black bg-orange-600 hover:cursor-pointer ">공격!!</dutton>
            </div>
            
            <div>
                <dutton onClick={()=>{setWhoseTurn(!whoseTurn); console.log(whoseTurn)}} className="text-black bg-orange-600 hover:cursor-pointer ">턴 종료</dutton>
            </div></div>
            <div className="border h-full border-black hover:cursor-pointer ">
                <GameHalfBottom status={blueTeamStatus} cardOnField={blueTeamStatus.takeCardOnField} turn={whoseTurn} />
            </div>
    </div>)
}