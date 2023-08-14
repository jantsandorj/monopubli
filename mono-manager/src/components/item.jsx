import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Item = styled(Paper)(({ theme, height }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    height: height ? height : "100%",
    display: 'inline-flex',
    alignItems: "center",
}));
