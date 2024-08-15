import { cx } from "../cx"
import { Sidebar } from "./Sidebar"
import { SidebarTrigger } from "./SidebarTrigger"
import { BlockHeader } from "./BlockHeader"
import { List } from "./List"
import { Notes } from "./Notes"
import { useSignals } from "@preact/signals-react/runtime"

export function App() {
    useSignals()

    return (
        <div className={cx(
            "md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2",
            "md:w-full md:max-w-screen-lg md:h-[90%]",
        )}>
            <div className={cx(
                "absolute inset-0 md:inset-5",
                "md:rounded-xl md:shadow-xl",
                "flex flex-row",
            )}>
                <Sidebar />
                <div className="w-56 peer-[&_label]/menu:peer-checked/menu:md:inline-block">
                    <BlockHeader>
                        <SidebarTrigger className="px-3 py-1 hidden cursor-pointer rounded-xl outline outline-1">
                            open
                        </SidebarTrigger>
                    </BlockHeader>
                    <List />
                </div>
                <div className="flex-1 bg-gray-200 rounded-tr-xl rounded-br-xl">
                    <BlockHeader>
                        notes
                    </BlockHeader>
                    <Notes />
                </div>
            </div>
        </div>
    )
}
