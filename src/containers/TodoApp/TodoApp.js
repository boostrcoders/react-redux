import React, { Component } from "react";
import InputTextBox from "../../Components/TodoApp/InputTextBox";
import TaskList from "../../Components/TodoApp/TaskList";
import { connect } from "react-redux";
import "../../Components/TodoApp/MainContent.scss";
import { actions } from "../../store";

class TodoApp extends Component {
  //Add new TODO Task
  formSubmitted(event) {
    event.preventDefault();
    this.props.onAddTodo({
      title: this.props.newTodo,
      done: false
    });
    this.props.onNewTodoChanged("");
    this.props.onStatusAllDone();
  }

  //CHECKED and UNCHECKED TASK
  toggleTodoDone(event, index) {
    this.props.onToggleTodoDone({
      index,
      checked: event.target.checked
    });
    this.props.onStatusAllDone();
  }

  render() {
    return (
      <div className="main-content">
        <div>
          <h2>
            {this.props.activePage}

            <InputTextBox
              newTodo={this.props.newTodo}
              formSubmitted={event => this.formSubmitted(event)} //Other way to bind
              newTodoChange={this.props.onNewTodoChanged} //Other way to bind
            />
          </h2>
          <TaskList
            allDone={this.props.allDone}
            toggleTodoDone={this.toggleTodoDone.bind(this)} //Simplest way to bind
            removeTodo={this.props.onRemoveTodo} //Simplest way to bind
            todos={this.props.todos}
            checkAll={this.props.onAllDone}
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    activePage: state.activePage,
    newTodo: state.newTodo,
    allDone: state.allDone,
    todos: state.todos
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onNewTodoChanged(newTodo) {
      dispatch(actions.newTodoChanged(newTodo));
    },
    onAddTodo(todo) {
      dispatch(actions.addTodo(todo));
    },
    onToggleTodoDone(toggle) {
      dispatch(actions.toggleTodoDone(toggle));
    },
    onRemoveTodo(index) {
      dispatch(actions.removeTodo(index));
    },
    onAllDone() {
      dispatch(actions.allDone());
    },
    onStatusAllDone() {
      dispatch(actions.statusAllDone());
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoApp);
