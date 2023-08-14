import { Grid } from '@mui/material';
import { CustomModal, ListButton, UpdateButton } from 'components';
import { useUpdateCommonCodeMutation } from './CommonCodeApi';
import CommonCodeEditModal from './CommonCodeEditModal';

const CommonCodeUpdate = ({ open, setOpen, data }) => {
    return (
        <>
            <CustomModal open={open} onClose={setOpen}>
                <CommonCodeEditModal data={data} mutation={useUpdateCommonCodeMutation} setOpen={setOpen}>
                    <Grid item xs={6} textAlign="left">
                        <ListButton onClick={() => setOpen(false)} />
                    </Grid>
                    <Grid item xs={6} textAlign="right">
                        <UpdateButton />
                    </Grid>
                </CommonCodeEditModal>
            </CustomModal>
        </>
    );
};

export default CommonCodeUpdate;
