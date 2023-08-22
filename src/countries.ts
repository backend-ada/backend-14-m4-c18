const API_BASE_URL = `https://restcountries.com/v3.1/region/europe`;

interface Country {
    name: {
        common: string;
        official: string,
        nativeName: Object
    },
    population: number;
}

function getAveragePopulation(countries:Country[]): number {
    const sumOfpopulations =  countries.reduce((accumulator:number, country:Country)=>accumulator+country.population,0)
    const avgPopulation=Math.ceil(sumOfpopulations/countries.length)
    return avgPopulation

}

async function fetchData() {
	const response = await fetch(API_BASE_URL)
    const countryData = await response.json()
    const country = await countryData.map((data:any)=>{
        return {
            name:data.name,
            population:data.population
        }
    })
    return getAveragePopulation(await country)
}

fetchData();

export default fetchData;