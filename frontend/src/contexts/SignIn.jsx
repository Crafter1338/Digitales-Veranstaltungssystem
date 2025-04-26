import { createContext, useContext, useState } from "react";

const Context = createContext(null)

export function SignInProvider({ children }) {
    const [identifier , setIdentifier] = useState('');
    const [password   , setPassword  ] = useState('');

    const performSignIn = () => {

    }

    return (
        <Context.Provider value={{
            identifier , setIdentifier ,
            password   , setPassword   ,

            performSignIn
        }}>
            { children }
        </Context.Provider>
    );
}

export function useSignIn() {
    return useContext(Context);
}