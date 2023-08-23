const API_BASE_URL = new URL(`https://restcountries.com/v3.1/region/europe`);

interface Country {
    name: {
        common: string;
        official: string,
        nativeName: Object
    },
    population: number;
}

function getAveragePopulation(countries: Country[]) {
    const totalPopulation = countries.reduce((acc, country) => acc + country.population, 0);
    const averagePopulation = Math.round(totalPopulation / countries.length)
    return averagePopulation;
}

async function fetchData() {

    const response = await fetch(API_BASE_URL);
    const data = await response.json();
    const result = getAveragePopulation(data);
       
    return result;


    // fetch(API_BASE_URL)
    //     .then((response) => response.json())
    //     .then(data => console.log(getAveragePopulation(data)))

    //.catch(error => console.log(error))


}

const pais = fetchData();
console.log(pais)
export default fetchData