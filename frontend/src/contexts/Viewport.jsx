import { Box } from "@mui/joy";
import { useMediaQuery } from "@mui/material";
import { createContext, useContext, useEffect, useState } from "react";

const ViewportContext = createContext(null);

export function ViewportProvider({ children }) {
    const [height, setHeight] = useState(window.innerHeight);
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setHeight(window.innerHeight);
            setWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <ViewportContext.Provider value={{ height, width }}>
            <Box sx={{ height: height, width: width }}>
                {children}
            </Box>
        </ViewportContext.Provider>
    );
}

export function useViewport() {
    return useContext(ViewportContext);
}