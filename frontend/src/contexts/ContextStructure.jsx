import { ViewportProvider } from "./Viewport";

export default function({ children }) {
    return (
        <ViewportProvider>
            {children}
        </ViewportProvider>
    );
}