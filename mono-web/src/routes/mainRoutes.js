import React from "react";
import Main from "views/pages/main/main";
import About from "views/pages/about/about";
import Login from "views/pages/auth/login";
import MyProjects from "views/pages/project/myProject";

import Pages from 'store/pages';

const MainRoutes = [
    {
        path: Pages.MAIN,
        element: (
            <Main />
        )
    },
    {
        path: Pages.LOGIN,
        element: (
            <Login />
        )
    },
    {
        path: Pages.ABOUT,
        element: (
            <About />
        )
    },
    { path: Pages.MY_PROJECT, element: (<MyProjects />) }
];

export default MainRoutes;
