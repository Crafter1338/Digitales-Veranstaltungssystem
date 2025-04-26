import { IconButton, Box, Card, CardContent, Chip, Divider, FormControl, FormLabel, Input, Typography, Link, Modal, ModalDialog, ModalClose, Textarea, Button, LinearProgress, FormHelperText, Checkbox, List, ListItem } from '@mui/joy'
import { useEffect, useState } from 'react';
import { Link as BrowserLink, Navigate, useNavigate } from 'react-router-dom'

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import { useViewport } from '../contexts/Viewport';
import LegalNotice from '../components/LegalNotice';
import { useSignUp } from '../contexts/SignUp';
import { capitalizeFirstLetter, getPasswordCriteria, isPasswordValid } from '../../old_src/utils/Text';

function ThanksModal({ open, setOpen }) {
    const navigate = useNavigate()

    return (
        <Modal open={open} onClose={() => {setOpen(false); navigate('/sign-in')}}
            sx={{ display:'flex', height:1, justifyContent:'center', alignItems:'center' }}
        >
            <Card sx={{ display:'flex', flexDirection:'column', gap: 2, width: 1, maxWidth: 500 }}>
                <Typography color='primary' level='h4'>Vielen Dank für deine Anfrage!</Typography>

                <Divider sx={{ mx:0 }} />

                <CardContent>
                    <Typography>
                        Wir werden die Anfrage so bald wie möglich bearbeiten und dich per E-mail oder Schulcloud informieren! 
                    </Typography>

                    <br />

                    <Typography level='body-sm'>
                        Liebe Grüße
                    </Typography>
                    <Typography level='body-sm'>
                        Dein DVS Team!
                    </Typography>
                </CardContent>
            </Card>
        </Modal>
    );
}

function StepOne() {
    const { isSm } = useViewport();
    const { setStep, forename, setForename, surname, setSurname, email, setEmail, color, setColor } = useSignUp();

    return (
        <>
            {isSm && 
                <Box sx={{ display:'flex', flexDirection:'column', gap:2 }}>
                    <FormControl>
                        <FormLabel>
                            <Typography level='inherit'>Vorname: <Typography level='inherit' color='danger'>*</Typography></Typography>
                        </FormLabel>

                        <Input fullWidth value={forename} onChange={(e) => setForename(capitalizeFirstLetter( e.target.value.toLowerCase() ))}/>
                    </FormControl>

                    <FormControl>
                        <FormLabel>
                            <Typography level='inherit'>Nachname: <Typography level='inherit' color='danger'>*</Typography></Typography>
                        </FormLabel>

                        <Input fullWidth value={surname} onChange={(e) => setSurname(capitalizeFirstLetter( e.target.value.toLowerCase() ))}/>
                    </FormControl>
                </Box>

            ||
                
                <Box sx={{ display:'flex', gap:1, width:1 }}>
                    <FormControl sx={{ display:'flex', flex: '1 1 0', minWidth:0 }}>
                        <FormLabel>
                            <Typography level='inherit'>Vorname: <Typography level='inherit' color='danger'>*</Typography></Typography>
                        </FormLabel>

                        <Input sx={{ flex:1 }} value={forename} onChange={(e) => setForename(capitalizeFirstLetter( e.target.value.toLowerCase() ))}/>
                    </FormControl>

                    <FormControl sx={{ display:'flex', flex: '1 1 0', minWidth:0 }}>
                        <FormLabel>
                            <Typography level='inherit'>Nachname: <Typography level='inherit' color='danger'>*</Typography></Typography>
                        </FormLabel>

                        <Input sx={{ flex:1 }} value={surname} onChange={(e) => setSurname(capitalizeFirstLetter( e.target.value.toLowerCase() ))}/>
                    </FormControl>
                </Box>
            }
            <FormControl>
                <FormLabel>
                    <Typography level='inherit'>E-Mail:</Typography>
                </FormLabel>

                <Input fullWidth value={email} onChange={(e) => setEmail( e.target.value.toLowerCase() )}/>
            </FormControl>

            <FormControl>
                <FormLabel>
                    <Typography level='inherit'>Lieblingsfarbe: <Typography level='inherit' color='danger'>*</Typography></Typography>
                </FormLabel>

                <Input fullWidth value={color} onChange={(e) => setColor(capitalizeFirstLetter( e.target.value.toLowerCase() ))}/>
            </FormControl>

            <Box sx={{ display:'flex', flexDirection:'column', gap:0.5 }}>
                <Button disabled={forename.length == 0 || surname.length == 0 || color.length == 0} variant='soft' onClick={() => setStep(prev => prev + 1)}>
                    Weiter
                </Button>
            </Box>

            <Box>
                <Typography level='body-sm'>Mit <Typography level='inherit' color='danger'>*</Typography> markierte Felder sind erforderlich</Typography>
                <Typography level='body-sm'>Schon einen Account? <Link component={BrowserLink} color='primary' to={{ pathname: '/sign-in' }}>Anmelden</Link></Typography>
            </Box>
        </>
    );
}

