import { useCallback, useState } from 'react';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import { CircularProgress } from '@mui/material';
import { DeleteForeverOutlined } from '@mui/icons-material';

import Button from './Button';
import { DeleteConfirm } from 'components/index';
import resultChecker from 'utils/functions/resultChecker';

const BaseButton = styled(Button)({
    height: 41,
    minWidth: 150
});

const DeleteButton = ({ loading, deleteFunc, to, code, codeGroup, onClose, ...props }) => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const [onDelete, deleteResult] = deleteFunc();

    const handleDelete = useCallback(
        (values) => {
            onDelete(values)
                .then((res) => {
                    resultChecker({ res, redirect: () => navigate(to), type: 'delete' });
                    setShow(false); // set Show to false on successful deletion
                })
                .catch((err) => console.log('useUpdateBannerMutation ERROR  => ', err));
        },
        [navigate, onDelete, to]
    );

    return (
        <>
            <BaseButton
                type="button"
                color="error"
                startIcon={loading ? <CircularProgress size={20} color="light" /> : <DeleteForeverOutlined />}
                onClick={() => setShow(true)}
                {...props}
            >
                {t('act_delete')}
            </BaseButton>
            <DeleteConfirm
                show={show}
                setShow={setShow}
                isLoading={loading || deleteResult?.isLoading}
                onDelete={handleDelete}
                code={code}
                codeGroup={codeGroup}
            />
        </>
    );
};
export default DeleteButton;
