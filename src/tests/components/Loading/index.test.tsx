import { render } from "@testing-library/react";
import { Loading } from "../../../components/Loading";

describe("Loading Component", () => {
    it("should render the loading spinner", () => {
        const { getByTestId } = render(<Loading />);
        const spinnerElement = getByTestId("loading-spinner");
        expect(spinnerElement).toBeInTheDocument();
    });
});