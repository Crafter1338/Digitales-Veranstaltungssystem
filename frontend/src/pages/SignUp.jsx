import { IconButton, Box, Card, CardContent, Chip, Divider, FormControl, FormLabel, Input, Typography, Link, Modal, ModalDialog, ModalClose, Textarea, Button, LinearProgress, FormHelperText, Checkbox } from "@mui/joy"
import { useState } from "react";
import { Link as BrowserLink } from "react-router-dom"

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

function capitalizeFirstLetter(val) { //später in helpers packen
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

export default function () {
    const [progress, setProgress] = useState(1)
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')

    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [color, setColor] = useState('')

    const [checked, setChecked] = useState({1:false, 2:false})

    const [isThanksModalVisible, setIsThanksModalVisible] = useState(false)

    const togglePasswordVisibility = () => {
        setIsPasswordVisible((last) => !last)
    }

    const isPasswordValid = (val) => {
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/.test(val);
    }

    const getPasswordCriteria = (val) => ({
        minLength: val.length >= 8,
        hasUppercase: /[A-Z]/.test(val),
        hasLowercase: /[a-z]/.test(val),
        hasDigit: /\d/.test(val),
        hasSpecialChar: /[^A-Za-z0-9]/.test(val) // optional
    });

    const nextStep = () => {
        setProgress((last) => {
            setIsPasswordVisible(false)
            return last + 1
        })
    }

    const previousStep = () => {
        setProgress((last) => {
            setIsPasswordVisible(false)
            return last - 1
        })
    }

    const requestAccount = () => {
        setIsThanksModalVisible(true)
        //alles ist schon validiert, wenn es hier ankommt
        //username muss aus name und surname gebastelt werden
        // queue für bestätigung durch admins per panel un per mail an admins (die es aktiviert haben)
    }

    return (
        <>
            <Modal open={isThanksModalVisible} onClose={() => setIsThanksModalVisible(false)}
                sx={{ display:'flex', height:1, justifyContent:'center', alignItems:'center'}}
            >
                <Card sx={{ display:'flex', flexDirection:'column', gap: 2, width: 1, maxWidth: 500}}>
                    <Typography color="primary" level="h4">Vielen Dank für deine Anfrage!</Typography>

                    <Divider sx={{mx:0}} />

                    <CardContent>
                        <Typography>
                            Wir werden die Anfrage so bald wie möglich bearbeiten und dich per Email oder Schulcloud informieren! 
                        </Typography>

                        <br />

                        <Typography level="body-sm">
                            Liebe Grüße
                        </Typography>
                        <Typography level="body-sm">
                            Dein DVS Team!
                        </Typography>
                    </CardContent>
                </Card>
            </Modal>

            <Box sx={{ display:'flex', height:1, justifyContent:'center', px: 2, pt: 4 }}>
                <Box sx={{ display:'flex', flexDirection:'column', gap: 2, width: 1, maxWidth: 500}}>
                    <Card>
                        <Typography level="h3">
                            Neuen Account anlegen
                        </Typography>

                        <LinearProgress determinate value={progress*100/3} sx={{ transition: 'width 0.5s ease-in-out' }} /> 
                    </Card>

                    {progress == 1 && <Card>
                        <Typography level="h4">
                            Über dich
                        </Typography>

                        <Divider sx={{ m: 0 }} />

                        <CardContent sx={{ display:'flex', flexDirection:'column', gap:2 }}>
                            <FormControl>
                                <FormLabel>
                                    Vorname: *
                                </FormLabel>

                                <Input value={name} onChange={(e) => setName(capitalizeFirstLetter(e.target.value))}/>
                            </FormControl>

                            <FormControl>
                                <FormLabel>
                                    Nachname: *
                                </FormLabel>

                                <Input value={surname} onChange={(e) => setSurname(capitalizeFirstLetter(e.target.value))}/>
                            </FormControl>

                            <FormControl>
                                <FormLabel>
                                    Benutzername:
                                </FormLabel>

                                <Input disabled value={(name.length > 0 && surname.length > 0) && name.toLowerCase()+"."+surname.toLowerCase() || "-"}/>

                                <FormHelperText>Merke dir deinen Benutzernamen, um dich anzumelden!</FormHelperText>
                            </FormControl>

                            <Button disabled={!(name.length > 0 && surname.length > 0)} variant="soft" onClick={nextStep}>
                                Fortsetzen
                            </Button>

                            <Box>
                                <Typography>Schon einen Account? <Link component={BrowserLink} color="primary" to={{pathname: "/sign-in"}}>Anmelden</Link></Typography>
                            </Box>
                        </CardContent>
                    </Card>}

                    {progress == 2 && <Card>
                        <Typography level="h4">
                            Zugangsdaten
                        </Typography>

                        <Divider sx={{ m: 0 }} />

                        <CardContent sx={{ display:'flex', flexDirection:'column', gap:2 }}>
                            <FormControl>
                                <FormLabel>
                                    Passwort:
                                </FormLabel>

                                <Input type={isPasswordVisible ? 'text' : 'password'} value={password} onChange={(e) => {setPassword(e.target.value)}} endDecorator={
                                    <IconButton onClick={togglePasswordVisibility}>
                                        {isPasswordVisible ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                    </IconButton>
                                } />

                                {password.length > 0 && (() => {
                                    const criteria = getPasswordCriteria(password);
                                    const getColor = (pass) => pass ? 'success.plainColor' : 'danger.plainColor';

                                    return (
                                        <Box sx={{ mt: 1 }}>
                                            <Typography level="body-sm" sx={{ color: getColor(criteria.minLength) }}>
                                                • Mindestens 8 Zeichen
                                            </Typography>
                                            <Typography level="body-sm" sx={{ color: getColor(criteria.hasUppercase) }}>
                                                • Mindestens ein Großbuchstabe
                                            </Typography>
                                            <Typography level="body-sm" sx={{ color: getColor(criteria.hasLowercase) }}>
                                                • Mindestens ein Kleinbuchstabe
                                            </Typography>
                                            <Typography level="body-sm" sx={{ color: getColor(criteria.hasDigit) }}>
                                                • Mindestens eine Zahl
                                            </Typography>
                                            <Typography level="body-sm" sx={{ color: getColor(criteria.hasSpecialChar) }}>
                                                • Mindestens ein Sonderzeichen
                                            </Typography>
                                        </Box>
                                    );
                                })()}
                            </FormControl>

                            <FormControl>
                                <FormLabel>
                                    Email: (optional)
                                </FormLabel>

                                <Input value={email} onChange={(e) => setEmail(e.target.value.toLocaleLowerCase())}/>
                            </FormControl>

                            <FormControl>
                                <FormLabel>
                                    Lieblingsfarbe: *
                                </FormLabel>

                                <Input value={color} onChange={(e) => setColor(e.target.value.toLowerCase())}/>

                                <FormHelperText>Das ist eine Sicherheitsfrage. Merke dir deine Antwort!</FormHelperText>
                            </FormControl>

                            <Box sx={{ display:'flex', gap: 1, flexDirection:'row' }}>
                                <Button sx={{flex:1}} variant="soft" color="danger" onClick={previousStep}>
                                    Zurück
                                </Button>

                                <Button disabled={!(isPasswordValid(password) && color.length > 0)}sx={{flex:1}} variant="soft" onClick={nextStep}>
                                    Fortsetzen
                                </Button>
                            </Box>

                            <Box>
                                <Typography>Schon einen Account? <Link component={BrowserLink} color="primary" to={{pathname: "/sign-in"}}>Anmelden</Link></Typography>
                            </Box>
                        </CardContent>
                        
                    </Card>}

                    {progress == 3 && <Card>
                        <Typography level="h4">
                            Zusammenfassung - Fast Geschafft
                        </Typography>

                        <Divider sx={{ m: 0 }} />

                        <CardContent sx={{ display:'flex', flexDirection:'column', gap:2 }}>
                            <FormControl>
                                <FormLabel>
                                    Benutzername:
                                </FormLabel>

                                <Input variant="soft" readOnly value={name.toLowerCase()+"."+surname.toLowerCase()}/>
                            </FormControl>

                            <FormControl>
                                <FormLabel>
                                    Passwort:
                                </FormLabel>

                                <Input variant="soft" readOnly type={isPasswordVisible ? 'text' : 'password'} value={password} endDecorator={
                                    <IconButton onClick={togglePasswordVisibility}>
                                        {isPasswordVisible ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                    </IconButton>
                                } />
                            </FormControl>

                            <FormControl>
                                <FormLabel>
                                    Email:
                                </FormLabel>

                                <Input variant="soft" readOnly value={email || "(nicht angegeben)"}/>
                            </FormControl>

                            <FormControl>
                                <FormLabel>
                                    Lieblingsfarbe:
                                </FormLabel>

                                <Input variant="soft" readOnly value={color}/>
                            </FormControl>

                            <Box sx={{ display:'flex', gap:0.75, flexDirection:'column' }}>
                                <Box sx={{ display:'flex', gap:1, flexDirection:'row', alignItems:'center' }}>
                                    <Typography sx={{ flex:1 }}level="body-sm">Ich akzeptiere die <Link href="/privacy-policy" target="_blank" rel="noopener">Datenschutzerklärung</Link> *</Typography>
                                    <Checkbox checked={checked[1]} onChange={(e) => {setChecked((last) => ({...last, 1:Boolean(e.target.checked)}))}}/>
                                </Box>

                                <Box sx={{ display:'flex', gap:1, flexDirection:'row', alignItems:'center' }}>
                                    <Typography sx={{ flex:1 }} level="body-sm">Die oben genannten Angaben sind korrekt *</Typography>
                                    <Checkbox checked={checked[2]} onChange={(e) => {setChecked((last) => ({...last, 2:Boolean(e.target.checked)}))}}/>
                                </Box>
                            </Box>

                            <Box sx={{ display:'flex', gap: 1, flexDirection:'row' }}>
                                <Button sx={{flex:1}} variant="soft" color="danger" onClick={previousStep}>
                                    Zurück
                                </Button>

                                <Button disabled={!(checked[1] && checked[2])} sx={{flex:1}} variant="soft" onClick={requestAccount}>
                                    Account beantragen
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