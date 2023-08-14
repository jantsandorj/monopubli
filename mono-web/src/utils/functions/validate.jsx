import { useTranslation } from 'react-i18next';

export const useValidate = () => {
    const { t } = useTranslation();
    const strongRegex = /^(?!(.)\1{4,})(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*_+\-=])[0-9A-Za-z!@#$%^&*_+\-=]{8,20}$/;

    const checkValidate = ({ data, validateSchema }) => {
        let validateResult = {};
        if (validateSchema['password'] && validateSchema['verify_password']) {
            if (data['password'] !== data['verify_password']) {
                validateResult['password'] = t('pass_and_verify_pass_not_same');
                validateResult['verify_password'] = t('pass_and_verify_pass_not_same');
            } else if (data['password'] && data['verify_password']) {
                if (!strongRegex.test(data['password'])) {
                    validateResult['password'] = t('strong_pass_alert');
                    validateResult['verify_password'] = t('strong_pass_alert');
                }
            }
        }

        if (data) {
            for (const [key, value] of Object.entries(data)) {
                if (
                    !value.name &&
                    Object.keys(validateSchema).includes(key) &&
                    (validateSchema[key].length.min > value.length || validateSchema[key].length.max < value.length)
                ) {
                    validateResult[key] = t(validateSchema[key].length.message);
                }
                if (
                    Object.keys(validateSchema).includes(key) &&
                    !validateSchema[key].presence.allowEmpty &&
                    (value === '' || value.name === '')
                ) {
                    validateResult[key] = t(validateSchema[key].presence.message);
                }
                if (
                    Object.keys(validateSchema).includes(key) &&
                    validateSchema[key].numericality &&
                    (validateSchema[key].numericality.greaterThan > parseInt(value) ||
                        validateSchema[key].numericality.lessThan < parseInt(value))
                ) {
                    validateResult[key] = t(validateSchema[key].numericality.message);
                }
                if (Object.keys(validateSchema).includes(key) && typeof value === 'object' && value?.name === '') {
                    validateResult[key] = t(validateSchema[key].presence.message);
                }
                if (Object.keys(validateSchema).includes(key) && validateSchema[key].unUsedText) {
                    let checkArray = validateSchema[key].unUsedText.text.split(',');
                    checkArray.forEach((element) => {
                        let checkTxt = value.indexOf(element);
                        if (checkTxt === 0) {
                            validateResult[key] = t(validateSchema[key].unUsedText.message);
                        }
                    });
                }
            }
        }
        return validateResult;
    };

    return { checkValidate };
};
