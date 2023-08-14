export const UserValidate = {
    password: {
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
    verify_password: {
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
