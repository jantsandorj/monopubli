export const PopupValidate = {
    subject: {
        presence: {
            allowEmpty: false,
            message: 'label_field_required'
        },
        length: {
            min: 1,
            max: 100,
            message: 'min width 1 max width 100'
        }
    },
    popupType: {
        presence: {
            allowEmpty: false,
            message: 'label_field_required'
        },
        length: {
            min: 1,
            max: 100,
            message: 'min width 1 max width 100'
        }
    },
    mediaType: {
        presence: {
            allowEmpty: false,
            message: 'label_field_required'
        },
        length: {
            min: 1,
            max: 100,
            message: 'min width 1 max width 100'
        }
    },
    linkUrl: {
        presence: {
            allowEmpty: false,
            message: 'label_field_required'
        },
        length: {
            min: 1,
            max: 100,
            message: 'min width 1 max width 100'
        },
        unUsedText: {
            text: 'https://,http://',
            message: 'valid_unused_https_http'
        }
    },
    pcImage: {
        presence: {
            allowEmpty: false,
            message: 'label_field_required'
        },
        length: {
            min: 1,
            max: 100,
            message: 'min width 1 max width 100'
        }
    },
    imageDesc: {
        presence: {
            allowEmpty: false,
            message: 'label_field_required'
        },
        length: {
            min: 1,
            max: 100,
            message: 'min width 1 max width 100'
        }
    },
    positionY: {
        presence: {
            allowEmpty: false,
            message: 'label_field_required'
        },
        length: {
            min: 1,
            max: 100,
            message: 'min width 1 max width 100'
        }
    },
    positionX: {
        presence: {
            allowEmpty: false,
            message: 'label_field_required'
        },
        length: {
            min: 1,
            max: 100,
            message: 'min width 1 max width 100'
        }
    },
    width: {
        presence: {
            allowEmpty: false,
            message: 'label_field_required'
        },
        length: {
            min: 1,
            max: 100,
            message: 'min width 1 max width 100'
        }
    },
    height: {
        presence: {
            allowEmpty: false,
            message: 'label_field_required'
        },
        length: {
            min: 1,
            max: 100,
            message: 'min width 1 max width 100'
        }
    },
    startDate: {
        presence: {
            allowEmpty: false,
            message: 'label_field_required'
        },
        length: {
            min: 1,
            max: 100,
            message: 'min width 1 max width 100'
        }
    },
    endDate: {
        presence: {
            allowEmpty: false,
            message: 'label_field_required'
        },
        length: {
            min: 1,
            max: 100,
            message: 'min width 1 max width 100'
        }
    }
};
