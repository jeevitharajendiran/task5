let baseFee = .45
let cities = ["Chennai", "Coimbatore", "Salem"]
let uberRates = [8, 12, 16]

let customerName = "Kumar" 
let customerCity = "Chennai" 

console.log("Hello", customerName+ ", welcome to the Uber Rate Program")

function getRate(customerCity) {
  
  function uberRate(customerCity, index) {
    
    let finalRate = (uberRates[index]) * baseFee
    return finalRate
  }

  console.log(customerCity, "rate is:", uberRate(customerCity, cities.indexOf(customerCity)))
}

getRate(customerCity)