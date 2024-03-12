import { getAllEmployees } from "$lib/server/database";

let employees = getAllEmployees();
export function load() {    
    return {
        employees: employees
    }
}

export const actions = {
    default: async ({ request }) => {
        const data = await request.formData();

        employees = employees.map((employee) => {
            let vorname = data.get('vorname');
            let nachname = data.get('nachname');
            let aktiv = data.get('aktiv');
            let abteilung = data.get('abteilung');

            // let nachname = data.get('nachname') as string;
            if (employee.employeeKey === data.get('personalnummer')) {
                return {
                    employeeKey: '02n4m8p',
                    active: aktiv,
                    department: abteilung,
                    created: '2024-02-07T13:49:14Z',
                    firstName: vorname,
                    lastName: nachname,
                    photo: 'photo11.jpg'
                  }
            }
            return employee;
        });
    }
}