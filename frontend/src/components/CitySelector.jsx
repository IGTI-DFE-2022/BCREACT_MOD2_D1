import React, { useEffect, useState } from "react";
import { getCities } from "../services/apiService";

export default function CitySelector() {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    async function fetchMyAPI() {
      let cities = await getCities()
      console.log(cities.data);
      setCities(cities.data);
    }

    fetchMyAPI()
  }, []);

  return (
    <div className="flex flex-col">
      <label className="mb-3" htmlFor="city">Escolha o Município: </label>
      <select className="shadow-lg p-1" name="city">
        {cities.map((city) => <option key={city.id} value={city.id}>{city.name}</option>)}
      </select>
    </div>
  )
}
