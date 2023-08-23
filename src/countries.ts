const API_BASE_URL = `https://restcountries.com/v3.1/region/europe`

interface Country {
  name: {
    common: string
    official: string
    nativeName: Object
  }
  population: number
}

const getAveragePopulation = (countries: Country[]): number => {
  const countriesPopulation = countries.map((country) => country.population)

  const totalPopulation = countriesPopulation.reduce(
    (acc, current) => (acc += current)
  )
  const avergePopulation = Math.round(totalPopulation / countries.length)
  return avergePopulation
}

const fetchData = async () => {
  const response = await fetch(API_BASE_URL)
  const data = await response.json()
  const avergePopulationResult = getAveragePopulation(data)

  return avergePopulationResult
}

fetchData()

export default fetchData
