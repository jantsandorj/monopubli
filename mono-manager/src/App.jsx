import React, { Suspense, useState, useEffect, createContext } from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';
import LocaleContext from 'LocaleContext';
import { SnackbarProvider } from 'notistack';
import i18n from './i18n';
import { useLocation, useNavigate, useRoutes } from 'react-router-dom';
import { requestAPI } from 'api/requestApi';
import { ToastContainer } from 'react-toastify';

// defaultTheme
import themes from 'themes';

// project imports
import NavigationScroll from 'components/layout/NavigationScroll';
import Loading from 'components/Loading';
import CustomModalContainer from 'components/Modal/CustomAlert';

// style
import { SnackbarUtilsConfigurator } from 'components/Snackbar';
import { SnackbarCloseButton } from 'components';
import { MainRoutes, AuthenticationRoutes } from './routes';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';

// ==============================|| APP ||============================== //
import { useAuth } from './views/pages/authentication/auth-forms/useAuth';
import { t } from 'i18next';

export const LoadingContext = createContext({
    isLoading: true,
    setIsLoading: () => {}
});

const App = () => {
    const customization = useSelector((state) => state.menuSlice);
    const [locale, setLocale] = useState(i18n.language);
    const [isLoading, setIsLoading] = React.useState(false);

    const user = useSelector((state) => state.authentication.user);
    const location = useLocation();
    const navigate = useNavigate();
    const routes = useRoutes([MainRoutes, AuthenticationRoutes]);

    const { logOut } = useAuth();

    useEffect(() => {
        if (user?.token) {
            let expDate = parseJwt(user.token)?.exp;
            if (expDate * 1000 < Date.now()) {
                alert(t('token_expired'));
                localStorage.removeItem('user');
                logOut();
                navigate('/login');
            }
        }
        if (!user && location.pathname !== '/login') navigate('/login');
        else if (user && location.pathname === '/login') navigate('/');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location, navigate, user]);

    useEffect(() => {
        customWeb();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const customWeb = async () => {
        const customWebURL = '/api/siteinfo';
        const requestOption = {
            method: 'GET',
            headers: {}
        };
        let response = await requestAPI(customWebURL, requestOption);

        if (response?.content) {
            let favIcon = response?.content?.atchFav?.url;
            document.title = response?.content?.siteNm;

            if (favIcon) {
                let favLink = document.createElement('link');
                let head = document.getElementsByTagName('head')[0];
                favLink.id = 'favicon';
                favLink.type = 'image/x-icon';
                favLink.rel = 'icon';
                favLink.href = process.env.REACT_APP_EGOV_CONTEXT_URL + favIcon;
                head.appendChild(favLink);
            }

            return;
        }
        return;
    };

    const parseJwt = (token) => {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(
            window
                .atob(base64)
                .split('')
                .map(function (c) {
                    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
                })
                .join('')
        );

        return JSON.parse(jsonPayload);
    };

    return (
        <React.StrictMode>
            <LocaleContext.Provider value={{ locale, setLocale }}>
                <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
                    <Suspense fallback={<Loading />}>
                        <SnackbarProvider
                            maxSnack={3}
                            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                            variant="info"
                            action={(snackbarKey) => <SnackbarCloseButton snackbarKey={snackbarKey} />}
                        >
                            <SnackbarUtilsConfigurator />
                            <StyledEngineProvider injectFirst>
                                <ThemeProvider theme={themes(customization)}>
                                    <CssBaseline />
                                    <div className="custom-modal">
                                        <CustomModalContainer />
                                    </div>
                                    <NavigationScroll>
                                        <ToastContainer hideProgressBar={true} theme={'colored'} />
                                        {routes}
                                    </NavigationScroll>
                                </ThemeProvider>
                            </StyledEngineProvider>
                        </SnackbarProvider>
                    </Suspense>
                </LoadingContext.Provider>
            </LocaleContext.Provider>
        </React.StrictMode>
    );
};

export default App;
