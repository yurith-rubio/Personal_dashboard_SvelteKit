import { employees } from "$lib/employees";

let data = employees;

export function getAllEmployees() {
    return data;
}

export function updateEmployee(form: FormData) {
    data = data.map((employee) => {
            
        let vorname = form.get('vorname');
        let nachname = form.get('nachname');
        let aktiv = form.get('aktiv');
        let abteilung = form.get('abteilung');

        // let nachname = data.get('nachname') as string;
        if (employee.employeeKey === form.get('personalnummer')) {
            console.log("updating employee", form);
            return {
                employeeKey: employee.employeeKey,
                active: aktiv === 'true' ? true : false,
                department: abteilung as Department,
                created: employee.created,
                firstName: vorname as string,
                lastName: nachname as string,
                photo: employee.photo
              }
        }
        return employee;
    });
}