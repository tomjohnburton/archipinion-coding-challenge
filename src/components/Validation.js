import React from "react";
import Pokemon from "./Pokemon";

export default function Validation(props) {
  console.log("VALIDPROPS", props);
  return <div>{renderValidation(props)}</div>;
}

function renderValidation(props) {
  if (props.textLength >= 5) {
    return <p>THIS IS FINE</p>;
  } else {
    return <p>THIS IS TOO SHORT</p>;
  }
}

function renderPokemon(props) {
  return props.pokemon.map(poke => {
    return <Pokemon pokemon={poke} />;
  });
}
