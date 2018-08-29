function pokemonBattle(pokemon1, pokemon2){
  if (pokemon1 === pokemon2) {
    throw new Error('Os pokemons são iguais');
  }

  const gravelerNaLuta = pokemon1 === "graveler" || pokemon2 === "graveler";
  const eeveNaLuta = pokemon1 === "eeve" || pokemon2 === "eeve";
  const vaporeonNaLuta = pokemon1 === "vaporeon" || pokemon2 === "vaporeon";

  if (gravelerNaLuta && eeveNaLuta) {
    return "graveler";
  } else if (gravelerNaLuta && vaporeonNaLuta) {
    return "vaporeon";
  } else if (eeveNaLuta && vaporeonNaLuta) {
    return "eeve";
  }

  throw new Error('Tem um pokemon não cadastrado');
}

module.exports.pokemonBattle = pokemonBattle;



// "gravelel"
// "eeve"
// "vaporion"
