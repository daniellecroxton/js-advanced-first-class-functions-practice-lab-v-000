const logDriverNames = function(drivers){
  drivers.forEach(function (driver) {
    console.log(driver.name);
  });
};

const logDriversByHometown = function(drivers, hometown){
  const matches = drivers.filter(function(driver) {
    return driver.hometown === hometown;
  });

  matches.forEach(function (driver) {
    console.log(driver.name);
  });
};

const driversByRevenue = function(drivers) {

  return drivers.slice().sort(function (a, b) {
    return a.revenue - b.revenue;
  });
};

const driversByName = function(drivers) {

  return drivers.slice().sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });
};

const totalRevenue = function(drivers) {

  return drivers.reduce(function (accumulator, currentValue) {
      return accumulator + currentValue.revenue;
  },0);
};

const averageRevenue = function(drivers) {
  return totalRevenue(drivers) / drivers.length;
};
