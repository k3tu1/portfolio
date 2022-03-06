// material-ui
import { useTheme, styled } from '@mui/material/styles';
import { Container, Grid, Link, Typography } from '@mui/material';

// project imports
import { gridSpacing } from 'store/constant';

// assets
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

import logoDark from 'assets/images/logo-white.svg';
import GitHub from '@mui/icons-material/GitHub';
import LinkedIn from '@mui/icons-material/LinkedIn';

// styles
const FooterWrapper = styled('div')(({ theme }) => ({
    padding: '35px 0',
    color: '#fff',
    background: theme.palette.secondary.main,
    [theme.breakpoints.down('md')]: {
        textAlign: 'center'
    }
}));

const FooterLink = styled(Link)({
    color: '#fff',
    display: 'inline-flex',
    alignItems: 'center',
    textDecoration: 'none !important',
    opacity: '0.8',
    '& svg': {
        fontsize: '1.125rem',
        marginRight: 8
    },
    '&:hover': {
        opacity: '1'
    }
});

const FooterSubWrapper = styled('div')(({ theme }) => ({
    padding: '20px 0',
    color: '#fff',
    textAlign: 'center',
    background: theme.palette.secondary.dark,
    [theme.breakpoints.down('md')]: {
        textAlign: 'center'
    }
}));

// ==============================|| LANDING - FOOTER PAGE ||============================== //

const FooterPage = () => {
    const theme = useTheme();
    return (
        <>
            <FooterWrapper>
                <Container>
                    <Grid container alignItems="center" spacing={gridSpacing}>
                        <Grid item xs={12} sm={8}>
                            <Grid
                                container
                                alignItems="center"
                                spacing={2}
                                sx={{ justifyContent: 'flex-end', [theme.breakpoints.down('md')]: { justifyContent: 'center' } }}
                            >
                                <Grid item>
                                    <FooterLink href="https://www.instagram.com/k3tu1/" target="_blank" underline="hover">
                                        <InstagramIcon />
                                        Instagram
                                    </FooterLink>
                                </Grid>
                                <Grid item>
                                    <FooterLink href="https://www.facebook.com/ketdave/" target="_blank" underline="hover">
                                        <FacebookIcon />
                                        Facebook
                                    </FooterLink>
                                </Grid>
                                <Grid item>
                                    <FooterLink href="https://twitter.com/k3tu1d" target="_blank" underline="hover">
                                        <TwitterIcon />
                                        Twitter
                                    </FooterLink>
                                </Grid>
                                <Grid item>
                                    <FooterLink href="https://www.linkedin.com/in/ketul-dave/" target="_blank" underline="hover">
                                        <LinkedIn />
                                        LinkednIn
                                    </FooterLink>
                                </Grid>

                                <Grid item>
                                    <FooterLink href="https://github.com/k3tu1" target="_blank" underline="hover">
                                        <GitHub />
                                        Github
                                    </FooterLink>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </FooterWrapper>
            <FooterSubWrapper>
                <Container>
                    <Typography variant="subtitle2" component="div" color="inherit">
                        Designed with ❤️ by Ketul Dave
                    </Typography>
                </Container>
            </FooterSubWrapper>
        </>
    );
};

export default FooterPage;
