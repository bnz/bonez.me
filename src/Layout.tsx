import { Sidebar } from "./Sidebar"
import { Main } from "./Main"
import { Chapter1 } from "./Chapter1"
import { H2s } from "./H2s"
import { Container } from "./Container"

export function Layout() {
    return (
        <Main>
            <Sidebar>
                <H2s />
            </Sidebar>
            <Container>
                <Chapter1 />
                <div className="mx-auto my-10 md:my-20 w-2.5 h-2.5 rotate-45 bg-[--alt-background-color]" />
            </Container>
        </Main>
    )
}
