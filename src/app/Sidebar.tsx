import { cx } from "../cx"
import { BlockHeader } from "./BlockHeader"
import { SidebarTrigger } from "./SidebarTrigger"
import { Radio } from "./Radio"
import data from "./data.json"
import { useMemo } from "react"
import { filter } from "./state"
import { Logo } from "./Logo"

export function Sidebar() {
    const uniqueTypes = useMemo(function () {
        return [...new Set(data.map(function ({ type }) {
            return type
        }))]
    }, [])

    return (
        <>
            <input id="menu" type="checkbox" defaultChecked={false} className="peer/menu hidden appearance-none" />
            <SidebarTrigger className="block peer-checked/menu:hidden fixed md:hidden inset-0 bg-black/25" />
            <div className={cx(
                "transition-all",
                "peer-checked/menu:w-0 peer-checked/menu:min-w-0 peer-checked/menu:overflow-hidden",
                "bg-[--alt-background-color]",
                "lg:rounded-tl-xl lg:rounded-bl-xl",
                "min-w-64 max-w-72",

                "absolute md:static left-0 md:left-auto top-0 md:top-auto bottom-0 md:bottom-auto",
                "shadow-xl md:shadow-none",
            )}>
                <BlockHeader>
                    <SidebarTrigger
                        className="hidden md:inline-block px-3 py-1 cursor-pointer rounded-xl outline outline-1"
                    >
                        hide
                    </SidebarTrigger>
                    <div>
                        <Logo />
                    </div>
                </BlockHeader>
                <div>
                    <form className="grid grid-cols-2 gap-2 p-2"
                        onChange={function (event) {
                            // @ts-ignore
                            filter.value = event.target.value
                        }}
                    >
                        {["all", ...uniqueTypes].map(function (type, i) {
                            return (
                                <Radio
                                    defaultChecked={type === "all"}
                                    key={i}
                                    name="items1"
                                    value={type}
                                    className="cursor-pointer p-3 rounded-xl text-center bg-gray-200"
                                >
                                    {type}
                                </Radio>
                            )
                        })}
                    </form>
                </div>
            </div>
            <SidebarTrigger
                className={cx(
                    "absolute left-1 top-1 outline bg-[--alt-background-color] p-1 md:hidden rounded-xl cursor-pointer",
                    "",
                )}
            >
                menu
            </SidebarTrigger>
        </>
    )
}
