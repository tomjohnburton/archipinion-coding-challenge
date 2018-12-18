import React, { Component } from "react";

export default function Pokemon(props) {
  console.log("pokeprops", props);
  return <div>{props.pokemon.name}</div>;
}
