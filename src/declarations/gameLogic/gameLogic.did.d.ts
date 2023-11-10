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
export interface gameLogic {
  'pullDeck' : ActorMethod<[], undefined>,
  'requireDeck' : ActorMethod<[], Array<Card>>,
}
export interface _SERVICE extends gameLogic {}
