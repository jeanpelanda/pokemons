import { render } from "@testing-library/react";
import { Cards } from "../../../components/Cards";

describe("Cards Component", () => {
    it("should render the cards with the correct pokemon data", () => {
        const pokemons = [
            {
                name: "Pikachu",
                hp: 100,
                attack: 55,
                defense: 40,
                imageUrl: "https://some-image-url.com/pikachu.png"
            },
            {
                name: "Charmander",
                hp: 80,
                attack: 60,
                defense: 50,
                imageUrl: "https://some-image-url.com/charmander.png"
            }
        ];
        const { getByText, getByAltText } = render(<Cards loading={false} pokemons={pokemons} />);

        expect(getByText(pokemons[0].name)).toBeInTheDocument();
        expect(getByText(pokemons[0].hp)).toBeInTheDocument();
        expect(getByText(pokemons[0].attack)).toBeInTheDocument();
        expect(getByText(pokemons[0].defense)).toBeInTheDocument();
        expect(getByAltText(pokemons[0].name)).toBeInTheDocument();

        expect(getByText(pokemons[1].name)).toBeInTheDocument();
        expect(getByText(pokemons[1].hp)).toBeInTheDocument();
        expect(getByText(pokemons[1].attack)).toBeInTheDocument();
        expect(getByText(pokemons[1].defense)).toBeInTheDocument();
        expect(getByAltText(pokemons[1].name)).toBeInTheDocument();
    });

    it('shold render loading spinner when loading prop is true', () => {
        const { getByTestId } = render(<Cards loading={true} pokemons={[]} />);
        expect(getByTestId("loading-spinner")).toBeInTheDocument();
    });
});