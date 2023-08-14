import MainConfig from 'views/pages/main/index';
import AuthConfig from 'views/pages/auth/index';

// ==============================|| COMBINE REDUCER ||============================== //

const Reducer = {
    [MainConfig.API.reducerPath]: MainConfig.API.reducer,
    [AuthConfig.API.reducerPath]: AuthConfig.API.reducer
};

export default Reducer;
