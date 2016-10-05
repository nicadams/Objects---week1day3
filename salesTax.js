var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function calculateSalesTax(companySalesData, salesTaxRates) {
  var newObj = {};
  for (var company in companySalesData) {
    var compName = companySalesData[company].name;
      var salesSum = companySalesData[company].sales.reduce(function(a, b) {return a + b});
      var provTaxRate = salesTaxRates[companySalesData[company].province]
      var taxCalc = salesSum * provTaxRate;

      if (newObj[compName] === undefined) {
      newObj[compName] = {totalSales: salesSum, totalTaxes: taxCalc};
      }
      else {
        newObj[compName].totalSales += salesSum;
        newObj[compName].totalTaxes += taxCalc;
      }
  }

    console.log(newObj);
    return newObj;
}

calculateSalesTax(companySalesData, salesTaxRates);

// var results = salesTaxReport(companySalesData, salesTaxRates);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/