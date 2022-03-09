// Code your solution here

function findMatching (drivers, string){
  let matchedDrivers = drivers.filter( driver => driver.toUpperCase() == string.toUpperCase())
  return matchedDrivers
}

function fuzzyMatch (drivers, string){
  let matchedDrivers = drivers.filter( driver => driver.toUpperCase().indexOf(string.toUpperCase()) === 0)
  return matchedDrivers
}

function matchName (drivers, name){
  let matchedDrivers = drivers.filter( driver => driver.name == name)
  return matchedDrivers
}
