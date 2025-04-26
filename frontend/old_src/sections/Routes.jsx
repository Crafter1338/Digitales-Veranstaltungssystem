import { Navigate, Route, Routes } from "react-router-dom";

import { SignIn, SignUp, DataPrivacyPolicy, Imprint } from '.'

export default function({ children }) {
    return (
        <Routes>
            <Route
                path="/sign-in"
                element={<SignIn />}
            />

            <Route
                path="/sign-up"
                element={<SignUp />}
            />

            <Route
                path="/data-privacy-policy"
                element={<DataPrivacyPolicy />}
            />

            <Route
                path="/imprint"
                element={<Imprint />}
            />

            { children }
        </Routes>
    );
}