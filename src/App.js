// routing
import Routes from 'routes';

// project imports
import Snackbar from 'ui-component/extended/Snackbar';
import ThemeCustomization from 'themes';

// ==============================|| APP ||============================== //

const App = () => (
    <ThemeCustomization>
        <>
            <Routes />
            <Snackbar />
        </>
    </ThemeCustomization>
);

export default App;
