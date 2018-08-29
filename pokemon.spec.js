var chai = require("chai");
var expect = chai.expect;
var pokemon = require("./pokemon");

describe("pokemon", () => {
  describe("#pokemonBattle", () => {
    describe("Quando não for nenhum dos pokemons cadastros", () => {
      it("deve me retornar um erro", () => {
        var badFn = function () { pokemon.pokemonBattle("pikachu", "eeve") };
        expect(badFn).to.throw('Tem um pokemon não cadastrado');
      });
    });
    describe("Quando os pokemons forem iguais", () => {
      it("deve me retornar um erro", () => {
        var badFn = function () { pokemon.pokemonBattle("eeve", "eeve") };
        var badFn3 = function () { pokemon.pokemonBattle("vaporeon", "vaporeon") };
        var badFn2 = function () { pokemon.pokemonBattle("graveler", "graveler") };

        expect(badFn).to.throw('Os pokemons são iguais');
        expect(badFn2).to.throw('Os pokemons são iguais');
        expect(badFn3).to.throw('Os pokemons são iguais');
      });
    });
    describe("Quando graveler lutar contra o eeve", () => {
      it("deve me retornar o graveler", () => {
        expect(pokemon.pokemonBattle("graveler", "eeve")).to.equal("graveler");
      });
    });
    describe("Quando eeve lutar contra o vaporeon", () => {
      it("deve me retornar o eeve", () => {
        expect(pokemon.pokemonBattle("eeve", "vaporeon")).to.equal("eeve");
      });
    });
    describe("Quando vaporeon lutar contra o graveler", () => {
      it("deve me retornar o vaporeon", () => {
        expect(pokemon.pokemonBattle("graveler", "vaporeon")).to.equal("vaporeon");
      });
    });
  });
});
