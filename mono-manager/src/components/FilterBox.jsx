import { Box } from '@mui/material';

const FilterBox = ({ children }) => {
    return (
        <Box border="1px solid" borderColor={'#454545'} borderRadius={0}>
            {children}
        </Box>
    );
};

export default FilterBox;
