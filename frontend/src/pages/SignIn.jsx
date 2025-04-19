import { Box, Card, CardContent, Chip, Divider, FormControl, FormLabel, Input, Typography, Link, Modal, ModalDialog, ModalClose, Textarea, Button } from "@mui/joy"
import { useState } from "react";
import { Link as BrowserLink } from "react-router-dom"

function PasswordModal({ open, setOpen }){
    const [username, setUsername] = useState('')
    const [newpassword, setNewpassword] = useState('')
    const [answer, setAnswer] = useState('')
    const [information, setInformation] = useState('')

    const performReset = () => {
        setOpen(false)
    }

    return (
        <Modal open={open} onClose={() => {setOpen(false)}} sx={{ display:'flex', height:1, justifyContent:'center', alignItems:'center', mx:2 }}>
            <ModalDialog sx={{ display:'flex', maxWidth:450,  width:1 }}>
                <ModalClose />

                <Box sx={{ display:'flex', flexDirection:'column', pt:2, gap:2 }}>
                    <FormControl>
                        <FormLabel>
                            Benutzername:
                        </FormLabel>

                        <Input value={username} onChange={(e) => {setUsername(e.target.value.toLowerCase())}}/>
                    </FormControl>

                    <FormControl>
                        <FormLabel>
                            Neues Passwort:
                        </FormLabel>

                        <Input value={newpassword} onChange={(e) => {setNewpassword(e.target.value)}}/>
                    </FormControl>

                    <FormControl>
                        <FormLabel>
                            Sicherheitsfrage: Was ist deine Lieblingsfarbe {/*Hier muss die Jeweilige Frage rein*/}
                        </FormLabel>

                        <Textarea minRows={2} maxRows={5} value={answer} onChange={(e) => {setAnswer(e.target.value)}}/>
                    </FormControl>

                    <FormControl>
                        <FormLabel>
                            Weitere Informationen:
                        </FormLabel>

                        <Textarea minRows={4} maxRows={6} value={information} onChange={(e) => {setInformation(e.target.value)}}/>
                    </FormControl>
                </Box>

                <Button variant="soft" color="danger" onClick={performReset}>zurücksetzen beantragen</Button>
            </ModalDialog>
        </Modal>
    )
}

export default function(){
    const [isPasswordModalVisible, setIsPasswordModalVisible] = useState(false)

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)

    const togglePasswordVisibility = () => {
        setIsPasswordVisible((last) => !last)
    }

    return (
        <>
            <PasswordModal open={isPasswordModalVisible} setOpen={setIsPasswordModalVisible}/>

            <Box sx={{ display:'flex', height:1, justifyContent:'center', alignItems:'center', p:2 }}>
                <Box sx={{ display:'flex', flexDirection:'column', gap: 2, width: 1, maxWidth: 450}}>
                    <Card>
                        <Typography level="h3">
                            Digitales Veranstaltungssystem
                        </Typography>
                    </Card>

                    <Card>
                        <Typography level="h3">
                            Melde dich an um forzufahren:
                        </Typography>

                        <Divider sx={{ mx:0 }}/>

                        <CardContent sx={{ display:'flex', flexDirection:'column', gap:2 }}>
                            <FormControl>
                                <FormLabel>
                                    Benutzername:
                                </FormLabel>

                                <Input value={username} onChange={(e) => {setUsername(e.target.value.toLowerCase())}} />
                            </FormControl>

                            <FormControl>
                                <FormLabel>
                                    Passwort:
                                </FormLabel>

                                <Input type={isPasswordVisible ? 'text' : 'password'} value={password} onChange={(e) => {setPassword(e.target.value)}} endDecorator={<Button onClick={togglePasswordVisibility}>SHOW</Button>} />
                            </FormControl>

                            <Box>
                                <Typography>Kein Account? <Link component={BrowserLink} color="primary" to={{pathname: "/sign-up"}}>Registrieren</Link></Typography>
                                <Link color="primary" onClick={() => {setIsPasswordModalVisible(true)}}>Passwort vergessen</Link>
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