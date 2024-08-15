import { filter, selectedItem } from "./state"
import data from "./data.json"
import { useMemo } from "react"
import { Radio } from "./Radio"
import { cx } from "../cx"

export function List() {
    const filtered = useMemo(function () {
        const result = data.filter(function ({ type }) {
            return type === filter.value
        })

        if (result.length === 0) {
            return data
        }

        return result
    }, [filter.value])

    return (
        <form
            onChange={function (event) {
                // @ts-ignore
                selectedItem.value = event.target.value
            }}
            className="p-2"
        >
            {filtered.map(function ({ _id, name, email }, i) {
                return (
                    <Radio
                        key={_id}
                        name="item2"
                        value={_id}
                        className="p-2 rounded cursor-pointer hover:bg-gray-200 mb-1 block"
                        defaultChecked={selectedItem.value === _id}
                    >
                        <div>{name}</div>
                        <div className="text-xs text-gray-500">
                            {email}
                        </div>
                    </Radio>
                )
            })}
        </form>
    )
}
