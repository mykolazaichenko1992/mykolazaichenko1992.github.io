const request = require(`request`);
const fs = require(`fs`);
fs.writeFile(`./files/1.txt`, `hello world`, `utf-8`, () => {
  if() console.log();
  console.log(`file 1.txt created`);
})