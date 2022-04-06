// material-ui
import { useTheme, styled } from '@mui/material/styles';
import { Box, Button, Container, Divider, Grid, Link, Typography } from '@mui/material';

// third party
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
// project imports
import { gridSpacing } from 'store/constant';

// assets
import widget1 from 'assets/images/Image_1.png';

const HeaderAnimationImage = styled('img')({
    maxWidth: '100%',
    filter: 'drop-shadow(0px 0px 50px rgb(33 150 243 / 30%))'
});

// ==============================|| LANDING - HEADER PAGE ||============================== //

const HeaderPage = () => {
    const theme = useTheme();

    return (
        <Container>
            <Grid container alignItems="center" justifyContent="center" spacing={gridSpacing} sx={{ height: '100vh' }}>
                <Grid item xs={12} md={10}>
                    <Grid container spacing={gridSpacing} sx={{ pr: 10, [theme.breakpoints.down('lg')]: { pr: 0, textAlign: 'center' } }}>
                        <Grid item xs={12}>
                            <motion.div
                                initial={{ opacity: 0, translateY: 550 }}
                                animate={{ opacity: 1, translateY: 0 }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 150,
                                    damping: 30
                                }}
                            >
                                <Typography
                                    variant="h1"
                                    sx={{
                                        fontSize: { xs: '2.25rem', sm: '3rem', md: '4rem' },
                                        fontWeight: 900,
                                        lineHeight: 1.4
                                    }}
                                >
                                    Hi! My name is
                                    <Box component="span" sx={{ ml: 2, color: theme.palette.primary.main }}>
                                        Ketul.
                                    </Box>
                                </Typography>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, translateY: 550 }}
                                animate={{ opacity: 1, translateY: 0 }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 150,
                                    damping: 30
                                }}
                            >
                                <Typography
                                    variant="h1"
                                    sx={{
                                        fontSize: { xs: '2.25rem', sm: '3rem', md: '4rem' },
                                        fontWeight: 900,
                                        lineHeight: 1.4
                                    }}
                                >
                                    <Box sx={{ color: theme.palette.secondary.main }}>
                                        <Typewriter
                                            options={{
                                                strings: [
                                                    'The Digital Analyst.',
                                                    'The Problem Solver.',
                                                    'The Full Stack Developer.',
                                                    'The Programer.'
                                                ],
                                                autoStart: true,
                                                loop: true,
                                                skipAddStyles: true
                                            }}
                                        />
                                    </Box>
                                </Typography>
                            </motion.div>
                        </Grid>
                        <Grid item xs={12}>
                            <motion.div
                                initial={{ opacity: 0, translateY: 550 }}
                                animate={{ opacity: 1, translateY: 0 }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 150,
                                    damping: 30,
                                    delay: 0.2
                                }}
                            >
                                <Typography
                                    variant="h4"
                                    component="div"
                                    color="inherit"
                                    sx={{
                                        fontSize: { xs: '1rem', md: '1.125rem' },
                                        fontWeight: 400,
                                        lineHeight: 1.4
                                    }}
                                >
                                    Hello, I&apos;m Full-Stack Web Developer who loves building creative websites. I enjoy turning complex
                                    problems into simple. I love programming, gaming, traveling. I write in JavaScript, CSS, HTML, Python
                                    and PHP. I also can speak to databases and make servers do stuff.
                                </Typography>
                            </motion.div>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={2} sx={{ display: { xs: 'none', md: 'block' } }}>
                    <Box sx={{ position: 'relative' }}>
                        <Box
                            sx={{
                                position: 'absolute',
                                top: '-285px',
                                right: theme.direction === 'rtl' ? '170px' : '-190px',
                                width: '490px',
                                animation: '10s slideY linear infinite'
                            }}
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 150,
                                    damping: 30,
                                    delay: 0.2
                                }}
                            >
                                <HeaderAnimationImage src={widget1} alt="img" />
                            </motion.div>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default HeaderPage;
