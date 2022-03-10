// material-ui
import { useTheme, styled } from '@mui/material/styles';
import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { useForm as formSpreeUseForm } from '@formspree/react';
// project imports
import { gridSpacing } from 'store/constant';
import { useDispatch } from 'store';
import { openSnackbar } from 'store/slices/snackbar';
// assets
import imgMail from 'assets/images/landing/img-groupmail.png';
import InputLabel from 'ui-component/extended/Form/InputLabel';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { useForm } from 'react-hook-form';
import { Send } from '@mui/icons-material';

// styles
const SubscribeWrapper = styled('div')(({ theme }) => {
    const darkColorRTL =
        theme.palette.mode === 'dark'
            ? `linear-gradient(270deg, ${theme.palette.dark.main} 65%, ${theme.palette.dark.dark} 65%)`
            : `linear-gradient(270deg, ${theme.palette.primary.light} 65%, #fff 65%)`;
    const darkColor =
        theme.palette.mode === 'dark'
            ? `linear-gradient(90deg, ${theme.palette.dark.main} 65%, ${theme.palette.dark.dark} 65%)`
            : `linear-gradient(90deg, ${theme.palette.primary.light} 65%, #fff 65%)`;

    const darkColorRTL0 =
        theme.palette.mode === 'dark'
            ? `linear-gradient(0deg, ${theme.palette.dark.main} 65%, ${theme.palette.dark.dark} 65%)`
            : `linear-gradient(0deg, ${theme.palette.primary.light} 65%, #fff 65%)`;
    const darkColor0 =
        theme.palette.mode === 'dark'
            ? `linear-gradient(0deg, ${theme.palette.dark.main} 65%, ${theme.palette.dark.dark} 65%)`
            : `linear-gradient(0deg, ${theme.palette.primary.light} 65%, #fff 65%)`;
    return {
        padding: '100px 0',
        background: theme.direction === 'rtl' ? darkColorRTL : darkColor,

        [theme.breakpoints.down('lg')]: {
            padding: '50px 0',
            background: theme.direction === 'rtl' ? darkColorRTL0 : darkColor0
        }
    };
});

const SubscribeCard = styled('div')(({ theme }) => ({
    background: theme.palette.mode === 'dark' ? theme.palette.dark.dark : '#FFFFFF',
    boxShadow: '0px 0px 50px rgba(33, 150, 243, 0.2)',
    borderRadius: '20px',
    padding: '100px 75px',
    [theme.breakpoints.down('md')]: {
        padding: '40px 25px'
    }
}));

const SubscribeImage = styled('img')({
    width: 330,
    animation: '5s wings ease-in-out infinite',
    maxWidth: '100%'
});

// ============================|| LANDING - SUBSCRIBE PAGE ||============================ //

const Subscribe = () => {
    const theme = useTheme();
    const dispatch = useDispatch();
    const [state, formSpreeHandleSubmit] = formSpreeUseForm('mvwgwbex');
    if (state.succeeded) {
        dispatch(
            openSnackbar({
                open: true,
                anchorOrigin: { vertical: 'bottom', horizontal: 'center' },
                variant: 'alert',
                alert: {
                    color: 'success'
                },
                message: 'Your message has been sent!'
            })
        );
    }
    if (state.errors.length > 0) {
        dispatch(
            openSnackbar({
                open: true,
                anchorOrigin: { vertical: 'bottom', horizontal: 'center' },
                variant: 'alert',
                alert: {
                    color: 'error'
                },
                message: 'Something went wrong!'
            })
        );
    }
    const formSubmitHandler = (data) => {
        console.log(data);
        formSpreeHandleSubmit(data);
        if (state.succeeded) {
            dispatch(
                openSnackbar({
                    open: true,
                    anchorOrigin: { vertical: 'bottom', horizontal: 'center' },
                    message: 'This is an bottom-center message!'
                })
            );
        }
    };
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    return (
        <SubscribeWrapper>
            <Container>
                <Grid container alignItems="center" spacing={gridSpacing}>
                    <Grid
                        item
                        xs={12}
                        md={5}
                        sx={{
                            display: { xs: 'none', md: 'block' },
                            textAlign: 'right',
                            [theme.breakpoints.down('lg')]: { textAlign: 'center' }
                        }}
                    >
                        <SubscribeImage src={imgMail} alt="img" />
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <SubscribeCard>
                            <Grid container spacing={gridSpacing} sx={{ mb: '1rem' }}>
                                <Grid item sm={12}>
                                    <Typography
                                        variant="h1"
                                        component="div"
                                        sx={{ [theme.breakpoints.down('md')]: { fontSize: '1.125rem' } }}
                                    >
                                        Get in Touch
                                    </Typography>
                                </Grid>
                                <Grid item sm={12}>
                                    <Typography variant="body1">Have a question OR work together ! Message me! </Typography>
                                </Grid>
                                <Grid item sm={12}>
                                    <form onSubmit={handleSubmit(formSubmitHandler)}>
                                        <Grid container alignItems="center" spacing={gridSpacing}>
                                            <Grid item xs={12} zeroMinWidth>
                                                <InputLabel> Name</InputLabel>
                                                <TextField
                                                    fullWidth
                                                    type="text"
                                                    error={errors.name !== undefined}
                                                    {...register('name', { required: { value: true, message: 'name is required' } })}
                                                    name="name"
                                                    placeholder="Your Name"
                                                    helperText={errors.name && errors.name.message}
                                                />
                                            </Grid>
                                            <Grid item xs={12} zeroMinWidth>
                                                <InputLabel>Email Address</InputLabel>
                                                <TextField
                                                    fullWidth
                                                    error={errors.email !== undefined}
                                                    {...register('email', { required: { value: true, message: 'Email is required' } })}
                                                    type="email"
                                                    name="email"
                                                    placeholder="Your Email"
                                                    helperText={errors.email && errors.email.message}
                                                />
                                            </Grid>
                                            <Grid item xs={12} zeroMinWidth>
                                                <InputLabel> Message</InputLabel>
                                                <TextField
                                                    fullWidth
                                                    multiline
                                                    type="text"
                                                    error={errors.message !== undefined}
                                                    {...register('message', {
                                                        required: { value: true, message: 'Message is required' },
                                                        minLength: { value: 10, message: 'Message should be at least 10 character long!' }
                                                    })}
                                                    name="message"
                                                    placeholder="Start typing your message..."
                                                    rows={4}
                                                    helperText={errors.message && errors.message.message}
                                                />
                                            </Grid>
                                            <Grid item>
                                                <AnimateButton>
                                                    <Button
                                                        disableElevation
                                                        disabled={state.submitting}
                                                        type="submit"
                                                        variant="contained"
                                                        size="large"
                                                        sx={{
                                                            px: 2.75,
                                                            py: 1.5
                                                        }}
                                                        endIcon={<Send />}
                                                    >
                                                        Send
                                                    </Button>
                                                </AnimateButton>
                                            </Grid>
                                        </Grid>
                                    </form>
                                </Grid>
                            </Grid>
                        </SubscribeCard>
                    </Grid>
                </Grid>
            </Container>
        </SubscribeWrapper>
    );
};

export default Subscribe;
