import { useDispatch } from 'react-redux';
import { setModalOptionsOpen } from 'store/modalSlice';

let dispatch;

export const SnackbarUtilsConfigurator = () => {
    dispatch = useDispatch();
    return null;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    alerModal(msg, variant = 'info') {
        // useSnackbarRef?.enqueueSnackbar(msg, { variant, autoHideDuration: 5000 });
        dispatch(
            setModalOptionsOpen({
                type: variant,
                onOpen: true,
                description: msg
            })
        );
    },
    success(msg) {
        this.alerModal(msg, 'success');
    },
    warning(msg) {
        this.alerModal(msg, 'warning');
    },
    info(msg) {
        this.alerModal(msg, 'info');
    },
    error(msg) {
        this.alerModal(msg, 'error');
    }
};
