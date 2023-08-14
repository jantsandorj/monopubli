import React, { Suspense } from "react";
import MyPage from 'views/pages/mypage/mypage';

const AuthRoutes = [
    { path: "/mypage", element: <MyPage /> }
];

export default AuthRoutes;
