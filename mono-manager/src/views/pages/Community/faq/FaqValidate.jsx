export const FaqValidate = {
    question: {
        presence: {
            allowEmpty: false,
            message: 'label_field_required'
        },
        length: {
            min: 5,
            max: 100,
            message: 'valid_min5_max100'
        }
    },
    answer2: {
        presence: {
            allowEmpty: false,
            message: 'label_field_required'
        },
        length: {
            min: 5,
            max: 100,
            message: 'valid_min5_max100'
        }
    }
};
