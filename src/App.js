import React from "react";
import TodoForm from "./components/TodoComponents/TodoForm";
import Todo from "./components/TodoComponents/Todo";

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
      task: ""
    };
  }

  Change = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  update = event => {
    event.preventDefault();

    let todosCopy = this.state.todos.slice();
    todosCopy.push({ task: this.state.task, id: Date.now(), completed: false });
    this.setState({ todos: todosCopy, todoInput: "" });
  };

  render() {
    return (
      <div className="main">
        <div>
          {this.state.todos.map(todo => (
            <Todo key={todo.id} todo={todo} />
          ))}
        </div>
        <TodoForm
          task={this.state.task}
          Change={this.Change}
          update={this.update}
        />
      </div>
    );
  }
}

export default App;
