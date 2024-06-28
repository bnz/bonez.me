import { useEffect, useState } from "react"
import { cx } from "./cx"
import { ChaptersList } from "./ChaptersList"
import { NextChapterLink } from "./NextChapterLink"

function isObject(obj: any) {
    return typeof obj === 'object' && !Array.isArray(obj) && obj !== null
}

export function getChapter() {
    const searchParams = new URLSearchParams(window.location.search)
    return searchParams.get("chapter")
}

export function Chapter1() {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState<[string, any][]>([])
    const file = getChapter()

    useEffect(function () {
        (async function () {
            if (file && file !== "/") {
                setLoading(true)
                const a = await (await fetch(`static/chapters/${file}.json`)).json()
                setLoading(false)
                setData(Object.entries(a))
            }
        })()
    }, [setData, file, setLoading])

    if (loading) {
        return <>...</>
    }

    return (
        <>
            {data.length === 0 && !loading && (
                <div>
                    <img
                        src={`static/img/000-001.jpg`}
                        alt=""
                    />
                    <ChaptersList showSubtitle />
                </div>
            )}
            {data.map(function ([Tag, content], index) {
                return Array.isArray(content) ? content.map(function (contentString, j) {

                    if (isObject(contentString)) {
                        return Object.entries(contentString).map(function ([Tag, value]: [string, any], i) {

                            if (Tag === "img") {
                                let src = value
                                let className = "md:float-right md:ml-3"

                                if (isObject(value)) {
                                    src = value.src
                                    if (value.placement === "left") {
                                        className = "md:float-left md:mr-3"
                                    }
                                }

                                return (
                                    <img
                                        className={cx("md:max-w-[250px] lg:max-w-[350px] 2xl:max-w-[500px]", className)}
                                        src={`static/img/${file}-${src}`}
                                        alt={value as string}
                                        key={index + j + i}
                                    />
                                )
                            }

                            if (Tag === "table") {
                                return (
                                    <table key={index + j + i}>
                                        <tbody>
                                        {Object.entries(value).map(function ([Tag2, trs], index2) {
                                            return (trs as any[]).map(function (val, index3) {
                                                return Object.entries(val).map(function ([Tag, content], i) {
                                                    return (
                                                        // @ts-ignore
                                                        <Tag2 key={index2}>
                                                            {(content as any[]).map(function (contentString, j) {
                                                                return (
                                                                    // @ts-ignore
                                                                    <Tag key={`${index3}${j}`}>
                                                                        {contentString}
                                                                    </Tag>
                                                                )
                                                            })}
                                                        </Tag2>
                                                    )
                                                })
                                            })
                                        })}
                                        </tbody>
                                    </table>
                                )
                            }

                            return (
                                // @ts-ignore
                                <Tag key={index + j + i}>{value}</Tag>
                            )
                        })
                    }

                    return (
                        // @ts-ignore
                        <Tag key={index + j}>{contentString}</Tag>
                    )
                }) : (
                    // @ts-ignore
                    <Tag key={index}>{content}</Tag>
                )
            })}
            {data.length > 0 && !loading && (
                <NextChapterLink />
            )}
        </>
    )
}
