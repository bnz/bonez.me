import { cx } from "./cx"

export function Header() {
    return (
        <header className={cx(
            "sticky top-0 h-10 lg:h-20 bg-[--main-background-color] z-10",
            "flex justify-around items-center",
            "shadow-lg",
        )}>
            <a href="/" className={cx(
                "lg:text-4xl flex gap-4 px-3 pb-1 lg:pb-2 rounded",
                "before:content-['['] before:text-yellow-700",
                "after:content-[']'] after:text-yellow-700",
            )}>
                <span className="text-red-500">b</span>
                <span className="text-blue-500">o</span>
                <span className="text-yellow-700 dark:text-yellow-500">n</span>
                <span className="text-gray-500">e</span>
                <span className="text-green-700 dark:text-green-500">z</span>
            </a>
        </header>
    )
}
