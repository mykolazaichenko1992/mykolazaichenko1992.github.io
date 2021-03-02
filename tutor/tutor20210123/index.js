const request = require("request");
let body = request(
  "https://auto.ria.com/uk/search/?indexName=auto,order_auto,newauto_search&body.id[4]=2&year[0].gte=2012&year[0].lte=2012&categories.main.id=1&brand.id[0]=6&price.currency=1&gearbox.id[1]=2&gearbox.id[2]=3&fuel.id[1]=2&drive.id[0]=1&abroad.not=0&custom.not=1&page=0&size=100",
  function (error, response, body) {
    console.error("error:", error); // Print the error if one occurred
    console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
    console.log(body);
    return body;
  }
);
console.log(body);
