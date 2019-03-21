import React from "react";
import "./components/TodoComponents/Todo.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      todos: [
        {
          task: "Organize Garage",
          id: 1528817077286,
          completed: false
        },
        {
          task: "Bake Cookies",
          id: 1528817084358,
          completed: false
        }
      ],
      todoInput: ""
    };
  }

  Input = event => {
    this.setState({ todoInput: event.target.value });
  };
  Submit = () => {
    let todosCopy = this.state.todos.slice();
    todosCopy.push({
      task: this.state.todoInput,
      id: Date.now(),
      completed: false
    });
    this.setState({ todos: todosCopy, todoInput: "" });
  };
  Done = event => {
    for (let i = 0; i < this.state.todos.length; i++) {
      if (this.state.todos[i].id === event) {
        let todoscopy = [...this.state.todos];
        todoscopy[i].completed = !todoscopy[i].completed;
        this.setState({ todos: todoscopy });
      }
    }
    console.log(this.state.todos);
  };
  Remove = () => {
    console.log(this.state.todos);
    let filter = [...this.state.todos].filter(todos => !todos.completed);
    this.setState({ todos: filter });
  };

  render() {
    return (
      <div>
        {this.state.todos.map(todo => (
          <div
            className={todo.completed == true ? "line" : ""}
            onClick={() => this.Done(todo.id)}
          >
            {todo.task}
          </div>
        ))}
        <input value={this.state.todoInput} onChange={this.Input} />
        <button onClick={this.Submit}>Add</button>
        <button onClick={this.Remove}>Remove</button>
      </div>
    );
  }
}

export default App;
