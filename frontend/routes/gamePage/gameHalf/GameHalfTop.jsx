import React, { useEffect, useState } from "react"
import CardHand from "../componenets/card";
import CardField from "../componenets/cardField";

export default function GameHalfBottom({status, cardOnField ,turn }){
    const [hand, setHand] = useState([]);
    const [field,setfield]=useState([]);
    const [cardDetail, setCardDetail] = useState("");
    const [goButton, setGoButton]=useState(<button className="text-black border-2 rounded-md py-1 px-2 w-32 border-black"type="button">낼 카드를 선택하세요</button>)

    useEffect(()=>{setHand(status.hand);console.log(field)},[])
    
    const handCardClicked=(info)=>{
        const index= hand.indexOf(info);   
        setGoButton(<button className="text-black border-2 w-32 rounded-md py-1 px-2 border-black"type="button" 
        onClick={()=>{
            const cardOut=hand.splice(index, 1);
            setfield([...field,cardOut[0]]);
            setGoButton(<button className="text-black border-2 rounded-md py-1 px-2 w-32 border-black"type="button">낼 카드를 선택하세요</button>);
            cardOnField(hand,[...field,cardOut[0]],2);
        }}>내기</button>)
        
    }

    const changeDatail=(info)=>{
        setCardDetail(info);
    }

    return(
        <div className=" w-full h-full flex flex-col-reverse ">
            <div className="h-3/4 flex  w-full border border-black">
              
                {cardDetail===""?<div></div>:<div className="absolute  border-4 rounded-xl w-52 h-72 ml-12 mt-2 border-black text-black">
                    <div className="w-11/12 m-auto mt-1"><img src={cardDetail.img} className="" alt="12"/>
                    <p className="text-xl font-bold">{cardDetail.name}</p>
                    <p>{cardDetail.description}</p></div></div>
                    }
              
              <div className="flex w-full  gap-2 h-1/2 justify-center items-center">
                    {field.map((el)=>
                        (
                            <CardField infoChanger={changeDatail} info={el}/>
                        ))}
                    </div>
                    </div>
            <div className="h-1/4 w-full flex justify-around  ">
                <div className="  w-28 overflow-hidden rounded-2xl border-4 relative border-black">
                    <img src="/frontend/assets/card12.jpeg" className=" object-cover" alt="you"></img>
                        <p>{status.id}</p>
                     </div>
                {turn?<div></div>:<div className="flex w-1/2 gap-4 h-full justify-center">
                    {hand.map((el)=>
                        (
                            <CardHand whenClicked={handCardClicked} infoChanger={changeDatail} info={el}/>
                        ))}
                    </div>}
                    <div>
                        {goButton}
                    </div>
                </div> 
        </div>
    )
}


  //출처 <a href="https://kr.freepik.com/free-photo/wooden-table-background_3513521.htm">Freepik</a>
