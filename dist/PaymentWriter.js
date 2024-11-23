"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const paymentWriter = new index_1.CSVWriter(["id", "amount", "to", "notes"]);
paymentWriter.addRows([
    { id: 1, amount: 50, to: "juigi", notes: "Job" },
    { id: 2, amount: 40, to: "jhon", notes: "Service" },
    { id: 2, amount: 44, to: "nino", notes: "Service" },
]);
paymentWriter.save("./data/payments.csv");
