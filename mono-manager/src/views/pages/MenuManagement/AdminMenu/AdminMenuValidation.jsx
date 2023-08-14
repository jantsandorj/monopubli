export const AdminMenuValidate = {
    menuName: {
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
    menuId: {
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
    menuURL: {
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
    headerName: {
        presence: {
            allowEmpty: false,
            message: 'label_field_required'
        },
        length: {
            min: 5,
            max: 100,
            message: 'min width 1 max width 100'
        }
    }
};
