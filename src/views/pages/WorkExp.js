// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Container, Grid, Typography, List, ListItemIcon, ListItemText, ListItem, Card, CardContent } from '@mui/material';
// project imports
import { gridSpacing } from 'store/constant';

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
import { IconCurrentLocation } from '@tabler/icons';

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
        position: 'Full Stack Developer',
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
            'Experties in Google Analytics, Google Tag Manager, Google Data Studio, Google Optimize',
            'Developed wireframes, site maps and content inventories for new website designs.',
            'Applied honed problem-solving skills to analyze and resolve issues impacting business operations and goal achievement.',
            'Create Sunburst chart to show user jouney'
        ]
    },
    {
        position: 'Software Engineer',
        duration: 'May 2021 - April 2022',
        companyName: 'Maestro Digital Mine',
        location: 'Sudbury, Ontario, Canada',
        description: 'Key Job Role',
        tech: [
            'Design client-side and server-side architectures for web applications',
            'Build the front-end of applications through appealing visual design and user-friendly interfaces',
            'Write effective APIs',
            'Firmware development for new products, as well as maintenance of existing code base.',
            'Cloud based application development to support product deployment with customers.',
            'IOT Application development with react and nodejs',
            'Work with data scientists and analysts to improve software development and data analysis.'
        ]
    },
    {
        position: 'Senior Implementation Specialist',
        duration: 'April 2022 - Present',
        companyName: 'Napkyn Analytics',
        location: 'Ottawa, Ontario, Canada',
        description: 'Key Job Role',
        tech: [
            'Actively participate in an account service role.',
            'Stay up to date with industry trends (tooling and strategic).',
            'Perform client-facing tasks such as presenting insights or providing training.',
            'Identify, gather, and analyze information from various large, complex data sets to understand consumer behaviour and market trends.',
            'Perform in-depth analysis and reporting and provide actionable recommendations in line with client goals.',
            ' Gather measurement requirements from a variety of different stakeholders and determine how best to capture them.',
            'Provide implementation guidance and troubleshooting.',
            'Fulfill ad-hoc data analysis requests to answer business questions and enable effective decision-making.',
            'Work with internal and external teams to identify areas of opportunity to grow, increase profitability, and optimize program effectiveness.',
            'Help define and implement analytics best practices and standard operating procedures by documenting work processes and making recommendations to improve current analytics capabilities.'
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
                            <Box sx={{ display: { xs: 'none', md: 'block' }, m: '0 auto' }}>
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
                            <Box sx={{ display: { xs: 'block', md: 'none' }, m: '0 auto' }}>
                                <Grid item xs={12}>
                                    <Timeline>
                                        {workExpData.map((x, i) => (
                                            <TimelineItem key={i}>
                                                <TimelineOppositeContent sx={{ flex: 0.1 }} />
                                                <TimelineSeparator>
                                                    <TimelineDot variant="outlined" color="secondary" />
                                                    <TimelineConnector />
                                                </TimelineSeparator>
                                                <TimelineContent>
                                                    <Typography variant="h3" color="secondary">
                                                        {x.companyName}
                                                    </Typography>
                                                    <Typography variant="h4" color="primary">
                                                        {x.position}
                                                    </Typography>
                                                    <Typography variant="h5" color="textSecondary">
                                                        {x.duration}
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
                    </Grid>
                </CardContent>
            </Card>
        </Container>
    );
};

export default WorkExpPage;
