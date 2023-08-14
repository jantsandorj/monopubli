import { useTranslation } from 'react-i18next';
import * as yup from 'yup';

const ValidationType = () => {
    const { t } = useTranslation();
    let requiredTxt = t('valid_required_txt');

    const PasswordValid = (valid) => {
        return yup
            .string()
            .required(requiredTxt)
            .matches(
                /^(?!(.)\1{4,})(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*_+\-=])[0-9A-Za-z!@#$%^&*_+\-=]{8,20}$/,
                `${valid ? 'The old password criteria is incorrect' : ' '}`
            );
    };
    const VerifyPasswordValid = () => {
        return yup
            .string()
            .required(requiredTxt)
            .oneOf([yup.ref('password')], 'tohirohgvi bna');
    };
    const EmailValid = () => {
        return yup
            .string()
            .required(requiredTxt)
            .matches(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, t('valid_email_type_doesnt_math'));
    };

    return { PasswordValid, VerifyPasswordValid, EmailValid };
};

export default ValidationType;
