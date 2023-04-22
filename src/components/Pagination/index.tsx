import { CaretDoubleLeft, CaretDoubleRight, CaretLeft, CaretRight } from "@phosphor-icons/react";
import { Page } from "../../utils/types/page";
import { PaginationContainer } from "./styles";

interface PaginationProps {
    count: number,
    next: string | null,
    loading: boolean,
    page: Page,
    prev: string | null,
    setPage: React.Dispatch<React.SetStateAction<Page>>
}

export function Pagination({ count, next, loading, page, prev, setPage }: PaginationProps) {

    const numberOfPages = Math.ceil(count / 5)

    const accomodatePage = (clickedPage: number) => {
        if (clickedPage <= 1) { return clickedPage + 2 }
        if (clickedPage <= 2) { return clickedPage + 1 }
        if (clickedPage >= numberOfPages) { return clickedPage - 2 }
        if (clickedPage >= (numberOfPages - 1)) { return clickedPage - 1 }
        return clickedPage
    }

    const currPageNum = accomodatePage(page.current)

    function handlePagination(offset: number, current: number) {
        setPage((prev) => {
            return { ...prev, offset, current }
        })
    }

    return (
        <PaginationContainer>
            {
                !!prev && (
                    <>
                        <li>
                            <button onClick={() => handlePagination(0, 1)} disabled={loading}>
                                <CaretDoubleLeft weight="bold" />
                            </button>
                        </li>
                        <li>
                            <button onClick={() => handlePagination(((page.current - 2) * 5), (page.current - 1))} disabled={loading}>
                                <CaretLeft weight="bold" />
                            </button>
                        </li>
                    </>
                )
            }
            {
                [...Array(5).keys()].map((i) => {
                    const isCurrent = page.current === (currPageNum - 2 + i);
                    return (
                        <li key={'item' + i}>
                            <button
                                className={isCurrent ? 'active' : ''}
                                disabled={loading}
                                onClick={() => {
                                    !isCurrent && handlePagination(((currPageNum - 2 + i) - 1) * 5, (currPageNum - 2 + i))
                                }}
                            >
                                {currPageNum - 2 + i}
                            </button>
                        </li>
                    )
                })
            }
            {
                !!next && (
                    <>
                        <li>
                            <button onClick={() => handlePagination((page.current * 5), (page.current + 1))} disabled={loading}>
                                <CaretRight weight="bold" />
                            </button>
                        </li>
                        <li>
                            <button onClick={() => handlePagination((numberOfPages - 1) * 5, numberOfPages)} disabled={loading}>
                                <CaretDoubleRight weight="bold" />
                            </button>
                        </li>
                    </>
                )
            }
        </PaginationContainer >
    )
}