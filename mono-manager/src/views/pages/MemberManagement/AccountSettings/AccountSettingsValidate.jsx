export const AccountSettingsValidate = {
    fullname: {
        presence: {
            allowEmpty: false,
            message: 'label_field_required'
        },
        length: {
            min: 1,
            max: 750,
            message: 'max length is 750'
        }
    },
    mobile: {
        presence: {
            allowEmpty: true,
            message: 'label_field_required'
        },
        length: {
            min: 0,
            max: 20,
            message: 'max length is 20'
        }
    },
    phone: {
        presence: {
            allowEmpty: true,
            message: 'label_field_required'
        },
        length: {
            min: 0,
            max: 20,
            message: 'max length is 20'
        }
    },
    password: {
        presence: {
            allowEmpty: true,
            message: 'label_field_required'
        },
        length: {
            min: 0,
            max: 20,
            message: 'min width 5 max width 8'
        }
    },
    verify_password: {
        presence: {
            allowEmpty: true,
            message: 'label_field_required'
        },
        length: {
            min: 0,
            max: 20,
            message: 'min width 5 max width 8'
        }
    },
    file: {
        presence: {
            allowEmpty: true,
            message: 'label_field_required'
        },
        length: {
            min: 0,
            max: 20,
            message: 'min width 5 max width 8'
        }
    }
};
