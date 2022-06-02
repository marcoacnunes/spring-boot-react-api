import React, { Component } from 'react'


export default class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
  render() {
    return (
        <div>
            <header>
                <nav className="nav navbar navbar-expand-md navbar-dark bg-dark">
                <div><a href="https://javaguides.net/" className="navbar-brand">Employee CRUD</a></div>
                </nav>
            </header>
        </div>
    )
  }
}
