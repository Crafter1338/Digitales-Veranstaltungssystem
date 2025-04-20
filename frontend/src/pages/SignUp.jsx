import { IconButton, Box, Card, CardContent, Chip, Divider, FormControl, FormLabel, Input, Typography, Link, Modal, ModalDialog, ModalClose, Textarea, Button, LinearProgress } from "@mui/joy"
import { useState } from "react";
import { Link as BrowserLink } from "react-router-dom"

export default function () {
    const [progress, setProgress] = useState(1) // 1, 2, 3

    return (
        <>
            <Box sx={{ display:'flex', height:1, justifyContent:'center', alignItems:'center', p: 2 }}>
                <Box sx={{ display:'flex', flexDirection:'column', gap: 2, width: 1, maxWidth: 500}}>
                    <Card>
                        <Typography level="h3">
                            Account Erstellen:
                        </Typography>

                        <LinearProgress determinate value={progress*100/3}> 

                        </LinearProgress>
                    </Card>

                    {progress == 1 && <Card>
                        <Typography level="h4">
                            Persönliche Informationen:
                        </Typography>

                        <Divider sx={{ m: 0 }} />

                        <CardContent sx={{ display:'flex', flexDirection:'column', gap:2 }}>
                            <FormControl>
                                <FormLabel>
                                    Vorname: *
                                </FormLabel>

                                <Input />
                            </FormControl>

                            <FormControl>
                                <FormLabel>
                                    Nachname: *
                                </FormLabel>

                                <Input />
                            </FormControl>

                            <FormControl>
                                <FormLabel>
                                    Benutzername:
                                </FormLabel>

                                <Input disabled />
                            </FormControl>

                            <Button variant="soft" onClick={() => {setProgress(2)}}>
                                Fortsetzen
                            </Button>

                            <Box>
                                <Typography>Schon einen Account? <Link component={BrowserLink} color="primary" to={{pathname: "/sign-in"}}>Anmelden</Link></Typography>
                            </Box>
                        </CardContent>
                    </Card>}

                    {progress == 2 && <Card>
                        <Typography level="h4">
                            Persönliche Informationen:
                        </Typography>

                        <Divider sx={{ m: 0 }} />

                        <CardContent sx={{ display:'flex', flexDirection:'column', gap:2 }}>
                            <FormControl>
                                <FormLabel>
                                    Vorname: *
                                </FormLabel>

                                <Input />
                            </FormControl>

                            <FormControl>
                                <FormLabel>
                                    Nachname: *
                                </FormLabel>

                                <Input />
                            </FormControl>

                            <FormControl>
                                <FormLabel>
                                    Benutzername:
                                </FormLabel>

                                <Input disabled />
                            </FormControl>

                            <Box sx={{ display:'flex', gap: 1, flexDirection:'row' }}>
                                <Button sx={{flex:1}} variant="soft" color="danger" onClick={() => {setProgress(1)}}>
                                    Zurück
                                </Button>
                                <Button sx={{flex:1}} variant="soft" onClick={() => {setProgress(3)}}>
                                    Fortsetzen
                                </Button>
                            </Box>

                            <Box>
                                <Typography>Schon einen Account? <Link component={BrowserLink} color="primary" to={{pathname: "/sign-in"}}>Anmelden</Link></Typography>
                            </Box>
                        </CardContent>
                        
                    </Card>}

                    <Card sx={{ p:1 }}>
                        <Typography level="lg" sx={{ textAlign:'center' }}>
                            Made with ♡ by RGP
                        </Typography>
                    </Card>
                </Box>
            </Box>
        </>
    )
}