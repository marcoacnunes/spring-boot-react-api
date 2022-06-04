import React, { Component } from 'react';
import EmployeeService from '../../services/EmployeeService';



class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = { 
            employees: []
        }

        this.addEmployee = this.addEmployee.bind(this);
    }

    componentDidMount(){
        EmployeeService.getEmployees().then((res) => {
            this.setState({employees: res.data});
        });
    }

    addEmployee() {
        this.props.history.push('/add');
    }

    render() {
        return (
        <div>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addEmployee}>Add Employee</button>
                </div>
                <div className="row">
                    <table bgcolor="white" className="table table-striped table-bordered">
                        <thead>
                <h2 className="text-center">Employees List</h2>
                            <tr>
                                <th>ID</th>
                                <th>Employee Name</th>
                                <th>Occupation</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employees.map(
                                    employee =>
                                    <tr>
                                        <td>{employee.id}</td>
                                        <td>{ employee.name }</td>
                                        <td>{ employee.jobTitle }</td>
                                        <td>{ employee.email }</td>
                                        <td>{ employee.phone }</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListEmployeeComponent;

