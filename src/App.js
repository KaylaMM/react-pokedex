import React, { Component } from "react";
import Pokecard from "./components/Pokecard";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Pokecard id={4} name="Charmander" type="fire" exp={62} />
      </div>
    );
  }
}

export default App;
