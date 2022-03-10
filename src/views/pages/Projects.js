import { Link } from 'react-router-dom';
// material-ui
import { useTheme } from '@mui/material/styles';
import {
    Button,
    ButtonBase,
    Container,
    Grid,
    Typography,
    Card,
    CardContent,
    CardActions,
    CardHeader,
    CardMedia,
    Divider
} from '@mui/material';

// project imports
import FadeInWhenVisible from './Animation';
import SubCard from 'ui-component/cards/SubCard';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { gridSpacing } from 'store/constant';

// assets
import Card1 from 'assets/images/cards/card-1.jpg';
import Card2 from 'assets/images/cards/card-2.jpg';
import Card3 from 'assets/images/cards/card-3.jpg';
import Card4 from 'assets/images/cards/card-4.jpg';

const imageStyle = {
    width: '100%',
    borderRadius: '12px'
};

// ==============================|| LANDING - DEMOS PAGE ||============================== //

const projects = [
    { projecName: 'E-Shippers', projectImg: Card1, tech: 'HTML/CSS/PHP', link: 'link' },
    { projecName: 'Facebook Album Downloader', projectImg: Card2, tech: 'HTML/CSS/PHP', link: 'link' },
    { projecName: 'Chat Application', projectImg: Card3, tech: 'Node.js/Socket.io', link: 'link' },
    { projecName: 'Many More Coming Soon!', projectImg: Card4, tech: 'Node.js/Express/MongoDB/React', link: 'link' }
];

const ProjectPage = () => {
    const theme = useTheme();
    const cardStyle = {
        background: theme.palette.mode === 'dark' ? theme.palette.dark.main : theme.palette.grey[50],
        border: '1px solid',
        borderColor: theme.palette.mode === 'dark' ? theme.palette.dark.main : theme.palette.grey[100]
    };
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
                                                Projects
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container justifyContent="center" spacing={gridSpacing} sx={{ textAlign: 'center' }}>
                                {projects.map((project, i) => (
                                    <Grid item md={4} sm={6} key={i}>
                                        <FadeInWhenVisible>
                                            <SubCard>
                                                <Card sx={cardStyle}>
                                                    <CardMedia component="img" image={project.projectImg} sx={imageStyle} title="Card 1" />
                                                    <CardContent>
                                                        <Grid container spacing={1}>
                                                            <Grid item xs={12}>
                                                                <Typography variant="h4">{project.projecName}</Typography>
                                                            </Grid>
                                                            <Grid item xs={12}>
                                                                <Typography variant="subtitle1">{project.tech}</Typography>
                                                            </Grid>
                                                        </Grid>
                                                    </CardContent>
                                                    <CardActions>
                                                        <Grid container>
                                                            <Grid item xs={12}>
                                                                <AnimateButton>
                                                                    <Button variant="text">GitHub Link</Button>
                                                                </AnimateButton>
                                                            </Grid>
                                                        </Grid>
                                                    </CardActions>
                                                </Card>
                                            </SubCard>
                                        </FadeInWhenVisible>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Container>
    );
};

export default ProjectPage;
