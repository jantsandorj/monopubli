import { Box, Divider, Grid, IconButton, Modal, Skeleton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import SubCard from 'components/cards/SubCard';
import { DataTable } from 'components/table';
import { Button } from 'components';
import { t } from 'i18next';

export const TableModal = ({ title, sendDate, open, close, tableData, tableLoading, tableColumns }) => {
    return (
        <Modal open={open} onClose={close} aria-labelledby="parent-modal-title" aria-describedby="parent-modal-description">
            <SubCard
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 800
                }}
            >
                <Grid container alignItems="center" paddingBottom={2}>
                    <Grid item xs={6}>
                        <Box display="flex" alignItems="center">
                            <Typography fontSize="18px" lineHeight="18px" fontWeight="600">
                                {title}
                            </Typography>
                            <Typography marginLeft="12px" lineHeight="12px">
                                {sendDate}
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={6} textAlign="right">
                        <IconButton onClick={close}>
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    </Grid>
                </Grid>
                <Divider />
                {tableLoading ? (
                    <Skeleton animation="wave" height={300} sx={{ borderRadius: '12px' }} />
                ) : (
                    <DataTable disabled={tableLoading} data={tableData} columns={tableColumns} pagination={false} />
                )}

                <Divider />
                <Grid container justifyContent="flex-end" paddingTop={2}>
                    <Button onClick={close}>{t('cancel')}</Button>
                </Grid>
            </SubCard>
        </Modal>
    );
};
