import { PropsWithChildren } from "react"
import { Header } from "./Header"
import { Footer } from "./Footer"

export function Main({ children }: PropsWithChildren<{}>) {
    return (
        <>
            <main className="min-h-full -mb-80 after:h-80 after:block">
                <Header />
                <div className="relative mx-auto max-w-screen-2xl md:px-3 flex-1 md:flex md:flex-row">
                    {children}
                </div>
            </main>
            <Footer />
        </>
    )
}
