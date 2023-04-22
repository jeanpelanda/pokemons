import { Pokemon } from "../../utils/types/pokemon";
import { CardContainer } from "./styles";

interface PokemonProps {
    pokemon: Pokemon
}

export function Card({ pokemon }: PokemonProps) {

    return (
        <CardContainer>
            <span className="hp">{pokemon.hp}</span>
            <div className="img">
                <img src={pokemon.imageUrl} alt={pokemon.name} />
            </div>
            <h2 className="name">{pokemon.name}</h2>
            <div className="stats">
                <p>
                    Attack
                    <strong>{pokemon.attack}</strong>
                </p>
                <p>
                    Defense
                    <strong>{pokemon.defense}</strong>
                </p>
            </div>
        </CardContainer>
    )
}