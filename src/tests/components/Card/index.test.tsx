import { render } from "@testing-library/react";
import { Card } from "../../../components/Card";

describe("Card Component", () => {
    it("should render the card with the correct pokemon data", () => {
        const pokemon = {
            name: "Pikachu",
            hp: 100,
            attack: 55,
            defense: 40,
            imageUrl: "https://some-image-url.com/pikachu.png"
        };
        const { getByText, getByAltText } = render(<Card pokemon={pokemon} />);
        expect(getByText(pokemon.name)).toBeInTheDocument();
        expect(getByText(pokemon.hp)).toBeInTheDocument();
        expect(getByText(pokemon.attack)).toBeInTheDocument();
        expect(getByText(pokemon.defense)).toBeInTheDocument();
        expect(getByAltText(pokemon.name)).toBeInTheDocument();
    });
});