import { createContext, useContext, useState } from "react";

const Context = createContext(null);

export function SignUpDataProvider({ children }) {
    const [signUpData, setSignUpData] = useState({
        step: 1,
        forename: '',
        surname: '',
        email: '',
        color: '',
        password: '',
    });

    return (
        <Context.Provider value={{ signUpData, setSignUpData }}>
            {children}
        </Context.Provider>
    );
}

export function useSignUpData() {
    return useContext(Context);
}