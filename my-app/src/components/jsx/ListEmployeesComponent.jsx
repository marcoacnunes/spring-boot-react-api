import React, { Component } from 'react';

class ListEmployeesComponent extends Component {
    constructor(props) {
        super(props)

        this.state = { 
            employees: []
        }
    }
    render() {
        return (
            <div>
                <h2 className="text-center">Employess List</h2>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        
                        <thead>
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
                                    <tr key={employee.id}>
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

export default ListEmployeesComponent;

