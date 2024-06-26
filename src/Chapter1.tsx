import { useEffect, useState } from "react"
import { cx } from "./cx"

function isObject(obj: any) {
    return typeof obj === 'object' && !Array.isArray(obj) && obj !== null
}

export function Chapter1() {
    const [data, setData] = useState({})
    const file = window.location.pathname

    useEffect(function () {
        (async function () {
            if (file !== "/") {
                const a = await (await fetch(`static/chapters/${file}.json`)).json()
                setData(a)
            }
        })()
    }, [setData, file])

    return (
        <>
            {Object.entries(data).map(function ([Tag, content], index) {
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
                                        src={`static/img${file}-${src}`}
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
        </>
    )
}
