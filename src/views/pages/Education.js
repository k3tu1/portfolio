// material-ui
import { useTheme } from '@mui/material/styles';
import { Container, Grid, Typography, Card, CardContent } from '@mui/material';

// project imports
import FadeInWhenVisible from './Animation';
import SubCard from 'ui-component/cards/SubCard';
import Avatar from 'ui-component/extended/Avatar';
import { gridSpacing } from 'store/constant';

// assets
import PaletteTwoToneIcon from '@mui/icons-material/PaletteTwoTone';
import ReorderTwoToneIcon from '@mui/icons-material/ReorderTwoTone';
import SpeedTwoToneIcon from '@mui/icons-material/SpeedTwoTone';

// =============================|| LANDING - FEATURE PAGE ||============================= //

const EducationPage = () => {
    const theme = useTheme();
    return (
        <Container>
            <Card sx={{ mb: 6.25 }} elevation={4}>
                <CardContent sx={{ p: 4 }}>
                    <Grid container spacing={gridSpacing}>
                        <Grid item xs={12}>
                            <Grid container spacing={2} sx={{ mb: 2 }}>
                                <Grid item xs={12}>
                                    <Grid container spacing={1}>
                                        <Grid item xs={12}>
                                            <Typography align="center" variant="h1" color="primary">
                                                Education
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container justifyContent="center" spacing={gridSpacing} sx={{ textAlign: 'center' }}>
                                <Grid item md={6} sm={12}>
                                    {/* <FadeInWhenVisible> */}
                                    <SubCard
                                        title={
                                            <Typography variant="h3" color="secondary">
                                                B.Tech Computer
                                            </Typography>
                                        }
                                        darkTitle
                                    >
                                        <Grid container justifyContent="center" spacing={2}>
                                            <Grid item xs={12}>
                                                <Typography variant="body1">LDRP-ITR</Typography>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Typography variant="body2">August 2014 - May 2018</Typography>
                                            </Grid>
                                        </Grid>
                                    </SubCard>
                                    {/* </FadeInWhenVisible> */}
                                </Grid>
                                <Grid item md={6} sm={12}>
                                    <SubCard
                                        title={
                                            <Typography variant="h3" color="secondary">
                                                M.Sc. Computational Science
                                            </Typography>
                                        }
                                        darkTitle
                                    >
                                        <Grid container justifyContent="center" spacing={2}>
                                            <Grid item xs={12}>
                                                <Typography variant="body1">Laurentian University</Typography>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Typography variant="body2">September 2019 - May 2021</Typography>
                                            </Grid>
                                        </Grid>
                                    </SubCard>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Container>
    );
};

export default EducationPage;
