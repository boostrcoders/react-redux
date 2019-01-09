import React, { Component } from "react";
import CustomHeader from "./Components/CustomHeader/CustomHeader";
import MainContent from "./Components/MainContent/MainContent";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <CustomHeader />
        <MainContent />
      </div>
    );
  }
}

export default App;
