import { Box, Card, CardContent, Divider, List, ListDivider, ListItem, Table, Typography } from '@mui/joy';
import { useViewport } from '../contexts/Viewport';
import LegalNotice from '../components/LegalNotice'

export default function() {
    const { isSm } = useViewport();

    return (
        <>
            <Box sx={{ display:'flex', flexDirection:'column', alignItems:'center', gap:2, p:2, width:1, height:1 }}>
                {/* Header */}
                <Box sx={{
                    display: 'flex',

                    maxWidth:1000,
                    width:1,

                    justifyContent: 'center',
                    alignContent: 'center'
                }}>
                    <Typography level='h3'>Datenschutzerklärung {!isSm && '- Angaben gemäß DSGVO'}</Typography>
                </Box>

                {/* Main */}
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1,

                    maxWidth :1000,
                    width: 1,

                    flex: 1,

                    background: (theme) => theme.palette.background.level1,

                    overflowY: 'scroll',
                    '&::-webkit-scrollbar': {
                        width: '10px',
                    },
                    '&::-webkit-scrollbar-track': {
                        borderTopRightRadius: (theme) => theme.radius.md,
                        borderBottomRightRadius: (theme) => theme.radius.md,

                        backgroundColor: (theme) => theme.palette.background.level1,
                    },
                    '&::-webkit-scrollbar-thumb': {
                        borderRadius: (theme) => theme.radius.md,

                        backgroundColor: 'rgb(50, 50, 55)',
                    },
                    '&::-webkit-scrollbar-thumb:hover': {
                        backgroundColor: 'rgb(60, 60, 65)',
                    },
                
                    borderRadius: 'md' //   <br />
                }}> 
                    <Box sx={{ display:'flex', flexDirection:'column', gap:4, p:2 }}>
                        <Box>
                            <Typography level='h4'>1. Verantwortliche Stelle</Typography>

                            <Typography>
                                Verantwortlich für die Datenverarbeitung im Rahmen dieser Schul-App ist die SMV bzw. der technische Webmaster (siehe Impressum). Die App wird ausschließlich schulintern betrieben. <br />
                            </Typography>
                        </Box>

                        <Box>
                            <Typography level='h4'>2. Erhobene Daten</Typography>

                            <Typography>
                                2.1 Personenbezogene Daten der App-Nutzer*innen:
                            </Typography>

                            <Table sx={{ mt: 1 }}>
                                <thead>
                                    <tr>
                                        <th style={{ width:`${1/3*100}%` }}>Bezeichnung</th>
                                        <th style={{ width:`${2/3*100}%` }}>Grund der Erhebung</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td><Typography level='body-sm'>Vorname</Typography></td>
                                        <td><Typography level='body-sm'>Identifikation innerhalb der App (bsp: Messenger), Benutzername</Typography></td>
                                    </tr>

                                    <tr>
                                        <td><Typography level='body-sm'>Nachname</Typography></td>
                                        <td><Typography level='body-sm'>Identifikation innerhalb der App (bsp: Messenger), Benutzername</Typography></td>
                                    </tr>

                                    <tr>
                                        <td><Typography level='body-sm'>E-mail</Typography></td>
                                        <td><Typography level='body-sm'>Authentifizierung, Passwort zurücksetzten, Wichtige Ereignisse, Nachrichten, Sign-In Anfragen bestätigen | Endnutzersicherheit</Typography></td>
                                    </tr>

                                    <tr>
                                        <td><Typography level='body-sm'>IP-Adresse</Typography></td>
                                        <td><Typography level='body-sm'>Authentifizierung | App- und Stack- beziehungsweise Datensicherheit</Typography></td>
                                    </tr>

                                    <tr>
                                        <td><Typography level='body-sm'>Passwort</Typography></td>
                                        <td><Typography level='body-sm'>Authentifizierung | App- und Stack- beziehungsweise Datensicherheit</Typography></td>
                                    </tr>

                                    <tr>
                                        <td><Typography level='body-sm'>Lieblingsfarbe (= Sicherheitsfrage)</Typography></td>
                                        <td><Typography level='body-sm'>Zusätzliche Authentifizierungsinformation</Typography></td>
                                    </tr>
                                </tbody>
                            </Table>

                            <br />

                            <Typography>
                                2.2 Anonyme Nutzungsdaten der App-Nutzer:
                            </Typography>

                            <Table sx={{ mt: 1 }}>
                                <thead>
                                    <tr>
                                        <th style={{ width:`${1/3*100}%` }}>Bezeichnung</th>
                                        <th style={{ width:`${2/3*100}%` }}>Grund der Erhebung</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td><Typography level='body-sm'>Feature Use</Typography></td>
                                        <td><Typography level='body-sm'>Optimierung der App-Features</Typography></td>
                                    </tr>
                                </tbody>
                            </Table>

                            <br />

                            <Typography>
                                2.3 Anonyme Daten der Gäste, einer durch das System begleiteten Veranstaltung:
                            </Typography>

                            <Table sx={{ mt: 1 }}>
                                <thead>
                                    <tr>
                                        <th style={{ width:`${1/3*100}%` }}>Bezeichnung</th>
                                        <th style={{ width:`${2/3*100}%` }}>Grund der Erhebung</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td><Typography level='body-sm'>Muss noch ausgefüllt werden</Typography></td>
                                        <td><Typography level='body-sm'>'</Typography></td>
                                    </tr>
                                </tbody>
                            </Table>

                            <Typography>
                                Es besteht keine Möglichkeit die Gäste anhand der von uns erhobenenen und verarbeiteten Daten zu identifiezieren. Für das System sind Gäste Identifikationsnummern ohne zugehörige personenbezogene Daten.
                            </Typography>
                        </Box>

                        <Box>
                            <Typography level='h4'>3. Allgemeiner Zweck der Datenverarbeitung</Typography>

                            <Typography>
                                Personenbezogene Daten werden ausschließlich für die Verwaltung der Benutzerkonten und die Kommunikation innerhalb der App (bsp: Messenger) verwendet.<br/>

                                <br/>

                                Die anonymen Daten der Gäste werden ausschließlich zur Verbesserung und Analyse von SMV-Veranstaltungen genutzt.<br/>
                            </Typography>
                        </Box>

                        <Box>
                            <Typography level='h4'>4. Speicherung und Sicherheit der Daten</Typography>

                            <Typography>
                            Alle Daten werden auf schulinterner Infrastruktur verarbeitet und gespeichert. Passwörter werden ausschließlich in verschlüsselter Form abgelegt.
                            </Typography>
                        </Box>

                        <Box>
                            <Typography level='h4'>5. Keine Weitergabe an Dritte</Typography>

                            <Typography>
                                Es erfolgt keinerlei Weitergabe personenbezogener Daten an Dritte.
                                Auch anonymisierte Daten werden nicht verkauft oder mit externen Anbietern geteilt.<br/>
                                Des Weiteren werden keine Cookies oder Drittanbieter-Tracking-Technologien verwendet.
                            </Typography>
                        </Box>

                        <Box>
                            <Typography level='h4'>6. Rechte der Endnutzer</Typography>

                            <Typography>
                                Fehlt noch
                            </Typography>
                        </Box>

                        <Box>
                            <Typography level='h4'>7. Kontakt</Typography>

                            <Typography>
                                Bei Fragen zur Verarbeitung personenbezogener Daten kann jederzeit Kontakt mit dem zuständigen Verwaltungsteam aufgenommen werden. Die Kontaktdaten sind im Impressum aufgeführt.
                            </Typography>
                        </Box>
                    </Box>
                </Box>

                {/* Footer */}
                {isSm && 
                    <Box sx={{ display:'flex', justifyContent:'center', width:1, px:0 }}>
                        <Box sx={{
                                display: 'flex',
                                flexDirection:'column',
                                position: 'relative',
                                width: 1,
                                maxWidth: 1000,

                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                
                            <Box sx={{ display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                                <Typography level='body-sm'>
                                    26.04 2025
                                </Typography>

                                <Divider />
                            </Box>

                            <LegalNotice sx={{ p: 0 }} />
                        </Box>
                    </Box>
                ||
                    <Box sx={{ display:'flex', justifyContent:'center', width:1, px:0 }}>
                        <Box sx={{
                                display: 'flex',
                                position: 'relative',
                                width: 1,
                                maxWidth: 1000,

                                justifyContent: 'center',
                                alignItems:'center'
                            }}>
                                
                            <LegalNotice sx={{ p: 0 }} />

                            <Typography level='body-sm' sx={{ position:'absolute', right:0, bottom:0 }}>
                                Stand 26. April 2025
                            </Typography>
                        </Box>
                    </Box>
                }
            </Box>
        </>
    );
}