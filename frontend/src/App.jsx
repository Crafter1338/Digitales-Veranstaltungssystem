import { Navigate, Route, Routes } from "react-router-dom";
import { SignIn } from "./pages"
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
                    element={<SignIn />}
                />

                <Route
                    path="*"
                    element={<SignIn />}
                />
            </Routes>
        </ContextStructure>
	);
}
