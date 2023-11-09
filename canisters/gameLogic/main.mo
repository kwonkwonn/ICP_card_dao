import Type "../type";
import Bool "mo:base/Bool";
import Buffer "mo:base/Buffer";
import Array "mo:base/Array";

actor class gameLogic(initA: Nat){
    var exampleCard : Type.Card={
        cardId=0;
        name="";
        cost=0;
        atc=0;
        dfs=0;
        desc="";
    };
    var health=30;
    var deck= Buffer.Buffer<Type.Card>(20);
    let hand= Array.init<Type.Card>(10,exampleCard);
    let field= Array.init<Type.Card>(10,exampleCard);


    func pullDeck(){

    };

    func draw(){

    };

    func putOnField(){

    };
    
    func attack(){

    }





}