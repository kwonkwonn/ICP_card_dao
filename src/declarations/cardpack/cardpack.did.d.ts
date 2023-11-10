import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface Card {
  'atk' : bigint,
  'dfs' : bigint,
  'cost' : bigint,
  'desc' : string,
  'name' : string,
  'cardId' : bigint,
}
export interface CardPack {
  'addCard' : ActorMethod<[Card], undefined>,
  'getAllCard' : ActorMethod<[], Array<Card>>,
  'getCard' : ActorMethod<[bigint], Card>,
  'updatCardDfs' : ActorMethod<[bigint, bigint], undefined>,
  'updateCardAtk' : ActorMethod<[bigint, bigint], undefined>,
  'updateCardCost' : ActorMethod<[bigint, bigint], undefined>,
  'updateCardDescription' : ActorMethod<[bigint, string], undefined>,
  'updateCardName' : ActorMethod<[bigint, string], undefined>,
}
export interface _SERVICE extends CardPack {}
