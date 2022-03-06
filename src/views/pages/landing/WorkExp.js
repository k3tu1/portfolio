// material-ui
import { useTheme, styled } from '@mui/material/styles';
import {
    Box,
    Container,
    Grid,
    Typography,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    ListItem,
    Card,
    CardContent
} from '@mui/material';
// project imports
import Slider from './Slider';
import { gridSpacing } from 'store/constant';

// assets
import imgLayout1 from 'assets/images/landing/demo-dark.png';
import imgLayout2 from 'assets/images/landing/demo-rtl.png';
import imgLayout3 from 'assets/images/landing/demo-multi.png';
import imgLayoutGrid from 'assets/images/landing/img-lay-grid.png';
import imgLayoutDarkGrid from 'assets/images/landing/img-bg-grid-dark.svg';
import ViewCompactTwoToneIcon from '@mui/icons-material/ViewCompactTwoTone';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineOppositeContent
} from '@mui/lab';
import { IconCurrentLocation, IconLocation } from '@tabler/icons';
import Chip from 'ui-component/extended/Chip';
// styles
const LayoutImageWrapper = styled(Box)(({ theme }) => ({
    width: '100%',
    position: 'relative',
    margin: '-70px 0px',
    [theme.breakpoints.down('lg')]: {
        margin: '-30px 0px'
    }
}));

const LayoutImage = styled('img')({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    animation: '5s wings ease-in-out infinite'
});

const LayoutContent = styled(Grid)(({ theme }) => ({
    maxWidth: 400,
    position: 'relative',
    '&:after': {
        content: '""',
        position: 'absolute',
        background: theme.palette.mode === 'dark' ? theme.palette.dark.dark : '#FFFFFF',
        border: `6px solid${theme.palette.secondary.main}`,
        width: 25,
        height: 25,
        borderRadius: '50%',
        top: 13,
        left: -20
    },
    '&:before': {
        content: '""',
        position: 'absolute',
        background: theme.palette.mode === 'dark' ? theme.palette.dark.main : '#9E9E9E',
        width: 1,
        height: 390,
        top: 13,
        left: -8
    },
    [theme.breakpoints.down('md')]: {
        '&:before': {
            height: 290
        }
    },
    [theme.breakpoints.down('lg')]: {
        '&:after': {
            left: -12
        },
        '&:before': {
            left: 0,
            height: 290
        }
    }
}));

const LayoutRightContent = styled(Grid)(({ theme }) => ({
    maxWidth: 400,
    textAlign: 'right',
    marginLeft: 'auto',
    position: 'relative',
    paddingRight: 24,
    '&:after': {
        content: '""',
        position: 'absolute',
        background: theme.palette.mode === 'dark' ? theme.palette.dark.dark : '#FFFFFF',
        border: `6px solid${theme.palette.secondary.main}`,
        width: 25,
        height: 25,
        borderRadius: '50%',
        top: 13,
        right: -12
    },
    '&:before': {
        content: '""',
        position: 'absolute',
        background: theme.palette.mode === 'dark' ? theme.palette.dark.main : '#9E9E9E',
        width: 1,
        height: 300,
        top: 13,
        right: -1
    },
    [theme.breakpoints.down('md')]: {
        '&:before': {
            height: '400%'
        }
    },
    [theme.breakpoints.down('lg')]: {
        '&:after': {
            right: -4
        },
        '&:before': {
            right: 7
        }
    },
    [theme.breakpoints.down('md')]: {
        '&:after': {
            right: 'auto',
            left: -12
        },
        '&:before': {
            right: 'auto',
            left: 0,
            height: 160
        }
    }
}));

const workExpData = [
    {
        position: 'Web Designer(Intern)',
        duration: 'May 2017 (6 Days)',
        companyName: 'Way To Web',
        location: 'Ahmedabad, India',
        description: 'Here , I learn different aspect of WebPage designing.',
        tech: ['Bootstrap', 'HTML5']
    },
    {
        position: 'Full Stack Developer(Intern)',
        duration: 'September 2017 - October 2017',
        companyName: 'Avilio Technology',
        location: 'Gandhinagar, India',
        description: 'Here , I worked as Node.Js developer.',
        tech: ['Node.Js', 'MongoDB', 'PHP']
    },
    {
        position: 'Technical Analyst',
        duration: 'November 2017 - June 2019',
        companyName: 'Tatvic Analytics',
        location: 'Ahmedabad, India',
        description: "What I've done",
        tech: [
            'Experties in Google Analytics',
            'Google Analytics',
            'Google Tag Manager',
            'Google Data Studio',
            'Developed wireframes, site maps and content inventories for new website designs.',
            'Applied honed problem-solving skills to analyze and resolve issues impacting business operations and goal achievement.',
            'Create Sunburst chart to show user jouney'
        ]
    },
    {
        position: 'Software Engineer',
        duration: 'May 2021 - Present',
        companyName: 'Maestro Digital Mine',
        location: 'Sudbury, Ontario, Canada',
        description: 'Key Job Role',
        tech: [
            'Firmware development for new products, as well as maintenance of existing code base.',
            'Cloud based application development to support product deployment with customers.',
            'IOT Application development with react and nodejs'
        ]
    }
];
// =============================|| LANDING - LAYOUTS PAGE ||============================= //

