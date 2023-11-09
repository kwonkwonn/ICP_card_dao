import Buffer "mo:base/Buffer";
import Array "mo:base/Array";


module{
    public type Card={
        cardId:Nat;
        name:Text;
        cost:Nat;
        atc:Nat;
        dfs:Nat;
        desc:Text;
    };

}
//     public type gameStatus={
//         idBlue:Nat;
//         idRed:Nat;
//         healthRed:Nat;
//         healthBlue:Nat;

//         deckBlue: Buffer.Buffer<Card>;
//         deckRed: Buffer.Buffer<Card>;
//         handBlue:[Card];
//         handRed:[Card];
//         fieldBlue:[Card];
//         fieldRed:[Card];
        
    
         
// }}