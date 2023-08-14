export const RadioWrapper = (theme) => ({
    Wrapper: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    item: {
        listStyle: 'none',
        marginRight: '30px',
        [theme.breakpoints.down('sm')]: {
            marginRight: '10px'
        },
        '&:last-child': {
            marginRight: '10px'
        }
    }
});

export const ButtonStyle = {
    backBtn: {
        color: '#6C757D',
        borderColor: '#6C757D',
        '&:hover': {
            background: '#6C757D !important',
            color: '#fff',
            borderColor: '#6C757D'
        }
    },
    cancelBtn: {
        color: '#C03221',
        borderColor: '#C03221',
        '&:hover': {
            background: '#C03221',
            color: '#fff',
            borderColor: '#C03221'
        }
    },
    closeBtn: {
        color: '#6C757D',
        borderColor: '#6C757D',
        '&:hover': {
            background: '#6C757D',
            color: '#fff',
            borderColor: '#6C757D'
        }
    },
    completeBtn: {
        color: '#1AA053',
        borderColor: '#1AA053',
        '&:hover': {
            background: '#1AA053',
            color: '#fff',
            borderColor: '#1AA053'
        }
    },
    createBtn: {
        '&:hover': {
            background: '#00C3F9',
            color: '#fff',
            borderColor: '#00C3F9'
        }
    },
    listModifyBtn: {
        maxWidth: '40px',
        '.MuiButton-startIcon': {
            margin: 'unset'
        },
        '&:hover': {
            background: '#00C3F9',
            color: '#fff',
            borderColor: '#00C3F9'
        }
    },
    listDeleteBtn: {
        background: '#fff',
        color: '#C03221',
        borderColor: '#C03221',
        maxWidth: '50px',
        minWidth: '50px',
        width: '50px',
        '.MuiButton-startIcon': {
            margin: 'unset'
        },
        '&:hover': {
            background: '#C03221',
            color: '#fff',
            borderColor: '#C03221'
        }
    },
    deleteBtn: {
        color: '#C03221',
        borderColor: '#C03221',
        '&:hover': {
            background: '#C03221',
            color: '#fff',
            borderColor: '#C03221'
        }
    },
    excelDownloadBtn: {
        color: '#1AA053',
        borderColor: '#1AA053',
        '&:hover': {
            background: '#1AA053',
            color: '#fff',
            borderColor: '#1AA053'
        }
    },
    fileUploadBtn: {
        color: '#00C3F9',
        borderColor: '#00C3F9',
        '&:hover': {
            background: '#00C3F9',
            color: '#fff',
            borderColor: '#00C3F9'
        }
    },
    listBtn: {
        color: '#6C757D',
        borderColor: '#6C757D',
        '&:hover': {
            background: '#6C757D',
            color: '#fff',
            borderColor: '#6C757D'
        }
    },
    processBtn: {
        color: '#573BFF',
        borderColor: '#573BFF',
        '&:hover': {
            background: '#573BFF',
            color: '#fff',
            borderColor: '#573BFF'
        }
    },
    radioBtnUl: {
        display: 'flex',
        paddingInlineStart: '0px',
        margin: '0'
    },
    radioBtnLi: {
        listStyle: 'none'
    },
    resetBtn: {
        color: '#6C757D',
        borderColor: '#6C757D',
        '&:hover': {
            background: '#6C757D',
            color: '#fff',
            borderColor: '#6C757D'
        }
    },
    saveBtn: {
        '&:hover': {
            background: '#00C3F9',
            color: '#fff',
            borderColor: '#00C3F9'
        }
    },
    temporaryBtn: {
        color: '#573BFF',
        borderColor: '#573BFF',
        '&:hover': {
            background: '#573BFF',
            color: '#fff',
            borderColor: '#573BFF'
        }
    }
};

export const FormLabelStyle = {
    grayLabel: {
        p: 1,
        borderRight: '1px solid #dee2e6',
        borderLeft: '1px solid #dee2e6',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        fontWeight: 500,
        color: '#212121',
        lineHeight: 1.75,
        fontSize: '14px',
        padding: '8px',
        backgroundColor: '#f5f5f5'
    },
    grayCol: {
        borderRight: '1px solid #dee2e6',
        borderBottom: '1px solid #dee2e6'
    },
    grayBottom: {
        borderBottom: '1px solid #dee2e6'
    },
    textPTag: {
        padding: '11px'
    },
    grayColWithPadding: {
        borderRight: '1px solid #dee2e6',
        borderBottom: '1px solid #dee2e6',
        padding: '10px'
    },
    textCenter: {
        textAlign: 'center'
    },
    grayCustomLabel: {
        p: 1,
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        fontWeight: 500,
        color: '#212121',
        lineHeight: 1.75,
        fontSize: '14px',
        padding: '8px',
        backgroundColor: '#f5f5f5'
    }
};
