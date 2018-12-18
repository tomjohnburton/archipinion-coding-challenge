import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputText: "",
      inputTextLength: null
    };
  }

  onInputChange = e => {
    let { value } = e.target;
    this.setState({
      inputText: value,
      inputTextLength: value.length
    });
  };
  render() {
    return (
      <div className="app-body">
        <div className="app-dashboard">
          <div className="search-input">
            <input
              value={this.state.inputText}
              onChange={this.onInputChange}
              type="text"
            />
          </div>

          <div className="dash-body">
            <div className="pokeballs">
              <img src="/images/pokeball.png" alt="pokeball" width="100px" />
            </div>
            <div className="poke-card-container">
              <div className="poke-card" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
