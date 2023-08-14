export const AdminValidate = {
    username: {
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
    fullname: {
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
    },
    authorCd: {
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
    label_auth: {
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
    label_menu_auth: {
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
    phone: {
        presence: {
            allowEmpty: true,
            message: 'this field is required'
        },
        length: {
            min: 5,
            max: 100,
            message: 'valid_min5_max100'
        }
    },
    mobile: {
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
    email: {
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
