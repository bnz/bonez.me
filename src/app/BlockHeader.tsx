import { PropsWithChildren } from "react"

export function BlockHeader({ children }: PropsWithChildren<{}>) {
    return (
        <div className="h-14 p-1 border-b flex items-center gap-2">
            {children}
        </div>
    )
}
