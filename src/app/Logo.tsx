import { useEffect, useState } from "react"

const MatchMedia = window.matchMedia("(prefers-color-scheme: dark)")

export function Logo() {
    const [isDark, setIsDark] = useState(MatchMedia.matches)

    useEffect(function () {
        MatchMedia.addEventListener("change", function (event) {
            setIsDark(event.matches)
        })
    }, [setIsDark])

    return (
        <div className="inline-flex items-center text-xl">
            b
            <img
                src={`static/logo.svg#${isDark ? "dark" : "light"}`}
                alt=""
                className="my-0 mx-1 p-0 rounded-full outline outline-1"
                width={24}
                height={24}
            />
            nez
        </div>
    )
}
