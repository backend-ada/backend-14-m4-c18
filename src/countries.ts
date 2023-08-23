const API_BASE_URL = `https://restcountries.com/v3.1/region/europe`;

interface Country {
    name: {
        common: string;
        official: string,
        nativeName: Object
    },
    population: number;
}

function getAveragePopulation(datos : any): number {

const populationsArray = datos.map((country: any) => country.population)
const totalPopulation = populationsArray.reduce((acum: number , valorAct : number) => acum+= valorAct)
const average = Math.round(totalPopulation / datos.length)
    
return average;
}

async function fetchData() {
 //   fetch(API_BASE_URL).then(response => response.json()).then(data => getAveragePopulation(data))	
    const response = await fetch(API_BASE_URL)
    const data = await response.json()
    const finalResult = getAveragePopulation(data)

    console.log(finalResult)
    return finalResult

}

fetchData();

export default fetchData;