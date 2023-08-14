export const SiteInfoValidate = {
    siteNm: {
        presence: {
            allowEmpty: true
        },
        length: {
            max: 100,
            message: 'max width 100'
        }
    },
    siteUrl: {
        presence: {
            allowEmpty: true
        },
        length: {
            max: 100,
            message: 'max width 100'
        }
    },
    contactTel: {
        presence: {
            allowEmpty: true
        },
        length: {
            max: 100,
            message: 'max width 100'
        }
    },
    contactEmail: {
        presence: {
            allowEmpty: true
        },
        length: {
            max: 100,
            message: 'max width 100'
        }
    },
    contactMobile: {
        presence: {
            allowEmpty: true
        },
        length: {
            max: 13,
            message: 'max width 13'
        }
    },
    copyright: {
        presence: {
            allowEmpty: true
        },
        length: {
            max: 100,
            message: 'max width 100'
        }
    }
};
