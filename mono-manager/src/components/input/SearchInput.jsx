import React, { forwardRef } from 'react';
import { Button, InputAdornment, OutlinedInput } from '@mui/material';
import { useTheme } from '@mui/system';

import SearchIcon from '@mui/icons-material/Search';

export const SearchInput = forwardRef(({ defaultValue, disabled, ...props }, _) => {
    const theme = useTheme();

    return (
        <OutlinedInput
            fullWidth
            type="text"
            name="searchWrd"
            disabled={disabled}
            sx={{ pr: '5px' }}
            endAdornment={
                <InputAdornment position="end">
                    <Button
                        sx={{
                            width: '36px',
                            height: '30px',
                            borderRadius: '3px',
                            transition: 'all .2s ease-in-out',
                            background: theme.palette.primary.light,
                            color: theme.palette.primary.dark,
                            '&[aria-controls="menu-list-grow"],&:hover': {
                                background: theme.palette.primary.dark,
                                color: theme.palette.primary.light
                            }
                        }}
                        type="submit"
                        color="inherit"
                    >
                        <SearchIcon size="1.2rem" />
                    </Button>
                </InputAdornment>
            }
            {...props}
        />
    );
});
