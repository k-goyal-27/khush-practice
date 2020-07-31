class Input extends React.Component {
    state = {
        title: "",
        deadline: ""
    }

    componentDidMount = () => {
        console.log("Input CDM", this.props);
    }

    componentDidUpdate = (prevProps, prevState) => {
        console.log("Input CDU", this.props, prevProps, prevState);
        if (prevProps.editTodoData !== this.props.editTodoData) {
            this.setState({
                title: this.props.editTodoData.title,
                deadline: this.props.editTodoData.deadline
            });
        }
    }

    handleTitleChange = (event) => {
        this.setState({
            title: event.target.value
        });
    }
    handleDeadlineChange = (event) => {
        this.setState({
            deadline: event.target.value
        });
    }
    render() {
        return (
            <div>
                <input type="text" placeholder="title"
                    onChange={event => { this.handleTitleChange(event) }}
                    value={this.state.title} />
                <br></br>
                <input type="date" placeholder="deadline"
                    onChange={event => { this.handleDeadlineChange(event) }}
                    value={this.state.deadline} />
                <br></br>
                {!this.props.isEdit && (
                    <button onClick={() => { this.props.receivedData(this.state) }}>Save</button>
                )
                }
                {this.props.isEdit && (
                    <button onClick={() => { this.props.receivedData(this.state) }}>Edit</button>
                )}

            </div>
        )


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
                            <button onClick={() => { this.props.deletedIndex(index) }}>Delete</button>
                            <button onClick={() => { this.props.editIndex(index) }}>Edit</button>
                        </li>
                    )
                })}
            </ul>
        )
    }
}

class Wrapper extends React.Component {
    state = {
        todos: [],
        editTodoIndex: "",
        editTodoData: "",
        isEdit: false
    }
    addReceivedData = (received) => {
        let newTodos = this.state.todos.slice();
        newTodos[this.state.editTodoIndex] = received;
        if (this.state.isEdit) {
            this.setState({
                todos: newTodos,
                isEdit: false
            })
        } else {
            this.setState({
                todos: [...this.state.todos, received]
            })
        }

    }
    handleDelete = (receivedIndex) => {
        let newTodos = this.state.todos;
        newTodos.splice(receivedIndex, 1);
        this.setState({
            todos: newTodos
        })
    }
    handleEdit = (editReceivedIndex) => {
        this.setState({
            isEdit: true,
            editTodoIndex: editReceivedIndex,
            editTodoData: this.state.todos[editReceivedIndex]
        });
    }
    render() {
        return (
            <div>
                <Input receivedData={received => { this.addReceivedData(received) }}
                    isEdit={this.state.isEdit}
                    editTodoData={this.state.editTodoData} />
                <List todos={this.state.todos}
                    deletedIndex={receivedIndex => { this.handleDelete(receivedIndex) }}
                    editIndex={editReceivedIndex => { this.handleEdit(editReceivedIndex) }}
                />
            </div>
        )
    }
}
ReactDOM.render(<Wrapper />, document.getElementById("root"));
