import React, {useState, lazy} from "react";
import Loader from 'components/Loader';
import Loadable from 'components/Loadable';

import { ThemeProvider } from "@mui/material/styles";
import "./index.css";
import themes from "themes";
import Routes from 'routes';
import {useGetSiteInfoQuery} from "api/main/main";
const Header = Loadable(lazy(() => import('views/layout/header')));
const Footer = Loadable(lazy(() => import('views/layout/footer')));

function App() {
    const {data: siteInfo, loading} = useGetSiteInfoQuery();
    const [isLoading, setIsLoading] = useState(false);

    return (
        <ThemeProvider theme={themes()}>
            {isLoading && <Loader/>}
            <Header/>
            <Routes/>
            <Footer data={siteInfo?.content}/>
        </ThemeProvider>
    );
}

export default App;
