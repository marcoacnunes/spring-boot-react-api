import axios from 'axios';

    const GET_ALL_EMPLOYEES = 'http://localhost:8080/employee/all';
    const ADD_EMPLOYEES = 'http://localhost:8080/employee/add';
    const UPDATE_EMPLOYEES = 'http://localhost:8080/employeee/update';
    const DELETE_EMPLOYEE = 'http://localhost:8080/employee/delete';
    const FIND_EMPLOYEE = 'http://localhost:8080/employee/find';

class EmployeeService {

    getEmployees() {
        return axios.get(GET_ALL_EMPLOYEES);
    }
}

export default new EmployeeService();