import api from "./api";

export function usePokemonsApi() {

    const getPokemonList = async (limit: number, offset: number) => {
        return await api.request({
            method: "GET",
            params: { limit, offset }
        })
            .then((response) => response)
            .catch((error) => {
                console.log(error)
                return error
            })
    };

    const getPokemonData = async (url: string) => {
        return await api.request({
            url: url,
            method: "GET"
        })
            .then((response) => response)
            .catch((error) => {
                console.log(error)
                return error
            })
    };

    return { getPokemonList, getPokemonData };
}