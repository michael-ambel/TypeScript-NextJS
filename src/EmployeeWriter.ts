import { CSVWriter } from "./index";

interface Employee {
  id: number;
  name: string;
  role: string;
  salary: number;
}

const employeeWriter = new CSVWriter<Employee>([
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
