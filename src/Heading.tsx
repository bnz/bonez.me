import { useEffect, useState } from "react"

export function Heading() {
    const [heading, setHeading] = useState<{ name: string, author: string }>({
        name: "",
        author: "",
    })

    useEffect(function () {
        (async function () {
            const h = await (await fetch("static/index.json")).json()
            setHeading(h)
        })()
    }, [setHeading])

    return (
        <>
            <h1>{heading.name}</h1>
            <article>{heading.author}</article>
        </>
    )
}
