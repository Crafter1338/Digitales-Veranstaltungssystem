import { useMediaQuery } from "@mui/material";
import { createContext, useContext, useState, useEffect } from "react";

import { Box } from "@mui/joy"

const Context = createContext(null);

export function ViewportProvider({ children }) {
    const [width, setWidth]   = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    const isSm = useMediaQuery('(max-width:600px)');
    const isMd = useMediaQuery('(min-width:601px) and (max-width:900px)');
    const isLg = useMediaQuery('(min-width:901px)');

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <Context.Provider value={{ width, height, isSm, isMd, isLg }}>
            <Box sx={{ width: width, height: height }}>
                { children }     
            </Box>
        </Context.Provider>
    );
}

export function useViewport() {
    return useContext(Context);
}