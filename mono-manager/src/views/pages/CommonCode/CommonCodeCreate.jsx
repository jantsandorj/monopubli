import { Grid } from '@mui/material';
import { CustomModal, ListButton, SaveButton } from 'components';
import { useCreateCommonCodeMutation } from './CommonCodeApi';
import CommonCodeEditModal from './CommonCodeEditModal';

const CommonCodeCreate = ({ open, setOpen }) => {
    return (
        <>
            <CustomModal open={open} onClose={setOpen}>
                <CommonCodeEditModal mutation={useCreateCommonCodeMutation} setOpen={setOpen}>
                    <Grid item xs={6} style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <ListButton onClick={() => setOpen(false)} />
                        <SaveButton />
                    </Grid>
                </CommonCodeEditModal>
            </CustomModal>
        </>
    );
};

export default CommonCodeCreate;
