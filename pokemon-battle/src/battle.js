import React, { useState, useEffect } from 'react';
import { getPokemon } from './fetchPokemon';

const Battle = () => {
  const [pokemon1, setPokemon1] = useState(null);
  const [pokemon2, setPokemon2] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const poke1 = await getPokemon('charizard');
      const poke2 = await getPokemon('blastoise');
      setPokemon1(poke1);
      setPokemon2(poke2);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Pokémon Battle</h1>
      <div className="battle-container">
        {pokemon1 && (
          <div className="pokemon">
            <img src={pokemon1.sprites.front_default} alt={pokemon1.name} />
            <h2>{pokemon1.name.toUpperCase()}</h2>
            <p>HP: {pokemon1.stats[0].base_stat}</p>
            <p>Attack: {pokemon1.stats[1].base_stat}</p>
          </div>
        )}

        <h2>VS</h2>

        {pokemon2 && (
          <div className="pokemon">
            <img src={pokemon2.sprites.front_default} alt={pokemon2.name} />
            <h2>{pokemon2.name.toUpperCase()}</h2>
            <p>HP: {pokemon2.stats[0].base_stat}</p>
            <p>Attack: {pokemon2.stats[1].base_stat}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Battle;