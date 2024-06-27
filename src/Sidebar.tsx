import { cx } from "./cx"
import { PropsWithChildren } from "react"

export function Sidebar({ children }: PropsWithChildren<{}>) {
    return (
        <>
            <input id="menu" type="checkbox" className="peer hidden" />
            <label
                htmlFor="menu"
                className="hidden peer-checked:block lg:!hidden bg-black/25 fixed inset-0 z-20"
            />
            <label
                htmlFor="menu"
                className="fixed top-0 left-0 w-10 lg:w-20 lg:h-20 p-0.5 lg:p-4 rounded block z-20 peer-checked:hidden lg:hidden cursor-pointer"
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </label>
            <aside className={cx(
                "bg-[--alt-background-color]",
                "fixed top-0 left-0 bottom-0",
                "-translate-x-full",

                "w-full xs:w-4/5 sm:w-1/2 md:w-1/3 lg:!w-64 lg:min-w-64",

                "z-20 overflow-hidden",
                "duration-100 ease-in-out transition-all transform",
                "peer-checked:translate-x-0",
                "peer-checked:shadow-xl",

                "lg:block lg:sticky lg:top-20 lg:left-auto lg:self-start lg:mt-10 lg:min-h-44 lg:z-0",
                "lg:overflow-visible lg:translate-x-0 lg:rounded lg:!shadow-none",
            )}>
                {children}
                <label
                    htmlFor="menu"
                    className="absolute right-1 top-1 w-10 h-10 rounded lg:hidden cursor-pointer"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                        stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </label>
            </aside>
        </>
    )
}
