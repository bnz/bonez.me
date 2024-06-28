import { Sidebar } from "./Sidebar"
import { Main } from "./Main"
import { Chapter1 } from "./Chapter1"
import { H2s } from "./H2s"
import { Container } from "./Container"
import { EndDot } from "./EndDot"
import { H2sProvider } from "./H2sProvider"

export function Layout() {
    return (
        <H2sProvider>
            <Main>
                <Sidebar>
                    <H2s />
                </Sidebar>
                <Container>
                    <Chapter1 />
                    <EndDot />
                </Container>
            </Main>
        </H2sProvider>
    )
}
