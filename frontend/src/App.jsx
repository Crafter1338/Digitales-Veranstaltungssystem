import { Navigate, Route, Routes } from "react-router-dom";
import { DataPrivacyPolicy, Imprint, SignIn, SignUp } from "./sections";
import ContextStructure from './ContextStructure'

export default function App() {
    return (
        <>
            <ContextStructure>
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
                </Routes>
            </ContextStructure>
        </>
    );
}