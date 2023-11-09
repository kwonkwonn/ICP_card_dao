export const idlFactory = ({ IDL }) => {
  const Card = IDL.Record({
    'atk' : IDL.Nat,
    'dfs' : IDL.Nat,
    'cost' : IDL.Nat,
    'desc' : IDL.Text,
    'name' : IDL.Text,
    'cardId' : IDL.Nat,
  });
  const CardPack = IDL.Service({
    'addCard' : IDL.Func([Card], [], ['oneway']),
    'getCard' : IDL.Func([IDL.Nat], [Card], []),
    'updatCardDfs' : IDL.Func([IDL.Nat, IDL.Nat], [], ['oneway']),
    'updateCardAtk' : IDL.Func([IDL.Nat, IDL.Nat], [], ['oneway']),
    'updateCardCost' : IDL.Func([IDL.Nat, IDL.Nat], [], ['oneway']),
    'updateCardDescription' : IDL.Func([IDL.Nat, IDL.Text], [], ['oneway']),
    'updateCardName' : IDL.Func([IDL.Nat, IDL.Text], [], ['oneway']),
  });
  return CardPack;
};
export const init = ({ IDL }) => { return []; };