function StepTwo() {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const { isSm } = useViewport();
    const { setStep, forename, surname, email, password, setPassword } = useSignUp();

    return (
        <>
            <FormControl>
                <FormLabel>
                    <Typography level='inherit' sx={{ color: 'rgb(130, 130, 130)' }}>Benutzername:</Typography>
                </FormLabel>

                <Input value={surname.toLowerCase() + '.' + forename.toLowerCase()} fullWidth disabled/>
            </FormControl>

            <FormControl>
                <FormLabel>
                    <Typography level='inherit' sx={{ color: 'rgb(130, 130, 130)' }}>E-Mail:</Typography>
                </FormLabel>

                <Input value={email.length != 0 && email || '(nicht angegeben)'} fullWidth disabled/>
            </FormControl>

            <FormControl>
                <FormLabel>
                    <Typography level='inherit'>Passwort: <Typography level='inherit' color='danger'>*</Typography></Typography>
                </FormLabel>

                <Input type={isPasswordVisible ? 'text' : 'password'} value={password} onChange={(e) => {setPassword(e.target.value)}} endDecorator={
                    <IconButton onClick={() => setIsPasswordVisible(prev => !prev)}>
                        {isPasswordVisible ? <VisibilityOffIcon /> : <VisibilityIcon />}
                    </IconButton>
                } />

                {/*signUpData.password.length > 0 && */(() => {
                    const criteria = getPasswordCriteria(password);
                    const getColor = (pass) => pass ? 'success.plainColor' : 'danger.plainColor';

                    return (
                        <Box sx={{ mt:2, ml:0 }}>
                            <Typography level='body-sm' sx={{ color: getColor(criteria.minLength)}}>
                                -   Mindestens 8 Zeichen
                            </Typography>

                            <Typography level='body-sm' sx={{ color: getColor(criteria.hasUppercase)}}>
                                - Mindestens ein Großbuchstabe
                            </Typography>

                            <Typography level='body-sm' sx={{ color: getColor(criteria.hasLowercase)}}>
                                - Mindestens ein Kleinbuchstabe
                            </Typography>

                            <Typography level='body-sm' sx={{ color: getColor(criteria.hasDigit)}}>
                                - Mindestens eine Nummer
                            </Typography>

                            <Typography level='body-sm' sx={{ color: getColor(criteria.hasSpecialChar)}}>
                                - Mindestens eine Sonderzeichen
                            </Typography>
                        </Box>
                    );
                })()}
            </FormControl>

            <Box sx={{ display:'flex', gap:1, flexDirection:'row' }}>
                <Button sx={{ flex:1 }} variant='soft' color='danger' onClick={() => setStep(prev => prev - 1)}>
                    Zurück
                </Button>

                <Button sx={{ flex:1 }} variant='soft' color='primary' disabled={!isPasswordValid(password)} onClick={() => setStep(prev => prev + 1)}>
                    Weiter
                </Button>
            </Box>

            <Box>
                <Typography level='body-sm'>Mit <Typography level='inherit' color='danger'>*</Typography> markierte Felder sind erforderlich</Typography>
                <Typography level='body-sm'>Schon einen Account? <Link component={BrowserLink} color='primary' to={{ pathname: '/sign-in' }}>Anmelden</Link></Typography>
            </Box>
        </>
    );
}

