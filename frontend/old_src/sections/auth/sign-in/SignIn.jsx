import { IconButton, Box, Card, CardContent, Chip, Divider, FormControl, FormLabel, Input, Typography, Link, Button, Checkbox } from "@mui/joy"
import { useState } from "react";
import { Link as BrowserLink } from "react-router-dom"

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useViewport } from "../../../contexts";
import { ImprintNotice } from "../../../components";

export default function () {
    const [isPasswordModalVisible, setIsPasswordModalVisible] = useState(false)

    const [accountIdentifier, setAccountIdentifier] = useState('')
    const [password, setPassword] = useState('')
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)

    const togglePasswordVisibility = () => {
        setIsPasswordVisible((last) => !last)
    }

    const signIn = () => {

    }

    const { isSm } = useViewport()

    return (
        <>
            {/* Wrapper */}
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',

                width: 1,
                height: 1,

                alignItems: 'center',
                justifyContent: 'space-between',
                position: 'relative',
            }}>
                {/* Form */}
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1,
                    overflow: 'auto',

                    maxWidth: 500,
                    width: 1,

                    alignItems: 'center',
                    justifyContent: isSm? 'unset':'center',
                }}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,

                        width: 1,
    
                        pt: isSm && 3,
                        px: isSm && 2,
                    }}>
                        <Card>
                            <Typography level="h3">
                                Digitales Veranstaltungssystem
                            </Typography>
                        </Card>

                        <Card>
                            <Typography level="h4">
                                Melde dich an um fortzufahren:
                            </Typography>

                            <Divider sx={{ m: 0 }} />

                            <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                <FormControl>
                                    <FormLabel>
                                        Benutzername oder Email:
                                    </FormLabel>

                                    <Input value={accountIdentifier} onChange={(e) => { setAccountIdentifier(e.target.value.toLowerCase()) }} />
                                </FormControl>

                                <FormControl>
                                    <FormLabel>
                                        Passwort:
                                    </FormLabel>

                                    <Input type={isPasswordVisible ? 'text' : 'password'} value={password} onChange={(e) => { setPassword(e.target.value) }} endDecorator={
                                        <IconButton onClick={togglePasswordVisibility}>
                                            {isPasswordVisible ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                        </IconButton>
                                    } />
                                </FormControl>

                                <Box sx={{ display: 'flex', gap: 1, flexDirection: 'row', alignItems: 'center' }}>
                                    <Checkbox />
                                    <Typography>Angemeldet bleiben</Typography>
                                </Box>

                                <Button variant="soft" onClick={signIn}>
                                    <Typography level="body-md">Anmelden</Typography>
                                </Button>

                                <Box>
                                    <Typography level="body-sm"><Link component={BrowserLink} color="primary" to={{ pathname: "/forgot-password" }}>Passwort vergessen</Link></Typography>
                                    <Typography level="body-sm">Noch keinen Account? <Link component={BrowserLink} color="primary" to={{ pathname: "/sign-up" }}>Registrieren</Link></Typography>
                                </Box>
                            </CardContent>
                        </Card>

                        <Card sx={{ p: 1 }}>
                            <Typography level="lg" sx={{ textAlign: 'center' }}>
                                Made with ♡ by RGP
                            </Typography>
                        </Card>

                        {!isSm &&
                            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
                                <Chip sx={{ p: 1, borderRadius: 'md' }} color="primary"><Typography>#RGPonTop</Typography></Chip>
                                <Chip sx={{ p: 1, borderRadius: 'md' }} color="primary"><Typography>#RGPSMV</Typography></Chip>
                                <Chip sx={{ p: 1, borderRadius: 'md' }} color="primary"><Typography>#Modern</Typography></Chip>
                                <Chip sx={{ p: 1, borderRadius: 'md' }} color="primary"><Typography>#React</Typography></Chip>
                            </Box>
                        }
                    </Box>
                </Box>

                {/* Footer */}
                <ImprintNotice />
            </Box>
        </>
    );
}
