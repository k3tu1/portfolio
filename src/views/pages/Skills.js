// material-ui
import { useTheme } from '@mui/material/styles';
import { Avatar, Button, Container, Grid, Link, Typography, Card, CardContent } from '@mui/material';

// project imports
import FadeInWhenVisible from './Animation';
import SubCard from 'ui-component/cards/SubCard';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { gridSpacing } from 'store/constant';
import jsIcon from 'assets/images/javascript.svg';
import cssIcon from 'assets/images/css.svg';
import htmlIcon from 'assets/images/html.svg';
import phpIcon from 'assets/images/php.svg';
import pythonIcon from 'assets/images/python.svg';
import nodeIcon from 'assets/images/node.svg';
import gtmIcon from 'assets/images/gtm.svg';
import sqlIcon from 'assets/images/sql.svg';
import gaIcon from 'assets/images/ga.svg';
import dsIcon from 'assets/images/ds.svg';
import goIcon from 'assets/images/go.svg';
import mongoIcon from 'assets/images/mongo.svg';
import realmIcon from 'assets/images/realm.svg';
import muiIcon from 'assets/images/mui.svg';
import dockerIcon from 'assets/images/docker.svg';
import reactIcon from 'assets/images/react.svg';

// ============================|| LANDING - KEY FEATURE PAGE ||============================ //

const skills = [
    {
        name: 'Javascript',
        icon: jsIcon
    },
    {
        name: 'CSS',
        icon: cssIcon
    },
    {
        name: 'HTML',
        icon: htmlIcon
    },
    {
        name: 'PHP',
        icon: phpIcon
    },
    {
        name: 'Python',
        icon: pythonIcon
    },
    {
        name: 'Node.js',
        icon: nodeIcon
    },
    {
        name: 'React.js',
        icon: reactIcon
    },
    {
        name: 'Google Tag Manager',
        icon: gtmIcon
    },
    {
        name: 'SQL',
        icon: sqlIcon
    },
    {
        name: 'Google Analytics',
        icon: gaIcon
    },
    {
        name: 'Google Data Studio',
        icon: dsIcon
    },
    {
        name: 'Google Optimize',
        icon: goIcon
    },
    {
        name: 'MongoDB',
        icon: mongoIcon
    },
    {
        name: 'Realm',
        icon: realmIcon
    },
    {
        name: 'Mui',
        icon: muiIcon
    },
    {
        name: 'Docker',
        icon: dockerIcon
    }
];

const SkillPage = () => {
    const theme = useTheme();
    const avatarIconSx = {
        ...theme.typography.commonAvatar,
        cursor: 'initial',
        width: 72,
        height: 72
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
                                                Professional Skills
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container justifyContent="center" spacing={gridSpacing}>
                                {skills.map((skill, i) => (
                                    <Grid item lg={3} md={4} xs={12} sm={6} key={i}>
                                        <SubCard>
                                            <Grid container alignItems="center" spacing={2}>
                                                <Grid item>
                                                    <Avatar
                                                        variant="rounded"
                                                        sx={{
                                                            ...avatarIconSx,
                                                            bgcolor: 'transparent',
                                                            // theme.palette.mode === 'dark' ? theme.palette.dark[800] : 'primary.light',
                                                            color: theme.palette.primary.main
                                                        }}
                                                        src={skill.icon}
                                                    />
                                                </Grid>
                                                <Grid item xs zeroMinWidth>
                                                    <Typography variant="h3">{skill.name}</Typography>
                                                </Grid>
                                            </Grid>
                                        </SubCard>
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

export default SkillPage;
