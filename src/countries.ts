const API_BASE_URL = new URL(`https://restcountries.com/v3.1/region/europe`);

interface Country {
    name: {
        common: string;
        official: string,
        nativeName: Object
    },
    population: number;
}

let acumPop = 0

function getAveragePopulation(datos: any): number {
 
    const popArray = datos.map((country: any) => country.population)
    const totalPop = popArray.reduce((acum: number, valorAct: number) => acum+= valorAct)
    const average = Math.round(totalPop/datos.length)
   // console.log(average)

    return average;
}

async function fetchData() {
   // fetch(API_BASE_URL).then(response => response.json()).then (data =>  getAveragePopulation(data))
   const response = await fetch(API_BASE_URL)
   const data = await response.json()
   const finalResult = getAveragePopulation(data)
   console.log(finalResult)
   return finalResult

}

fetchData().then((data)=> console.log(data));

export default fetchData;