import { type PropsWithChildren } from "react"
import { cx } from "../cx"

type RadioProps = PropsWithChildren<{
    name: string
    value: string | number
    className?: string
    defaultChecked?: boolean
    checked?: boolean
}>

export function Radio({ name, value, children, className, defaultChecked, checked }: RadioProps) {
    return (
        <label className="contents">
            <input
                defaultChecked={defaultChecked}
                checked={checked}
                type="radio"
                name={name}
                value={value}
                className={cx(
                    "appearance-none hidden peer/radio1",
                    "[&:checked+div]:bg-blue-600",
                    // "[&:checked+div]:text-white",
                    "[&:checked+div>div:first-child]:text-white",
                    "[&:checked+div>div:first-child+div]:text-gray-200",
                )}
            />
            <div className={className}>
                {children}
            </div>
        </label>
    )
}
