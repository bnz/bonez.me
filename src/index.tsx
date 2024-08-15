import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
// import { App } from "./App"
import { Layout } from "./Layout"
// import { App } from "./app/App"

createRoot(
    document.getElementById("root") as HTMLElement,
).render(
    <StrictMode>
        <Layout />
    </StrictMode>,
)
