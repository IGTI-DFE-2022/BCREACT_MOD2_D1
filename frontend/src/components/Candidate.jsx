import React from "react";

export default function Candidate({ candidate, vote, city, elected = false }) {

  function calculatePercentual() {
    return 100.0 * vote.votes / city.presence;
  }

  function getColor() {
    return elected ? 'text-green-600' : 'text-red-500';
  }

  return (
    <div className="w-48 h-48 border flex flex-col items-center justify-between  p-5">
      <div className="flex flex-row items-center justify-between space-x-3 w-full">
        <img
          src={`/img/${candidate.name}.png`}
          className="w-12 h-12 rounded-full"
        ></img>
        <div className="text-right">
          <div className={`font-semibold text-md ${getColor()}`}>{calculatePercentual().toFixed(2)} %</div>
          <div className={`text-xs`}>{vote.votes.toLocaleString()} votos</div>
        </div>
      </div>

      <div className="text-lg">{candidate.name}</div>

      <div className={`text-md ${getColor()}`}>{elected ? 'Eleito' : 'Não Eleito'}</div>

    </div>
  );
}
