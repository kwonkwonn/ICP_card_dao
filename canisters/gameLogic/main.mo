import Type "../type";
import Bool "mo:base/Bool";
import Buffer "mo:base/Buffer";
import Array "mo:base/Array";
import Blob "mo:base/Blob";
import Nat "mo:base/Nat";
import Debug "mo:base/Debug";
import cardStorage "canister:cardpack";

actor class gameLogic(){
    let initA=12;
    var health=30;
    let deck= Buffer.Buffer<Type.Card>(20);
    let hand =Buffer.Buffer<Type.Card>(10);
    let field=Buffer.Buffer<Type.Card>(10);


    public func pullDeck():() {
         let MuAa= Buffer.fromArray<Type.Card>(await cardStorage.getAllCard());
         deck.append(MuAa);
    };
    public func requireDeck():async [Type.Card]{
        await cardStorage.getAllCard();
    };

    func draw():Nat{
        let x= deck.remove(0);
        hand.add(x);
        return 3;

    };

    func putOnField(cardOut: Type.Card):Nat{
        Debug.print("heelo");
        return 3;

    };
    
    func attack(attacker:Type.Card, Receiver:Type.Card):Nat{
        Debug.print("heelo");
        return 3;

    }





}