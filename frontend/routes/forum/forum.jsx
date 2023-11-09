import React from "react"
import {Suggestion} from "../../components/forum/Suggestion"
export default function Forum(){

    return(
        <div className="text-black ">
            <div className="mt-20 ml-4 font-bold">
            너프해주세요
            </div>
            <div className="grid grid-rows-3 grid-col-3 grid-flow-col gap-4">
                <Suggestion CardId={1}/>
                <Suggestion CardId={2}/>
                <Suggestion CardId={3}/>
                <Suggestion CardId={4}/>
                <Suggestion CardId={5}/>
                <Suggestion CardId={6}/>
                <Suggestion CardId={7}/>
                <Suggestion CardId={8}/>
                <Suggestion CardId={9}/>
                {/*9개 이상은 상세 페이지에서 */}
            </div>
            <div className="flex justify-end mr-4">
            <button className="border py-2 rounded-xl hover:bg-yellow-400 border-black">
                더 많은 너프 건의 보기
            </button>
            </div>

            <p className="mt-20 ml-4 font-bold">
            버프해주세요
            </p>
            <div className="grid grid-rows-3 grid-col-3 grid-flow-col gap-4">
                <Suggestion CardId={1}/>
                <Suggestion CardId={2}/>
                <Suggestion CardId={3}/>
                <Suggestion CardId={4}/>
                <Suggestion CardId={5}/>
                <Suggestion CardId={6}/>
                <Suggestion CardId={7}/>
                <Suggestion CardId={8}/>
                <Suggestion CardId={9}/>
                {/*9개 이상은 상세 페이지에서 */}
            </div>
            <div className="flex justify-end mr-4">
            <button className="border py-2 rounded-xl hover:bg-yellow-400 border-black">
                더 많은 버프 건의 보기
            </button>
            </div>
        </div>
    );
}