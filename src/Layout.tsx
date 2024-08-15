import { Sidebar } from "./Sidebar"
import { Main } from "./Main"
import { Chapter1, getParam } from "./Chapter1"
import { H2s } from "./H2s"
import { Container } from "./Container"
import { EndDot } from "./EndDot"
import { H2sProvider } from "./H2sProvider"
import { useEffect, useState } from "react"

export function Layout() {
    const book = getParam("book")

    if (book === null) {
        return (
            <SelectBook />
        )
    }

    return (
        <H2sProvider>
            <Main>
                <Sidebar>
                    <H2s />
                </Sidebar>
                <Container>
                    <Chapter1 />
                    <EndDot />
                </Container>
            </Main>
        </H2sProvider>
    )
}

function SelectBook() {
    const [books, setBooks] = useState([])

    useEffect(function () {
        (async function () {
            const h = await (await fetch("static/index.json")).json()

            setBooks(h)
        })()
    }, [setBooks])

    return (
        <H2sProvider>
            <Main>
                <ul className="p-3">
                    {books.map(function ({ id, name, author }) {
                        return (
                            <li key={id}>
                                <a href={`/?book=${id}`} className="p-3 block">
                                    {name}, {author}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </Main>
        </H2sProvider>
    )
}
