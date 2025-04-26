import { Box, Card, CardContent, Divider, List, ListDivider, ListItem, Typography } from '@mui/joy';
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

                    maxWidth: 1000,
                    width: 1,

                    justifyContent: 'center',
                    alignContent: 'center'
                }}>
                    <Typography level='h3'>Impressum {!isSm && '- Angaben gemäß § 5 DDG'}</Typography>
                </Box>

                {/* Main */}
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1,

                    maxWidth: 1000,
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
                
                    borderRadius: 'md'
                }}>
                    <Box sx={{ display:'flex', flexDirection:'column', gap:4, p:2 }}>
                        <Box>
                            <Typography level='h4'>Anschrift</Typography>

                            <Typography>
                                Reuchlin-Gymnasium Pforzheim<br />
                                Schwarzwaldstraße 84<br />
                                75173 Pforzheim<br />
                                Deutschland, Baden-Württemberg<br/>
                            </Typography>
                        </Box>

                        <Box>
                            <Typography level='h4'>Vertreter</Typography>

                            <Typography>
                                Herr OStD Wolfgang Essich<br />
                            </Typography>
                        </Box>

                        <Box>
                            <Typography level='h4'>Kontakt</Typography>
                            
                            <Typography>
                                Telefon: 07231 / 392557<br />
                                Telefax: 07231 / 391677<br />

                                <br />

                                E-mail: reuchlin@stadt-pforzheim.de<br />
                            </Typography>
                        </Box>

                        <Box>
                            <Typography level='h4'>Haftung für Inhalte</Typography>
                            
                            <Typography>
                                Als Diensteanbieter sind wir gemäß § 7 Abs.1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
                                Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen 
                                oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.<br />
                            
                                <br />

                                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
                                Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich.
                                Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.<br />
                            </Typography>
                        </Box>

                        <Box>
                            <Typography level='h4'>Haftung für Links</Typography>
                            
                            <Typography>
                                Unser Angebot enthält keine Links zu externen Internetseiten Dritter.<br />
                            </Typography>
                        </Box>

                        <Box>
                            <Typography level='h4'>Urheberrecht</Typography>
                            
                            <Typography>
                                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.
                                Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen
                                der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                                <b> Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.</b><br />

                                <br />

                                Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet.
                                Insbesondere werden Inhalte Dritter als solche gekennzeichnet.
                                Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis.
                                Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.<br />
                            </Typography>
                        </Box>

                        <Box>
                            <Typography level='h4'>Verwaltung der Internetseite</Typography>
                            
                            <Typography>
                                Diese Internetseite wird von der SMV am Reuchlin-Gymnasium Pforzheim technisch betreut. <br />
                                Webmaster (Technik): Herr Dominique Henrich
                            </Typography>
                        </Box>

                        <Box>
                            <Typography level='h4'>Verwaltung des Dienstes</Typography>
                            
                            <Typography>
                            Die inhaltliche Pflege erfolgt durch die SMV am Reuchlin-Gymnasium Pforzheim. <br />
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
                                alignItems: 'center'
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