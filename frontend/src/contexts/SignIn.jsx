import { createContext, useContext, useState } from "react";

const Context = createContext(null)

export function SignInProvider({ children }) {
    const [identifier , setIdentifier] = useState('');
    const [password   , setPassword  ] = useState('');

    const performSignIn = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/sign-in', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({identifier, password})
            });

            const data = await response.json();
            console.log('Response:', data);
        } catch (error) {
            console.error('SignIn error:', error);
        }
    };

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