import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router';
import Snackbar from 'components/Snackbar';
import ObjectUtil from 'utils/ObjectUtil';
import { useValidate } from 'utils/functions/validate';
import { ValidateContext } from './ValidateContext';
import { LoadingContext } from 'App';
import { useTranslation } from 'react-i18next';

export const BaseForm = ({ validateSchema, seqs, ...props }) => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const { checkValidate } = useValidate();
    const [onAction, resultAction] = props.mutation();
    var re = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');

    const { setIsLoading } = useContext(LoadingContext);
    const { error, setError } = useContext(ValidateContext);

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        if (props.numbers?.length > 0) {
            props.numbers.forEach((e) => {
                if (formData[e] === 0) {
                    formData.set(e, 0);
                }
            });
        }
        if (seqs && Object.keys(seqs)?.length > 0) {
            for (const [key, value] of Object.entries(seqs)) {
                if (value) {
                    formData.append(key, value);
                }
            }
        }

        const data = ObjectUtil.formDataToJson(formData);
        // if (props.check) {
        //     if (formData.get(props.check)) {
        //         if (!re.test(formData.get(props.check))) {
        //             Snackbar.error('email type doesnt math');
        //             return;
        //         } else {
        //             props.onCheck(formData.get(props.check));
        //         }
        //     } else {
        //         setError({ ...error, [props.check]: "label_field_required" });
        //     }
        // }
        let errors = checkValidate({ data, validateSchema });
        if (Object.keys(errors).length > 0) {
            await setError(errors);
            const inputs = event.target.querySelectorAll('input[aria-describedby]');
            if (inputs.length > 0) {
                inputs[0].focus();
            }
            return;
        } else {
            setError({});
        }
        setIsLoading(true);
        onAction(formData);
    };

    useEffect(() => {
        if (resultAction.data) {
            if (props.onSuccess) {
                props.onSuccess();
            }
            setIsLoading(false);

            if (resultAction.data.status === 'success' || resultAction.data.status === 200) {
                Snackbar.success(t(resultAction.data.message));

                if (props.setOpen) {
                    props.setOpen(false);
                } else {
                    navigate(props.list);
                }
            } else {
                if (resultAction.data.content === 'error.duplicate.username') {
                    Snackbar.warning(t('duplicate_email'));
                } else {
                    Snackbar.error(t(resultAction.data.message));
                }
            }

            // if (resultAction.data?.message.includes('message.success')) {
            //     Snackbar.success('success');
            //     if (props.setOpen) {
            //         props.setOpen(false);
            //     } else {
            //         navigate(props.list);
            //     }
            // } else if (resultAction.data?.message?.split('.').includes('denied')) {
            //     navigate('/login');
            // } else if (resultAction.data?.message?.split('.').includes('duplicate')) {
            //     if (resultAction.data?.message?.split('.').includes('code')) {
            //         Snackbar.warning(t('failed.content_settings.duplicated'));
            //     } else {
            //         Snackbar.warning();
            //     }
            // } else {
            //     Snackbar.error('error');
            // }
        }
    }, [resultAction.data]);

    return (
        <>
            <form autoComplete="off" onSubmit={onSubmit}>
                {props.children}
            </form>
        </>
    );
};
