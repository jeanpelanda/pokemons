import { Pokemon } from "../../utils/types/pokemon";
import { Card } from "../Card";
import { Loading } from "../Loading";
import { GridCards } from "./styles";

interface CardProps {
    loading: boolean,
    pokemons: Pokemon[]
}

export function Cards({ loading, pokemons }: CardProps) {
    return (
        <GridCards>
            {
                loading ? <Loading /> :
                    pokemons.map(pokemon => {
                        return (
                            <Card key={pokemon.name} pokemon={pokemon} />
                        )
                    })
            }
        </GridCards>
    )
}