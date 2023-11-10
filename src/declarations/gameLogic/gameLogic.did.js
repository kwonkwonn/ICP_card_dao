export const idlFactory = ({ IDL }) => {
  const Card = IDL.Record({
    'atk' : IDL.Nat,
    'dfs' : IDL.Nat,
    'cost' : IDL.Nat,
    'desc' : IDL.Text,
    'name' : IDL.Text,
    'cardId' : IDL.Nat,
  });
  const gameLogic = IDL.Service({
    'pullDeck' : IDL.Func([], [], ['oneway']),
    'requireDeck' : IDL.Func([], [IDL.Vec(Card)], []),
  });
  return gameLogic;
};
export const init = ({ IDL }) => { return []; };
