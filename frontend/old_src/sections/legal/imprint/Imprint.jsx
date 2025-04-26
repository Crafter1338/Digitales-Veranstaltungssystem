import { Box, Card, CardContent, Divider, List, ListDivider, ListItem, Typography } from "@mui/joy";
import { useViewport } from "../../../contexts";
import { ImprintNotice } from "../../../components";

export default function PrivacyPolicy() {
    const { isSm } = useViewport();

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
                    <Typography level="h3">Impressum {!isSm && 'gemäß DDG' || ''}</Typography>
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
                        <Typography level="h4">Angaben gemäß §5 DDG</Typography>
                        <CardContent>
                            <Typography>
                                Reuchlin-Gymnasium Pforzheim<br />
                                Schwarzwaldstraße 84<br />
                                75173 Pforzheim<br />

                                <br />

                                Telefon: 07231 / 392557<br />
                                Telefax: 07231 / 391677<br />

                                <br />

                                E-mail: reuchlin@stadt-pforzheim.de
                            </Typography>
                        </CardContent>
                    </Card>

                    <Card variant="soft">
                        <Typography level="h4">Vertreten durch</Typography>
                        <CardContent>
                            <Typography>
                                Herr OStD Essich
                            </Typography>
                        </CardContent>
                    </Card>

                    <Card variant="soft">
                        <Typography level="h4">Haftung für Links</Typography>
                        <CardContent>
                            <Typography>
                                Auf dieser Website befinden sich keine Verlinkungen zu externen Internetseiten Dritter.
                            </Typography>
                        </CardContent>
                    </Card>

                    <Card variant="soft">
                        <Typography level="h4">Urheberrecht</Typography>
                        <CardContent>
                            <Typography>
                                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Beiträge Dritter sind als solche gekennzeichnet. Die Vervielfältigung, Bearbeitung und Verbreitung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung.
                            </Typography>
                        </CardContent>
                    </Card>

                    <Card variant="soft">
                        <Typography level="h4">Entwickler</Typography>
                        <CardContent>
                            <Typography>
                                <b>Entwickelt im Auftrag der SMV.</b> <br />

                                Entwickelt von Nico Stickel (stickel_nico@fastmail.de) <br />

                                <br />

                                Instandhaltung gewährleistet durch:<br />

                                <br />

                                <List >
                                    <ListDivider />
                                    <ListItem>Nico Stickel (stickel_nico@fastmail.de)</ListItem>
                                    <ListDivider />
                                </List>
                            </Typography>
                        </CardContent>
                    </Card>

                    <Card variant="soft">
                        <Typography level="h4">Verwaltung</Typography>
                        <CardContent>
                            <Typography>
                                <b>Durch die SMV verwaltet.</b> <br />

                                <br />

                                <List >
                                    <ListDivider />
                                    <ListItem>Nico Stickel (stickel_nico@fastmail.de)</ListItem>
                                    <ListDivider />
                                </List>
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