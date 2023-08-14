export const SystemSettingValidate = {
    adminSessionTime: {
        presence: {
            allowEmpty: false,
            message: 'width min 1 max 100'
        },
        length: {
            min: 1,
            max: 1000,
            message: 'max width 1000'
        },
        numericality: {
            greaterThan: '1',
            lessThan: '1000',
            message: 'must be a number between 1 and 60'
        }
    },
    adminAccessIp: {
        presence: {
            allowEmpty: true
        },
        length: {
            min: 1,
            max: 1000,
            message: 'max width 1000'
        }
    },
    userSessionTime: {
        presence: {
            allowEmpty: true
        },
        length: {
            min: 1,
            max: 1000,
            message: 'width min 1 max 1000'
        }
    },
    googleAccToken: {
        presence: {
            allowEmpty: true
        },
        length: {
            max: 100,
            message: 'max width 100'
        }
    },
    facebookAccToken: {
        presence: {
            allowEmpty: true
        },
        length: {
            max: 100,
            message: 'max width 100'
        }
    },
    naverAccToken: {
        presence: {
            allowEmpty: true
        },
        length: {
            max: 100,
            message: 'max width 100'
        }
    },
    kakaoAccToken: {
        presence: {
            allowEmpty: true
        },
        length: {
            max: 100,
            message: 'max width 100'
        }
    }
};
