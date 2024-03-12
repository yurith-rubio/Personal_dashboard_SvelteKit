import { getAllEmployees, updateEmployee } from "$lib/server/database";

export function load() {    
    return {
        employees: getAllEmployees()
    }
}

export const actions = {
    default: async ({ request }) => {
        const data = await request.formData();
        updateEmployee(data);
    }
}