import React from "react";
import "./App.css";

import Header from "./components/Header/Header";
import SearchBox from "./components/Searchbox/SearchBox";
import ResultContainer from "./components/Result/ResultContainer";
const name = require("@rstacruz/startup-name-generator");
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      headerExpanded: true,
      suggestedNames: [],
    };
  }

  inputchange = (inputtext) => {
    this.setState({
      headerExpanded: inputtext.length > 0 ? false : true,
      suggestedNames: inputtext ? name(inputtext) : [],
    });
  };
  render() {
    return (
      <div className="App">
        <Header headerExpanded={this.state.headerExpanded} />
        <SearchBox inputchange={this.inputchange} />
        <ResultContainer suggestedNames={this.state.suggestedNames} />
      </div>
    );
  }
}

export default App;
