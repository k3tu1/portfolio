// material-ui
import { Link, Typography, Stack } from '@mui/material';

// ==============================|| FOOTER - AUTHENTICATION 2 & 3 ||============================== //

const AuthFooter = () => (
    <Stack direction="row" justifyContent="space-between">
        <Typography variant="subtitle2" component={Link} href="https://myfooter.io" target="_blank" underline="hover">
            myfooter.io
        </Typography>
        <Typography variant="subtitle2" component={Link} href="https://myfooter.com" target="_blank" underline="hover">
            &copy; myfooter.com
        </Typography>
    </Stack>
);

export default AuthFooter;
