import Text "mo:base/Text";
import Nat "mo:base/Nat";

// class Card(cardId: Nat, name: Text, atk: Nat, dfs: Nat, desc: Text){
//     private var cardId_ : Nat = cardId;
//     private var name_ : Text = name;
//     private var atk_ : Nat = atk;
//     private var dfs_ : Nat = dfs;
//     private var desc_ : Text = desc;

//     //getters
//     public func getCardId() : Nat {
//         return cardId_;
//     };
//     public func getName() : Text {
//         return name_;
//     };
//     public func getAtk() : Nat {
//         return atk_;
//     };
//     public func getDfs() : Nat {
//         return dfs_;
//     };
//     public func getDesc() : Text {
//         return desc_;
//     };

//     //setters
//     public func setName(newName : Text) {
//         name_ := newName;
//     };
//     public func setAtk(newAtk : Nat) {
//         atk_ := newAtk;
//     };
//     public func setDfs(newDfs : Nat) {
//         dfs_ := newDfs;
//     };
//     public func setDesc(newDesc : Text) {
//         desc_ := newDesc;
//     };

//  }
module {
    public type Card = {
    var cardId : Nat;
    var name : Text;
    var cost : Nat;
    var atk : Nat;
    var dfs : Nat;
    var desc : Text;
    };
    public func changeCardName(card : Card, newName : Text) : Card {
        card.name := newName;
        return card;
    };
    public func changeCardCost(card : Card, newCost : Nat) : Card {
        card.cost := newCost;
        return card;
    };
    public func changeCardAtk(card : Card, newAtk : Nat) : Card {
        card.atk := newAtk;
        return card;
    };
    public func changeCardDfs(card : Card, newDfs : Nat) : Card {
        card.dfs := newDfs;
        return card;
    };
    public func changeCardDesc(card : Card, newDesc : Text) : Card {
        card.desc := newDesc;
        return card;
    };
};   

