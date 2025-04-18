import { createRoot } from "react-dom/client";
import { useEffect } from "react";
import "@fontsource/inter";
import "./main.css";

import App from "./App.jsx";

import { CssVarsProvider } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById('root')).render(
        <CssVarsProvider defaultMode="system">
            <CssBaseline />

            <BrowserRouter>
                <App />
            </BrowserRouter>
        </CssVarsProvider>
);
