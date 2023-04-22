import { ErrorContainer } from "./styles";

export function Error() {

    function reloadPage() {
        window.location.reload()
    }

    return (
        <ErrorContainer>
            <p>Oops, something went wrong. Please, try again later.</p>
            <button onClick={() => reloadPage()}>OK</button>
        </ErrorContainer>
    )
}