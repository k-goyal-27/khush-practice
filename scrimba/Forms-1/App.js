import React, { Component } from "react"

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
        //or
        /* simpler and more accurate way-
        const {name, value} = event.target
        this.setState({
            [name]: value
        }) */
    }

    render() {
        return (
            <form>
                <input type="text"
                    name="firstName"
                    value={this.state.firstName} //it is optional. it used so that the text in the input box matches with the h1 text.
                    placeholder="First Name"
                    onChange={this.handleChange}
                />
                <br />
                <input type="text"
                    name="lastName"
                    value={this.state.lastName} //it is optional. it used so that the text in the input box matches with the h1 text.
                    placeholder="Last Name"
                    onChange={this.handleChange}
                />
                <h1>{this.state.firstName} {this.state.lastName}</h1>
            </form>
        )
    }
}

export default App
