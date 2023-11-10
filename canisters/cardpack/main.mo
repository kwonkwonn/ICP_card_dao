import Type "../type";
import Buffer "mo:base/Buffer";
import Nat "mo:base/Nat";
import Text "mo:base/Text";
import Array "mo:base/Array";

/*
카드 추가, 카드 수정, 카드 삭제, 카드 검색, 카드 리스트
*/
shared actor class CardPack(){
    //버퍼
    let deck = Buffer.Buffer<Type.Card>(20);
    //카드 추가
    public func addCard(card:Type.Card){
        deck.add(card);
        
    };
    //카드 수정
    public func updateCardName(cardId: Nat, newName: Text){//카드 이름 수정
        let newCard = Type.setCardName(deck.get(cardId), newName);
        deck.put(cardId, newCard);
    };
    public func updateCardDescription(cardId: Nat, newDescription: Text){//카드 설명 수정
        let newCard = Type.setCardDesc(deck.get(cardId), newDescription);
        deck.put(cardId, newCard);
    };
    public func updateCardAtk(cardId: Nat, newAtk: Nat){//카드 공격력 수정
        let newCard = Type.setCardAtk(deck.get(cardId), newAtk);
        deck.put(cardId, newCard);
    };
    public func updatCardDfs(cardId: Nat, newDfs: Nat){//카드 방어력 수정
        let newCard = Type.setCardDfs(deck.get(cardId), newDfs);
        deck.put(cardId, newCard);
    };
    public func updateCardCost(cardId: Nat, newCost: Nat){//카드 코스트 수정
        let newCard = Type.setCardCost(deck.get(cardId), newCost);
        deck.put(cardId, newCard);
    };
    public func getCard(cardId: Nat): async Type.Card{ //카드 검색
        return deck.get(cardId);
    };
    public func getAllCard(): async [Type.Card] { //카드 리스트
        let Arra= Array.freeze<Type.Card>(Buffer.toVarArray<Type.Card>(deck));
        
    };
};
        

    

