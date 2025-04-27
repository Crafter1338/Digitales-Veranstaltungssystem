import { createContext, useContext, useState } from "react";

const Context = createContext(null)

export function SignUpProvider({ children }) {
    const [step     , setStep    ] = useState(1);
    const [forename , setForename] = useState('');
    const [surname  , setSurname ] = useState('');
    const [email    , setEmail   ] = useState('');
    const [color    , setColor   ] = useState('');
    const [password , setPassword] = useState('');

    const performSignUp = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/sign-up', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ forename, surname, username: surname.toLowerCase() + '.' + forename.toLowerCase(), email, color, password })
            });

            const data = await response.json();
            console.log('Response:', data);
        } catch (error) {
            console.error('SignIn error:', error);
        }
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