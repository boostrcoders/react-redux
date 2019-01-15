import React, { Component } from "react";
import CustomHeader from "./Components/CustomHeader/CustomHeader";
import TodoApp from "./containers/TodoApp/TodoApp";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <CustomHeader />
        <TodoApp />
      </div>
    );
  }
}

export default App;
