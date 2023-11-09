import React from "react"; 
import { Link } from "react-router-dom";

const Suggestion = ({CardId}) =>{

    return(
        <div className="border-solid border-2 m-4 ">
            {/* <p>
            CardId: {CardId} 
            </p> */}
            <img src="frontend/assets/mainImage.jpeg"/>
            {/*더미 이미지 | to do 카드 DB에서 이미지 가져오기*/}
            <p>
            name:
            </p>
            <p>
            proposal: 
            </p>
            <p>
            reason:
            </p>
            <Link to={`/CardInfo/${CardId}`}>
                view detail
            </Link>
        </div>
    );
}

export {Suggestion};