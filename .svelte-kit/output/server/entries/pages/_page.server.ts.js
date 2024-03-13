import { e as employees } from "../../chunks/employees.js";
let data = employees;
function getAllEmployees() {
  return data;
}
function updateEmployee(form) {
  data = data.map((employee) => {
    let vorname = form.get("vorname");
    let nachname = form.get("nachname");
    let aktiv = form.get("aktiv");
    let abteilung = form.get("abteilung");
    if (employee.employeeKey === form.get("personalnummer")) {
      return {
        employeeKey: employee.employeeKey,
        active: aktiv === "true" ? true : false,
        department: abteilung,
        created: employee.created,
        firstName: vorname,
        lastName: nachname,
        photo: employee.photo
      };
    }
    return employee;
  });
}
function load() {
  return {
    employees: getAllEmployees()
  };
}
const actions = {
  default: async ({ request }) => {
    const data2 = await request.formData();
    updateEmployee(data2);
  }
};
export {
  actions,
  load
};
