import { ViewportProvider } from "./Viewport";
import { SignUpDataProvider } from "../sections/auth/sign-up/SignUpData";

export default function({ children }) {
    return (
        <>
            <ViewportProvider>
                <SignUpDataProvider>
                    { children }
                </SignUpDataProvider>
            </ViewportProvider>
        </>
    );
}