import React from "react";
import Candidate from "./Candidate";

export default function Candidates({ city, votes, candidates }) {
  function getCandidate(vote) {
    return candidates.find((candidate) => candidate.id === vote.candidateId);
  }

  return (
    <div className="flex flex-row flex-wrap justify-center">
      {votes.map((vote) => {
        return (
          <div className="m-3">
            <Candidate candidate={getCandidate(vote)} vote={vote}></Candidate>
          </div>
        );
      })}
    </div>
  );
}
