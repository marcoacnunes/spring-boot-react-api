import React, { Component } from 'react';

class AddEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            jobTitle: '',
            email: '',
            phone: ''
            
        }
    }

    changeNameHandler (event) {
        this.setState({name: event.target.value});
    }

    changeOccupationHandler (event) {    
        this.setState({jobTitle: event.target.value});;
    }

    changeEmailHandler (event) {    
        this.setState({email: event.target.value});;
    }

    changePhoneHandler (event) {    
        this.setState({phone: event.target.value});;
    }

    cancel () {
        this.props.history.push('/employee');
    }
    
    saveEmployee (e) {
        e.preventDefault();
        let employee = {
            naem: this.state.name,
            jogTitle: this.jobTitle,
            email: this.state.email,
            phone: this.state.phone
        };
        console.log('employee => ' + JSON.stringify(employee));
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add Employee</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="Name">Name:</label>
                                        <input placeholder="Enter Name" name="name" className="form-control"
                                        value={this.state.name} onchange={this.changeNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="Occupation">Occupation:</label>
                                        <input placeholder="Enter Occupation" name="occupation" className="form-control"
                                        value={this.state.jobTitle} onchange={this.changeOccupationHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="Email">Email:</label>
                                        <input placeholder="Enter Email" name="email" className="form-control"
                                        value={this.state.email} onchange={this.changeEmailHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="Phone">Email:</label>
                                        <input placeholder="Enter Phone" name="phone" className="form-control"
                                        value={this.state.phone} onchange={this.changePhoneHandler} />
                                    </div>

                                    <button className="btn btn-success" onClick={this.saveEmployee}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddEmployeeComponent