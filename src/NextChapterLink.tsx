import { useH2s } from "./H2sProvider"
import { getParam } from "./Chapter1"

export function NextChapterLink() {
    const book = getParam("book")
    const { prev, next } = useH2s()

    return (
        <div className="pt-5 mt-5 border-t border-[--alt-background-color] clear-both flex flex-row justify-between">
            {prev.pathname !== "" ? (
                <a href={`/?book=${book}&chapter=${prev.pathname}`} className="p-5 md:p-3">
                    <svg width="26px" height="26px" viewBox="0 0 26 26" className="inline-block w-4 mr-2">
                        <path
                            d="M17.761,25.146L20.886,22.145L11.364,13L20.886,3.855L17.761,0.854L5.114,13L17.761,25.146Z"
                            fill="var(--main-text-color)" />
                    </svg>
                    <span className="hidden md:inline-block">{prev.title}</span>
                </a>
            ) : <div />}
            {next.pathname !== "" && (
                <a href={`/?book=${book}&chapter=${next.pathname}`} className="p-5 md:p-3">
                    <span className="hidden md:inline-block">{next.title}</span>
                    <svg width="26px" height="26px" viewBox="0 0 26 26" className="inline-block w-4 ml-2">
                        <path d="M8.239,25.146L5.114,22.145L14.636,13L5.114,3.855L8.239,0.854L20.886,13L8.239,25.146Z"
                            fill="var(--main-text-color)" />
                    </svg>
                </a>
            )}
        </div>
    )
}
