import { IconButton, Box, Card, CardContent, Chip, Divider, FormControl, FormLabel, Input, Typography, Link, Modal, ModalDialog, ModalClose, Textarea, Button, LinearProgress, FormHelperText, Checkbox } from "@mui/joy"
import { useEffect, useState } from "react";
import { Link as BrowserLink, Form } from "react-router-dom"

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import { useSignUpData, useViewport } from "../../../contexts";
import { ImprintNotice } from "../../../components";

import { isPasswordValid, capitalizeFirstLetter, getPasswordCriteria } from "../../../utils/Text";

function ThanksModal() {
    return (
        <Modal open={isThanksModalVisible} onClose={() => setIsThanksModalVisible(false)}
            sx={{ display:'flex', height:1, justifyContent:'center', alignItems:'center' }}
        >
            <Card sx={{ display:'flex', flexDirection:'column', gap: 2, width: 1, maxWidth: 500 }}>
                <Typography color="primary" level="h4">Vielen Dank für deine Anfrage!</Typography>

                <Divider sx={{ mx:0 }} />

                <CardContent>
                    <Typography>
                        Wir werden die Anfrage so bald wie möglich bearbeiten und dich per E-mail oder Schulcloud informieren! 
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
    );
}

export default function() {
    const [progress, setProgress] = useState(100/3); // 0 - 100
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const { isSm } = useViewport();
    const { signUpData, setSignUpData } = useSignUpData(); // step, forename, surname, email, color, password

    const updateField = (field, value) => {
        setSignUpData((prev) => {return {...prev, [field]: value}});
    }

    useEffect(() => {
        setIsPasswordVisible(false);
        setProgress(signUpData.step*100/3)
    }, [signUpData.step])

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
                                Neuen Account anlegen
                            </Typography>

                            <LinearProgress determinate value={ progress } variant="soft" /> 
                        </Card>

                        {signUpData.step == 1 && 
                            <Card>
                                <Typography level="h4">
                                    Über dich
                                </Typography>

                                <Divider sx={{ m: 0 }} />

                                <CardContent sx={{ display:'flex', flexDirection:'column', gap:2 }}>
                                    {isSm && 
                                        <Box sx={{ display:'flex', flexDirection:'column', gap:2 }}>
                                            <FormControl>
                                                <FormLabel>
                                                    <Typography level="inherit">Vorname: <Typography level="inherit" color="danger">*</Typography></Typography>
                                                </FormLabel>

                                                <Input value={ signUpData.forename } onChange={ (e) => updateField('forename', capitalizeFirstLetter(e.target.value.toLowerCase())) } fullWidth/>
                                            </FormControl>

                                            <FormControl>
                                                <FormLabel>
                                                    <Typography level="inherit">Nachname: <Typography level="inherit" color="danger">*</Typography></Typography>
                                                </FormLabel>

                                                <Input value={ signUpData.surname } onChange={ (e) => updateField('surname', capitalizeFirstLetter(e.target.value.toLowerCase())) } fullWidth/>
                                            </FormControl>
                                        </Box>

                                    ||
                                        
                                        <Box sx={{ display:'flex', gap:1, width:1 }}>
                                            <FormControl sx={{ display:'flex', flex: '1 1 0', minWidth:0 }}>
                                                <FormLabel>
                                                    <Typography level="inherit">Vorname: <Typography level="inherit" color="danger">*</Typography></Typography>
                                                </FormLabel>

                                                <Input value={ signUpData.forename } onChange={ (e) => updateField('forename', capitalizeFirstLetter(e.target.value.toLowerCase())) } sx={{ flex:1 }}/>
                                            </FormControl>

                                            <FormControl sx={{ display:'flex', flex: '1 1 0', minWidth:0 }}>
                                                <FormLabel>
                                                    <Typography level="inherit">Nachname: <Typography level="inherit" color="danger">*</Typography></Typography>
                                                </FormLabel>

                                                <Input value={ signUpData.surname } onChange={ (e) => updateField('surname', capitalizeFirstLetter(e.target.value.toLowerCase())) } sx={{ flex:1 }}/>
                                            </FormControl>
                                        </Box>
                                    }

                                    <FormControl>
                                        <FormLabel>
                                            <Typography level="inherit">E-Mail:</Typography>
                                        </FormLabel>

                                        <Input value={ signUpData.email } onChange={ (e) => updateField('email', e.target.value.toLowerCase()) } fullWidth/>
                                    </FormControl>

                                    <FormControl>
                                        <FormLabel>
                                            <Typography level="inherit">Lieblingsfarbe: <Typography level="inherit" color="danger">*</Typography></Typography>
                                        </FormLabel>

                                        <Input value={ signUpData.color } onChange={ (e) => updateField('color', capitalizeFirstLetter(e.target.value.toLowerCase()) ) } fullWidth/>
                                    </FormControl>

                                    {/*<FormControl>
                                        <FormLabel>
                                            <Typography level="inherit" sx={{ color: 'rgb(130, 130, 130)' }}>Benutzername:</Typography>
                                        </FormLabel>

                                        <Input disabled/>
                                    </FormControl>*/}

                                    <Box sx={{ display:'flex', flexDirection:'column', gap:0.5 }}>
                                        <Button disabled={ signUpData.forename.length == 0 || signUpData.surname.length == 0 || signUpData.color.length == 0 } fullWidth variant="soft"
                                            onClick={() => updateField('step', Number(signUpData.step) + 1)}
                                        >
                                            Weiter
                                        </Button>
                                    </Box>

                                    <Box>
                                        <Typography level="body-sm">Mit <Typography level="inherit" color="danger">*</Typography> markierte Felder sind erforderlich</Typography>
                                        <Typography level="body-sm">Schon einen Account? <Link component={BrowserLink} color="primary" to={{ pathname: "/sign-in" }}>Anmelden</Link></Typography>
                                    </Box>
                                </CardContent>
                            </Card>
                        }


                        {signUpData.step == 2 && 
                            <Card>
                                <Typography level="h4">
                                    Zugangsdaten
                                </Typography>

                                <Divider sx={{ m: 0 }} />

                                <CardContent sx={{ display:'flex', flexDirection:'column', gap:2 }}>
                                    <FormControl>
                                        <FormLabel>
                                            <Typography level="inherit" sx={{ color: 'rgb(130, 130, 130)' }}>Benutzername:</Typography>
                                        </FormLabel>

                                        <Input value={signUpData.surname.toLowerCase() + '.' + signUpData.forename.toLowerCase()} fullWidth disabled/>
                                    </FormControl>

                                    <FormControl>
                                        <FormLabel>
                                            <Typography level="inherit" sx={{ color: 'rgb(130, 130, 130)' }}>E-Mail:</Typography>
                                        </FormLabel>

                                        <Input value={signUpData.email.length != 0 && signUpData.email || '(nicht angegeben)'} fullWidth disabled/>
                                    </FormControl>

                                    <FormControl>
                                        <FormLabel>
                                            <Typography level="inherit">Passwort: <Typography level="inherit" color="danger">*</Typography></Typography>
                                        </FormLabel>

                                        <Input type={isPasswordVisible ? 'text' : 'password'} value={signUpData.password} onChange={(e) => {updateField('password', e.target.value)}} endDecorator={
                                            <IconButton onClick={() => setIsPasswordVisible(prev => !prev)}>
                                                {isPasswordVisible ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                            </IconButton>
                                        } />

                                        {/*signUpData.password.length > 0 && */(() => {
                                            const criteria = getPasswordCriteria(signUpData.password);
                                            const getColor = (pass) => pass ? 'success.plainColor' : 'danger.plainColor';

                                            return (
                                                <Box>
                                                    <ul>
                                                        <li><Typography level="body-sm" sx={{ color: getColor(criteria.minLength)}}>
                                                            Mindestens 8 Zeichen
                                                        </Typography></li>

                                                        <li><Typography level="body-sm" sx={{ color: getColor(criteria.hasUppercase)}}>
                                                            Mindestens ein Großbuchstabe
                                                        </Typography></li>

                                                        <li><Typography level="body-sm" sx={{ color: getColor(criteria.hasLowercase)}}>
                                                            Mindestens ein Kleinbuchstabe
                                                        </Typography></li>

                                                        <li><Typography level="body-sm" sx={{ color: getColor(criteria.hasDigit)}}>
                                                            Mindestens eine Nummer
                                                        </Typography></li>

                                                        <li><Typography level="body-sm" sx={{ color: getColor(criteria.hasSpecialChar)}}>
                                                            Mindestens eine Sonderzeichen
                                                        </Typography></li>

                                                    </ul>
                                                </Box>
                                            );
                                        })()}
                                    </FormControl>

                                    <Box sx={{ display:'flex', gap: 1, flexDirection:'row' }}>
                                        <Button sx={{flex:1}} variant="soft" color="danger" onClick={() => updateField('step', Number(signUpData.step) - 1)}>
                                            Zurück
                                        </Button>

                                        <Button sx={{flex:1}} variant="soft" color="primary" disabled={!isPasswordValid(signUpData.password)} onClick={() => updateField('step', Number(signUpData.step) + 1)}>
                                            Weiter
                                        </Button>
                                    </Box>

                                    <Box>
                                        <Typography level="body-sm">Mit <Typography level="inherit" color="danger">*</Typography> markierte Felder sind erforderlich</Typography>
                                        <Typography level="body-sm">Schon einen Account? <Link component={BrowserLink} color="primary" to={{ pathname: "/sign-in" }}>Anmelden</Link></Typography>
                                    </Box>
                                </CardContent>
                                
                            </Card>
                        }

                        {signUpData.step == 3 && 
                            <Card>
                                <Typography level="h4">
                                    Zusammenfassung - Fast Geschafft
                                </Typography>

                                <Divider sx={{ m: 0 }} />

                                <CardContent sx={{ display:'flex', flexDirection:'column', gap:2 }}>
                                    <FormControl>
                                        <FormLabel>
                                            <Typography level="inherit" sx={{ color: 'rgb(130, 130, 130)' }}>Benutzername:</Typography>
                                        </FormLabel>

                                        <Input value={signUpData.surname.toLowerCase() + '.' + signUpData.forename.toLowerCase()} fullWidth disabled/>
                                    </FormControl>

                                    <FormControl>
                                        <FormLabel>
                                            <Typography level="inherit" sx={{ color: 'rgb(130, 130, 130)' }}>E-Mail:</Typography>
                                        </FormLabel>

                                        <Input value={signUpData.email.length != 0 && signUpData.email || '(nicht angegeben)'} fullWidth disabled/>
                                    </FormControl>

                                    <FormControl>
                                        <FormLabel>
                                            <Typography level="inherit" sx={{ color: 'rgb(130, 130, 130)' }}>Passwort:</Typography>
                                        </FormLabel>

                                        <Input type={isPasswordVisible ? 'text' : 'password'} value={signUpData.password} endDecorator={
                                            <IconButton sx={{pointerEvents: 'auto'}} disabled={false} onClick={() => setIsPasswordVisible(prev => !prev)}>
                                                {isPasswordVisible ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                            </IconButton>
                                        } disabled/>

                                        {/*signUpData.password.length > 0 && */(() => {
                                            const criteria = getPasswordCriteria(signUpData.password);
                                            const getColor = (pass) => pass ? 'success.plainColor' : 'danger.plainColor';

                                            return (
                                                <Box>
                                                    <ul>
                                                        <li><Typography level="body-sm" sx={{ color: getColor(criteria.minLength)}}>
                                                            Mindestens 8 Zeichen
                                                        </Typography></li>

                                                        <li><Typography level="body-sm" sx={{ color: getColor(criteria.hasUppercase)}}>
                                                            Mindestens ein Großbuchstabe
                                                        </Typography></li>

                                                        <li><Typography level="body-sm" sx={{ color: getColor(criteria.hasLowercase)}}>
                                                            Mindestens ein Kleinbuchstabe
                                                        </Typography></li>

                                                        <li><Typography level="body-sm" sx={{ color: getColor(criteria.hasDigit)}}>
                                                            Mindestens eine Nummer
                                                        </Typography></li>

                                                        <li><Typography level="body-sm" sx={{ color: getColor(criteria.hasSpecialChar)}}>
                                                            Mindestens eine Sonderzeichen
                                                        </Typography></li>

                                                    </ul>
                                                </Box>
                                            );
                                        })()}
                                    </FormControl>

                                    <Box sx={{ display:'flex', gap:0.75, flexDirection:'column' }}>
                                        <Box sx={{ display:'flex', gap:1, flexDirection:'row', alignItems:'center' }}>
                                            <Typography sx={{ flex:1 }} level="body-sm">Ich akzeptiere die <Link href="/data-privacy-policy" target="_blank" rel="noopener">Datenschutzerklärung</Link> <Typography level="inherit" color="danger">*</Typography></Typography>
                                            <Checkbox />
                                        </Box>

                                        <Box sx={{ display:'flex', gap:1, flexDirection:'row', alignItems:'center' }}>
                                            <Typography sx={{ flex:1 }} level="body-sm">Die oben genannten Angaben sind korrekt <Typography level="inherit" color="danger">*</Typography></Typography>
                                            <Checkbox />
                                        </Box>
                                    </Box>

                                    <Box sx={{ display:'flex', gap: 1, flexDirection:'row' }}>
                                        <Button sx={{flex:1}} variant="soft" color="danger" onClick={() => updateField('step', Number(signUpData.step) - 1)}>
                                            Zurück
                                        </Button>

                                        <Button sx={{flex:1}} variant="soft">
                                            Beantragen
                                        </Button>
                                    </Box>

                                    <Box>
                                        <Typography level="body-sm">Mit <Typography level="inherit" color="danger">*</Typography> markierte Felder sind erforderlich</Typography>
                                        <Typography level="body-sm">Schon einen Account? <Link component={BrowserLink} color="primary" to={{ pathname: "/sign-in" }}>Anmelden</Link></Typography>
                                    </Box>
                                </CardContent>
                            </Card>
                        }
                    </Box>
                </Box>

                {/* Footer */}
                <ImprintNotice />
            </Box>
        </>
    );
}