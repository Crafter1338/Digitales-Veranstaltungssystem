import { Box, Typography, Link } from "@mui/joy"
import { Link as BrowserLink } from "react-router-dom"

export default function({ sx }) {
    return (
        <Box sx={{
            position: 'sticky',
            bottom: 0,

            width: 1,
            padding: 2,
            zIndex: 10,

            display: 'flex',
            flexDirection: 'row',
            gap: 2,

            justifyContent: 'center',
            alignItems: 'center',

            ...sx
        }}>
            <Link component={BrowserLink} color="primary" to="/imprint">Impressum</Link>
            <Typography>-</Typography>
            <Link component={BrowserLink} color="primary" to="/data-privacy-policy">Datenschutzerklärung</Link>
        </Box>
    );
}