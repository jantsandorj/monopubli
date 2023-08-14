import { BaseForm } from './Form';
import FormWrapper from './ValidateContext';

export const Form = ({ children, ...props }) => {
    return (
        <FormWrapper>
            <BaseForm {...props}>{children}</BaseForm>
        </FormWrapper>
    );
};
