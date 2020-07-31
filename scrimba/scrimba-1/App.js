import React from "react";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
        //Third Way-
        this.handleClick = this.handleClick.bind(this)
    }
    /*  First Way-   
    handleClick=()=>{
            this.setState({
                count: 1
            })
        } */

    /*  Second Way-   
    handleClick=()=>{
            this.setState({
                count: this.state.count+1
            })
        } */

    //Third Way-
    handleClick() {
        this.setState({
            count: 1
        })
    }
    //Fourth Way-
    handleClick = () => {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        })
    }


    render() {
        return (
            <div>
                {/* First/Second Way-
             <h1>{this.state.count}</h1>
               <button onClick={this.handleClick}>Click</button>  */}
                <h1>{this.state.count}</h1>
                <button onClick={this.handleClick}>Click</button>
            </div>
        )
    }
}
export default App;