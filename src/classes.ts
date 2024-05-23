import { cx } from "./cx"

// const ANIMATE = "animate-pulse"
const ANIMATE = ""

export const B_COLOR = cx("dark:bg-gray-700 bg-gray-400", ANIMATE)
export const B_COLOR_BEFORE = cx("dark:before:bg-gray-700 before:bg-gray-400", ANIMATE)
export const O_COLOR = cx("dark:bg-red-700 bg-red-400", ANIMATE)
export const O_COLOR_BEFORE = cx("dark:before:bg-red-700 before:bg-red-400", ANIMATE)
export const N_COLOR = cx("dark:bg-orange-700 bg-orange-400", ANIMATE)
export const N_COLOR_BEFORE = cx("dark:before:bg-orange-700 before:bg-orange-400", ANIMATE)
export const E_COLOR = cx("dark:bg-green-700 bg-green-400", ANIMATE)
export const E_COLOR_BEFORE = cx("dark:before:bg-green-700 before:bg-green-400", ANIMATE)
export const Z_COLOR = cx("dark:bg-cyan-700 bg-cyan-400", ANIMATE)
export const Z_COLOR_BEFORE = cx("dark:before:bg-cyan-700 before:bg-cyan-400", ANIMATE)

export const FRAME_COLOR = cx("dark:bg-purple-700 bg-purple-400")

export const BEFORE_BASE = cx(
    "before:block before:absolute before:inset-0",
)

export const BOTTOM_LEFT_CORNER_FULL = cx(
    BEFORE_BASE,
    "before:-right-1/2",
    "before:rotate-45",
    "before:origin-top-left",
)

export const BOTTOM_RIGHT_CORNER_FULL = cx(
    BEFORE_BASE,
    "before:-left-1/2",
    "before:-rotate-45",
    "before:origin-top-right",
)

export const TOP_RIGHT_CORNER_FULL_SHIFTED = cx(
    BEFORE_BASE,
    "before:-left-full",
    "before:-bottom-1/3",
    "before:rotate-45",
    "before:origin-bottom-right",
)

export const TOP_LEFT_CORNER_FULL_SHIFTED = cx(
    BEFORE_BASE,
    "before:-right-full",
    "before:-bottom-1/3",
    "before:-rotate-45",
    "before:origin-bottom-left",
)

export const TOP_RIGHT_CORNER_FULL_SHIFTED_SMALL = cx(
    BEFORE_BASE,
    "before:-left-full",
    "before:bottom-2/3",
    "before:rotate-45",
    "before:origin-bottom-right",
)

export const TOP_LEFT_CORNER_FULL_SHIFTED_SMALL = cx(
    BEFORE_BASE,
    "before:-left-2/3",
    "before:top-2/3",
    "before:-rotate-45",
    "before:origin-bottom-left",
)
