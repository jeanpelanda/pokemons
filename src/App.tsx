import { useEffect, useState } from "react";
import { Cards } from "./components/Cards";
import { Pagination } from "./components/Pagination";
import { GlobalStyle } from "./styles/global";
import { usePokemonsApi } from "./services/usePokemonsApi";
import { Pokemon, PokemonList, Result } from "./utils/types/pokemon";
import { Page } from "./utils/types/page";
import { Container } from "./styles";
import { default as logo } from "./assets/pokemon.svg"
import { Error } from "./components/Error";

export default function App() {

  const [pokemonsList, setPokemonsList] = useState<PokemonList | null>(null)
  const [pokemonsData, setPokemonsData] = useState<Pokemon[]>([])
  const { getPokemonList, getPokemonData } = usePokemonsApi()
  const [page, setPage] = useState<Page>({ limit: 5, offset: 0, current: 1 })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetchPokemonsData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

  async function fetchPokemonsData() {
    setLoading(true)
    const response = await getPokemonList(page.limit, page.offset)
    if (response.status === 200) {
      setPokemonsList(response.data)
      if (response?.data.results.length) {
        const promises = response.data.results.map(async (item: Result) => {
          const data = await getPokemonData(item.url)
          if (data.status === 200) {
            const pokemon = {
              attack: data.data.stats[1].base_stat,
              defense: data.data.stats[2].base_stat,
              hp: data.data.stats[0].base_stat,
              imageUrl: data.data.sprites.front_default,
              name: data.data.name
            }
            return pokemon
          } else {
            setError(true)
            return false
          }
        })
        setPokemonsData(await Promise.all(promises));
      }
    } else {
      setError(true)
    }
    setLoading(false)
  }

  return (
    <>
      <Container>
        <img src={logo} alt="Pokemon" width={320} />
        {
          error ? <Error /> :
            pokemonsData && (
              <div>
                <Cards loading={loading} pokemons={pokemonsData} />
                {
                  pokemonsList && (
                    <Pagination
                      count={pokemonsList.count}
                      loading={loading}
                      next={pokemonsList.next}
                      page={page}
                      prev={pokemonsList.previous}
                      setPage={setPage}
                    />
                  )
                }
              </div>
            )
        }
      </Container>
      <GlobalStyle />
    </>
  )
}
