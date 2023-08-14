export const MyPageStyle = {
    search_calendar: {
        height: "79px",
        background: "#ff8b7d",
        borderRadius: "9px",
        marginBottom: "28px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        marginTop: "33px",
    },
    custom_filter: {
        display: "flex",
        justifyContent: "flex-end"
    },
    "& .rdt_TableCol": {
        textAlign: "center"
    },
    label_status: {
        "& .statuscd": {
            width: "51px",
            height: "26px",
            borderRadius: "4px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#222",
            fontWeight: 300
        },
        "& .status_esti": { background: "#d5ebff" },
        "& .status_reg": { background: "#ffd6d6" },
        "& .status_cont": { background: "#feeac6" },
        "& .status_inpro": { background: "#d5f8da" },
        "& .status_dev": { background: "#e7e7e7", color: "#888" },
        "& .status_paym": { background: "#e7e7e7", color: "#888" },
    },
    payment_status: { textAlign: "center" },
    payment_status_pay: { color: "#222", fontWeight: "300" },
    payment_status_date: { color: "#888", marginTop: "1px", fontWeight: "300" },
};