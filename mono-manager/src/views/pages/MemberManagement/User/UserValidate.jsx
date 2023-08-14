export const UserValidate = {
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
    gender: {
        presence: {
            allowEmpty: false,
            message: 'label_field_required'
        },
        length: {
            min: 0,
            max: 100,
            message: 'valid_min5_max100'
        }
    },
    date: {
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
            allowEmpty: false,
            message: 'label_field_required'
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
    },
    job: {
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
    address: {
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
    postCode: {
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
    introduction: {
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
    profileImg: {
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
