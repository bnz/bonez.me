import { createContext, Dispatch, PropsWithChildren, useContext, useReducer } from "react"

type Props = {
    pathname: string
    title: string
}

type PrevNext = {
    prev: Props
    next: Props
}

export const defaultValue: PrevNext = {
    prev: {
        pathname: "",
        title: "",
    },
    next: {
        pathname: "",
        title: "",
    },
}

export const Provider = createContext<PrevNext & { dispatch: Dispatch<Action> }>({
    ...defaultValue,
    dispatch() {
    },
})

type Action = {
    type: "set-prev" | "set-next"
    payload: Props
}

const reducer = (state: PrevNext, { type, payload }: Action): PrevNext => {
    switch (type) {
        case "set-prev":
            return {
                ...state,
                prev: payload,
            }
        case "set-next":
            return {
                ...state,
                next: payload,
            }
        default:
            return state
    }
}

export function H2sProvider({ children }: PropsWithChildren<{}>) {
    const [state, dispatch] = useReducer(reducer, defaultValue)

    return (
        <Provider.Provider value={{ ...state, dispatch }}>
            {children}
        </Provider.Provider>
    )
}

export function useH2s() {
    return useContext(Provider)
}
