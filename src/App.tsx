import "./App.css"
import { cx } from "./cx"
import { useState } from "react"
import { dots } from "./dots"

export function App() {
    const [size, setSize] = useState(
        "grid-cols-[repeat(24,minmax(150px,24px))] grid-rows-[repeat(24,minmax(150px,24px))]",
    )
    const [numbers, setNumbers] = useState(true)
    const [overflow, setOverflow] = useState(true)

    return (
        <>
            <div className="fixed top-1 left-1 flex gap-3 z-50 bg-white dark:bg-black">
                <button className="outline px-2 py-1 rounded" onClick={function () {
                    setSize("grid-cols-[repeat(24,minmax(24px,24px))] grid-rows-[repeat(24,minmax(24px,24px))]")
                }}>
                    24x24
                </button>
                <button className="outline px-2 py-1 rounded" onClick={function () {
                    setSize("grid-cols-[repeat(24,minmax(150px,24px))] grid-rows-[repeat(24,minmax(150px,24px))]")
                }}>
                    150x150
                </button>
                <button className="outline px-2 py-1 rounded" onClick={function () {
                    setSize("grid-cols-[repeat(24,minmax(50px,24px))] grid-rows-[repeat(24,minmax(50px,24px))]")
                }}>
                    50x50
                </button>
                <button className="outline px-2 py-1 rounded" onClick={function () {
                    setNumbers(function (prevState) {
                        return !prevState
                    })
                }}>
                    numbers
                </button>
                <button className="outline px-2 py-1 rounded" onClick={function () {
                    setOverflow(function (prevState) {
                        return !prevState
                    })
                }}>
                    overflow
                </button>
            </div>
            <div className="p-10 aspect-square inline-block">
                <div className={cx(
                    // "outline outline-1 outline-gray-700 rounded",
                    "overflow-hidden",
                    "grid",
                    size,
                )}>
                    {[...(new Array(24 * 24))].map(function (_, i) {
                        return (
                            <div
                                key={i}
                                className={cx(
                                    dots[i] || "",
                                    "flex justify-center items-center text-gray-600 relative",
                                    overflow && "overflow-hidden",
                                )}
                            >
                                {numbers && (
                                    <div className="z-1 relative bg-red-500 text-white px-0.5 rounded">{i}</div>
                                )}
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
