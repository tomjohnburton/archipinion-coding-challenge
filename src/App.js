import React, { Component } from "react";
import Validation from "./components/Validation";
import api from "./api/pokemon";
export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputText: "",
      inputTextLength: null,
      pokemon: null,
      pokeballs: []
    };
  }

  fetchPokemon = e => {
    e.preventDefault();
    api.getPokeList(this.state.inputTextLength).then(res => {
      this.setState({
        pokemon: res
      });
    });
  };

  onInputChange = e => {
    let { value } = e.target;
    this.setState({
      inputText: value,
      inputTextLength: value.length
    });
  };

  error() {
    alert("TOOSHORT I said");
  }
  renderPokeBalls() {
    let pokeballs = [];
    for (let ball = 0; ball < this.state.inputTextLength; ball++) {
      pokeballs.push(
        <img src="/images/pokeball.png" alt="pokeball" width="100px" />
      );
    }
    return pokeballs;
  }
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
            <button
              onClick={
                this.state.inputTextLength < 5 ? this.error : this.fetchPokemon
              }
            >
              Fetch Pokemon
            </button>
          </div>

          <div className="dash-body">
            <div className="pokeballs-container">
              <div className="pokeballs">{this.renderPokeBalls()}</div>
            </div>
            <div>{this.state.inputTextLength}</div>
            <div className="poke-card-container">
              {this.state.pokemon ? (
                <Validation
                  textLength={this.state.inputTextLength}
                  pokemon={this.state.pokemon}
                />
              ) : (
                <div>
                  <Validation textLength={this.state.inputTextLength} />
                </div>
              )}
              {/* <div className="poke-card" /> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
