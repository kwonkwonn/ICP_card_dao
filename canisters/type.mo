import Text "mo:base/Text";
import Nat "mo:base/Nat";
module {
    
     public  type Card = {
    cardId : Nat;
    name : Text;
    cost : Nat;
    atk : Nat;
    dfs : Nat;
    desc : Text;
    };

    //setters
    public func setCardName(c : Card, n : Text) : Card {
        return {cardId = c.cardId; name = n; cost = c.cost; atk = c.atk; dfs = c.dfs; desc = c.desc};
    };
    public func setCardCost(c : Card, n : Nat) : Card {
        return {cardId = c.cardId; name = c.name; cost = n; atk = c.atk; dfs = c.dfs; desc = c.desc};
    };
    public func setCardAtk(c : Card, n : Nat) : Card {
        return {cardId = c.cardId; name = c.name; cost = c.cost; atk = n; dfs = c.dfs; desc = c.desc};
    };
    public func setCardDfs(c : Card, n : Nat) : Card {
        return {cardId = c.cardId; name = c.name; cost = c.cost; atk = c.atk; dfs = n; desc = c.desc};
    };
    public func setCardDesc(c : Card, n : Text) : Card {
        return {cardId = c.cardId; name = c.name; cost = c.cost; atk = c.atk; dfs = c.dfs; desc = n};
    };
}; 

