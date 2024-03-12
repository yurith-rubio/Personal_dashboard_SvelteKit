import { employees } from '$lib/server/database';

export function load() {
    return {
        body: {
            employees
        }
    };
}