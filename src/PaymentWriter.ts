import { CSVWriter } from "./index";

interface Payment {
  id: number;
  amount: number;
  to: string;
  notes: string;
}

const paymentWriter = new CSVWriter<Payment>(["id", "amount", "to", "notes"]);

paymentWriter.addRows([
  { id: 1, amount: 50, to: "juigi", notes: "Job" },
  { id: 2, amount: 40, to: "jhon", notes: "Service" },
  { id: 2, amount: 44, to: "nino", notes: "Service" },
]);

paymentWriter.save("./data/payments.csv");
