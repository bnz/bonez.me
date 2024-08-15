import { Fragment, useEffect, useState } from "react"
import { getChapter, getParam } from "./Chapter1"
import { cx } from "./cx"
import { useH2s } from "./H2sProvider"

type ChaptersListProps = {
    showSubtitle?: boolean
}

type DataType = {
    title: string
    pathname: string
    subTitle: string
}[]

export function ChaptersList({ showSubtitle }: ChaptersListProps) {
    const book = getParam("book")
    const chapter = getChapter()
    const { dispatch } = useH2s()
    const [data, setData] = useState<DataType>([])
    const TitleWrap = showSubtitle ? "b" : Fragment

    useEffect(function () {
        (async function () {
            const a: DataType = await (await fetch(`static/h2s-${book}.json`)).json()
            setData(a)
            const index = a.findIndex(function ({ pathname }) {
                return pathname === chapter
            })
            if (a[index - 1]) {
                const { pathname, title } = a[index - 1]
                dispatch({ type: "set-prev", payload: { pathname, title } })
            }
            if (a[index + 1]) {
                const { pathname, title } = a[index + 1]
                dispatch({ type: "set-next", payload: { pathname, title } })
            }
        })()
    }, [setData, dispatch, book, chapter])

    return (
        <ul>
            {data.map(function (item, i) {
                return (
                    <li key={i}>
                        <a href={`/?book=${book}&chapter=${item.pathname}`} className={cx(
                            "block px-3 py-1 hover:underline",
                            chapter === item.pathname && "underline font-bold",
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
