import { IconButton, Box, Card, CardContent, Chip, Divider, FormControl, FormLabel, Input, Typography, Link, Button, Checkbox } from '@mui/joy'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import { Link as BrowserLink } from 'react-router-dom'

import { useViewport } from '../contexts/Viewport';
import { useSignIn } from '../contexts/SignIn';
import LegalNotice from '../components/LegalNotice';
import { useState } from 'react';
import { isPasswordValid } from '../utils/Text'

export default function() {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const { isSm } = useViewport();
    const { identifier, setIdentifier, password, setPassword, performSignIn } = useSignIn();

    return (
        <>
            <Box sx={{ display:'flex', flexDirection:'column', width:1, height:1, alignItems:'center', justifyContent:'space-between' }}>
                {/* Sign In Wrapper */}
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
                                Anmelden um fortzufahren:
                            </Typography>

                            <Divider sx={{ mb:1, mx:0 }} />

                            <CardContent sx={{ display:'flex', flexDirection:'column', gap:2 }}>
                                <FormControl>
                                    <FormLabel>
                                        Benutzername oder Email:
                                    </FormLabel>

                                    <Input value={identifier} onChange={(e) => { setIdentifier(e.target.value.toLowerCase()) }} />
                                </FormControl>

                                <FormControl>
                                    <FormLabel>
                                        Passwort:
                                    </FormLabel>

                                    <Input type={isPasswordVisible ? 'text' : 'password'} value={password} onChange={(e) => { setPassword(e.target.value) }} endDecorator={
                                        <IconButton onClick={() => {setIsPasswordVisible(prev => !prev)}}>
                                            {isPasswordVisible ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                        </IconButton>
                                    } />
                                </FormControl>

                                <Box sx={{ display:'flex', gap:1, flexDirection:'row', alignItems:'center' }}>
                                    <Checkbox />
                                    <Typography>Angemeldet bleiben</Typography>
                                </Box>

                                <Button variant='soft' onClick={performSignIn} disabled={identifier.length == 0 || !isPasswordValid(password)}>
                                    <Typography level='body-md'>Anmelden</Typography>
                                </Button>

                                <Box>
                                    <Typography level='body-sm'><Link component={BrowserLink} color='primary' to={{ pathname: '/forgot-password' }}>Passwort vergessen</Link></Typography>
                                    <Typography level='body-sm'>Noch keinen Account? <Link component={BrowserLink} color='primary' to={{ pathname: '/sign-up' }}>Registrieren</Link></Typography>
                                </Box>
                            </CardContent>
                        </Card>

                        {/* Signature */}
                        <Card sx={{ p:1 }}>
                            <Typography level='lg' sx={{ textAlign:'center' }}>
                                Made with <Typography level='inherit' color='danger'>♡</Typography> by RGP
                            </Typography>
                        </Card>

                        {!isSm &&
                            <Box sx={{ display:'flex', justifyContent:'center', gap:1 }}>
                                <Chip sx={{ p: 1, borderRadius: 'md' }} color='primary'><Typography>#RGPonTop</Typography></Chip>
                                <Chip sx={{ p: 1, borderRadius: 'md' }} color='primary'><Typography>#RGPSMV</Typography></Chip>
                                <Chip sx={{ p: 1, borderRadius: 'md' }} color='primary'><Typography>#Modern</Typography></Chip>
                                <Chip sx={{ p: 1, borderRadius: 'md' }} color='primary'><Typography>#React</Typography></Chip>
                            </Box>
                        }
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