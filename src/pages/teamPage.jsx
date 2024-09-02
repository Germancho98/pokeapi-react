import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PokemonCard from "../components/pokemonCard";
import { removeFromTeam } from "../features/team/teamSlice";
import { fetchPokemonDetail } from "../service/pokemonService";

const TeamPage = () => {
    const team = useSelector(state => state.team.value);
    const dispatch = useDispatch();

    const handleRemoveFromTeam = (name) => {
        dispatch(removeFromTeam(name));
    };

    console.log(team)
    return (
        <div>
            <h1>Mi Equipo Pokémon</h1>
            {team.length === 0 ? (
                <p>No tienes Pokémon en tu equipo.</p>
            ) : (
                <div className="team-grid">
                    {team.map((pokemonName) => (
                        <PokemonDetail key={pokemonName} pokemonName={pokemonName} handleRemoveFromTeam={handleRemoveFromTeam} />
                    ))}
                </div>
            )}
        </div>
    );
}

const PokemonDetail = ({ pokemonName, handleRemoveFromTeam }) => {
    const [pokemon, setPokemon] = React.useState(null);

    React.useEffect(() => {
        const getPokemonDetail = async () => {
            try {
                const data = await fetchPokemonDetail(pokemonName);
                setPokemon(data);
            } catch (error) {
                console.error("Error fetching Pokémon detail", error);
            }
        };
        getPokemonDetail();
    }, [pokemonName]);

    if (!pokemon) {
        return <div>Cargando...</div>;
    }

    return (
        <PokemonCard
            pokemon={pokemon}
            handleToggleTeam={() => handleRemoveFromTeam(pokemonName)}
            isInTeam={true}
        />
    );
};

export default TeamPage