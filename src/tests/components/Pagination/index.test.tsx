import { render, fireEvent } from "@testing-library/react";
import { Pagination } from "../../../components/Pagination";

describe("Pagination", () => {
    const setPage = jest.fn();
    const page = { limit: 5, offset: 0, current: 1 };
    const count = 26;
    const next = "https://pokeapi.co/api/v2/pokemon?offset=5&limit=5";
    const prev = null;
    const loading = false;

    it("renders the component with correct number of pages", () => {
        const { getAllByRole } = render(
            <Pagination
                count={count}
                next={next}
                loading={loading}
                page={page}
                prev={prev}
                setPage={setPage}
            />
        );
        const buttons = getAllByRole("button");
        expect(buttons).toHaveLength(7);
    });

    it("renders the active page button", () => {
        const { getByRole } = render(
            <Pagination
                count={count}
                next={next}
                loading={loading}
                page={page}
                prev={prev}
                setPage={setPage}
            />
        );
        const activeButton = getByRole("button", { name: /1/ });
        expect(activeButton).toHaveClass("active");
    });

    it("disables the navigation button on loading", () => {
        const { getByRole } = render(
            <Pagination
                count={count}
                next={next}
                loading={true}
                page={page}
                prev={prev}
                setPage={setPage}
            />
        );
        const disabledButton = getByRole("button", { name: /2/ });
        expect(disabledButton).toBeDisabled();
    });

    it("triggers setPage function when a button is clicked", () => {
        const { getByRole } = render(
            <Pagination
                count={count}
                next={next}
                loading={loading}
                page={page}
                prev={prev}
                setPage={setPage}
            />
        );
        const pageButton = getByRole("button", { name: /2/ });
        fireEvent.click(pageButton);
        expect(setPage).toHaveBeenCalledTimes(1);
    });
});