import { createContext, useContext, useState } from "react";

const Context = createContext(null)

export function SignUpProvider({ children }) {
    const [step     , setStep    ] = useState(1);
    const [forename , setForename] = useState('');
    const [surname  , setSurname ] = useState('');
    const [email    , setEmail   ] = useState('');
    const [color    , setColor   ] = useState('');
    const [password , setPassword] = useState('');

    const performSignUp = () => {

    }

    return (
        <Context.Provider value={{
            step     , setStep     ,
            forename , setForename ,
            surname  , setSurname  ,
            email    , setEmail    ,
            color    , setColor    ,
            password , setPassword ,

            performSignUp
        }}>
            { children }
        </Context.Provider>
    );
}

export function useSignUp() {
    return useContext(Context);
}