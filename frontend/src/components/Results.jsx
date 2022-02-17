import React, { useEffect, useState } from "react";
import { getCities, getCandidates, getVotes } from "../services/apiService";

import CitySelector from "./CitySelector";
import CityStatistics from "./CityStatistics";

export default function Results() {
  const [cities, setCities] = useState([]);
  const [selectedCityId, setSelectedCityId] = useState(0);
  const [candidates, setCandidates] = useState([]);
  const [votes, setVotes] = useState([]);

  useEffect(() => {
    async function fetchCities() {
      let cities = await getCities()
      setCities(cities.data);

    }
    fetchCities()
  }, []);

  useEffect(() => {
    async function fetchCandidates() {
      let candidates = await getCandidates()
      setCandidates(candidates.data);
    }
    fetchCandidates()
  }, []);

  useEffect(() => {
    async function fetchVotes() {
      if (!cities[selectedCityId]) {
        return;
      }
      let votes = await getVotes(cities[selectedCityId].id)
      console.log(votes.data);
      setVotes(votes.data)
    }
    fetchVotes()
  }, [cities]);

  function handleCityChange(cityId) {
    let index = cities.findIndex(c => c.id === cityId);
    setSelectedCityId(index)
  }

  return (
    <div className="flex flex-col items-center space-y-3">
      <CitySelector cities={cities} onSelectCity={handleCityChange}></CitySelector>
      <CityStatistics city={cities[selectedCityId]} numOfCandidates={votes.length}></CityStatistics>
    </div>
  );
}
