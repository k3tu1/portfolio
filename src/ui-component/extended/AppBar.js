import PropTypes from 'prop-types';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { NavHashLink, HashLink } from 'react-router-hash-link';

// material-ui
import { useTheme, styled } from '@mui/material/styles';
import {
    AppBar as MuiAppBar,
    Box,
    Button,
    Container,
    Divider,
    Drawer,
    IconButton,
    Link,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Stack,
    Switch,
    Toolbar,
    Typography,
    useScrollTrigger
} from '@mui/material';

// project imports
import Logo from 'ui-component/Logo';
import useConfig from 'hooks/useConfig';

// assets
import { IconBook, IconCreditCard, IconDashboard, IconHome2, IconCalendar, IconBrandGithub, IconMessage } from '@tabler/icons';
import MenuIcon from '@mui/icons-material/Menu';
import { yellow } from '@mui/material/colors';

// elevation scroll

function ElevationScroll({ children, window }) {
    const theme = useTheme();
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window
    });
    const darkBorder = theme.palette.mode === 'dark' ? theme.palette.dark.dark : theme.palette.grey[200];

    return React.cloneElement(children, {
        elevation: trigger ? 2 : 0,
        style: {
            backgroundColor: theme.palette.background.default,
            borderBottom: trigger ? 'none' : '1px solid',
            borderColor: trigger ? '' : darkBorder,
            color: theme.palette.text.dark
        }
    });
}

ElevationScroll.propTypes = {
    children: PropTypes.node,
    window: PropTypes.object
};

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 60,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
        margin: 1,
        padding: 0,
        transform: 'translateX(6px)',
        '&.Mui-checked': {
            color: '#fff',
            transform: 'translateX(22px)',
            '& .MuiSwitch-thumb:before': {
                backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                    '#fff'
                )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`
            },
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: theme.palette.mode === 'dark' ? `${theme.palette.secondary.light}` : `${theme.palette.secondary.light}`
            }
        }
    },
    '& .MuiSwitch-thumb': {
        backgroundColor: theme.palette.mode === 'dark' ? '#003892' : `${yellow[700]}`,
        width: 32,
        height: 32,
        '&:before': {
            content: "''",
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                '#fff'
            )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`
        }
    },
    '& .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
        borderRadius: 20 / 2
    }
}));

// ==============================|| MINIMAL LAYOUT APP BAR ||============================== //

const AppBar = ({ ...others }) => {
    const [drawerToggle, setDrawerToggle] = React.useState(false);

    const { navType, onChangeMenuType } = useConfig();
    const [mode, setmode] = React.useState(navType === 'dark' && true);
    /** Method called on multiple components with different event types */
    const drawerToggler = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerToggle(open);
    };

    const modeChangeHandler = (e) => {
        onChangeMenuType(e.target.checked ? 'dark' : 'light');
        setmode(e.target.checked);
    };

    return (
        <ElevationScroll {...others}>
            <MuiAppBar>
                <Container>
                    <Toolbar>
                        <Typography component="div" sx={{ flexGrow: 1, textAlign: 'left' }}>
                            <Link href="#home">
                                <Logo />
                            </Link>
                        </Typography>
                        <Stack direction="row" sx={{ display: { xs: 'none', sm: 'block' } }} spacing={2}>
                            <Button color="inherit" component={Link} href="#home">
                                Home
                            </Button>
                            <Button color="inherit" component={Link} href="#workexp">
                                Experience
                            </Button>
                            <Button color="inherit" component={Link} href="#education">
                                Education
                            </Button>
                            <Button color="inherit" component={Link} href="#projects">
                                Projects
                            </Button>
                            <Button component={Link} href="#intouch" variant="contained" color="secondary">
                                Get In Touch
                            </Button>
                        </Stack>
                        <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
                            <IconButton color="inherit" onClick={drawerToggler(true)} size="large">
                                <MenuIcon />
                            </IconButton>
                            <Drawer anchor="left" open={drawerToggle} onClose={drawerToggler(false)}>
                                {drawerToggle && (
                                    <Box
                                        sx={{ width: 'auto' }}
                                        role="presentation"
                                        onClick={drawerToggler(false)}
                                        onKeyDown={drawerToggler(false)}
                                    >
                                        <Typography component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
                                            <Logo />
                                        </Typography>
                                        <Divider />
                                        <List>
                                            <Link style={{ textDecoration: 'none' }} href="#home">
                                                <ListItemButton component="a">
                                                    <ListItemIcon>
                                                        <IconHome2 />
                                                    </ListItemIcon>
                                                    <ListItemText primary="Home" />
                                                </ListItemButton>
                                            </Link>
                                            <Link style={{ textDecoration: 'none' }} href="#workexp">
                                                <ListItemButton component="a">
                                                    <ListItemIcon>
                                                        <IconCalendar />
                                                    </ListItemIcon>
                                                    <ListItemText primary="Experience" />
                                                </ListItemButton>
                                            </Link>
                                            <Link style={{ textDecoration: 'none' }} href="#education">
                                                <ListItemButton component="a">
                                                    <ListItemIcon>
                                                        <IconBook />
                                                    </ListItemIcon>
                                                    <ListItemText primary="Education" />
                                                </ListItemButton>
                                            </Link>
                                            <Link style={{ textDecoration: 'none' }} href="#projects">
                                                <ListItemButton component="a">
                                                    <ListItemIcon>
                                                        <IconBrandGithub />
                                                    </ListItemIcon>
                                                    <ListItemText primary="Projects" />
                                                </ListItemButton>
                                            </Link>
                                            <Link style={{ textDecoration: 'none' }} href="#intouch">
                                                <ListItemButton component="a">
                                                    <ListItemIcon>
                                                        <IconMessage />
                                                    </ListItemIcon>
                                                    <ListItemText primary="Get In Touch" />
                                                </ListItemButton>
                                            </Link>
                                        </List>
                                    </Box>
                                )}
                            </Drawer>
                        </Box>
                        <MaterialUISwitch checked={mode} onChange={modeChangeHandler} />
                    </Toolbar>
                </Container>
            </MuiAppBar>
        </ElevationScroll>
    );
};

export default AppBar;
