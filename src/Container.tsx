import { PropsWithChildren, useEffect, useRef, useState } from "react"
import { cx } from "./cx"

export function Container({ children }: PropsWithChildren<{}>) {
    const ref = useRef<HTMLDivElement>(null)

    const [width, setWidth] = useState("0%")

    useEffect(function () {
        window.addEventListener('scroll', function () {
            if (ref.current) {
                const section = ref.current
                const scrollDistance = -(section.getBoundingClientRect().top)
                const progressPercentage =
                    (scrollDistance /
                        (section.getBoundingClientRect().height -
                            document.documentElement.clientHeight)) * 100

                const val = Math.floor(progressPercentage)
                setWidth((val <= 100 ? val : 100) + '%')

                if (val < 0) {
                    setWidth('0%')
                }
            }
        })
    }, [setWidth])

    return (
        <section className="relative p-3 pt-10" ref={ref}>
            <div style={{ width }} className={cx(
                "rounded",
                "sticky top-20 -left-3 md:left-0 h-0.5 md:h-1 z-10",
                "bg-[--main-text-color]",
                "transition-[width] duration-200 ease-out",
            )} />
            {children}
        </section>
    )
}
