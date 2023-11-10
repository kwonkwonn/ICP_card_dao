import Result "mo:base/Result";
import Trie "mo:base/Trie";
import Int "mo:base/Int";
import Nat "mo:base/Nat";
import List "mo:base/List";
import Principal "mo:base/Principal";

module {
  public type Result<T, E> = Result.Result<T, E>;
  public type Account = { owner : Principal; tokens : Tokens };
  public type Proposal = {
    id : Nat; //제안 번호
    votes_no : Tokens; //투표수 
    voters : List.List<Principal>; //투표자 목록
    state : ProposalState; //제안 상태
    timestamp : Int; //제안 시간
    proposer : Principal; //제안자
    votes_yes : Tokens; //동의 투표수
    payload : ProposalPayload; 
  };
  public type ProposalPayload = {
    method : Text; //제안 내용
    canister_id : Principal; //캐니스터 ID
    message : Blob;
  };
  public type ProposalState = {
      #failed : Text; //실패
      #open; //열람
      #executing; //실행중
      #rejected; //거절
      #succeeded; //성공
      #accepted; //승인
  };
  public type Tokens = { amount_e8s : Nat };
  public type TransferArgs = { to : Principal; amount : Tokens };
  public type UpdateSystemParamsPayload = {
    transfer_fee : ?Tokens;
    proposal_vote_threshold : ?Tokens;
    proposal_submission_deposit : ?Tokens;
  };
  public type Vote = { #no; #yes };
  public type VoteArgs = { vote : Vote; proposal_id : Nat };

  public type SystemParams = {
    transfer_fee: Tokens;

    // The amount of tokens needed to vote "yes" to accept, or "no" to reject, a proposal
    proposal_vote_threshold: Tokens;

    // The amount of tokens that will be temporarily deducted from the account of
    // a user that submits a proposal. If the proposal is Accepted, this deposit is returned,
    // otherwise it is lost. This prevents users from submitting superfluous proposals.
    proposal_submission_deposit: Tokens;
  };
  public type CardDaoStableStorage = {
    accounts: [Account];
    proposals: [Proposal];
    system_params: SystemParams;
  };

  public func proposal_key(t: Nat) : Trie.Key<Nat> = { key = t; hash = Int.hash t };
  public func account_key(t: Principal) : Trie.Key<Principal> = { key = t; hash = Principal.hash t };
  public func accounts_fromArray(arr: [Account]) : Trie.Trie<Principal, Tokens> {
      var s = Trie.empty<Principal, Tokens>();
      for (account in arr.vals()) {
          s := Trie.put(s, account_key(account.owner), Principal.equal, account.tokens).0;
      };
      s
  };
  public func proposals_fromArray(arr: [Proposal]) : Trie.Trie<Nat, Proposal> {
      var s = Trie.empty<Nat, Proposal>();
      for (proposal in arr.vals()) {
          s := Trie.put(s, proposal_key(proposal.id), Nat.equal, proposal).0;
      };
      s
  };
  
  public let oneToken = { amount_e8s = 10_000_000 };
  public let zeroToken = { amount_e8s = 0 };  
}