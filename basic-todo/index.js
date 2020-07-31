class Input extends React.Component {
    state = {
        title: "",
        deadline: ""
    }

    handleTitleChange = () => {
        this.setState({
            title: event.target.value
        });
    }
    handleDeadlineChange = () => {
        this.setState({
            deadline: event.target.value
        });
    }
    render() {
        return (
            <div>
                <input type="text" placeholder="title"
                    onChange={event => this.handleTitleChange(event)}
                    value={this.state.title} />
                <br></br>
                <input type="date" placeholder="deadline"
                    onChange={event => this.handleDeadlineChange(event)}
                    value={this.state.deadline} />
                <br></br>
                <button onClick={() => this.props.receiveInputData(this.state)}>Submit</button>
            </div>);
    }
}

class List extends React.Component {
    render() {
        return (
            <ul>
                {this.props.todos.map((todo, index) => {
                    return (
                        <li key={index}>
                            {todo.title} {todo.deadline}
                        </li>
                    )
                })}
            </ul>
        )
    }
}
class Wrapper extends React.Component {
    state = {
        todos: []
    }
    addReceivedData = (received) => {
        this.setState({
            todos: [...this.state.todos, received]
        })
    }
    render() {
        return (
            <div>
                <Input receiveInputData={received => {
                    this.addReceivedData(received);
                }} />
                <List todos={this.state.todos} />
            </div>
        )
    }
}
ReactDOM.render(<Wrapper />, document.getElementById("root"));