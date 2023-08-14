import { Grid, Modal, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'components';
import { useTheme } from '@mui/material/styles';

export const AdminUserModal = () => {
    const [open, setOpen] = useState(false);
    const { t } = useTranslation();
    const theme = useTheme();
    return (
        <>
            <Button variant="contained" onClick={() => setOpen((Open) => !Open)}>
                {t('menu_select')}
            </Button>
            <Modal
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 800,
                        bgcolor: 'background.paper',
                        border: '2px solid #000',
                        boxShadow: 24,
                        p: 4
                    }}
                >
                    <Grid sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography id="modal-modal-title" variant="h3" component="h2">
                            {t('menu_auth_select')}
                        </Typography>
                        <Button
                            variant="rounded"
                            sx={{
                                width: '36px',
                                height: '36px',
                                borderRadius: '12px',
                                transition: 'all .2s ease-in-out',
                                background: theme.palette.primary.light,
                                color: theme.palette.primary.dark,
                                '&[aria-controls="menu-list-grow"],&:hover': {
                                    background: theme.palette.primary.dark,
                                    color: theme.palette.primary.light
                                }
                            }}
                            color="inherit"
                            onClick={() => {
                                setOpen((pOpen) => !pOpen);
                            }}
                        >
                            X
                        </Button>
                    </Grid>
                    <Grid style={{ textAlign: 'end' }}>
                        <Button variant="contained" sx={{ mr: 2 }}>
                            {t('act_save')}
                        </Button>
                    </Grid>
                </Box>
            </Modal>
        </>
    );
};
