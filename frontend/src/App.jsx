import { Navigate, Route, Routes } from "react-router-dom";
import { SignIn, SignUp } from "./pages"
import { ContextStructure } from "./contexts"

export default function App() {
	return (
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
                    path="*"
                    element={<SignIn />}
                />
            </Routes>
        </ContextStructure>
	);
}
