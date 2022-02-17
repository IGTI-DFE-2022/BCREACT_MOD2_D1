import React, { useEffect, useState } from "react";
import { getCities } from "../services/apiService";

import CitySelector from "./CitySelector";
import CityStatistics from "./CityStatistics";

export default function Results() {
  const [cities, setCities] = useState([]);
  const [selectedCityId, setSelectedCityId] = useState(0);
  // const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    async function fetchMyAPI() {
      let cities = await getCities()
      console.log(cities.data);
      setCities(cities.data);
    }

    fetchMyAPI()
  }, []);

  function handleCityChange(cityId) {
    let index = cities.findIndex(c => c.id === cityId);
    setSelectedCityId(index)
  }

  return (
    <div className="flex flex-col items-center space-y-3">
      <CitySelector cities={cities} onSelectCity={handleCityChange}></CitySelector>
      <CityStatistics city={cities[selectedCityId]}></CityStatistics>
    </div>
  );
}
