import React from "react";
import Candidate from "./Candidate";

export default function Candidates({ city, votes, candidates }) {
  
  function getCandidate(vote) {
    return candidates.find((candidate) => candidate.id === vote.candidateId);
  }

  function orderVotes() {
    return votes.sort((a, b) => b.votes - a.votes)
  }

  return (
    <div className="flex flex-row flex-wrap justify-center">
      {orderVotes().map((vote, index) => {
        return (
          <div className="m-3" key={vote.id}>
            <Candidate candidate={getCandidate(vote)} vote={vote} city={city} elected={index === 0}></Candidate>
          </div>
        );
      })}
    </div>
  );
}
