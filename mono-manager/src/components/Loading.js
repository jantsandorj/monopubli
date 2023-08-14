import { CircularProgress } from '@mui/material';

function Loading({ isLoading }) {
    return isLoading && <CircularProgress />;
}

export default Loading;