function StepThree() {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isChecked, setIsChecked] = useState({[0]: false, [1]: false})

    const navigate = useNavigate();
    const { isSm } = useViewport();
    const { step, setStep, forename, surname, email, password, performSignUp } = useSignUp();

    return (
        <>
            <FormControl>
                <FormLabel>
                    <Typography level='inherit' sx={{ color: 'rgb(130, 130, 130)' }}>Benutzername:</Typography>
                </FormLabel>

                <Input value={surname.toLowerCase() + '.' + forename.toLowerCase()} fullWidth disabled/>
            </FormControl>

            <FormControl>
                <FormLabel>
                    <Typography level='inherit' sx={{ color: 'rgb(130, 130, 130)' }}>E-Mail:</Typography>
                </FormLabel>

                <Input value={email.length != 0 && email || '(nicht angegeben)'} fullWidth disabled/>
            </FormControl>

            <FormControl>
                <FormLabel>
                    <Typography level='inherit' sx={{ color: 'rgb(130, 130, 130)' }}>Passwort:</Typography>
                </FormLabel>

                <Input type={isPasswordVisible ? 'text' : 'password'} value={password} endDecorator={
                    <IconButton sx={{pointerEvents: 'auto'}} disabled={false} onClick={() => setIsPasswordVisible(prev => !prev)}>
                        {isPasswordVisible ? <VisibilityOffIcon /> : <VisibilityIcon />}
                    </IconButton>
                } disabled/>
            </FormControl>

            <Box sx={{ display:'flex', gap:0.75, flexDirection:'column' }}>
                <Box sx={{ display:'flex', gap:1, flexDirection:'row', alignItems:'center' }}>
                    <Typography sx={{ flex:1 }} level='body-sm'>Ich akzeptiere die <Link onClick={() => navigate('/data-privacy-policy')}>Datenschutzerklärung</Link> <Typography level='inherit' color='danger'>*</Typography></Typography>
                    <Checkbox checked={isChecked[0]} onChange={(e) => setIsChecked(prev => ({...prev, [0]: e.target.checked}) )}/>
                </Box>

                <Box sx={{ display:'flex', gap:1, flexDirection:'row', alignItems:'center' }}>
                    <Typography sx={{ flex:1 }} level='body-sm'>Die oben genannten Angaben sind korrekt <Typography level='inherit' color='danger'>*</Typography></Typography>
                    <Checkbox checked={isChecked[1]} onChange={(e) => setIsChecked(prev => ({...prev, [1]: e.target.checked}) )}/>
                </Box>
            </Box>

            <Box sx={{ display:'flex', gap: 1, flexDirection:'row' }}>
                <Button sx={{flex:1}} variant='soft' color='danger' onClick={() => setStep(prev => prev - 1)}>
                    Zurück
                </Button>

                <Button sx={{flex:1}} variant='soft' onClick={() => {performSignUp(); setStep(4)}} disabled={!isChecked[0] || !isChecked[1]}>
                    Beantragen
                </Button>
            </Box>

            <Box>
                <Typography level='body-sm'>Mit <Typography level='inherit' color='danger'>*</Typography> markierte Felder sind erforderlich</Typography>
                <Typography level='body-sm'>Schon einen Account? <Link component={BrowserLink} color='primary' to={{ pathname: '/sign-in' }}>Anmelden</Link></Typography>
            </Box>
        </>
    );
}

export default function() {
    const { isSm } = useViewport();
    const { step, setStep } = useSignUp();

    const [isThanksVisible, setIsThanksVisible] = useState(false);

    useEffect(() => {
        if (step == 4) {
            setStep(1)
            setIsThanksVisible(true);
        }
    }, [step])

    return (
        <>
            <ThanksModal open={isThanksVisible} setOpen={setIsThanksVisible} />

            <Box sx={{ display:'flex', flexDirection:'column', width:1, height:1, alignItems:'center', justifyContent:'space-between' }}>
                {/* Sign Up Wrapper */}
                <Box sx={{ display:'flex', flexDirection:'column', flexGrow:1, overflow:'auto', alignItems:'center', justifyContent: isSm? 'unset':'center', width:1, maxWidth:500 }}>
                    <Box sx={{ display:'flex', flexDirection:'column', gap:2, width:1, pt: isSm && 3, px: isSm && 2 }}>
                        {/* Title */}
                        <Card>
                            <Typography level='h3'>
                                Digitales Veranstaltungssystem
                            </Typography>
                        </Card>

                        {/* Form */}
                        <Card>
                            <Typography level='h4'>
                                Neuen Account anlegen:
                            </Typography>
                            <LinearProgress determinate value={ Math.min(step * 100/3, 100) } variant='soft' />

                            <Divider sx={{ mt:1, mx:0 }} />

                            <CardContent sx={{ display:'flex', flexDirection:'column', gap:2 }}>
                                {step == 1 && <StepOne />}

                                {step == 2 && <StepTwo />}

                                {step == 3 && <StepThree />}
                            </CardContent>
                        </Card>

                        {/* Signature */}
                        <Card sx={{ p:1 }}>
                            <Typography level='lg' sx={{ textAlign:'center' }}>
                                Made with <Typography level='inherit' color='danger'>♡</Typography> by RGP
                            </Typography>
                        </Card>
                    </Box>
                </Box>

                {/* Footer Wrapper */}
                <Box sx={{ display:'flex', position:'sticky', bottom:0 }}>
                    <LegalNotice />
                </Box>
            </Box>
        </>
    );
}