const WorkExpPage = () => {
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
                                                Work Experience
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        {/* <Grid item xs={12} sx={{ display: { xs: 'block', md: 'none' } }}>
                            <Slider />
                        </Grid> */}
                        <Grid item xs={12}>
                            <Box sx={{ display: { xs: 'block', md: 'block' }, m: '0 auto' }}>
                                <Grid item xs={12}>
                                    <Timeline>
                                        {workExpData.map((x, i) => (
                                            <TimelineItem key={i}>
                                                <TimelineOppositeContent>
                                                    <Typography variant="h3" color="primary">
                                                        {x.position}
                                                    </Typography>
                                                    <Typography variant="h5" color="textSecondary">
                                                        {x.duration}
                                                    </Typography>
                                                </TimelineOppositeContent>
                                                <TimelineSeparator>
                                                    <TimelineDot variant="outlined" color="secondary" />
                                                    <TimelineConnector />
                                                </TimelineSeparator>
                                                <TimelineContent>
                                                    <Typography variant="h3" color="secondary">
                                                        {x.companyName}
                                                    </Typography>
                                                    <List component="nav" aria-labelledby="nested-list-subheader">
                                                        <ListItem disablePadding>
                                                            <ListItemIcon>
                                                                <IconCurrentLocation sx={{ fontSize: '0.5rem' }} />
                                                            </ListItemIcon>
                                                            <ListItemText primary={`${x.location}`} />
                                                        </ListItem>
                                                        {/* <ListItem disablePadding>
                                                            <ListItemText primary={`${x.description}`} />
                                                        </ListItem> */}
                                                        <List component="div" disablePadding sx={{ pl: 2 }}>
                                                            {x.tech.map((y, m) => (
                                                                <ListItem disablePadding key={m}>
                                                                    <ListItemIcon>
                                                                        <FiberManualRecordIcon sx={{ fontSize: '0.5rem' }} />
                                                                    </ListItemIcon>
                                                                    <ListItemText primary={y} />
                                                                </ListItem>
                                                            ))}
                                                        </List>
                                                    </List>
                                                </TimelineContent>
                                            </TimelineItem>
                                        ))}
                                    </Timeline>
                                </Grid>
                            </Box>
                        </Grid>

                        <Box sx={{ display: 'none', m: '0 auto' }}>
                            <Grid item xs={12}>
                                <Grid container alignItems="center" spacing={gridSpacing}>
                                    <Grid item sm={6}>
                                        {/* <LayoutImageWrapper>
                                    <img
                                        src={theme.palette.mode === 'dark' ? imgLayoutDarkGrid : imgLayoutGrid}
                                        alt="Berry"
                                        style={{ width: '100%' }}
                                    />
                                    <LayoutImage src={imgLayout1} alt="Berry" />
                                </LayoutImageWrapper> */}
                                        <Grid item sm={12}>
                                            <Typography variant="h4" component="div">
                                                Dark Layout
                                            </Typography>
                                        </Grid>
                                        <Grid item sm={12}>
                                            <Typography variant="body2">
                                                Modern, sleek and elegant dark color scheme that looks great in a dark variant.
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <LayoutContent container spacing={2}>
                                            <Grid item sm={12}>
                                                <Typography variant="h4" component="div">
                                                    Dark Layout
                                                </Typography>
                                            </Grid>
                                            <Grid item sm={12}>
                                                <Typography variant="body2">
                                                    Modern, sleek and elegant dark color scheme that looks great in a dark variant.
                                                </Typography>
                                            </Grid>
                                        </LayoutContent>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                <Grid container alignItems="center" spacing={gridSpacing}>
                                    <Grid item sm={6}>
                                        <LayoutRightContent container spacing={2}>
                                            <Grid item sm={12}>
                                                <Typography variant="h4" component="div">
                                                    RTL
                                                </Typography>
                                            </Grid>
                                            <Grid item sm={12}>
                                                <Typography variant="body2">Fully Support Right-to-left (RTL) design variant.</Typography>
                                            </Grid>
                                        </LayoutRightContent>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <LayoutImageWrapper>
                                            <img
                                                src={theme.palette.mode === 'dark' ? imgLayoutDarkGrid : imgLayoutGrid}
                                                alt="Berry"
                                                style={{ width: '100%' }}
                                            />
                                            <LayoutImage src={imgLayout2} alt="Berry" style={{ animationDelay: '1.5s' }} />
                                        </LayoutImageWrapper>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                <Grid container alignItems="center" spacing={gridSpacing}>
                                    <Grid item sm={6}>
                                        <LayoutImageWrapper>
                                            <img
                                                src={theme.palette.mode === 'dark' ? imgLayoutDarkGrid : imgLayoutGrid}
                                                alt="Berry"
                                                style={{ width: '100%' }}
                                            />
                                            <LayoutImage src={imgLayout3} alt="Berry" style={{ animationDelay: '3s' }} />
                                        </LayoutImageWrapper>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <LayoutContent
                                            container
                                            spacing={2}
                                            sx={{
                                                '&:before': {
                                                    background: theme.palette.mode === 'dark' ? theme.palette.dark[900] : '#fff !important'
                                                }
                                            }}
                                        >
                                            <Grid item sm={12}>
                                                <Typography variant="h4" component="div">
                                                    Multi-language Support
                                                </Typography>
                                            </Grid>
                                            <Grid item sm={12}>
                                                <Typography variant="body2">
                                                    Support Multi-language. Added 4 pre-filled language.
                                                </Typography>
                                            </Grid>
                                        </LayoutContent>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </CardContent>
            </Card>
        </Container>
    );
};

export default WorkExpPage;
