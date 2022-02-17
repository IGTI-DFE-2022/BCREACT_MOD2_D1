import React from "react";

export default function CityStatistics({city, numOfCandidates}) {

  if (!city) {
    return <div>No City Selected</div>
  }

  let {
    votingPopulation,
    absence,
    presence,
  } = city;

  return (
    <>
      <div className="flex flex-row space-x-5 text-sm">
        <div className="space-x-3">
          <span className="font-bold">Total de eleitores:</span>
          <span>{votingPopulation.toLocaleString()}</span>
        </div>

        <div className="space-x-3">
          <span className="font-bold">Abstenções:</span>
          <span>{absence.toLocaleString()}</span>
        </div>

        <div className="space-x-3">
          <span className="font-bold">Comparecimentos:</span>
          <span>{presence.toLocaleString()}</span>
        </div>
      </div>
      <div className="text-sm">{numOfCandidates} Candidatos</div>
    </>
  );
}
