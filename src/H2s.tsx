import { Heading } from "./Heading"
import { ChaptersList } from "./ChaptersList"

export function H2s() {
    return (
        <div className="absolute lg:static inset-0 overflow-auto p-2">
            <Heading />
            <ChaptersList />
        </div>
    )
}
