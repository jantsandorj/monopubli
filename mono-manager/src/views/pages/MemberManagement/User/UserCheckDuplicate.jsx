import { useEffect } from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, FormInput } from 'components';
import Snackbar from 'components/Snackbar';

export const UserIdCheckDuplicate = ({ isLoading, onCheck, checkResult, ...props }) => {
    const [id, setId] = useState(props.id || '');
    const { t } = useTranslation();

    var re = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');

    useEffect(() => {
        if (checkResult.data?.message) {
            if (checkResult?.data?.message === 'message.success') {
                Snackbar.success(t('use_id'));
            } else {
                Snackbar.error(t('not_use_id'));
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [checkResult]);

    return (
        <>
            <FormInput id="username" name="username" value={id} onChange={(e) => setId(e.target.value)} loading={isLoading} />
            <Button
                variant="contained"
                onClick={() => {
                    if (!re.test(id)) {
                        Snackbar.error(t('email_type_doesnt_math'));
                        return;
                    } else {
                        onCheck(id);
                    }
                }}
            >
                {t('check_for_duplicates')}
            </Button>
        </>
    );
};
