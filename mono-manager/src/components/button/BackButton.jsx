import { Button } from '@mui/material';
import { IconArrowLeft } from '@tabler/icons';
import { useNavigate } from 'react-router';

export const BackButton = ({ text, disabled }) => {
    const navigate = useNavigate();
    return (
        <div>
            <Button
                style={{ marginRight: 10 }}
                disableElevation
                size="small"
                color="primary"
                disabled={disabled}
                onClick={() => {
                    navigate(-1);
                }}
            >
                {<IconArrowLeft />}
            </Button>
            {text}
        </div>
    );
};
