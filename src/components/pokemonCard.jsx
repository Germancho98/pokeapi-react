import React from "react";
import "../styles/pokemonCard.css"

const PokemonCard = ({ pokemon, handleToggleTeam, isInTeam }) => {

    if (!pokemon || !pokemon.sprites || !pokemon.sprites.front_default) {
        return <div>No se ha podido cargar el card</div>;
    }

    return (
        <div className="pokemon-card">
            <h2>{pokemon.name}</h2>
            <img src={pokemon.sprites.front_default} alt={`imagen de ${pokemon.name}`} />
            <p>Altura: {pokemon.height}</p>
            <p>Peso: {pokemon.weight}</p>
            <button onClick={handleToggleTeam}>
                {isInTeam ? "Remover" : "Agregar"}
            </button>
        </div>
    );
};

export default PokemonCard;