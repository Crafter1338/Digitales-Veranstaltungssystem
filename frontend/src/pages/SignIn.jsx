import { IconButton, Box, Card, CardContent, Chip, Divider, FormControl, FormLabel, Input, Typography, Link, Modal, ModalDialog, ModalClose, Textarea, Button } from "@mui/joy"
import { useState } from "react";
import { Link as BrowserLink } from "react-router-dom"

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export default function () {
    const [isPasswordModalVisible, setIsPasswordModalVisible] = useState(false)

    const [accountIdentifier, setAccountIdentifier] = useState('')
    const [password, setPassword] = useState('')
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)

    const togglePasswordVisibility = () => {
        setIsPasswordVisible((last) => !last)
    }

    return (
        <>
            <Box sx={{ display:'flex', height:1, justifyContent:'center', px: 2, pt: 4 }}>
                <Box sx={{ display:'flex', flexDirection:'column', gap: 2, width: 1, maxWidth: 500}}>
                    <Card>
                        <Typography level="h3">
                            Digitales Veranstaltungssystem
                        </Typography>
                    </Card>

                    <Card>
                        <Typography level="h4">
                            Melde dich an um forzufahren:
                        </Typography>

                        <Divider sx={{ m: 0 }} />

                        <CardContent sx={{ display:'flex', flexDirection:'column', gap:2 }}>
                            <FormControl>
                                <FormLabel>
                                    Benutzername oder Email:
                                </FormLabel>

                                <Input value={accountIdentifier} onChange={(e) => {setAccountIdentifier(e.target.value.toLowerCase())}} />
                            </FormControl>

                            <FormControl>
                                <FormLabel>
                                    Passwort:
                                </FormLabel>

                                <Input type={isPasswordVisible ? 'text' : 'password'} value={password} onChange={(e) => {setPassword(e.target.value)}} endDecorator={
                                    <IconButton onClick={togglePasswordVisibility}>
                                        {isPasswordVisible ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                    </IconButton>
                                } />
                            </FormControl>

                            <Button variant="soft">
                                Anmelden
                            </Button>

                            <Box>
                                <Typography>Kein Account? <Link component={BrowserLink} color="primary" to={{pathname: "/sign-up"}}>Registrieren</Link></Typography>
                                <Link component={BrowserLink} color="primary" to={{pathname: "/forgot-password"}}>Passwort vergessen</Link>
                            </Box>
                        </CardContent>
                    </Card>

                    <Card sx={{ p:1 }}>
                        <Typography level="lg" sx={{ textAlign:'center' }}>
                            Made with ♡ by RGP
                        </Typography>
                    </Card>

                    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
                        <Chip sx={{ p:1, borderRadius:'md' }} color="primary"><Typography>#RGPonTop</Typography></Chip>
                        <Chip sx={{ p:1, borderRadius:'md' }} color="primary"><Typography>#RGPSMV</Typography></Chip>
                        <Chip sx={{ p:1, borderRadius:'md' }} color="primary"><Typography>#Modern</Typography></Chip>
                        <Chip sx={{ p:1, borderRadius:'md', display: { xs: 'none', sm: 'flex'} }} color="primary"><Typography>#React</Typography></Chip>
                    </Box>
                </Box>
            </Box>
        </>
    );
}