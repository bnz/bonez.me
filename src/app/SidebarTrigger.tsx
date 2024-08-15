import { PropsWithChildren } from "react"

type SidebarTriggerProps = PropsWithChildren<{
    className?: string
}>

export function SidebarTrigger({ children, className }: SidebarTriggerProps) {
    return (
        <label htmlFor="menu" className={className}>
            {children}
        </label>
    )
}
