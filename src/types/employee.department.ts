type Department = 'HR' | 'IT' | 'Management' | 'Other';

interface IEmployee {
    employeeKey: string,
    active: boolean,
    department: Department,
    created: string,
    firstName: string,
    lastName: string,
    photo: string,
    comment?: string,
  }