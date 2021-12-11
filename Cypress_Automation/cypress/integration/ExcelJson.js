const xlsx = require("xlsx")

const wb = xlsx.readFile("./Test File.xlsx")
cy.log(wb)
