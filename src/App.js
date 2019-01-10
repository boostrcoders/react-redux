import React, { Component } from "react";
import CustomHeader from "./Components/CustomHeader/CustomHeader";
import MainContent from "./Components/MainContent/MainContent";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      activePage: "Todo List",
      newTodo: "",
      todos: [
        { title: "Learn React", done: false },
        { title: "Learn React2", done: false }
      ]
    };
  }

  newTodoChange(event) {
    this.setState({
      newTodo: event.target.value
    });
  }

  //Add new TODO Task
  formSubmitted(event) {
    event.preventDefault();

    this.setState({
      newTodo: "",
      todos: [
        ...this.state.todos,
        {
          title: this.state.newTodo,
          done: false
        }
      ]
    });
    // let todosArr = this.state.todos;
    // let newTodo = this.state.newTodo;
    // todosArr.push({ title: newTodo, done: false });
    // this.setState({ todos: todosArr });
  }

  toggleTodoDone(event, index) {
    const todos = [...this.state.todos]; // Copy todos array value
    // todos[index] = { ...todos[index] }; // Copy the specific object in the array
    todos[index].done = event.target.checked; // update the 'done' property of the object
    this.setState({
      todos
    });
  }

  removeTodo(index) {
    const todos = [...this.state.todos]; // Copy todos array value
    todos.splice(index, 1); // remove from array
    this.setState({
      todos
    });
    console.log(todos);
  }

  allDone() {
    const todos = this.state.todos.map(todo => {
      return {
        ...todo,
        done: true
      };
    });

    this.setState({
      todos
    });
  }

  render() {
    return (
      <div className="App">
        <CustomHeader />

        <MainContent
          newTodo={this.state.newTodo}
          formSubmitted={event => this.formSubmitted(event)} //Other way to bind
          newTodoChange={event => this.newTodoChange(event)} //Other way to bind
          activePage={this.state.activePage}
          toggleTodoDone={this.toggleTodoDone.bind(this)} //Simplest way to bind
          removeTodo={this.removeTodo.bind(this)} //Simplest way to bind
          todos={this.state.todos}
          checkAll={() => this.allDone()}
        />
      </div>
    );
  }
}

export default App;
