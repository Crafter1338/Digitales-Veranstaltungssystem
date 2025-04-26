import { Box, Card, CardContent, Divider, Typography } from "@mui/joy";
import { useViewport } from "../../../contexts";
import { ImprintNotice } from "../../../components";

import { useTheme } from '@mui/joy/styles';

export default function PrivacyPolicy() {
    const { isSm } = useViewport();
    const theme    = useTheme();
    
    return (
        <>
            <Box sx={{
                width: 1,
                height: 1,

                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 2,

                p: 2
            }}>
                {/* Header */}
                <Box sx={{
                    display: 'flex',

                    maxWidth:1000,
                    width:1,

                    justifyContent: 'center',
                    alignContent: 'center'
                }}>
                    <Typography level="h3">Datenschutzerklärung {!isSm && 'gemäß DSGVO' || ''}</Typography>
                </Box>

                {/* Main */}
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1,

                    maxWidth:1000,
                    width:1,

                    flex:1,

                    background: (theme) => theme.palette.background.level1,

                    overflowY: 'scroll',
                    '&::-webkit-scrollbar': {
                        width: '10px',
                    },
                    '&::-webkit-scrollbar-track': {
                        borderRadius: (theme) => theme.radius.md,

                        backgroundColor: (theme) => theme.palette.background.backdrop,
                    },
                    '&::-webkit-scrollbar-thumb': {
                        borderRadius: (theme) => theme.radius.md,

                        backgroundColor: (theme) => theme.palette.background.level2,
                    },
                    '&::-webkit-scrollbar-thumb:hover': {
                        backgroundColor: (theme) => theme.palette.background.level3,
                    },
                
                    borderRadius:'md'
                }}>
                    <Card variant="soft">
                        <Typography level="h4">1. Verantwortliche Stelle</Typography>
                        <CardContent>
                            <Typography>
                                Verantwortlich für die Datenverarbeitung im Rahmen dieser Schul-App ist die SMV bzw. das verantwortliche Verwaltungsteam (siehe Impressum). Die App wird ausschließlich schulintern betrieben.
                            </Typography>
                        </CardContent>
                    </Card>

                    <Card variant="soft">
                        <Typography level="h4">2. Erhobene Daten</Typography>
                        <CardContent>
                            <Typography>
                                Für die Nutzung der App werden ausschließlich folgende personenbezogene Daten erhoben und gespeichert:
                            </Typography>
                            <ul>
                                <li>Vorname</li>
                                <li>Nachname</li>
                                <li>Passwort (verschlüsselt gespeichert)</li>
                                <li>Email-Adresse (optional)</li>
                            </ul>

                            <Typography>
                                Zusätzlich werden folgende anonyme Nutzungsdaten der App-Nutzer:innen gespeichert und verarbeitet:
                            </Typography>
                            <ul>
                                <li>Häufigkeit der Nutzung bestimmer App-Funktionen</li>
                                <li>IP-Adresse (nur zur Sicherstellung der Sicherheit bei der Anmeldung)</li>
                            </ul>

                            <Typography>
                                Bei der Nutzung des mit der App verbundenen Veranstaltungssystems werden außerdem folgende anonyme Daten von Gästen erfasst:
                            </Typography>
                            <ul>
                                <li>Gesamtausgaben (zur Berechnung des Umsatzes) </li>
                                <li>Gekaufte Güter</li>
                                <li>Stoßzeiten</li>
                                <li>Alle Transaktionen</li>
                            </ul>
                            <Typography>
                                Eine Identifizierung von Gästen anhand der erhobenen Daten ist ausgeschlossen.
                            </Typography>
                        </CardContent>
                    </Card>

                    <Card variant="soft">
                        <Typography level="h4">3. Zweck der Datenverarbeitung</Typography>
                        <CardContent>
                            <Typography>
                                Personenbezogene Daten werden ausschließlich für die Verwaltung der Benutzerkonten und die Kommunikation innerhalb der App (z. B. im Messenger) verwendet.. <br /><br />
                                Die anonymen Nutzungsdaten der App-Nutzer:innen sind notwendig, um eine funktionierende und sichere App zu gewährleisten. <br /><br />
                                Die anonymen Daten der Gäste werden ausschließlich zur Verbesserung und Analyse von SMV-Veranstaltungen genutzt.
                            </Typography>
                        </CardContent>
                    </Card>

                    <Card variant="soft">
                        <Typography level="h4">4. Speicherung und Sicherheit</Typography>
                        <CardContent>
                            <Typography>
                                Alle Daten werden auf schulinterner Infrastruktur verarbeitet und gespeichert. Passwörter werden ausschließlich in verschlüsselter Form abgelegt. Der Zugriff auf personenbezogene Daten ist ausschließlich dem Verwaltungsteam vorbehalten.
                            </Typography>
                        </CardContent>
                    </Card>

                    <Card variant="soft">
                        <Typography level="h4">5. Keine Weitergabe an Dritte</Typography>
                        <CardContent>
                            <Typography>
                                Es erfolgt keinerlei Weitergabe personenbezogener Daten an Dritte. Auch anonymisierte Daten werden nicht verkauft oder mit externen Anbietern geteilt. <br />
                                Des Weiteren werden keine Cookies oder Drittanbieter-Tracking-Technologien verwendet.
                            </Typography>
                        </CardContent>
                    </Card>

                    <Card variant="soft">
                        <Typography level="h4">6. Rechte der Nutzer:innen</Typography>
                        <CardContent>
                            <Typography>
                                App-Nutzer:innen haben folgende Rechte (bezüglich ihrer eigenen personenbezogenen Daten):
                            </Typography>

                            <ul>
                                <li>Recht auf Auskunft und Einsicht</li>
                                <li>Recht auf Berichtigung</li>
                                <li>Recht auf Löschung</li>
                                <li>Recht auf Einschränkung der Verarbeitung</li>
                                <li>Recht auf Widerspruch gegen die Verarbeitung</li>
                            </ul>

                            <Typography>
                                App-Nutzer:innen haben zudem das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer personenbezogenen Daten durch uns zu beschweren. Die Datenschutzaufsichtsbehörde ist der Landesbeauftragte für den Datenschutz und die Informationsfreiheit (LfDI), Königstrasse 10a, 70173 Stuttgart.
                            </Typography>

                            <br />

                            <Typography>
                                Gäste einer durch das System geleiteten Veranstaltung haben folgende Rechte (bezüglich ihrer anonymen Nutzungsdaten):
                            </Typography>

                            <ul>
                                <li>Recht auf Auskunft und Einsicht</li>
                                <li>Recht auf Löschung</li>
                                <li>Recht auf Einschränkung der Verarbeitung</li>
                                <li>Recht auf Widerspruch gegen die Verarbeitung</li>
                            </ul>

                            <Typography>
                                Diese Rechte sind nicht gesetzlich verpflichtend, da es sich nicht um personenbezogene Daten handelt. Das Recht auf Berichtigung kann im Einzelfall nicht gewährleistet werden, eine Löschung ist jedoch auf Anfrage jederzeit möglich.
                            </Typography>
                        </CardContent>
                    </Card>

                    <Card variant="soft">
                        <Typography level="h4">7. Kontakt</Typography>
                        <CardContent>
                            <Typography>
                                Bei Fragen zur Verarbeitung personenbezogener Daten kann jederzeit Kontakt mit dem zuständigen Verwaltungsteam aufgenommen werden. Die Kontaktdaten sind im Impressum aufgeführt.
                            </Typography>
                        </CardContent>
                    </Card>
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
                                alignItems:'center'
                            }}>
                                
                            <Typography level="body-sm">
                                25.04 2025
                            </Typography>

                            <Divider sx={{ my:0.5, width:0.5, mx:'auto' }} />

                            <ImprintNotice sx={{ p: 0 }} />
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
                                
                            <ImprintNotice sx={{ p: 0 }} />

                            <Typography level="body-sm" sx={{ position:'absolute', right:0, bottom:0 }}>
                                Stand 25. April 2025
                            </Typography>
                        </Box>
                    </Box>
                }
            </Box>
        </>
    );
}
