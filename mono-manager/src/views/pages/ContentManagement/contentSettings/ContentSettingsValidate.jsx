export const ContentSettingsValidate = {
    title: {
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
    code: {
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
    content: {
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
