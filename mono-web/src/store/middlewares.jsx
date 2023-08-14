import {
    MainConfig,
    AuthConfig
} from 'views/pages';

export const Middlewares = [
    MainConfig.API.middleware,
    AuthConfig.API.middleware
];
