"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const employeeWriter = new index_1.CSVWriter([
    "id",
    "name",
    "role",
    "salary",
]);
employeeWriter.addRows([
    { id: 1, name: "luigi", role: "dev", salary: 280 },
    { id: 2, name: "nino", role: "designer", salary: 240 },
]);
employeeWriter.save("./data/employe.csv");
