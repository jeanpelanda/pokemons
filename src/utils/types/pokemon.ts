export interface Pokemon {
    attack: number,
    defense: number,
    hp: number,
    imageUrl: string,
    name: string
}

export interface PokemonList {
    count: number,
    next: string | null,
    previous: string | null,
    results: Array<Result>
}

export interface Result {
    name: string,
    url: string
}