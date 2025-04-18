import { Box, Card, CardContent, Chip, Divider, FormControl, FormLabel, Input, Typography, Link, Modal, ModalDialog, ModalClose, Textarea, Button } from "@mui/joy"
import { useState } from "react";
import { Link as BrowserLink } from "react-router-dom"

export default function(){
    const [passwordModal, setPasswordModal] = useState(false)

    return (
        <>
            <Modal open={passwordModal} onClose={() => {setPasswordModal(false)}}>
                <ModalDialog sx={{ display:'flex', p:2 }}>
                    <ModalClose />

                    <Box sx={{ display:'flex', flexDirection:'column', pt:2, gap:2, minWidth:325 }}>
                        <FormControl>
                            <FormLabel>
                                Benutzername:
                            </FormLabel>

                            <Input />
                        </FormControl>

                        <FormControl>
                            <FormLabel>
                                Neues Passwort:
                            </FormLabel>

                            <Input />
                        </FormControl>

                        <FormControl>
                            <FormLabel>
                                Sicherheitsfrage: {/*Hier muss die Jeweilige Frage rein*/}
                            </FormLabel>

                            <Textarea minRows={2}/>
                        </FormControl>

                        <FormControl>
                            <FormLabel>
                                Weitere Informationen:
                            </FormLabel>

                            <Textarea minRows={4}/>
                        </FormControl>
                    </Box>

                    <Button variant="soft" color="danger">zurücksetzen beantragen</Button>
                </ModalDialog>
            </Modal>

            <Box sx={{ display:'flex', height:'100vh', justifyContent:'center', alignItems:'center' }}>
                <Box sx={{ display:'flex', flexDirection:'column', gap: 2 }}>
                    <Card variant="soft" sx={{ minWidth: 450 }}>
                        <Typography level="h3">
                            Digitales Veranstaltungssystem
                        </Typography>
                    </Card>

                    <Card variant="soft" sx={{ minWidth: 450 }}>
                        <Typography level="h3">
                            Melde dich an um forzufahren:
                        </Typography>

                        <Divider sx={{ mx:0 }}/>

                        <CardContent sx={{ display:'flex', flexDirection:'column', gap:2 }}>
                            <FormControl>
                                <FormLabel>
                                    Benutzername:
                                </FormLabel>

                                <Input>
                                </Input>
                            </FormControl>

                            <FormControl>
                                <FormLabel>
                                    Passwort:
                                </FormLabel>

                                <Input>
                                </Input>
                            </FormControl>

                            <Box>
                                <Typography>Kein Account? <Link component={BrowserLink} color="primary" to={{pathname: "/sign-up"}}>Registrieren</Link></Typography>
                                <Link color="primary" onClick={() => {setPasswordModal(true)}}>Passwort vergessen</Link>
                            </Box>
                        </CardContent>
                    </Card>

                    <Card variant="soft" sx={{ minWidth: 450, p:1 }}>
                        <Typography level="lg" sx={{ textAlign:'center' }}>
                            Made with ♡ by RGP
                        </Typography>
                    </Card>

                    <Box sx={{ display:'flex', flexDirection: 'row', gap: 1, justifyContent:'center' }}>
                        <Chip sx={{ padding:1, borderRadius:'md' }} color="primary"><Typography>#RGPonTop</Typography></Chip>
                        <Chip sx={{ padding:1, borderRadius:'md' }} color="primary"><Typography>#RGPSMV</Typography></Chip>
                        <Chip sx={{ padding:1, borderRadius:'md' }} color="primary"><Typography>#Modern</Typography></Chip>
                        <Chip sx={{ padding:1, borderRadius:'md' }} color="primary"><Typography>#React</Typography></Chip>
                    </Box>
                </Box>
            </Box>
        </>
    );
}