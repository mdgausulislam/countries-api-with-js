const loadCountries=()=>{
    fetch(`https://restcountries.com/v3.1/all`)
    .then(res=>res.json())
    .then(data=>displayCountries(data))
}
const displayCountries=(countries)=>{
    console.log(countries);
    const allCountries=countries.map(country=>getCountryHtml(country));
    // console.log(allCountries);
    const container=document.getElementById('countries');
    container.innerHTML=allCountries.join(' ');
}

//parameter destructuring
const getCountryHtml=({name,flags,area,region})=>{
    return `
    <div class="country">
        <h1>${name.common}</h1>
        <p> continent:${region}</p>
        <p>Area: ${area}</p>
        <img src="${flags.png}">
    </div>
    `
}


//     //object destructuring


// const getCountryHtml=(country)=>{
//     const {name,flags}= country;
//     return `
//     <div class="country">
//         <h1>${name.common}</h1>
//         <img src="${flags.png}">
//     </div>
//     `
// }



// Original

// const getCountryHtml=(country)=>{
//     return `
//     <div class="country">
//         <h1>${country.name.common}</h1>
//         <img src="${country.flags.png}">
//     </div>
//     `
// }
loadCountries();