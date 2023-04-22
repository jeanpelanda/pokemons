import { Spinner } from "@phosphor-icons/react";
import { LoadingContainer } from "./styles";

export function Loading() {
    return (
        <LoadingContainer data-testid="loading-spinner">
            <Spinner color="#FFF" size={32} />
        </LoadingContainer>
    )
}