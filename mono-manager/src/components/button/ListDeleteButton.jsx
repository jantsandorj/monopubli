import React, { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { DeleteConfirm } from 'components';
import { useNavigate } from 'react-router';
import resultChecker from 'utils/functions/resultChecker';

// Style
import Snackbar from 'components/Snackbar';
import { Button } from '@mui/material';
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';

const ListDeleteButton = ({ loading, deleteFunc, to, code, size, ...props }) => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [show, setShow] = useState(false);

    const [onDelete, deleteResult] = deleteFunc();

    const handleDelete = useCallback(
        (values) => {
            if (!values) {
                Snackbar.warning(t('warning.delete'));
                return;
            }

            onDelete(values)
                .then((res) => {
                    resultChecker({ res, redirect: () => navigate(to), type: 'delete' });
                    setShow(false);
                })
                .catch((err) => console.log('DELETE API ERROR  => ', err));
        },
        [navigate, onDelete, to]
    );
    return (
        <>
            <Button variant="outlined" color="error" size={'small'} sx={{ m: 0 }} onClick={() => setShow(true)} {...props}>
                <DeleteForeverTwoToneIcon sx={{ fontSize: 18 }} />
            </Button>
            <DeleteConfirm
                show={show}
                setShow={setShow}
                isLoading={loading || deleteResult?.isLoading}
                onDelete={handleDelete}
                code={code}
            />
        </>
    );
};

export default ListDeleteButton;
