import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchPokemonDetail } from "../service/pokemonService";
import { useSelector, useDispatch } from "react-redux";
import { addToTeam, removeFromTeam } from "../features/team/teamSlice";
import PokemonCard from "../components/pokemonCard";

const PokemonDetailPage = () => {
    const { name } = useParams();
    const [pokemon, setPokemon] = useState(null);
    const dispatch = useDispatch();
    const team = useSelector((state) => state.team.value);

    useEffect(() => {
        const getPokemonDetail = async () => {
            try {
                const data = await fetchPokemonDetail(name);
                setPokemon(data);
            } catch (error) {
                console.error("error en getPokemonDetail", error);
            }
        };
        getPokemonDetail();
    }, [name]);

    const isInTeam = team.some((teamPokemon) => teamPokemon === name);

    const handleToggleTeam = () => {
        if (isInTeam) {
            dispatch(removeFromTeam(name));
        } else {
            dispatch(addToTeam(name));
        }
    };

    if (!pokemon) {
        return <div>Cargando...</div>;
    }

    return (
        <>
            <PokemonCard
                pokemon={pokemon}
                handleToggleTeam={handleToggleTeam}
                isInTeam={isInTeam}
            />
        </>
    );
};

export default PokemonDetailPage;