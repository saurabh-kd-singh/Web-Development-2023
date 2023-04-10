const companies=[
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2000, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989},
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// Without forEach
// for(let i=0; i<companies.length; i++){
//     console.log(companies[i]);
// }

// with forEach
companies.forEach(function(company){
    console.log(company);
});

// Without filter
// let canDrink = [];
// for(let i=0; i<ages.length; i++){
//     if(ages[i]>=21){
//         canDrink.push(ages[i]);
//     }
// }
// console.log(canDrink);

// With filter
// const canDrink = ages.filter(function(age){
//     if(age >= 21){return true;}
// })

// With filter and arrow function
const canDrink = ages.filter(age => age>=21);
console.log(canDrink);

// Filter Retail Companies
const retailCompanies = companies.filter(function(company){
    if (company.category == "Retail") {
        return true;
    }
})
console.log(retailCompanies);

const retailCompanies2 = companies.filter(company => company.category === "Retail");
console.log(retailCompanies2);

// companies that started in the 80's
console.log(companies.filter(company => (company.start<=1989 && company.start>=1980)));

// Companies that laster atleast 10 years or more
console.log(companies.filter(company => (company.end - company.start)>=10));

// map

//create Array of company names
console.log(companies.map(company => company.name));

// company names with start and end dates
const testMap = companies.map(function(company) {
    return `${company.name} [${company.start}-${company.end}]`;
});

console.log(testMap);

// sort
const sortedCompanies = companies.sort(function(c1, c2) {
    if (c1.start > c2.start) {
        return 1;
    } else {
        return -1;
    }
});
console.log(sortedCompanies);

console.log(companies.sort((a, b) => (a.start>b.start ? 1:-1)));

// Sort Ages
console.log(ages.sort((a, b) => a-b));