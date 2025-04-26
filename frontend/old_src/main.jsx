import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "@fontsource/inter";
import { CssVarsProvider } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";
import './css/main.css';

import App from './App'

createRoot(document.getElementById('root')).render(
    <CssVarsProvider defaultMode="system">
        <CssBaseline />

        <BrowserRouter>
            <App />
        </BrowserRouter>
    </CssVarsProvider>
);