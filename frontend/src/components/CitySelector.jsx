

export default function CitySelector({cities, onSelectCity}) {

  function handleCityChange(event) {
    return onSelectCity(event.target.value);
  }

  return (
    <div className="flex flex-col">
      <label className="mb-3" htmlFor="city">Escolha o Município: </label>
      <select className="shadow-lg p-1" name="city" onChange={handleCityChange}>
        {cities.map((city) => <option key={city.id} value={city.id}>{city.name}</option>)}
      </select>
    </div>
  )
}
