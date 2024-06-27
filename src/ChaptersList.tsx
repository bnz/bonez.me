import { Fragment, useEffect, useState } from "react"
import { getChapter } from "./Chapter1"
import { cx } from "./cx"

type ChaptersListProps = {
    showSubtitle?: boolean
}

export function ChaptersList({ showSubtitle }: ChaptersListProps) {
    const [data, setData] = useState<{
        title: string
        pathname: string
        subTitle: string
    }[]>([])

    useEffect(function () {
        (async function () {
            const a = await (await fetch("static/h2s.json")).json()
            setData(a)
        })()
    }, [setData])

    const current = getChapter()

    const TitleWrap = showSubtitle ? "b" : Fragment

    return (
        <ul>
            {data.map(function (item, i) {
                return (
                    <li key={i}>
                        <a href={`/?chapter=${item.pathname}`} className={cx(
                            "block px-3 py-1 hover:underline",
                            current === item.pathname && "underline font-bold"
                        )}>
                            <TitleWrap>{item.title}</TitleWrap>
                            {showSubtitle ? (
                                <>.{" "}{item.subTitle}</>
                            ) : null}
                        </a>
                    </li>
                )
            })}
        </ul>
    )
}
