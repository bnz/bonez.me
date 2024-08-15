import { useEffect, useState } from "react"
import { getParam } from "./Chapter1"

export function Heading() {
    const book = getParam("book")
    const [heading, setHeading] = useState<{ name: string, author: string }>({
        name: "",
        author: "",
    })

    useEffect(function () {
        (async function () {
            const h = await (await fetch("static/index.json")).json()
            setHeading(h.find(function ({ id }: any) {
                return id === book
            }))
        })()
    }, [setHeading, book])

    return (
        <>
            <h1>{heading.name}</h1>
            <article>{heading.author}</article>
        </>
    )
}
