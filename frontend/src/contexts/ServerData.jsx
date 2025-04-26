import { createContext, useContext, useState } from "react";

const Context = createContext(null)

export function ServerDataProvider({ children }) {
    return (
        <Context.Provider value={{}}>
            { children }
        </Context.Provider>
    );
}

export function useServerData() {
    return useContext(Context);
}