import { Navigate, Route, Routes } from "react-router-dom";
import { SignIn } from "./pages"

export default function App() {
	return (
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
	);
}
