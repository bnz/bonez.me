import { useEffect, useState } from "react"
import { cx } from "./cx"

export function H2s() {
    const [data, setData] = useState([])

    useEffect(function () {
        (async function () {
            const a = await (await fetch("static/h2s.json")).json()
            setData(a)
        })()
    }, [setData])

    const current = window.location.pathname

    return (
        <ul>
            {data.map(function ({ title, pathname }, i) {
                return (
                    <li key={i}>
                        <a href={`/${pathname}`} className={cx(
                            "block px-3 py-1 hover:underline",
                            current === `/${pathname}` && "underline font-bold"
                        )}>
                            {title}
                        </a>
                    </li>
                )
            })}
        </ul>
    )
}
