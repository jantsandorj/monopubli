export const CommonStyle = {
    body: {
        fontFamily: `'Pretendard', sans-serif`
    },
    container: {
        width: "1170px",
        height: "100%",
        margin: "0 auto",
        boxSizing: "border-box",
    },
    // HEADER
    header: {
        background: "#fff",
        height: "82px",
        position: "fixed",
        borderBottom: "1px solid #ccc",
        zIndex: "10",
    },
    header_wrap: {
        height: "100%",
        display: "flex", alignItems: "center",

    },
    gnb: {
        display: "flex",
        gap: "32px",
        "& .MuiListItem-root": {
            width: "auto",
            padding: "0",
        }
    },
    gnb_nav: {
        fontSize: "17px",
        fontWeight: "500",
        textDecoration : "none",
        color: "#333",
        fontFamily: `'Pretendard', sans-serif`
    },
    sub_gnb: {
        "& .MuiListItem-root": {
            paddingLeft: "0",
            width: "auto",
        }
    },
    sub_gnb_nav: {
        fontSize: "16px",
        fontWeight: "300",
        textDecoration : "none",
        color: "#333",
        fontFamily: `'Pretendard', sans-serif`,
        paddingLeft: '0px'
    },
    sub_gnb_nav_active: {
        fontSize: "16px",
        fontWeight: "bold",
        textDecoration : "none",
        color: "#333",
        fontFamily: `'Pretendard', sans-serif`,
        paddingLeft: '0px'
    },
    header_inn: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        "& button": {
            background: "#dfdfdf",
            width: "77px",
            height: "37px",
            fontSize: "14px",
            color: "#333",
            borderRadius: "7px",
            boxShadow: "none",
        }
    },
    login_btn: {
        marginLeft: "58px",
        marginRight: "6px",
        '&:hover': {
            background: "#dfdfdf",
        }
    },
    reg_btn: {
        background: "#333 !important",
        color: "#fff !important",
    },
    logout_btn: {
        marginLeft: "16px",
        background: "#333 !important",
        color: "#fff !important",
    },

    // SIDE_MENU
    side_menu: {
        minWidth: "160px",
        marginRight: "60px",
        marginTop: "10px",
    },
    sub_card_content: {
        padding: "0",
    },
    side_menu_ttl: {
        fontSize: "25px",
        fontWeight: 600,
        borderBottom: "2px solid #6d6d6d",
        paddingBottom: "25px"
    },
    side_menu_conts: {
        marginTop: "21px",
        "& .Mui-selected": {
            backgroundColor: "transparent !important",
        },
        "& .Mui-selected .MuiLink-root": {
            color: "#333 !important",
            fontSize: "500 !important",
        }
    },
    side_menu_nav: {
        color: "#444",
        fontSize: "18px",
        fontWeight: "300"
    },
    basic_selectbox: {
        width: "110px",
    },
    date_input: {
        "& .MuiInputBase-root": {
            height: "40.13px",
            width: "191px",
        },
        "& input": {
            height: "0"
        }
    },
    search_calendar_inner: {
        display: "flex",
        gap: "5px",
        alignItems: "center",
    },
    search_text: {
        display: "flex",
        gap: "5px",
        justifyContent: "end",
        paddingBottom: "14px"
    },
    search_input: {
        width: "250px",
    }
};