// material-ui
import { styled } from '@mui/material/styles';

// project imports
import Header from './Header';
import Education from './Education';
import Projects from './Projects';
import WorkExp from './WorkExp';
import Skills from './Skills';
import Subscribe from './Subscribe';
import Footer from './Footer';
import AppBar from 'ui-component/extended/AppBar';
import MainCard from 'ui-component/cards/MainCard';
import { Divider } from '@mui/material';

const HeaderWrapper = styled('div')(({ theme }) => ({
    paddingTop: 30,
    overflowX: 'hidden',
    overflowY: 'clip',
    [theme.breakpoints.down('md')]: {
        paddingTop: 42
    }
}));

const SecondWrapper = styled('div')(({ theme }) => ({
    paddingTop: 160,
    [theme.breakpoints.down('md')]: {
        paddingTop: 60
    }
}));
// =============================|| LANDING MAIN ||============================= //

const Landing = () => (
    <>
        <HeaderWrapper id="home">
            <AppBar />
            <Header />
        </HeaderWrapper>
        <Divider />

        <SecondWrapper>
            <WorkExp />
        </SecondWrapper>
        <SecondWrapper>
            <Education />
        </SecondWrapper>
        <SecondWrapper>
            <Projects />
        </SecondWrapper>
        <SecondWrapper>
            <Skills />
        </SecondWrapper>
        <SecondWrapper>
            <Subscribe />
        </SecondWrapper>
        <Footer />
    </>
);

export default Landing;
