const CODE = {
    RCV_SUCCESS             : "200", // 성공
    
    RCV_ERROR_AUTH_REQUIRED : "401", // 인증 오류
    RCV_ERROR_AUTH          : "403", // 인증 오류
    RCV_ERROR_DELETE        : "700", // 삭제 오류
    RCV_ERROR_SAVE          : "800", // 저장 오류
    RCV_ERROR_VALIDATION    : "900", // 입력 오류

    MODE_CREATE         : "create", // 등록 모드
    MODE_MODIFY         : "modify", // 수정 모드 
    MODE_READ           : "read",   // 읽기 모드
    MODE_REPLY          : "reply",  // 답글 모드
    
    DATE_YEAR           : "year",
    DATE_MONTH          : "month",
    DATE_DATE           : "date",
    DATE_WEEK           : "week",
    DATE_DAY            : "day",

    GROUP : {
        COUNTRY : "COUNTRY",
        POSITION_TYPE : "POSITION_TYPE",
        WORKER_LEVEL : "WORKER_LEVEL",
        VAT_TYPE: "VAT_TYPE",
        STATUS: "STATUS_TYPE",
        FREE_BOARD: "FREE_BOARD"
    },

    STATUS: {
        PROJECT:{
                OBJ:{
                
                    REGISTERED:{
                        VALUE:"R",
                        KR:"접수",
                        EN:"Registered"
                    },
                    ESTIMATED:{
                        VALUE:"E",
                        KR:"견적",
                        EN:"Estimated"

                    },
                    CONTRACT:{
                        VALUE:"C",
                        KR:"계약",
                        EN:"Contract"
                    },
                    PROGRESS:{
                        VALUE:"I",
                        KR:"진행중",
                        EN:"In progress"
                    },
                    DEVELOPMENT:{
                        VALUE:"D",
                        KR:"개발완료",
                        EN:"Development complete"
                    },
                    PAID:{
                        VALUE:"P",
                        KR:"결제완료",
                        EN:"Payment complete"
                    }
                },
                LIST :[
                    {
                        VALUE:"new",
                        KR:"새로운",
                        EN:"New"
                    },
                    {
                        VALUE:"R",
                        KR:"접수",
                        EN:"Registered"
                    },
                    {
                        VALUE:"E",
                        KR:"견적",
                        EN:"Estimated"
            
                    },
                    {
                        VALUE:"C",
                        KR:"계약",
                        EN:"Contract"
                    },
                    {
                        VALUE:"I",
                        KR:"진행중",
                        EN:"In progress"
                    },
                    {
                        VALUE:"D",
                        KR:"개발완료",
                        EN:"Development complete"
                    },
                    {
                        VALUE:"P",
                        KR:"결제완료",
                        EN:"Payment complete"
                    }
                ], 
                CONDITION :[
                    {
                        VALUE:"username",
                        KR:"접수",
                        EN:"Username "
                    },
                    {
                        VALUE:"companyName",
                        KR:"견적",
                        EN:"CompanyName "
            
                    },
                    {
                        VALUE:"projectName",
                        KR:"계약",
                        EN:"ProjectName"
                    },
                    ],
                PAYMENTTYPE :[
                    {
                        VALUE:"D",
                        KR:"접수",
                        EN:"Down payment"
                    },
                    {
                        VALUE:"M",
                        KR:"견적",
                        EN:"Middle payment"
                    },
                    {
                        VALUE:"B",
                        KR:"계약",
                        EN:"Balance"
                    },
                    ]
       
                },        
        },

        BOARD:{
            LIST :[
                {
                    VALUE:"General post",
                    KR:"GEN POST",
                    EN:"General post"
                },
                {
                    VALUE:"Free post",
                    KR:"Free post",
                    EN:"Free post"
                }
            ], 
        }

}

export default CODE;