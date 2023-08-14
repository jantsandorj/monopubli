import { forwardRef } from 'react';
import { BaseInput, FormInput } from './FormInput';

export const NumberInput = (props) => {
    const onKeyDown = (event) => {
        const key = event.keyCode ? event.keyCode : event.which;

        const regex = /^[0-9\b]+$/;
        if (!regex.test(event.key) && key !== 8) {
            event.preventDefault();
        }
    };

    return (
        <>
            <BaseInput onKeyDown={onKeyDown} {...props} />
        </>
    );
};
export const FormNumberInput = forwardRef((props, _) => {
    const onKeyDown = (event) => {
        const key = event.keyCode ? event.keyCode : event.which;

        const regex = /^[0-9\b]+$/;
        if (!regex.test(event.key) && key !== 8) {
            event.preventDefault();
        }
    };

    return <FormInput fullWidth={!props.minWidth} onKeyDown={onKeyDown} {...props} />;
});
