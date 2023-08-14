export const RoleManageValidate = {
    authorCd: {
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
    authorNm: {
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
