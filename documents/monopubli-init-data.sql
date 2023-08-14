INSERT INTO tagocms.common_code (id,code_group,code_group_nm,code,code_eng_nm,use_yn,code_description,created_by,created_date,modified_by,modified_date,is_deleted,is_active) VALUES
	 (1,'string','string','jhgkjhgk','string00000',NULL,NULL,1,'2023-01-03 17:22:52',7,'2023-01-18 18:01:40','N','N'),
	 (2,'USER_ROLE','USER','ADMIN',NULL,'Y',NULL,1,'2023-01-03 18:24:34',1,'2023-01-05 18:02:06','N','Y'),
	 (3,'TestGroup2','testCodeGroupName2','testCode2','vfdv',NULL,'bfdbfd',1,'2023-01-04 09:54:24',7,'2023-01-13 14:49:59','N','Y'),
	 (4,'USER_ROLE0808080880808080808','USER_ROLE','USER','12123',NULL,'312',1,'2023-01-09 13:57:20',7,'2023-01-18 18:16:00','N','Y'),
	 (5,'USER_ROLE','USER_ROLE','APPROVER','000',NULL,'000',1,'2023-01-09 14:00:01',7,'2023-01-18 10:48:03','N','Y'),
	 (124,'REQUEST_STATUS','REQUEST_STATUS','DR','DRAFT','Y','label_draft',1,'2023-01-18 15:39:11',NULL,NULL,'N','Y'),
	 (125,'REQUEST_STATUS','REQUEST_STATUS','PE','PENDING','Y','label_pending',1,'2023-01-18 15:39:11',NULL,NULL,'N','Y'),
	 (126,'REQUEST_STATUS','REQUEST_STATUS','CO','COMPLETED','Y','label_completed',1,'2023-01-18 15:39:11',NULL,NULL,'N','Y'),
	 (127,'REQUEST_RESULT','REQUEST_RESULT','AP','APPROVED','Y','label_approved',1,'2023-01-18 15:39:11',NULL,NULL,'N','Y'),
	 (128,'REQUEST_RESULT1212','REQUEST_RESULTbfdbb','RE12bfdbfdbbbbbb','REJECTEDbfdbfbbbb',NULL,'label_rejected',1,'2023-01-18 15:39:11',7,'2023-01-19 10:16:11','N','Y');
INSERT INTO tagocms.common_code (id,code_group,code_group_nm,code,code_eng_nm,use_yn,code_description,created_by,created_date,modified_by,modified_date,is_deleted,is_active) VALUES
	 (133,'88888','88','8888','88',NULL,'88',7,'2023-01-18 18:00:00',NULL,NULL,'N','Y'),
	 (134,'88888','0808','0808','0808',NULL,'0808',7,'2023-01-18 18:00:19',NULL,NULL,'N','Y'),
	 (135,'csa','0808','0808','0808',NULL,'0808',7,'2023-01-18 18:00:41',7,'2023-01-19 09:45:38','N','Y'),
	 (136,'csa','csa','csa','csa',NULL,'csa',7,'2023-01-19 09:44:57',NULL,NULL,'N','Y'),
	 (137,'','','','',NULL,'',7,'2023-01-19 09:53:20',NULL,NULL,'N','Y'),
	 (138,'USER_ROLE','555','55555','555',NULL,'555',7,'2023-01-19 10:05:47',NULL,NULL,'N','Y'),
	 (139,'','','','',NULL,'',7,'2023-01-19 11:01:38',NULL,NULL,'N','Y');
INSERT INTO tagocms.t_admin (username,password,fullname,email,phone,last_login_date,failed_login_count,created_date,created_by,modified_date,modified_by,is_deleted,temp_pwd,temp_pwd_cre_dt,temp_pwd_end_dt,file_group_seq,use_yn,mobile,task_in_charge,author_cd) VALUES
	 ('admin@gmail.com','$2a$10$F.mSRxQNNvMlMquk9/RguewT3UrUCVg6MSs4H0i3ozoazAb7evUqu','Super Admin','admin@gmail.com','77117711','2023-06-27 17:39:22','0','20221219164324','','2023-06-27 17:39:22',NULL,'N','$2a$10$Rch32P7lzZFsbjcEBCWtLOXvHV.36mRAaZw2HuXT5Jam5KIHrpN/G','20230124165643','20230124171143',914,'Y','99119911','Super Duper Admin','ROLE_ADMIN'),
	 ('bold','$2a$10$hdDxn3DiHcfhL4J4hgtmNuVL7y6qX0CQS8TpR38ZliOCK/ND6eHe2','fullname2','boldbayaribi@gmail.com','88008800','2023-05-02 14:58:03','1','2022-12-11','B',NULL,NULL,'Y',NULL,NULL,NULL,NULL,'Y',NULL,NULL,NULL),
	 ('test','12345678','fullname2','boldbayaribi@gmail.com','88008800','2023-05-02 14:58:03','1','2022-12-11','B',NULL,NULL,'Y','12345678',NULL,NULL,NULL,'Y',NULL,NULL,NULL),
	 ('bold','$2a$10$n3jG.iAGyPqaY9J0nM3qQ.SQcU0wruni/x29YQ8yzfS/z7FvbmBiK','fullname2','boldbayaribi@gmail.com','88008800','2023-05-02 14:58:03','1','2022-12-11','B',NULL,NULL,'Y',NULL,NULL,NULL,NULL,'Y',NULL,NULL,NULL),
	 ('bold4','$2a$10$SGiDwwBA30t96gc1zyAl1.qx7z6E7RLchmG7ZHD3XQKmiY6lFjPcu','fullname2','boldbayaribi5578@gmail.com','88008812','2023-05-01 14:58:03','1','2022-12-11','B',NULL,NULL,'N',NULL,NULL,NULL,228,'Y',NULL,NULL,NULL),
	 ('username','$2a$10$PXyj/.m/acJKpqU.N1zJTeHFpvO9uSOsQmCPG85QK6ykQ1Zwd.Gta','tesname','username@gmail.coom','99999999','2023-05-01 14:58:03','0','20230411142019',NULL,NULL,NULL,'Y',NULL,NULL,NULL,NULL,'Y',NULL,NULL,NULL),
	 ('admin0101@gmail.com','$2a$10$lQj862/cO4XP4IQYuKhTnOQGtVwdr319i8V0qBctmQBAYjtQl/Ycq','admin0101','admin0101@gmail.com','8888888888','2023-05-01 14:58:03','0','20230411143654',NULL,NULL,NULL,'N',NULL,NULL,NULL,NULL,'Y',NULL,NULL,NULL),
	 ('idname','$2a$10$Zk9Ml/MjMCAInPgJRxa3R.1eq3OVSZivbuYkWAbiWqQsahy31mxmC','name','SS@gmail.com','88888888','2023-05-01 14:58:03','0','20230411144956',NULL,NULL,NULL,'Y',NULL,NULL,NULL,NULL,'Y',NULL,NULL,NULL),
	 ('test@gmail.com','123456','Testname','test1@gmail.com','66666666','2023-05-01 14:58:03','0','20230411164104',NULL,'20230411181601',NULL,'Y',NULL,NULL,NULL,NULL,'Y',NULL,NULL,NULL),
	 ('admin202@gmail.com','123456789','123456','admin202@gmail.com','12345678','2023-05-01 14:58:03','0','20230411181716',NULL,'20230504145341',NULL,'N',NULL,NULL,NULL,NULL,'Y','58966552','lllk',NULL);
INSERT INTO tagocms.t_admin (username,password,fullname,email,phone,last_login_date,failed_login_count,created_date,created_by,modified_date,modified_by,is_deleted,temp_pwd,temp_pwd_cre_dt,temp_pwd_end_dt,file_group_seq,use_yn,mobile,task_in_charge,author_cd) VALUES
	 (NULL,'$2a$10$8U796UPT3ILs/P2CmLtv/.touWVaXacgxhxqKgFH8b2LpUUvU.Pam',NULL,'boldbayaribi22@gmail.com','77777777','2023-05-01 14:58:03','0','20230411183703',NULL,NULL,NULL,'Y',NULL,NULL,NULL,263,'Y',NULL,NULL,NULL),
	 ('ewqewqe','$2a$10$9/pupfd0cnq22J8FMVRwRuOuNUNeoov3b0UJW6Z5S8gfYLU9CJYRu','ewqewqewq','ewqeq@gmail.com','123456','2023-05-01 14:58:03','0','20230411184011',NULL,NULL,NULL,'Y',NULL,NULL,NULL,264,'Y',NULL,NULL,NULL),
	 ('admin205@gmail.com','$2a$10$ErGMMuvXfU9Mo7EKgf7/fe2hUjd8Zep2Qy0MVgEqzsSHIeHqXmrua','1312132312','admin205@gmail.com','12332132123','2023-05-01 14:58:03','0','20230412095259',NULL,'20230512092032',NULL,'N',NULL,NULL,NULL,265,'Y','55555',NULL,NULL),
	 (NULL,'$2a$10$vDCX2NNZWspiat/4kAXNKehMH4fTMLv.zn0KXRaq2z4vDM2Xp3dT.',NULL,'interactivemonh@gmail.com','89434312','2023-05-01 14:58:03','0','20230412155218',NULL,NULL,NULL,'Y',NULL,NULL,NULL,NULL,'Y',NULL,NULL,NULL),
	 ('jkdshjk','$2a$10$fotwV58CmONRh84JNHZipO5ZnCqQJtbtNaWZKW0xT0u1TAUKmDK8m','vdsvds','vsvds@gmail.com','254254','2023-05-01 14:58:03','0','20230412162607',NULL,NULL,NULL,'Y',NULL,NULL,NULL,NULL,'N',NULL,NULL,NULL),
	 ('boldbayaribi22KKKK@gmail.com','$2a$10$SGiDwwBA30t96gc1zyAl1.qx7z6E7RLchmG7ZHD3XQKmiY6lFjPcu','boldbayarkkkk','boldbayaribi22KKKK@gmail.com','77777777','2023-06-12 16:10:33','0','20230412171852',NULL,'2023-06-12 16:10:33',NULL,'N',NULL,NULL,NULL,360,'Y',NULL,NULL,NULL),
	 ('newcdacsa','3324354354','csacsa','321321','321321','2023-05-01 14:58:03','0','20230412172912',NULL,'20230413095852',NULL,'Y',NULL,NULL,NULL,361,'N',NULL,NULL,NULL),
	 ('admin101','123456','admin101','admin101@gmail.com','88888888801','2023-05-01 14:58:03','0','20230413160431',NULL,'20230504150832',NULL,'Y',NULL,NULL,NULL,412,'Y','989989999999988','desription',NULL),
	 ('admin505@gmail.com','123456','vsvdsvds','admin505@gmail.com','3354345354','2023-05-01 14:58:03','0','20230413160831',NULL,'20230414171508',NULL,'Y',NULL,NULL,NULL,413,'Y','99542631','description',NULL),
	 ('test202@gmail.com','123456','testname','test202@gmail.com','9999999999999','2023-05-01 14:58:03','0','20230413175351',NULL,'20230414132237',NULL,'Y',NULL,NULL,NULL,428,'Y','8686868686','vdsvdsvds',NULL);
INSERT INTO tagocms.t_admin (username,password,fullname,email,phone,last_login_date,failed_login_count,created_date,created_by,modified_date,modified_by,is_deleted,temp_pwd,temp_pwd_cre_dt,temp_pwd_end_dt,file_group_seq,use_yn,mobile,task_in_charge,author_cd) VALUES
	 ('test1001@gmail.com','$2a$10$ZMUfXCWG0NMPEXVKST7P5uuxAeuJlTZg42Fn2mkaY7Xmu4AeK0Xki','test1001222','test1001@gmail.com','88898989898','2023-05-01 14:58:03','0','20230413180644',NULL,'20230512092058',NULL,'N',NULL,NULL,NULL,429,'N','88811','Reason',NULL),
	 ('101','$2a$10$RYpmg7zz/lPKJWQ47nSw3.dVAIjx2.FkBOIdWlqPd9KHTHUb7Kx.q','testpass','adminres@admin.com','88888888','2023-05-01 14:58:03','0','20230428164526',NULL,'20230428164657',NULL,'Y',NULL,NULL,NULL,794,'Y','8686868686','tailbar',NULL),
	 ('adminTEST@gmail.com','$2a$10$T2zw2ygitdZyEWeI2V.CxOh.ux8jtRJfuoX1.aAqfnGBoPFqOCB.C','admin','admin@admin.com','88008899','2023-05-01 14:58:03','0','20230501095343',NULL,'20230501105604',NULL,'N',NULL,NULL,NULL,797,'Y','8686868686','tailbar',NULL),
	 ('admin606@gmail.com','$2a$10$zZ8biV0U.3QeQySyFrtWOe95TDneA2zJl9SVXI/C.s5tKjlnZCGFK','admin606@gmail.com','admin606@gmail.com','55552221233333333','2023-05-01 14:58:03','0','20230501112234',NULL,'20230512091935',NULL,'N',NULL,NULL,NULL,799,'Y','555555555','tailbar',NULL),
	 ('acsacscsacsaadmin@admin.com','$2a$10$hVV5cK9CP5KJtN9./yIoaeKGZCSjWeer2dAdKGnwCvhWOPGgy9f..','csacsacsa','admincsacsa@admin.com','8800865899',NULL,'0','20230503153837',NULL,NULL,NULL,'Y',NULL,NULL,NULL,NULL,'Y','888888844888888','csacsacsacsa',NULL),
	 ('acdacsamin@admin.com','$2a$10$sVnj7oXPufzU83x7KpkUwuJlrhMImjyPgcBUJlnt20JMWqrpRUol2','admin@admin.com111','csacsacsa','3737357',NULL,'0','20230503164852',NULL,'20230512091635',NULL,'N',NULL,NULL,NULL,NULL,'N','24354335435','',NULL),
	 ('adcmin@admin.cosa','$2a$10$BDumceaQe4BXJR6mcgDd4OLwcZUuNjQ55tGP5B5kPquhBLB8G/giK','admcsin@admin.com',NULL,'88003548899','2023-05-04 13:44:50','0','20230504132845',NULL,'20230504134450',NULL,'N',NULL,NULL,NULL,838,'Y','8686835468686','tailbar',NULL),
	 ('101admin@admin.com','$2a$10$r5itGGhVEDCIshM0OqqSl.A3/3Zi3E6PJxntfTBsIYsGIslHzabAe','csacsa',NULL,'88888888354','2023-05-04 14:09:50','0','20230504135941',NULL,'20230504140949',NULL,'Y',NULL,NULL,NULL,839,'Y','8888888883548888','vdsvdsvds',NULL),
	 ('admicsn@admin.com','$2a$10$u/OTAv5pepWSOLWFyCMza.F3J/NDt2tqAqFUiYuF57CPyz2Gi0q9.','csa354354','admin@yahoo.com','88224008899',NULL,'0','20230504145723',NULL,'20230504162750',NULL,'N',NULL,NULL,NULL,843,'Y','8686868354686','tailbar',NULL),
	 ('sejin9642@gmail.com','$2a$10$wlFUMSXXHR0t6s/Va/yiuuse80i/nYkR6aYMUmzaJ/Y3E7JZhErDe','test123','sejin_1989@yahoo.com','70110393',NULL,'0','20230504163140',NULL,'20230504171907',NULL,'Y',NULL,NULL,NULL,844,'Y','95954740','',NULL);
INSERT INTO tagocms.t_admin (username,password,fullname,email,phone,last_login_date,failed_login_count,created_date,created_by,modified_date,modified_by,is_deleted,temp_pwd,temp_pwd_cre_dt,temp_pwd_end_dt,file_group_seq,use_yn,mobile,task_in_charge,author_cd) VALUES
	 ('selengee@hanmail.net','$2a$10$hKaVmYMaHNxxwUCU2tFin.5x/hva1CvEdSnrGcYIXjk6ULft3P8p.','테스트123',NULL,'70110394',NULL,'0','20230504172942',NULL,NULL,NULL,'Y',NULL,NULL,NULL,NULL,'N','96964740','프로젝트 매니저',NULL),
	 ('sadhsjdh@gmail.com','$2a$10$hATl/mF6IPi.qmKQkRxL9euQbCMgMSBbTAlyTFAVaE4fA/es5waS6','Sergelen',NULL,'701103945',NULL,'0','20230511190253',NULL,'20230522140636',NULL,'N',NULL,NULL,NULL,877,'Y','5555456758687','','ROLE_ADMIN'),
	 ('sjdaskjd@hanmail.net','$2a$10$eMvCLw2hjl/IvCJALKpeEe367jLceVH.UmHGZjd8oy.DKfjAkKb8K','Sergelen',NULL,'959547487',NULL,'0','20230511190433',NULL,'20230511190643',NULL,'Y',NULL,NULL,NULL,876,'N','241422415465435453','pm',NULL),
	 ('ina@gmail.com','$2a$10$Hopi2SP0rFTK3N15ohVjquV791JQ19XobHGeAEHGK84D07OknjgyO','ina manager',NULL,'123456789','2023-06-07 11:43:15','0','20230522141213',NULL,'20230607114315',NULL,'N',NULL,NULL,NULL,NULL,'Y','0101234561212','','GENERAL_ADMIN'),
	 ('alien@gmail.com','$2a$10$gRzZuS5XqE2dA2dRdT.8peJj3M1ryEWP4ZdNzW9f.CWoeZq9j.tEm','alien',NULL,'01023233233','2023-05-22 14:56:11','0','20230522145301',NULL,'20230522145611',NULL,'N',NULL,NULL,NULL,889,'Y','01023235656','organizer','Role_developer'),
	 ('design@yahoo.com','$2a$10$0ex1fWVxR62Xj4J0zYwzX.07eoWFKPUTZFLDkEyStiw5RQHtbKYBS','Design',NULL,'0109898','2023-05-22 15:18:04','0','20230522151126',NULL,'20230522151803',NULL,'N',NULL,NULL,NULL,890,'Y','0109898','UI: UX ','Role_designer'),
	 ('loopy@naver.com','$2a$10$BofQfTfP1nBW96lstSCrjeYJseWhJSzhGZAgm033FQrgcqpsp/wke','Loopy Doopy',NULL,'01230','2023-06-07 11:44:02','0','20230522152418',NULL,'20230607114402',NULL,'N',NULL,NULL,NULL,891,'Y','12121','tester','Role_developer'),
	 ('scoobydoo@gmail.com','$2a$10$IdYXJjlDXVu4Ffy0HKt8WufFk1nv05D22PVElVvWRErKyWU0X0diO','Scooby Doo',NULL,'985861232','2023-06-07 11:49:12','0','20230522152814',NULL,'20230607114912',NULL,'N',NULL,NULL,NULL,892,'Y','12121','tester','Role_tester'),
	 ('ariel@naver.com','$2a$10$.FQDIrIkycOUgOg2zH6iYOqZQOQ5oP/t4zTHGs9JEfdOM1uRQtNf2','Princess Ariel',NULL,'121212','2023-05-22 16:04:18','0','20230522160343',NULL,'20230522160418',NULL,'N',NULL,NULL,NULL,NULL,'Y','121212','','Role_tester'),
	 ('Monsters@uni.ac.kr','$2a$10$LRrZNzSBJi2jl0yGpeR/EeDXYB2z5gWoIWW/G9cxDh21LY0vfaQSa','Mike Wazowski',NULL,'74123','2023-05-22 16:26:30','0','20230522161324',NULL,'20230522162630',NULL,'Y',NULL,NULL,NULL,893,'N','74123','freelancer','Role_freelancer');
INSERT INTO tagocms.t_admin (username,password,fullname,email,phone,last_login_date,failed_login_count,created_date,created_by,modified_date,modified_by,is_deleted,temp_pwd,temp_pwd_cre_dt,temp_pwd_end_dt,file_group_seq,use_yn,mobile,task_in_charge,author_cd) VALUES
	 ('monsters1@uni.ac.kr','$2a$10$WBxFYCNYKAiByKKeja26F.sZ63nj4/3mQN2pKVqHZCoYCeh6LKfiS','Mike WAZOWSKI',NULL,'012303333','2023-05-22 17:20:58','0','20230522170728',NULL,'20230522172058',NULL,'N',NULL,NULL,NULL,894,'N','12121333','tester','Role_developer'),
	 ('monsters@uni.ac.kr','$2a$10$9lVqRpiRzK28IVln3WG/gudR/8f.6ehytVA97rBK6CIN0B3DcyrfC','Mike Wazowski',NULL,'01230111',NULL,'0','20230522170841',NULL,NULL,NULL,'N',NULL,NULL,NULL,895,'Y','12121111','','Role_designer'),
	 ('admin1@cms.com','$2a$10$.1C2Itjp98A.CUFHt7J8a.5y1UoG12On82VRSjBKCtWd41UpKnewu','Super Duper Admin',NULL,'99119911','2023-06-05 16:57:50','0','20230605165737',NULL,'20230605165750',NULL,'N',NULL,NULL,NULL,935,'Y','99119911','','Role_designer'),
	 ('2ne1_fangirl@yahoo.com','$2a$10$m5Db.H9.LJbijjKjrcRYYudCto4jvfv3GZgUGoo0gottJ5teLHdAW','Im_CL',NULL,'23423423434',NULL,'0','20230607110129',NULL,NULL,NULL,'N',NULL,NULL,NULL,941,'N','01023235656','','Role_developer'),
	 ('Dentist@naver.com','$2a$10$.YSOKkDyo6Jx2lhVc602F.72TxUUaHkkJ9Xv4FgFZt.Wa62Jzv4Wu','Danny ','Dentist@naver.com','3454535345','2023-06-12 13:42:22','0','20230612134107',NULL,'20230612134255',NULL,'N',NULL,NULL,NULL,952,'N','234242342','','Role_designer');
INSERT INTO tagocms.t_author_info (author_cd,author_nm,author_desc,use_yn,is_deleted,created_date,modified_date) VALUES
	 ('ROLE_ADMIN','ROLE_ADMIN name','대학 메인 사이트 관리자',NULL,'N','2023-05-10 09:55:55',NULL),
	 ('GENERAL_ADMIN','General admin','일반 관리자','Y','N','2023-05-22 13:09:41',NULL),
	 ('Role_developer','Cyber team','개발직','Y','N','2023-05-22 13:24:38',NULL),
	 ('Role_designer','General admin','디자이너','Y','N','2023-05-22 14:09:28',NULL),
	 ('Role_tester','Test team','테스터','N','N','2023-05-22 14:23:08','2023-05-22 15:29:25'),
	 ('role_ruler','Rules for Team Meetings','내부관리','Y','N','2023-05-22 14:41:40','2023-05-22 14:58:01'),
	 ('Role_freelancer','team freelance','프리랜서','Y','N','2023-05-22 15:08:57',NULL);
INSERT INTO tagocms.t_author_role (menu_seq,author_cd,created_by,created_date) VALUES
	 (285,'ROLE_ADMIN','Admin','2023-05-19 09:26:19'),
	 (278,'ROLE_ADMIN','Admin','2023-05-19 09:26:19'),
	 (286,'ROLE_ADMIN','Admin','2023-05-19 09:26:19'),
	 (287,'ROLE_ADMIN','Admin','2023-05-19 09:26:19'),
	 (305,'ROLE_ADMIN','Admin','2023-05-19 09:26:19'),
	 (318,'ROLE_ADMIN','Admin','2023-05-19 09:26:19'),
	 (322,'ROLE_ADMIN','Admin','2023-05-19 09:26:19'),
	 (0,'ROLE_ADMIN','Admin','2023-05-19 09:26:19'),
	 (277,'ROLE_ADMIN','Admin','2023-05-19 09:26:19'),
	 (285,'ROLE_ADMIN','Admin','2023-05-19 09:26:19');
INSERT INTO tagocms.t_author_role (menu_seq,author_cd,created_by,created_date) VALUES
	 (278,'ROLE_ADMIN','Admin','2023-05-19 09:26:19'),
	 (286,'ROLE_ADMIN','Admin','2023-05-19 09:26:19'),
	 (287,'ROLE_ADMIN','Admin','2023-05-19 09:26:19'),
	 (289,'ROLE_ADMIN','Admin','2023-05-19 09:26:19'),
	 (290,'ROLE_ADMIN','Admin','2023-05-19 09:26:19'),
	 (291,'ROLE_ADMIN','Admin','2023-05-19 09:26:19'),
	 (292,'ROLE_ADMIN','Admin','2023-05-19 09:26:19'),
	 (311,'ROLE_ADMIN','Admin','2023-05-19 09:26:19'),
	 (312,'ROLE_ADMIN','Admin','2023-05-19 09:26:19'),
	 (293,'ROLE_ADMIN','Admin','2023-05-19 09:26:19');
INSERT INTO tagocms.t_author_role (menu_seq,author_cd,created_by,created_date) VALUES
	 (313,'ROLE_ADMIN','Admin','2023-05-19 09:26:19'),
	 (314,'ROLE_ADMIN','Admin','2023-05-19 09:26:19'),
	 (294,'ROLE_ADMIN','Admin','2023-05-19 09:26:19'),
	 (315,'ROLE_ADMIN','Admin','2023-05-19 09:26:19'),
	 (316,'ROLE_ADMIN','Admin','2023-05-19 09:26:19'),
	 (317,'ROLE_ADMIN','Admin','2023-05-19 09:26:19'),
	 (305,'ROLE_ADMIN','Admin','2023-05-19 09:26:19'),
	 (318,'ROLE_ADMIN','Admin','2023-05-19 09:26:19'),
	 (321,'ROLE_ADMIN','Admin','2023-05-19 09:26:19'),
	 (322,'ROLE_ADMIN','Admin','2023-05-19 09:26:19');
INSERT INTO tagocms.t_author_role (menu_seq,author_cd,created_by,created_date) VALUES
	 (323,'ROLE_ADMIN','Admin','2023-05-19 09:26:19'),
	 (324,'ROLE_ADMIN','Admin','2023-05-19 09:26:19'),
	 (319,'ROLE_ADMIN','Admin','2023-05-19 09:26:19'),
	 (325,'ROLE_ADMIN','Admin','2023-05-19 09:26:19'),
	 (326,'ROLE_ADMIN','Admin','2023-05-19 09:26:20'),
	 (327,'ROLE_ADMIN','Admin','2023-05-19 09:26:20'),
	 (320,'ROLE_ADMIN','Admin','2023-05-19 09:26:20'),
	 (328,'ROLE_ADMIN','Admin','2023-05-19 09:26:20'),
	 (277,'GENERAL_ADMIN','Admin','2023-05-22 13:10:10'),
	 (285,'GENERAL_ADMIN','Admin','2023-05-22 13:10:10');
INSERT INTO tagocms.t_author_role (menu_seq,author_cd,created_by,created_date) VALUES
	 (278,'GENERAL_ADMIN','Admin','2023-05-22 13:10:10'),
	 (286,'GENERAL_ADMIN','Admin','2023-05-22 13:10:11'),
	 (287,'GENERAL_ADMIN','Admin','2023-05-22 13:10:11'),
	 (289,'GENERAL_ADMIN','Admin','2023-05-22 13:10:11'),
	 (290,'GENERAL_ADMIN','Admin','2023-05-22 13:10:11'),
	 (291,'GENERAL_ADMIN','Admin','2023-05-22 13:10:11'),
	 (292,'GENERAL_ADMIN','Admin','2023-05-22 13:10:11'),
	 (311,'GENERAL_ADMIN','Admin','2023-05-22 13:10:11'),
	 (312,'GENERAL_ADMIN','Admin','2023-05-22 13:10:11'),
	 (293,'GENERAL_ADMIN','Admin','2023-05-22 13:10:11');
INSERT INTO tagocms.t_author_role (menu_seq,author_cd,created_by,created_date) VALUES
	 (313,'GENERAL_ADMIN','Admin','2023-05-22 13:10:11'),
	 (314,'GENERAL_ADMIN','Admin','2023-05-22 13:10:11'),
	 (294,'GENERAL_ADMIN','Admin','2023-05-22 13:10:11'),
	 (315,'GENERAL_ADMIN','Admin','2023-05-22 13:10:11'),
	 (316,'GENERAL_ADMIN','Admin','2023-05-22 13:10:11'),
	 (317,'GENERAL_ADMIN','Admin','2023-05-22 13:10:11'),
	 (320,'Role_developer','Admin','2023-05-22 13:25:05'),
	 (328,'Role_developer','Admin','2023-05-22 13:25:05'),
	 (277,'Role_designer','Admin','2023-05-22 14:20:06'),
	 (285,'Role_designer','Admin','2023-05-22 14:20:06');
INSERT INTO tagocms.t_author_role (menu_seq,author_cd,created_by,created_date) VALUES
	 (277,'Role_tester','Admin','2023-05-22 14:26:31'),
	 (285,'Role_tester','Admin','2023-05-22 14:26:31'),
	 (278,'role_ruler','Admin','2023-05-22 14:41:50'),
	 (286,'role_ruler','Admin','2023-05-22 14:41:50'),
	 (287,'role_ruler','Admin','2023-05-22 14:41:50'),
	 (289,'role_ruler','Admin','2023-05-22 14:41:50'),
	 (290,'role_ruler','Admin','2023-05-22 14:41:50'),
	 (291,'role_ruler','Admin','2023-05-22 14:41:50'),
	 (292,'role_ruler','Admin','2023-05-22 14:41:50'),
	 (311,'role_ruler','Admin','2023-05-22 14:41:50');
INSERT INTO tagocms.t_author_role (menu_seq,author_cd,created_by,created_date) VALUES
	 (312,'role_ruler','Admin','2023-05-22 14:41:50'),
	 (293,'role_ruler','Admin','2023-05-22 14:41:50'),
	 (313,'role_ruler','Admin','2023-05-22 14:41:50'),
	 (314,'role_ruler','Admin','2023-05-22 14:41:50'),
	 (294,'role_ruler','Admin','2023-05-22 14:41:50'),
	 (315,'role_ruler','Admin','2023-05-22 14:41:50'),
	 (316,'role_ruler','Admin','2023-05-22 14:41:50'),
	 (317,'role_ruler','Admin','2023-05-22 14:41:50'),
	 (305,'Role_freelancer','Admin','2023-05-22 15:09:08'),
	 (318,'Role_freelancer','Admin','2023-05-22 15:09:08');
INSERT INTO tagocms.t_author_role (menu_seq,author_cd,created_by,created_date) VALUES
	 (321,'Role_freelancer','Admin','2023-05-22 15:09:08'),
	 (322,'Role_freelancer','Admin','2023-05-22 15:09:08'),
	 (323,'Role_freelancer','Admin','2023-05-22 15:09:08'),
	 (324,'Role_freelancer','Admin','2023-05-22 15:09:08'),
	 (319,'Role_freelancer','Admin','2023-05-22 15:09:08'),
	 (325,'Role_freelancer','Admin','2023-05-22 15:09:08'),
	 (326,'Role_freelancer','Admin','2023-05-22 15:09:08'),
	 (327,'Role_freelancer','Admin','2023-05-22 15:09:08');
INSERT INTO tagocms.t_banner (banner_nm,`type`,media_type,link_yn,window_yn,link,pc_file_group_seq,mobile_file_group_seq,image_alt,main_text,sub_text,start_date,end_date,sort_no,use_yn,is_deleted,created_date,created_by,modified_date,modified_by) VALUES
	 ('qwert','VSL_BANNER','M_IMG','N','off',NULL,754,0,'123','123','123','2023-04-27','2023-04-30',1,'Y','Y','2023-04-27 02:01',NULL,NULL,NULL),
	 ('메인배너','VSL_BANNER','M_IMG','N','off',NULL,755,0,'이미지 설명입니다.','메인텍스트 입니다.','서브 텍스트입니다.','2023-04-27','2023-05-31',1,'Y','Y','2023-04-27 02:02',NULL,'20230427101407',NULL),
	 ('메인배너2','VSL_BANNER','M_IMG','N','off',NULL,775,0,'이미지 설명입니다.2','두번째 배너의 메인텍스트 입니다.','두번째 배너의 서브 텍스트입니다.','2023-04-27','2023-05-31',2,'Y','Y','2023-04-27 03:35',NULL,NULL,NULL),
	 ('NewBannerTest100','VSL_BANNER','M_IMG','Y','on','www.google.com',776,777,'NewBannerTest101','NewBannerTest102','NewBannerTest103','2023-04-27','2023-04-27',3,'Y','Y','2023-04-27 03:43',NULL,NULL,NULL),
	 ('NewBannerTest200','VSL_BANNER','M_IMG','Y','on','www.google.com',778,779,'NewBannerTest201','NewBannerTest202','NewBannerTest203','2023-04-27','2023-04-27',4,'Y','Y','2023-04-27 03:44',NULL,NULL,NULL),
	 ('메인배너','VSL_BANNER','M_IMG','N','off',NULL,782,0,'이미지 설명입니다.','메인텍스트 입니다.','서브 텍스트입니다.','2023-04-27','2023-05-31',1,'Y','Y','2023-04-27 04:03',NULL,NULL,NULL),
	 ('main visual banner','VSL_BANNER','M_IMG','N','off,off,on',NULL,789,0,'tailbar','Main text','Sub text','2023-04-28','2023-04-30',1,'Y','Y','2023-04-28 02:46',NULL,'20230501130713',NULL),
	 ('test tulgaa11111','VSL_BANNER','M_IMG','N','off,off,on',NULL,800,801,'Image Alt * test','Main text * test','Sub text * test','2023-04-01','2023-04-30',1,'Y','Y','2023-05-01 03:53',NULL,'20230501130644',NULL),
	 ('test new banner','VSL_BANNER','M_IMG','Y','on','google.com',802,803,'test Image Alt *','test  Main text *','test Sub text *','2023-04-01','2023-04-30',2,'N','Y','2023-05-01 05:08',NULL,'20230501131601',NULL),
	 ('test 123123','P_ZONE','M_VID','Y','off','test123123',805,806,'1','2','test','2023-05-01','2023-05-31',222,'Y','Y','2023-05-01 06:10',NULL,'20230502174205',NULL);
INSERT INTO tagocms.t_banner (banner_nm,`type`,media_type,link_yn,window_yn,link,pc_file_group_seq,mobile_file_group_seq,image_alt,main_text,sub_text,start_date,end_date,sort_no,use_yn,is_deleted,created_date,created_by,modified_date,modified_by) VALUES
	 ('aaaaaaaaaaaaaaa','P_ZONE','M_VID','Y','off','test',810,0,'aaa','aaa','aaaa','2023-05-02','2023-06-02',1231231,'Y','Y','2023-05-02 09:42',NULL,'20230502175558',NULL),
	 ('aaa','P_ZONE','M_YTB','N','on',NULL,811,0,'aaa','aaa','aaa','2023-05-02','2023-06-02',123,'N','Y','2023-05-02 09:43',NULL,'20230502174725',NULL),
	 ('test','P_ZONE','M_VID','Y','on','test123',812,0,'123','123','123','2023-05-02','2023-06-02',123,'Y','Y','2023-05-02 09:47',NULL,'20230502175612',NULL),
	 ('메인배너','BTM_BANNER','M_IMG','N','on',NULL,815,0,'이미지 설명입니다.','메인텍스트 입니다.','서브 텍스트입니다.','2023-05-03','2023-06-30',3,'Y','Y','2023-05-03 01:54',NULL,'20230505122025',NULL),
	 ('메인배너2','VSL_BANNER','M_IMG','Y','off','www.google.com',816,849,'이미지 설명입니다.22','메인텍스트 입니다.22','서브 텍스트입니다.2','2023-05-02','2023-05-04',2,'Y','Y','2023-05-03 01:57',NULL,'20230505135021',NULL),
	 ('test tulgaa','VSL_BANNER','M_IMG','Y','on','https://www.google.com',817,818,'test','test','test','2023-05-03','2023-06-03',1,'Y','Y','2023-05-03 02:02',NULL,'20230503132007',NULL),
	 ('test','VSL_BANNER','M_IMG','Y','off','https://www.facebook.com/',829,0,'1','2','3','2023-05-03','2023-06-03',0,'Y','Y','2023-05-03 05:40',NULL,NULL,NULL),
	 ('test','VSL_BANNER','M_IMG','Y','off','https://www.facebook.com/',830,0,'test','test 2','test 3','2023-05-03','2023-06-03',1,'Y','Y','2023-05-03 06:01',NULL,NULL,NULL),
	 ('123','VSL_BANNER','M_IMG','N','off',NULL,831,0,'123123','123','123','2023-05-03','2023-06-03',123,'Y','Y','2023-05-03 06:02',NULL,NULL,NULL),
	 ('Dral','P_ZONE','M_VID','N','off','https://www.facebook.com/',835,836,'dral img alt','Dral main text','123','2023-05-03','2023-06-03',123,'N','Y','2023-05-03 09:50',NULL,'20230504143025',NULL);
INSERT INTO tagocms.t_banner (banner_nm,`type`,media_type,link_yn,window_yn,link,pc_file_group_seq,mobile_file_group_seq,image_alt,main_text,sub_text,start_date,end_date,sort_no,use_yn,is_deleted,created_date,created_by,modified_date,modified_by) VALUES
	 ('test mobile image','VSL_BANNER','M_IMG','Y','off','https://www.facebook.com/',840,0,'test mobile image','test mobile image','test mobile image','2023-05-04','2023-06-04',99,'Y','Y','2023-05-04 06:31',NULL,NULL,NULL),
	 ('test pc image','VSL_BANNER','M_IMG','Y','off','https://www.facebook.com/',841,0,'pcImage?.data','pcImage?.data','pcImage?.data','2023-05-04','2023-06-04',1,'Y','Y','2023-05-04 06:34',NULL,NULL,NULL),
	 ('boldBanner test','P_ZONE','M_VID','Y','off','www.google.com',842,0,'Alt','main','Sub text2','2023-05-04','2023-06-04',5,'N','Y','2023-05-04 06:44',NULL,'20230505121107',NULL),
	 ('TEST01','P_ZONE','M_VID','Y','on','http://www.itwizard.mn/',845,0,'이미지 설명','메인 텍스트: 테스트','서브테스트 서브테스트 서브테스트 서브테스트 ','2023-05-03','2023-06-05',1,'Y','Y','2023-05-05 11:14',NULL,'20230505135533',NULL),
	 ('Smile','BTM_BANNER','M_VID','N','on',NULL,846,0,'1','1','1','2023-05-05','2023-05-02',1,'Y','Y','2023-05-05 11:22',NULL,'20230505122815',NULL),
	 ('테스트','VSL_BANNER','M_VID','Y','on','4444',847,0,'0','0','0','2025-05-05','2025-06-05',1,'Y','Y','2023-05-05 12:42',NULL,'20230505134529',NULL),
	 ('!','BTM_BANNER','M_IMG','Y','off','https://chat.openai.com/',848,0,'g','g','g','2023-05-05','2023-06-05',0,'Y','Y','2023-05-05 12:47',NULL,NULL,NULL),
	 ('TEST01','P_ZONE','M_VID','N','off',NULL,850,851,'이미지 설명','메인 텍스트: 기타','기타','2023-05-05','2023-06-05',0,'Y','Y','2023-05-05 12:54',NULL,NULL,NULL),
	 ('Test banner','VSL_BANNER','M_IMG','N','off',NULL,852,0,'이미지 설명란입니다.','메인 텍스트 입니다.','서브 텍스트 입니다.','2023-05-10','2023-06-30',99,'N','N','2023-05-10 12:21',NULL,'2023-06-26 13:18',NULL),
	 ('테스트1','P_ZONE','M_VID','Y','off','http://www.itwizard.mn/',871,872,'0','0','0','2023-05-10','2023-06-08',34,'N','N','2023-05-11 16:32',NULL,'2023-06-06 11:04',NULL);
INSERT INTO tagocms.t_banner (banner_nm,`type`,media_type,link_yn,window_yn,link,pc_file_group_seq,mobile_file_group_seq,image_alt,main_text,sub_text,start_date,end_date,sort_no,use_yn,is_deleted,created_date,created_by,modified_date,modified_by) VALUES
	 ('TEST2','BTM_BANNER','M_YTB','N','off',NULL,873,0,'이미지 설명','메인 텍스트: 기타','서브테스트 서브테스트 서브테스트 서브테스트 서브테 서브테스트 서브테스트 서브테스트 서브테스트 서브테스트 서브테스트 서브테스트 서브테스트 ','2023-05-02','2023-05-03',0,'Y','Y','2023-05-11 16:35',NULL,NULL,NULL),
	 ('test2','BTM_BANNER','M_YTB','Y','off','http://www.itwizard.mn/',874,0,'이미지 설명','메인 텍스트: 기타','기타','2023-05-11','2024-02-02',5,'Y','Y','2023-05-11 16:38',NULL,'20230511173853',NULL),
	 ('test3','BTM_BANNER','M_IMG','Y','on','https://chat.openai.com/',875,0,'아이티위자드','아이티 위자드 좋아요^^','테스트','2023-05-11','2023-06-11',99,'Y','N','2023-05-11 16:40',NULL,'20230511174044',NULL),
	 ('tagoplus','VSL_BANNER','M_IMG','Y','off','www.google.com',896,0,'ina ibnida','INA','Tseej zurag','2023-05-23','2023-06-23',1,'Y','Y','2023-05-23 09:07',NULL,'20230523100859',NULL),
	 ('Next Level','VSL_BANNER','M_IMG','Y','on','https://en.wikipedia.org/wiki/Next_Level_(Aespa_song)',897,0,'karina jjang','We are on a whole another level','Welcome to SM culture universe','2023-05-23','2023-06-23',23,'Y','N','2023-05-23 09:53',NULL,'20230523105324',NULL),
	 ('Black Pink','VSL_BANNER','M_IMG','Y','off','https://www.blackpinkmusic.com/',898,0,'Shut down','BLACKPINK Releases New ',' ''Pink Venom'' Teaser: Watch – Billboard','2023-05-23','2023-06-23',99,'Y','Y','2023-05-23 10:00',NULL,'20230523110039',NULL),
	 ('digital portfolio','VSL_BANNER','M_IMG','N','off',NULL,899,0,'Digital art','Portfolio 2023','artistic aesthetic ideas','2023-05-23','2023-06-23',99,'Y','N','2023-05-23 13:45',NULL,'20230523144614',NULL),
	 ('1232131312123123123123123123','VSL_BANNER','M_IMG','N','on','www.google.com',907,908,'ina ibnida','INA','Tseej zurag','2023-05-24','2023-05-24',1,'Y','Y','2023-05-24 09:18',NULL,'20230524103536',NULL),
	 ('may24','VSL_BANNER','M_IMG','Y','off','https://www.computerworld.com/category/windows/',910,911,'Ocean view','summer vacation season','get your ticket ','2023-05-24','2023-06-15',2,'Y','N','2023-05-24 10:48',NULL,'20230529105907',NULL),
	 ('Angel Falls in Venezuela ','P_ZONE','M_YTB','Y','on','https://unsplash.com/ko/%EC%82%AC%EC%A7%84/g6VNGCGF3DQ',912,913,'Ocean view','summer vacation season','in 베네수엘라 эла ла элаа','2023-05-24','2023-06-24',4,'N','N','2023-05-24 11:49',NULL,'2023-06-05 15:38',NULL);
INSERT INTO tagocms.t_banner (banner_nm,`type`,media_type,link_yn,window_yn,link,pc_file_group_seq,mobile_file_group_seq,image_alt,main_text,sub_text,start_date,end_date,sort_no,use_yn,is_deleted,created_date,created_by,modified_date,modified_by) VALUES
	 ('sdfssdf','VSL_BANNER','M_IMG','Y','off','https://en.wikipedia.org/wiki/Next_Level_(Aespa_song)',927,928,'green day','summer vacation season','p;opqwerwe быө 블랙맘바','2023-06-05','2023-07-05',1,'N','Y','2023-06-05 15:21',NULL,'2023-06-05 15:23',NULL),
	 ('디지털 인사이트 광고','VSL_BANNER','M_IMG','Y','off','https://www.computerworld.com/category/windows/',929,930,'스티브잡스','그의 렌즈는 곧 스포트라이트','알버트 왓슨이 포착한 피사체','2023-06-05','2023-07-05',2,'N','N','2023-06-05 15:26',NULL,'2023-06-05 15:27',NULL),
	 ('weekend ','P_ZONE','M_VID','Y','off','https://www.blackpinkmusic.com/',931,932,'troye','friends','all i see','2023-06-05','2023-06-07',1,'N','N','2023-06-05 15:37',NULL,'2023-06-05 15:38',NULL),
	 ('6.26 test 1 - main visual banner','VSL_BANNER','M_IMG','Y','on','http://www.itwizard.mn/',955,956,'img desc','mai text','sub text','2023-06-26','2023-07-26',1,'Y','N','2023-06-26 13:32',NULL,'2023-06-27 11:09',NULL),
	 ('6.26 test 2 - main visual banner','VSL_BANNER','M_IMG','N','off',NULL,957,958,'img text','main text','sub text','2023-06-26','2023-07-26',1,'Y','N','2023-06-26 14:00',NULL,'2023-06-26 14:04',NULL),
	 ('6.26 test 3 - main visual banner','VSL_BANNER','M_IMG','N','off','http://www.itwizard.mn/',959,0,'img text','main text','sub text','2023-06-26','2023-07-26',99,'Y','Y','2023-06-26 14:14',NULL,NULL,NULL);
INSERT INTO tagocms.t_code (code_group,code_group_nm,code,code_nm,code_eng_nm,use_yn,code_descript,order_no,created_by,created_date,created_ip,modified_by,modified_date,modified_ip,is_deleted,is_active) VALUES
	 ('BANNER_TYPE','bType','Photo','photo','photo','Y','photo',2,NULL,'2022-12-22 00:00:00','',NULL,NULL,NULL,'Y','N'),
	 ('DIVISION','Banner type','BANNER_TYPE','test4','bType','Y','test4',0,NULL,'2022-12-26 16:27:19',NULL,NULL,NULL,NULL,'Y','Y'),
	 ('DIVISION','ADMIN ROLE','ADM_ROLE','adminii role-uudiin turul','Admin role','Y','adminii role-uudiin turul',1,NULL,'2023-04-11 20:06:58',NULL,NULL,NULL,NULL,'Y','N'),
	 ('DIVISION','ADMIN ROLE','01','bugdiig udirdana','Super Admin','Y','bugdiig udirdana',1,NULL,'2023-04-11 20:09:04',NULL,NULL,NULL,NULL,'Y','N'),
	 ('BANNER_TYPE','bType','Media','Media','media','Y','Media',8,NULL,'2023-04-11 20:19:32',NULL,NULL,NULL,NULL,'Y','N'),
	 ('BANNER_TYPE','bType','Media2','Media2','media','Y','Media2',8,NULL,'2023-04-11 20:24:45',NULL,'null','2023-04-12 10:03:58',NULL,'Y','N'),
	 ('BANNER_TYPE','bType','Media3','Media','media','Y','Media',7,NULL,'2023-04-12 10:12:39',NULL,NULL,NULL,NULL,'Y','N'),
	 ('DIVISION','ADMIN_ROLE','ADM_ROLE','Admin roles','ADMIN ROLE','Y','Admin roles',1,NULL,'2023-04-12 11:02:58',NULL,NULL,NULL,NULL,'N','N'),
	 ('ADM_ROLE','ADMIN ROLE','AR_01','총괄관리자','Super admin','Y','총괄관리자',1,NULL,'2023-04-12 11:03:34',NULL,NULL,NULL,NULL,'N','N'),
	 ('ADM_ROLE','ADMIN ROLE','AR_02','일반 관리자','General Admin','Y','일반 관리자',2,NULL,'2023-04-12 11:04:08',NULL,NULL,NULL,NULL,'N','N');
INSERT INTO tagocms.t_code (code_group,code_group_nm,code,code_nm,code_eng_nm,use_yn,code_descript,order_no,created_by,created_date,created_ip,modified_by,modified_date,modified_ip,is_deleted,is_active) VALUES
	 ('ADM_ROLE','ADMIN ROLE','AR_03','게시판 관리자','Board admin','Y','게시판 관리자',3,NULL,'2023-04-12 11:04:33',NULL,NULL,NULL,NULL,'N','N'),
	 ('DIVISION','USE YN','USE_YN','사용여부','Use or Not','Y','사용여부',1,NULL,'2023-04-12 12:14:42',NULL,'null','2023-04-12 15:03:48',NULL,'N','N'),
	 ('USE_YN','Use or Not','Y','사용','Use','Y','사용',1,NULL,'2023-04-12 15:04:13',NULL,NULL,NULL,NULL,'N','N'),
	 ('USE_YN','Use or Not','N','미사용','Unused','Y','미사용',2,NULL,'2023-04-12 15:04:56',NULL,NULL,NULL,NULL,'N','N'),
	 ('DIVISION','BANNER TYPE','BANNER_TYPE','배너 유형','Banner type','Y','배너 유형',1,NULL,'2023-04-12 15:35:19',NULL,NULL,NULL,NULL,'N','N'),
	 ('BANNER_TYPE','Banner type','VSL_BANNER','메인 비주얼 배너','Main visual banner','Y','메인 비주얼 배너',1,NULL,'2023-04-12 15:36:11',NULL,NULL,NULL,NULL,'N','N'),
	 ('BANNER_TYPE','Banner type','P_ZONE','팝업존','Popup zone','Y','팝업존',2,NULL,'2023-04-12 15:36:47',NULL,NULL,NULL,NULL,'N','N'),
	 ('BANNER_TYPE','Banner type','BTM_BANNER','하단 배너','Bottom banner','Y','하단 배너',3,NULL,'2023-04-12 15:37:25',NULL,NULL,NULL,NULL,'N','N'),
	 ('DIVISION','MEDIA TYPE','MEDIA_TYPE','미디어 타입','Media type','Y','미디어 타입',1,NULL,'2023-04-12 15:38:30',NULL,NULL,NULL,NULL,'N','N'),
	 ('MEDIA_TYPE','Media type','M_IMG','이미지 타입','Image type','Y','이미지 타입',1,NULL,'2023-04-12 15:38:56',NULL,NULL,NULL,NULL,'N','N');
INSERT INTO tagocms.t_code (code_group,code_group_nm,code,code_nm,code_eng_nm,use_yn,code_descript,order_no,created_by,created_date,created_ip,modified_by,modified_date,modified_ip,is_deleted,is_active) VALUES
	 ('MEDIA_TYPE','Media type','M_VID','비디오 타입','Video type','Y','비디오 타입',2,NULL,'2023-04-12 15:39:22',NULL,NULL,NULL,NULL,'N','N'),
	 ('MEDIA_TYPE','Media type','M_YTB','유튜브 타입','Youtube type','Y','유튜브 타입',3,NULL,'2023-04-12 15:40:09',NULL,NULL,NULL,NULL,'N','N'),
	 ('DIVISION','EXPOSURE','CD_EXPOSURE','노출여부','Whether exposed','Y','노출여부',1,NULL,'2023-04-12 15:45:14',NULL,NULL,NULL,NULL,'N','N'),
	 ('CD_EXPOSURE','Whether exposed','Y','노출','Exposure','Y','노출',1,NULL,'2023-04-12 15:46:06',NULL,NULL,NULL,NULL,'N','N'),
	 ('CD_EXPOSURE','Whether exposed','N','미사용','Unexposed','Y','미사용',2,NULL,'2023-04-12 15:46:30',NULL,NULL,NULL,NULL,'N','N'),
	 ('DIVISION','CONTENT CATEGORY','CONT_GAT','콘텐츠 카테고리','Content category','Y','콘텐츠 카테고리',1,NULL,'2023-04-14 13:42:02',NULL,NULL,NULL,NULL,'N','N'),
	 ('DIVISION','USER GENDER','USR_GNDR','성별','User gender','Y','성별',1,NULL,'2023-04-14 18:23:34',NULL,NULL,NULL,NULL,'N','N'),
	 ('USR_GNDR','User gender','GNR_MALE','남자','Male','Y','남자',1,NULL,'2023-04-14 18:24:12',NULL,NULL,NULL,NULL,'N','N'),
	 ('USR_GNDR','User gender','GNR_FEMALE','여자','Female','Y','여자',2,NULL,'2023-04-14 18:24:40',NULL,NULL,NULL,NULL,'N','N'),
	 ('DIVISION','TEST_CODE','TEST_CODE','TEST_CODE','TEST_CODE','Y','TEST_CODE',1,NULL,'2023-04-17 14:12:52',NULL,NULL,NULL,NULL,'Y','N');
INSERT INTO tagocms.t_code (code_group,code_group_nm,code,code_nm,code_eng_nm,use_yn,code_descript,order_no,created_by,created_date,created_ip,modified_by,modified_date,modified_ip,is_deleted,is_active) VALUES
	 ('TEST_CODE','TEST_CODE','TEST_CODE1','TEST_CODE1','TEST_CODE1','Y','TEST_CODE1',2,NULL,'2023-04-17 14:14:29',NULL,NULL,NULL,NULL,'Y','N'),
	 ('TEST_CODE','TEST_CODE','TEST_CODE2','TEST_CODE2','TEST_CODE2','Y','TEST_CODE2',2,NULL,'2023-04-17 14:26:17',NULL,NULL,NULL,NULL,'Y','N'),
	 ('USR_GNDR','User gender','GENDER_TEST','코드명(한국)','ENGLISH','Y','DESC',1,NULL,'2023-04-17 15:08:58',NULL,NULL,NULL,NULL,'Y','N'),
	 ('USE_YN','Use or Not','Z','코드명(한국)','CODE_ENG_NM','Y','CODE_DESCRIPT',4,NULL,'2023-04-18 13:40:32',NULL,NULL,NULL,NULL,'Y','N'),
	 ('DIVISION','QNA RESPONSE','QNA_R','QnA 답변여부','QnA  Response','Y','QnA  Response',1,NULL,'2023-04-18 13:49:25',NULL,NULL,NULL,NULL,'N','N'),
	 ('QNA_R','QnA  Response','Y','답변완료','Answered','Y','QnA Answered',1,NULL,'2023-04-18 13:51:07',NULL,NULL,NULL,NULL,'N','N'),
	 ('QNA_R','QnA  Response','N','미답변','Unanswered','Y','QnA Unanswered',2,NULL,'2023-04-18 13:53:54',NULL,NULL,NULL,NULL,'N','N'),
	 ('DIVISION','CONTENT MANAGE TYPE','CONTENT_MT','컨텐츠 타입','Content type','Y','Content manage type',1,NULL,'2023-04-18 14:27:03',NULL,NULL,NULL,NULL,'N','N'),
	 ('CONTENT_MT','Content type','HTML','HTML','HTML','Y','HTML Type',1,NULL,'2023-04-18 14:27:47',NULL,NULL,NULL,NULL,'N','N'),
	 ('CONTENT_MT','Content type','MENU','메뉴','Menu','Y','Menu type',2,NULL,'2023-04-18 14:28:14',NULL,NULL,NULL,NULL,'N','N');
INSERT INTO tagocms.t_code (code_group,code_group_nm,code,code_nm,code_eng_nm,use_yn,code_descript,order_no,created_by,created_date,created_ip,modified_by,modified_date,modified_ip,is_deleted,is_active) VALUES
	 ('CONTENT_MT','Content type','RAW','Raw 이미지','RAW','Y','Raw type',3,NULL,'2023-04-18 14:28:58',NULL,NULL,NULL,NULL,'N','N'),
	 ('CONTENT_MT','Content type','URL','URL 링크','URL','Y','URL Type',4,NULL,'2023-04-18 14:29:22',NULL,NULL,NULL,NULL,'N','N'),
	 ('CONTENT_MT','Content type','FILE','파일','FILE','Y','File type',5,NULL,'2023-04-18 14:29:48',NULL,NULL,NULL,NULL,'N','N'),
	 ('USE_YN','Use or Not','Z3','코드명(한국)','media','Y','Media',4,NULL,'2023-04-18 15:17:53',NULL,NULL,NULL,NULL,'Y','N'),
	 ('USE_YN','Use or Not','Z3','코드명(한국)','CODE_ENG_NM','Y','CODE_DESCRIPT2',8,NULL,'2023-04-18 18:01:04',NULL,NULL,NULL,NULL,'Y','N'),
	 ('DIVISION','MENU TYPE','MENU_TYPE','메뉴속성','Menu type','Y','메뉴속성',1,NULL,'2023-05-02 13:23:34',NULL,NULL,NULL,NULL,'N','N'),
	 ('MENU_TYPE','Menu type','MT_01','상위메뉴','Top menu','Y','상위메뉴',1,NULL,'2023-05-02 13:24:15',NULL,NULL,NULL,NULL,'N','N'),
	 ('MENU_TYPE','Menu type','MT_02','사이드메뉴','Side menu','Y','사이드메뉴',2,NULL,'2023-05-02 13:24:37',NULL,NULL,NULL,NULL,'N','N'),
	 ('MENU_TYPE','Menu type','MT_03','탭메뉴','Tab menu','Y','탭메뉴',3,NULL,'2023-05-02 13:24:58',NULL,NULL,NULL,NULL,'N','N'),
	 ('MENU_TYPE','Menu type','MT_04','HTML 컨텐츠','HTML Content','Y','HTML 컨텐츠',4,NULL,'2023-05-02 13:25:25',NULL,NULL,NULL,NULL,'N','N');
INSERT INTO tagocms.t_code (code_group,code_group_nm,code,code_nm,code_eng_nm,use_yn,code_descript,order_no,created_by,created_date,created_ip,modified_by,modified_date,modified_ip,is_deleted,is_active) VALUES
	 ('MENU_TYPE','Menu type','MT_05','URL 링크','URL Link','Y','URL 링크',5,NULL,'2023-05-02 13:27:00',NULL,NULL,NULL,NULL,'N','N'),
	 ('DIVISION','MENU POSITION','MN_PS','메뉴 위치','Menu position','Y','메뉴 위치',1,NULL,'2023-05-24 17:50:38',NULL,NULL,NULL,NULL,'N','N'),
	 ('MN_PS','Menu position','PS_01','상위 메뉴','Top menu','Y','상위 메뉴',1,NULL,'2023-05-24 17:51:28',NULL,NULL,NULL,NULL,'N','N'),
	 ('MN_PS','Menu position','PS_02','사이드 메뉴','Side menu','Y','사이드 메뉴',2,NULL,'2023-05-24 17:52:00',NULL,NULL,NULL,NULL,'N','N'),
	 ('MN_PS','Menu position','PS_03','탭 메뉴','Tab menu','Y','탭 메뉴',3,NULL,'2023-05-24 17:52:32',NULL,NULL,NULL,NULL,'N','N'),
	 ('MENU_TYPE','Menu type','MT_06','게시판','Board','Y','게시판',6,NULL,'2023-05-24 18:53:35',NULL,NULL,NULL,NULL,'N','N'),
	 ('DIVISION','FAQ 카테고리','FAQ_CATEGORY','FAQ 카테고리','FAQ Category','Y','FAQ Category',1,NULL,'2023-05-29 15:35:47',NULL,NULL,NULL,NULL,'N','N'),
	 ('FAQ_CATEGORY','FAQ Category','CATEGORY_1','카테고리1','CATEGORY 1','Y','CATEGORY 1',1,NULL,'2023-05-29 15:36:24',NULL,NULL,NULL,NULL,'N','N'),
	 ('FAQ_CATEGORY','FAQ Category','CATEGORY_2','카테고리2','CATEGORY 2','Y','CATEGORY 2',2,NULL,'2023-05-29 15:37:08',NULL,NULL,NULL,NULL,'N','N'),
	 ('FAQ_CATEGORY','FAQ Category','CATEGORY_3','카테고리3','CATEGORY 3','Y','CATEGORY 3',3,NULL,'2023-05-29 15:37:39',NULL,NULL,NULL,NULL,'N','N');
INSERT INTO tagocms.t_common_code (group_code,item_code,group_name,item_desc,use_yn,item_name,order_number,created_date,created_by,modified_date,modified_by,is_deleted) VALUES
	 ('123','itemCode','name','desc','Y','itemName',1,'20221215155354','jiu',NULL,NULL,NULL);
INSERT INTO tagocms.t_content (cs_code,title,subject,content_json,status_cd,view_cnt,created_by,created_ip,created_date,modified_by,modified_ip,modified_date,is_deleted) VALUES
	 ('product','{"en": "Title 1", "kr": "ADSFA"}','{"en": "Title 2", "kr": "AF"}','[{"size": "15", "type": "text", "title": {"en": "Field 1", "kr": "Kr field 1"}, "value": {"en": "", "kr": "SAFSADFAasdasd"}, "typeNm": "Text field", "fieldId": "field_1", "required": true}, {"size": "100", "type": "text_area", "title": {"en": "Field 2", "kr": "Kr field 2"}, "value": {"en": "ASDFADSFAasdasd", "kr": "ASDFASDFASDFasdas"}, "typeNm": "Text area", "fieldId": "field_2", "required": true}, {"size": "200", "type": "text", "title": {"en": "Field 3", "kr": "Kr field 3"}, "typeNm": "Text field", "fieldId": "field_3", "required": false}, {"size": "150", "type": "text", "title": {"en": "Field 4", "kr": "Kr field 4"}, "typeNm": "Text field", "fieldId": "field_4", "required": false}]','DRAFT',0,'tester',NULL,'20230112182300','tester','null','20230210154409','Y'),
	 ('code','{"en": "제목", "kr": "제목"}','{"en": "제목", "kr": "제목"}','[{"size": 255, "type": "text", "title": {"en": "text1", "kr": "text1"}, "value": {"en": "제목", "kr": "title1"}, "typeNm": "k-field_type_text", "fieldId": "field_1", "required": true}, {"size": 255, "type": "text_area", "title": {"en": "textArea1", "kr": "textArea1"}, "value": {"en": "제목", "kr": "title2"}, "typeNm": "k-field_type_text_area", "fieldId": "field_2", "required": true}]','DRAFT',0,'tester',NULL,'20230420141754','tester','null','20230420142932','N'),
	 ('test5','{"en": "test5", "kr": "test5"}','{"en": "test5", "kr": "test5"}','[{"size": 255, "type": "text", "title": {"en": "title1", "kr": "title1"}, "value": {"en": "test5", "kr": "test5"}, "typeNm": "k-field_type_text", "fieldId": "field_1", "required": false}, {"size": 255, "type": "number", "title": {"en": "textArea1", "kr": "number"}, "value": {"en": "test599", "kr": "test5"}, "typeNm": "k-field_type_email", "fieldId": "field_2", "required": false}]','DRAFT',0,'tester',NULL,'20230421145328','tester','null','20230421150154','N'),
	 ('code8','{"en": "news"}','{"en": "news"}','[{"size": 255, "type": "text", "title": {"en": "title1", "kr": "title1"}, "value": {"en": "title1 "}, "typeNm": "k-field_type_text", "fieldId": "field_1", "required": true}, {"size": 255, "type": "text_area", "title": {"en": "area", "kr": "area"}, "value": {"en": "title1 "}, "typeNm": "k-field_type_text_area", "fieldId": "field_2", "required": true}]','DRAFT',0,'tester',NULL,'20230424120347',NULL,NULL,NULL,'N'),
	 ('media','""','""','[{"size": 255, "type": "text", "title": {"en": "title1", "kr": ""}, "value": {"en": "text1"}, "typeNm": "텍스트 input", "fieldId": "field_1", "required": false}]','DRAFT',0,'tester',NULL,'20230608183521',NULL,NULL,NULL,'Y'),
	 ('media','""','""','[{"size": 255, "type": "text", "title": {"en": "title1", "kr": ""}, "value": {"en": "text1"}, "typeNm": "텍스트 input", "fieldId": "field_1", "required": false}]','DRAFT',0,'tester',NULL,'20230608183750',NULL,NULL,NULL,'Y'),
	 ('media','{"en": "boldbayar content title"}','{"en": "55"}','[{"size": 255, "type": "text", "title": {"en": "title1", "kr": ""}, "value": {"en": "text1"}, "typeNm": "텍스트 input", "fieldId": "field_1", "required": false}, {"size": 255, "type": "text_area", "title": {"en": "textArea1", "kr": ""}, "value": {"en": "textArea1"}, "typeNm": "텍스트 area", "fieldId": "field_2", "required": false}]','DRAFT',0,'tester',NULL,'20230609121523',NULL,NULL,NULL,'N'),
	 ('media','{"en": "boldbayar content title"}','{"en": "555"}','[{"size": 255, "type": "text", "title": {"en": "title1", "kr": ""}, "value": {"en": "text1"}, "typeNm": "텍스트 input", "fieldId": "field_1", "required": false}, {"size": 255, "type": "text_area", "title": {"en": "textArea1", "kr": ""}, "value": {"en": "textArea1"}, "typeNm": "텍스트 area", "fieldId": "field_2", "required": false}]','DRAFT',0,'tester',NULL,'20230609122749',NULL,NULL,NULL,'N'),
	 ('media','{"en": "boldbayar content title"}','{"en": "55555"}','[{"size": 255, "type": "text", "title": {"en": "title1", "kr": ""}, "value": {"en": "text1"}, "typeNm": "텍스트 input", "fieldId": "field_1", "required": false}, {"size": 255, "type": "text_area", "title": {"en": "textArea1", "kr": ""}, "value": {"en": "textArea1"}, "typeNm": "텍스트 area", "fieldId": "field_2", "required": false}]','DRAFT',0,'tester',NULL,'20230609123807',NULL,NULL,NULL,'N'),
	 ('media','{"en": "boldbayar content title 4"}','{"en": "888"}','[{"size": 255, "type": "text", "title": {"en": "title1", "kr": ""}, "value": {"en": "text1"}, "typeNm": "텍스트 input", "fieldId": "field_1", "required": false}, {"size": 255, "type": "text_area", "title": {"en": "textArea1", "kr": ""}, "value": {"en": "textArea1"}, "typeNm": "텍스트 area", "fieldId": "field_2", "required": false}]','DRAFT',0,'tester',NULL,'20230609143611',NULL,NULL,NULL,'N');
INSERT INTO tagocms.t_content (cs_code,title,subject,content_json,status_cd,view_cnt,created_by,created_ip,created_date,modified_by,modified_ip,modified_date,is_deleted) VALUES
	 ('footer_html','{"en": "news"}','{"en": "kk"}','[]','DRAFT',0,'tester',NULL,'20230609145354',NULL,NULL,NULL,'N'),
	 ('COPYRIGHT','{"en": "news"}','{"en": "gd"}','[]','DRAFT',0,'tester',NULL,'20230609151236',NULL,NULL,NULL,'N'),
	 ('media','{"en": "boldbayar content title 5aaadddddddddd"}','{"en": "boldbayar content title 5aaa"}','[{"size": 255, "type": "text", "title": {"en": "title1", "kr": ""}, "value": {"en": "text1aa99"}, "typeNm": "텍스트 input", "fieldId": "field_1", "required": false}, {"size": 255, "type": "text_area", "title": {"en": "textArea1", "kr": ""}, "value": {"en": "textArea1"}, "typeNm": "텍스트 area", "fieldId": "field_2", "required": false}]','DRAFT',0,'tester',NULL,'20230609151905','tester','null','2023-06-16 19:03:05','N');
INSERT INTO tagocms.t_content_old (name,has_menu,menu_seq,url,title,content_json,sanitized_content,created_date,created_by,modified_date,modified_by,is_deleted) VALUES
	 ('test name','n',-1,'url 1','title 1','{"field1": "123", "field2": "456", "field3": "789"}','123 456 789',NULL,NULL,NULL,NULL,NULL);
INSERT INTO tagocms.t_content_settings (code,name,menu_seq,title,url,use_yn,created_by,created_ip,created_date,modified_by,modified_ip,modified_date,is_deleted,fields_json,content_type,content,file_group_seq) VALUES
	 ('0002122121_20230608173404','Admin',NULL,'Title','http://www.itwizard.mn/','Y','tester',NULL,'20230519175047',NULL,NULL,NULL,'Y',NULL,NULL,NULL,0),
	 ('1_20230608173415','Admin',NULL,'title','http://www.itwizard.mn/','Y','tester',NULL,'20230519175707',NULL,NULL,NULL,'Y',NULL,NULL,NULL,0),
	 ('11123','테스터',NULL,'테스트1','123123','Y','tester',NULL,'2023-06-13 10:37:55',NULL,NULL,NULL,'N',NULL,NULL,NULL,0),
	 ('123_20230608173421','Admin',NULL,'제목','http://www.itwizard.mn/','Y','tester',NULL,'20230519175359',NULL,NULL,NULL,'Y',NULL,NULL,NULL,0),
	 ('21112_20230608173409','12211212',NULL,'1221221','121212','Y','tester',NULL,'20230524100317',NULL,NULL,NULL,'Y',NULL,NULL,NULL,0),
	 ('COPYRIGHT','COPYRIGHT',NULL,'Copyright',NULL,'Y','admin',NULL,NULL,'tester',NULL,'20230418180218','N',NULL,'HTML','<p>Copyright @ 2008 타고플러스. All Right Reserved',545),
	 ('footer_html','FOOTER_HTML',NULL,'FOOTER_HTML',NULL,'Y','tester',NULL,'20230406103812','tester',NULL,'20230406133212','N',NULL,'HTML','<p>Hello</p>
',185),
	 ('FOOTER_LOGO','FOOTER_LOGO',NULL,'Fooer logo',NULL,'Y','admin',NULL,NULL,NULL,NULL,NULL,'N',NULL,'File',NULL,138),
	 ('MAIN_LOGO','MAIN_LOGO',NULL,'Main logo',NULL,'Y','admin',NULL,NULL,'tester',NULL,'20230420144916','N',NULL,'File',NULL,599),
	 ('media','test name',NULL,'888','www.google.com','Y','tester',NULL,'20230609121429','tester',NULL,'20230609121445','N','[{"size": 255, "type": "text", "title": {"en": "title1", "kr": ""}, "typeNm": "텍스트 input", "fieldId": "field_1", "required": false}, {"size": 255, "type": "text_area", "title": {"en": "textArea1", "kr": ""}, "typeNm": "텍스트 area", "fieldId": "field_2", "required": false}]',NULL,NULL,0);
INSERT INTO tagocms.t_content_settings (code,name,menu_seq,title,url,use_yn,created_by,created_ip,created_date,modified_by,modified_ip,modified_date,is_deleted,fields_json,content_type,content,file_group_seq) VALUES
	 ('media_20230609111412','FOOTER_HTML',NULL,'5','www.google.com','Y','tester',NULL,'20230608183435','tester',NULL,'20230608183445','Y','[{"size": 255, "type": "text", "title": {"en": "title1", "kr": ""}, "typeNm": "텍스트 input", "fieldId": "field_1", "required": false}]',NULL,NULL,0),
	 ('testcontent1_20230608173359','testcontent1',NULL,'testcontent1','testcontent1','Y','tester',NULL,'20230424174846','tester',NULL,'20230425142906','Y','[{"size": 255, "type": "email", "title": {"en": "test1", "kr": "test1"}, "typeNm": "k-field_type_text", "fieldId": "field_1", "required": false}]',NULL,NULL,0);
INSERT INTO tagocms.t_faq (question,answer,category_cd,file_group_seq,exposure_yn,created_date,created_by,modified_date,modified_by,is_deleted,modified_ip,created_ip,view_cnt) VALUES
	 ('test','<p>test</p>
','ADM_ROLE',653,'Y','20230421182512','','20230421182639',NULL,'Y','0:0:0:0:0:0:0:1','0:0:0:0:0:0:0:1',0),
	 ('NewFAQBoard100','<p>NewFAQBoard100</p>
','Banner type',666,'Y','20230421185003','',NULL,NULL,'Y',NULL,'0:0:0:0:0:0:0:1',0),
	 ('aaa','<p>aaa</p>
','',0,'Y','20230426170310','',NULL,NULL,'Y',NULL,'0:0:0:0:0:0:0:1',0),
	 ('Test0519','<p>Text&nbsp;</p>
','ADM_ROLE',884,'N','20230519164959','','20230519165150',NULL,'N','203.23.49.100','203.23.49.100',0),
	 ('Test 1 ','','MENU_TYPE',0,'Y','20230519165058','',NULL,NULL,'N',NULL,'203.23.49.100',0),
	 ('Admin','','BANNER_TYPE',885,'Y','20230519165400','',NULL,NULL,'N',NULL,'203.23.49.100',0),
	 ('Test 2','<p>테스트&nbsp;</p>
','ADM_ROLE',886,'N','20230519170216','',NULL,NULL,'N',NULL,'203.23.49.100',0),
	 ('','','ADM_ROLE',0,'Y','20230519173103','','20230519173118',NULL,'N','203.23.49.100','203.23.49.100',0),
	 ('','','ADM_ROLE',0,'Y','20230519173149','','20230519173908',NULL,'N','203.23.49.100','203.23.49.100',0),
	 ('','','ADM_ROLE',0,'Y','20230519173917','',NULL,NULL,'N',NULL,'203.23.49.100',0);
INSERT INTO tagocms.t_faq (question,answer,category_cd,file_group_seq,exposure_yn,created_date,created_by,modified_date,modified_by,is_deleted,modified_ip,created_ip,view_cnt) VALUES
	 ('asas ㅀㅇㅀㅇㄹ','<p>ㅀㅇㅎㅇㅀㅇ</p>
','CATEGORY_1',939,'Y','2023-06-05 16:44','admin@gmail.com',NULL,NULL,'N',NULL,'112.160.125.253',0),
	 ('솔홀홀ㅇ홇','<p>홀홀호</p>
','CATEGORY_1',0,'Y','2023-06-05 16:49','admin@gmail.com',NULL,NULL,'N',NULL,'112.160.125.253',0);
INSERT INTO tagocms.t_file (file_group_seq,order_number,stored_file_name,file_ext,file_size,stored_path,view_url,download_url,delete_url,created_date,created_by,modified_date,modified_by,is_deleted,file_name) VALUES
	 (53,NULL,'5Isk3ic9.jpg','jpg',41369,'D:\\data\\tagocms-dev\\Banner\\53\\5Isk3ic9.jpg','/files/download/Banner/5Isk3ic9.jpg','/files/download/66','/manage/files/66/delete',NULL,NULL,NULL,NULL,'N','pumpkin.jpg'),
	 (54,NULL,'kN5nxOF2.jpg','jpg',41369,'D:\\data\\tagocms-dev\\Banner\\54\\kN5nxOF2.jpg','/files/download/Banner/kN5nxOF2.jpg','/files/download/67','/manage/files/67/delete',NULL,NULL,NULL,NULL,'N','pumpkin.jpg'),
	 (55,NULL,'kvUfKvYa.jpg','jpg',159893,'D:\\data\\tagocms-dev\\Banner\\55\\kvUfKvYa.jpg','/files/download/Banner/kvUfKvYa.jpg','/files/download/70','/manage/files/70/delete',NULL,NULL,NULL,NULL,'N','strawberry.jpg'),
	 (57,NULL,'VvKa86nE.jpg','jpg',1518298,'D:\\data\\tagocms-dev\\Banner\\57\\VvKa86nE.jpg','/files/download/Banner/VvKa86nE.jpg','/files/download/71','/manage/files/71/delete',NULL,NULL,NULL,NULL,'N','download.jpg'),
	 (56,NULL,'oIROxOi2.jpg','jpg',159893,'D:\\data\\tagocms-dev\\Banner\\56\\oIROxOi2.jpg','/files/download/Banner/oIROxOi2.jpg','/files/download/72','/manage/files/72/delete',NULL,NULL,NULL,NULL,'N','strawberry.jpg'),
	 (58,NULL,'kRNyp9zc.jpg','jpg',1518298,'D:\\data\\tagocms-dev\\Banner\\58\\kRNyp9zc.jpg','/files/download/Banner/kRNyp9zc.jpg','/files/download/73','/manage/files/73/delete',NULL,NULL,NULL,NULL,'N','download.jpg'),
	 (56,NULL,'QI2oNlsd.png','png',1221185,'C:\\data\\tagocms-dev\\Banner\\56\\QI2oNlsd.png','/files/download/Banner/QI2oNlsd.png','/files/download/74','/manage/files/74/delete',NULL,NULL,NULL,NULL,'Y','Screenshot 2023-02-26 160217.png'),
	 (58,NULL,'A1QuXbjP.png','png',1221185,'D:\\data\\tagocms-dev\\Banner\\58\\A1QuXbjP.png','/files/download/Banner/A1QuXbjP.png','/files/download/75','/manage/files/75/delete',NULL,NULL,NULL,NULL,'Y','Screenshot 2023-02-26 160217.png'),
	 (59,NULL,'wXpJCfnd.png','png',9378760,'C:\\data\\tagocms-dev\\FAQ\\59\\wXpJCfnd.png','/files/download/FAQ/wXpJCfnd.png','/files/download/76','/manage/files/76/delete',NULL,NULL,NULL,NULL,'N','Dark Galaxy.png'),
	 (60,NULL,'Tx9HDKEb.png','png',9378760,'C:\\data\\tagocms-dev\\QNA\\60\\Tx9HDKEb.png','/files/download/QNA/Tx9HDKEb.png','/files/download/77','/manage/files/77/delete',NULL,NULL,NULL,NULL,'N','Dark Galaxy.png');
INSERT INTO tagocms.t_file (file_group_seq,order_number,stored_file_name,file_ext,file_size,stored_path,view_url,download_url,delete_url,created_date,created_by,modified_date,modified_by,is_deleted,file_name) VALUES
	 (61,NULL,'f8TgTUhf.png','png',3439152,'C:\\data\\tagocms-dev\\QNA\\61\\f8TgTUhf.png','/files/download/QNA/f8TgTUhf.png','/files/download/78','/manage/files/78/delete',NULL,NULL,NULL,NULL,'N','Fade.png'),
	 (60,NULL,'l6pnUDx6.png','png',3439152,'C:\\data\\tagocms-dev\\QNA\\60\\l6pnUDx6.png','/files/download/QNA/l6pnUDx6.png','/files/download/79','/manage/files/79/delete',NULL,NULL,NULL,NULL,'N','Fade.png'),
	 (75,NULL,'aRLYjiag.jpg','jpg',41369,'D:\\data\\tagocms-dev\\Banner\\75\\aRLYjiag.jpg','/files/download/Banner/aRLYjiag.jpg','/files/download/80','/manage/files/80/delete',NULL,NULL,NULL,NULL,'N','pumpkin.jpg'),
	 (76,NULL,'mEjsOgqf.png','png',900136,'D:\\data\\tagocms-dev\\Banner\\76\\mEjsOgqf.png','/files/download/Banner/mEjsOgqf.png','/files/download/81','/manage/files/81/delete',NULL,NULL,NULL,NULL,'N','download.png'),
	 (77,NULL,'JqtuZjAo.png','png',900136,'D:\\data\\tagocms-dev\\Popup\\77\\JqtuZjAo.png','/files/download/Popup/JqtuZjAo.png','/files/download/82','/manage/files/82/delete',NULL,NULL,NULL,NULL,'N','download.png'),
	 (78,NULL,'HJSNeXKC.jpg','jpg',41369,'D:\\data\\tagocms-dev\\Popup\\78\\HJSNeXKC.jpg','/files/download/Popup/HJSNeXKC.jpg','/files/download/83','/manage/files/83/delete',NULL,NULL,NULL,NULL,'N','pumpkin.jpg'),
	 (79,NULL,'4gfWKosI.png','png',3439152,'C:\\data\\tagocms-dev\\Admin\\79\\4gfWKosI.png','/files/download/Admin/4gfWKosI.png','/files/download/84','/manage/files/84/delete',NULL,NULL,NULL,NULL,'N','Fade.png'),
	 (80,NULL,'WyNq192C.png','png',3439152,'C:\\data\\tagocms-dev\\User\\80\\WyNq192C.png','/files/download/User/WyNq192C.png','/files/download/85','/manage/files/85/delete',NULL,NULL,NULL,NULL,'N','Fade.png'),
	 (81,NULL,'ZUO1I1ky.jpg','jpg',2969,'D:\\data\\tagocms-dev\\Banner\\81\\ZUO1I1ky.jpg','/files/download/Banner/ZUO1I1ky.jpg','/files/download/87','/manage/files/87/delete',NULL,NULL,NULL,NULL,'N','corp.jpg'),
	 (82,NULL,'ZZP9fSeX.jpg','jpg',2969,'D:\\data\\tagocms-dev\\Banner\\82\\ZZP9fSeX.jpg','/files/download/Banner/ZZP9fSeX.jpg','/files/download/88','/manage/files/88/delete',NULL,NULL,NULL,NULL,'N','corp.jpg');
INSERT INTO tagocms.t_file (file_group_seq,order_number,stored_file_name,file_ext,file_size,stored_path,view_url,download_url,delete_url,created_date,created_by,modified_date,modified_by,is_deleted,file_name) VALUES
	 (81,NULL,'9eEzkjER.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Banner\\81\\9eEzkjER.jpg','/files/download/Banner/9eEzkjER.jpg','/files/download/89','/manage/files/89/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (83,NULL,'WNJeRHJo.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Banner\\83\\WNJeRHJo.jpg','/files/download/Banner/WNJeRHJo.jpg','/files/download/90','/manage/files/90/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (84,NULL,'C8GjLiJS.jpg','jpg',2969,'D:\\data\\tagocms-dev\\Banner\\84\\C8GjLiJS.jpg','/files/download/Banner/C8GjLiJS.jpg','/files/download/91','/manage/files/91/delete',NULL,NULL,NULL,NULL,'N','corp.jpg'),
	 (85,NULL,'aj09DS5m.jpg','jpg',7026,'D:\\data\\tagocms-dev\\Popup\\85\\aj09DS5m.jpg','/files/download/Popup/aj09DS5m.jpg','/files/download/92','/manage/files/92/delete',NULL,NULL,NULL,NULL,'N','download.jpg'),
	 (86,NULL,'toyfVIim.jpg','jpg',7211,'D:\\data\\tagocms-dev\\Popup\\86\\toyfVIim.jpg','/files/download/Popup/toyfVIim.jpg','/files/download/93','/manage/files/93/delete',NULL,NULL,NULL,NULL,'N','download (1).jpg'),
	 (87,NULL,'2Oq8k8TJ.jpg','jpg',7026,'D:\\data\\tagocms-dev\\Popup\\87\\2Oq8k8TJ.jpg','/files/download/Popup/2Oq8k8TJ.jpg','/files/download/94','/manage/files/94/delete',NULL,NULL,NULL,NULL,'N','download.jpg'),
	 (88,NULL,'sRB6XbmZ.jpg','jpg',7401,'D:\\data\\tagocms-dev\\Popup\\88\\sRB6XbmZ.jpg','/files/download/Popup/sRB6XbmZ.jpg','/files/download/95','/manage/files/95/delete',NULL,NULL,NULL,NULL,'N','download (2).jpg'),
	 (89,NULL,'t340c7C2.jpg','jpg',7026,'D:\\data\\tagocms-dev\\Popup\\89\\t340c7C2.jpg','/files/download/Popup/t340c7C2.jpg','/files/download/96','/manage/files/96/delete',NULL,NULL,NULL,NULL,'N','download.jpg'),
	 (90,NULL,'FPShtCsa.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Popup\\90\\FPShtCsa.jpg','/files/download/Popup/FPShtCsa.jpg','/files/download/97','/manage/files/97/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (91,NULL,'mD8zhgJj.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Popup\\91\\mD8zhgJj.jpg','/files/download/Popup/mD8zhgJj.jpg','/files/download/98','/manage/files/98/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg');
INSERT INTO tagocms.t_file (file_group_seq,order_number,stored_file_name,file_ext,file_size,stored_path,view_url,download_url,delete_url,created_date,created_by,modified_date,modified_by,is_deleted,file_name) VALUES
	 (92,NULL,'a6fOLNUH.jpg','jpg',7026,'D:\\data\\tagocms-dev\\Popup\\92\\a6fOLNUH.jpg','/files/download/Popup/a6fOLNUH.jpg','/files/download/99','/manage/files/99/delete',NULL,NULL,NULL,NULL,'N','download.jpg'),
	 (93,NULL,'eGPcYrcW.jpg','jpg',7401,'D:\\data\\tagocms-dev\\Popup\\93\\eGPcYrcW.jpg','/files/download/Popup/eGPcYrcW.jpg','/files/download/100','/manage/files/100/delete',NULL,NULL,NULL,NULL,'N','download (2).jpg'),
	 (94,NULL,'yVMZJbYw.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Popup\\94\\yVMZJbYw.jpg','/files/download/Popup/yVMZJbYw.jpg','/files/download/101','/manage/files/101/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (95,NULL,'NL9L9B6B.jpg','jpg',7401,'D:\\data\\tagocms-dev\\Popup\\95\\NL9L9B6B.jpg','/files/download/Popup/NL9L9B6B.jpg','/files/download/102','/manage/files/102/delete',NULL,NULL,NULL,NULL,'N','download (2).jpg'),
	 (96,NULL,'XG8pQaS4.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Popup\\96\\XG8pQaS4.jpg','/files/download/Popup/XG8pQaS4.jpg','/files/download/103','/manage/files/103/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (97,NULL,'jbI8rf8L.jpg','jpg',7401,'D:\\data\\tagocms-dev\\Popup\\97\\jbI8rf8L.jpg','/files/download/Popup/jbI8rf8L.jpg','/files/download/104','/manage/files/104/delete',NULL,NULL,NULL,NULL,'N','download (2).jpg'),
	 (98,NULL,'7H0F4VSX.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Popup\\98\\7H0F4VSX.jpg','/files/download/Popup/7H0F4VSX.jpg','/files/download/105','/manage/files/105/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (99,NULL,'xKsRBTNc.jpg','jpg',7401,'D:\\data\\tagocms-dev\\Popup\\99\\xKsRBTNc.jpg','/files/download/Popup/xKsRBTNc.jpg','/files/download/106','/manage/files/106/delete',NULL,NULL,NULL,NULL,'N','download (2).jpg'),
	 (100,NULL,'ZXcWFOJx.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Popup\\100\\ZXcWFOJx.jpg','/files/download/Popup/ZXcWFOJx.jpg','/files/download/107','/manage/files/107/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (101,NULL,'ortrOgLG.png','png',4707595,'C:\\data\\tagocms-dev\\Notice\\101\\ortrOgLG.png','/files/download/Notice/ortrOgLG.png','/files/download/108','/manage/files/108/delete',NULL,NULL,NULL,NULL,'N','Origin.png');
INSERT INTO tagocms.t_file (file_group_seq,order_number,stored_file_name,file_ext,file_size,stored_path,view_url,download_url,delete_url,created_date,created_by,modified_date,modified_by,is_deleted,file_name) VALUES
	 (102,NULL,'5mvUGTTy.jpg','jpg',7401,'D:\\data\\tagocms-dev\\Notice\\102\\5mvUGTTy.jpg','/files/download/Notice/5mvUGTTy.jpg','/files/download/109','/manage/files/109/delete',NULL,NULL,NULL,NULL,'N','download (2).jpg'),
	 (103,NULL,'vQ7ycLKB.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Notice\\103\\vQ7ycLKB.jpg','/files/download/Notice/vQ7ycLKB.jpg','/files/download/110','/manage/files/110/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (104,NULL,'yuDiljJ3.jpg','jpg',7211,'D:\\data\\tagocms-dev\\Banner\\104\\yuDiljJ3.jpg','/files/download/Banner/yuDiljJ3.jpg','/files/download/111','/manage/files/111/delete',NULL,NULL,NULL,NULL,'N','download (1).jpg'),
	 (105,NULL,'gfVCslD2.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Banner\\105\\gfVCslD2.jpg','/files/download/Banner/gfVCslD2.jpg','/files/download/112','/manage/files/112/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (106,NULL,'fJZhLFGq.jpg','jpg',7401,'D:\\data\\tagocms-dev\\Popup\\106\\fJZhLFGq.jpg','/files/download/Popup/fJZhLFGq.jpg','/files/download/113','/manage/files/113/delete',NULL,NULL,NULL,NULL,'N','download (2).jpg'),
	 (107,NULL,'TIwBUBYz.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Popup\\107\\TIwBUBYz.jpg','/files/download/Popup/TIwBUBYz.jpg','/files/download/114','/manage/files/114/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (108,NULL,'Wfd0ZLNT.jpg','jpg',7401,'D:\\data\\tagocms-dev\\Notice\\108\\Wfd0ZLNT.jpg','/files/download/Notice/Wfd0ZLNT.jpg','/files/download/115','/manage/files/115/delete',NULL,NULL,NULL,NULL,'N','download (2).jpg'),
	 (109,NULL,'aW0nqW6V.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Notice\\109\\aW0nqW6V.jpg','/files/download/Notice/aW0nqW6V.jpg','/files/download/116','/manage/files/116/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (116,NULL,'awQyp2yy.jpg','jpg',7211,'D:\\data\\tagocms-dev\\FAQ\\116\\awQyp2yy.jpg','/files/download/FAQ/awQyp2yy.jpg','/files/download/117','/manage/files/117/delete',NULL,NULL,NULL,NULL,'N','download (1).jpg'),
	 (117,NULL,'P1pyxmyF.jpg','jpg',7211,'D:\\data\\tagocms-dev\\FAQ\\117\\P1pyxmyF.jpg','/files/download/FAQ/P1pyxmyF.jpg','/files/download/118','/manage/files/118/delete',NULL,NULL,NULL,NULL,'N','download (1).jpg');
INSERT INTO tagocms.t_file (file_group_seq,order_number,stored_file_name,file_ext,file_size,stored_path,view_url,download_url,delete_url,created_date,created_by,modified_date,modified_by,is_deleted,file_name) VALUES
	 (118,NULL,'odYD08eB.jpg','jpg',7401,'D:\\data\\tagocms-dev\\FAQ\\118\\odYD08eB.jpg','/files/download/FAQ/odYD08eB.jpg','/files/download/119','/manage/files/119/delete',NULL,NULL,NULL,NULL,'N','download (2).jpg'),
	 (130,NULL,'y36qbTRB.jpg','jpg',7401,'D:\\data\\tagocms-dev\\FAQ\\130\\y36qbTRB.jpg','/files/download/FAQ/y36qbTRB.jpg','/files/download/120','/manage/files/120/delete',NULL,NULL,NULL,NULL,'N','download (2).jpg'),
	 (132,NULL,'yBlA1RsU.jpg','jpg',7401,'D:\\data\\tagocms-dev\\FAQ\\132\\yBlA1RsU.jpg','/files/download/FAQ/yBlA1RsU.jpg','/files/download/121','/manage/files/121/delete',NULL,NULL,NULL,NULL,'N','download (2).jpg'),
	 (133,NULL,'DE60qkve.png','png',6696963,'C:\\data\\tagocms-dev\\Notice\\133\\DE60qkve.png','/files/download/Notice/DE60qkve.png','/files/download/122','/manage/files/122/delete',NULL,NULL,NULL,NULL,'N','Smartphone.png'),
	 (135,NULL,'iMFDduWf.jpg','jpg',7401,'D:\\data\\tagocms-dev\\Banner\\135\\iMFDduWf.jpg','/files/download/Banner/iMFDduWf.jpg','/files/download/123','/manage/files/123/delete',NULL,NULL,NULL,NULL,'N','download (2).jpg'),
	 (136,NULL,'U9ROlA7j.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Banner\\136\\U9ROlA7j.jpg','/files/download/Banner/U9ROlA7j.jpg','/files/download/124','/manage/files/124/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (135,NULL,'EnRtfWZR.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Banner\\135\\EnRtfWZR.jpg','/files/download/Banner/EnRtfWZR.jpg','/files/download/125','/manage/files/125/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (136,NULL,'849cictk.jpg','jpg',2969,'D:\\data\\tagocms-dev\\Banner\\136\\849cictk.jpg','/files/download/Banner/849cictk.jpg','/files/download/126','/manage/files/126/delete',NULL,NULL,NULL,NULL,'N','corp.jpg'),
	 (137,NULL,'pXYsHhGd.png','png',14606,'D:\\data\\tagocms-dev\\Banner\\137\\pXYsHhGd.png','/files/download/Banner/pXYsHhGd.png','/files/download/127','/manage/files/127/delete',NULL,NULL,NULL,NULL,'N','logo.png'),
	 (138,NULL,'k3O4DCiz.png','png',7180,'D:\\data\\tagocms-dev\\Banner\\138\\k3O4DCiz.png','/files/download/Banner/k3O4DCiz.png','/files/download/128','/manage/files/128/delete',NULL,NULL,NULL,NULL,'N','20210723094837393015.png');
INSERT INTO tagocms.t_file (file_group_seq,order_number,stored_file_name,file_ext,file_size,stored_path,view_url,download_url,delete_url,created_date,created_by,modified_date,modified_by,is_deleted,file_name) VALUES
	 (139,NULL,'k1fDAr3h.png','png',6696963,'C:\\data\\tagocms-dev\\Banner\\139\\k1fDAr3h.png','/files/download/Banner/k1fDAr3h.png','/files/download/131','/manage/files/131/delete',NULL,NULL,NULL,NULL,'N','Smartphone.png'),
	 (140,NULL,'Q94zsDIO.png','png',1043549,'C:\\data\\tagocms-dev\\Banner\\140\\Q94zsDIO.png','/files/download/Banner/Q94zsDIO.png','/files/download/132','/manage/files/132/delete',NULL,NULL,NULL,NULL,'N','Tech.png'),
	 (149,NULL,'i7KMB9N6.png','png',4195579,'C:\\data\\tagocms-dev\\ContentSettings\\149\\i7KMB9N6.png','/files/download/ContentSettings/i7KMB9N6.png','/files/download/133','/manage/files/133/delete',NULL,NULL,NULL,NULL,'N','Wave.png'),
	 (150,NULL,'XYhmZpIb.png','png',1043549,'C:\\data\\tagocms-dev\\ContentSettings\\150\\XYhmZpIb.png','/files/download/ContentSettings/XYhmZpIb.png','/files/download/134','/manage/files/134/delete',NULL,NULL,NULL,NULL,'N','Tech.png'),
	 (151,NULL,'mbhwQy9X.png','png',6696963,'C:\\data\\tagocms-dev\\ContentSettings\\151\\mbhwQy9X.png','/files/download/ContentSettings/mbhwQy9X.png','/files/download/135','/manage/files/135/delete',NULL,NULL,NULL,NULL,'N','Smartphone.png'),
	 (152,NULL,'5CnqL14E.png','png',4195579,'C:\\data\\tagocms-dev\\ContentSettings\\152\\5CnqL14E.png','/files/download/ContentSettings/5CnqL14E.png','/files/download/136','/manage/files/136/delete',NULL,NULL,NULL,NULL,'N','Wave.png'),
	 (153,NULL,'VejePJGs.xlsx','xlsx',52361,'C:\\data\\tagocms-dev\\ContentSettings\\153\\VejePJGs.xlsx','/files/download/ContentSettings/VejePJGs.xlsx','/files/download/137','/manage/files/137/delete',NULL,NULL,NULL,NULL,'N','장애인 표준사업장 현황안  2021-04-23 15 48 15.xlsx'),
	 (154,NULL,'T3huDjno.xls','xls',23552,'C:\\data\\tagocms-dev\\ContentSettings\\154\\T3huDjno.xls','/files/download/ContentSettings/T3huDjno.xls','/files/download/138','/manage/files/138/delete',NULL,NULL,NULL,NULL,'N','공지사항_게시물목록_20221111.xls'),
	 (186,NULL,'3DwtgDE8.png','png',1505355,'D:\\data\\tagocms-dev\\Popup\\186\\3DwtgDE8.png','/files/download/Popup/3DwtgDE8.png','/files/download/139','/manage/files/139/delete',NULL,NULL,NULL,NULL,'N','화면 캡처 2023-04-03 183128.png'),
	 (187,NULL,'Jf2kdgBa.png','png',22845,'D:\\data\\tagocms-dev\\Popup\\187\\Jf2kdgBa.png','/files/download/Popup/Jf2kdgBa.png','/files/download/140','/manage/files/140/delete',NULL,NULL,NULL,NULL,'N','화면 캡처 2023-03-31 102108.png');
INSERT INTO tagocms.t_file (file_group_seq,order_number,stored_file_name,file_ext,file_size,stored_path,view_url,download_url,delete_url,created_date,created_by,modified_date,modified_by,is_deleted,file_name) VALUES
	 (188,NULL,'Prs7Pnar.png','png',14606,'D:\\data\\tagocms-dev\\Notice\\188\\Prs7Pnar.png','/files/download/Notice/Prs7Pnar.png','/files/download/141','/manage/files/141/delete',NULL,NULL,NULL,NULL,'N','logo.png'),
	 (193,NULL,'om6VBXYa.jpg','jpg',7211,'D:\\data\\tagocms-dev\\Notice\\193\\om6VBXYa.jpg','/files/download/Notice/om6VBXYa.jpg','/files/download/142','/manage/files/142/delete',NULL,NULL,NULL,NULL,'N','download (1).jpg'),
	 (194,NULL,'OuFrBRGA.jpg','jpg',7026,'D:\\data\\tagocms-dev\\Notice\\194\\OuFrBRGA.jpg','/files/download/Notice/OuFrBRGA.jpg','/files/download/143','/manage/files/143/delete',NULL,NULL,NULL,NULL,'N','download.jpg'),
	 (195,NULL,'EfzlQ8T0.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Notice\\195\\EfzlQ8T0.jpg','/files/download/Notice/EfzlQ8T0.jpg','/files/download/144','/manage/files/144/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (196,NULL,'O6svWAUo.png','png',14606,'D:\\data\\tagocms-dev\\Notice\\196\\O6svWAUo.png','/files/download/Notice/O6svWAUo.png','/files/download/145','/manage/files/145/delete',NULL,NULL,NULL,NULL,'N','logo.png'),
	 (197,NULL,'32UYMriu.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Notice\\197\\32UYMriu.jpg','/files/download/Notice/32UYMriu.jpg','/files/download/146','/manage/files/146/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (198,NULL,'UHKZT9zs.jpg','jpg',2969,'D:\\data\\tagocms-dev\\Notice\\198\\UHKZT9zs.jpg','/files/download/Notice/UHKZT9zs.jpg','/files/download/147','/manage/files/147/delete',NULL,NULL,NULL,NULL,'N','corp.jpg'),
	 (199,NULL,'nkHRgQ3q.jpg','jpg',7211,'D:\\data\\tagocms-dev\\Notice\\199\\nkHRgQ3q.jpg','/files/download/Notice/nkHRgQ3q.jpg','/files/download/148','/manage/files/148/delete',NULL,NULL,NULL,NULL,'N','download (1).jpg'),
	 (200,NULL,'RT5azSFT.jpg','jpg',7211,'D:\\data\\tagocms-dev\\Notice\\200\\RT5azSFT.jpg','/files/download/Notice/RT5azSFT.jpg','/files/download/149','/manage/files/149/delete',NULL,NULL,NULL,NULL,'N','download (1).jpg'),
	 (201,NULL,'Txy5Qp19.jpg','jpg',7211,'D:\\data\\tagocms-dev\\Notice\\201\\Txy5Qp19.jpg','/files/download/Notice/Txy5Qp19.jpg','/files/download/150','/manage/files/150/delete',NULL,NULL,NULL,NULL,'N','download (1).jpg');
INSERT INTO tagocms.t_file (file_group_seq,order_number,stored_file_name,file_ext,file_size,stored_path,view_url,download_url,delete_url,created_date,created_by,modified_date,modified_by,is_deleted,file_name) VALUES
	 (202,NULL,'PBV5AxfI.jpg','jpg',7211,'D:\\data\\tagocms-dev\\Notice\\202\\PBV5AxfI.jpg','/files/download/Notice/PBV5AxfI.jpg','/files/download/151','/manage/files/151/delete',NULL,NULL,NULL,NULL,'N','download (1).jpg'),
	 (203,NULL,'TuVN1D5b.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Notice\\203\\TuVN1D5b.jpg','/files/download/Notice/TuVN1D5b.jpg','/files/download/152','/manage/files/152/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (204,NULL,'nwMxTJW5.jpg','jpg',7211,'D:\\data\\tagocms-dev\\Notice\\204\\nwMxTJW5.jpg','/files/download/Notice/nwMxTJW5.jpg','/files/download/153','/manage/files/153/delete',NULL,NULL,NULL,NULL,'N','download (1).jpg'),
	 (205,NULL,'XwVMsvUQ.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Notice\\205\\XwVMsvUQ.jpg','/files/download/Notice/XwVMsvUQ.jpg','/files/download/154','/manage/files/154/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (206,NULL,'Btfx53qJ.jpg','jpg',2969,'D:\\data\\tagocms-dev\\Notice\\206\\Btfx53qJ.jpg','/files/download/Notice/Btfx53qJ.jpg','/files/download/155','/manage/files/155/delete',NULL,NULL,NULL,NULL,'N','corp.jpg'),
	 (207,NULL,'s9UKISYr.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Notice\\207\\s9UKISYr.jpg','/files/download/Notice/s9UKISYr.jpg','/files/download/156','/manage/files/156/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (208,NULL,'L1OxBi51.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Notice\\208\\L1OxBi51.jpg','/files/download/Notice/L1OxBi51.jpg','/files/download/157','/manage/files/157/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (209,NULL,'QYEw8i4l.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Notice\\209\\QYEw8i4l.jpg','/files/download/Notice/QYEw8i4l.jpg','/files/download/158','/manage/files/158/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (210,NULL,'iP55VceV.jpg','jpg',2969,'D:\\data\\tagocms-dev\\Notice\\210\\iP55VceV.jpg','/files/download/Notice/iP55VceV.jpg','/files/download/159','/manage/files/159/delete',NULL,NULL,NULL,NULL,'N','corp.jpg'),
	 (212,NULL,'tZ9qfBNd.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Notice\\212\\tZ9qfBNd.jpg','/files/download/Notice/tZ9qfBNd.jpg','/files/download/160','/manage/files/160/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg');
INSERT INTO tagocms.t_file (file_group_seq,order_number,stored_file_name,file_ext,file_size,stored_path,view_url,download_url,delete_url,created_date,created_by,modified_date,modified_by,is_deleted,file_name) VALUES
	 (213,NULL,'BkjR1L2U.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Notice\\213\\BkjR1L2U.jpg','/files/download/Notice/BkjR1L2U.jpg','/files/download/161','/manage/files/161/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (214,NULL,'jCKJNpno.jpg','jpg',7026,'D:\\data\\tagocms-dev\\Notice\\214\\jCKJNpno.jpg','/files/download/Notice/jCKJNpno.jpg','/files/download/162','/manage/files/162/delete',NULL,NULL,NULL,NULL,'N','download.jpg'),
	 (215,NULL,'dZxqH8RH.jpg','jpg',7211,'D:\\data\\tagocms-dev\\Notice\\215\\dZxqH8RH.jpg','/files/download/Notice/dZxqH8RH.jpg','/files/download/163','/manage/files/163/delete',NULL,NULL,NULL,NULL,'N','download (1).jpg'),
	 (216,NULL,'n6ghG38f.jpg','jpg',7026,'D:\\data\\tagocms-dev\\Notice\\216\\n6ghG38f.jpg','/files/download/Notice/n6ghG38f.jpg','/files/download/164','/manage/files/164/delete',NULL,NULL,NULL,NULL,'N','download.jpg'),
	 (217,NULL,'hfA7Vc1s.jpg','jpg',2969,'D:\\data\\tagocms-dev\\Notice\\217\\hfA7Vc1s.jpg','/files/download/Notice/hfA7Vc1s.jpg','/files/download/165','/manage/files/165/delete',NULL,NULL,NULL,NULL,'N','corp.jpg'),
	 (218,NULL,'47kY35wK.jpg','jpg',7401,'D:\\data\\tagocms-dev\\Notice\\218\\47kY35wK.jpg','/files/download/Notice/47kY35wK.jpg','/files/download/166','/manage/files/166/delete',NULL,NULL,NULL,NULL,'N','download (2).jpg'),
	 (219,NULL,'gg5fJ0Yq.jpg','jpg',2969,'D:\\data\\tagocms-dev\\Notice\\219\\gg5fJ0Yq.jpg','/files/download/Notice/gg5fJ0Yq.jpg','/files/download/167','/manage/files/167/delete',NULL,NULL,NULL,NULL,'N','corp.jpg'),
	 (220,NULL,'QN1heofJ.jpg','jpg',7026,'D:\\data\\tagocms-dev\\Notice\\220\\QN1heofJ.jpg','/files/download/Notice/QN1heofJ.jpg','/files/download/168','/manage/files/168/delete',NULL,NULL,NULL,NULL,'N','download.jpg'),
	 (221,NULL,'5PZzgkFV.png','png',6696963,'C:\\data\\tagocms-dev\\Notice\\221\\5PZzgkFV.png','/files/download/Notice/5PZzgkFV.png','/files/download/169','/manage/files/169/delete',NULL,NULL,NULL,NULL,'N','Smartphone.png'),
	 (222,NULL,'QxCKwS9v.png','png',4195579,'C:\\data\\tagocms-dev\\Notice\\222\\QxCKwS9v.png','/files/download/Notice/QxCKwS9v.png','/files/download/170','/manage/files/170/delete',NULL,NULL,NULL,NULL,'N','Wave.png');
INSERT INTO tagocms.t_file (file_group_seq,order_number,stored_file_name,file_ext,file_size,stored_path,view_url,download_url,delete_url,created_date,created_by,modified_date,modified_by,is_deleted,file_name) VALUES
	 (223,NULL,'bUjyAOtG.png','png',4195579,'C:\\data\\tagocms-dev\\Notice\\223\\bUjyAOtG.png','/files/download/Notice/bUjyAOtG.png','/files/download/171','/manage/files/171/delete',NULL,NULL,NULL,NULL,'N','Wave.png'),
	 (224,NULL,'9LWiqpCN.jpg','jpg',7211,'D:\\data\\tagocms-dev\\Notice\\224\\9LWiqpCN.jpg','/files/download/Notice/9LWiqpCN.jpg','/files/download/172','/manage/files/172/delete',NULL,NULL,NULL,NULL,'N','download (1).jpg'),
	 (225,NULL,'caZj9Lo8.png','png',4195579,'C:\\data\\tagocms-dev\\Notice\\225\\caZj9Lo8.png','/files/download/Notice/caZj9Lo8.png','/files/download/173','/manage/files/173/delete',NULL,NULL,NULL,NULL,'N','Wave.png'),
	 (226,NULL,'5Dp6WjN8.png','png',3908,'C:\\data\\tagocms-dev\\Banner\\226\\5Dp6WjN8.png','/files/download/Banner/5Dp6WjN8.png','/files/download/174','/manage/files/174/delete',NULL,NULL,NULL,NULL,'N','images.png'),
	 (227,NULL,'t8bjzoJO.png','png',3908,'C:\\data\\tagocms-dev\\Banner\\227\\t8bjzoJO.png','/files/download/Banner/t8bjzoJO.png','/files/download/175','/manage/files/175/delete',NULL,NULL,NULL,NULL,'N','images.png'),
	 (228,NULL,'mtdSsTdR.png','png',3439152,'C:\\data\\tagocms-dev\\Admin\\228\\mtdSsTdR.png','/files/download/Admin/mtdSsTdR.png','/files/download/176','/manage/files/176/delete',NULL,NULL,NULL,NULL,'N','Fade.png'),
	 (229,NULL,'C1oaW6vu.png','png',532692,'/data/tagocms-staging/Banner/229/C1oaW6vu.png','/files/download/Banner/C1oaW6vu.png','/files/download/177','/manage/files/177/delete',NULL,NULL,NULL,NULL,'N','maskwatered.png'),
	 (231,NULL,'2nOt6M7d.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Popup\\231\\2nOt6M7d.jpg','/files/download/Popup/2nOt6M7d.jpg','/files/download/178','/manage/files/178/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (232,NULL,'VrDT3NC0.jpg','jpg',7401,'D:\\data\\tagocms-dev\\Popup\\232\\VrDT3NC0.jpg','/files/download/Popup/VrDT3NC0.jpg','/files/download/179','/manage/files/179/delete',NULL,NULL,NULL,NULL,'N','download (2).jpg'),
	 (233,NULL,'xPA9TjWn.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Popup\\233\\xPA9TjWn.jpg','/files/download/Popup/xPA9TjWn.jpg','/files/download/180','/manage/files/180/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg');
INSERT INTO tagocms.t_file (file_group_seq,order_number,stored_file_name,file_ext,file_size,stored_path,view_url,download_url,delete_url,created_date,created_by,modified_date,modified_by,is_deleted,file_name) VALUES
	 (234,NULL,'DFzVbV74.jpg','jpg',7026,'D:\\data\\tagocms-dev\\Popup\\234\\DFzVbV74.jpg','/files/download/Popup/DFzVbV74.jpg','/files/download/181','/manage/files/181/delete',NULL,NULL,NULL,NULL,'N','download.jpg'),
	 (235,NULL,'9b9ycZ38.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Popup\\235\\9b9ycZ38.jpg','/files/download/Popup/9b9ycZ38.jpg','/files/download/182','/manage/files/182/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (236,NULL,'NTWMbngu.jpg','jpg',7026,'D:\\data\\tagocms-dev\\Popup\\236\\NTWMbngu.jpg','/files/download/Popup/NTWMbngu.jpg','/files/download/183','/manage/files/183/delete',NULL,NULL,NULL,NULL,'N','download.jpg'),
	 (237,NULL,'y608j1nN.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Popup\\237\\y608j1nN.jpg','/files/download/Popup/y608j1nN.jpg','/files/download/184','/manage/files/184/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (238,NULL,'FGmtATXK.jpg','jpg',7026,'D:\\data\\tagocms-dev\\Popup\\238\\FGmtATXK.jpg','/files/download/Popup/FGmtATXK.jpg','/files/download/185','/manage/files/185/delete',NULL,NULL,NULL,NULL,'N','download.jpg'),
	 (239,NULL,'Ioroq5yW.jpg','jpg',7401,'D:\\data\\tagocms-dev\\Popup\\239\\Ioroq5yW.jpg','/files/download/Popup/Ioroq5yW.jpg','/files/download/186','/manage/files/186/delete',NULL,NULL,NULL,NULL,'N','download (2).jpg'),
	 (240,NULL,'Duhzlc2C.jpg','jpg',7026,'D:\\data\\tagocms-dev\\Popup\\240\\Duhzlc2C.jpg','/files/download/Popup/Duhzlc2C.jpg','/files/download/187','/manage/files/187/delete',NULL,NULL,NULL,NULL,'N','download.jpg'),
	 (241,NULL,'uLr1xHHE.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Popup\\241\\uLr1xHHE.jpg','/files/download/Popup/uLr1xHHE.jpg','/files/download/188','/manage/files/188/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (242,NULL,'4g3DJaS4.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Popup\\242\\4g3DJaS4.jpg','/files/download/Popup/4g3DJaS4.jpg','/files/download/189','/manage/files/189/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (243,NULL,'KC4emTgI.jpg','jpg',7026,'D:\\data\\tagocms-dev\\Popup\\243\\KC4emTgI.jpg','/files/download/Popup/KC4emTgI.jpg','/files/download/190','/manage/files/190/delete',NULL,NULL,NULL,NULL,'N','download.jpg');
INSERT INTO tagocms.t_file (file_group_seq,order_number,stored_file_name,file_ext,file_size,stored_path,view_url,download_url,delete_url,created_date,created_by,modified_date,modified_by,is_deleted,file_name) VALUES
	 (244,NULL,'FRXaZ15d.jpg','jpg',7026,'D:\\data\\tagocms-dev\\Popup\\244\\FRXaZ15d.jpg','/files/download/Popup/FRXaZ15d.jpg','/files/download/191','/manage/files/191/delete',NULL,NULL,NULL,NULL,'N','download.jpg'),
	 (245,NULL,'EauuE7JA.jpg','jpg',2969,'D:\\data\\tagocms-dev\\Popup\\245\\EauuE7JA.jpg','/files/download/Popup/EauuE7JA.jpg','/files/download/192','/manage/files/192/delete',NULL,NULL,NULL,NULL,'N','corp.jpg'),
	 (246,NULL,'QA9SBJjk.jpg','jpg',2969,'D:\\data\\tagocms-dev\\Popup\\246\\QA9SBJjk.jpg','/files/download/Popup/QA9SBJjk.jpg','/files/download/193','/manage/files/193/delete',NULL,NULL,NULL,NULL,'N','corp.jpg'),
	 (247,NULL,'quFKfxuL.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Popup\\247\\quFKfxuL.jpg','/files/download/Popup/quFKfxuL.jpg','/files/download/194','/manage/files/194/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (248,NULL,'ErRlPBuV.jpg','jpg',7026,'D:\\data\\tagocms-dev\\Popup\\248\\ErRlPBuV.jpg','/files/download/Popup/ErRlPBuV.jpg','/files/download/195','/manage/files/195/delete',NULL,NULL,NULL,NULL,'N','download.jpg'),
	 (249,NULL,'mIFJoTaB.jpg','jpg',7211,'D:\\data\\tagocms-dev\\Popup\\249\\mIFJoTaB.jpg','/files/download/Popup/mIFJoTaB.jpg','/files/download/196','/manage/files/196/delete',NULL,NULL,NULL,NULL,'N','download (1).jpg'),
	 (250,NULL,'mymYifNI.jpg','jpg',7401,'D:\\data\\tagocms-dev\\Popup\\250\\mymYifNI.jpg','/files/download/Popup/mymYifNI.jpg','/files/download/197','/manage/files/197/delete',NULL,NULL,NULL,NULL,'N','download (2).jpg'),
	 (251,NULL,'D9qJaXfu.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Banner\\251\\D9qJaXfu.jpg','/files/download/Banner/D9qJaXfu.jpg','/files/download/198','/manage/files/198/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (252,NULL,'EQ68e6wi.jpg','jpg',7401,'D:\\data\\tagocms-dev\\Banner\\252\\EQ68e6wi.jpg','/files/download/Banner/EQ68e6wi.jpg','/files/download/199','/manage/files/199/delete',NULL,NULL,NULL,NULL,'N','download (2).jpg'),
	 (253,NULL,'DN8Or15q.jpg','jpg',7211,'D:\\data\\tagocms-dev\\Banner\\253\\DN8Or15q.jpg','/files/download/Banner/DN8Or15q.jpg','/files/download/200','/manage/files/200/delete',NULL,NULL,NULL,NULL,'N','download (1).jpg');
INSERT INTO tagocms.t_file (file_group_seq,order_number,stored_file_name,file_ext,file_size,stored_path,view_url,download_url,delete_url,created_date,created_by,modified_date,modified_by,is_deleted,file_name) VALUES
	 (254,NULL,'zZ0Xret2.jpg','jpg',7026,'D:\\data\\tagocms-dev\\Banner\\254\\zZ0Xret2.jpg','/files/download/Banner/zZ0Xret2.jpg','/files/download/201','/manage/files/201/delete',NULL,NULL,NULL,NULL,'N','download.jpg'),
	 (255,NULL,'V2smXk8E.jpg','jpg',7211,'D:\\data\\tagocms-dev\\Banner\\255\\V2smXk8E.jpg','/files/download/Banner/V2smXk8E.jpg','/files/download/202','/manage/files/202/delete',NULL,NULL,NULL,NULL,'N','download (1).jpg'),
	 (256,NULL,'4IwjUKDG.jpg','jpg',2969,'D:\\data\\tagocms-dev\\Banner\\256\\4IwjUKDG.jpg','/files/download/Banner/4IwjUKDG.jpg','/files/download/203','/manage/files/203/delete',NULL,NULL,NULL,NULL,'N','corp.jpg'),
	 (257,NULL,'IeY2impY.jpg','jpg',7211,'D:\\data\\tagocms-dev\\Banner\\257\\IeY2impY.jpg','/files/download/Banner/IeY2impY.jpg','/files/download/204','/manage/files/204/delete',NULL,NULL,NULL,NULL,'N','download (1).jpg'),
	 (258,NULL,'9iVp5GAh.jpg','jpg',7026,'D:\\data\\tagocms-dev\\Banner\\258\\9iVp5GAh.jpg','/files/download/Banner/9iVp5GAh.jpg','/files/download/205','/manage/files/205/delete',NULL,NULL,NULL,NULL,'N','download.jpg'),
	 (259,NULL,'cGoepbvb.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Popup\\259\\cGoepbvb.jpg','/files/download/Popup/cGoepbvb.jpg','/files/download/206','/manage/files/206/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (260,NULL,'S3kXWLtI.jpg','jpg',7211,'D:\\data\\tagocms-dev\\Popup\\260\\S3kXWLtI.jpg','/files/download/Popup/S3kXWLtI.jpg','/files/download/207','/manage/files/207/delete',NULL,NULL,NULL,NULL,'N','download (1).jpg'),
	 (261,NULL,'EhaqKmSF.jpg','jpg',7211,'D:\\data\\tagocms-dev\\Popup\\261\\EhaqKmSF.jpg','/files/download/Popup/EhaqKmSF.jpg','/files/download/208','/manage/files/208/delete',NULL,NULL,NULL,NULL,'N','download (1).jpg'),
	 (262,NULL,'ZHvFiNhK.jpg','jpg',7401,'D:\\data\\tagocms-dev\\Popup\\262\\ZHvFiNhK.jpg','/files/download/Popup/ZHvFiNhK.jpg','/files/download/209','/manage/files/209/delete',NULL,NULL,NULL,NULL,'N','download (2).jpg'),
	 (263,NULL,'4xGtCkqA.png','png',5012221,'C:\\data\\tagocms-dev\\Admin\\263\\4xGtCkqA.png','/files/download/Admin/4xGtCkqA.png','/files/download/210','/manage/files/210/delete',NULL,NULL,NULL,NULL,'N','Unleash the Beast PNG.png');
INSERT INTO tagocms.t_file (file_group_seq,order_number,stored_file_name,file_ext,file_size,stored_path,view_url,download_url,delete_url,created_date,created_by,modified_date,modified_by,is_deleted,file_name) VALUES
	 (264,NULL,'JJhGi0os.png','png',3908,'C:\\data\\tagocms-dev\\Admin\\264\\JJhGi0os.png','/files/download/Admin/JJhGi0os.png','/files/download/211','/manage/files/211/delete',NULL,NULL,NULL,NULL,'N','images.png'),
	 (265,NULL,'qq6Uqxf4.png','png',32174,'C:\\data\\tagocms-dev\\Admin\\265\\qq6Uqxf4.png','/files/download/Admin/qq6Uqxf4.png','/files/download/212','/manage/files/212/delete',NULL,NULL,NULL,NULL,'Y','3135715.png'),
	 (286,NULL,'7gloQgjt.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Banner\\286\\7gloQgjt.jpg','/files/download/Banner/7gloQgjt.jpg','/files/download/213','/manage/files/213/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (287,NULL,'lwc09jMU.jpg','jpg',7211,'D:\\data\\tagocms-dev\\Banner\\287\\lwc09jMU.jpg','/files/download/Banner/lwc09jMU.jpg','/files/download/214','/manage/files/214/delete',NULL,NULL,NULL,NULL,'N','download (1).jpg'),
	 (290,NULL,'Nl9T8Kch.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Banner\\290\\Nl9T8Kch.jpg','/files/download/Banner/Nl9T8Kch.jpg','/files/download/215','/manage/files/215/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (291,NULL,'VA2lYU1I.jpg','jpg',7401,'D:\\data\\tagocms-dev\\Banner\\291\\VA2lYU1I.jpg','/files/download/Banner/VA2lYU1I.jpg','/files/download/216','/manage/files/216/delete',NULL,NULL,NULL,NULL,'N','download (2).jpg'),
	 (292,NULL,'7JWKnDBp.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Popup\\292\\7JWKnDBp.jpg','/files/download/Popup/7JWKnDBp.jpg','/files/download/217','/manage/files/217/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (293,NULL,'EhgjKVIR.jpg','jpg',7401,'D:\\data\\tagocms-dev\\Popup\\293\\EhgjKVIR.jpg','/files/download/Popup/EhgjKVIR.jpg','/files/download/218','/manage/files/218/delete',NULL,NULL,NULL,NULL,'N','download (2).jpg'),
	 (294,NULL,'uSrzZh9n.jpg','jpg',7211,'D:\\data\\tagocms-dev\\Popup\\294\\uSrzZh9n.jpg','/files/download/Popup/uSrzZh9n.jpg','/files/download/219','/manage/files/219/delete',NULL,NULL,NULL,NULL,'N','download (1).jpg'),
	 (295,NULL,'xgpiysSq.jpg','jpg',7026,'D:\\data\\tagocms-dev\\Popup\\295\\xgpiysSq.jpg','/files/download/Popup/xgpiysSq.jpg','/files/download/220','/manage/files/220/delete',NULL,NULL,NULL,NULL,'N','download.jpg');
INSERT INTO tagocms.t_file (file_group_seq,order_number,stored_file_name,file_ext,file_size,stored_path,view_url,download_url,delete_url,created_date,created_by,modified_date,modified_by,is_deleted,file_name) VALUES
	 (320,NULL,'yRcrHPIy.png','png',6696963,'C:\\data\\tagocms-dev\\Notice\\320\\yRcrHPIy.png','/files/download/Notice/yRcrHPIy.png','/files/download/221','/manage/files/221/delete',NULL,NULL,NULL,NULL,'N','Smartphone.png'),
	 (321,NULL,'YOlcnk3A.png','png',6696963,'C:\\data\\tagocms-dev\\ContentSettings\\321\\YOlcnk3A.png','/files/download/ContentSettings/YOlcnk3A.png','/files/download/222','/manage/files/222/delete',NULL,NULL,NULL,NULL,'N','Smartphone.png'),
	 (338,NULL,'PHjZDruS.jpeg','jpeg',83128,'C:\\data\\tagocms-dev\\Notice\\338\\PHjZDruS.jpeg','/files/download/Notice/PHjZDruS.jpeg','/files/download/223','/manage/files/223/delete',NULL,NULL,NULL,NULL,'N','85991.jpeg'),
	 (339,NULL,'omB5pNvt.jpeg','jpeg',83128,'C:\\data\\tagocms-dev\\Notice\\339\\omB5pNvt.jpeg','/files/download/Notice/omB5pNvt.jpeg','/files/download/224','/manage/files/224/delete',NULL,NULL,NULL,NULL,'N','85991.jpeg'),
	 (340,NULL,'k0lBpn7R.jpeg','jpeg',83128,'C:\\data\\tagocms-dev\\Notice\\340\\k0lBpn7R.jpeg','/files/download/Notice/k0lBpn7R.jpeg','/files/download/225','/manage/files/225/delete',NULL,NULL,NULL,NULL,'N','85991.jpeg'),
	 (341,NULL,'wCEc19yd.jpeg','jpeg',83128,'C:\\data\\tagocms-dev\\Notice\\341\\wCEc19yd.jpeg','/files/download/Notice/wCEc19yd.jpeg','/files/download/226','/manage/files/226/delete',NULL,NULL,NULL,NULL,'N','85991.jpeg'),
	 (345,NULL,'cigU9vab.png','png',1337452,'C:\\data\\tagocms-dev\\FAQ\\345\\cigU9vab.png','/files/download/FAQ/cigU9vab.png','/files/download/227','/manage/files/227/delete',NULL,NULL,NULL,NULL,'N','머크 통합전산시스템.png'),
	 (360,NULL,'PIvRG6bo.png','png',5012221,'C:\\data\\tagocms-dev\\Admin\\360\\PIvRG6bo.png','/files/download/Admin/PIvRG6bo.png','/files/download/228','/manage/files/228/delete',NULL,NULL,NULL,NULL,'N','Unleash the Beast PNG.png'),
	 (361,NULL,'U3GGrLQH.png','png',32174,'C:\\data\\tagocms-dev\\Admin\\361\\U3GGrLQH.png','/files/download/Admin/U3GGrLQH.png','/files/download/229','/manage/files/229/delete',NULL,NULL,NULL,NULL,'N','3135715.png'),
	 (360,NULL,'D2RllEDd.png','png',3908,'C:\\data\\tagocms-dev\\Admin\\360\\D2RllEDd.png','/files/download/Admin/D2RllEDd.png','/files/download/230','/manage/files/230/delete',NULL,NULL,NULL,NULL,'N','images.png');
INSERT INTO tagocms.t_file (file_group_seq,order_number,stored_file_name,file_ext,file_size,stored_path,view_url,download_url,delete_url,created_date,created_by,modified_date,modified_by,is_deleted,file_name) VALUES
	 (362,NULL,'m6Iab701.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Banner\\362\\m6Iab701.jpg','/files/download/Banner/m6Iab701.jpg','/files/download/231','/manage/files/231/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (363,NULL,'r2s1Awlk.jpg','jpg',7026,'D:\\data\\tagocms-dev\\Banner\\363\\r2s1Awlk.jpg','/files/download/Banner/r2s1Awlk.jpg','/files/download/232','/manage/files/232/delete',NULL,NULL,NULL,NULL,'N','download.jpg'),
	 (364,NULL,'IP7rfiBO.jpg','jpg',7211,'D:\\data\\tagocms-dev\\Banner\\364\\IP7rfiBO.jpg','/files/download/Banner/IP7rfiBO.jpg','/files/download/233','/manage/files/233/delete',NULL,NULL,NULL,NULL,'N','download (1).jpg'),
	 (365,NULL,'38kEBQGN.jpg','jpg',7401,'D:\\data\\tagocms-dev\\Banner\\365\\38kEBQGN.jpg','/files/download/Banner/38kEBQGN.jpg','/files/download/234','/manage/files/234/delete',NULL,NULL,NULL,NULL,'N','download (2).jpg'),
	 (366,NULL,'TaqaTr5a.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Banner\\366\\TaqaTr5a.jpg','/files/download/Banner/TaqaTr5a.jpg','/files/download/235','/manage/files/235/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (367,NULL,'2K1FmKXl.jpg','jpg',7026,'D:\\data\\tagocms-dev\\Banner\\367\\2K1FmKXl.jpg','/files/download/Banner/2K1FmKXl.jpg','/files/download/236','/manage/files/236/delete',NULL,NULL,NULL,NULL,'N','download.jpg'),
	 (368,NULL,'TemW0tno.jpg','jpg',7211,'D:\\data\\tagocms-dev\\Banner\\368\\TemW0tno.jpg','/files/download/Banner/TemW0tno.jpg','/files/download/237','/manage/files/237/delete',NULL,NULL,NULL,NULL,'N','download (1).jpg'),
	 (369,NULL,'w4ErdNnK.jpg','jpg',2969,'D:\\data\\tagocms-dev\\Banner\\369\\w4ErdNnK.jpg','/files/download/Banner/w4ErdNnK.jpg','/files/download/238','/manage/files/238/delete',NULL,NULL,NULL,NULL,'N','corp.jpg'),
	 (370,NULL,'OafNuhAA.jpg','jpg',7211,'D:\\data\\tagocms-dev\\Banner\\370\\OafNuhAA.jpg','/files/download/Banner/OafNuhAA.jpg','/files/download/239','/manage/files/239/delete',NULL,NULL,NULL,NULL,'N','download (1).jpg'),
	 (371,NULL,'SGcv1yVj.jpg','jpg',7026,'D:\\data\\tagocms-dev\\Banner\\371\\SGcv1yVj.jpg','/files/download/Banner/SGcv1yVj.jpg','/files/download/240','/manage/files/240/delete',NULL,NULL,NULL,NULL,'N','download.jpg');
INSERT INTO tagocms.t_file (file_group_seq,order_number,stored_file_name,file_ext,file_size,stored_path,view_url,download_url,delete_url,created_date,created_by,modified_date,modified_by,is_deleted,file_name) VALUES
	 (372,NULL,'3dAtuSQe.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Banner\\372\\3dAtuSQe.jpg','/files/download/Banner/3dAtuSQe.jpg','/files/download/241','/manage/files/241/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (373,NULL,'727Zmyn8.jpg','jpg',2969,'D:\\data\\tagocms-dev\\Banner\\373\\727Zmyn8.jpg','/files/download/Banner/727Zmyn8.jpg','/files/download/242','/manage/files/242/delete',NULL,NULL,NULL,NULL,'N','corp.jpg'),
	 (374,NULL,'oQXUVGE7.jpg','jpg',2969,'D:\\data\\tagocms-dev\\Banner\\374\\oQXUVGE7.jpg','/files/download/Banner/oQXUVGE7.jpg','/files/download/243','/manage/files/243/delete',NULL,NULL,NULL,NULL,'N','corp.jpg'),
	 (375,NULL,'hjogTRo3.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Banner\\375\\hjogTRo3.jpg','/files/download/Banner/hjogTRo3.jpg','/files/download/244','/manage/files/244/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (376,NULL,'eiVWQszu.jpg','jpg',7026,'D:\\data\\tagocms-dev\\Banner\\376\\eiVWQszu.jpg','/files/download/Banner/eiVWQszu.jpg','/files/download/245','/manage/files/245/delete',NULL,NULL,NULL,NULL,'N','download.jpg'),
	 (377,NULL,'SSg57Mo9.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Banner\\377\\SSg57Mo9.jpg','/files/download/Banner/SSg57Mo9.jpg','/files/download/246','/manage/files/246/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (378,NULL,'C8hNoHaN.jpg','jpg',7401,'D:\\data\\tagocms-dev\\Banner\\378\\C8hNoHaN.jpg','/files/download/Banner/C8hNoHaN.jpg','/files/download/247','/manage/files/247/delete',NULL,NULL,NULL,NULL,'N','download (2).jpg'),
	 (379,NULL,'wB3Moyw7.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Banner\\379\\wB3Moyw7.jpg','/files/download/Banner/wB3Moyw7.jpg','/files/download/248','/manage/files/248/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (384,NULL,'FQOz4BEH.jpg','jpg',7211,'D:\\data\\tagocms-dev\\Banner\\384\\FQOz4BEH.jpg','/files/download/Banner/FQOz4BEH.jpg','/files/download/249','/manage/files/249/delete',NULL,NULL,NULL,NULL,'N','download (1).jpg'),
	 (384,NULL,'XldfBztM.jpg','jpg',7211,'D:\\data\\tagocms-dev\\Banner\\384\\XldfBztM.jpg','/files/download/Banner/XldfBztM.jpg','/files/download/250','/manage/files/250/delete',NULL,NULL,NULL,NULL,'N','download (1).jpg');
INSERT INTO tagocms.t_file (file_group_seq,order_number,stored_file_name,file_ext,file_size,stored_path,view_url,download_url,delete_url,created_date,created_by,modified_date,modified_by,is_deleted,file_name) VALUES
	 (385,NULL,'A59zDpc6.jpg','jpg',7211,'D:\\data\\tagocms-dev\\Banner\\385\\A59zDpc6.jpg','/files/download/Banner/A59zDpc6.jpg','/files/download/251','/manage/files/251/delete',NULL,NULL,NULL,NULL,'N','download (1).jpg'),
	 (384,NULL,'YEMb0UCz.jpg','jpg',7211,'D:\\data\\tagocms-dev\\Banner\\384\\YEMb0UCz.jpg','/files/download/Banner/YEMb0UCz.jpg','/files/download/252','/manage/files/252/delete',NULL,NULL,NULL,NULL,'N','download (1).jpg'),
	 (380,NULL,'G2nlUZcT.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Banner\\380\\G2nlUZcT.jpg','/files/download/Banner/G2nlUZcT.jpg','/files/download/253','/manage/files/253/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (381,NULL,'VWUED6oa.jpg','jpg',7211,'D:\\data\\tagocms-dev\\Banner\\381\\VWUED6oa.jpg','/files/download/Banner/VWUED6oa.jpg','/files/download/254','/manage/files/254/delete',NULL,NULL,NULL,NULL,'N','download (1).jpg'),
	 (378,NULL,'Y0eURsPY.jpg','jpg',7401,'D:\\data\\tagocms-dev\\Banner\\378\\Y0eURsPY.jpg','/files/download/Banner/Y0eURsPY.jpg','/files/download/255','/manage/files/255/delete',NULL,NULL,NULL,NULL,'N','download (2).jpg'),
	 (382,NULL,'lzr9uFUU.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Banner\\382\\lzr9uFUU.jpg','/files/download/Banner/lzr9uFUU.jpg','/files/download/256','/manage/files/256/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (383,NULL,'26BbmBPD.jpg','jpg',7026,'D:\\data\\tagocms-dev\\Banner\\383\\26BbmBPD.jpg','/files/download/Banner/26BbmBPD.jpg','/files/download/257','/manage/files/257/delete',NULL,NULL,NULL,NULL,'N','download.jpg'),
	 (386,NULL,'zpLgzMkS.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Popup\\386\\zpLgzMkS.jpg','/files/download/Popup/zpLgzMkS.jpg','/files/download/258','/manage/files/258/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (387,NULL,'o6tQtv1R.jpg','jpg',7401,'D:\\data\\tagocms-dev\\Popup\\387\\o6tQtv1R.jpg','/files/download/Popup/o6tQtv1R.jpg','/files/download/259','/manage/files/259/delete',NULL,NULL,NULL,NULL,'N','download (2).jpg'),
	 (388,NULL,'V3PDp7qg.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Popup\\388\\V3PDp7qg.jpg','/files/download/Popup/V3PDp7qg.jpg','/files/download/260','/manage/files/260/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg');
INSERT INTO tagocms.t_file (file_group_seq,order_number,stored_file_name,file_ext,file_size,stored_path,view_url,download_url,delete_url,created_date,created_by,modified_date,modified_by,is_deleted,file_name) VALUES
	 (389,NULL,'MT1zsjC6.jpg','jpg',7026,'D:\\data\\tagocms-dev\\Popup\\389\\MT1zsjC6.jpg','/files/download/Popup/MT1zsjC6.jpg','/files/download/261','/manage/files/261/delete',NULL,NULL,NULL,NULL,'N','download.jpg'),
	 (390,NULL,'OORkx8Qq.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Popup\\390\\OORkx8Qq.jpg','/files/download/Popup/OORkx8Qq.jpg','/files/download/262','/manage/files/262/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (391,NULL,'kJXGQ1lz.jpg','jpg',2969,'D:\\data\\tagocms-dev\\Popup\\391\\kJXGQ1lz.jpg','/files/download/Popup/kJXGQ1lz.jpg','/files/download/263','/manage/files/263/delete',NULL,NULL,NULL,NULL,'N','corp.jpg'),
	 (392,NULL,'L91oz0m5.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Popup\\392\\L91oz0m5.jpg','/files/download/Popup/L91oz0m5.jpg','/files/download/264','/manage/files/264/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (393,NULL,'0tFxjSLn.jpg','jpg',2969,'D:\\data\\tagocms-dev\\Popup\\393\\0tFxjSLn.jpg','/files/download/Popup/0tFxjSLn.jpg','/files/download/265','/manage/files/265/delete',NULL,NULL,NULL,NULL,'N','corp.jpg'),
	 (394,NULL,'aBJ2cr2N.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Popup\\394\\aBJ2cr2N.jpg','/files/download/Popup/aBJ2cr2N.jpg','/files/download/266','/manage/files/266/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (395,NULL,'gTPq93oX.jpg','jpg',7401,'D:\\data\\tagocms-dev\\Popup\\395\\gTPq93oX.jpg','/files/download/Popup/gTPq93oX.jpg','/files/download/267','/manage/files/267/delete',NULL,NULL,NULL,NULL,'N','download (2).jpg'),
	 (396,NULL,'8SX4Ry9d.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Popup\\396\\8SX4Ry9d.jpg','/files/download/Popup/8SX4Ry9d.jpg','/files/download/268','/manage/files/268/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (397,NULL,'IbmckO2l.png','png',7180,'D:\\data\\tagocms-dev\\Popup\\397\\IbmckO2l.png','/files/download/Popup/IbmckO2l.png','/files/download/269','/manage/files/269/delete',NULL,NULL,NULL,NULL,'N','20210723094837393015.png'),
	 (398,NULL,'D8TuY9p1.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Popup\\398\\D8TuY9p1.jpg','/files/download/Popup/D8TuY9p1.jpg','/files/download/270','/manage/files/270/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg');
INSERT INTO tagocms.t_file (file_group_seq,order_number,stored_file_name,file_ext,file_size,stored_path,view_url,download_url,delete_url,created_date,created_by,modified_date,modified_by,is_deleted,file_name) VALUES
	 (399,NULL,'3woll7I2.jpg','jpg',7026,'D:\\data\\tagocms-dev\\Popup\\399\\3woll7I2.jpg','/files/download/Popup/3woll7I2.jpg','/files/download/271','/manage/files/271/delete',NULL,NULL,NULL,NULL,'N','download.jpg'),
	 (400,NULL,'Fm5pjNzS.jpg','jpg',7211,'D:\\data\\tagocms-dev\\Popup\\400\\Fm5pjNzS.jpg','/files/download/Popup/Fm5pjNzS.jpg','/files/download/272','/manage/files/272/delete',NULL,NULL,NULL,NULL,'N','download (1).jpg'),
	 (401,NULL,'3Dakqdb0.jpg','jpg',2969,'D:\\data\\tagocms-dev\\Popup\\401\\3Dakqdb0.jpg','/files/download/Popup/3Dakqdb0.jpg','/files/download/273','/manage/files/273/delete',NULL,NULL,NULL,NULL,'N','corp.jpg'),
	 (402,NULL,'ApxfY4c8.jpg','jpg',7211,'D:\\data\\tagocms-dev\\Popup\\402\\ApxfY4c8.jpg','/files/download/Popup/ApxfY4c8.jpg','/files/download/274','/manage/files/274/delete',NULL,NULL,NULL,NULL,'N','download (1).jpg'),
	 (403,NULL,'V0frNfc8.jpg','jpg',7211,'D:\\data\\tagocms-dev\\Popup\\403\\V0frNfc8.jpg','/files/download/Popup/V0frNfc8.jpg','/files/download/275','/manage/files/275/delete',NULL,NULL,NULL,NULL,'N','download (1).jpg'),
	 (404,NULL,'BYSAs5NA.jpg','jpg',7211,'D:\\data\\tagocms-dev\\Popup\\404\\BYSAs5NA.jpg','/files/download/Popup/BYSAs5NA.jpg','/files/download/276','/manage/files/276/delete',NULL,NULL,NULL,NULL,'N','download (1).jpg'),
	 (405,NULL,'OMusdWDq.jpg','jpg',7401,'D:\\data\\tagocms-dev\\Popup\\405\\OMusdWDq.jpg','/files/download/Popup/OMusdWDq.jpg','/files/download/277','/manage/files/277/delete',NULL,NULL,NULL,NULL,'N','download (2).jpg'),
	 (406,NULL,'HfApKqUo.jpg','jpg',7211,'D:\\data\\tagocms-dev\\Popup\\406\\HfApKqUo.jpg','/files/download/Popup/HfApKqUo.jpg','/files/download/278','/manage/files/278/delete',NULL,NULL,NULL,NULL,'N','download (1).jpg'),
	 (407,NULL,'UL4pHRsx.jpg','jpg',7026,'D:\\data\\tagocms-dev\\Popup\\407\\UL4pHRsx.jpg','/files/download/Popup/UL4pHRsx.jpg','/files/download/279','/manage/files/279/delete',NULL,NULL,NULL,NULL,'N','download.jpg'),
	 (408,NULL,'e2BlX8yF.jpg','jpg',7211,'D:\\data\\tagocms-dev\\Popup\\408\\e2BlX8yF.jpg','/files/download/Popup/e2BlX8yF.jpg','/files/download/280','/manage/files/280/delete',NULL,NULL,NULL,NULL,'N','download (1).jpg');
INSERT INTO tagocms.t_file (file_group_seq,order_number,stored_file_name,file_ext,file_size,stored_path,view_url,download_url,delete_url,created_date,created_by,modified_date,modified_by,is_deleted,file_name) VALUES
	 (409,NULL,'gbWCJtJQ.png','png',14606,'D:\\data\\tagocms-dev\\Popup\\409\\gbWCJtJQ.png','/files/download/Popup/gbWCJtJQ.png','/files/download/281','/manage/files/281/delete',NULL,NULL,NULL,NULL,'N','logo.png'),
	 (410,NULL,'Z7gBDFAb.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Banner\\410\\Z7gBDFAb.jpg','/files/download/Banner/Z7gBDFAb.jpg','/files/download/282','/manage/files/282/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (411,NULL,'AaK8qYWW.jpg','jpg',7026,'D:\\data\\tagocms-dev\\Banner\\411\\AaK8qYWW.jpg','/files/download/Banner/AaK8qYWW.jpg','/files/download/283','/manage/files/283/delete',NULL,NULL,NULL,NULL,'N','download.jpg'),
	 (412,NULL,'gx0jVmIL.png','png',32174,'C:\\data\\tagocms-dev\\Admin\\412\\gx0jVmIL.png','/files/download/Admin/gx0jVmIL.png','/files/download/284','/manage/files/284/delete',NULL,NULL,NULL,NULL,'N','3135715.png'),
	 (413,NULL,'DPnwBwol.png','png',32174,'C:\\data\\tagocms-dev\\Admin\\413\\DPnwBwol.png','/files/download/Admin/DPnwBwol.png','/files/download/285','/manage/files/285/delete',NULL,NULL,NULL,NULL,'N','3135715.png'),
	 (414,NULL,'Zzj2fCfl.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Banner\\414\\Zzj2fCfl.jpg','/files/download/Banner/Zzj2fCfl.jpg','/files/download/286','/manage/files/286/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (415,NULL,'AacBGn07.jpg','jpg',7211,'D:\\data\\tagocms-dev\\Banner\\415\\AacBGn07.jpg','/files/download/Banner/AacBGn07.jpg','/files/download/287','/manage/files/287/delete',NULL,NULL,NULL,NULL,'N','download (1).jpg'),
	 (416,NULL,'fFKbStrv.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Banner\\416\\fFKbStrv.jpg','/files/download/Banner/fFKbStrv.jpg','/files/download/288','/manage/files/288/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (417,NULL,'4HfayiRy.jpg','jpg',2969,'D:\\data\\tagocms-dev\\Banner\\417\\4HfayiRy.jpg','/files/download/Banner/4HfayiRy.jpg','/files/download/289','/manage/files/289/delete',NULL,NULL,NULL,NULL,'N','corp.jpg'),
	 (418,NULL,'SLLf8EG1.jpg','jpg',2969,'D:\\data\\tagocms-dev\\Banner\\418\\SLLf8EG1.jpg','/files/download/Banner/SLLf8EG1.jpg','/files/download/290','/manage/files/290/delete',NULL,NULL,NULL,NULL,'N','corp.jpg');
INSERT INTO tagocms.t_file (file_group_seq,order_number,stored_file_name,file_ext,file_size,stored_path,view_url,download_url,delete_url,created_date,created_by,modified_date,modified_by,is_deleted,file_name) VALUES
	 (420,NULL,'UY3DtqDS.jpg','jpg',7211,'D:\\data\\tagocms-dev\\Banner\\420\\UY3DtqDS.jpg','/files/download/Banner/UY3DtqDS.jpg','/files/download/291','/manage/files/291/delete',NULL,NULL,NULL,NULL,'N','download (1).jpg'),
	 (420,NULL,'vLE9iRMN.jpg','jpg',7211,'D:\\data\\tagocms-dev\\Banner\\420\\vLE9iRMN.jpg','/files/download/Banner/vLE9iRMN.jpg','/files/download/292','/manage/files/292/delete',NULL,NULL,NULL,NULL,'N','download (1).jpg'),
	 (420,NULL,'Lh9BVhe6.jpg','jpg',7211,'D:\\data\\tagocms-dev\\Banner\\420\\Lh9BVhe6.jpg','/files/download/Banner/Lh9BVhe6.jpg','/files/download/293','/manage/files/293/delete',NULL,NULL,NULL,NULL,'N','download (1).jpg'),
	 (422,NULL,'Yz9UjnyE.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Banner\\422\\Yz9UjnyE.jpg','/files/download/Banner/Yz9UjnyE.jpg','/files/download/294','/manage/files/294/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (423,NULL,'ZILCGtCW.jpg','jpg',7401,'D:\\data\\tagocms-dev\\Banner\\423\\ZILCGtCW.jpg','/files/download/Banner/ZILCGtCW.jpg','/files/download/295','/manage/files/295/delete',NULL,NULL,NULL,NULL,'N','download (2).jpg'),
	 (422,NULL,'PCCi8hhp.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Banner\\422\\PCCi8hhp.jpg','/files/download/Banner/PCCi8hhp.jpg','/files/download/296','/manage/files/296/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (422,NULL,'JiPLaOUO.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Banner\\422\\JiPLaOUO.jpg','/files/download/Banner/JiPLaOUO.jpg','/files/download/297','/manage/files/297/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (424,NULL,'mGMkBda2.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Banner\\424\\mGMkBda2.jpg','/files/download/Banner/mGMkBda2.jpg','/files/download/298','/manage/files/298/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (425,NULL,'DvhnaZ0t.jpg','jpg',7211,'D:\\data\\tagocms-dev\\Banner\\425\\DvhnaZ0t.jpg','/files/download/Banner/DvhnaZ0t.jpg','/files/download/299','/manage/files/299/delete',NULL,NULL,NULL,NULL,'N','download (1).jpg'),
	 (426,NULL,'s4v6x9z7.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Popup\\426\\s4v6x9z7.jpg','/files/download/Popup/s4v6x9z7.jpg','/files/download/300','/manage/files/300/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg');
INSERT INTO tagocms.t_file (file_group_seq,order_number,stored_file_name,file_ext,file_size,stored_path,view_url,download_url,delete_url,created_date,created_by,modified_date,modified_by,is_deleted,file_name) VALUES
	 (427,NULL,'qSELxo1d.jpg','jpg',7211,'D:\\data\\tagocms-dev\\Popup\\427\\qSELxo1d.jpg','/files/download/Popup/qSELxo1d.jpg','/files/download/301','/manage/files/301/delete',NULL,NULL,NULL,NULL,'N','download (1).jpg'),
	 (428,NULL,'EIimbqeE.png','png',32174,'C:\\data\\tagocms-dev\\Admin\\428\\EIimbqeE.png','/files/download/Admin/EIimbqeE.png','/files/download/302','/manage/files/302/delete',NULL,NULL,NULL,NULL,'N','3135715.png'),
	 (429,NULL,'ajHrsx8b.png','png',32174,'C:\\data\\tagocms-dev\\Admin\\429\\ajHrsx8b.png','/files/download/Admin/ajHrsx8b.png','/files/download/303','/manage/files/303/delete',NULL,NULL,NULL,NULL,'N','3135715.png'),
	 (430,NULL,'VT4le5IG.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Popup\\430\\VT4le5IG.jpg','/files/download/Popup/VT4le5IG.jpg','/files/download/304','/manage/files/304/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (431,NULL,'9z0B9tT0.jpg','jpg',7211,'D:\\data\\tagocms-dev\\Popup\\431\\9z0B9tT0.jpg','/files/download/Popup/9z0B9tT0.jpg','/files/download/305','/manage/files/305/delete',NULL,NULL,NULL,NULL,'N','download (1).jpg'),
	 (432,NULL,'LgDjGNIB.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Popup\\432\\LgDjGNIB.jpg','/files/download/Popup/LgDjGNIB.jpg','/files/download/306','/manage/files/306/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (433,NULL,'OJyHncQx.jpg','jpg',7401,'D:\\data\\tagocms-dev\\Popup\\433\\OJyHncQx.jpg','/files/download/Popup/OJyHncQx.jpg','/files/download/307','/manage/files/307/delete',NULL,NULL,NULL,NULL,'N','download (2).jpg'),
	 (434,NULL,'T9yJ7m4U.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Popup\\434\\T9yJ7m4U.jpg','/files/download/Popup/T9yJ7m4U.jpg','/files/download/308','/manage/files/308/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (435,NULL,'kI78vRcz.jpg','jpg',7026,'D:\\data\\tagocms-dev\\Popup\\435\\kI78vRcz.jpg','/files/download/Popup/kI78vRcz.jpg','/files/download/309','/manage/files/309/delete',NULL,NULL,NULL,NULL,'N','download.jpg'),
	 (436,NULL,'x5gQHdO8.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Popup\\436\\x5gQHdO8.jpg','/files/download/Popup/x5gQHdO8.jpg','/files/download/310','/manage/files/310/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg');
INSERT INTO tagocms.t_file (file_group_seq,order_number,stored_file_name,file_ext,file_size,stored_path,view_url,download_url,delete_url,created_date,created_by,modified_date,modified_by,is_deleted,file_name) VALUES
	 (437,NULL,'QDe38FSh.jpg','jpg',2969,'D:\\data\\tagocms-dev\\Popup\\437\\QDe38FSh.jpg','/files/download/Popup/QDe38FSh.jpg','/files/download/311','/manage/files/311/delete',NULL,NULL,NULL,NULL,'N','corp.jpg'),
	 (438,NULL,'BP24YeJo.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Popup\\438\\BP24YeJo.jpg','/files/download/Popup/BP24YeJo.jpg','/files/download/312','/manage/files/312/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (439,NULL,'Jl1AJJyd.jpg','jpg',7026,'D:\\data\\tagocms-dev\\Popup\\439\\Jl1AJJyd.jpg','/files/download/Popup/Jl1AJJyd.jpg','/files/download/313','/manage/files/313/delete',NULL,NULL,NULL,NULL,'N','download.jpg'),
	 (424,NULL,'jEyIR1iG.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Banner\\424\\jEyIR1iG.jpg','/files/download/Banner/jEyIR1iG.jpg','/files/download/314','/manage/files/314/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (440,NULL,'Xd6Exk6C.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Notice\\440\\Xd6Exk6C.jpg','/files/download/Notice/Xd6Exk6C.jpg','/files/download/316','/manage/files/316/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (441,NULL,'qcXG7iTN.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Notice\\441\\qcXG7iTN.jpg','/files/download/Notice/qcXG7iTN.jpg','/files/download/317','/manage/files/317/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (442,NULL,'pkUjlmaE.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Notice\\442\\pkUjlmaE.jpg','/files/download/Notice/pkUjlmaE.jpg','/files/download/318','/manage/files/318/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (443,NULL,'hXmBEvRu.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Notice\\443\\hXmBEvRu.jpg','/files/download/Notice/hXmBEvRu.jpg','/files/download/319','/manage/files/319/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (444,NULL,'ZwBWPuSw.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Notice\\444\\ZwBWPuSw.jpg','/files/download/Notice/ZwBWPuSw.jpg','/files/download/320','/manage/files/320/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (445,NULL,'vmdPf83z.jpg','jpg',2969,'D:\\data\\tagocms-dev\\Notice\\445\\vmdPf83z.jpg','/files/download/Notice/vmdPf83z.jpg','/files/download/321','/manage/files/321/delete',NULL,NULL,NULL,NULL,'N','corp.jpg');
INSERT INTO tagocms.t_file (file_group_seq,order_number,stored_file_name,file_ext,file_size,stored_path,view_url,download_url,delete_url,created_date,created_by,modified_date,modified_by,is_deleted,file_name) VALUES
	 (446,NULL,'yRbbDAj0.png','png',1043549,'C:\\data\\tagocms-dev\\User\\446\\yRbbDAj0.png','/files/download/User/yRbbDAj0.png','/files/download/322','/manage/files/322/delete',NULL,NULL,NULL,NULL,'N','Tech.png'),
	 (448,NULL,'5lK2I9Fz.png','png',32174,'C:\\data\\tagocms-dev\\User\\448\\5lK2I9Fz.png','/files/download/User/5lK2I9Fz.png','/files/download/324','/manage/files/324/delete',NULL,NULL,NULL,NULL,'N','3135715.png'),
	 (449,NULL,'3pM3P9Ul.jpg','jpg',7211,'D:\\data\\tagocms-dev\\Notice\\449\\3pM3P9Ul.jpg','/files/download/Notice/3pM3P9Ul.jpg','/files/download/325','/manage/files/325/delete',NULL,NULL,NULL,NULL,'N','download (1).jpg'),
	 (450,NULL,'WSpPTiZ8.png','png',32174,'C:\\data\\tagocms-dev\\User\\450\\WSpPTiZ8.png','/files/download/User/WSpPTiZ8.png','/files/download/326','/manage/files/326/delete',NULL,NULL,NULL,NULL,'N','3135715.png'),
	 (451,NULL,'tHwnKYlh.jpg','jpg',7401,'D:\\data\\tagocms-dev\\Notice\\451\\tHwnKYlh.jpg','/files/download/Notice/tHwnKYlh.jpg','/files/download/327','/manage/files/327/delete',NULL,NULL,NULL,NULL,'N','download (2).jpg'),
	 (452,NULL,'jli3hPl8.jpg','jpg',7401,'D:\\data\\tagocms-dev\\Notice\\452\\jli3hPl8.jpg','/files/download/Notice/jli3hPl8.jpg','/files/download/329','/manage/files/329/delete',NULL,NULL,NULL,NULL,'N','download (2).jpg'),
	 (453,NULL,'UIKdFoOU.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Notice\\453\\UIKdFoOU.jpg','/files/download/Notice/UIKdFoOU.jpg','/files/download/330','/manage/files/330/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (455,NULL,'aZJIZeRx.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Banner\\455\\aZJIZeRx.jpg','/files/download/Banner/aZJIZeRx.jpg','/files/download/331','/manage/files/331/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (457,NULL,'0NnzUZCr.jpg','jpg',2969,'D:\\data\\tagocms-dev\\Notice\\457\\0NnzUZCr.jpg','/files/download/Notice/0NnzUZCr.jpg','/files/download/332','/manage/files/332/delete',NULL,NULL,NULL,NULL,'N','corp.jpg'),
	 (460,NULL,'zqo4fUgy.jpg','jpg',7026,'D:\\data\\tagocms-dev\\Notice\\460\\zqo4fUgy.jpg','/files/download/Notice/zqo4fUgy.jpg','/files/download/333','/manage/files/333/delete',NULL,NULL,NULL,NULL,'N','download.jpg');
INSERT INTO tagocms.t_file (file_group_seq,order_number,stored_file_name,file_ext,file_size,stored_path,view_url,download_url,delete_url,created_date,created_by,modified_date,modified_by,is_deleted,file_name) VALUES
	 (461,NULL,'oaOUyhWv.png','png',32174,'C:\\data\\tagocms-dev\\User\\461\\oaOUyhWv.png','/files/download/User/oaOUyhWv.png','/files/download/334','/manage/files/334/delete',NULL,NULL,NULL,NULL,'N','3135715.png'),
	 (462,NULL,'RMuPHqR5.png','png',32174,'C:\\data\\tagocms-dev\\User\\462\\RMuPHqR5.png','/files/download/User/RMuPHqR5.png','/files/download/335','/manage/files/335/delete',NULL,NULL,NULL,NULL,'N','3135715.png'),
	 (463,NULL,'8zVnwLkI.jpg','jpg',167285,'D:\\data\\tagocms-dev\\FAQ\\463\\8zVnwLkI.jpg','/files/download/FAQ/8zVnwLkI.jpg','/files/download/336','/manage/files/336/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (464,NULL,'jfrcyNJw.jpg','jpg',7401,'D:\\data\\tagocms-dev\\FAQ\\464\\jfrcyNJw.jpg','/files/download/FAQ/jfrcyNJw.jpg','/files/download/337','/manage/files/337/delete',NULL,NULL,NULL,NULL,'N','download (2).jpg'),
	 (466,NULL,'anFFOe1Z.png','png',32174,'C:\\data\\tagocms-dev\\User\\466\\anFFOe1Z.png','/files/download/User/anFFOe1Z.png','/files/download/338','/manage/files/338/delete',NULL,NULL,NULL,NULL,'N','3135715.png'),
	 (467,NULL,'kIuAyygU.png','png',32174,'C:\\data\\tagocms-dev\\User\\467\\kIuAyygU.png','/files/download/User/kIuAyygU.png','/files/download/339','/manage/files/339/delete',NULL,NULL,NULL,NULL,'N','3135715.png'),
	 (468,NULL,'pmAeuBwt.png','png',32174,'C:\\data\\tagocms-dev\\User\\468\\pmAeuBwt.png','/files/download/User/pmAeuBwt.png','/files/download/342','/manage/files/342/delete',NULL,NULL,NULL,NULL,'N','3135715.png'),
	 (469,NULL,'vHdwDZ0f.png','png',32174,'C:\\data\\tagocms-dev\\User\\469\\vHdwDZ0f.png','/files/download/User/vHdwDZ0f.png','/files/download/343','/manage/files/343/delete',NULL,NULL,NULL,NULL,'N','3135715.png'),
	 (473,NULL,'lvy6Mr0C.png','png',32174,'C:\\data\\tagocms-dev\\User\\473\\lvy6Mr0C.png','/files/download/User/lvy6Mr0C.png','/files/download/344','/manage/files/344/delete',NULL,NULL,NULL,NULL,'N','3135715.png'),
	 (476,NULL,'pqHWHNhT.png','png',32174,'C:\\data\\tagocms-dev\\User\\476\\pqHWHNhT.png','/files/download/User/pqHWHNhT.png','/files/download/345','/manage/files/345/delete',NULL,NULL,NULL,NULL,'N','3135715.png');
INSERT INTO tagocms.t_file (file_group_seq,order_number,stored_file_name,file_ext,file_size,stored_path,view_url,download_url,delete_url,created_date,created_by,modified_date,modified_by,is_deleted,file_name) VALUES
	 (413,NULL,'zEDCoX6W.png','png',32174,'C:\\data\\tagocms-dev\\Admin\\413\\zEDCoX6W.png','/files/download/Admin/zEDCoX6W.png','/files/download/346','/manage/files/346/delete',NULL,NULL,NULL,NULL,'N','3135715.png'),
	 (429,NULL,'1hCXTafK.png','png',6696963,'C:\\data\\tagocms-dev\\Admin\\429\\1hCXTafK.png','/files/download/Admin/1hCXTafK.png','/files/download/347','/manage/files/347/delete',NULL,NULL,NULL,NULL,'N','Smartphone.png'),
	 (429,NULL,'KeqUdqNp.png','png',6696963,'C:\\data\\tagocms-dev\\Admin\\429\\KeqUdqNp.png','/files/download/Admin/KeqUdqNp.png','/files/download/348','/manage/files/348/delete',NULL,NULL,NULL,NULL,'N','Smartphone.png'),
	 (477,NULL,'KqcS80S1.jpg','jpg',167285,'D:\\data\\tagocms-dev\\FAQ\\477\\KqcS80S1.jpg','/files/download/FAQ/KqcS80S1.jpg','/files/download/350','/manage/files/350/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (478,NULL,'GUdaz8sf.png','png',32174,'C:\\data\\tagocms-dev\\User\\478\\GUdaz8sf.png','/files/download/User/GUdaz8sf.png','/files/download/351','/manage/files/351/delete',NULL,NULL,NULL,NULL,'N','3135715.png'),
	 (479,NULL,'aVyfjQCf.png','png',32174,'C:\\data\\tagocms-dev\\User\\479\\aVyfjQCf.png','/files/download/User/aVyfjQCf.png','/files/download/352','/manage/files/352/delete',NULL,NULL,NULL,NULL,'N','3135715.png'),
	 (480,NULL,'m6j6SEap.png','png',32174,'C:\\data\\tagocms-dev\\User\\480\\m6j6SEap.png','/files/download/User/m6j6SEap.png','/files/download/353','/manage/files/353/delete',NULL,NULL,NULL,NULL,'N','3135715.png'),
	 (481,NULL,'Oo8O9GAE.jpg','jpg',167285,'D:\\data\\tagocms-dev\\FAQ\\481\\Oo8O9GAE.jpg','/files/download/FAQ/Oo8O9GAE.jpg','/files/download/354','/manage/files/354/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (482,NULL,'9gf3hxGM.jpg','jpg',167285,'D:\\data\\tagocms-dev\\FAQ\\482\\9gf3hxGM.jpg','/files/download/FAQ/9gf3hxGM.jpg','/files/download/356','/manage/files/356/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (483,NULL,'MZiDE1QP.jpg','jpg',167285,'D:\\data\\tagocms-dev\\FAQ\\483\\MZiDE1QP.jpg','/files/download/FAQ/MZiDE1QP.jpg','/files/download/357','/manage/files/357/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg');
INSERT INTO tagocms.t_file (file_group_seq,order_number,stored_file_name,file_ext,file_size,stored_path,view_url,download_url,delete_url,created_date,created_by,modified_date,modified_by,is_deleted,file_name) VALUES
	 (485,NULL,'MT6g6xiQ.jpg','jpg',167285,'D:\\data\\tagocms-dev\\FAQ\\485\\MT6g6xiQ.jpg','/files/download/FAQ/MT6g6xiQ.jpg','/files/download/358','/manage/files/358/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (486,NULL,'MHwLyf98.jpg','jpg',167285,'D:\\data\\tagocms-dev\\FAQ\\486\\MHwLyf98.jpg','/files/download/FAQ/MHwLyf98.jpg','/files/download/359','/manage/files/359/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (487,NULL,'AzhPv5pQ.jpg','jpg',167285,'D:\\data\\tagocms-dev\\FAQ\\487\\AzhPv5pQ.jpg','/files/download/FAQ/AzhPv5pQ.jpg','/files/download/360','/manage/files/360/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (487,NULL,'AzhPv5pQ.jpg','jpg',167285,'D:data	agocms-devFAQ487AzhPv5pQ.jpg','/files/download/FAQ/AzhPv5pQ.jpg',NULL,NULL,NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (487,NULL,'AzhPv5pQ.jpg','jpg',167285,'D:data	agocms-devFAQ487AzhPv5pQ.jpg','/files/download/FAQ/AzhPv5pQ.jpg',NULL,NULL,NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (488,NULL,'GL9poRRP.jpg','jpg',167285,'D:\\data\\tagocms-dev\\FAQ\\488\\GL9poRRP.jpg','/files/download/FAQ/GL9poRRP.jpg','/files/download/363','/manage/files/363/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (491,NULL,'vDUs4jeV.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Notice\\491\\vDUs4jeV.jpg','/files/download/Notice/vDUs4jeV.jpg','/files/download/364','/manage/files/364/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (493,NULL,'E6x36jtp.jpg','jpg',167285,'D:\\data\\tagocms-dev\\FAQ\\493\\E6x36jtp.jpg','/files/download/FAQ/E6x36jtp.jpg','/files/download/365','/manage/files/365/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (494,NULL,'yJZTsRZI.jpg','jpg',167285,'D:\\data\\tagocms-dev\\FAQ\\494\\yJZTsRZI.jpg','/files/download/FAQ/yJZTsRZI.jpg','/files/download/366','/manage/files/366/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (495,NULL,'SBNqaRGD.jpg','jpg',167285,'D:\\data\\tagocms-dev\\FAQ\\495\\SBNqaRGD.jpg','/files/download/FAQ/SBNqaRGD.jpg','/files/download/367','/manage/files/367/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg');
INSERT INTO tagocms.t_file (file_group_seq,order_number,stored_file_name,file_ext,file_size,stored_path,view_url,download_url,delete_url,created_date,created_by,modified_date,modified_by,is_deleted,file_name) VALUES
	 (496,NULL,'cvumU0qE.jpg','jpg',167285,'D:\\data\\tagocms-dev\\FAQ\\496\\cvumU0qE.jpg','/files/download/FAQ/cvumU0qE.jpg','/files/download/368','/manage/files/368/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (497,NULL,'Y5jHMNV5.jpg','jpg',167285,'D:\\data\\tagocms-dev\\FAQ\\497\\Y5jHMNV5.jpg','/files/download/FAQ/Y5jHMNV5.jpg','/files/download/369','/manage/files/369/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (499,NULL,'jI5teoGU.jpg','jpg',167285,'D:\\data\\tagocms-dev\\FAQ\\499\\jI5teoGU.jpg','/files/download/FAQ/jI5teoGU.jpg','/files/download/370','/manage/files/370/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (500,NULL,'5fVUEbMb.jpg','jpg',167285,'D:\\data\\tagocms-dev\\FAQ\\500\\5fVUEbMb.jpg','/files/download/FAQ/5fVUEbMb.jpg','/files/download/371','/manage/files/371/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (502,NULL,'oVkY4yu7.jpg','jpg',167285,'D:\\data\\tagocms-dev\\FAQ\\502\\oVkY4yu7.jpg','/files/download/FAQ/oVkY4yu7.jpg','/files/download/376','/manage/files/376/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (368,NULL,'VPlov643.jpg','jpg',7211,'D:\\data\\tagocms-dev\\Banner\\368\\VPlov643.jpg','/files/download/Banner/VPlov643.jpg','/files/download/377','/manage/files/377/delete',NULL,NULL,NULL,NULL,'N','download (1).jpg'),
	 (506,NULL,'2bR8CCsZ.jpg','jpg',167285,'D:\\data\\tagocms-dev\\FAQ\\506\\2bR8CCsZ.jpg','/files/download/FAQ/2bR8CCsZ.jpg','/files/download/378','/manage/files/378/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (507,NULL,'eC04viwp.jpg','jpg',167285,'D:\\data\\tagocms-dev\\FAQ\\507\\eC04viwp.jpg','/files/download/FAQ/eC04viwp.jpg','/files/download/379','/manage/files/379/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (508,NULL,'usNIr261.jpg','jpg',167285,'D:\\data\\tagocms-dev\\FAQ\\508\\usNIr261.jpg','/files/download/FAQ/usNIr261.jpg','/files/download/380','/manage/files/380/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (509,NULL,'GIDFMAa5.jpg','jpg',167285,'D:\\data\\tagocms-dev\\FAQ\\509\\GIDFMAa5.jpg','/files/download/FAQ/GIDFMAa5.jpg','/files/download/381','/manage/files/381/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg');
INSERT INTO tagocms.t_file (file_group_seq,order_number,stored_file_name,file_ext,file_size,stored_path,view_url,download_url,delete_url,created_date,created_by,modified_date,modified_by,is_deleted,file_name) VALUES
	 (529,NULL,'MU8odZ7A.png','png',32174,'C:\\data\\tagocms-dev\\User\\529\\MU8odZ7A.png','/files/download/User/MU8odZ7A.png','/files/download/382','/manage/files/382/delete',NULL,NULL,NULL,NULL,'N','3135715.png'),
	 (534,NULL,'wWKIoR6D.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Banner\\534\\wWKIoR6D.jpg','/files/download/Banner/wWKIoR6D.jpg','/files/download/383','/manage/files/383/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (535,NULL,'smd0d8t6.jpg','jpg',7401,'D:\\data\\tagocms-dev\\Banner\\535\\smd0d8t6.jpg','/files/download/Banner/smd0d8t6.jpg','/files/download/384','/manage/files/384/delete',NULL,NULL,NULL,NULL,'N','download (2).jpg'),
	 (536,NULL,'pbk5SwnI.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Popup\\536\\pbk5SwnI.jpg','/files/download/Popup/pbk5SwnI.jpg','/files/download/385','/manage/files/385/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (537,NULL,'cjmuBW3E.jpg','jpg',7026,'D:\\data\\tagocms-dev\\Popup\\537\\cjmuBW3E.jpg','/files/download/Popup/cjmuBW3E.jpg','/files/download/386','/manage/files/386/delete',NULL,NULL,NULL,NULL,'N','download.jpg'),
	 (538,NULL,'olNrspIz.pdf','pdf',2604409,'D:\\data\\tagocms-dev\\QNA\\538\\olNrspIz.pdf','/files/download/QNA/olNrspIz.pdf','/files/download/387','/manage/files/387/delete',NULL,NULL,NULL,NULL,'N','Java_Level_1_Page_1.pdf'),
	 (539,NULL,'LINjlkBQ.pdf','pdf',2604409,'D:\\data\\tagocms-dev\\QNA\\539\\LINjlkBQ.pdf','/files/download/QNA/LINjlkBQ.pdf','/files/download/388','/manage/files/388/delete',NULL,NULL,NULL,NULL,'N','Java_Level_1_Page_1.pdf'),
	 (540,NULL,'2mrSH2jP.png','png',1505355,'D:\\data\\tagocms-dev\\Banner\\540\\2mrSH2jP.png','/files/download/Banner/2mrSH2jP.png','/files/download/389','/manage/files/389/delete',NULL,NULL,NULL,NULL,'N','화면 캡처 2023-04-03 183128.png'),
	 (541,NULL,'qamrnwjy.png','png',825724,'D:\\data\\tagocms-dev\\Banner\\541\\qamrnwjy.png','/files/download/Banner/qamrnwjy.png','/files/download/390','/manage/files/390/delete',NULL,NULL,NULL,NULL,'N','프로젝트 테스트 화면.png'),
	 (542,NULL,'Mu6eJGvy.png','png',1505355,'D:\\data\\tagocms-dev\\Popup\\542\\Mu6eJGvy.png','/files/download/Popup/Mu6eJGvy.png','/files/download/391','/manage/files/391/delete',NULL,NULL,NULL,NULL,'N','화면 캡처 2023-04-03 183128.png');
INSERT INTO tagocms.t_file (file_group_seq,order_number,stored_file_name,file_ext,file_size,stored_path,view_url,download_url,delete_url,created_date,created_by,modified_date,modified_by,is_deleted,file_name) VALUES
	 (543,NULL,'fRMagJqF.png','png',1505355,'D:\\data\\tagocms-dev\\Popup\\543\\fRMagJqF.png','/files/download/Popup/fRMagJqF.png','/files/download/392','/manage/files/392/delete',NULL,NULL,NULL,NULL,'N','화면 캡처 2023-04-03 183128.png'),
	 (540,NULL,'nGJPn7z5.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Banner\\540\\nGJPn7z5.jpg','/files/download/Banner/nGJPn7z5.jpg','/files/download/393','/manage/files/393/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (540,NULL,'oME92PoQ.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Banner\\540\\oME92PoQ.jpg','/files/download/Banner/oME92PoQ.jpg','/files/download/394','/manage/files/394/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (546,NULL,'Rzl9e3DO.png','png',5012221,'C:\\data\\tagocms-dev\\ContentSettings\\546\\Rzl9e3DO.png','/files/download/ContentSettings/Rzl9e3DO.png','/files/download/395','/manage/files/395/delete',NULL,NULL,NULL,NULL,'N','Unleash the Beast PNG.png'),
	 (540,NULL,'uCS0IRx2.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Banner\\540\\uCS0IRx2.jpg','/files/download/Banner/uCS0IRx2.jpg','/files/download/396','/manage/files/396/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (549,NULL,'GMQzR90d.jpg','jpg',2969,'D:\\data\\tagocms-dev\\Popup\\549\\GMQzR90d.jpg','/files/download/Popup/GMQzR90d.jpg','/files/download/397','/manage/files/397/delete',NULL,NULL,NULL,NULL,'N','corp.jpg'),
	 (550,NULL,'7JvTaGBD.jpg','jpg',7401,'D:\\data\\tagocms-dev\\Popup\\550\\7JvTaGBD.jpg','/files/download/Popup/7JvTaGBD.jpg','/files/download/398','/manage/files/398/delete',NULL,NULL,NULL,NULL,'N','download (2).jpg'),
	 (551,NULL,'nRR3C2Gd.jpg','jpg',7026,'D:\\data\\tagocms-dev\\Popup\\551\\nRR3C2Gd.jpg','/files/download/Popup/nRR3C2Gd.jpg','/files/download/399','/manage/files/399/delete',NULL,NULL,NULL,NULL,'N','download.jpg'),
	 (552,NULL,'a901EUxu.jpg','jpg',2969,'D:\\data\\tagocms-dev\\Popup\\552\\a901EUxu.jpg','/files/download/Popup/a901EUxu.jpg','/files/download/400','/manage/files/400/delete',NULL,NULL,NULL,NULL,'N','corp.jpg'),
	 (553,NULL,'QcjKMWQ4.jpg','jpg',2969,'D:\\data\\tagocms-dev\\Banner\\553\\QcjKMWQ4.jpg','/files/download/Banner/QcjKMWQ4.jpg','/files/download/401','/manage/files/401/delete',NULL,NULL,NULL,NULL,'N','corp.jpg');
INSERT INTO tagocms.t_file (file_group_seq,order_number,stored_file_name,file_ext,file_size,stored_path,view_url,download_url,delete_url,created_date,created_by,modified_date,modified_by,is_deleted,file_name) VALUES
	 (555,NULL,'h1irERkY.png','png',6696963,'C:\\data\\tagocms-dev\\Popup\\555\\h1irERkY.png','/files/download/Popup/h1irERkY.png','/files/download/402','/manage/files/402/delete',NULL,NULL,NULL,NULL,'N','Smartphone.png'),
	 (556,NULL,'ecFJjoes.png','png',13449273,'C:\\data\\tagocms-dev\\Popup\\556\\ecFJjoes.png','/files/download/Popup/ecFJjoes.png','/files/download/403','/manage/files/403/delete',NULL,NULL,NULL,NULL,'N','Z-BONUS.png'),
	 (553,NULL,'ja8VlndB.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Banner\\553\\ja8VlndB.jpg','/files/download/Banner/ja8VlndB.jpg','/files/download/404','/manage/files/404/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (557,NULL,'n0jXfbTY.png','png',2944280,'C:\\data\\tagocms-dev\\Popup\\557\\n0jXfbTY.png','/files/download/Popup/n0jXfbTY.png','/files/download/405','/manage/files/405/delete',NULL,NULL,NULL,NULL,'N','Reactor.png'),
	 (558,NULL,'f4g8z45Z.png','png',13449273,'C:\\data\\tagocms-dev\\Popup\\558\\f4g8z45Z.png','/files/download/Popup/f4g8z45Z.png','/files/download/406','/manage/files/406/delete',NULL,NULL,NULL,NULL,'N','Z-BONUS.png'),
	 (559,NULL,'ZIqWl2JO.jpg','jpg',2969,'D:\\data\\tagocms-dev\\Banner\\559\\ZIqWl2JO.jpg','/files/download/Banner/ZIqWl2JO.jpg','/files/download/407','/manage/files/407/delete',NULL,NULL,NULL,NULL,'N','corp.jpg'),
	 (560,NULL,'tgPwkoBw.jpg','jpg',7026,'D:\\data\\tagocms-dev\\Banner\\560\\tgPwkoBw.jpg','/files/download/Banner/tgPwkoBw.jpg','/files/download/408','/manage/files/408/delete',NULL,NULL,NULL,NULL,'N','download.jpg'),
	 (561,NULL,'Glp1V04I.jpg','jpg',2969,'D:\\data\\tagocms-dev\\Popup\\561\\Glp1V04I.jpg','/files/download/Popup/Glp1V04I.jpg','/files/download/409','/manage/files/409/delete',NULL,NULL,NULL,NULL,'N','corp.jpg'),
	 (562,NULL,'Bbn4vdXp.jpg','jpg',7026,'D:\\data\\tagocms-dev\\Popup\\562\\Bbn4vdXp.jpg','/files/download/Popup/Bbn4vdXp.jpg','/files/download/410','/manage/files/410/delete',NULL,NULL,NULL,NULL,'N','download.jpg'),
	 (563,NULL,'m74AQLgs.jpg','jpg',2969,'D:\\data\\tagocms-dev\\Popup\\563\\m74AQLgs.jpg','/files/download/Popup/m74AQLgs.jpg','/files/download/411','/manage/files/411/delete',NULL,NULL,NULL,NULL,'N','corp.jpg');
INSERT INTO tagocms.t_file (file_group_seq,order_number,stored_file_name,file_ext,file_size,stored_path,view_url,download_url,delete_url,created_date,created_by,modified_date,modified_by,is_deleted,file_name) VALUES
	 (566,NULL,'RGwyc7TO.jpg','jpg',7211,'D:\\data\\tagocms-dev\\Popup\\566\\RGwyc7TO.jpg','/files/download/Popup/RGwyc7TO.jpg','/files/download/412','/manage/files/412/delete',NULL,NULL,NULL,NULL,'N','download (1).jpg'),
	 (571,NULL,'oF6zGS8L.png','png',32174,'C:\\data\\tagocms-dev\\User\\571\\oF6zGS8L.png','/files/download/User/oF6zGS8L.png','/files/download/413','/manage/files/413/delete',NULL,NULL,NULL,NULL,'N','3135715.png'),
	 (572,NULL,'BgG669eJ.png','png',32174,'C:\\data\\tagocms-dev\\User\\572\\BgG669eJ.png','/files/download/User/BgG669eJ.png','/files/download/414','/manage/files/414/delete',NULL,NULL,NULL,NULL,'N','3135715.png'),
	 (573,NULL,'MMT0isQp.png','png',4707595,'C:\\data\\tagocms-dev\\Popup\\573\\MMT0isQp.png','/files/download/Popup/MMT0isQp.png','/files/download/415','/manage/files/415/delete',NULL,NULL,NULL,NULL,'N','Origin.png'),
	 (574,NULL,'oh0B0eX4.png','png',13449273,'C:\\data\\tagocms-dev\\Popup\\574\\oh0B0eX4.png','/files/download/Popup/oh0B0eX4.png','/files/download/416','/manage/files/416/delete',NULL,NULL,NULL,NULL,'N','Z-BONUS.png'),
	 (575,NULL,'7etwOFpp.png','png',5734822,'C:\\data\\tagocms-dev\\Popup\\575\\7etwOFpp.png','/files/download/Popup/7etwOFpp.png','/files/download/417','/manage/files/417/delete',NULL,NULL,NULL,NULL,'N','HT.png'),
	 (576,NULL,'N0qJPH4c.png','png',3439152,'C:\\data\\tagocms-dev\\Popup\\576\\N0qJPH4c.png','/files/download/Popup/N0qJPH4c.png','/files/download/418','/manage/files/418/delete',NULL,NULL,NULL,NULL,'N','Fade.png'),
	 (577,NULL,'tQG0xDOh.jpg','jpg',7211,'D:\\data\\tagocms-dev\\Popup\\577\\tQG0xDOh.jpg','/files/download/Popup/tQG0xDOh.jpg','/files/download/419','/manage/files/419/delete',NULL,NULL,NULL,NULL,'N','download (1).jpg'),
	 (578,NULL,'TRkieRth.jpg','jpg',2969,'D:\\data\\tagocms-dev\\Popup\\578\\TRkieRth.jpg','/files/download/Popup/TRkieRth.jpg','/files/download/420','/manage/files/420/delete',NULL,NULL,NULL,NULL,'N','corp.jpg'),
	 (581,NULL,'ulPmltb1.png','png',7180,'D:\\data\\tagocms-dev\\Popup\\581\\ulPmltb1.png','/files/download/Popup/ulPmltb1.png','/files/download/421','/manage/files/421/delete',NULL,NULL,NULL,NULL,'N','20210723094837393015.png');
INSERT INTO tagocms.t_file (file_group_seq,order_number,stored_file_name,file_ext,file_size,stored_path,view_url,download_url,delete_url,created_date,created_by,modified_date,modified_by,is_deleted,file_name) VALUES
	 (582,NULL,'W5pbWPPE.jpg','jpg',7026,'D:\\data\\tagocms-dev\\Popup\\582\\W5pbWPPE.jpg','/files/download/Popup/W5pbWPPE.jpg','/files/download/422','/manage/files/422/delete',NULL,NULL,NULL,NULL,'N','download.jpg'),
	 (583,NULL,'mE5obHC9.png','png',4195579,'C:\\data\\tagocms-dev\\Popup\\583\\mE5obHC9.png','/files/download/Popup/mE5obHC9.png','/files/download/423','/manage/files/423/delete',NULL,NULL,NULL,NULL,'N','Wave.png'),
	 (584,NULL,'8vtTRy5X.png','png',13449273,'C:\\data\\tagocms-dev\\Popup\\584\\8vtTRy5X.png','/files/download/Popup/8vtTRy5X.png','/files/download/424','/manage/files/424/delete',NULL,NULL,NULL,NULL,'N','Z-BONUS.png'),
	 (585,NULL,'MAAbNrIn.png','png',5012221,'C:\\data\\tagocms-dev\\Popup\\585\\MAAbNrIn.png','/files/download/Popup/MAAbNrIn.png','/files/download/425','/manage/files/425/delete',NULL,NULL,NULL,NULL,'N','Unleash the Beast PNG.png'),
	 (586,NULL,'p3o9shIp.png','png',13449273,'C:\\data\\tagocms-dev\\Popup\\586\\p3o9shIp.png','/files/download/Popup/p3o9shIp.png','/files/download/426','/manage/files/426/delete',NULL,NULL,NULL,NULL,'N','Z-BONUS.png'),
	 (587,NULL,'232WjdGq.png','png',4707595,'C:\\data\\tagocms-dev\\Popup\\587\\232WjdGq.png','/files/download/Popup/232WjdGq.png','/files/download/427','/manage/files/427/delete',NULL,NULL,NULL,NULL,'N','Origin.png'),
	 (588,NULL,'NMWJuT0H.png','png',13449273,'C:\\data\\tagocms-dev\\Popup\\588\\NMWJuT0H.png','/files/download/Popup/NMWJuT0H.png','/files/download/428','/manage/files/428/delete',NULL,NULL,NULL,NULL,'N','Z-BONUS.png'),
	 (589,NULL,'8RV3Udp5.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Banner\\589\\8RV3Udp5.jpg','/files/download/Banner/8RV3Udp5.jpg','/files/download/429','/manage/files/429/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (590,NULL,'G35xk8ZI.jpg','jpg',2969,'D:\\data\\tagocms-dev\\Banner\\590\\G35xk8ZI.jpg','/files/download/Banner/G35xk8ZI.jpg','/files/download/430','/manage/files/430/delete',NULL,NULL,NULL,NULL,'N','corp.jpg'),
	 (591,NULL,'xRCAkNEK.png','png',6696963,'/data/tagocms-staging/Popup/591/xRCAkNEK.png','/files/download/Popup/xRCAkNEK.png','/files/download/431','/manage/files/431/delete',NULL,NULL,NULL,NULL,'N','Smartphone.png');
INSERT INTO tagocms.t_file (file_group_seq,order_number,stored_file_name,file_ext,file_size,stored_path,view_url,download_url,delete_url,created_date,created_by,modified_date,modified_by,is_deleted,file_name) VALUES
	 (592,NULL,'ynpevSZj.png','png',13449273,'/data/tagocms-staging/Popup/592/ynpevSZj.png','/files/download/Popup/ynpevSZj.png','/files/download/432','/manage/files/432/delete',NULL,NULL,NULL,NULL,'N','Z-BONUS.png'),
	 (593,NULL,'cXMyQmhm.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Banner\\593\\cXMyQmhm.jpg','/files/download/Banner/cXMyQmhm.jpg','/files/download/433','/manage/files/433/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (594,NULL,'w3Lz6Rm2.jpg','jpg',7211,'D:\\data\\tagocms-dev\\Banner\\594\\w3Lz6Rm2.jpg','/files/download/Banner/w3Lz6Rm2.jpg','/files/download/434','/manage/files/434/delete',NULL,NULL,NULL,NULL,'N','download (1).jpg'),
	 (595,NULL,'3eBSI4ZM.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Banner\\595\\3eBSI4ZM.jpg','/files/download/Banner/3eBSI4ZM.jpg','/files/download/435','/manage/files/435/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (596,NULL,'vuR6A2fH.jpg','jpg',7211,'D:\\data\\tagocms-dev\\Banner\\596\\vuR6A2fH.jpg','/files/download/Banner/vuR6A2fH.jpg','/files/download/436','/manage/files/436/delete',NULL,NULL,NULL,NULL,'N','download (1).jpg'),
	 (597,NULL,'EKpRnmLn.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Popup\\597\\EKpRnmLn.jpg','/files/download/Popup/EKpRnmLn.jpg','/files/download/437','/manage/files/437/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (598,NULL,'oZ53fwUD.jpg','jpg',7401,'D:\\data\\tagocms-dev\\Popup\\598\\oZ53fwUD.jpg','/files/download/Popup/oZ53fwUD.jpg','/files/download/438','/manage/files/438/delete',NULL,NULL,NULL,NULL,'N','download (2).jpg'),
	 (599,NULL,'KF53ZHlX.png','png',14606,'D:\\data\\tagocms-dev\\ContentSettings\\599\\KF53ZHlX.png','/files/download/ContentSettings/KF53ZHlX.png','/files/download/439','/manage/files/439/delete',NULL,NULL,NULL,NULL,'N','logo.png'),
	 (600,NULL,'bdrZMeIy.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Popup\\600\\bdrZMeIy.jpg','/files/download/Popup/bdrZMeIy.jpg','/files/download/440','/manage/files/440/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (601,NULL,'htVVNBfX.jpg','jpg',7026,'D:\\data\\tagocms-dev\\Popup\\601\\htVVNBfX.jpg','/files/download/Popup/htVVNBfX.jpg','/files/download/441','/manage/files/441/delete',NULL,NULL,NULL,NULL,'N','download.jpg');
INSERT INTO tagocms.t_file (file_group_seq,order_number,stored_file_name,file_ext,file_size,stored_path,view_url,download_url,delete_url,created_date,created_by,modified_date,modified_by,is_deleted,file_name) VALUES
	 (602,NULL,'LYgNhHPC.jpg','jpg',7026,'D:\\data\\tagocms-dev\\Popup\\602\\LYgNhHPC.jpg','/files/download/Popup/LYgNhHPC.jpg','/files/download/442','/manage/files/442/delete',NULL,NULL,NULL,NULL,'N','download.jpg'),
	 (603,NULL,'amk7ehJ7.jpg','jpg',7401,'D:\\data\\tagocms-dev\\Popup\\603\\amk7ehJ7.jpg','/files/download/Popup/amk7ehJ7.jpg','/files/download/443','/manage/files/443/delete',NULL,NULL,NULL,NULL,'N','download (2).jpg'),
	 (604,NULL,'qAzbiXkI.png','png',14606,'D:\\data\\tagocms-dev\\Popup\\604\\qAzbiXkI.png','/files/download/Popup/qAzbiXkI.png','/files/download/444','/manage/files/444/delete',NULL,NULL,NULL,NULL,'N','logo.png'),
	 (605,NULL,'7KRQttyS.jpg','jpg',7026,'D:\\data\\tagocms-dev\\Popup\\605\\7KRQttyS.jpg','/files/download/Popup/7KRQttyS.jpg','/files/download/445','/manage/files/445/delete',NULL,NULL,NULL,NULL,'N','download.jpg'),
	 (606,NULL,'FaRXgVT5.jpg','jpg',7401,'D:\\data\\tagocms-dev\\Popup\\606\\FaRXgVT5.jpg','/files/download/Popup/FaRXgVT5.jpg','/files/download/446','/manage/files/446/delete',NULL,NULL,NULL,NULL,'N','download (2).jpg'),
	 (607,NULL,'eimalRz4.jpg','jpg',7026,'D:\\data\\tagocms-dev\\Popup\\607\\eimalRz4.jpg','/files/download/Popup/eimalRz4.jpg','/files/download/447','/manage/files/447/delete',NULL,NULL,NULL,NULL,'N','download.jpg'),
	 (608,NULL,'OzZGZS8s.jpg','jpg',167285,'D:\\data\\tagocms-dev\\FAQ\\608\\OzZGZS8s.jpg','/files/download/FAQ/OzZGZS8s.jpg','/files/download/448','/manage/files/448/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (609,NULL,'svrTA2qx.jpg','jpg',7211,'D:\\data\\tagocms-dev\\FAQ\\609\\svrTA2qx.jpg','/files/download/FAQ/svrTA2qx.jpg','/files/download/449','/manage/files/449/delete',NULL,NULL,NULL,NULL,'N','download (1).jpg'),
	 (610,NULL,'0TnJCTQT.jpg','jpg',7401,'D:\\data\\tagocms-dev\\FAQ\\610\\0TnJCTQT.jpg','/files/download/FAQ/0TnJCTQT.jpg','/files/download/450','/manage/files/450/delete',NULL,NULL,NULL,NULL,'N','download (2).jpg'),
	 (611,NULL,'XnRj8RAZ.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Notice\\611\\XnRj8RAZ.jpg','/files/download/Notice/XnRj8RAZ.jpg','/files/download/451','/manage/files/451/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg');
INSERT INTO tagocms.t_file (file_group_seq,order_number,stored_file_name,file_ext,file_size,stored_path,view_url,download_url,delete_url,created_date,created_by,modified_date,modified_by,is_deleted,file_name) VALUES
	 (612,NULL,'xelhHDDv.jpg','jpg',7401,'D:\\data\\tagocms-dev\\Notice\\612\\xelhHDDv.jpg','/files/download/Notice/xelhHDDv.jpg','/files/download/452','/manage/files/452/delete',NULL,NULL,NULL,NULL,'N','download (2).jpg'),
	 (593,NULL,'nUbk8zNT.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Banner\\593\\nUbk8zNT.jpg','/files/download/Banner/nUbk8zNT.jpg','/files/download/453','/manage/files/453/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (593,NULL,'89WvSVE8.jpg','jpg',2969,'D:\\data\\tagocms-dev\\Banner\\593\\89WvSVE8.jpg','/files/download/Banner/89WvSVE8.jpg','/files/download/454','/manage/files/454/delete',NULL,NULL,NULL,NULL,'N','corp.jpg'),
	 (613,NULL,'Md53u3EM.jpg','jpg',2969,'D:\\data\\tagocms-dev\\Popup\\613\\Md53u3EM.jpg','/files/download/Popup/Md53u3EM.jpg','/files/download/455','/manage/files/455/delete',NULL,NULL,NULL,NULL,'N','corp.jpg'),
	 (614,NULL,'vWk03GOQ.jpg','jpg',7026,'D:\\data\\tagocms-dev\\Popup\\614\\vWk03GOQ.jpg','/files/download/Popup/vWk03GOQ.jpg','/files/download/456','/manage/files/456/delete',NULL,NULL,NULL,NULL,'N','download.jpg'),
	 (593,NULL,'aHOOCG0C.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Banner\\593\\aHOOCG0C.jpg','/files/download/Banner/aHOOCG0C.jpg','/files/download/457','/manage/files/457/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (593,NULL,'5nsw9Mir.jpg','jpg',2969,'D:\\data\\tagocms-dev\\Banner\\593\\5nsw9Mir.jpg','/files/download/Banner/5nsw9Mir.jpg','/files/download/458','/manage/files/458/delete',NULL,NULL,NULL,NULL,'N','corp.jpg'),
	 (615,NULL,'wW3fzLpp.png','png',18453,'D:\\data\\tagocms-dev\\Banner\\615\\wW3fzLpp.png','/files/download/Banner/wW3fzLpp.png','/files/download/459','/manage/files/459/delete',NULL,NULL,NULL,NULL,'N','783px-Test-Logo.svg.png'),
	 (616,NULL,'t5c2ghFR.png','png',18453,'D:\\data\\tagocms-dev\\Banner\\616\\t5c2ghFR.png','/files/download/Banner/t5c2ghFR.png','/files/download/460','/manage/files/460/delete',NULL,NULL,NULL,NULL,'N','783px-Test-Logo.svg.png'),
	 (593,NULL,'CUUyYd2l.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Banner\\593\\CUUyYd2l.jpg','/files/download/Banner/CUUyYd2l.jpg','/files/download/461','/manage/files/461/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg');
INSERT INTO tagocms.t_file (file_group_seq,order_number,stored_file_name,file_ext,file_size,stored_path,view_url,download_url,delete_url,created_date,created_by,modified_date,modified_by,is_deleted,file_name) VALUES
	 (593,NULL,'33GIg4v2.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Banner\\593\\33GIg4v2.jpg','/files/download/Banner/33GIg4v2.jpg','/files/download/462','/manage/files/462/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (593,NULL,'oKxtQh2P.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Banner\\593\\oKxtQh2P.jpg','/files/download/Banner/oKxtQh2P.jpg','/files/download/463','/manage/files/463/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (593,NULL,'jteSuAqG.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Banner\\593\\jteSuAqG.jpg','/files/download/Banner/jteSuAqG.jpg','/files/download/464','/manage/files/464/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (615,NULL,'MHglnKSJ.png','png',18453,'D:\\data\\tagocms-dev\\Banner\\615\\MHglnKSJ.png','/files/download/Banner/MHglnKSJ.png','/files/download/465','/manage/files/465/delete',NULL,NULL,NULL,NULL,'N','783px-Test-Logo.svg.png'),
	 (615,NULL,'cdLwVLmB.png','png',18453,'D:\\data\\tagocms-dev\\Banner\\615\\cdLwVLmB.png','/files/download/Banner/cdLwVLmB.png','/files/download/466','/manage/files/466/delete',NULL,NULL,NULL,NULL,'N','783px-Test-Logo.svg.png'),
	 (617,NULL,'BJEnXqnw.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Banner\\617\\BJEnXqnw.jpg','/files/download/Banner/BJEnXqnw.jpg','/files/download/467','/manage/files/467/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (618,NULL,'Sm4QLUf2.jpg','jpg',7401,'D:\\data\\tagocms-dev\\Banner\\618\\Sm4QLUf2.jpg','/files/download/Banner/Sm4QLUf2.jpg','/files/download/468','/manage/files/468/delete',NULL,NULL,NULL,NULL,'N','download (2).jpg'),
	 (619,NULL,'19iafMiE.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Banner\\619\\19iafMiE.jpg','/files/download/Banner/19iafMiE.jpg','/files/download/469','/manage/files/469/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (620,NULL,'pogySNCb.jpg','jpg',7401,'D:\\data\\tagocms-dev\\Banner\\620\\pogySNCb.jpg','/files/download/Banner/pogySNCb.jpg','/files/download/470','/manage/files/470/delete',NULL,NULL,NULL,NULL,'N','download (2).jpg'),
	 (617,NULL,'jyToP2YA.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Banner\\617\\jyToP2YA.jpg','/files/download/Banner/jyToP2YA.jpg','/files/download/471','/manage/files/471/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg');
INSERT INTO tagocms.t_file (file_group_seq,order_number,stored_file_name,file_ext,file_size,stored_path,view_url,download_url,delete_url,created_date,created_by,modified_date,modified_by,is_deleted,file_name) VALUES
	 (617,NULL,'OtUqVGjh.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Banner\\617\\OtUqVGjh.jpg','/files/download/Banner/OtUqVGjh.jpg','/files/download/472','/manage/files/472/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (619,NULL,'jD12IzLV.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Banner\\619\\jD12IzLV.jpg','/files/download/Banner/jD12IzLV.jpg','/files/download/473','/manage/files/473/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (619,NULL,'TQfa58tL.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Banner\\619\\TQfa58tL.jpg','/files/download/Banner/TQfa58tL.jpg','/files/download/474','/manage/files/474/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (619,NULL,'pF9rbJs3.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Banner\\619\\pF9rbJs3.jpg','/files/download/Banner/pF9rbJs3.jpg','/files/download/475','/manage/files/475/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (619,NULL,'McVCNawo.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Banner\\619\\McVCNawo.jpg','/files/download/Banner/McVCNawo.jpg','/files/download/476','/manage/files/476/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (617,NULL,'EGCP0jDS.jpg','jpg',7211,'D:\\data\\tagocms-dev\\Banner\\617\\EGCP0jDS.jpg','/files/download/Banner/EGCP0jDS.jpg','/files/download/477','/manage/files/477/delete',NULL,NULL,NULL,NULL,'N','download (1).jpg'),
	 (619,NULL,'Q6uDl2FT.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Banner\\619\\Q6uDl2FT.jpg','/files/download/Banner/Q6uDl2FT.jpg','/files/download/478','/manage/files/478/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (619,NULL,'kqF29F3W.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Banner\\619\\kqF29F3W.jpg','/files/download/Banner/kqF29F3W.jpg','/files/download/479','/manage/files/479/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (619,NULL,'RlMpTL9j.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Banner\\619\\RlMpTL9j.jpg','/files/download/Banner/RlMpTL9j.jpg','/files/download/480','/manage/files/480/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (621,NULL,'Ro8KWhG4.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Banner\\621\\Ro8KWhG4.jpg','/files/download/Banner/Ro8KWhG4.jpg','/files/download/481','/manage/files/481/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg');
INSERT INTO tagocms.t_file (file_group_seq,order_number,stored_file_name,file_ext,file_size,stored_path,view_url,download_url,delete_url,created_date,created_by,modified_date,modified_by,is_deleted,file_name) VALUES
	 (622,NULL,'tZY3MEGV.jpg','jpg',7211,'D:\\data\\tagocms-dev\\Banner\\622\\tZY3MEGV.jpg','/files/download/Banner/tZY3MEGV.jpg','/files/download/482','/manage/files/482/delete',NULL,NULL,NULL,NULL,'N','download (1).jpg'),
	 (617,NULL,'RzzzoUZw.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Banner\\617\\RzzzoUZw.jpg','/files/download/Banner/RzzzoUZw.jpg','/files/download/483','/manage/files/483/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (621,NULL,'htCACqLK.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Banner\\621\\htCACqLK.jpg','/files/download/Banner/htCACqLK.jpg','/files/download/484','/manage/files/484/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (623,NULL,'k3n06opi.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Banner\\623\\k3n06opi.jpg','/files/download/Banner/k3n06opi.jpg','/files/download/485','/manage/files/485/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (624,NULL,'lAttk2O7.jpg','jpg',7211,'D:\\data\\tagocms-dev\\Banner\\624\\lAttk2O7.jpg','/files/download/Banner/lAttk2O7.jpg','/files/download/486','/manage/files/486/delete',NULL,NULL,NULL,NULL,'N','download (1).jpg'),
	 (623,NULL,'0Fssuc9i.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Banner\\623\\0Fssuc9i.jpg','/files/download/Banner/0Fssuc9i.jpg','/files/download/487','/manage/files/487/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (619,NULL,'79z1qd09.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Banner\\619\\79z1qd09.jpg','/files/download/Banner/79z1qd09.jpg','/files/download/488','/manage/files/488/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (625,NULL,'Y7bTiolt.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Banner\\625\\Y7bTiolt.jpg','/files/download/Banner/Y7bTiolt.jpg','/files/download/489','/manage/files/489/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (626,NULL,'UnP6JhI6.jpg','jpg',2969,'D:\\data\\tagocms-dev\\Banner\\626\\UnP6JhI6.jpg','/files/download/Banner/UnP6JhI6.jpg','/files/download/490','/manage/files/490/delete',NULL,NULL,NULL,NULL,'N','corp.jpg'),
	 (627,NULL,'8gEN2zC8.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Popup\\627\\8gEN2zC8.jpg','/files/download/Popup/8gEN2zC8.jpg','/files/download/491','/manage/files/491/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg');
INSERT INTO tagocms.t_file (file_group_seq,order_number,stored_file_name,file_ext,file_size,stored_path,view_url,download_url,delete_url,created_date,created_by,modified_date,modified_by,is_deleted,file_name) VALUES
	 (628,NULL,'wh0UXYyp.jpg','jpg',2969,'D:\\data\\tagocms-dev\\Popup\\628\\wh0UXYyp.jpg','/files/download/Popup/wh0UXYyp.jpg','/files/download/492','/manage/files/492/delete',NULL,NULL,NULL,NULL,'N','corp.jpg'),
	 (625,NULL,'zvVewSJs.jpg','jpg',2969,'D:\\data\\tagocms-dev\\Banner\\625\\zvVewSJs.jpg','/files/download/Banner/zvVewSJs.jpg','/files/download/493','/manage/files/493/delete',NULL,NULL,NULL,NULL,'N','corp.jpg'),
	 (629,NULL,'kOLM6Yjz.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Banner\\629\\kOLM6Yjz.jpg','/files/download/Banner/kOLM6Yjz.jpg','/files/download/494','/manage/files/494/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (630,NULL,'f3lK7DBO.jpg','jpg',2969,'D:\\data\\tagocms-dev\\Banner\\630\\f3lK7DBO.jpg','/files/download/Banner/f3lK7DBO.jpg','/files/download/495','/manage/files/495/delete',NULL,NULL,NULL,NULL,'N','corp.jpg'),
	 (629,NULL,'7VtNpvWR.jpg','jpg',7211,'D:\\data\\tagocms-dev\\Banner\\629\\7VtNpvWR.jpg','/files/download/Banner/7VtNpvWR.jpg','/files/download/496','/manage/files/496/delete',NULL,NULL,NULL,NULL,'N','download (1).jpg'),
	 (631,NULL,'CseDcPob.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Popup\\631\\CseDcPob.jpg','/files/download/Popup/CseDcPob.jpg','/files/download/497','/manage/files/497/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (632,NULL,'7rsdv45X.jpg','jpg',2969,'D:\\data\\tagocms-dev\\Popup\\632\\7rsdv45X.jpg','/files/download/Popup/7rsdv45X.jpg','/files/download/498','/manage/files/498/delete',NULL,NULL,NULL,NULL,'N','corp.jpg'),
	 (633,NULL,'6mqhZkNv.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Banner\\633\\6mqhZkNv.jpg','/files/download/Banner/6mqhZkNv.jpg','/files/download/499','/manage/files/499/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (634,NULL,'9Ony2PjA.jpg','jpg',2969,'D:\\data\\tagocms-dev\\Banner\\634\\9Ony2PjA.jpg','/files/download/Banner/9Ony2PjA.jpg','/files/download/500','/manage/files/500/delete',NULL,NULL,NULL,NULL,'N','corp.jpg'),
	 (633,NULL,'L4t1QoU4.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Banner\\633\\L4t1QoU4.jpg','/files/download/Banner/L4t1QoU4.jpg','/files/download/501','/manage/files/501/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg');
INSERT INTO tagocms.t_file (file_group_seq,order_number,stored_file_name,file_ext,file_size,stored_path,view_url,download_url,delete_url,created_date,created_by,modified_date,modified_by,is_deleted,file_name) VALUES
	 (635,NULL,'o0wbtF1G.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Banner\\635\\o0wbtF1G.jpg','/files/download/Banner/o0wbtF1G.jpg','/files/download/502','/manage/files/502/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (636,NULL,'PlLN5oOY.jpg','jpg',2969,'D:\\data\\tagocms-dev\\Banner\\636\\PlLN5oOY.jpg','/files/download/Banner/PlLN5oOY.jpg','/files/download/503','/manage/files/503/delete',NULL,NULL,NULL,NULL,'N','corp.jpg'),
	 (635,NULL,'TSKnaGf5.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Banner\\635\\TSKnaGf5.jpg','/files/download/Banner/TSKnaGf5.jpg','/files/download/504','/manage/files/504/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (635,NULL,'rCNZM5PN.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Banner\\635\\rCNZM5PN.jpg','/files/download/Banner/rCNZM5PN.jpg','/files/download/505','/manage/files/505/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (635,NULL,'iVuFMzzP.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Banner\\635\\iVuFMzzP.jpg','/files/download/Banner/iVuFMzzP.jpg','/files/download/506','/manage/files/506/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (637,NULL,'1Zm1ypkh.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Popup\\637\\1Zm1ypkh.jpg','/files/download/Popup/1Zm1ypkh.jpg','/files/download/507','/manage/files/507/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (638,NULL,'NqDPMEh2.jpg','jpg',2969,'D:\\data\\tagocms-dev\\Popup\\638\\NqDPMEh2.jpg','/files/download/Popup/NqDPMEh2.jpg','/files/download/508','/manage/files/508/delete',NULL,NULL,NULL,NULL,'N','corp.jpg'),
	 (639,NULL,'hnULdjdG.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Popup\\639\\hnULdjdG.jpg','/files/download/Popup/hnULdjdG.jpg','/files/download/509','/manage/files/509/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (640,NULL,'nUh0nXo2.jpg','jpg',2969,'D:\\data\\tagocms-dev\\Popup\\640\\nUh0nXo2.jpg','/files/download/Popup/nUh0nXo2.jpg','/files/download/510','/manage/files/510/delete',NULL,NULL,NULL,NULL,'N','corp.jpg'),
	 (635,NULL,'XIQFFCkT.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Banner\\635\\XIQFFCkT.jpg','/files/download/Banner/XIQFFCkT.jpg','/files/download/511','/manage/files/511/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg');
INSERT INTO tagocms.t_file (file_group_seq,order_number,stored_file_name,file_ext,file_size,stored_path,view_url,download_url,delete_url,created_date,created_by,modified_date,modified_by,is_deleted,file_name) VALUES
	 (641,NULL,'8oSC7h1t.jpg','jpg',7211,'D:\\data\\tagocms-dev\\Banner\\641\\8oSC7h1t.jpg','/files/download/Banner/8oSC7h1t.jpg','/files/download/512','/manage/files/512/delete',NULL,NULL,NULL,NULL,'N','download (1).jpg'),
	 (642,NULL,'QYIig9va.jpg','jpg',7401,'D:\\data\\tagocms-dev\\Banner\\642\\QYIig9va.jpg','/files/download/Banner/QYIig9va.jpg','/files/download/513','/manage/files/513/delete',NULL,NULL,NULL,NULL,'N','download (2).jpg'),
	 (641,NULL,'u7UpQLLR.jpg','jpg',7211,'D:\\data\\tagocms-dev\\Banner\\641\\u7UpQLLR.jpg','/files/download/Banner/u7UpQLLR.jpg','/files/download/514','/manage/files/514/delete',NULL,NULL,NULL,NULL,'N','download (1).jpg'),
	 (641,NULL,'IXnjRas7.png','png',18453,'D:\\data\\tagocms-dev\\Banner\\641\\IXnjRas7.png','/files/download/Banner/IXnjRas7.png','/files/download/515','/manage/files/515/delete',NULL,NULL,NULL,NULL,'N','783px-Test-Logo.svg.png'),
	 (641,NULL,'4wNhV7rK.jpg','jpg',7211,'D:\\data\\tagocms-dev\\Banner\\641\\4wNhV7rK.jpg','/files/download/Banner/4wNhV7rK.jpg','/files/download/516','/manage/files/516/delete',NULL,NULL,NULL,NULL,'N','download (1).jpg'),
	 (635,NULL,'yTGXSFuf.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Banner\\635\\yTGXSFuf.jpg','/files/download/Banner/yTGXSFuf.jpg','/files/download/517','/manage/files/517/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (643,NULL,'6470ugek.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Banner\\643\\6470ugek.jpg','/files/download/Banner/6470ugek.jpg','/files/download/518','/manage/files/518/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (644,NULL,'cpRAncRv.jpg','jpg',2969,'D:\\data\\tagocms-dev\\Banner\\644\\cpRAncRv.jpg','/files/download/Banner/cpRAncRv.jpg','/files/download/519','/manage/files/519/delete',NULL,NULL,NULL,NULL,'N','corp.jpg'),
	 (645,NULL,'P73AfqVU.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Banner\\645\\P73AfqVU.jpg','/files/download/Banner/P73AfqVU.jpg','/files/download/520','/manage/files/520/delete',NULL,NULL,NULL,NULL,'Y','s-corp-vs-c-corp.jpg'),
	 (645,NULL,'5atQ2GWv.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Banner\\645\\5atQ2GWv.jpg','/files/download/Banner/5atQ2GWv.jpg','/files/download/521','/manage/files/521/delete',NULL,NULL,NULL,NULL,'Y','s-corp-vs-c-corp.jpg');
INSERT INTO tagocms.t_file (file_group_seq,order_number,stored_file_name,file_ext,file_size,stored_path,view_url,download_url,delete_url,created_date,created_by,modified_date,modified_by,is_deleted,file_name) VALUES
	 (645,NULL,'QLuAmAVS.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Banner\\645\\QLuAmAVS.jpg','/files/download/Banner/QLuAmAVS.jpg','/files/download/522','/manage/files/522/delete',NULL,NULL,NULL,NULL,'Y','s-corp-vs-c-corp.jpg'),
	 (645,NULL,'e14DfxFN.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Banner\\645\\e14DfxFN.jpg','/files/download/Banner/e14DfxFN.jpg','/files/download/523','/manage/files/523/delete',NULL,NULL,NULL,NULL,'Y','s-corp-vs-c-corp.jpg'),
	 (647,NULL,'GTkJJmax.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Popup\\647\\GTkJJmax.jpg','/files/download/Popup/GTkJJmax.jpg','/files/download/524','/manage/files/524/delete',NULL,NULL,NULL,NULL,'Y','s-corp-vs-c-corp.jpg'),
	 (648,NULL,'YSGP734B.jpg','jpg',2969,'D:\\data\\tagocms-dev\\Popup\\648\\YSGP734B.jpg','/files/download/Popup/YSGP734B.jpg','/files/download/525','/manage/files/525/delete',NULL,NULL,NULL,NULL,'Y','corp.jpg'),
	 (645,NULL,'9eYr7pJv.png','png',1043549,'C:\\data\\tagocms-dev\\Banner\\645\\9eYr7pJv.png','/files/download/Banner/9eYr7pJv.png','/files/download/526','/manage/files/526/delete',NULL,NULL,NULL,NULL,'Y','Tech.png'),
	 (646,NULL,'qwu7U3WA.png','png',13449273,'C:\\data\\tagocms-dev\\Banner\\646\\qwu7U3WA.png','/files/download/Banner/qwu7U3WA.png','/files/download/527','/manage/files/527/delete',NULL,NULL,NULL,NULL,'Y','Z-BONUS.png'),
	 (647,NULL,'SwdZiqyf.png','png',1043549,'C:\\data\\tagocms-dev\\Popup\\647\\SwdZiqyf.png','/files/download/Popup/SwdZiqyf.png','/files/download/528','/manage/files/528/delete',NULL,NULL,NULL,NULL,'Y','Tech.png'),
	 (648,NULL,'TbNsVBg8.png','png',13449273,'C:\\data\\tagocms-dev\\Popup\\648\\TbNsVBg8.png','/files/download/Popup/TbNsVBg8.png','/files/download/529','/manage/files/529/delete',NULL,NULL,NULL,NULL,'Y','Z-BONUS.png'),
	 (649,NULL,'HkZ76Oi6.png','png',4195579,'C:\\data\\tagocms-dev\\Notice\\649\\HkZ76Oi6.png','/files/download/Notice/HkZ76Oi6.png','/files/download/530','/manage/files/530/delete',NULL,NULL,NULL,NULL,'N','Wave.png'),
	 (650,NULL,'vkxAZ35s.png','png',4707595,'C:\\data\\tagocms-dev\\Notice\\650\\vkxAZ35s.png','/files/download/Notice/vkxAZ35s.png','/files/download/531','/manage/files/531/delete',NULL,NULL,NULL,NULL,'N','Origin.png');
INSERT INTO tagocms.t_file (file_group_seq,order_number,stored_file_name,file_ext,file_size,stored_path,view_url,download_url,delete_url,created_date,created_by,modified_date,modified_by,is_deleted,file_name) VALUES
	 (645,NULL,'ACH7MfcM.png','png',4707595,'C:\\data\\tagocms-dev\\Banner\\645\\ACH7MfcM.png','/files/download/Banner/ACH7MfcM.png','/files/download/532','/manage/files/532/delete',NULL,NULL,NULL,NULL,'N','Origin.png'),
	 (646,NULL,'yBZPPTP6.png','png',484101,'C:\\data\\tagocms-dev\\Banner\\646\\yBZPPTP6.png','/files/download/Banner/yBZPPTP6.png','/files/download/533','/manage/files/533/delete',NULL,NULL,NULL,NULL,'N','New Shaped.png'),
	 (647,NULL,'fvY5EzpK.png','png',9378760,'C:\\data\\tagocms-dev\\Popup\\647\\fvY5EzpK.png','/files/download/Popup/fvY5EzpK.png','/files/download/534','/manage/files/534/delete',NULL,NULL,NULL,NULL,'N','Dark Galaxy.png'),
	 (648,NULL,'U9kNDnR0.png','png',12069371,'C:\\data\\tagocms-dev\\Popup\\648\\U9kNDnR0.png','/files/download/Popup/U9kNDnR0.png','/files/download/535','/manage/files/535/delete',NULL,NULL,NULL,NULL,'N','Neon.png'),
	 (651,NULL,'xbTXa1zN.png','png',4195579,'C:\\data\\tagocms-dev\\FAQ\\651\\xbTXa1zN.png','/files/download/FAQ/xbTXa1zN.png','/files/download/536','/manage/files/536/delete',NULL,NULL,NULL,NULL,'N','Wave.png'),
	 (645,NULL,'XVaOSzpb.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Banner\\645\\XVaOSzpb.jpg','/files/download/Banner/XVaOSzpb.jpg','/files/download/537','/manage/files/537/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (646,NULL,'1oIFMlxb.jpg','jpg',2969,'D:\\data\\tagocms-dev\\Banner\\646\\1oIFMlxb.jpg','/files/download/Banner/1oIFMlxb.jpg','/files/download/538','/manage/files/538/delete',NULL,NULL,NULL,NULL,'N','corp.jpg'),
	 (652,NULL,'pD7VwmRH.png','png',13449273,'C:\\data\\tagocms-dev\\FAQ\\652\\pD7VwmRH.png','/files/download/FAQ/pD7VwmRH.png','/files/download/539','/manage/files/539/delete',NULL,NULL,NULL,NULL,'N','Z-BONUS.png'),
	 (653,NULL,'Qr2B8T16.png','png',484101,'C:\\data\\tagocms-dev\\FAQ\\653\\Qr2B8T16.png','/files/download/FAQ/Qr2B8T16.png','/files/download/540','/manage/files/540/delete',NULL,NULL,NULL,NULL,'N','New Shaped.png'),
	 (654,NULL,'OCm5IdDj.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Banner\\654\\OCm5IdDj.jpg','/files/download/Banner/OCm5IdDj.jpg','/files/download/541','/manage/files/541/delete',NULL,NULL,NULL,NULL,'Y','s-corp-vs-c-corp.jpg');
INSERT INTO tagocms.t_file (file_group_seq,order_number,stored_file_name,file_ext,file_size,stored_path,view_url,download_url,delete_url,created_date,created_by,modified_date,modified_by,is_deleted,file_name) VALUES
	 (655,NULL,'B5n8XqK1.jpg','jpg',2969,'D:\\data\\tagocms-dev\\Banner\\655\\B5n8XqK1.jpg','/files/download/Banner/B5n8XqK1.jpg','/files/download/542','/manage/files/542/delete',NULL,NULL,NULL,NULL,'Y','corp.jpg'),
	 (654,NULL,'pIJarHWi.jpg','jpg',7211,'D:\\data\\tagocms-dev\\Banner\\654\\pIJarHWi.jpg','/files/download/Banner/pIJarHWi.jpg','/files/download/543','/manage/files/543/delete',NULL,NULL,NULL,NULL,'Y','download (1).jpg'),
	 (655,NULL,'r1TINVsX.jpg','jpg',7401,'D:\\data\\tagocms-dev\\Banner\\655\\r1TINVsX.jpg','/files/download/Banner/r1TINVsX.jpg','/files/download/544','/manage/files/544/delete',NULL,NULL,NULL,NULL,'Y','download (2).jpg'),
	 (656,NULL,'R7nEwwRj.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Popup\\656\\R7nEwwRj.jpg','/files/download/Popup/R7nEwwRj.jpg','/files/download/545','/manage/files/545/delete',NULL,NULL,NULL,NULL,'Y','s-corp-vs-c-corp.jpg'),
	 (657,NULL,'FTzD2XO4.jpg','jpg',2969,'D:\\data\\tagocms-dev\\Popup\\657\\FTzD2XO4.jpg','/files/download/Popup/FTzD2XO4.jpg','/files/download/546','/manage/files/546/delete',NULL,NULL,NULL,NULL,'Y','corp.jpg'),
	 (658,NULL,'s9Uuwumq.jpg','jpg',7211,'D:\\data\\tagocms-dev\\Popup\\658\\s9Uuwumq.jpg','/files/download/Popup/s9Uuwumq.jpg','/files/download/547','/manage/files/547/delete',NULL,NULL,NULL,NULL,'N','download (1).jpg'),
	 (659,NULL,'EfZDg7ku.jpg','jpg',7401,'D:\\data\\tagocms-dev\\Popup\\659\\EfZDg7ku.jpg','/files/download/Popup/EfZDg7ku.jpg','/files/download/548','/manage/files/548/delete',NULL,NULL,NULL,NULL,'N','download (2).jpg'),
	 (662,NULL,'w9DwAwf4.jpg','jpg',7211,'D:\\data\\tagocms-dev\\Popup\\662\\w9DwAwf4.jpg','/files/download/Popup/w9DwAwf4.jpg','/files/download/549','/manage/files/549/delete',NULL,NULL,NULL,NULL,'Y','download (1).jpg'),
	 (663,NULL,'qapgtX6s.jpg','jpg',2969,'D:\\data\\tagocms-dev\\Popup\\663\\qapgtX6s.jpg','/files/download/Popup/qapgtX6s.jpg','/files/download/550','/manage/files/550/delete',NULL,NULL,NULL,NULL,'Y','corp.jpg'),
	 (666,NULL,'2NHfQKqh.jpg','jpg',167285,'D:\\data\\tagocms-dev\\FAQ\\666\\2NHfQKqh.jpg','/files/download/FAQ/2NHfQKqh.jpg','/files/download/551','/manage/files/551/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg');
INSERT INTO tagocms.t_file (file_group_seq,order_number,stored_file_name,file_ext,file_size,stored_path,view_url,download_url,delete_url,created_date,created_by,modified_date,modified_by,is_deleted,file_name) VALUES
	 (654,NULL,'BKiY13qh.jpg','jpg',7211,'D:\\data\\tagocms-dev\\Popup\\654\\BKiY13qh.jpg','/files/download/Popup/BKiY13qh.jpg','/files/download/552','/manage/files/552/delete',NULL,NULL,NULL,NULL,'Y','download (1).jpg'),
	 (667,NULL,'6t2C45Jk.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Banner\\667\\6t2C45Jk.jpg','/files/download/Banner/6t2C45Jk.jpg','/files/download/553','/manage/files/553/delete',NULL,NULL,NULL,NULL,'Y','s-corp-vs-c-corp.jpg'),
	 (668,NULL,'CrEmktiq.jpg','jpg',7211,'D:\\data\\tagocms-dev\\Banner\\668\\CrEmktiq.jpg','/files/download/Banner/CrEmktiq.jpg','/files/download/554','/manage/files/554/delete',NULL,NULL,NULL,NULL,'Y','download (1).jpg'),
	 (667,NULL,'wiknFeu6.jpg','jpg',7211,'D:\\data\\tagocms-dev\\Banner\\667\\wiknFeu6.jpg','/files/download/Banner/wiknFeu6.jpg','/files/download/555','/manage/files/555/delete',NULL,NULL,NULL,NULL,'Y','download (1).jpg'),
	 (667,NULL,'GZH9Yd93.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Banner\\667\\GZH9Yd93.jpg','/files/download/Banner/GZH9Yd93.jpg','/files/download/556','/manage/files/556/delete',NULL,NULL,NULL,NULL,'Y','s-corp-vs-c-corp.jpg'),
	 (668,NULL,'JDsvmWD9.jpg','jpg',7401,'D:\\data\\tagocms-dev\\Banner\\668\\JDsvmWD9.jpg','/files/download/Banner/JDsvmWD9.jpg','/files/download/557','/manage/files/557/delete',NULL,NULL,NULL,NULL,'Y','download (2).jpg'),
	 (667,NULL,'ZwaMLLyu.jpg','jpg',7211,'D:\\data\\tagocms-dev\\Banner\\667\\ZwaMLLyu.jpg','/files/download/Banner/ZwaMLLyu.jpg','/files/download/558','/manage/files/558/delete',NULL,NULL,NULL,NULL,'Y','download (1).jpg'),
	 (668,NULL,'lGbcKTQE.jpg','jpg',2969,'D:\\data\\tagocms-dev\\Banner\\668\\lGbcKTQE.jpg','/files/download/Banner/lGbcKTQE.jpg','/files/download/559','/manage/files/559/delete',NULL,NULL,NULL,NULL,'Y','corp.jpg'),
	 (667,NULL,'FuOgzb1U.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Banner\\667\\FuOgzb1U.jpg','/files/download/Banner/FuOgzb1U.jpg','/files/download/560','/manage/files/560/delete',NULL,NULL,NULL,NULL,'Y','s-corp-vs-c-corp.jpg'),
	 (668,NULL,'b1ZpxJHd.jpg','jpg',7026,'D:\\data\\tagocms-dev\\Banner\\668\\b1ZpxJHd.jpg','/files/download/Banner/b1ZpxJHd.jpg','/files/download/561','/manage/files/561/delete',NULL,NULL,NULL,NULL,'Y','download.jpg');
INSERT INTO tagocms.t_file (file_group_seq,order_number,stored_file_name,file_ext,file_size,stored_path,view_url,download_url,delete_url,created_date,created_by,modified_date,modified_by,is_deleted,file_name) VALUES
	 (656,NULL,'qUDDVPdr.jpg','jpg',7211,'D:\\data\\tagocms-dev\\Popup\\656\\qUDDVPdr.jpg','/files/download/Popup/qUDDVPdr.jpg','/files/download/562','/manage/files/562/delete',NULL,NULL,NULL,NULL,'Y','download (1).jpg'),
	 (657,NULL,'XxyJyLoD.jpg','jpg',7026,'D:\\data\\tagocms-dev\\Popup\\657\\XxyJyLoD.jpg','/files/download/Popup/XxyJyLoD.jpg','/files/download/563','/manage/files/563/delete',NULL,NULL,NULL,NULL,'Y','download.jpg'),
	 (656,NULL,'9V9wJKOx.jpg','jpg',7211,'D:\\data\\tagocms-dev\\Popup\\656\\9V9wJKOx.jpg','/files/download/Popup/9V9wJKOx.jpg','/files/download/564','/manage/files/564/delete',NULL,NULL,NULL,NULL,'Y','download (1).jpg'),
	 (657,NULL,'JOIPbDz3.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Popup\\657\\JOIPbDz3.jpg','/files/download/Popup/JOIPbDz3.jpg','/files/download/565','/manage/files/565/delete',NULL,NULL,NULL,NULL,'Y','s-corp-vs-c-corp.jpg'),
	 (669,NULL,'uYr9tWKH.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Popup\\669\\uYr9tWKH.jpg','/files/download/Popup/uYr9tWKH.jpg','/files/download/566','/manage/files/566/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (670,NULL,'LktW8MCI.jpg','jpg',2969,'D:\\data\\tagocms-dev\\Popup\\670\\LktW8MCI.jpg','/files/download/Popup/LktW8MCI.jpg','/files/download/567','/manage/files/567/delete',NULL,NULL,NULL,NULL,'N','corp.jpg'),
	 (667,NULL,'uGREMVSH.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Banner\\667\\uGREMVSH.jpg','/files/download/Banner/uGREMVSH.jpg','/files/download/568','/manage/files/568/delete',NULL,NULL,NULL,NULL,'Y','s-corp-vs-c-corp.jpg'),
	 (654,NULL,'NTu32SV9.jpg','jpg',7211,'D:\\data\\tagocms-dev\\Banner\\654\\NTu32SV9.jpg','/files/download/Banner/NTu32SV9.jpg','/files/download/569','/manage/files/569/delete',NULL,NULL,NULL,NULL,'Y','download (1).jpg'),
	 (656,NULL,'cdJqJcBu.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Popup\\656\\cdJqJcBu.jpg','/files/download/Popup/cdJqJcBu.jpg','/files/download/570','/manage/files/570/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (657,NULL,'dzgNKnMa.jpg','jpg',7211,'D:\\data\\tagocms-dev\\Popup\\657\\dzgNKnMa.jpg','/files/download/Popup/dzgNKnMa.jpg','/files/download/571','/manage/files/571/delete',NULL,NULL,NULL,NULL,'N','download (1).jpg');
INSERT INTO tagocms.t_file (file_group_seq,order_number,stored_file_name,file_ext,file_size,stored_path,view_url,download_url,delete_url,created_date,created_by,modified_date,modified_by,is_deleted,file_name) VALUES
	 (671,NULL,'fdKMrK7v.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Banner\\671\\fdKMrK7v.jpg','/files/download/Banner/fdKMrK7v.jpg','/files/download/572','/manage/files/572/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (672,NULL,'pbQERxdl.jpg','jpg',7401,'D:\\data\\tagocms-dev\\Banner\\672\\pbQERxdl.jpg','/files/download/Banner/pbQERxdl.jpg','/files/download/573','/manage/files/573/delete',NULL,NULL,NULL,NULL,'N','download (2).jpg'),
	 (673,NULL,'lrZ2Q5mJ.jpg','jpg',7211,'D:\\data\\tagocms-dev\\Banner\\673\\lrZ2Q5mJ.jpg','/files/download/Banner/lrZ2Q5mJ.jpg','/files/download/574','/manage/files/574/delete',NULL,NULL,NULL,NULL,'N','download (1).jpg'),
	 (674,NULL,'Q7ReE9ES.jpg','jpg',2969,'D:\\data\\tagocms-dev\\Banner\\674\\Q7ReE9ES.jpg','/files/download/Banner/Q7ReE9ES.jpg','/files/download/575','/manage/files/575/delete',NULL,NULL,NULL,NULL,'N','corp.jpg'),
	 (675,NULL,'SrqlqrvM.png','png',18453,'D:\\data\\tagocms-dev\\Banner\\675\\SrqlqrvM.png','/files/download/Banner/SrqlqrvM.png','/files/download/576','/manage/files/576/delete',NULL,NULL,NULL,NULL,'N','783px-Test-Logo.svg.png'),
	 (654,NULL,'vNWVVX84.jpg','jpg',7211,'D:\\data\\tagocms-dev\\Banner\\654\\vNWVVX84.jpg','/files/download/Banner/vNWVVX84.jpg','/files/download/577','/manage/files/577/delete',NULL,NULL,NULL,NULL,'N','download (1).jpg'),
	 (667,NULL,'zg38KpG6.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Banner\\667\\zg38KpG6.jpg','/files/download/Banner/zg38KpG6.jpg','/files/download/578','/manage/files/578/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (677,NULL,'9q2Hyzcd.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Banner\\677\\9q2Hyzcd.jpg','/files/download/Banner/9q2Hyzcd.jpg','/files/download/579','/manage/files/579/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (678,NULL,'oH3Fdqa1.jpg','jpg',2969,'D:\\data\\tagocms-dev\\Banner\\678\\oH3Fdqa1.jpg','/files/download/Banner/oH3Fdqa1.jpg','/files/download/580','/manage/files/580/delete',NULL,NULL,NULL,NULL,'N','corp.jpg'),
	 (679,NULL,'nFSdMuum.jpg','jpg',7211,'D:\\data\\tagocms-dev\\Banner\\679\\nFSdMuum.jpg','/files/download/Banner/nFSdMuum.jpg','/files/download/581','/manage/files/581/delete',NULL,NULL,NULL,NULL,'N','download (1).jpg');
INSERT INTO tagocms.t_file (file_group_seq,order_number,stored_file_name,file_ext,file_size,stored_path,view_url,download_url,delete_url,created_date,created_by,modified_date,modified_by,is_deleted,file_name) VALUES
	 (680,NULL,'N4kXJegS.jpg','jpg',7401,'D:\\data\\tagocms-dev\\Banner\\680\\N4kXJegS.jpg','/files/download/Banner/N4kXJegS.jpg','/files/download/582','/manage/files/582/delete',NULL,NULL,NULL,NULL,'N','download (2).jpg'),
	 (681,NULL,'bLlLXFlm.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Banner\\681\\bLlLXFlm.jpg','/files/download/Banner/bLlLXFlm.jpg','/files/download/583','/manage/files/583/delete',NULL,NULL,NULL,NULL,'Y','s-corp-vs-c-corp.jpg'),
	 (682,NULL,'rwWNF0WO.jpg','jpg',7211,'D:\\data\\tagocms-dev\\Banner\\682\\rwWNF0WO.jpg','/files/download/Banner/rwWNF0WO.jpg','/files/download/584','/manage/files/584/delete',NULL,NULL,NULL,NULL,'Y','download (1).jpg'),
	 (681,NULL,'0RZ9Jwtu.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Banner\\681\\0RZ9Jwtu.jpg','/files/download/Banner/0RZ9Jwtu.jpg','/files/download/585','/manage/files/585/delete',NULL,NULL,NULL,NULL,'Y','s-corp-vs-c-corp.jpg'),
	 (681,NULL,'DBucyXZ6.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Banner\\681\\DBucyXZ6.jpg','/files/download/Banner/DBucyXZ6.jpg','/files/download/586','/manage/files/586/delete',NULL,NULL,NULL,NULL,'Y','s-corp-vs-c-corp.jpg'),
	 (682,NULL,'67RzqLiF.jpg','jpg',2969,'D:\\data\\tagocms-dev\\Banner\\682\\67RzqLiF.jpg','/files/download/Banner/67RzqLiF.jpg','/files/download/587','/manage/files/587/delete',NULL,NULL,NULL,NULL,'Y','corp.jpg'),
	 (681,NULL,'kXHHgly7.jpg','jpg',7211,'D:\\data\\tagocms-dev\\Banner\\681\\kXHHgly7.jpg','/files/download/Banner/kXHHgly7.jpg','/files/download/588','/manage/files/588/delete',NULL,NULL,NULL,NULL,'Y','download (1).jpg'),
	 (682,NULL,'AZoI6jJV.jpg','jpg',7401,'D:\\data\\tagocms-dev\\Banner\\682\\AZoI6jJV.jpg','/files/download/Banner/AZoI6jJV.jpg','/files/download/589','/manage/files/589/delete',NULL,NULL,NULL,NULL,'Y','download (2).jpg'),
	 (683,NULL,'Zlpf0EYH.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Banner\\683\\Zlpf0EYH.jpg','/files/download/Banner/Zlpf0EYH.jpg','/files/download/590','/manage/files/590/delete',NULL,NULL,NULL,NULL,'Y','s-corp-vs-c-corp.jpg'),
	 (684,NULL,'LdbldK6Z.jpg','jpg',2969,'D:\\data\\tagocms-dev\\Banner\\684\\LdbldK6Z.jpg','/files/download/Banner/LdbldK6Z.jpg','/files/download/591','/manage/files/591/delete',NULL,NULL,NULL,NULL,'Y','corp.jpg');
INSERT INTO tagocms.t_file (file_group_seq,order_number,stored_file_name,file_ext,file_size,stored_path,view_url,download_url,delete_url,created_date,created_by,modified_date,modified_by,is_deleted,file_name) VALUES
	 (681,NULL,'sAPfZn7D.jpg','jpg',7211,'D:\\data\\tagocms-dev\\Banner\\681\\sAPfZn7D.jpg','/files/download/Banner/sAPfZn7D.jpg','/files/download/592','/manage/files/592/delete',NULL,NULL,NULL,NULL,'Y','download (1).jpg'),
	 (681,NULL,'He5j68Ie.jpg','jpg',7211,'D:\\data\\tagocms-dev\\Banner\\681\\He5j68Ie.jpg','/files/download/Banner/He5j68Ie.jpg','/files/download/593','/manage/files/593/delete',NULL,NULL,NULL,NULL,'Y','download (1).jpg'),
	 (685,NULL,'0MC69K9Z.png','png',18453,'D:\\data\\tagocms-dev\\Banner\\685\\0MC69K9Z.png','/files/download/Banner/0MC69K9Z.png','/files/download/594','/manage/files/594/delete',NULL,NULL,NULL,NULL,'Y','783px-Test-Logo.svg.png'),
	 (686,NULL,'nYOqsm4G.jpg','jpg',2969,'D:\\data\\tagocms-dev\\Banner\\686\\nYOqsm4G.jpg','/files/download/Banner/nYOqsm4G.jpg','/files/download/595','/manage/files/595/delete',NULL,NULL,NULL,NULL,'Y','corp.jpg'),
	 (687,NULL,'qZawiSRy.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Popup\\687\\qZawiSRy.jpg','/files/download/Popup/qZawiSRy.jpg','/files/download/596','/manage/files/596/delete',NULL,NULL,NULL,NULL,'Y','s-corp-vs-c-corp.jpg'),
	 (688,NULL,'ow7ebvDl.jpg','jpg',2969,'D:\\data\\tagocms-dev\\Popup\\688\\ow7ebvDl.jpg','/files/download/Popup/ow7ebvDl.jpg','/files/download/597','/manage/files/597/delete',NULL,NULL,NULL,NULL,'Y','corp.jpg'),
	 (689,NULL,'dkmtEzOH.jpg','jpg',7211,'D:\\data\\tagocms-dev\\Popup\\689\\dkmtEzOH.jpg','/files/download/Popup/dkmtEzOH.jpg','/files/download/598','/manage/files/598/delete',NULL,NULL,NULL,NULL,'Y','download (1).jpg'),
	 (690,NULL,'XhnJgQ2h.jpg','jpg',7026,'D:\\data\\tagocms-dev\\Popup\\690\\XhnJgQ2h.jpg','/files/download/Popup/XhnJgQ2h.jpg','/files/download/599','/manage/files/599/delete',NULL,NULL,NULL,NULL,'Y','download.jpg'),
	 (687,NULL,'4jFKuFLM.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Popup\\687\\4jFKuFLM.jpg','/files/download/Popup/4jFKuFLM.jpg','/files/download/600','/manage/files/600/delete',NULL,NULL,NULL,NULL,'Y','s-corp-vs-c-corp.jpg'),
	 (683,NULL,'aIbkpQlx.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Banner\\683\\aIbkpQlx.jpg','/files/download/Banner/aIbkpQlx.jpg','/files/download/601','/manage/files/601/delete',NULL,NULL,NULL,NULL,'Y','s-corp-vs-c-corp.jpg');
INSERT INTO tagocms.t_file (file_group_seq,order_number,stored_file_name,file_ext,file_size,stored_path,view_url,download_url,delete_url,created_date,created_by,modified_date,modified_by,is_deleted,file_name) VALUES
	 (683,NULL,'BxtwBrNj.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Banner\\683\\BxtwBrNj.jpg','/files/download/Banner/BxtwBrNj.jpg','/files/download/602','/manage/files/602/delete',NULL,NULL,NULL,NULL,'Y','s-corp-vs-c-corp.jpg'),
	 (687,NULL,'U6R8w2Dp.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Popup\\687\\U6R8w2Dp.jpg','/files/download/Popup/U6R8w2Dp.jpg','/files/download/603','/manage/files/603/delete',NULL,NULL,NULL,NULL,'Y','s-corp-vs-c-corp.jpg'),
	 (688,NULL,'qQliBvNh.jpg','jpg',2969,'D:\\data\\tagocms-dev\\Popup\\688\\qQliBvNh.jpg','/files/download/Popup/qQliBvNh.jpg','/files/download/604','/manage/files/604/delete',NULL,NULL,NULL,NULL,'Y','corp.jpg'),
	 (689,NULL,'6cjZs6Tc.jpg','jpg',7211,'D:\\data\\tagocms-dev\\Popup\\689\\6cjZs6Tc.jpg','/files/download/Popup/6cjZs6Tc.jpg','/files/download/605','/manage/files/605/delete',NULL,NULL,NULL,NULL,'Y','download (1).jpg'),
	 (690,NULL,'tQhST5Gs.jpg','jpg',7026,'D:\\data\\tagocms-dev\\Popup\\690\\tQhST5Gs.jpg','/files/download/Popup/tQhST5Gs.jpg','/files/download/606','/manage/files/606/delete',NULL,NULL,NULL,NULL,'Y','download.jpg'),
	 (689,NULL,'GowFLK9H.jpg','jpg',7211,'D:\\data\\tagocms-dev\\Popup\\689\\GowFLK9H.jpg','/files/download/Popup/GowFLK9H.jpg','/files/download/607','/manage/files/607/delete',NULL,NULL,NULL,NULL,'Y','download (1).jpg'),
	 (690,NULL,'4sJv7lAB.jpg','jpg',7026,'D:\\data\\tagocms-dev\\Popup\\690\\4sJv7lAB.jpg','/files/download/Popup/4sJv7lAB.jpg','/files/download/608','/manage/files/608/delete',NULL,NULL,NULL,NULL,'Y','download.jpg'),
	 (691,NULL,'GadoZACH.jpg','jpg',7026,'D:\\data\\tagocms-dev\\Banner\\691\\GadoZACH.jpg','/files/download/Banner/GadoZACH.jpg','/files/download/609','/manage/files/609/delete',NULL,NULL,NULL,NULL,'Y','download.jpg'),
	 (692,NULL,'0BoBluau.jpg','jpg',7401,'D:\\data\\tagocms-dev\\Banner\\692\\0BoBluau.jpg','/files/download/Banner/0BoBluau.jpg','/files/download/610','/manage/files/610/delete',NULL,NULL,NULL,NULL,'Y','download (2).jpg'),
	 (681,NULL,'lphLGUUe.jpg','jpg',7211,'D:\\data\\tagocms-dev\\Banner\\681\\lphLGUUe.jpg','/files/download/Banner/lphLGUUe.jpg','/files/download/611','/manage/files/611/delete',NULL,NULL,NULL,NULL,'Y','download (1).jpg');
INSERT INTO tagocms.t_file (file_group_seq,order_number,stored_file_name,file_ext,file_size,stored_path,view_url,download_url,delete_url,created_date,created_by,modified_date,modified_by,is_deleted,file_name) VALUES
	 (682,NULL,'vpLL9GsK.jpg','jpg',7401,'D:\\data\\tagocms-dev\\Banner\\682\\vpLL9GsK.jpg','/files/download/Banner/vpLL9GsK.jpg','/files/download/612','/manage/files/612/delete',NULL,NULL,NULL,NULL,'Y','download (2).jpg'),
	 (683,NULL,'DBUxMlQV.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Banner\\683\\DBUxMlQV.jpg','/files/download/Banner/DBUxMlQV.jpg','/files/download/613','/manage/files/613/delete',NULL,NULL,NULL,NULL,'Y','s-corp-vs-c-corp.jpg'),
	 (684,NULL,'9UTYwLZJ.jpg','jpg',7026,'D:\\data\\tagocms-dev\\Banner\\684\\9UTYwLZJ.jpg','/files/download/Banner/9UTYwLZJ.jpg','/files/download/614','/manage/files/614/delete',NULL,NULL,NULL,NULL,'Y','download.jpg'),
	 (691,NULL,'WWWuaa7N.png','png',18453,'D:\\data\\tagocms-dev\\Banner\\691\\WWWuaa7N.png','/files/download/Banner/WWWuaa7N.png','/files/download/615','/manage/files/615/delete',NULL,NULL,NULL,NULL,'Y','783px-Test-Logo.svg.png'),
	 (692,NULL,'tTtWAGZF.jpg','jpg',7026,'D:\\data\\tagocms-dev\\Banner\\692\\tTtWAGZF.jpg','/files/download/Banner/tTtWAGZF.jpg','/files/download/616','/manage/files/616/delete',NULL,NULL,NULL,NULL,'Y','download.jpg'),
	 (685,NULL,'9sKY6srk.jpg','jpg',2969,'D:\\data\\tagocms-dev\\Banner\\685\\9sKY6srk.jpg','/files/download/Banner/9sKY6srk.jpg','/files/download/617','/manage/files/617/delete',NULL,NULL,NULL,NULL,'Y','corp.jpg'),
	 (686,NULL,'SjkHxnIG.jpg','jpg',2969,'D:\\data\\tagocms-dev\\Banner\\686\\SjkHxnIG.jpg','/files/download/Banner/SjkHxnIG.jpg','/files/download/618','/manage/files/618/delete',NULL,NULL,NULL,NULL,'Y','corp.jpg'),
	 (683,NULL,'4Xt0WcDI.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Banner\\683\\4Xt0WcDI.jpg','/files/download/Banner/4Xt0WcDI.jpg','/files/download/619','/manage/files/619/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (684,NULL,'TlPcwdfu.jpg','jpg',7026,'D:\\data\\tagocms-dev\\Banner\\684\\TlPcwdfu.jpg','/files/download/Banner/TlPcwdfu.jpg','/files/download/620','/manage/files/620/delete',NULL,NULL,NULL,NULL,'N','download.jpg'),
	 (687,NULL,'Ls2NJYiP.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Popup\\687\\Ls2NJYiP.jpg','/files/download/Popup/Ls2NJYiP.jpg','/files/download/621','/manage/files/621/delete',NULL,NULL,NULL,NULL,'Y','s-corp-vs-c-corp.jpg');
INSERT INTO tagocms.t_file (file_group_seq,order_number,stored_file_name,file_ext,file_size,stored_path,view_url,download_url,delete_url,created_date,created_by,modified_date,modified_by,is_deleted,file_name) VALUES
	 (688,NULL,'gewaiCQY.jpg','jpg',7401,'D:\\data\\tagocms-dev\\Popup\\688\\gewaiCQY.jpg','/files/download/Popup/gewaiCQY.jpg','/files/download/622','/manage/files/622/delete',NULL,NULL,NULL,NULL,'Y','download (2).jpg'),
	 (693,NULL,'wWN7cGQg.jpg','jpg',2969,'D:\\data\\tagocms-dev\\Banner\\693\\wWN7cGQg.jpg','/files/download/Banner/wWN7cGQg.jpg','/files/download/623','/manage/files/623/delete',NULL,NULL,NULL,NULL,'Y','corp.jpg'),
	 (693,NULL,'YnyBs6bD.png','png',18453,'D:\\data\\tagocms-dev\\Banner\\693\\YnyBs6bD.png','/files/download/Banner/YnyBs6bD.png','/files/download/624','/manage/files/624/delete',NULL,NULL,NULL,NULL,'Y','783px-Test-Logo.svg.png'),
	 (681,NULL,'R6rAjdxH.jpg','jpg',7211,'D:\\data\\tagocms-dev\\Banner\\681\\R6rAjdxH.jpg','/files/download/Banner/R6rAjdxH.jpg','/files/download/625','/manage/files/625/delete',NULL,NULL,NULL,NULL,'Y','download (1).jpg'),
	 (682,NULL,'bm7EW5lQ.jpg','jpg',7401,'D:\\data\\tagocms-dev\\Banner\\682\\bm7EW5lQ.jpg','/files/download/Banner/bm7EW5lQ.jpg','/files/download/626','/manage/files/626/delete',NULL,NULL,NULL,NULL,'Y','download (2).jpg'),
	 (689,NULL,'jrYdiLNo.jpg','jpg',7211,'D:\\data\\tagocms-dev\\Popup\\689\\jrYdiLNo.jpg','/files/download/Popup/jrYdiLNo.jpg','/files/download/627','/manage/files/627/delete',NULL,NULL,NULL,NULL,'Y','download (1).jpg'),
	 (690,NULL,'Lm7c5YFR.jpg','jpg',7026,'D:\\data\\tagocms-dev\\Popup\\690\\Lm7c5YFR.jpg','/files/download/Popup/Lm7c5YFR.jpg','/files/download/628','/manage/files/628/delete',NULL,NULL,NULL,NULL,'Y','download.jpg'),
	 (687,NULL,'rTW6SR93.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Popup\\687\\rTW6SR93.jpg','/files/download/Popup/rTW6SR93.jpg','/files/download/629','/manage/files/629/delete',NULL,NULL,NULL,NULL,'Y','s-corp-vs-c-corp.jpg'),
	 (688,NULL,'4PhzfjwS.jpg','jpg',7401,'D:\\data\\tagocms-dev\\Popup\\688\\4PhzfjwS.jpg','/files/download/Popup/4PhzfjwS.jpg','/files/download/630','/manage/files/630/delete',NULL,NULL,NULL,NULL,'Y','download (2).jpg'),
	 (691,NULL,'AOYvnVXD.png','png',18453,'D:\\data\\tagocms-dev\\Banner\\691\\AOYvnVXD.png','/files/download/Banner/AOYvnVXD.png','/files/download/631','/manage/files/631/delete',NULL,NULL,NULL,NULL,'N','783px-Test-Logo.svg.png');
INSERT INTO tagocms.t_file (file_group_seq,order_number,stored_file_name,file_ext,file_size,stored_path,view_url,download_url,delete_url,created_date,created_by,modified_date,modified_by,is_deleted,file_name) VALUES
	 (692,NULL,'O9YoHpvJ.jpg','jpg',7026,'D:\\data\\tagocms-dev\\Banner\\692\\O9YoHpvJ.jpg','/files/download/Banner/O9YoHpvJ.jpg','/files/download/632','/manage/files/632/delete',NULL,NULL,NULL,NULL,'N','download.jpg'),
	 (687,NULL,'r66oJJki.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Popup\\687\\r66oJJki.jpg','/files/download/Popup/r66oJJki.jpg','/files/download/633','/manage/files/633/delete',NULL,NULL,NULL,NULL,'Y','s-corp-vs-c-corp.jpg'),
	 (688,NULL,'8xg1eHCI.jpg','jpg',7401,'D:\\data\\tagocms-dev\\Popup\\688\\8xg1eHCI.jpg','/files/download/Popup/8xg1eHCI.jpg','/files/download/634','/manage/files/634/delete',NULL,NULL,NULL,NULL,'Y','download (2).jpg'),
	 (687,NULL,'ZHd65r9G.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Popup\\687\\ZHd65r9G.jpg','/files/download/Popup/ZHd65r9G.jpg','/files/download/635','/manage/files/635/delete',NULL,NULL,NULL,NULL,'Y','s-corp-vs-c-corp.jpg'),
	 (688,NULL,'OU5llGCe.jpg','jpg',7401,'D:\\data\\tagocms-dev\\Popup\\688\\OU5llGCe.jpg','/files/download/Popup/OU5llGCe.jpg','/files/download/636','/manage/files/636/delete',NULL,NULL,NULL,NULL,'Y','download (2).jpg'),
	 (687,NULL,'TTxVAcRj.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Popup\\687\\TTxVAcRj.jpg','/files/download/Popup/TTxVAcRj.jpg','/files/download/637','/manage/files/637/delete',NULL,NULL,NULL,NULL,'Y','s-corp-vs-c-corp.jpg'),
	 (688,NULL,'9pursHmR.jpg','jpg',7401,'D:\\data\\tagocms-dev\\Popup\\688\\9pursHmR.jpg','/files/download/Popup/9pursHmR.jpg','/files/download/638','/manage/files/638/delete',NULL,NULL,NULL,NULL,'Y','download (2).jpg'),
	 (687,NULL,'J8I3yw98.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Popup\\687\\J8I3yw98.jpg','/files/download/Popup/J8I3yw98.jpg','/files/download/639','/manage/files/639/delete',NULL,NULL,NULL,NULL,'Y','s-corp-vs-c-corp.jpg'),
	 (688,NULL,'fK8XRbi5.jpg','jpg',7401,'D:\\data\\tagocms-dev\\Popup\\688\\fK8XRbi5.jpg','/files/download/Popup/fK8XRbi5.jpg','/files/download/640','/manage/files/640/delete',NULL,NULL,NULL,NULL,'Y','download (2).jpg'),
	 (689,NULL,'31gQctqe.jpg','jpg',7211,'D:\\data\\tagocms-dev\\Popup\\689\\31gQctqe.jpg','/files/download/Popup/31gQctqe.jpg','/files/download/641','/manage/files/641/delete',NULL,NULL,NULL,NULL,'N','download (1).jpg');
INSERT INTO tagocms.t_file (file_group_seq,order_number,stored_file_name,file_ext,file_size,stored_path,view_url,download_url,delete_url,created_date,created_by,modified_date,modified_by,is_deleted,file_name) VALUES
	 (690,NULL,'nElNuHBJ.jpg','jpg',7026,'D:\\data\\tagocms-dev\\Popup\\690\\nElNuHBJ.jpg','/files/download/Popup/nElNuHBJ.jpg','/files/download/642','/manage/files/642/delete',NULL,NULL,NULL,NULL,'N','download.jpg'),
	 (681,NULL,'LtWWnA4y.jpg','jpg',7211,'D:\\data\\tagocms-dev\\Banner\\681\\LtWWnA4y.jpg','/files/download/Banner/LtWWnA4y.jpg','/files/download/643','/manage/files/643/delete',NULL,NULL,NULL,NULL,'N','download (1).jpg'),
	 (682,NULL,'bIk3SA8J.jpg','jpg',7401,'D:\\data\\tagocms-dev\\Banner\\682\\bIk3SA8J.jpg','/files/download/Banner/bIk3SA8J.jpg','/files/download/644','/manage/files/644/delete',NULL,NULL,NULL,NULL,'N','download (2).jpg'),
	 (695,NULL,'UCqxVP03.jpg','jpg',7026,'D:\\data\\tagocms-dev\\Popup\\695\\UCqxVP03.jpg','/files/download/Popup/UCqxVP03.jpg','/files/download/645','/manage/files/645/delete',NULL,NULL,NULL,NULL,'Y','download.jpg'),
	 (696,NULL,'Mqo8F19y.jpg','jpg',7401,'D:\\data\\tagocms-dev\\Popup\\696\\Mqo8F19y.jpg','/files/download/Popup/Mqo8F19y.jpg','/files/download/646','/manage/files/646/delete',NULL,NULL,NULL,NULL,'Y','download (2).jpg'),
	 (695,NULL,'CgJFkfmy.jpg','jpg',7026,'D:\\data\\tagocms-dev\\Popup\\695\\CgJFkfmy.jpg','/files/download/Popup/CgJFkfmy.jpg','/files/download/647','/manage/files/647/delete',NULL,NULL,NULL,NULL,'Y','download.jpg'),
	 (696,NULL,'ENNekokk.jpg','jpg',7401,'D:\\data\\tagocms-dev\\Popup\\696\\ENNekokk.jpg','/files/download/Popup/ENNekokk.jpg','/files/download/648','/manage/files/648/delete',NULL,NULL,NULL,NULL,'Y','download (2).jpg'),
	 (695,NULL,'EY6eNShq.jpg','jpg',7026,'D:\\data\\tagocms-dev\\Popup\\695\\EY6eNShq.jpg','/files/download/Popup/EY6eNShq.jpg','/files/download/649','/manage/files/649/delete',NULL,NULL,NULL,NULL,'Y','download.jpg'),
	 (696,NULL,'0nxtu0Jw.jpg','jpg',7401,'D:\\data\\tagocms-dev\\Popup\\696\\0nxtu0Jw.jpg','/files/download/Popup/0nxtu0Jw.jpg','/files/download/650','/manage/files/650/delete',NULL,NULL,NULL,NULL,'Y','download (2).jpg'),
	 (695,NULL,'EhYhFxol.jpg','jpg',7026,'D:\\data\\tagocms-dev\\Popup\\695\\EhYhFxol.jpg','/files/download/Popup/EhYhFxol.jpg','/files/download/651','/manage/files/651/delete',NULL,NULL,NULL,NULL,'Y','download.jpg');
INSERT INTO tagocms.t_file (file_group_seq,order_number,stored_file_name,file_ext,file_size,stored_path,view_url,download_url,delete_url,created_date,created_by,modified_date,modified_by,is_deleted,file_name) VALUES
	 (696,NULL,'ahgIyqC6.jpg','jpg',7401,'D:\\data\\tagocms-dev\\Popup\\696\\ahgIyqC6.jpg','/files/download/Popup/ahgIyqC6.jpg','/files/download/652','/manage/files/652/delete',NULL,NULL,NULL,NULL,'Y','download (2).jpg'),
	 (695,NULL,'NXsemfJ7.jpg','jpg',7026,'D:\\data\\tagocms-dev\\Popup\\695\\NXsemfJ7.jpg','/files/download/Popup/NXsemfJ7.jpg','/files/download/653','/manage/files/653/delete',NULL,NULL,NULL,NULL,'Y','download.jpg'),
	 (696,NULL,'SAR57DUp.jpg','jpg',7401,'D:\\data\\tagocms-dev\\Popup\\696\\SAR57DUp.jpg','/files/download/Popup/SAR57DUp.jpg','/files/download/654','/manage/files/654/delete',NULL,NULL,NULL,NULL,'Y','download (2).jpg'),
	 (695,NULL,'Btk4kdml.jpg','jpg',7026,'D:\\data\\tagocms-dev\\Popup\\695\\Btk4kdml.jpg','/files/download/Popup/Btk4kdml.jpg','/files/download/655','/manage/files/655/delete',NULL,NULL,NULL,NULL,'Y','download.jpg'),
	 (696,NULL,'7Z3cFZtF.jpg','jpg',7401,'D:\\data\\tagocms-dev\\Popup\\696\\7Z3cFZtF.jpg','/files/download/Popup/7Z3cFZtF.jpg','/files/download/656','/manage/files/656/delete',NULL,NULL,NULL,NULL,'Y','download (2).jpg'),
	 (695,NULL,'jZ8RkXZP.jpg','jpg',7026,'D:\\data\\tagocms-dev\\Popup\\695\\jZ8RkXZP.jpg','/files/download/Popup/jZ8RkXZP.jpg','/files/download/657','/manage/files/657/delete',NULL,NULL,NULL,NULL,'Y','download.jpg'),
	 (696,NULL,'k7EvlsiE.jpg','jpg',7401,'D:\\data\\tagocms-dev\\Popup\\696\\k7EvlsiE.jpg','/files/download/Popup/k7EvlsiE.jpg','/files/download/658','/manage/files/658/delete',NULL,NULL,NULL,NULL,'Y','download (2).jpg'),
	 (695,NULL,'5dw2XTrg.jpg','jpg',7026,'D:\\data\\tagocms-dev\\Popup\\695\\5dw2XTrg.jpg','/files/download/Popup/5dw2XTrg.jpg','/files/download/659','/manage/files/659/delete',NULL,NULL,NULL,NULL,'Y','download.jpg'),
	 (696,NULL,'JEIZcqMi.jpg','jpg',7401,'D:\\data\\tagocms-dev\\Popup\\696\\JEIZcqMi.jpg','/files/download/Popup/JEIZcqMi.jpg','/files/download/660','/manage/files/660/delete',NULL,NULL,NULL,NULL,'Y','download (2).jpg'),
	 (695,NULL,'utT18GaL.jpg','jpg',7026,'D:\\data\\tagocms-dev\\Popup\\695\\utT18GaL.jpg','/files/download/Popup/utT18GaL.jpg','/files/download/661','/manage/files/661/delete',NULL,NULL,NULL,NULL,'Y','download.jpg');
INSERT INTO tagocms.t_file (file_group_seq,order_number,stored_file_name,file_ext,file_size,stored_path,view_url,download_url,delete_url,created_date,created_by,modified_date,modified_by,is_deleted,file_name) VALUES
	 (696,NULL,'8kIrIZwi.jpg','jpg',7401,'D:\\data\\tagocms-dev\\Popup\\696\\8kIrIZwi.jpg','/files/download/Popup/8kIrIZwi.jpg','/files/download/662','/manage/files/662/delete',NULL,NULL,NULL,NULL,'Y','download (2).jpg'),
	 (695,NULL,'NRxDjEgv.jpg','jpg',7026,'D:\\data\\tagocms-dev\\Popup\\695\\NRxDjEgv.jpg','/files/download/Popup/NRxDjEgv.jpg','/files/download/663','/manage/files/663/delete',NULL,NULL,NULL,NULL,'N','download.jpg'),
	 (696,NULL,'g2ylVSsZ.jpg','jpg',7401,'D:\\data\\tagocms-dev\\Popup\\696\\g2ylVSsZ.jpg','/files/download/Popup/g2ylVSsZ.jpg','/files/download/664','/manage/files/664/delete',NULL,NULL,NULL,NULL,'N','download (2).jpg'),
	 (697,NULL,'QR5wO3Vi.jpg','jpg',2969,'D:\\data\\tagocms-dev\\Popup\\697\\QR5wO3Vi.jpg','/files/download/Popup/QR5wO3Vi.jpg','/files/download/665','/manage/files/665/delete',NULL,NULL,NULL,NULL,'Y','corp.jpg'),
	 (698,NULL,'zshsnM31.png','png',14606,'D:\\data\\tagocms-dev\\Popup\\698\\zshsnM31.png','/files/download/Popup/zshsnM31.png','/files/download/666','/manage/files/666/delete',NULL,NULL,NULL,NULL,'Y','logo.png'),
	 (697,NULL,'4K7gDW2Y.jpg','jpg',2969,'D:\\data\\tagocms-dev\\Popup\\697\\4K7gDW2Y.jpg','/files/download/Popup/4K7gDW2Y.jpg','/files/download/667','/manage/files/667/delete',NULL,NULL,NULL,NULL,'Y','corp.jpg'),
	 (698,NULL,'QnFKtST1.png','png',14606,'D:\\data\\tagocms-dev\\Popup\\698\\QnFKtST1.png','/files/download/Popup/QnFKtST1.png','/files/download/668','/manage/files/668/delete',NULL,NULL,NULL,NULL,'Y','logo.png'),
	 (697,NULL,'hIhQVIQJ.jpg','jpg',2969,'D:\\data\\tagocms-dev\\Popup\\697\\hIhQVIQJ.jpg','/files/download/Popup/hIhQVIQJ.jpg','/files/download/669','/manage/files/669/delete',NULL,NULL,NULL,NULL,'N','corp.jpg'),
	 (698,NULL,'gyD3IVs7.png','png',14606,'D:\\data\\tagocms-dev\\Popup\\698\\gyD3IVs7.png','/files/download/Popup/gyD3IVs7.png','/files/download/670','/manage/files/670/delete',NULL,NULL,NULL,NULL,'N','logo.png'),
	 (699,NULL,'VwseM1eU.jpg','jpg',7401,'D:\\data\\tagocms-dev\\Popup\\699\\VwseM1eU.jpg','/files/download/Popup/VwseM1eU.jpg','/files/download/671','/manage/files/671/delete',NULL,NULL,NULL,NULL,'Y','download (2).jpg');
INSERT INTO tagocms.t_file (file_group_seq,order_number,stored_file_name,file_ext,file_size,stored_path,view_url,download_url,delete_url,created_date,created_by,modified_date,modified_by,is_deleted,file_name) VALUES
	 (700,NULL,'pkpYKy8W.jpg','jpg',7026,'D:\\data\\tagocms-dev\\Popup\\700\\pkpYKy8W.jpg','/files/download/Popup/pkpYKy8W.jpg','/files/download/672','/manage/files/672/delete',NULL,NULL,NULL,NULL,'Y','download.jpg'),
	 (699,NULL,'oq466fx1.jpg','jpg',7401,'D:\\data\\tagocms-dev\\Popup\\699\\oq466fx1.jpg','/files/download/Popup/oq466fx1.jpg','/files/download/673','/manage/files/673/delete',NULL,NULL,NULL,NULL,'Y','download (2).jpg'),
	 (700,NULL,'8lgFBaCI.jpg','jpg',7026,'D:\\data\\tagocms-dev\\Popup\\700\\8lgFBaCI.jpg','/files/download/Popup/8lgFBaCI.jpg','/files/download/674','/manage/files/674/delete',NULL,NULL,NULL,NULL,'Y','download.jpg'),
	 (699,NULL,'qXIzia0K.jpg','jpg',7401,'D:\\data\\tagocms-dev\\Popup\\699\\qXIzia0K.jpg','/files/download/Popup/qXIzia0K.jpg','/files/download/675','/manage/files/675/delete',NULL,NULL,NULL,NULL,'Y','download (2).jpg'),
	 (700,NULL,'7SPYB6yY.jpg','jpg',7026,'D:\\data\\tagocms-dev\\Popup\\700\\7SPYB6yY.jpg','/files/download/Popup/7SPYB6yY.jpg','/files/download/676','/manage/files/676/delete',NULL,NULL,NULL,NULL,'Y','download.jpg'),
	 (699,NULL,'X57HZw19.jpg','jpg',7401,'D:\\data\\tagocms-dev\\Popup\\699\\X57HZw19.jpg','/files/download/Popup/X57HZw19.jpg','/files/download/677','/manage/files/677/delete',NULL,NULL,NULL,NULL,'Y','download (2).jpg'),
	 (700,NULL,'a6igPjmG.jpg','jpg',7026,'D:\\data\\tagocms-dev\\Popup\\700\\a6igPjmG.jpg','/files/download/Popup/a6igPjmG.jpg','/files/download/678','/manage/files/678/delete',NULL,NULL,NULL,NULL,'Y','download.jpg'),
	 (699,NULL,'uNddJK1Y.jpg','jpg',7401,'D:\\data\\tagocms-dev\\Popup\\699\\uNddJK1Y.jpg','/files/download/Popup/uNddJK1Y.jpg','/files/download/679','/manage/files/679/delete',NULL,NULL,NULL,NULL,'Y','download (2).jpg'),
	 (700,NULL,'HYxvVhw5.jpg','jpg',7026,'D:\\data\\tagocms-dev\\Popup\\700\\HYxvVhw5.jpg','/files/download/Popup/HYxvVhw5.jpg','/files/download/680','/manage/files/680/delete',NULL,NULL,NULL,NULL,'Y','download.jpg'),
	 (699,NULL,'rIb9x8OO.jpg','jpg',7401,'D:\\data\\tagocms-dev\\Popup\\699\\rIb9x8OO.jpg','/files/download/Popup/rIb9x8OO.jpg','/files/download/681','/manage/files/681/delete',NULL,NULL,NULL,NULL,'Y','download (2).jpg');
INSERT INTO tagocms.t_file (file_group_seq,order_number,stored_file_name,file_ext,file_size,stored_path,view_url,download_url,delete_url,created_date,created_by,modified_date,modified_by,is_deleted,file_name) VALUES
	 (700,NULL,'Nq5Udbe3.jpg','jpg',7026,'D:\\data\\tagocms-dev\\Popup\\700\\Nq5Udbe3.jpg','/files/download/Popup/Nq5Udbe3.jpg','/files/download/682','/manage/files/682/delete',NULL,NULL,NULL,NULL,'Y','download.jpg'),
	 (687,NULL,'aD3fBlBW.png','png',14606,'D:\\data\\tagocms-dev\\Popup\\687\\aD3fBlBW.png','/files/download/Popup/aD3fBlBW.png','/files/download/683','/manage/files/683/delete',NULL,NULL,NULL,NULL,'Y','logo.png'),
	 (688,NULL,'J6EeXv2y.jpg','jpg',2969,'D:\\data\\tagocms-dev\\Popup\\688\\J6EeXv2y.jpg','/files/download/Popup/J6EeXv2y.jpg','/files/download/684','/manage/files/684/delete',NULL,NULL,NULL,NULL,'Y','corp.jpg'),
	 (687,NULL,'FRWd4iBS.png','png',14606,'D:\\data\\tagocms-dev\\Popup\\687\\FRWd4iBS.png','/files/download/Popup/FRWd4iBS.png','/files/download/685','/manage/files/685/delete',NULL,NULL,NULL,NULL,'N','logo.png'),
	 (688,NULL,'DNYMUEBd.jpg','jpg',2969,'D:\\data\\tagocms-dev\\Popup\\688\\DNYMUEBd.jpg','/files/download/Popup/DNYMUEBd.jpg','/files/download/686','/manage/files/686/delete',NULL,NULL,NULL,NULL,'N','corp.jpg'),
	 (685,NULL,'evSDlwYv.jpg','jpg',2969,'D:\\data\\tagocms-dev\\Banner\\685\\evSDlwYv.jpg','/files/download/Banner/evSDlwYv.jpg','/files/download/687','/manage/files/687/delete',NULL,NULL,NULL,NULL,'Y','corp.jpg'),
	 (686,NULL,'MV1ib1tV.jpg','jpg',2969,'D:\\data\\tagocms-dev\\Banner\\686\\MV1ib1tV.jpg','/files/download/Banner/MV1ib1tV.jpg','/files/download/688','/manage/files/688/delete',NULL,NULL,NULL,NULL,'Y','corp.jpg'),
	 (685,NULL,'1a6aUMof.jpg','jpg',2969,'D:\\data\\tagocms-dev\\Banner\\685\\1a6aUMof.jpg','/files/download/Banner/1a6aUMof.jpg','/files/download/689','/manage/files/689/delete',NULL,NULL,NULL,NULL,'Y','corp.jpg'),
	 (686,NULL,'TCsYgzjt.jpg','jpg',2969,'D:\\data\\tagocms-dev\\Banner\\686\\TCsYgzjt.jpg','/files/download/Banner/TCsYgzjt.jpg','/files/download/690','/manage/files/690/delete',NULL,NULL,NULL,NULL,'Y','corp.jpg'),
	 (685,NULL,'6ry2oY8H.jpg','jpg',2969,'D:\\data\\tagocms-dev\\Banner\\685\\6ry2oY8H.jpg','/files/download/Banner/6ry2oY8H.jpg','/files/download/691','/manage/files/691/delete',NULL,NULL,NULL,NULL,'N','corp.jpg');
INSERT INTO tagocms.t_file (file_group_seq,order_number,stored_file_name,file_ext,file_size,stored_path,view_url,download_url,delete_url,created_date,created_by,modified_date,modified_by,is_deleted,file_name) VALUES
	 (686,NULL,'WH7UI0vF.jpg','jpg',2969,'D:\\data\\tagocms-dev\\Banner\\686\\WH7UI0vF.jpg','/files/download/Banner/WH7UI0vF.jpg','/files/download/692','/manage/files/692/delete',NULL,NULL,NULL,NULL,'N','corp.jpg'),
	 (699,NULL,'uF2lR3rb.png','png',3439152,'/data/tagocms-staging/Popup/699/uF2lR3rb.png','/files/download/Popup/uF2lR3rb.png','/files/download/693','/manage/files/693/delete',NULL,NULL,NULL,NULL,'Y','Fade.png'),
	 (700,NULL,'hh8BhrM1.png','png',1043549,'/data/tagocms-staging/Popup/700/hh8BhrM1.png','/files/download/Popup/hh8BhrM1.png','/files/download/694','/manage/files/694/delete',NULL,NULL,NULL,NULL,'Y','Tech.png'),
	 (699,NULL,'nT9hbhcE.png','png',3439152,'/data/tagocms-staging/Popup/699/nT9hbhcE.png','/files/download/Popup/nT9hbhcE.png','/files/download/695','/manage/files/695/delete',NULL,NULL,NULL,NULL,'Y','Fade.png'),
	 (700,NULL,'6n0weIoQ.png','png',1043549,'/data/tagocms-staging/Popup/700/6n0weIoQ.png','/files/download/Popup/6n0weIoQ.png','/files/download/696','/manage/files/696/delete',NULL,NULL,NULL,NULL,'Y','Tech.png'),
	 (699,NULL,'iYQMfyzT.png','png',3439152,'/data/tagocms-staging/Popup/699/iYQMfyzT.png','/files/download/Popup/iYQMfyzT.png','/files/download/697','/manage/files/697/delete',NULL,NULL,NULL,NULL,'N','Fade.png'),
	 (700,NULL,'ypSJbm4c.png','png',1043549,'/data/tagocms-staging/Popup/700/ypSJbm4c.png','/files/download/Popup/ypSJbm4c.png','/files/download/698','/manage/files/698/delete',NULL,NULL,NULL,NULL,'N','Tech.png'),
	 (701,NULL,'B0x4yvUO.jpg','jpg',7401,'D:\\data\\tagocms-dev\\Popup\\701\\B0x4yvUO.jpg','/files/download/Popup/B0x4yvUO.jpg','/files/download/699','/manage/files/699/delete',NULL,NULL,NULL,NULL,'Y','download (2).jpg'),
	 (702,NULL,'nloGesda.jpg','jpg',7401,'D:\\data\\tagocms-dev\\Popup\\702\\nloGesda.jpg','/files/download/Popup/nloGesda.jpg','/files/download/700','/manage/files/700/delete',NULL,NULL,NULL,NULL,'Y','download (2).jpg'),
	 (701,NULL,'L0YUxZrH.jpg','jpg',7401,'D:\\data\\tagocms-dev\\Popup\\701\\L0YUxZrH.jpg','/files/download/Popup/L0YUxZrH.jpg','/files/download/701','/manage/files/701/delete',NULL,NULL,NULL,NULL,'Y','download (2).jpg');
INSERT INTO tagocms.t_file (file_group_seq,order_number,stored_file_name,file_ext,file_size,stored_path,view_url,download_url,delete_url,created_date,created_by,modified_date,modified_by,is_deleted,file_name) VALUES
	 (702,NULL,'ErFhXZfF.jpg','jpg',7401,'D:\\data\\tagocms-dev\\Popup\\702\\ErFhXZfF.jpg','/files/download/Popup/ErFhXZfF.jpg','/files/download/702','/manage/files/702/delete',NULL,NULL,NULL,NULL,'Y','download (2).jpg'),
	 (701,NULL,'iL3oTDPW.jpg','jpg',7401,'D:\\data\\tagocms-dev\\Popup\\701\\iL3oTDPW.jpg','/files/download/Popup/iL3oTDPW.jpg','/files/download/703','/manage/files/703/delete',NULL,NULL,NULL,NULL,'N','download (2).jpg'),
	 (702,NULL,'tN23sfRx.jpg','jpg',7401,'D:\\data\\tagocms-dev\\Popup\\702\\tN23sfRx.jpg','/files/download/Popup/tN23sfRx.jpg','/files/download/704','/manage/files/704/delete',NULL,NULL,NULL,NULL,'N','download (2).jpg'),
	 (703,NULL,'MJGF3Yv0.jpg','jpg',7026,'D:\\data\\tagocms-dev\\Popup\\703\\MJGF3Yv0.jpg','/files/download/Popup/MJGF3Yv0.jpg','/files/download/705','/manage/files/705/delete',NULL,NULL,NULL,NULL,'Y','download.jpg'),
	 (704,NULL,'1joPKUDA.jpg','jpg',7026,'D:\\data\\tagocms-dev\\Popup\\704\\1joPKUDA.jpg','/files/download/Popup/1joPKUDA.jpg','/files/download/706','/manage/files/706/delete',NULL,NULL,NULL,NULL,'Y','download.jpg'),
	 (703,NULL,'fCSclznd.jpg','jpg',7026,'D:\\data\\tagocms-dev\\Popup\\703\\fCSclznd.jpg','/files/download/Popup/fCSclznd.jpg','/files/download/707','/manage/files/707/delete',NULL,NULL,NULL,NULL,'N','download.jpg'),
	 (704,NULL,'FpeTWktT.jpg','jpg',7026,'D:\\data\\tagocms-dev\\Popup\\704\\FpeTWktT.jpg','/files/download/Popup/FpeTWktT.jpg','/files/download/708','/manage/files/708/delete',NULL,NULL,NULL,NULL,'N','download.jpg'),
	 (705,NULL,'POR4OYf6.png','png',18453,'D:\\data\\tagocms-dev\\Popup\\705\\POR4OYf6.png','/files/download/Popup/POR4OYf6.png','/files/download/709','/manage/files/709/delete',NULL,NULL,NULL,NULL,'Y','783px-Test-Logo.svg.png'),
	 (706,NULL,'lIis8PTc.png','png',18453,'D:\\data\\tagocms-dev\\Popup\\706\\lIis8PTc.png','/files/download/Popup/lIis8PTc.png','/files/download/710','/manage/files/710/delete',NULL,NULL,NULL,NULL,'Y','783px-Test-Logo.svg.png'),
	 (705,NULL,'rmoktgKI.png','png',18453,'D:\\data\\tagocms-dev\\Popup\\705\\rmoktgKI.png','/files/download/Popup/rmoktgKI.png','/files/download/711','/manage/files/711/delete',NULL,NULL,NULL,NULL,'Y','783px-Test-Logo.svg.png');
INSERT INTO tagocms.t_file (file_group_seq,order_number,stored_file_name,file_ext,file_size,stored_path,view_url,download_url,delete_url,created_date,created_by,modified_date,modified_by,is_deleted,file_name) VALUES
	 (706,NULL,'JcE49D4s.png','png',18453,'D:\\data\\tagocms-dev\\Popup\\706\\JcE49D4s.png','/files/download/Popup/JcE49D4s.png','/files/download/712','/manage/files/712/delete',NULL,NULL,NULL,NULL,'Y','783px-Test-Logo.svg.png'),
	 (705,NULL,'QcNKxBlC.png','png',18453,'D:\\data\\tagocms-dev\\Popup\\705\\QcNKxBlC.png','/files/download/Popup/QcNKxBlC.png','/files/download/713','/manage/files/713/delete',NULL,NULL,NULL,NULL,'Y','783px-Test-Logo.svg.png'),
	 (706,NULL,'bUgV6kBg.png','png',18453,'D:\\data\\tagocms-dev\\Popup\\706\\bUgV6kBg.png','/files/download/Popup/bUgV6kBg.png','/files/download/714','/manage/files/714/delete',NULL,NULL,NULL,NULL,'Y','783px-Test-Logo.svg.png'),
	 (705,NULL,'gI0uS5RQ.png','png',18453,'D:\\data\\tagocms-dev\\Popup\\705\\gI0uS5RQ.png','/files/download/Popup/gI0uS5RQ.png','/files/download/715','/manage/files/715/delete',NULL,NULL,NULL,NULL,'Y','783px-Test-Logo.svg.png'),
	 (706,NULL,'DDVsdTMQ.png','png',18453,'D:\\data\\tagocms-dev\\Popup\\706\\DDVsdTMQ.png','/files/download/Popup/DDVsdTMQ.png','/files/download/716','/manage/files/716/delete',NULL,NULL,NULL,NULL,'Y','783px-Test-Logo.svg.png'),
	 (705,NULL,'nzqwuimu.png','png',18453,'D:\\data\\tagocms-dev\\Popup\\705\\nzqwuimu.png','/files/download/Popup/nzqwuimu.png','/files/download/717','/manage/files/717/delete',NULL,NULL,NULL,NULL,'Y','783px-Test-Logo.svg.png'),
	 (706,NULL,'FujixpYg.png','png',18453,'D:\\data\\tagocms-dev\\Popup\\706\\FujixpYg.png','/files/download/Popup/FujixpYg.png','/files/download/718','/manage/files/718/delete',NULL,NULL,NULL,NULL,'Y','783px-Test-Logo.svg.png'),
	 (705,NULL,'HKrAUuNq.png','png',18453,'D:\\data\\tagocms-dev\\Popup\\705\\HKrAUuNq.png','/files/download/Popup/HKrAUuNq.png','/files/download/719','/manage/files/719/delete',NULL,NULL,NULL,NULL,'Y','783px-Test-Logo.svg.png'),
	 (706,NULL,'CYddemhs.png','png',18453,'D:\\data\\tagocms-dev\\Popup\\706\\CYddemhs.png','/files/download/Popup/CYddemhs.png','/files/download/720','/manage/files/720/delete',NULL,NULL,NULL,NULL,'Y','783px-Test-Logo.svg.png'),
	 (705,NULL,'ckJxioQX.png','png',18453,'D:\\data\\tagocms-dev\\Popup\\705\\ckJxioQX.png','/files/download/Popup/ckJxioQX.png','/files/download/721','/manage/files/721/delete',NULL,NULL,NULL,NULL,'Y','783px-Test-Logo.svg.png');
INSERT INTO tagocms.t_file (file_group_seq,order_number,stored_file_name,file_ext,file_size,stored_path,view_url,download_url,delete_url,created_date,created_by,modified_date,modified_by,is_deleted,file_name) VALUES
	 (706,NULL,'qrhwvJ5f.png','png',18453,'D:\\data\\tagocms-dev\\Popup\\706\\qrhwvJ5f.png','/files/download/Popup/qrhwvJ5f.png','/files/download/722','/manage/files/722/delete',NULL,NULL,NULL,NULL,'Y','783px-Test-Logo.svg.png'),
	 (705,NULL,'LN5ibmHg.png','png',18453,'D:\\data\\tagocms-dev\\Popup\\705\\LN5ibmHg.png','/files/download/Popup/LN5ibmHg.png','/files/download/723','/manage/files/723/delete',NULL,NULL,NULL,NULL,'Y','783px-Test-Logo.svg.png'),
	 (706,NULL,'r0zSFQHy.png','png',18453,'D:\\data\\tagocms-dev\\Popup\\706\\r0zSFQHy.png','/files/download/Popup/r0zSFQHy.png','/files/download/724','/manage/files/724/delete',NULL,NULL,NULL,NULL,'Y','783px-Test-Logo.svg.png'),
	 (705,NULL,'JePZSkDy.png','png',18453,'D:\\data\\tagocms-dev\\Popup\\705\\JePZSkDy.png','/files/download/Popup/JePZSkDy.png','/files/download/725','/manage/files/725/delete',NULL,NULL,NULL,NULL,'Y','783px-Test-Logo.svg.png'),
	 (706,NULL,'rV4uQgYS.png','png',18453,'D:\\data\\tagocms-dev\\Popup\\706\\rV4uQgYS.png','/files/download/Popup/rV4uQgYS.png','/files/download/726','/manage/files/726/delete',NULL,NULL,NULL,NULL,'Y','783px-Test-Logo.svg.png'),
	 (705,NULL,'hxEC6jpr.png','png',18453,'D:\\data\\tagocms-dev\\Popup\\705\\hxEC6jpr.png','/files/download/Popup/hxEC6jpr.png','/files/download/727','/manage/files/727/delete',NULL,NULL,NULL,NULL,'Y','783px-Test-Logo.svg.png'),
	 (706,NULL,'gKKAe7Er.png','png',18453,'D:\\data\\tagocms-dev\\Popup\\706\\gKKAe7Er.png','/files/download/Popup/gKKAe7Er.png','/files/download/728','/manage/files/728/delete',NULL,NULL,NULL,NULL,'Y','783px-Test-Logo.svg.png'),
	 (705,NULL,'iKu7kbim.png','png',18453,'D:\\data\\tagocms-dev\\Popup\\705\\iKu7kbim.png','/files/download/Popup/iKu7kbim.png','/files/download/729','/manage/files/729/delete',NULL,NULL,NULL,NULL,'N','783px-Test-Logo.svg.png'),
	 (707,NULL,'Hxprq3bb.jpeg','jpeg',472974,'D:\\data\\tagocms-dev\\Banner\\707\\Hxprq3bb.jpeg','/files/download/Banner/Hxprq3bb.jpeg','/files/download/730','/manage/files/730/delete',NULL,NULL,NULL,NULL,'Y','sa_pixar_virtualbg_coco_16x9_9ccd7110.jpeg'),
	 (709,NULL,'cDUsgvc2.jpg','jpg',31489,'D:\\data\\tagocms-dev\\Banner\\709\\cDUsgvc2.jpg','/files/download/Banner/cDUsgvc2.jpg','/files/download/731','/manage/files/731/delete',NULL,NULL,NULL,NULL,'Y','tree-736885__340.jpg');
INSERT INTO tagocms.t_file (file_group_seq,order_number,stored_file_name,file_ext,file_size,stored_path,view_url,download_url,delete_url,created_date,created_by,modified_date,modified_by,is_deleted,file_name) VALUES
	 (709,NULL,'9Uw4cb9j.jpg','jpg',31489,'D:\\data\\tagocms-dev\\Banner\\709\\9Uw4cb9j.jpg','/files/download/Banner/9Uw4cb9j.jpg','/files/download/732','/manage/files/732/delete',NULL,NULL,NULL,NULL,'Y','tree-736885__340.jpg'),
	 (709,NULL,'zKi2D5hS.jpg','jpg',31489,'D:\\data\\tagocms-dev\\Banner\\709\\zKi2D5hS.jpg','/files/download/Banner/zKi2D5hS.jpg','/files/download/733','/manage/files/733/delete',NULL,NULL,NULL,NULL,'Y','tree-736885__340.jpg'),
	 (707,NULL,'THeixZWE.jpeg','jpeg',472974,'D:\\data\\tagocms-dev\\Banner\\707\\THeixZWE.jpeg','/files/download/Banner/THeixZWE.jpeg','/files/download/734','/manage/files/734/delete',NULL,NULL,NULL,NULL,'Y','sa_pixar_virtualbg_coco_16x9_9ccd7110.jpeg'),
	 (709,NULL,'Tdfx06cQ.jpg','jpg',31489,'D:\\data\\tagocms-dev\\Banner\\709\\Tdfx06cQ.jpg','/files/download/Banner/Tdfx06cQ.jpg','/files/download/735','/manage/files/735/delete',NULL,NULL,NULL,NULL,'Y','tree-736885__340.jpg'),
	 (707,NULL,'0KzVRwDK.jpeg','jpeg',472974,'D:\\data\\tagocms-dev\\Banner\\707\\0KzVRwDK.jpeg','/files/download/Banner/0KzVRwDK.jpeg','/files/download/736','/manage/files/736/delete',NULL,NULL,NULL,NULL,'N','sa_pixar_virtualbg_coco_16x9_9ccd7110.jpeg'),
	 (711,NULL,'w5ybxqhm.jpg','jpg',25129,'D:\\data\\tagocms-dev\\Popup\\711\\w5ybxqhm.jpg','/files/download/Popup/w5ybxqhm.jpg','/files/download/737','/manage/files/737/delete',NULL,NULL,NULL,NULL,'Y','istockphoto-1356565274-612x612.jpg'),
	 (713,NULL,'Rnat7W7R.jpg','jpg',31489,'D:\\data\\tagocms-dev\\Popup\\713\\Rnat7W7R.jpg','/files/download/Popup/Rnat7W7R.jpg','/files/download/738','/manage/files/738/delete',NULL,NULL,NULL,NULL,'Y','tree-736885__340.jpg'),
	 (713,NULL,'5lhORcC7.jpg','jpg',31489,'D:\\data\\tagocms-dev\\Popup\\713\\5lhORcC7.jpg','/files/download/Popup/5lhORcC7.jpg','/files/download/739','/manage/files/739/delete',NULL,NULL,NULL,NULL,'N','tree-736885__340.jpg'),
	 (715,NULL,'QdjsdVHI.jpg','jpg',7211,'D:\\data\\tagocms-dev\\Popup\\715\\QdjsdVHI.jpg','/files/download/Popup/QdjsdVHI.jpg','/files/download/740','/manage/files/740/delete',NULL,NULL,NULL,NULL,'Y','download (1).jpg'),
	 (715,NULL,'tz3Rmwh2.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Popup\\715\\tz3Rmwh2.jpg','/files/download/Popup/tz3Rmwh2.jpg','/files/download/741','/manage/files/741/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg');
INSERT INTO tagocms.t_file (file_group_seq,order_number,stored_file_name,file_ext,file_size,stored_path,view_url,download_url,delete_url,created_date,created_by,modified_date,modified_by,is_deleted,file_name) VALUES
	 (717,NULL,'D5q4EQvg.jpeg','jpeg',472974,'D:\\data\\tagocms-dev\\Popup\\717\\D5q4EQvg.jpeg','/files/download/Popup/D5q4EQvg.jpeg','/files/download/742','/manage/files/742/delete',NULL,NULL,NULL,NULL,'Y','sa_pixar_virtualbg_coco_16x9_9ccd7110.jpeg'),
	 (717,NULL,'fARShrGl.jpeg','jpeg',472974,'D:\\data\\tagocms-dev\\Popup\\717\\fARShrGl.jpeg','/files/download/Popup/fARShrGl.jpeg','/files/download/743','/manage/files/743/delete',NULL,NULL,NULL,NULL,'Y','sa_pixar_virtualbg_coco_16x9_9ccd7110.jpeg'),
	 (717,NULL,'Uo6sDqpO.jpeg','jpeg',472974,'D:\\data\\tagocms-dev\\Popup\\717\\Uo6sDqpO.jpeg','/files/download/Popup/Uo6sDqpO.jpeg','/files/download/744','/manage/files/744/delete',NULL,NULL,NULL,NULL,'N','sa_pixar_virtualbg_coco_16x9_9ccd7110.jpeg'),
	 (719,NULL,'4M1MLwf8.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Popup\\719\\4M1MLwf8.jpg','/files/download/Popup/4M1MLwf8.jpg','/files/download/745','/manage/files/745/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (721,NULL,'6UqkLb2p.jpeg','jpeg',472974,'D:\\data\\tagocms-dev\\Banner\\721\\6UqkLb2p.jpeg','/files/download/Banner/6UqkLb2p.jpeg','/files/download/746','/manage/files/746/delete',NULL,NULL,NULL,NULL,'N','sa_pixar_virtualbg_coco_16x9_9ccd7110.jpeg'),
	 (722,NULL,'pmNDtQjK.jpg','jpg',2969,'D:\\data\\tagocms-dev\\Banner\\722\\pmNDtQjK.jpg','/files/download/Banner/pmNDtQjK.jpg','/files/download/747','/manage/files/747/delete',NULL,NULL,NULL,NULL,'N','corp.jpg'),
	 (723,NULL,'dhb0nt0Z.jpeg','jpeg',472974,'D:\\data\\tagocms-dev\\Banner\\723\\dhb0nt0Z.jpeg','/files/download/Banner/dhb0nt0Z.jpeg','/files/download/748','/manage/files/748/delete',NULL,NULL,NULL,NULL,'Y','sa_pixar_virtualbg_coco_16x9_9ccd7110.jpeg'),
	 (724,NULL,'OLn0NGUE.jpg','jpg',7401,'D:\\data\\tagocms-dev\\Banner\\724\\OLn0NGUE.jpg','/files/download/Banner/OLn0NGUE.jpg','/files/download/749','/manage/files/749/delete',NULL,NULL,NULL,NULL,'Y','download (2).jpg'),
	 (725,NULL,'OVruvsaf.jpg','jpg',25129,'D:\\data\\tagocms-dev\\Banner\\725\\OVruvsaf.jpg','/files/download/Banner/OVruvsaf.jpg','/files/download/750','/manage/files/750/delete',NULL,NULL,NULL,NULL,'Y','istockphoto-1356565274-612x612.jpg'),
	 (726,NULL,'8ew4euBW.jpg','jpg',2969,'D:\\data\\tagocms-dev\\Banner\\726\\8ew4euBW.jpg','/files/download/Banner/8ew4euBW.jpg','/files/download/751','/manage/files/751/delete',NULL,NULL,NULL,NULL,'Y','corp.jpg');
INSERT INTO tagocms.t_file (file_group_seq,order_number,stored_file_name,file_ext,file_size,stored_path,view_url,download_url,delete_url,created_date,created_by,modified_date,modified_by,is_deleted,file_name) VALUES
	 (727,NULL,'zDLfxjrH.jpeg','jpeg',472974,'D:\\data\\tagocms-dev\\Popup\\727\\zDLfxjrH.jpeg','/files/download/Popup/zDLfxjrH.jpeg','/files/download/752','/manage/files/752/delete',NULL,NULL,NULL,NULL,'Y','sa_pixar_virtualbg_coco_16x9_9ccd7110.jpeg'),
	 (725,NULL,'R41pRrfV.jpg','jpg',25129,'D:\\data\\tagocms-dev\\Banner\\725\\R41pRrfV.jpg','/files/download/Banner/R41pRrfV.jpg','/files/download/753','/manage/files/753/delete',NULL,NULL,NULL,NULL,'Y','istockphoto-1356565274-612x612.jpg'),
	 (726,NULL,'XxbHIFuy.jpg','jpg',2969,'D:\\data\\tagocms-dev\\Banner\\726\\XxbHIFuy.jpg','/files/download/Banner/XxbHIFuy.jpg','/files/download/754','/manage/files/754/delete',NULL,NULL,NULL,NULL,'Y','corp.jpg'),
	 (725,NULL,'hZP66Gnn.jpg','jpg',25129,'D:\\data\\tagocms-dev\\Banner\\725\\hZP66Gnn.jpg','/files/download/Banner/hZP66Gnn.jpg','/files/download/755','/manage/files/755/delete',NULL,NULL,NULL,NULL,'Y','istockphoto-1356565274-612x612.jpg'),
	 (726,NULL,'yTYVX4vD.jpg','jpg',2969,'D:\\data\\tagocms-dev\\Banner\\726\\yTYVX4vD.jpg','/files/download/Banner/yTYVX4vD.jpg','/files/download/756','/manage/files/756/delete',NULL,NULL,NULL,NULL,'Y','corp.jpg'),
	 (725,NULL,'HioD6Eao.jpeg','jpeg',472974,'D:\\data\\tagocms-dev\\Banner\\725\\HioD6Eao.jpeg','/files/download/Banner/HioD6Eao.jpeg','/files/download/757','/manage/files/757/delete',NULL,NULL,NULL,NULL,'Y','sa_pixar_virtualbg_coco_16x9_9ccd7110.jpeg'),
	 (726,NULL,'e4cqHCTj.jpg','jpg',7401,'D:\\data\\tagocms-dev\\Banner\\726\\e4cqHCTj.jpg','/files/download/Banner/e4cqHCTj.jpg','/files/download/758','/manage/files/758/delete',NULL,NULL,NULL,NULL,'Y','download (2).jpg'),
	 (723,NULL,'AKcM9EP2.jpeg','jpeg',472974,'D:\\data\\tagocms-dev\\Banner\\723\\AKcM9EP2.jpeg','/files/download/Banner/AKcM9EP2.jpeg','/files/download/759','/manage/files/759/delete',NULL,NULL,NULL,NULL,'N','sa_pixar_virtualbg_coco_16x9_9ccd7110.jpeg'),
	 (724,NULL,'hj6TTIdl.jpg','jpg',7401,'D:\\data\\tagocms-dev\\Banner\\724\\hj6TTIdl.jpg','/files/download/Banner/hj6TTIdl.jpg','/files/download/760','/manage/files/760/delete',NULL,NULL,NULL,NULL,'N','download (2).jpg'),
	 (727,NULL,'YwxQNfYJ.jpeg','jpeg',472974,'D:\\data\\tagocms-dev\\Popup\\727\\YwxQNfYJ.jpeg','/files/download/Popup/YwxQNfYJ.jpeg','/files/download/761','/manage/files/761/delete',NULL,NULL,NULL,NULL,'Y','sa_pixar_virtualbg_coco_16x9_9ccd7110.jpeg');
INSERT INTO tagocms.t_file (file_group_seq,order_number,stored_file_name,file_ext,file_size,stored_path,view_url,download_url,delete_url,created_date,created_by,modified_date,modified_by,is_deleted,file_name) VALUES
	 (728,NULL,'40zPpXJx.jpg','jpg',7401,'D:\\data\\tagocms-dev\\Popup\\728\\40zPpXJx.jpg','/files/download/Popup/40zPpXJx.jpg','/files/download/762','/manage/files/762/delete',NULL,NULL,NULL,NULL,'Y','download (2).jpg'),
	 (727,NULL,'rIIR0RC7.jpeg','jpeg',472974,'D:\\data\\tagocms-dev\\Popup\\727\\rIIR0RC7.jpeg','/files/download/Popup/rIIR0RC7.jpeg','/files/download/763','/manage/files/763/delete',NULL,NULL,NULL,NULL,'N','sa_pixar_virtualbg_coco_16x9_9ccd7110.jpeg'),
	 (728,NULL,'rn1VhxGq.jpg','jpg',7401,'D:\\data\\tagocms-dev\\Popup\\728\\rn1VhxGq.jpg','/files/download/Popup/rn1VhxGq.jpg','/files/download/764','/manage/files/764/delete',NULL,NULL,NULL,NULL,'N','download (2).jpg'),
	 (725,NULL,'kmmybCUP.jpeg','jpeg',472974,'D:\\data\\tagocms-dev\\Banner\\725\\kmmybCUP.jpeg','/files/download/Banner/kmmybCUP.jpeg','/files/download/765','/manage/files/765/delete',NULL,NULL,NULL,NULL,'Y','sa_pixar_virtualbg_coco_16x9_9ccd7110.jpeg'),
	 (726,NULL,'ObdZhyvr.jpg','jpg',7401,'D:\\data\\tagocms-dev\\Banner\\726\\ObdZhyvr.jpg','/files/download/Banner/ObdZhyvr.jpg','/files/download/766','/manage/files/766/delete',NULL,NULL,NULL,NULL,'Y','download (2).jpg'),
	 (725,NULL,'n289S8Kk.jpeg','jpeg',472974,'D:\\data\\tagocms-dev\\Banner\\725\\n289S8Kk.jpeg','/files/download/Banner/n289S8Kk.jpeg','/files/download/767','/manage/files/767/delete',NULL,NULL,NULL,NULL,'Y','sa_pixar_virtualbg_coco_16x9_9ccd7110.jpeg'),
	 (725,NULL,'ZuTNV859.jpeg','jpeg',472974,'D:\\data\\tagocms-dev\\Banner\\725\\ZuTNV859.jpeg','/files/download/Banner/ZuTNV859.jpeg','/files/download/768','/manage/files/768/delete',NULL,NULL,NULL,NULL,'Y','sa_pixar_virtualbg_coco_16x9_9ccd7110.jpeg'),
	 (726,NULL,'02YPvYdR.jpg','jpg',7026,'D:\\data\\tagocms-dev\\Banner\\726\\02YPvYdR.jpg','/files/download/Banner/02YPvYdR.jpg','/files/download/769','/manage/files/769/delete',NULL,NULL,NULL,NULL,'Y','download.jpg'),
	 (725,NULL,'nC9jWs6Z.jpeg','jpeg',472974,'D:\\data\\tagocms-dev\\Banner\\725\\nC9jWs6Z.jpeg','/files/download/Banner/nC9jWs6Z.jpeg','/files/download/770','/manage/files/770/delete',NULL,NULL,NULL,NULL,'Y','sa_pixar_virtualbg_coco_16x9_9ccd7110.jpeg'),
	 (726,NULL,'d23HcswB.jpg','jpg',7026,'D:\\data\\tagocms-dev\\Banner\\726\\d23HcswB.jpg','/files/download/Banner/d23HcswB.jpg','/files/download/771','/manage/files/771/delete',NULL,NULL,NULL,NULL,'Y','download.jpg');
INSERT INTO tagocms.t_file (file_group_seq,order_number,stored_file_name,file_ext,file_size,stored_path,view_url,download_url,delete_url,created_date,created_by,modified_date,modified_by,is_deleted,file_name) VALUES
	 (725,NULL,'VyQekhzi.jpg','jpg',167285,'D:\\data\\tagocms-dev\\Banner\\725\\VyQekhzi.jpg','/files/download/Banner/VyQekhzi.jpg','/files/download/772','/manage/files/772/delete',NULL,NULL,NULL,NULL,'N','s-corp-vs-c-corp.jpg'),
	 (726,NULL,'0xLQPlDL.jpg','jpg',7026,'D:\\data\\tagocms-dev\\Banner\\726\\0xLQPlDL.jpg','/files/download/Banner/0xLQPlDL.jpg','/files/download/773','/manage/files/773/delete',NULL,NULL,NULL,NULL,'N','download.jpg'),
	 (729,NULL,'AM56jlGV.png','png',18453,'D:\\data\\tagocms-dev\\Notice\\729\\AM56jlGV.png','/files/download/Notice/AM56jlGV.png','/files/download/774','/manage/files/774/delete',NULL,NULL,NULL,NULL,'N','783px-Test-Logo.svg.png'),
	 (731,NULL,'l7rzA3di.jpg','jpg',25129,'D:\\data\\tagocms-dev\\Popup\\731\\l7rzA3di.jpg','/files/download/Popup/l7rzA3di.jpg','/files/download/775','/manage/files/775/delete',NULL,NULL,NULL,NULL,'Y','istockphoto-1356565274-612x612.jpg'),
	 (733,NULL,'CACe8541.png','png',1043549,'C:\\data\\tagocms-dev\\Notice\\733\\CACe8541.png','/files/download/Notice/CACe8541.png','/files/download/776','/manage/files/776/delete',NULL,NULL,NULL,NULL,'N','Tech.png'),
	 (731,NULL,'0ai2ezJb.jpg','jpg',25129,'D:\\data\\tagocms-dev\\Popup\\731\\0ai2ezJb.jpg','/files/download/Popup/0ai2ezJb.jpg','/files/download/777','/manage/files/777/delete',NULL,NULL,NULL,NULL,'Y','istockphoto-1356565274-612x612.jpg'),
	 (731,NULL,'L90IKlaB.jpg','jpg',25129,'D:\\data\\tagocms-dev\\Popup\\731\\L90IKlaB.jpg','/files/download/Popup/L90IKlaB.jpg','/files/download/778','/manage/files/778/delete',NULL,NULL,NULL,NULL,'N','istockphoto-1356565274-612x612.jpg'),
	 (735,NULL,'h31oPqlH.png','png',5012221,'C:\\data\\tagocms-dev\\Notice\\735\\h31oPqlH.png','/files/download/Notice/h31oPqlH.png','/files/download/779','/manage/files/779/delete',NULL,NULL,NULL,NULL,'N','Unleash the Beast PNG.png'),
	 (736,NULL,'R9mw14k7.png','png',4195579,'C:\\data\\tagocms-dev\\Notice\\736\\R9mw14k7.png','/files/download/Notice/R9mw14k7.png','/files/download/780','/manage/files/780/delete',NULL,NULL,NULL,NULL,'N','Wave.png'),
	 (738,NULL,'ziTFZGZl.png','png',12069371,'C:\\data\\tagocms-dev\\Notice\\738\\ziTFZGZl.png','/files/download/Notice/ziTFZGZl.png','/files/download/781','/manage/files/781/delete',NULL,NULL,NULL,NULL,'N','Neon.png');
INSERT INTO tagocms.t_file (file_group_seq,order_number,stored_file_name,file_ext,file_size,stored_path,view_url,download_url,delete_url,created_date,created_by,modified_date,modified_by,is_deleted,file_name) VALUES
	 (746,NULL,'RyKp9iph.png','png',9378760,'C:\\data\\tagocms-dev\\Notice\\746\\RyKp9iph.png','/files/download/Notice/RyKp9iph.png','/files/download/782','/manage/files/782/delete',NULL,NULL,NULL,NULL,'N','Dark Galaxy.png'),
	 (747,NULL,'hYjM3sMi.png','png',12069371,'C:\\data\\tagocms-dev\\Notice\\747\\hYjM3sMi.png','/files/download/Notice/hYjM3sMi.png','/files/download/783','/manage/files/783/delete',NULL,NULL,NULL,NULL,'N','Neon.png'),
	 (748,NULL,'NeJJ5P8C.png','png',484101,'C:\\data\\tagocms-dev\\Notice\\748\\NeJJ5P8C.png','/files/download/Notice/NeJJ5P8C.png','/files/download/784','/manage/files/784/delete',NULL,NULL,NULL,NULL,'N','New Shaped.png'),
	 (751,NULL,'zXuOZ7jp.png','png',219771,'C:\\data\\tagocms-dev\\SiteInfo\\751\\zXuOZ7jp.png','/files/download/SiteInfo/zXuOZ7jp.png','/files/download/785','/manage/files/785/delete',NULL,NULL,NULL,NULL,'N','screencapture-localhost-3000-settings-siteinfo-create-2023-04-26-16_55_27.png'),
	 (752,NULL,'VEyCWySS.png','png',224125,'C:\\data\\tagocms-dev\\SiteInfo\\752\\VEyCWySS.png','/files/download/SiteInfo/VEyCWySS.png','/files/download/786','/manage/files/786/delete',NULL,NULL,NULL,NULL,'N','screencapture-localhost-3000-settings-siteinfo-create-2023-04-26-16_40_17.png'),
	 (753,NULL,'i3yVqiVI.png','png',219771,'C:\\data\\tagocms-dev\\SiteInfo\\753\\i3yVqiVI.png','/files/download/SiteInfo/i3yVqiVI.png','/files/download/787','/manage/files/787/delete',NULL,NULL,NULL,NULL,'N','screencapture-localhost-3000-settings-siteinfo-create-2023-04-26-16_55_27.png'),
	 (754,NULL,'0Curnbxb.png','png',50554,'D:\\data\\tagocms-dev\\Banner\\754\\0Curnbxb.png','/files/download/Banner/0Curnbxb.png','/files/download/788','/manage/files/788/delete',NULL,NULL,NULL,NULL,'N','IT_logo3.png'),
	 (755,NULL,'5XBLcn8L.png','png',1505355,'D:\\data\\tagocms-dev\\Banner\\755\\5XBLcn8L.png','/files/download/Banner/5XBLcn8L.png','/files/download/789','/manage/files/789/delete',NULL,NULL,NULL,NULL,'N','화면 캡처 2023-04-03 183128.png'),
	 (756,NULL,'JObXyV91.jpg','jpg',3379331,'D:\\data\\tagocms-dev\\Popup\\756\\JObXyV91.jpg','/files/download/Popup/JObXyV91.jpg','/files/download/790','/manage/files/790/delete',NULL,NULL,NULL,NULL,'N','black-woman-1562235-wallhere.com.jpg'),
	 (758,NULL,'3ybkdMvG.jpg','jpg',343724,'C:\\data\\tagocms-dev\\SiteInfo\\758\\3ybkdMvG.jpg','/files/download/SiteInfo/3ybkdMvG.jpg','/files/download/791','/manage/files/791/delete',NULL,NULL,NULL,NULL,'N','342209117_916520932803096_859257904233487738_n.jpg');
INSERT INTO tagocms.t_file (file_group_seq,order_number,stored_file_name,file_ext,file_size,stored_path,view_url,download_url,delete_url,created_date,created_by,modified_date,modified_by,is_deleted,file_name) VALUES
	 (760,NULL,'5cw5T9lC.jpg','jpg',343724,'C:\\data\\tagocms-dev\\SiteInfo\\760\\5cw5T9lC.jpg','/files/download/SiteInfo/5cw5T9lC.jpg','/files/download/792','/manage/files/792/delete',NULL,NULL,NULL,NULL,'N','342209117_916520932803096_859257904233487738_n.jpg'),
	 (762,NULL,'OJpi2VMy.jpg','jpg',73859,'C:\\data\\tagocms-dev\\User\\762\\OJpi2VMy.jpg','/files/download/User/OJpi2VMy.jpg','/files/download/793','/manage/files/793/delete',NULL,NULL,NULL,NULL,'Y','321958516_567386468224946_93605906496420832_n.jpg'),
	 (763,NULL,'QPGJ062V.jpg','jpg',73859,'C:\\data\\tagocms-dev\\SiteInfo\\763\\QPGJ062V.jpg','/files/download/SiteInfo/QPGJ062V.jpg','/files/download/795','/manage/files/795/delete',NULL,NULL,NULL,NULL,'N','321958516_567386468224946_93605906496420832_n.jpg'),
	 (764,NULL,'iJVYlXh5.jpg','jpg',73859,'C:\\data\\tagocms-dev\\SiteInfo\\764\\iJVYlXh5.jpg','/files/download/SiteInfo/iJVYlXh5.jpg','/files/download/796','/manage/files/796/delete',NULL,NULL,NULL,NULL,'N','321958516_567386468224946_93605906496420832_n.jpg'),
	 (767,NULL,'AnVeeYiz.jpg','jpg',73859,'C:\\data\\tagocms-dev\\SiteInfo\\767\\AnVeeYiz.jpg','/files/download/SiteInfo/AnVeeYiz.jpg','/files/download/799','/manage/files/799/delete',NULL,NULL,NULL,NULL,'N','321958516_567386468224946_93605906496420832_n.jpg'),
	 (768,NULL,'ko46GJLF.jpg','jpg',73859,'C:\\data\\tagocms-dev\\SiteInfo\\768\\ko46GJLF.jpg','/files/download/SiteInfo/ko46GJLF.jpg','/files/download/800','/manage/files/800/delete',NULL,NULL,NULL,NULL,'N','321958516_567386468224946_93605906496420832_n.jpg'),
	 (769,NULL,'QrrQ1jwT.jpg','jpg',343724,'C:\\data\\tagocms-dev\\SiteInfo\\769\\QrrQ1jwT.jpg','/files/download/SiteInfo/QrrQ1jwT.jpg','/files/download/801','/manage/files/801/delete',NULL,NULL,NULL,NULL,'N','342209117_916520932803096_859257904233487738_n.jpg'),
	 (770,NULL,'pWW80VGe.jpg','jpg',73859,'C:\\data\\tagocms-dev\\Notice\\770\\pWW80VGe.jpg','/files/download/Notice/pWW80VGe.jpg','/files/download/802','/manage/files/802/delete',NULL,NULL,NULL,NULL,'N','321958516_567386468224946_93605906496420832_n.jpg'),
	 (771,NULL,'3dd6HCdN.jpg','jpg',25129,'D:\\data\\tagocms-dev\\Banner\\771\\3dd6HCdN.jpg','/files/download/Banner/3dd6HCdN.jpg','/files/download/803','/manage/files/803/delete',NULL,NULL,NULL,NULL,'N','istockphoto-1356565274-612x612.jpg'),
	 (772,NULL,'1q6pMSCi.jpg','jpg',7401,'D:\\data\\tagocms-dev\\Banner\\772\\1q6pMSCi.jpg','/files/download/Banner/1q6pMSCi.jpg','/files/download/804','/manage/files/804/delete',NULL,NULL,NULL,NULL,'N','download (2).jpg');
INSERT INTO tagocms.t_file (file_group_seq,order_number,stored_file_name,file_ext,file_size,stored_path,view_url,download_url,delete_url,created_date,created_by,modified_date,modified_by,is_deleted,file_name) VALUES
	 (773,NULL,'5UEVdMM9.jpeg','jpeg',472974,'D:\\data\\tagocms-dev\\Banner\\773\\5UEVdMM9.jpeg','/files/download/Banner/5UEVdMM9.jpeg','/files/download/805','/manage/files/805/delete',NULL,NULL,NULL,NULL,'N','sa_pixar_virtualbg_coco_16x9_9ccd7110.jpeg'),
	 (774,NULL,'D5cCJwau.jpg','jpg',2969,'D:\\data\\tagocms-dev\\Banner\\774\\D5cCJwau.jpg','/files/download/Banner/D5cCJwau.jpg','/files/download/806','/manage/files/806/delete',NULL,NULL,NULL,NULL,'N','corp.jpg'),
	 (775,NULL,'SsB2C6Kk.jpg','jpg',12384394,'D:\\data\\tagocms-dev\\Banner\\775\\SsB2C6Kk.jpg','/files/download/Banner/SsB2C6Kk.jpg','/files/download/807','/manage/files/807/delete',NULL,NULL,NULL,NULL,'N','wallpaperbetter.com_7680x4320 (3).jpg'),
	 (776,NULL,'pvnXQW1U.jpg','jpg',25129,'D:\\data\\tagocms-dev\\Banner\\776\\pvnXQW1U.jpg','/files/download/Banner/pvnXQW1U.jpg','/files/download/808','/manage/files/808/delete',NULL,NULL,NULL,NULL,'N','istockphoto-1356565274-612x612.jpg'),
	 (777,NULL,'KjDsr90P.jpg','jpg',7401,'D:\\data\\tagocms-dev\\Banner\\777\\KjDsr90P.jpg','/files/download/Banner/KjDsr90P.jpg','/files/download/809','/manage/files/809/delete',NULL,NULL,NULL,NULL,'N','download (2).jpg'),
	 (778,NULL,'XtgCaWjY.jpeg','jpeg',472974,'D:\\data\\tagocms-dev\\Banner\\778\\XtgCaWjY.jpeg','/files/download/Banner/XtgCaWjY.jpeg','/files/download/810','/manage/files/810/delete',NULL,NULL,NULL,NULL,'N','sa_pixar_virtualbg_coco_16x9_9ccd7110.jpeg'),
	 (779,NULL,'V7U47ad1.jpg','jpg',7026,'D:\\data\\tagocms-dev\\Banner\\779\\V7U47ad1.jpg','/files/download/Banner/V7U47ad1.jpg','/files/download/811','/manage/files/811/delete',NULL,NULL,NULL,NULL,'N','download.jpg'),
	 (780,NULL,'XkC72noT.jpg','jpg',7211,'D:\\data\\tagocms-dev\\Popup\\780\\XkC72noT.jpg','/files/download/Popup/XkC72noT.jpg','/files/download/812','/manage/files/812/delete',NULL,NULL,NULL,NULL,'N','download (1).jpg'),
	 (781,NULL,'OqEpU28A.jpg','jpg',7026,'D:\\data\\tagocms-dev\\Popup\\781\\OqEpU28A.jpg','/files/download/Popup/OqEpU28A.jpg','/files/download/813','/manage/files/813/delete',NULL,NULL,NULL,NULL,'N','download.jpg'),
	 (782,NULL,'O12V8edu.jpg','jpg',4761636,'D:\\data\\tagocms-dev\\Banner\\782\\O12V8edu.jpg','/files/download/Banner/O12V8edu.jpg','/files/download/814','/manage/files/814/delete',NULL,NULL,NULL,NULL,'N','wallpaperbetter.com_7680x4320 (5).jpg');
INSERT INTO tagocms.t_file (file_group_seq,order_number,stored_file_name,file_ext,file_size,stored_path,view_url,download_url,delete_url,created_date,created_by,modified_date,modified_by,is_deleted,file_name) VALUES
	 (783,NULL,'i4dKJA2j.png','png',32174,'C:\\data\\tagocms-dev\\User\\783\\i4dKJA2j.png','/files/download/User/i4dKJA2j.png','/files/download/815','/manage/files/815/delete',NULL,NULL,NULL,NULL,'N','3135715.png'),
	 (784,NULL,'9Ks3rKcT.png','png',32174,'C:\\data\\tagocms-dev\\User\\784\\9Ks3rKcT.png','/files/download/User/9Ks3rKcT.png','/files/download/816','/manage/files/816/delete',NULL,NULL,NULL,NULL,'N','3135715.png'),
	 (785,NULL,'yfVFscSE.jpg','jpg',343724,'C:\\data\\tagocms-dev\\SiteInfo\\785\\yfVFscSE.jpg','/files/download/SiteInfo/yfVFscSE.jpg','/files/download/817','/manage/files/817/delete',NULL,NULL,NULL,NULL,'N','342209117_916520932803096_859257904233487738_n.jpg'),
	 (786,NULL,'a1dM7jNF.png','png',23210,'C:\\data\\tagocms-dev\\SiteInfo\\786\\a1dM7jNF.png','/files/download/SiteInfo/a1dM7jNF.png','/files/download/818','/manage/files/818/delete',NULL,NULL,NULL,NULL,'N','logo_blck.89ed88a1.png'),
	 (787,NULL,'iABynKes.png','png',23210,'C:\\data\\tagocms-dev\\SiteInfo\\787\\iABynKes.png','/files/download/SiteInfo/iABynKes.png','/files/download/819','/manage/files/819/delete',NULL,NULL,NULL,NULL,'N','logo_blck.89ed88a1.png'),
	 (788,NULL,'wQqD0KRw.png','png',23210,'C:\\data\\tagocms-dev\\SiteInfo\\788\\wQqD0KRw.png','/files/download/SiteInfo/wQqD0KRw.png','/files/download/820','/manage/files/820/delete',NULL,NULL,NULL,NULL,'N','logo_blck.89ed88a1.png'),
	 (789,NULL,'dRKIeDkY.jpg','jpg',31489,'C:\\data\\tagocms-dev\\Banner\\789\\dRKIeDkY.jpg','/files/download/Banner/dRKIeDkY.jpg','/files/download/821','/manage/files/821/delete',NULL,NULL,NULL,NULL,'N','tree-736885__340.jpg'),
	 (790,NULL,'LGbiERRv.jpg','jpg',33793,'C:\\data\\tagocms-dev\\Popup\\790\\LGbiERRv.jpg','/files/download/Popup/LGbiERRv.jpg','/files/download/822','/manage/files/822/delete',NULL,NULL,NULL,NULL,'N','istockphoto-1311473275-170667a.jpg'),
	 (791,NULL,'QibzXoBb.jpg','jpg',141762,'C:\\data\\tagocms-dev\\SiteInfo\\791\\QibzXoBb.jpg','/files/download/SiteInfo/QibzXoBb.jpg','/files/download/823','/manage/files/823/delete',NULL,NULL,NULL,NULL,'N','342968309_950070219463958_7774852026951277601_n.jpg'),
	 (792,NULL,'22NOlpna.png','png',32174,'C:\\data\\tagocms-dev\\User\\792\\22NOlpna.png','/files/download/User/22NOlpna.png','/files/download/824','/manage/files/824/delete',NULL,NULL,NULL,NULL,'N','3135715.png');
INSERT INTO tagocms.t_file (file_group_seq,order_number,stored_file_name,file_ext,file_size,stored_path,view_url,download_url,delete_url,created_date,created_by,modified_date,modified_by,is_deleted,file_name) VALUES
	 (793,NULL,'UKwzWXFi.png','png',32174,'C:\\data\\tagocms-dev\\User\\793\\UKwzWXFi.png','/files/download/User/UKwzWXFi.png','/files/download/825','/manage/files/825/delete',NULL,NULL,NULL,NULL,'N','3135715.png'),
	 (794,NULL,'oFkGMnh1.png','png',32174,'C:\\data\\tagocms-dev\\Admin\\794\\oFkGMnh1.png','/files/download/Admin/oFkGMnh1.png','/files/download/826','/manage/files/826/delete',NULL,NULL,NULL,NULL,'N','3135715.png'),
	 (795,NULL,'dXy49FW8.png','png',32174,'C:\\data\\tagocms-dev\\User\\795\\dXy49FW8.png','/files/download/User/dXy49FW8.png','/files/download/827','/manage/files/827/delete',NULL,NULL,NULL,NULL,'N','3135715.png'),
	 (796,NULL,'QBPRerkV.png','png',32174,'C:\\data\\tagocms-dev\\User\\796\\QBPRerkV.png','/files/download/User/QBPRerkV.png','/files/download/828','/manage/files/828/delete',NULL,NULL,NULL,NULL,'N','3135715.png'),
	 (797,NULL,'fyIQm3q0.png','png',32174,'C:\\data\\tagocms-dev\\Admin\\797\\fyIQm3q0.png','/files/download/Admin/fyIQm3q0.png','/files/download/829','/manage/files/829/delete',NULL,NULL,NULL,NULL,'N','3135715.png'),
	 (798,NULL,'L4wKGAjc.png','png',1043549,'C:\\data\\tagocms-dev\\Notice\\798\\L4wKGAjc.png','/files/download/Notice/L4wKGAjc.png','/files/download/830','/manage/files/830/delete',NULL,NULL,NULL,NULL,'N','Tech.png'),
	 (799,NULL,'LTXWbiT4.png','png',32174,'C:\\data\\tagocms-dev\\Admin\\799\\LTXWbiT4.png','/files/download/Admin/LTXWbiT4.png','/files/download/831','/manage/files/831/delete',NULL,NULL,NULL,NULL,'Y','3135715.png'),
	 (800,NULL,'FBASje5X.png','png',52608,'D:\\data\\tagocms-staging\\Banner\\800\\FBASje5X.png','/files/download/Banner/FBASje5X.png','/files/download/832','/manage/files/832/delete',NULL,NULL,NULL,NULL,'N','minimal-dark-coding-wallpaper.png'),
	 (801,NULL,'az6dfGfe.png','png',1056,'D:\\data\\tagocms-staging\\Banner\\801\\az6dfGfe.png','/files/download/Banner/az6dfGfe.png','/files/download/833','/manage/files/833/delete',NULL,NULL,NULL,NULL,'N','hello-world.png'),
	 (802,NULL,'4OaXc1qt.png','png',52608,'D:\\data\\tagocms-staging\\Banner\\802\\4OaXc1qt.png','/files/download/Banner/4OaXc1qt.png','/files/download/834','/manage/files/834/delete',NULL,NULL,NULL,NULL,'N','minimal-dark-coding-wallpaper.png');
INSERT INTO tagocms.t_file (file_group_seq,order_number,stored_file_name,file_ext,file_size,stored_path,view_url,download_url,delete_url,created_date,created_by,modified_date,modified_by,is_deleted,file_name) VALUES
	 (803,NULL,'EsZdw6MA.png','png',1056,'D:\\data\\tagocms-staging\\Banner\\803\\EsZdw6MA.png','/files/download/Banner/EsZdw6MA.png','/files/download/835','/manage/files/835/delete',NULL,NULL,NULL,NULL,'N','hello-world.png'),
	 (804,NULL,'fT5sbc8i.png','png',32174,'C:\\data\\tagocms-dev\\User\\804\\fT5sbc8i.png','/files/download/User/fT5sbc8i.png','/files/download/836','/manage/files/836/delete',NULL,NULL,NULL,NULL,'N','3135715.png'),
	 (805,NULL,'7WmHPsGo.png','png',52608,'D:\\data\\tagocms-staging\\Banner\\805\\7WmHPsGo.png','/files/download/Banner/7WmHPsGo.png','/files/download/837','/manage/files/837/delete',NULL,NULL,NULL,NULL,'Y','minimal-dark-coding-wallpaper.png'),
	 (806,NULL,'YLJF7sH0.png','png',1056,'D:\\data\\tagocms-staging\\Banner\\806\\YLJF7sH0.png','/files/download/Banner/YLJF7sH0.png','/files/download/838','/manage/files/838/delete',NULL,NULL,NULL,NULL,'Y','hello-world.png'),
	 (807,NULL,'2QU07FZs.png','png',32174,'C:\\data\\tagocms-dev\\User\\807\\2QU07FZs.png','/files/download/User/2QU07FZs.png','/files/download/839','/manage/files/839/delete',NULL,NULL,NULL,NULL,'Y','3135715.png'),
	 (808,NULL,'mc5FAXno.jpg','jpg',118878,'C:\\data\\tagocms-dev\\SiteInfo\\808\\mc5FAXno.jpg','/files/download/SiteInfo/mc5FAXno.jpg','/files/download/840','/manage/files/840/delete',NULL,NULL,NULL,NULL,'N','cat.jpg'),
	 (805,NULL,'kUnGnRnL.png','png',23262,'D:\\data\\tagocms-dev\\Banner\\805\\kUnGnRnL.png','/files/download/Banner/kUnGnRnL.png','/files/download/841','/manage/files/841/delete',NULL,NULL,NULL,NULL,'Y','Screenshot 2023-05-02 170506.png'),
	 (805,NULL,'u9rLJHLp.png','png',52608,'D:\\data\\tagocms-staging\\Banner\\805\\u9rLJHLp.png','/files/download/Banner/u9rLJHLp.png','/files/download/842','/manage/files/842/delete',NULL,NULL,NULL,NULL,'Y','minimal-dark-coding-wallpaper.png'),
	 (806,NULL,'qaKeERz0.png','png',52608,'D:\\data\\tagocms-staging\\Banner\\806\\qaKeERz0.png','/files/download/Banner/qaKeERz0.png','/files/download/843','/manage/files/843/delete',NULL,NULL,NULL,NULL,'N','minimal-dark-coding-wallpaper.png'),
	 (805,NULL,'4LJoKhoJ.png','png',1056,'D:\\data\\tagocms-staging\\Banner\\805\\4LJoKhoJ.png','/files/download/Banner/4LJoKhoJ.png','/files/download/844','/manage/files/844/delete',NULL,NULL,NULL,NULL,'N','hello-world.png');
INSERT INTO tagocms.t_file (file_group_seq,order_number,stored_file_name,file_ext,file_size,stored_path,view_url,download_url,delete_url,created_date,created_by,modified_date,modified_by,is_deleted,file_name) VALUES
	 (809,NULL,'VhP8nxRB.jpg','jpg',343724,'C:\\data\\tagocms-dev\\SiteInfo\\809\\VhP8nxRB.jpg','/files/download/SiteInfo/VhP8nxRB.jpg','/files/download/845','/manage/files/845/delete',NULL,NULL,NULL,NULL,'N','yfVFscSE.jpg'),
	 (810,NULL,'S4nTR3sT.png','png',52608,'D:\\data\\tagocms-staging\\Banner\\810\\S4nTR3sT.png','/files/download/Banner/S4nTR3sT.png','/files/download/846','/manage/files/846/delete',NULL,NULL,NULL,NULL,'N','minimal-dark-coding-wallpaper.png'),
	 (811,NULL,'V4M4ULVy.png','png',52608,'D:\\data\\tagocms-staging\\Banner\\811\\V4M4ULVy.png','/files/download/Banner/V4M4ULVy.png','/files/download/847','/manage/files/847/delete',NULL,NULL,NULL,NULL,'N','minimal-dark-coding-wallpaper.png'),
	 (812,NULL,'tYtMbRZG.png','png',1056,'D:\\data\\tagocms-staging\\Banner\\812\\tYtMbRZG.png','/files/download/Banner/tYtMbRZG.png','/files/download/848','/manage/files/848/delete',NULL,NULL,NULL,NULL,'N','hello-world.png'),
	 (813,NULL,'82arrRCO.png','png',32174,'C:\\data\\tagocms-dev\\User\\813\\82arrRCO.png','/files/download/User/82arrRCO.png','/files/download/849','/manage/files/849/delete',NULL,NULL,NULL,NULL,'N','3135715.png'),
	 (814,NULL,'fHg6xS1m.png','png',32174,'C:\\data\\tagocms-dev\\User\\814\\fHg6xS1m.png','/files/download/User/fHg6xS1m.png','/files/download/850','/manage/files/850/delete',NULL,NULL,NULL,NULL,'Y','3135715.png'),
	 (815,NULL,'Q88dBATq.jpg','jpg',12384394,'D:\\data\\tagocms-dev\\Banner\\815\\Q88dBATq.jpg','/files/download/Banner/Q88dBATq.jpg','/files/download/851','/manage/files/851/delete',NULL,NULL,NULL,NULL,'Y','wallpaperbetter.com_7680x4320 (3).jpg'),
	 (816,NULL,'bY9inInR.jpg','jpg',13744017,'D:\\data\\tagocms-dev\\Banner\\816\\bY9inInR.jpg','/files/download/Banner/bY9inInR.jpg','/files/download/852','/manage/files/852/delete',NULL,NULL,NULL,NULL,'Y','wallpaperbetter.com_7680x4320 (1).jpg'),
	 (817,NULL,'zCq0Z37g.png','png',1056,'D:\\data\\tagocms-staging\\Banner\\817\\zCq0Z37g.png','/files/download/Banner/zCq0Z37g.png','/files/download/853','/manage/files/853/delete',NULL,NULL,NULL,NULL,'N','hello-world.png'),
	 (818,NULL,'Yn3ZbB6s.png','png',52608,'D:\\data\\tagocms-staging\\Banner\\818\\Yn3ZbB6s.png','/files/download/Banner/Yn3ZbB6s.png','/files/download/854','/manage/files/854/delete',NULL,NULL,NULL,NULL,'N','minimal-dark-coding-wallpaper.png');
INSERT INTO tagocms.t_file (file_group_seq,order_number,stored_file_name,file_ext,file_size,stored_path,view_url,download_url,delete_url,created_date,created_by,modified_date,modified_by,is_deleted,file_name) VALUES
	 (819,NULL,'nQrwlrlS.png','png',453,'D:\\data\\tagocms-dev\\SiteInfo\\819\\nQrwlrlS.png','/files/download/SiteInfo/nQrwlrlS.png','/files/download/855','/manage/files/855/delete',NULL,NULL,NULL,NULL,'N','Frame 221 (3).png'),
	 (820,NULL,'CSfSvMUr.png','png',2118,'D:\\data\\tagocms-dev\\SiteInfo\\820\\CSfSvMUr.png','/files/download/SiteInfo/CSfSvMUr.png','/files/download/856','/manage/files/856/delete',NULL,NULL,NULL,NULL,'N','TAGO_sky.png'),
	 (821,NULL,'oGFZsEGB.png','png',1406,'D:\\data\\tagocms-dev\\SiteInfo\\821\\oGFZsEGB.png','/files/download/SiteInfo/oGFZsEGB.png','/files/download/857','/manage/files/857/delete',NULL,NULL,NULL,NULL,'N','TAGO_white.png'),
	 (822,NULL,'QQdstR2a.png','png',2118,'D:\\data\\tagocms-dev\\SiteInfo\\822\\QQdstR2a.png','/files/download/SiteInfo/QQdstR2a.png','/files/download/858','/manage/files/858/delete',NULL,NULL,NULL,NULL,'N','TAGO_sky.png'),
	 (823,NULL,'fzpPch6B.png','png',458756,'C:\\data\\tagocms-dev\\SiteInfo\\823\\fzpPch6B.png','/files/download/SiteInfo/fzpPch6B.png','/files/download/859','/manage/files/859/delete',NULL,NULL,NULL,NULL,'N','cloud-left.png'),
	 (824,NULL,'p8eGAYTJ.png','png',458756,'C:\\data\\tagocms-dev\\SiteInfo\\824\\p8eGAYTJ.png','/files/download/SiteInfo/p8eGAYTJ.png','/files/download/860','/manage/files/860/delete',NULL,NULL,NULL,NULL,'N','cloud-left.png'),
	 (825,NULL,'1ilvKeNU.png','png',458756,'C:\\data\\tagocms-dev\\SiteInfo\\825\\1ilvKeNU.png','/files/download/SiteInfo/1ilvKeNU.png','/files/download/861','/manage/files/861/delete',NULL,NULL,NULL,NULL,'N','cloud-left.png'),
	 (826,NULL,'mvCnTPrH.png','png',458756,'C:\\data\\tagocms-dev\\SiteInfo\\826\\mvCnTPrH.png','/files/download/SiteInfo/mvCnTPrH.png','/files/download/862','/manage/files/862/delete',NULL,NULL,NULL,NULL,'N','cloud-left.png'),
	 (827,NULL,'CwA85m1F.png','png',458756,'C:\\data\\tagocms-dev\\SiteInfo\\827\\CwA85m1F.png','/files/download/SiteInfo/CwA85m1F.png','/files/download/863','/manage/files/863/delete',NULL,NULL,NULL,NULL,'N','cloud-left.png'),
	 (828,NULL,'sr6oM8KB.png','png',458756,'C:\\data\\tagocms-dev\\SiteInfo\\828\\sr6oM8KB.png','/files/download/SiteInfo/sr6oM8KB.png','/files/download/864','/manage/files/864/delete',NULL,NULL,NULL,NULL,'N','cloud-left.png');
INSERT INTO tagocms.t_file (file_group_seq,order_number,stored_file_name,file_ext,file_size,stored_path,view_url,download_url,delete_url,created_date,created_by,modified_date,modified_by,is_deleted,file_name) VALUES
	 (816,NULL,'eVGFrhxM.png','png',52608,'D:\\data\\tagocms-staging\\Banner\\816\\eVGFrhxM.png','/files/download/Banner/eVGFrhxM.png','/files/download/865','/manage/files/865/delete',NULL,NULL,NULL,NULL,'N','minimal-dark-coding-wallpaper.png'),
	 (815,NULL,'RAuGcQz9.png','png',1056,'D:\\data\\tagocms-staging\\Banner\\815\\RAuGcQz9.png','/files/download/Banner/RAuGcQz9.png','/files/download/866','/manage/files/866/delete',NULL,NULL,NULL,NULL,'N','hello-world.png'),
	 (829,NULL,'41ROJQNi.png','png',52608,'D:\\data\\tagocms-staging\\Banner\\829\\41ROJQNi.png','/files/download/Banner/41ROJQNi.png','/files/download/867','/manage/files/867/delete',NULL,NULL,NULL,NULL,'N','minimal-dark-coding-wallpaper.png'),
	 (830,NULL,'ria4Hv3Z.png','png',52608,'D:\\data\\tagocms-staging\\Banner\\830\\ria4Hv3Z.png','/files/download/Banner/ria4Hv3Z.png','/files/download/868','/manage/files/868/delete',NULL,NULL,NULL,NULL,'N','minimal-dark-coding-wallpaper.png'),
	 (831,NULL,'yXezfTIR.png','png',1056,'D:\\data\\tagocms-staging\\Banner\\831\\yXezfTIR.png','/files/download/Banner/yXezfTIR.png','/files/download/869','/manage/files/869/delete',NULL,NULL,NULL,NULL,'N','hello-world.png'),
	 (832,NULL,'tvLHATBy.png','png',479,'C:\\data\\tagocms-dev\\SiteInfo\\832\\tvLHATBy.png','/files/download/SiteInfo/tvLHATBy.png','/files/download/870','/manage/files/870/delete',NULL,NULL,NULL,NULL,'N','fav_icon.png'),
	 (833,NULL,'eQCChAOR.png','png',479,'C:\\data\\tagocms-dev\\SiteInfo\\833\\eQCChAOR.png','/files/download/SiteInfo/eQCChAOR.png','/files/download/871','/manage/files/871/delete',NULL,NULL,NULL,NULL,'N','fav_icon.png'),
	 (834,NULL,'QPz3iYPb.png','png',2144,'C:\\data\\tagocms-dev\\SiteInfo\\834\\QPz3iYPb.png','/files/download/SiteInfo/QPz3iYPb.png','/files/download/872','/manage/files/872/delete',NULL,NULL,NULL,NULL,'N','header_TAGO_sky.png'),
	 (835,NULL,'s88QZkdp.jpeg','jpeg',186380,'/data/tagocms-staging/Banner/835/s88QZkdp.jpeg','/files/download/Banner/s88QZkdp.jpeg','/files/download/873','/manage/files/873/delete',NULL,NULL,NULL,NULL,'N','mask.jpeg'),
	 (836,NULL,'L9YPWQZh.png','png',260845,'/data/tagocms-staging/Banner/836/L9YPWQZh.png','/files/download/Banner/L9YPWQZh.png','/files/download/874','/manage/files/874/delete',NULL,NULL,NULL,NULL,'N','maskbged.png');
INSERT INTO tagocms.t_file (file_group_seq,order_number,stored_file_name,file_ext,file_size,stored_path,view_url,download_url,delete_url,created_date,created_by,modified_date,modified_by,is_deleted,file_name) VALUES
	 (837,NULL,'xOeXPECz.png','png',32174,'C:\\data\\tagocms-dev\\User\\837\\xOeXPECz.png','/files/download/User/xOeXPECz.png','/files/download/875','/manage/files/875/delete',NULL,NULL,NULL,NULL,'N','3135715.png'),
	 (838,NULL,'oHdmjGgx.png','png',32174,'C:\\data\\tagocms-dev\\Admin\\838\\oHdmjGgx.png','/files/download/Admin/oHdmjGgx.png','/files/download/876','/manage/files/876/delete',NULL,NULL,NULL,NULL,'N','3135715.png'),
	 (839,NULL,'Tb6APEmf.png','png',32174,'C:\\data\\tagocms-dev\\Admin\\839\\Tb6APEmf.png','/files/download/Admin/Tb6APEmf.png','/files/download/877','/manage/files/877/delete',NULL,NULL,NULL,NULL,'N','3135715.png'),
	 (840,NULL,'TMVd7q4N.png','png',52608,'D:\\data\\tagocms-staging\\Banner\\840\\TMVd7q4N.png','/files/download/Banner/TMVd7q4N.png','/files/download/878','/manage/files/878/delete',NULL,NULL,NULL,NULL,'N','minimal-dark-coding-wallpaper.png'),
	 (841,NULL,'wPZKsvpp.png','png',1056,'D:\\data\\tagocms-staging\\Banner\\841\\wPZKsvpp.png','/files/download/Banner/wPZKsvpp.png','/files/download/879','/manage/files/879/delete',NULL,NULL,NULL,NULL,'N','hello-world.png'),
	 (842,NULL,'ENSILG8G.png','png',9378760,'C:\\data\\tagocms-dev\\Banner\\842\\ENSILG8G.png','/files/download/Banner/ENSILG8G.png','/files/download/880','/manage/files/880/delete',NULL,NULL,NULL,NULL,'N','Dark Galaxy.png'),
	 (843,NULL,'I0FZxL6d.png','png',32174,'C:\\data\\tagocms-dev\\Admin\\843\\I0FZxL6d.png','/files/download/Admin/I0FZxL6d.png','/files/download/881','/manage/files/881/delete',NULL,NULL,NULL,NULL,'N','3135715.png'),
	 (844,NULL,'LHtpMCyx.jpg','jpg',3124933,'/data/tagocms-staging/Admin/844/LHtpMCyx.jpg','/files/download/Admin/LHtpMCyx.jpg','/files/download/882','/manage/files/882/delete',NULL,NULL,NULL,NULL,'N','pexels-north-1407322.jpg'),
	 (845,NULL,'vUlAiNrR.jpg','jpg',3124933,'/data/tagocms-staging/Banner/845/vUlAiNrR.jpg','/files/download/Banner/vUlAiNrR.jpg','/files/download/883','/manage/files/883/delete',NULL,NULL,NULL,NULL,'N','pexels-north-1407322.jpg'),
	 (846,NULL,'uEsEcSVt.jpg','jpg',3124933,'/data/tagocms-staging/Banner/846/uEsEcSVt.jpg','/files/download/Banner/uEsEcSVt.jpg','/files/download/884','/manage/files/884/delete',NULL,NULL,NULL,NULL,'N','pexels-north-1407322.jpg');
INSERT INTO tagocms.t_file (file_group_seq,order_number,stored_file_name,file_ext,file_size,stored_path,view_url,download_url,delete_url,created_date,created_by,modified_date,modified_by,is_deleted,file_name) VALUES
	 (847,NULL,'pqSvCeZG.jpg','jpg',3124933,'/data/tagocms-staging/Banner/847/pqSvCeZG.jpg','/files/download/Banner/pqSvCeZG.jpg','/files/download/885','/manage/files/885/delete',NULL,NULL,NULL,NULL,'N','pexels-north-1407322.jpg'),
	 (848,NULL,'BSkI4RbV.jpg','jpg',3124933,'/data/tagocms-staging/Banner/848/BSkI4RbV.jpg','/files/download/Banner/BSkI4RbV.jpg','/files/download/886','/manage/files/886/delete',NULL,NULL,NULL,NULL,'N','pexels-north-1407322.jpg'),
	 (849,NULL,'wZsgXzTD.jpg','jpg',3124933,'/data/tagocms-staging/Banner/849/wZsgXzTD.jpg','/files/download/Banner/wZsgXzTD.jpg','/files/download/887','/manage/files/887/delete',NULL,NULL,NULL,NULL,'N','pexels-north-1407322.jpg'),
	 (850,NULL,'ytV4pxhN.jpg','jpg',3124933,'/data/tagocms-staging/Banner/850/ytV4pxhN.jpg','/files/download/Banner/ytV4pxhN.jpg','/files/download/888','/manage/files/888/delete',NULL,NULL,NULL,NULL,'N','pexels-north-1407322.jpg'),
	 (851,NULL,'TUukVRuH.jpg','jpg',3124933,'/data/tagocms-staging/Banner/851/TUukVRuH.jpg','/files/download/Banner/TUukVRuH.jpg','/files/download/889','/manage/files/889/delete',NULL,NULL,NULL,NULL,'N','pexels-north-1407322.jpg'),
	 (852,NULL,'TAFEnOa7.jpg','jpg',360343,'/data/tagocms-staging/Banner/852/TAFEnOa7.jpg','/files/download/Banner/TAFEnOa7.jpg','/files/download/890','/manage/files/890/delete',NULL,NULL,NULL,NULL,'N','wp2722874.jpg'),
	 (853,NULL,'E1G21epp.png','png',368,'/data/tagocms-staging/SiteInfo/853/E1G21epp.png','/files/download/SiteInfo/E1G21epp.png','/files/download/891','/manage/files/891/delete',NULL,NULL,NULL,NULL,'N','Frame 221.png'),
	 (854,NULL,'ZPH1neQt.png','png',2079,'/data/tagocms-staging/SiteInfo/854/ZPH1neQt.png','/files/download/SiteInfo/ZPH1neQt.png','/files/download/892','/manage/files/892/delete',NULL,NULL,NULL,NULL,'N','TAGO CMS.png'),
	 (855,NULL,'WeX84BKa.png','png',1414,'/data/tagocms-staging/SiteInfo/855/WeX84BKa.png','/files/download/SiteInfo/WeX84BKa.png','/files/download/893','/manage/files/893/delete',NULL,NULL,NULL,NULL,'N','TAGO CMS (1).png'),
	 (856,NULL,'VY9Scbt0.png','png',368,'/data/tagocms-staging/SiteInfo/856/VY9Scbt0.png','/files/download/SiteInfo/VY9Scbt0.png','/files/download/894','/manage/files/894/delete',NULL,NULL,NULL,NULL,'N','Frame 221.png');
INSERT INTO tagocms.t_file (file_group_seq,order_number,stored_file_name,file_ext,file_size,stored_path,view_url,download_url,delete_url,created_date,created_by,modified_date,modified_by,is_deleted,file_name) VALUES
	 (857,NULL,'iWweEemY.png','png',2079,'/data/tagocms-staging/SiteInfo/857/iWweEemY.png','/files/download/SiteInfo/iWweEemY.png','/files/download/895','/manage/files/895/delete',NULL,NULL,NULL,NULL,'N','TAGO CMS.png'),
	 (858,NULL,'KPMdM1Uw.png','png',1414,'/data/tagocms-staging/SiteInfo/858/KPMdM1Uw.png','/files/download/SiteInfo/KPMdM1Uw.png','/files/download/896','/manage/files/896/delete',NULL,NULL,NULL,NULL,'N','TAGO CMS (1).png'),
	 (859,NULL,'o1T2lCRD.png','png',368,'/data/tagocms-staging/SiteInfo/859/o1T2lCRD.png','/files/download/SiteInfo/o1T2lCRD.png','/files/download/897','/manage/files/897/delete',NULL,NULL,NULL,NULL,'N','Frame 221.png'),
	 (860,NULL,'Zk6sVQ61.png','png',2079,'/data/tagocms-staging/SiteInfo/860/Zk6sVQ61.png','/files/download/SiteInfo/Zk6sVQ61.png','/files/download/898','/manage/files/898/delete',NULL,NULL,NULL,NULL,'N','TAGO CMS.png'),
	 (861,NULL,'HHVOOUkz.png','png',1414,'/data/tagocms-staging/SiteInfo/861/HHVOOUkz.png','/files/download/SiteInfo/HHVOOUkz.png','/files/download/899','/manage/files/899/delete',NULL,NULL,NULL,NULL,'N','TAGO CMS (1).png'),
	 (862,NULL,'9JiV9QIU.png','png',368,'/data/tagocms-staging/SiteInfo/862/9JiV9QIU.png','/files/download/SiteInfo/9JiV9QIU.png','/files/download/900','/manage/files/900/delete',NULL,NULL,NULL,NULL,'N','Frame 221.png'),
	 (863,NULL,'BCIVkkLJ.png','png',2079,'/data/tagocms-staging/SiteInfo/863/BCIVkkLJ.png','/files/download/SiteInfo/BCIVkkLJ.png','/files/download/901','/manage/files/901/delete',NULL,NULL,NULL,NULL,'N','TAGO CMS.png'),
	 (864,NULL,'NwWfFIdp.png','png',1414,'/data/tagocms-staging/SiteInfo/864/NwWfFIdp.png','/files/download/SiteInfo/NwWfFIdp.png','/files/download/902','/manage/files/902/delete',NULL,NULL,NULL,NULL,'N','TAGO CMS (1).png'),
	 (865,NULL,'mRhxoaY1.png','png',368,'/data/tagocms-staging/SiteInfo/865/mRhxoaY1.png','/files/download/SiteInfo/mRhxoaY1.png','/files/download/903','/manage/files/903/delete',NULL,NULL,NULL,NULL,'N','Frame 221.png'),
	 (866,NULL,'WUGYnenI.png','png',368,'/data/tagocms-staging/SiteInfo/866/WUGYnenI.png','/files/download/SiteInfo/WUGYnenI.png','/files/download/904','/manage/files/904/delete',NULL,NULL,NULL,NULL,'N','Frame 221.png');
INSERT INTO tagocms.t_file (file_group_seq,order_number,stored_file_name,file_ext,file_size,stored_path,view_url,download_url,delete_url,created_date,created_by,modified_date,modified_by,is_deleted,file_name) VALUES
	 (867,NULL,'rdiOkNSY.png','png',2079,'/data/tagocms-staging/SiteInfo/867/rdiOkNSY.png','/files/download/SiteInfo/rdiOkNSY.png','/files/download/905','/manage/files/905/delete',NULL,NULL,NULL,NULL,'N','TAGO CMS.png'),
	 (868,NULL,'Zc0TBNIL.png','png',368,'/data/tagocms-staging/SiteInfo/868/Zc0TBNIL.png','/files/download/SiteInfo/Zc0TBNIL.png','/files/download/906','/manage/files/906/delete',NULL,NULL,NULL,NULL,'N','Frame 221.png'),
	 (869,NULL,'hzlHUdFN.png','png',2079,'/data/tagocms-staging/SiteInfo/869/hzlHUdFN.png','/files/download/SiteInfo/hzlHUdFN.png','/files/download/907','/manage/files/907/delete',NULL,NULL,NULL,NULL,'N','TAGO CMS.png'),
	 (870,NULL,'lE85dKoU.png','png',1414,'/data/tagocms-staging/SiteInfo/870/lE85dKoU.png','/files/download/SiteInfo/lE85dKoU.png','/files/download/908','/manage/files/908/delete',NULL,NULL,NULL,NULL,'N','TAGO CMS (1).png'),
	 (871,NULL,'cXatQlkk.jpg','jpg',3124933,'/data/tagocms-staging/Banner/871/cXatQlkk.jpg','/files/download/Banner/cXatQlkk.jpg','/files/download/909','/manage/files/909/delete',NULL,NULL,NULL,NULL,'N','pexels-north-1407322.jpg'),
	 (872,NULL,'RVS1FQ4S.jpg','jpg',3124933,'/data/tagocms-staging/Banner/872/RVS1FQ4S.jpg','/files/download/Banner/RVS1FQ4S.jpg','/files/download/910','/manage/files/910/delete',NULL,NULL,NULL,NULL,'N','pexels-north-1407322.jpg'),
	 (873,NULL,'ayiFdkLn.jpg','jpg',3124933,'/data/tagocms-staging/Banner/873/ayiFdkLn.jpg','/files/download/Banner/ayiFdkLn.jpg','/files/download/911','/manage/files/911/delete',NULL,NULL,NULL,NULL,'N','pexels-north-1407322.jpg'),
	 (874,NULL,'DUTxc0KF.jpg','jpg',3124933,'/data/tagocms-staging/Banner/874/DUTxc0KF.jpg','/files/download/Banner/DUTxc0KF.jpg','/files/download/912','/manage/files/912/delete',NULL,NULL,NULL,NULL,'N','pexels-north-1407322.jpg'),
	 (875,NULL,'PESwdjeR.jpg','jpg',3124933,'/data/tagocms-staging/Banner/875/PESwdjeR.jpg','/files/download/Banner/PESwdjeR.jpg','/files/download/913','/manage/files/913/delete',NULL,NULL,NULL,NULL,'N','pexels-north-1407322.jpg'),
	 (876,NULL,'rYEHSZ3p.png','png',70872,'/data/tagocms-staging/Admin/876/rYEHSZ3p.png','/files/download/Admin/rYEHSZ3p.png','/files/download/914','/manage/files/914/delete',NULL,NULL,NULL,NULL,'N','1200px-SNice.svg.png');
INSERT INTO tagocms.t_file (file_group_seq,order_number,stored_file_name,file_ext,file_size,stored_path,view_url,download_url,delete_url,created_date,created_by,modified_date,modified_by,is_deleted,file_name) VALUES
	 (877,NULL,'23JtVZwG.png','png',70872,'/data/tagocms-staging/Admin/877/23JtVZwG.png','/files/download/Admin/23JtVZwG.png','/files/download/915','/manage/files/915/delete',NULL,NULL,NULL,NULL,'N','1200px-SNice.svg.png'),
	 (799,NULL,'dGxFJ7Nf.png','png',70872,'/data/tagocms-staging/Admin/799/dGxFJ7Nf.png','/files/download/Admin/dGxFJ7Nf.png','/files/download/916','/manage/files/916/delete',NULL,NULL,NULL,NULL,'N','1200px-SNice.svg.png'),
	 (265,NULL,'VGZv4Nsh.png','png',70872,'/data/tagocms-staging/Admin/265/VGZv4Nsh.png','/files/download/Admin/VGZv4Nsh.png','/files/download/917','/manage/files/917/delete',NULL,NULL,NULL,NULL,'N','1200px-SNice.svg.png'),
	 (814,NULL,'NdPBSJLv.png','png',70872,'/data/tagocms-staging/User/814/NdPBSJLv.png','/files/download/User/NdPBSJLv.png','/files/download/918','/manage/files/918/delete',NULL,NULL,NULL,NULL,'N','1200px-SNice.svg.png'),
	 (762,NULL,'3tkJOzpS.png','png',70872,'/data/tagocms-staging/User/762/3tkJOzpS.png','/files/download/User/3tkJOzpS.png','/files/download/919','/manage/files/919/delete',NULL,NULL,NULL,NULL,'N','1200px-SNice.svg.png'),
	 (807,NULL,'E4ESz6CK.png','png',70872,'/data/tagocms-staging/User/807/E4ESz6CK.png','/files/download/User/E4ESz6CK.png','/files/download/920','/manage/files/920/delete',NULL,NULL,NULL,NULL,'N','1200px-SNice.svg.png'),
	 (878,NULL,'MoaFe1nE.png','png',70872,'/data/tagocms-staging/User/878/MoaFe1nE.png','/files/download/User/MoaFe1nE.png','/files/download/921','/manage/files/921/delete',NULL,NULL,NULL,NULL,'N','1200px-SNice.svg.png'),
	 (879,NULL,'GjamhRxZ.png','png',70872,'/data/tagocms-staging/User/879/GjamhRxZ.png','/files/download/User/GjamhRxZ.png','/files/download/922','/manage/files/922/delete',NULL,NULL,NULL,NULL,'N','1200px-SNice.svg.png'),
	 (880,NULL,'w4jYeYbb.png','png',70872,'/data/tagocms-staging/User/880/w4jYeYbb.png','/files/download/User/w4jYeYbb.png','/files/download/923','/manage/files/923/delete',NULL,NULL,NULL,NULL,'N','1200px-SNice.svg.png'),
	 (881,NULL,'TICN4rPK.png','png',5084,'/data/tagocms-staging/Menu/881/TICN4rPK.png','/files/download/Menu/TICN4rPK.png','/files/download/924','/manage/files/924/delete',NULL,NULL,NULL,NULL,'N','dashboard.png');
INSERT INTO tagocms.t_file (file_group_seq,order_number,stored_file_name,file_ext,file_size,stored_path,view_url,download_url,delete_url,created_date,created_by,modified_date,modified_by,is_deleted,file_name) VALUES
	 (882,NULL,'Cb05dnZD.png','png',5084,'/data/tagocms-staging/Menu/882/Cb05dnZD.png','/files/download/Menu/Cb05dnZD.png','/files/download/925','/manage/files/925/delete',NULL,NULL,NULL,NULL,'N','dashboard.png'),
	 (883,NULL,'gI1PBDlV.jpg','jpg',3124933,'/data/tagocms-staging/Notice/883/gI1PBDlV.jpg','/files/download/Notice/gI1PBDlV.jpg','/files/download/926','/manage/files/926/delete',NULL,NULL,NULL,NULL,'N','pexels-north-1407322.jpg'),
	 (884,NULL,'K620buSN.jpg','jpg',18635,'/data/tagocms-staging/FAQ/884/K620buSN.jpg','/files/download/FAQ/K620buSN.jpg','/files/download/927','/manage/files/927/delete',NULL,NULL,NULL,NULL,'N','ff6dfecae8adf9a4e1062b5eb8e548c8.jpg'),
	 (885,NULL,'m4rgPAZX.jpg','jpg',87427,'/data/tagocms-staging/FAQ/885/m4rgPAZX.jpg','/files/download/FAQ/m4rgPAZX.jpg','/files/download/928','/manage/files/928/delete',NULL,NULL,NULL,NULL,'N','2a13f465cb8b1f810d34784fb8565eba.jpg'),
	 (886,NULL,'rAfQ4Nnb.jpg','jpg',87427,'/data/tagocms-staging/FAQ/886/rAfQ4Nnb.jpg','/files/download/FAQ/rAfQ4Nnb.jpg','/files/download/929','/manage/files/929/delete',NULL,NULL,NULL,NULL,'N','2a13f465cb8b1f810d34784fb8565eba.jpg'),
	 (887,NULL,'aBVUhS2L.png','png',7856,'/data/tagocms-staging/Menu/887/aBVUhS2L.png','/files/download/Menu/aBVUhS2L.png','/files/download/930','/manage/files/930/delete',NULL,NULL,NULL,NULL,'N','dashboard.png'),
	 (888,NULL,'INi329Pn.png','png',2856,'/data/tagocms-staging/Menu/888/INi329Pn.png','/files/download/Menu/INi329Pn.png','/files/download/931','/manage/files/931/delete',NULL,NULL,NULL,NULL,'Y','widget-icon.png'),
	 (889,NULL,'3152Jwkm.png','png',233428,'/data/tagocms-staging/Admin/889/3152Jwkm.png','/files/download/Admin/3152Jwkm.png','/files/download/932','/manage/files/932/delete',NULL,NULL,NULL,NULL,'N','unnamed.png'),
	 (890,NULL,'N502ntwZ.jpg','jpg',1324671,'/data/tagocms-staging/Admin/890/N502ntwZ.jpg','/files/download/Admin/N502ntwZ.jpg','/files/download/933','/manage/files/933/delete',NULL,NULL,NULL,NULL,'N','thisisengineering-raeng-lHBkWTIY28Y-unsplash.jpg'),
	 (891,NULL,'lvDqETs4.jpg','jpg',4208633,'/data/tagocms-staging/Admin/891/lvDqETs4.jpg','/files/download/Admin/lvDqETs4.jpg','/files/download/934','/manage/files/934/delete',NULL,NULL,NULL,NULL,'N','GettyImages-1322856139.jpg');
INSERT INTO tagocms.t_file (file_group_seq,order_number,stored_file_name,file_ext,file_size,stored_path,view_url,download_url,delete_url,created_date,created_by,modified_date,modified_by,is_deleted,file_name) VALUES
	 (892,NULL,'shqIH0Eq.jpg','jpg',394076,'/data/tagocms-staging/Admin/892/shqIH0Eq.jpg','/files/download/Admin/shqIH0Eq.jpg','/files/download/935','/manage/files/935/delete',NULL,NULL,NULL,NULL,'N','GettyImages-1272631059-scaled.jpg'),
	 (893,NULL,'41v4Qo0P.png','png',1988548,'/data/tagocms-staging/Admin/893/41v4Qo0P.png','/files/download/Admin/41v4Qo0P.png','/files/download/936','/manage/files/936/delete',NULL,NULL,NULL,NULL,'N','mike.png'),
	 (894,NULL,'BoWgsAEb.jpg','jpg',58783,'/data/tagocms-staging/Admin/894/BoWgsAEb.jpg','/files/download/Admin/BoWgsAEb.jpg','/files/download/937','/manage/files/937/delete',NULL,NULL,NULL,NULL,'N','sirenita.jpg'),
	 (895,NULL,'VXdAhlfZ.png','png',1988548,'/data/tagocms-staging/Admin/895/VXdAhlfZ.png','/files/download/Admin/VXdAhlfZ.png','/files/download/938','/manage/files/938/delete',NULL,NULL,NULL,NULL,'N','mike.png'),
	 (896,NULL,'ot0HLi8H.png','png',233428,'/data/tagocms-staging/Banner/896/ot0HLi8H.png','/files/download/Banner/ot0HLi8H.png','/files/download/939','/manage/files/939/delete',NULL,NULL,NULL,NULL,'N','unnamed.png'),
	 (897,NULL,'wdHa9Rqu.jpg','jpg',97080,'/data/tagocms-staging/Banner/897/wdHa9Rqu.jpg','/files/download/Banner/wdHa9Rqu.jpg','/files/download/940','/manage/files/940/delete',NULL,NULL,NULL,NULL,'N','maxresdefault.jpg'),
	 (898,NULL,'AMppF8KA.jpg','jpg',213366,'/data/tagocms-staging/Banner/898/AMppF8KA.jpg','/files/download/Banner/AMppF8KA.jpg','/files/download/941','/manage/files/941/delete',NULL,NULL,NULL,NULL,'N','blackpink-songs-1679398212.jpg'),
	 (899,NULL,'7R8FzSHT.jpeg','jpeg',775105,'/data/tagocms-staging/Banner/899/7R8FzSHT.jpeg','/files/download/Banner/7R8FzSHT.jpeg','/files/download/942','/manage/files/942/delete',NULL,NULL,NULL,NULL,'N','a4bdc551863371.58fcda709e04c.jpeg'),
	 (900,NULL,'ZkW0q0mI.png','png',6921,'/data/tagocms-staging/Menu/900/ZkW0q0mI.png','/files/download/Menu/ZkW0q0mI.png','/files/download/943','/manage/files/943/delete',NULL,NULL,NULL,NULL,'N','settings-cog.png'),
	 (901,NULL,'5mEa8EOC.png','png',2451,'/data/tagocms-staging/Menu/901/5mEa8EOC.png','/files/download/Menu/5mEa8EOC.png','/files/download/944','/manage/files/944/delete',NULL,NULL,NULL,NULL,'N','sitemap-icon.png');
INSERT INTO tagocms.t_file (file_group_seq,order_number,stored_file_name,file_ext,file_size,stored_path,view_url,download_url,delete_url,created_date,created_by,modified_date,modified_by,is_deleted,file_name) VALUES
	 (902,NULL,'lDiDLcYP.png','png',2114,'/data/tagocms-staging/Menu/902/lDiDLcYP.png','/files/download/Menu/lDiDLcYP.png','/files/download/945','/manage/files/945/delete',NULL,NULL,NULL,NULL,'N','classification-icon.png'),
	 (903,NULL,'KdqUxu9K.png','png',6781,'/data/tagocms-staging/Menu/903/KdqUxu9K.png','/files/download/Menu/KdqUxu9K.png','/files/download/946','/manage/files/946/delete',NULL,NULL,NULL,NULL,'N','business-management-team-icon.png'),
	 (904,NULL,'edc2zaj6.png','png',3319,'/data/tagocms-staging/Menu/904/edc2zaj6.png','/files/download/Menu/edc2zaj6.png','/files/download/947','/manage/files/947/delete',NULL,NULL,NULL,NULL,'N','writing-pad-line-icon.png'),
	 (905,NULL,'NngHvUYX.png','png',5002,'/data/tagocms-staging/Menu/905/NngHvUYX.png','/files/download/Menu/NngHvUYX.png','/files/download/948','/manage/files/948/delete',NULL,NULL,NULL,NULL,'N','web-content-icon.png'),
	 (906,NULL,'CtTLOndb.png','png',3998,'/data/tagocms-staging/Menu/906/CtTLOndb.png','/files/download/Menu/CtTLOndb.png','/files/download/949','/manage/files/949/delete',NULL,NULL,NULL,NULL,'N','books-icon.png'),
	 (907,NULL,'H2kkobLc.jpg','jpg',535314,'/data/tagocms-staging/Banner/907/H2kkobLc.jpg','/files/download/Banner/H2kkobLc.jpg','/files/download/950','/manage/files/950/delete',NULL,NULL,NULL,NULL,'N','1356237.jpg'),
	 (908,NULL,'jNXAnbFG.png','png',233428,'/data/tagocms-staging/Banner/908/jNXAnbFG.png','/files/download/Banner/jNXAnbFG.png','/files/download/951','/manage/files/951/delete',NULL,NULL,NULL,NULL,'N','unnamed.png'),
	 (909,NULL,'L0JOGkfp.png','png',7460,'/data/tagocms-staging/Menu/909/L0JOGkfp.png','/files/download/Menu/L0JOGkfp.png','/files/download/952','/manage/files/952/delete',NULL,NULL,NULL,NULL,'N','attherate-icon.png'),
	 (910,NULL,'yFnGCGjU.png','png',814718,'/data/tagocms-staging/Banner/910/yFnGCGjU.png','/files/download/Banner/yFnGCGjU.png','/files/download/953','/manage/files/953/delete',NULL,NULL,NULL,NULL,'Y','KakaoTalk_20230519_163037969.png'),
	 (911,NULL,'T82f7kfP.jpg','jpg',10890371,'/data/tagocms-staging/Banner/911/T82f7kfP.jpg','/files/download/Banner/T82f7kfP.jpg','/files/download/954','/manage/files/954/delete',NULL,NULL,NULL,NULL,'N','GettyImages-1483062045.jpg');
INSERT INTO tagocms.t_file (file_group_seq,order_number,stored_file_name,file_ext,file_size,stored_path,view_url,download_url,delete_url,created_date,created_by,modified_date,modified_by,is_deleted,file_name) VALUES
	 (912,NULL,'ucRfKSBH.jpg','jpg',2190965,'/data/tagocms-staging/Banner/912/ucRfKSBH.jpg','/files/download/Banner/ucRfKSBH.jpg','/files/download/955','/manage/files/955/delete',NULL,NULL,NULL,NULL,'N','bithin-raj-g6VNGCGF3DQ-unsplash.jpg'),
	 (913,NULL,'2QRB67do.jpg','jpg',535314,'/data/tagocms-staging/Banner/913/2QRB67do.jpg','/files/download/Banner/2QRB67do.jpg','/files/download/956','/manage/files/956/delete',NULL,NULL,NULL,NULL,'N','1356237.jpg'),
	 (910,NULL,'2nfhD5BK.jpg','jpg',591276,'/data/tagocms-staging/Popup/910/2nfhD5BK.jpg','/files/download/Popup/2nfhD5BK.jpg','/files/download/957','/api/files/957/delete',NULL,NULL,NULL,NULL,'N','2560x1024-porsche-cayenne-s-porsche-cayenne-porsche-cayenne-turbo_1539106994.jpg'),
	 (914,NULL,'5zfSJTxZ.png','png',1851,'/data/tagocms-staging/Admin/914/5zfSJTxZ.png','/files/download/Admin/5zfSJTxZ.png','/files/download/958','/api/files/958/delete',NULL,NULL,NULL,NULL,'Y','화면 캡처 2023-05-24 164650.png'),
	 (915,NULL,'Pe1mdVYR.jpg','jpg',3717155,'/data/tagocms-staging/Popup/915/Pe1mdVYR.jpg','/files/download/Popup/Pe1mdVYR.jpg','/files/download/959','/api/files/959/delete',NULL,NULL,NULL,NULL,'N','20804028.jpg'),
	 (916,NULL,'A08BhiFz.jpg','jpg',7496689,'/data/tagocms-staging/Popup/916/A08BhiFz.jpg','/files/download/Popup/A08BhiFz.jpg','/files/download/960','/api/files/960/delete',NULL,NULL,NULL,NULL,'N','20824554.jpg'),
	 (914,NULL,'E7PlfqGi.png','png',233428,'/data/tagocms-staging/Admin/914/E7PlfqGi.png','/files/download/Admin/E7PlfqGi.png','/files/download/961','/api/files/961/delete',NULL,NULL,NULL,NULL,'N','unnamed.png'),
	 (917,NULL,'DoFgEXCm.png','png',904,'/data/tagocms-staging/Menu/917/DoFgEXCm.png','/files/download/Menu/DoFgEXCm.png','/files/download/962','/api/files/962/delete',NULL,NULL,NULL,NULL,'N','widget-icon (1) 1.png'),
	 (918,NULL,'dyPOiVwe.png','png',862,'/data/tagocms-staging/Menu/918/dyPOiVwe.png','/files/download/Menu/dyPOiVwe.png','/files/download/963','/api/files/963/delete',NULL,NULL,NULL,NULL,'N','video-content-icon 1.png'),
	 (919,NULL,'TissDnOW.png','png',739,'/data/tagocms-staging/Menu/919/TissDnOW.png','/files/download/Menu/TissDnOW.png','/files/download/964','/api/files/964/delete',NULL,NULL,NULL,NULL,'N','classification-icon 1.png');
INSERT INTO tagocms.t_file (file_group_seq,order_number,stored_file_name,file_ext,file_size,stored_path,view_url,download_url,delete_url,created_date,created_by,modified_date,modified_by,is_deleted,file_name) VALUES
	 (920,NULL,'o4UwmO3z.png','png',1487,'/data/tagocms-staging/Menu/920/o4UwmO3z.png','/files/download/Menu/o4UwmO3z.png','/files/download/965','/api/files/965/delete',NULL,NULL,NULL,NULL,'N','business-management-team-icon 1.png'),
	 (921,NULL,'E0dq5lCo.png','png',853,'/data/tagocms-staging/Menu/921/E0dq5lCo.png','/files/download/Menu/E0dq5lCo.png','/files/download/966','/api/files/966/delete',NULL,NULL,NULL,NULL,'N','clipboard-icon 1.png'),
	 (922,NULL,'1VJFFVW2.png','png',1886,'/data/tagocms-staging/Menu/922/1VJFFVW2.png','/files/download/Menu/1VJFFVW2.png','/files/download/967','/api/files/967/delete',NULL,NULL,NULL,NULL,'N','settings-line-icon 1.png'),
	 (923,NULL,'GoCjNma5.png','png',995,'/data/tagocms-staging/Menu/923/GoCjNma5.png','/files/download/Menu/GoCjNma5.png','/files/download/968','/api/files/968/delete',NULL,NULL,NULL,NULL,'N','books-icon 1.png'),
	 (924,NULL,'pKUbfmPQ.png','png',1826,'/data/tagocms-staging/Menu/924/pKUbfmPQ.png','/files/download/Menu/pKUbfmPQ.png','/files/download/969','/api/files/969/delete',NULL,NULL,NULL,NULL,'N','attherate-icon 1.png'),
	 (925,NULL,'8Et9JmTP.png','png',904,'/data/tagocms-staging/Menu/925/8Et9JmTP.png','/files/download/Menu/8Et9JmTP.png','/files/download/970','/api/files/970/delete',NULL,NULL,NULL,NULL,'N','widget-icon (1) 1.png'),
	 (926,NULL,'jWhKyMfn.png','png',904,'/data/tagocms-staging/Menu/926/jWhKyMfn.png','/files/download/Menu/jWhKyMfn.png','/files/download/971','/api/files/971/delete',NULL,NULL,NULL,NULL,'N','8Et9JmTP.png'),
	 (927,NULL,'xB7YChak.jpg','jpg',511521,'/data/tagocms-staging/Banner/927/xB7YChak.jpg','/files/download/Banner/xB7YChak.jpg','/files/download/972','/api/files/972/delete',NULL,NULL,NULL,NULL,'N','KakaoTalk_20230605_105247468_01.jpg'),
	 (928,NULL,'lXeXKUuf.jpg','jpg',448967,'/data/tagocms-staging/Banner/928/lXeXKUuf.jpg','/files/download/Banner/lXeXKUuf.jpg','/files/download/973','/api/files/973/delete',NULL,NULL,NULL,NULL,'N','KakaoTalk_20230605_105247468.jpg'),
	 (929,NULL,'GtMJrwmI.jpg','jpg',147392,'/data/tagocms-staging/Banner/929/GtMJrwmI.jpg','/files/download/Banner/GtMJrwmI.jpg','/files/download/974','/api/files/974/delete',NULL,NULL,NULL,NULL,'N','340754104_5945160915565835_2412133032914704203_n.jpg');
INSERT INTO tagocms.t_file (file_group_seq,order_number,stored_file_name,file_ext,file_size,stored_path,view_url,download_url,delete_url,created_date,created_by,modified_date,modified_by,is_deleted,file_name) VALUES
	 (930,NULL,'QoCH8K1U.png','png',456349,'/data/tagocms-staging/Banner/930/QoCH8K1U.png','/files/download/Banner/QoCH8K1U.png','/files/download/975','/api/files/975/delete',NULL,NULL,NULL,NULL,'N','White and Green Minimslist Travel Vlog Youtube Thumbnail.png'),
	 (931,NULL,'jijCadaI.gif','gif',15403966,'/data/tagocms-staging/Banner/931/jijCadaI.gif','/files/download/Banner/jijCadaI.gif','/files/download/976','/api/files/976/delete',NULL,NULL,NULL,NULL,'N','간식이다.gif'),
	 (932,NULL,'lIBRo4rE.png','png',1595379,'/data/tagocms-staging/Banner/932/lIBRo4rE.png','/files/download/Banner/lIBRo4rE.png','/files/download/977','/api/files/977/delete',NULL,NULL,NULL,NULL,'N','Green And Golden Watercolor Olive Wedding Invitation.png'),
	 (933,NULL,'ACpKvrpQ.jpg','jpg',12946,'/data/tagocms-staging/Popup/933/ACpKvrpQ.jpg','/files/download/Popup/ACpKvrpQ.jpg','/files/download/978','/api/files/978/delete',NULL,NULL,NULL,NULL,'N','0dacd95ad94ad7df308141c56f76b5ce.jpg'),
	 (934,NULL,'ilfbCwFs.jpg','jpg',53603,'/data/tagocms-staging/Popup/934/ilfbCwFs.jpg','/files/download/Popup/ilfbCwFs.jpg','/files/download/979','/api/files/979/delete',NULL,NULL,NULL,NULL,'N','f5dfe744f6ce9574140844810d53502d.jpg'),
	 (935,NULL,'8I9MYp8A.jpg','jpg',7018166,'/data/tagocms-staging/Admin/935/8I9MYp8A.jpg','/files/download/Admin/8I9MYp8A.jpg','/files/download/980','/api/files/980/delete',NULL,NULL,NULL,NULL,'N','GettyImages-1334248346.jpg'),
	 (936,NULL,'EUkeEI1G.png','png',814718,'/data/tagocms-staging/Popup/936/EUkeEI1G.png','/files/download/Popup/EUkeEI1G.png','/files/download/981','/api/files/981/delete',NULL,NULL,NULL,NULL,'N','KakaoTalk_20230519_163037969.png'),
	 (937,NULL,'OPTUki7Y.jpg','jpg',5140969,'/data/tagocms-staging/Popup/937/OPTUki7Y.jpg','/files/download/Popup/OPTUki7Y.jpg','/files/download/982','/api/files/982/delete',NULL,NULL,NULL,NULL,'N','GettyImages-1399346227.jpg'),
	 (938,NULL,'Rvj3vu6t.png','png',3544,'/data/tagocms-staging/Popup/938/Rvj3vu6t.png','/files/download/Popup/Rvj3vu6t.png','/files/download/983','/api/files/983/delete',NULL,NULL,NULL,NULL,'N','icons8-지구의-행성-96.png'),
	 (939,NULL,'lPTNsZGB.jpg','jpg',12946,'/data/tagocms-staging/FAQ/939/lPTNsZGB.jpg','/files/download/FAQ/lPTNsZGB.jpg','/files/download/984','/api/files/984/delete',NULL,NULL,NULL,NULL,'N','0dacd95ad94ad7df308141c56f76b5ce.jpg');
INSERT INTO tagocms.t_file (file_group_seq,order_number,stored_file_name,file_ext,file_size,stored_path,view_url,download_url,delete_url,created_date,created_by,modified_date,modified_by,is_deleted,file_name) VALUES
	 (940,NULL,'tuGCVUKv.png','png',854,'/data/tagocms-staging/QNA/940/tuGCVUKv.png','/files/download/QNA/tuGCVUKv.png','/files/download/985','/api/files/985/delete',NULL,NULL,NULL,NULL,'N','icons8-영상-96.png'),
	 (941,NULL,'mWbhGaqO.jpg','jpg',2184188,'/data/tagocms-staging/Admin/941/mWbhGaqO.jpg','/files/download/Admin/mWbhGaqO.jpg','/files/download/986','/api/files/986/delete',NULL,NULL,NULL,NULL,'N','manu-ros-NTJoAKxyxc0-unsplash.jpg'),
	 (942,NULL,'MGyPrdcv.png','png',233428,'/data/tagocms-staging/User/942/MGyPrdcv.png','/files/download/User/MGyPrdcv.png','/files/download/987','/api/files/987/delete',NULL,NULL,NULL,NULL,'N','unnamed.png'),
	 (943,NULL,'Q8irbAIF.jpg','jpg',2626748,'/data/tagocms-staging/User/943/Q8irbAIF.jpg','/files/download/User/Q8irbAIF.jpg','/files/download/988','/api/files/988/delete',NULL,NULL,NULL,NULL,'N','eiliv-aceron-_47dA0d0lY4-unsplash.jpg'),
	 (944,NULL,'oCgtCRxp.jpg','jpg',2626748,'/data/tagocms-staging/User/944/oCgtCRxp.jpg','/files/download/User/oCgtCRxp.jpg','/files/download/989','/api/files/989/delete',NULL,NULL,NULL,NULL,'N','eiliv-aceron-_47dA0d0lY4-unsplash.jpg'),
	 (945,NULL,'Pr4GPCjs.jpg','jpg',2143976,'/data/tagocms-staging/User/945/Pr4GPCjs.jpg','/files/download/User/Pr4GPCjs.jpg','/files/download/990','/api/files/990/delete',NULL,NULL,NULL,NULL,'N','simon-abrams-k_T9Zj3SE8k-unsplash.jpg'),
	 (946,NULL,'tAipmTFp.jfif','jfif',90901,'/data/tagocms-staging/Popup/946/tAipmTFp.jfif','/files/download/Popup/tAipmTFp.jfif','/files/download/991','/api/files/991/delete',NULL,NULL,NULL,NULL,'N','ab67616d0000b2739735377f1bee01d9ea2d31ff.jfif'),
	 (947,NULL,'eLlzBB1r.jfif','jfif',90901,'/data/tagocms-staging/Popup/947/eLlzBB1r.jfif','/files/download/Popup/eLlzBB1r.jfif','/files/download/992','/api/files/992/delete',NULL,NULL,NULL,NULL,'N','ab67616d0000b2739735377f1bee01d9ea2d31ff.jfif'),
	 (948,NULL,'yjQY2H2N.png','png',887,'/data/tagocms-staging/QNA/948/yjQY2H2N.png','/files/download/QNA/yjQY2H2N.png','/files/download/993','/api/files/993/delete',NULL,NULL,NULL,NULL,'N','icons8-add-bookmark-48.png'),
	 (949,NULL,'0UJC17PT.jfif','jfif',47907,'/data/tagocms-staging/User/949/0UJC17PT.jfif','/files/download/User/0UJC17PT.jfif','/files/download/994','/api/files/994/delete',NULL,NULL,NULL,NULL,'N','IMG_2674.jfif');
INSERT INTO tagocms.t_file (file_group_seq,order_number,stored_file_name,file_ext,file_size,stored_path,view_url,download_url,delete_url,created_date,created_by,modified_date,modified_by,is_deleted,file_name) VALUES
	 (950,NULL,'E9Ut2pDB.png','png',94522,'/data/tagocms-staging/QNA/950/E9Ut2pDB.png','/files/download/QNA/E9Ut2pDB.png','/files/download/995','/api/files/995/delete',NULL,NULL,NULL,NULL,'N','이미지_2023-06-08_120100100.png'),
	 (951,NULL,'O0R9uQR5.jpg','jpg',316695,'/data/tagocms-staging/User/951/O0R9uQR5.jpg','/files/download/User/O0R9uQR5.jpg','/files/download/996','/api/files/996/delete',NULL,NULL,NULL,NULL,'N','KakaoTalk_20221201_160850301_01.jpg'),
	 (952,NULL,'yZf883Uu.jpg','jpg',245539,'/data/tagocms-staging/Admin/952/yZf883Uu.jpg','/files/download/Admin/yZf883Uu.jpg','/files/download/997','/api/files/997/delete',NULL,NULL,NULL,NULL,'N','KakaoTalk_20221201_160850301_10.jpg'),
	 (953,NULL,'W4rGZnuN.jpg','jpg',293143,'/data/tagocms-staging/Notice/953/W4rGZnuN.jpg','/files/download/Notice/W4rGZnuN.jpg','/files/download/998','/api/files/998/delete',NULL,NULL,NULL,NULL,'N','KakaoTalk_20221201_160850301_13.jpg'),
	 (954,NULL,'p1b3tS2Y.png','png',5084,'/data/tagocms-staging/Notice/954/p1b3tS2Y.png','/files/download/Notice/p1b3tS2Y.png','/files/download/999','/api/files/999/delete',NULL,NULL,NULL,NULL,'N','dashboard.png'),
	 (955,NULL,'LVyrcz96.jfif','jfif',249840,'/data/tagocms-staging/Banner/955/LVyrcz96.jfif','/files/download/Banner/LVyrcz96.jfif','/files/download/1000','/api/files/1000/delete',NULL,NULL,NULL,NULL,'Y','Bnha WhatsApp.jfif'),
	 (955,NULL,'aoOXW0jw.jpg','jpg',1346389,'/data/tagocms-staging/Popup/955/aoOXW0jw.jpg','/files/download/Popup/aoOXW0jw.jpg','/files/download/1001','/api/files/1001/delete',NULL,NULL,NULL,NULL,'Y','pexels-thomas-svensson-3074526.jpg'),
	 (956,NULL,'9vWZXD1h.jfif','jfif',122065,'/data/tagocms-staging/Banner/956/9vWZXD1h.jfif','/files/download/Banner/9vWZXD1h.jfif','/files/download/1002','/api/files/1002/delete',NULL,NULL,NULL,NULL,'Y','Watch this reel by biryanigrl on Instagram.jfif'),
	 (956,NULL,'JzWIiYm5.jfif','jfif',122065,'/data/tagocms-staging/Banner/956/JzWIiYm5.jfif','/files/download/Banner/JzWIiYm5.jfif','/files/download/1003','/api/files/1003/delete',NULL,NULL,NULL,NULL,'Y','Watch this reel by biryanigrl on Instagram.jfif'),
	 (955,NULL,'xyAwQdHo.jpg','jpg',240327,'/data/tagocms-staging/Popup/955/xyAwQdHo.jpg','/files/download/Popup/xyAwQdHo.jpg','/files/download/1004','/api/files/1004/delete',NULL,NULL,NULL,NULL,'Y','AAAAQXrI1FGiYvifYFKtMdzOMm8k-X9Q6q_9AbnykM_bv6wXuXuts_p75-KIgljsQEOR0AYj7kxks9UQzc0GM3YohFvfo6TBAXGCQxwNSqD3-OKUqwd_JYt-hwqcz3mT4i0VQW2rd470VPMtMYLFwOZ3ewhfydw.jpg');
INSERT INTO tagocms.t_file (file_group_seq,order_number,stored_file_name,file_ext,file_size,stored_path,view_url,download_url,delete_url,created_date,created_by,modified_date,modified_by,is_deleted,file_name) VALUES
	 (956,NULL,'zEsNNVMA.jfif','jfif',122065,'/data/tagocms-staging/Banner/956/zEsNNVMA.jfif','/files/download/Banner/zEsNNVMA.jfif','/files/download/1005','/api/files/1005/delete',NULL,NULL,NULL,NULL,'Y','Watch this reel by biryanigrl on Instagram.jfif'),
	 (957,NULL,'SMoUi99n.jfif','jfif',30588,'/data/tagocms-staging/Banner/957/SMoUi99n.jfif','/files/download/Banner/SMoUi99n.jfif','/files/download/1006','/api/files/1006/delete',NULL,NULL,NULL,NULL,'N','66878d2a-30ec-4080-8d27-4ba0fac516a4.jfif'),
	 (958,NULL,'qkhZWTah.jpg','jpg',240327,'/data/tagocms-staging/Banner/958/qkhZWTah.jpg','/files/download/Banner/qkhZWTah.jpg','/files/download/1007','/api/files/1007/delete',NULL,NULL,NULL,NULL,'N','AAAAQXrI1FGiYvifYFKtMdzOMm8k-X9Q6q_9AbnykM_bv6wXuXuts_p75-KIgljsQEOR0AYj7kxks9UQzc0GM3YohFvfo6TBAXGCQxwNSqD3-OKUqwd_JYt-hwqcz3mT4i0VQW2rd470VPMtMYLFwOZ3ewhfydw.jpg'),
	 (955,NULL,'QflLQ9uq.jpg','jpg',1346389,'/data/tagocms-staging/Popup/955/QflLQ9uq.jpg','/files/download/Popup/QflLQ9uq.jpg','/files/download/1008','/api/files/1008/delete',NULL,NULL,NULL,NULL,'Y','pexels-thomas-svensson-3074526.jpg'),
	 (959,NULL,'4VcaaeGW.png','png',645032,'/data/tagocms-staging/Banner/959/4VcaaeGW.png','/files/download/Banner/4VcaaeGW.png','/files/download/1009','/api/files/1009/delete',NULL,NULL,NULL,NULL,'N','_Wings_ by Me.png'),
	 (955,NULL,'kzhAn2EF.jpg','jpg',714050,'/data/tagocms-staging/Popup/955/kzhAn2EF.jpg','/files/download/Popup/kzhAn2EF.jpg','/files/download/1010','/api/files/1010/delete',NULL,NULL,NULL,NULL,'Y','georgie-cobbs-bKjHgo_Lbpo-unsplash.jpg'),
	 (955,NULL,'blXZi1hd.jpg','jpg',2928288,'/data/tagocms-staging/Popup/955/blXZi1hd.jpg','/files/download/Popup/blXZi1hd.jpg','/files/download/1011','/api/files/1011/delete',NULL,NULL,NULL,NULL,'N','igor-miske-JVSgcV8_vb4-unsplash.jpg'),
	 (956,NULL,'zv0D4v5H.jpg','jpg',714050,'/data/tagocms-staging/Banner/956/zv0D4v5H.jpg','/files/download/Banner/zv0D4v5H.jpg','/files/download/1012','/api/files/1012/delete',NULL,NULL,NULL,NULL,'N','georgie-cobbs-bKjHgo_Lbpo-unsplash.jpg');
INSERT INTO tagocms.t_file_group (table_name,created_date,created_by,modified_date,modified_by,is_deleted) VALUES
	 (NULL,'20230306102601',NULL,NULL,NULL,NULL),
	 (NULL,'20230306102602',NULL,NULL,NULL,NULL),
	 (NULL,'20230306102746',NULL,NULL,NULL,NULL),
	 (NULL,'20230306102747',NULL,NULL,NULL,NULL),
	 (NULL,'20230306103045',NULL,NULL,NULL,NULL),
	 (NULL,'20230306103046',NULL,NULL,NULL,NULL),
	 (NULL,'20230306114125',NULL,NULL,NULL,NULL),
	 (NULL,'20230306114126',NULL,NULL,NULL,NULL),
	 (NULL,'20230306114246',NULL,NULL,NULL,NULL),
	 (NULL,'20230306114248',NULL,NULL,NULL,NULL);
INSERT INTO tagocms.t_file_group (table_name,created_date,created_by,modified_date,modified_by,is_deleted) VALUES
	 (NULL,'20230306114449',NULL,NULL,NULL,NULL),
	 (NULL,'20230306114451',NULL,NULL,NULL,NULL),
	 (NULL,'20230306114613',NULL,NULL,NULL,NULL),
	 (NULL,'20230306114613',NULL,NULL,NULL,NULL),
	 (NULL,'20230306115424',NULL,NULL,NULL,NULL),
	 (NULL,'20230306115424',NULL,NULL,NULL,NULL),
	 (NULL,'20230306131126',NULL,NULL,NULL,NULL),
	 (NULL,'20230306131126',NULL,NULL,NULL,NULL),
	 (NULL,'20230306131915',NULL,NULL,NULL,NULL),
	 (NULL,'20230306131915',NULL,NULL,NULL,NULL);
INSERT INTO tagocms.t_file_group (table_name,created_date,created_by,modified_date,modified_by,is_deleted) VALUES
	 (NULL,'20230306132020',NULL,NULL,NULL,NULL),
	 (NULL,'20230306132020',NULL,NULL,NULL,NULL),
	 (NULL,'20230306133043',NULL,NULL,NULL,NULL),
	 (NULL,'20230306133043',NULL,NULL,NULL,NULL),
	 (NULL,'20230307094214',NULL,NULL,NULL,NULL),
	 (NULL,'20230307094217',NULL,NULL,NULL,NULL),
	 (NULL,'20230307101445',NULL,NULL,NULL,NULL),
	 (NULL,'20230307101445',NULL,NULL,NULL,NULL),
	 (NULL,'20230307103816',NULL,NULL,NULL,NULL),
	 (NULL,'20230307103838',NULL,NULL,NULL,NULL);
INSERT INTO tagocms.t_file_group (table_name,created_date,created_by,modified_date,modified_by,is_deleted) VALUES
	 (NULL,'20230307103839',NULL,NULL,NULL,NULL),
	 (NULL,'20230307103840',NULL,NULL,NULL,NULL),
	 (NULL,'20230307103842',NULL,NULL,NULL,NULL),
	 (NULL,'20230307103902',NULL,NULL,NULL,NULL),
	 (NULL,'20230307103903',NULL,NULL,NULL,NULL),
	 (NULL,'20230307114731',NULL,NULL,NULL,NULL),
	 (NULL,'20230307114732',NULL,NULL,NULL,NULL),
	 (NULL,'20230307201529',NULL,NULL,NULL,NULL),
	 (NULL,'20230307201529',NULL,NULL,NULL,NULL),
	 (NULL,'20230307201621',NULL,NULL,NULL,NULL);
INSERT INTO tagocms.t_file_group (table_name,created_date,created_by,modified_date,modified_by,is_deleted) VALUES
	 (NULL,'20230307201621',NULL,NULL,NULL,NULL),
	 (NULL,'20230308110000',NULL,NULL,NULL,NULL),
	 (NULL,'20230308110000',NULL,NULL,NULL,NULL),
	 (NULL,'20230308110104',NULL,NULL,NULL,NULL),
	 (NULL,'20230308110104',NULL,NULL,NULL,NULL),
	 (NULL,'20230309103950',NULL,NULL,NULL,NULL),
	 (NULL,'20230309104319',NULL,NULL,NULL,NULL),
	 (NULL,'20230309131104',NULL,NULL,NULL,NULL),
	 (NULL,'20230309131306',NULL,NULL,NULL,NULL),
	 (NULL,'20230309131416',NULL,NULL,NULL,NULL);
INSERT INTO tagocms.t_file_group (table_name,created_date,created_by,modified_date,modified_by,is_deleted) VALUES
	 (NULL,'20230310101624',NULL,NULL,NULL,NULL),
	 (NULL,'20230310101624',NULL,NULL,NULL,NULL),
	 (NULL,'20230310103013',NULL,NULL,NULL,NULL),
	 (NULL,'20230310103013',NULL,NULL,NULL,NULL),
	 (NULL,'20230310103704',NULL,NULL,NULL,NULL),
	 (NULL,'20230310103706',NULL,NULL,NULL,NULL),
	 (NULL,'20230310103706',NULL,NULL,NULL,NULL),
	 (NULL,'20230310103706',NULL,NULL,NULL,NULL),
	 (NULL,'20230313104337',NULL,NULL,NULL,NULL),
	 (NULL,'20230313104425',NULL,NULL,NULL,NULL);
INSERT INTO tagocms.t_file_group (table_name,created_date,created_by,modified_date,modified_by,is_deleted) VALUES
	 (NULL,'20230313104615',NULL,NULL,NULL,NULL),
	 (NULL,'20230320112525',NULL,NULL,NULL,NULL),
	 (NULL,'20230320112526',NULL,NULL,NULL,NULL),
	 (NULL,'20230320112549',NULL,NULL,NULL,NULL),
	 (NULL,'20230320112551',NULL,NULL,NULL,NULL),
	 (NULL,'20230320112552',NULL,NULL,NULL,NULL),
	 (NULL,'20230320112552',NULL,NULL,NULL,NULL),
	 (NULL,'20230320112553',NULL,NULL,NULL,NULL),
	 (NULL,'20230320112554',NULL,NULL,NULL,NULL),
	 (NULL,'20230320112554',NULL,NULL,NULL,NULL);
INSERT INTO tagocms.t_file_group (table_name,created_date,created_by,modified_date,modified_by,is_deleted) VALUES
	 (NULL,'20230320112554',NULL,NULL,NULL,NULL),
	 (NULL,'20230320112555',NULL,NULL,NULL,NULL),
	 (NULL,'20230320112556',NULL,NULL,NULL,NULL),
	 (NULL,'20230320112604',NULL,NULL,NULL,NULL),
	 (NULL,'20230320112622',NULL,NULL,NULL,NULL),
	 (NULL,'20230320112623',NULL,NULL,NULL,NULL),
	 (NULL,'20230320112734',NULL,NULL,NULL,NULL),
	 (NULL,'20230320112734',NULL,NULL,NULL,NULL),
	 (NULL,'20230320141902',NULL,NULL,NULL,NULL),
	 (NULL,'20230320150330',NULL,NULL,NULL,NULL);
INSERT INTO tagocms.t_file_group (table_name,created_date,created_by,modified_date,modified_by,is_deleted) VALUES
	 (NULL,'20230323133539',NULL,NULL,NULL,NULL),
	 (NULL,'20230323133539',NULL,NULL,NULL,NULL),
	 (NULL,'20230323134844',NULL,NULL,NULL,NULL),
	 (NULL,'20230323134844',NULL,NULL,NULL,NULL),
	 (NULL,'20230328132839',NULL,NULL,NULL,NULL),
	 (NULL,'20230328132839',NULL,NULL,NULL,NULL),
	 (NULL,'20230328134242',NULL,NULL,NULL,NULL),
	 (NULL,'20230328134242',NULL,NULL,NULL,NULL),
	 (NULL,'20230328143008',NULL,NULL,NULL,NULL),
	 (NULL,'20230328143009',NULL,NULL,NULL,NULL);
INSERT INTO tagocms.t_file_group (table_name,created_date,created_by,modified_date,modified_by,is_deleted) VALUES
	 (NULL,'20230328143115',NULL,NULL,NULL,NULL),
	 (NULL,'20230328143115',NULL,NULL,NULL,NULL),
	 (NULL,'20230328144028',NULL,NULL,NULL,NULL),
	 (NULL,'20230328144028',NULL,NULL,NULL,NULL),
	 (NULL,'20230328144410',NULL,NULL,NULL,NULL),
	 (NULL,'20230328144530',NULL,NULL,NULL,NULL),
	 (NULL,'20230328151618',NULL,NULL,NULL,NULL),
	 (NULL,'20230328151618',NULL,NULL,NULL,NULL),
	 (NULL,'20230328151943',NULL,NULL,NULL,NULL),
	 (NULL,'20230328151943',NULL,NULL,NULL,NULL);
INSERT INTO tagocms.t_file_group (table_name,created_date,created_by,modified_date,modified_by,is_deleted) VALUES
	 (NULL,'20230329101533',NULL,NULL,NULL,NULL),
	 (NULL,'20230329102214',NULL,NULL,NULL,NULL),
	 (NULL,'20230329102350',NULL,NULL,NULL,NULL),
	 (NULL,'20230329111718',NULL,NULL,NULL,NULL),
	 (NULL,'20230329111718',NULL,NULL,NULL,NULL),
	 (NULL,'20230329111831',NULL,NULL,NULL,NULL),
	 (NULL,'20230329111831',NULL,NULL,NULL,NULL),
	 (NULL,'20230329112219',NULL,NULL,NULL,NULL),
	 (NULL,'20230329112417',NULL,NULL,NULL,NULL),
	 (NULL,'20230329112429',NULL,NULL,NULL,NULL);
INSERT INTO tagocms.t_file_group (table_name,created_date,created_by,modified_date,modified_by,is_deleted) VALUES
	 (NULL,'20230329113751',NULL,NULL,NULL,NULL),
	 (NULL,'20230329113757',NULL,NULL,NULL,NULL),
	 (NULL,'20230329113910',NULL,NULL,NULL,NULL),
	 (NULL,'20230329114102',NULL,NULL,NULL,NULL),
	 (NULL,'20230329114108',NULL,NULL,NULL,NULL),
	 (NULL,'20230329114247',NULL,NULL,NULL,NULL),
	 (NULL,'20230329114418',NULL,NULL,NULL,NULL),
	 (NULL,'20230329114439',NULL,NULL,NULL,NULL),
	 (NULL,'20230329114521',NULL,NULL,NULL,NULL),
	 (NULL,'20230329114816',NULL,NULL,NULL,NULL);
INSERT INTO tagocms.t_file_group (table_name,created_date,created_by,modified_date,modified_by,is_deleted) VALUES
	 (NULL,'20230329114818',NULL,NULL,NULL,NULL),
	 (NULL,'20230329114818',NULL,NULL,NULL,NULL),
	 (NULL,'20230329114818',NULL,NULL,NULL,NULL),
	 (NULL,'20230329114818',NULL,NULL,NULL,NULL),
	 (NULL,'20230329114818',NULL,NULL,NULL,NULL),
	 (NULL,'20230329114819',NULL,NULL,NULL,NULL),
	 (NULL,'20230329114820',NULL,NULL,NULL,NULL),
	 (NULL,'20230329114820',NULL,NULL,NULL,NULL),
	 (NULL,'20230329114829',NULL,NULL,NULL,NULL),
	 (NULL,'20230329130334',NULL,NULL,NULL,NULL);
INSERT INTO tagocms.t_file_group (table_name,created_date,created_by,modified_date,modified_by,is_deleted) VALUES
	 (NULL,'20230329130352',NULL,NULL,NULL,NULL),
	 (NULL,'20230329130421',NULL,NULL,NULL,NULL),
	 (NULL,'20230329142337',NULL,NULL,NULL,NULL),
	 (NULL,'20230329142537',NULL,NULL,NULL,NULL),
	 (NULL,'20230329144556',NULL,NULL,NULL,NULL),
	 (NULL,'20230329144556',NULL,NULL,NULL,NULL),
	 (NULL,'20230330092615',NULL,NULL,NULL,NULL),
	 (NULL,'20230330092615',NULL,NULL,NULL,NULL),
	 (NULL,'20230331095524',NULL,NULL,NULL,NULL),
	 (NULL,'20230331095524',NULL,NULL,NULL,NULL);
INSERT INTO tagocms.t_file_group (table_name,created_date,created_by,modified_date,modified_by,is_deleted) VALUES
	 (NULL,'20230404095753',NULL,NULL,NULL,NULL),
	 (NULL,'20230404140227',NULL,NULL,NULL,NULL),
	 (NULL,'20230404140611',NULL,NULL,NULL,NULL),
	 (NULL,'20230404140709',NULL,NULL,NULL,NULL),
	 (NULL,'20230404141153',NULL,NULL,NULL,NULL),
	 (NULL,'20230404141303',NULL,NULL,NULL,NULL),
	 (NULL,'20230404143105',NULL,NULL,NULL,NULL),
	 (NULL,'20230404143454',NULL,NULL,NULL,NULL),
	 (NULL,'20230404183815',NULL,NULL,NULL,NULL),
	 (NULL,'20230405094548',NULL,NULL,NULL,NULL);
INSERT INTO tagocms.t_file_group (table_name,created_date,created_by,modified_date,modified_by,is_deleted) VALUES
	 (NULL,'20230405160302',NULL,NULL,NULL,NULL),
	 (NULL,'20230405160523',NULL,NULL,NULL,NULL),
	 (NULL,'20230405162726',NULL,NULL,NULL,NULL),
	 (NULL,'20230405163928',NULL,NULL,NULL,NULL),
	 (NULL,'20230405170501',NULL,NULL,NULL,NULL),
	 (NULL,'20230405171217',NULL,NULL,NULL,NULL),
	 (NULL,'20230405171240',NULL,NULL,NULL,NULL),
	 (NULL,'20230405171344',NULL,NULL,NULL,NULL),
	 (NULL,'20230405171407',NULL,NULL,NULL,NULL),
	 (NULL,'20230405172249',NULL,NULL,NULL,NULL);
INSERT INTO tagocms.t_file_group (table_name,created_date,created_by,modified_date,modified_by,is_deleted) VALUES
	 (NULL,'20230405172357',NULL,NULL,NULL,NULL),
	 (NULL,'20230405172805',NULL,NULL,NULL,NULL),
	 (NULL,'20230405175649',NULL,NULL,NULL,NULL),
	 (NULL,'20230405175855',NULL,NULL,NULL,NULL),
	 (NULL,'20230406101001',NULL,NULL,NULL,NULL),
	 (NULL,'20230406101037',NULL,NULL,NULL,NULL),
	 (NULL,'20230406101226',NULL,NULL,NULL,NULL),
	 (NULL,'20230406103815',NULL,NULL,NULL,NULL),
	 (NULL,'20230406104643',NULL,NULL,NULL,NULL),
	 (NULL,'20230406104644',NULL,NULL,NULL,NULL);
INSERT INTO tagocms.t_file_group (table_name,created_date,created_by,modified_date,modified_by,is_deleted) VALUES
	 (NULL,'20230406104644',NULL,NULL,NULL,NULL),
	 (NULL,'20230406104645',NULL,NULL,NULL,NULL),
	 (NULL,'20230406104646',NULL,NULL,NULL,NULL),
	 (NULL,'20230406104646',NULL,NULL,NULL,NULL),
	 (NULL,'20230406104647',NULL,NULL,NULL,NULL),
	 (NULL,'20230406104648',NULL,NULL,NULL,NULL),
	 (NULL,'20230406104649',NULL,NULL,NULL,NULL),
	 (NULL,'20230406112246',NULL,NULL,NULL,NULL),
	 (NULL,'20230406114130',NULL,NULL,NULL,NULL),
	 (NULL,'20230406114155',NULL,NULL,NULL,NULL);
INSERT INTO tagocms.t_file_group (table_name,created_date,created_by,modified_date,modified_by,is_deleted) VALUES
	 (NULL,'20230406114215',NULL,NULL,NULL,NULL),
	 (NULL,'20230406114346',NULL,NULL,NULL,NULL),
	 (NULL,'20230406132720',NULL,NULL,NULL,NULL),
	 (NULL,'20230406133037',NULL,NULL,NULL,NULL),
	 (NULL,'20230406133212',NULL,NULL,NULL,NULL),
	 (NULL,'20230410093225',NULL,NULL,NULL,NULL),
	 (NULL,'20230410093225',NULL,NULL,NULL,NULL),
	 (NULL,'20230410121009',NULL,NULL,NULL,NULL),
	 (NULL,'20230410121146',NULL,NULL,NULL,NULL),
	 (NULL,'20230410121155',NULL,NULL,NULL,NULL);
INSERT INTO tagocms.t_file_group (table_name,created_date,created_by,modified_date,modified_by,is_deleted) VALUES
	 (NULL,'20230410121202',NULL,NULL,NULL,NULL),
	 (NULL,'20230410121224',NULL,NULL,NULL,NULL),
	 (NULL,'20230410125415',NULL,NULL,NULL,NULL),
	 (NULL,'20230410133413',NULL,NULL,NULL,NULL),
	 (NULL,'20230410133732',NULL,NULL,NULL,NULL),
	 (NULL,'20230410133921',NULL,NULL,NULL,NULL),
	 (NULL,'20230410135201',NULL,NULL,NULL,NULL),
	 (NULL,'20230410135244',NULL,NULL,NULL,NULL),
	 (NULL,'20230410135442',NULL,NULL,NULL,NULL),
	 (NULL,'20230410135633',NULL,NULL,NULL,NULL);
INSERT INTO tagocms.t_file_group (table_name,created_date,created_by,modified_date,modified_by,is_deleted) VALUES
	 (NULL,'20230410135847',NULL,NULL,NULL,NULL),
	 (NULL,'20230410140049',NULL,NULL,NULL,NULL),
	 (NULL,'20230410140359',NULL,NULL,NULL,NULL),
	 (NULL,'20230410140625',NULL,NULL,NULL,NULL),
	 (NULL,'20230410141041',NULL,NULL,NULL,NULL),
	 (NULL,'20230410141059',NULL,NULL,NULL,NULL),
	 (NULL,'20230410141615',NULL,NULL,NULL,NULL),
	 (NULL,'20230410142100',NULL,NULL,NULL,NULL),
	 (NULL,'20230410142225',NULL,NULL,NULL,NULL),
	 (NULL,'20230410144054',NULL,NULL,NULL,NULL);
INSERT INTO tagocms.t_file_group (table_name,created_date,created_by,modified_date,modified_by,is_deleted) VALUES
	 (NULL,'20230410144105',NULL,NULL,NULL,NULL),
	 (NULL,'20230410144147',NULL,NULL,NULL,NULL),
	 (NULL,'20230410154716',NULL,NULL,NULL,NULL),
	 (NULL,'20230410154735',NULL,NULL,NULL,NULL),
	 (NULL,'20230410154749',NULL,NULL,NULL,NULL),
	 (NULL,'20230410154803',NULL,NULL,NULL,NULL),
	 (NULL,'20230410154816',NULL,NULL,NULL,NULL),
	 (NULL,'20230410154830',NULL,NULL,NULL,NULL),
	 (NULL,'20230410154847',NULL,NULL,NULL,NULL),
	 (NULL,'20230410154906',NULL,NULL,NULL,NULL);
INSERT INTO tagocms.t_file_group (table_name,created_date,created_by,modified_date,modified_by,is_deleted) VALUES
	 (NULL,'20230410161903',NULL,NULL,NULL,NULL),
	 (NULL,'20230410162307',NULL,NULL,NULL,NULL),
	 (NULL,'20230410162414',NULL,NULL,NULL,NULL),
	 (NULL,'20230410163541',NULL,NULL,NULL,NULL),
	 (NULL,'20230410165159',NULL,NULL,NULL,NULL),
	 (NULL,'20230410170857',NULL,NULL,NULL,NULL),
	 (NULL,'20230410170857',NULL,NULL,NULL,NULL),
	 (NULL,'20230411140312',NULL,NULL,NULL,NULL),
	 (NULL,'20230411150323',NULL,NULL,NULL,NULL),
	 (NULL,'20230411150326',NULL,NULL,NULL,NULL);
INSERT INTO tagocms.t_file_group (table_name,created_date,created_by,modified_date,modified_by,is_deleted) VALUES
	 (NULL,'20230411143448',NULL,NULL,NULL,NULL),
	 (NULL,'20230411143448',NULL,NULL,NULL,NULL),
	 (NULL,'20230411144031',NULL,NULL,NULL,NULL),
	 (NULL,'20230411144031',NULL,NULL,NULL,NULL),
	 (NULL,'20230411144353',NULL,NULL,NULL,NULL),
	 (NULL,'20230411144353',NULL,NULL,NULL,NULL),
	 (NULL,'20230411144507',NULL,NULL,NULL,NULL),
	 (NULL,'20230411144532',NULL,NULL,NULL,NULL),
	 (NULL,'20230411145305',NULL,NULL,NULL,NULL),
	 (NULL,'20230411145323',NULL,NULL,NULL,NULL);
INSERT INTO tagocms.t_file_group (table_name,created_date,created_by,modified_date,modified_by,is_deleted) VALUES
	 (NULL,'20230411150230',NULL,NULL,NULL,NULL),
	 (NULL,'20230411150230',NULL,NULL,NULL,NULL),
	 (NULL,'20230411150230',NULL,NULL,NULL,NULL),
	 (NULL,'20230411150230',NULL,NULL,NULL,NULL),
	 (NULL,'20230411150351',NULL,NULL,NULL,NULL),
	 (NULL,'20230411150351',NULL,NULL,NULL,NULL),
	 (NULL,'20230411150451',NULL,NULL,NULL,NULL),
	 (NULL,'20230411150451',NULL,NULL,NULL,NULL),
	 (NULL,'20230411151355',NULL,NULL,NULL,NULL),
	 (NULL,'20230411151355',NULL,NULL,NULL,NULL);
INSERT INTO tagocms.t_file_group (table_name,created_date,created_by,modified_date,modified_by,is_deleted) VALUES
	 (NULL,'20230411154227',NULL,NULL,NULL,NULL),
	 (NULL,'20230411154228',NULL,NULL,NULL,NULL),
	 (NULL,'20230411154335',NULL,NULL,NULL,NULL),
	 (NULL,'20230411154335',NULL,NULL,NULL,NULL),
	 (NULL,'20230411155508',NULL,NULL,NULL,NULL),
	 (NULL,'20230411155508',NULL,NULL,NULL,NULL),
	 (NULL,'20230411164427',NULL,NULL,NULL,NULL),
	 (NULL,'20230411164427',NULL,NULL,NULL,NULL),
	 (NULL,'20230411170019',NULL,NULL,NULL,NULL),
	 (NULL,'20230411170019',NULL,NULL,NULL,NULL);
INSERT INTO tagocms.t_file_group (table_name,created_date,created_by,modified_date,modified_by,is_deleted) VALUES
	 (NULL,'20230411170529',NULL,NULL,NULL,NULL),
	 (NULL,'20230411170529',NULL,NULL,NULL,NULL),
	 (NULL,'20230411183722',NULL,NULL,NULL,NULL),
	 (NULL,'20230411184011',NULL,NULL,NULL,NULL),
	 (NULL,'20230412095259',NULL,NULL,NULL,NULL),
	 (NULL,'20230412100906',NULL,NULL,NULL,NULL),
	 (NULL,'20230412100906',NULL,NULL,NULL,NULL),
	 (NULL,'20230412101118',NULL,NULL,NULL,NULL),
	 (NULL,'20230412101118',NULL,NULL,NULL,NULL),
	 (NULL,'20230412101403',NULL,NULL,NULL,NULL);
INSERT INTO tagocms.t_file_group (table_name,created_date,created_by,modified_date,modified_by,is_deleted) VALUES
	 (NULL,'20230412101403',NULL,NULL,NULL,NULL),
	 (NULL,'20230412103933',NULL,NULL,NULL,NULL),
	 (NULL,'20230412103933',NULL,NULL,NULL,NULL),
	 (NULL,'20230412104043',NULL,NULL,NULL,NULL),
	 (NULL,'20230412104043',NULL,NULL,NULL,NULL),
	 (NULL,'20230412104350',NULL,NULL,NULL,NULL),
	 (NULL,'20230412104350',NULL,NULL,NULL,NULL),
	 (NULL,'20230412104505',NULL,NULL,NULL,NULL),
	 (NULL,'20230412104505',NULL,NULL,NULL,NULL),
	 (NULL,'20230412104846',NULL,NULL,NULL,NULL);
INSERT INTO tagocms.t_file_group (table_name,created_date,created_by,modified_date,modified_by,is_deleted) VALUES
	 (NULL,'20230412104846',NULL,NULL,NULL,NULL),
	 (NULL,'20230412104910',NULL,NULL,NULL,NULL),
	 (NULL,'20230412104910',NULL,NULL,NULL,NULL),
	 (NULL,'20230412111429',NULL,NULL,NULL,NULL),
	 (NULL,'20230412111429',NULL,NULL,NULL,NULL),
	 (NULL,'20230412114411',NULL,NULL,NULL,NULL),
	 (NULL,'20230412114412',NULL,NULL,NULL,NULL),
	 (NULL,'20230412114447',NULL,NULL,NULL,NULL),
	 (NULL,'20230412114447',NULL,NULL,NULL,NULL),
	 (NULL,'20230412121721',NULL,NULL,NULL,NULL);
INSERT INTO tagocms.t_file_group (table_name,created_date,created_by,modified_date,modified_by,is_deleted) VALUES
	 (NULL,'20230412121721',NULL,NULL,NULL,NULL),
	 (NULL,'20230412122347',NULL,NULL,NULL,NULL),
	 (NULL,'20230412122347',NULL,NULL,NULL,NULL),
	 (NULL,'20230412122430',NULL,NULL,NULL,NULL),
	 (NULL,'20230412122430',NULL,NULL,NULL,NULL),
	 (NULL,'20230412130745',NULL,NULL,NULL,NULL),
	 (NULL,'20230412130745',NULL,NULL,NULL,NULL),
	 (NULL,'20230412131526',NULL,NULL,NULL,NULL),
	 (NULL,'20230412131526',NULL,NULL,NULL,NULL),
	 (NULL,'20230412131544',NULL,NULL,NULL,NULL);
INSERT INTO tagocms.t_file_group (table_name,created_date,created_by,modified_date,modified_by,is_deleted) VALUES
	 (NULL,'20230412131544',NULL,NULL,NULL,NULL),
	 (NULL,'20230412132052',NULL,NULL,NULL,NULL),
	 (NULL,'20230412132052',NULL,NULL,NULL,NULL),
	 (NULL,'20230412132550',NULL,NULL,NULL,NULL),
	 (NULL,'20230412132550',NULL,NULL,NULL,NULL),
	 (NULL,'20230412133546',NULL,NULL,NULL,NULL),
	 (NULL,'20230412133546',NULL,NULL,NULL,NULL),
	 (NULL,'20230412133732',NULL,NULL,NULL,NULL),
	 (NULL,'20230412133732',NULL,NULL,NULL,NULL),
	 (NULL,'20230412134646',NULL,NULL,NULL,NULL);
INSERT INTO tagocms.t_file_group (table_name,created_date,created_by,modified_date,modified_by,is_deleted) VALUES
	 (NULL,'20230412134646',NULL,NULL,NULL,NULL),
	 (NULL,'20230412134736',NULL,NULL,NULL,NULL),
	 (NULL,'20230412134736',NULL,NULL,NULL,NULL),
	 (NULL,'20230412134749',NULL,NULL,NULL,NULL),
	 (NULL,'20230412134750',NULL,NULL,NULL,NULL),
	 (NULL,'20230412134857',NULL,NULL,NULL,NULL),
	 (NULL,'20230412134857',NULL,NULL,NULL,NULL),
	 (NULL,'20230412141439',NULL,NULL,NULL,NULL),
	 (NULL,'20230412141439',NULL,NULL,NULL,NULL),
	 (NULL,'20230412141658',NULL,NULL,NULL,NULL);
INSERT INTO tagocms.t_file_group (table_name,created_date,created_by,modified_date,modified_by,is_deleted) VALUES
	 (NULL,'20230412141816',NULL,NULL,NULL,NULL),
	 (NULL,'20230412143711',NULL,NULL,NULL,NULL),
	 (NULL,'20230412143711',NULL,NULL,NULL,NULL),
	 (NULL,'20230412144559',NULL,NULL,NULL,NULL),
	 (NULL,'20230412144600',NULL,NULL,NULL,NULL),
	 (NULL,'20230412144847',NULL,NULL,NULL,NULL),
	 (NULL,'20230412144847',NULL,NULL,NULL,NULL),
	 (NULL,'20230412154423',NULL,NULL,NULL,NULL),
	 (NULL,'20230412154423',NULL,NULL,NULL,NULL),
	 (NULL,'20230412154522',NULL,NULL,NULL,NULL);
INSERT INTO tagocms.t_file_group (table_name,created_date,created_by,modified_date,modified_by,is_deleted) VALUES
	 (NULL,'20230412154522',NULL,NULL,NULL,NULL),
	 (NULL,'20230412160749',NULL,NULL,NULL,NULL),
	 (NULL,'20230412160749',NULL,NULL,NULL,NULL),
	 (NULL,'20230412161312',NULL,NULL,NULL,NULL),
	 (NULL,'20230412161312',NULL,NULL,NULL,NULL),
	 (NULL,'20230412162502',NULL,NULL,NULL,NULL),
	 (NULL,'20230412162502',NULL,NULL,NULL,NULL),
	 (NULL,'20230412162752',NULL,NULL,NULL,NULL),
	 (NULL,'20230412162759',NULL,NULL,NULL,NULL),
	 (NULL,'20230412162808',NULL,NULL,NULL,NULL);
INSERT INTO tagocms.t_file_group (table_name,created_date,created_by,modified_date,modified_by,is_deleted) VALUES
	 (NULL,'20230412162810',NULL,NULL,NULL,NULL),
	 (NULL,'20230412162830',NULL,NULL,NULL,NULL),
	 (NULL,'20230412162834',NULL,NULL,NULL,NULL),
	 (NULL,'20230412162956',NULL,NULL,NULL,NULL),
	 (NULL,'20230412163002',NULL,NULL,NULL,NULL),
	 (NULL,'20230412163119',NULL,NULL,NULL,NULL),
	 (NULL,'20230412163119',NULL,NULL,NULL,NULL),
	 (NULL,'20230412163128',NULL,NULL,NULL,NULL),
	 (NULL,'20230412163128',NULL,NULL,NULL,NULL),
	 (NULL,'20230412165742',NULL,NULL,NULL,NULL);
INSERT INTO tagocms.t_file_group (table_name,created_date,created_by,modified_date,modified_by,is_deleted) VALUES
	 (NULL,'20230412165742',NULL,NULL,NULL,NULL),
	 (NULL,'20230412165801',NULL,NULL,NULL,NULL),
	 (NULL,'20230412165801',NULL,NULL,NULL,NULL),
	 (NULL,'20230412165818',NULL,NULL,NULL,NULL),
	 (NULL,'20230412165818',NULL,NULL,NULL,NULL),
	 (NULL,'20230412170050',NULL,NULL,NULL,NULL),
	 (NULL,'20230412170050',NULL,NULL,NULL,NULL),
	 (NULL,'20230412170406',NULL,NULL,NULL,NULL),
	 (NULL,'20230412170406',NULL,NULL,NULL,NULL),
	 (NULL,'20230412171852',NULL,NULL,NULL,NULL);
INSERT INTO tagocms.t_file_group (table_name,created_date,created_by,modified_date,modified_by,is_deleted) VALUES
	 (NULL,'20230412172912',NULL,NULL,NULL,NULL),
	 (NULL,'20230413093720',NULL,NULL,NULL,NULL),
	 (NULL,'20230413093720',NULL,NULL,NULL,NULL),
	 (NULL,'20230413093807',NULL,NULL,NULL,NULL),
	 (NULL,'20230413093808',NULL,NULL,NULL,NULL),
	 (NULL,'20230413093833',NULL,NULL,NULL,NULL),
	 (NULL,'20230413093834',NULL,NULL,NULL,NULL),
	 (NULL,'20230413093911',NULL,NULL,NULL,NULL),
	 (NULL,'20230413093911',NULL,NULL,NULL,NULL),
	 (NULL,'20230413094006',NULL,NULL,NULL,NULL);
INSERT INTO tagocms.t_file_group (table_name,created_date,created_by,modified_date,modified_by,is_deleted) VALUES
	 (NULL,'20230413094007',NULL,NULL,NULL,NULL),
	 (NULL,'20230413094151',NULL,NULL,NULL,NULL),
	 (NULL,'20230413094151',NULL,NULL,NULL,NULL),
	 (NULL,'20230413094632',NULL,NULL,NULL,NULL),
	 (NULL,'20230413094632',NULL,NULL,NULL,NULL),
	 (NULL,'20230413095703',NULL,NULL,NULL,NULL),
	 (NULL,'20230413095704',NULL,NULL,NULL,NULL),
	 (NULL,'20230413101321',NULL,NULL,NULL,NULL),
	 (NULL,'20230413101321',NULL,NULL,NULL,NULL),
	 (NULL,'20230413101749',NULL,NULL,NULL,NULL);
INSERT INTO tagocms.t_file_group (table_name,created_date,created_by,modified_date,modified_by,is_deleted) VALUES
	 (NULL,'20230413101749',NULL,NULL,NULL,NULL),
	 (NULL,'20230413102449',NULL,NULL,NULL,NULL),
	 (NULL,'20230413102449',NULL,NULL,NULL,NULL),
	 (NULL,'20230413102624',NULL,NULL,NULL,NULL),
	 (NULL,'20230413102624',NULL,NULL,NULL,NULL),
	 (NULL,'20230413131049',NULL,NULL,NULL,NULL),
	 (NULL,'20230413131049',NULL,NULL,NULL,NULL),
	 (NULL,'20230413131141',NULL,NULL,NULL,NULL),
	 (NULL,'20230413131142',NULL,NULL,NULL,NULL),
	 (NULL,'20230413135524',NULL,NULL,NULL,NULL);
INSERT INTO tagocms.t_file_group (table_name,created_date,created_by,modified_date,modified_by,is_deleted) VALUES
	 (NULL,'20230413135524',NULL,NULL,NULL,NULL),
	 (NULL,'20230413135949',NULL,NULL,NULL,NULL),
	 (NULL,'20230413135949',NULL,NULL,NULL,NULL),
	 (NULL,'20230413140031',NULL,NULL,NULL,NULL),
	 (NULL,'20230413140031',NULL,NULL,NULL,NULL),
	 (NULL,'20230413140110',NULL,NULL,NULL,NULL),
	 (NULL,'20230413140110',NULL,NULL,NULL,NULL),
	 (NULL,'20230413140203',NULL,NULL,NULL,NULL),
	 (NULL,'20230413140203',NULL,NULL,NULL,NULL),
	 (NULL,'20230413140241',NULL,NULL,NULL,NULL);
INSERT INTO tagocms.t_file_group (table_name,created_date,created_by,modified_date,modified_by,is_deleted) VALUES
	 (NULL,'20230413140241',NULL,NULL,NULL,NULL),
	 (NULL,'20230413140328',NULL,NULL,NULL,NULL),
	 (NULL,'20230413140329',NULL,NULL,NULL,NULL),
	 (NULL,'20230413140419',NULL,NULL,NULL,NULL),
	 (NULL,'20230413140419',NULL,NULL,NULL,NULL),
	 (NULL,'20230413140456',NULL,NULL,NULL,NULL),
	 (NULL,'20230413140456',NULL,NULL,NULL,NULL),
	 (NULL,'20230413140530',NULL,NULL,NULL,NULL),
	 (NULL,'20230413140530',NULL,NULL,NULL,NULL),
	 (NULL,'20230413151308',NULL,NULL,NULL,NULL);
INSERT INTO tagocms.t_file_group (table_name,created_date,created_by,modified_date,modified_by,is_deleted) VALUES
	 (NULL,'20230413151308',NULL,NULL,NULL,NULL),
	 (NULL,'20230413160431',NULL,NULL,NULL,NULL),
	 (NULL,'20230413160831',NULL,NULL,NULL,NULL),
	 (NULL,'20230413162730',NULL,NULL,NULL,NULL),
	 (NULL,'20230413162730',NULL,NULL,NULL,NULL),
	 (NULL,'20230413162844',NULL,NULL,NULL,NULL),
	 (NULL,'20230413162844',NULL,NULL,NULL,NULL),
	 (NULL,'20230413163826',NULL,NULL,NULL,NULL),
	 (NULL,'20230413163826',NULL,NULL,NULL,NULL),
	 (NULL,'20230413163920',NULL,NULL,NULL,NULL);
INSERT INTO tagocms.t_file_group (table_name,created_date,created_by,modified_date,modified_by,is_deleted) VALUES
	 (NULL,'20230413163920',NULL,NULL,NULL,NULL),
	 (NULL,'20230413165256',NULL,NULL,NULL,NULL),
	 (NULL,'20230413165256',NULL,NULL,NULL,NULL),
	 (NULL,'20230413165930',NULL,NULL,NULL,NULL),
	 (NULL,'20230413165930',NULL,NULL,NULL,NULL),
	 (NULL,'20230413171906',NULL,NULL,NULL,NULL),
	 (NULL,'20230413171906',NULL,NULL,NULL,NULL),
	 (NULL,'20230413175351',NULL,NULL,NULL,NULL),
	 (NULL,'20230413180644',NULL,NULL,NULL,NULL),
	 (NULL,'20230414093239',NULL,NULL,NULL,NULL);
INSERT INTO tagocms.t_file_group (table_name,created_date,created_by,modified_date,modified_by,is_deleted) VALUES
	 (NULL,'20230414093239',NULL,NULL,NULL,NULL),
	 (NULL,'20230414093624',NULL,NULL,NULL,NULL),
	 (NULL,'20230414093625',NULL,NULL,NULL,NULL),
	 (NULL,'20230414095648',NULL,NULL,NULL,NULL),
	 (NULL,'20230414095648',NULL,NULL,NULL,NULL),
	 (NULL,'20230414102014',NULL,NULL,NULL,NULL),
	 (NULL,'20230414102014',NULL,NULL,NULL,NULL),
	 (NULL,'20230414102052',NULL,NULL,NULL,NULL),
	 (NULL,'20230414102052',NULL,NULL,NULL,NULL),
	 (NULL,'20230414141814',NULL,NULL,NULL,NULL);
INSERT INTO tagocms.t_file_group (table_name,created_date,created_by,modified_date,modified_by,is_deleted) VALUES
	 (NULL,'20230414141830',NULL,NULL,NULL,NULL),
	 (NULL,'20230414141839',NULL,NULL,NULL,NULL),
	 (NULL,'20230414141859',NULL,NULL,NULL,NULL),
	 (NULL,'20230414141942',NULL,NULL,NULL,NULL),
	 (NULL,'20230414142037',NULL,NULL,NULL,NULL),
	 (NULL,'20230414142605',NULL,NULL,NULL,NULL),
	 (NULL,'20230414143003',NULL,NULL,NULL,NULL),
	 (NULL,'20230414145548',NULL,NULL,NULL,NULL),
	 (NULL,'20230414145751',NULL,NULL,NULL,NULL),
	 (NULL,'20230414150129',NULL,NULL,NULL,NULL);
INSERT INTO tagocms.t_file_group (table_name,created_date,created_by,modified_date,modified_by,is_deleted) VALUES
	 (NULL,'20230414150311',NULL,NULL,NULL,NULL),
	 (NULL,'20230414150808',NULL,NULL,NULL,NULL),
	 (NULL,'20230414151029',NULL,NULL,NULL,NULL),
	 (NULL,'20230414151543',NULL,NULL,NULL,NULL),
	 (NULL,'20230414151615',NULL,NULL,NULL,NULL),
	 (NULL,'20230414151615',NULL,NULL,NULL,NULL),
	 (NULL,'20230414151812',NULL,NULL,NULL,NULL),
	 (NULL,'20230414151928',NULL,NULL,NULL,NULL),
	 (NULL,'20230414152043',NULL,NULL,NULL,NULL),
	 (NULL,'20230414152419',NULL,NULL,NULL,NULL);
INSERT INTO tagocms.t_file_group (table_name,created_date,created_by,modified_date,modified_by,is_deleted) VALUES
	 (NULL,'20230414152533',NULL,NULL,NULL,NULL),
	 (NULL,'20230414153522',NULL,NULL,NULL,NULL),
	 (NULL,'20230414153544',NULL,NULL,NULL,NULL),
	 (NULL,'20230414153747',NULL,NULL,NULL,NULL),
	 (NULL,'20230414153802',NULL,NULL,NULL,NULL),
	 (NULL,'20230414154536',NULL,NULL,NULL,NULL),
	 (NULL,'20230414161036',NULL,NULL,NULL,NULL),
	 (NULL,'20230414164054',NULL,NULL,NULL,NULL),
	 (NULL,'20230414164441',NULL,NULL,NULL,NULL),
	 (NULL,'20230414164636',NULL,NULL,NULL,NULL);
INSERT INTO tagocms.t_file_group (table_name,created_date,created_by,modified_date,modified_by,is_deleted) VALUES
	 (NULL,'20230414164647',NULL,NULL,NULL,NULL),
	 (NULL,'20230414164655',NULL,NULL,NULL,NULL),
	 (NULL,'20230414164724',NULL,NULL,NULL,NULL),
	 (NULL,'20230414164831',NULL,NULL,NULL,NULL),
	 (NULL,'20230414165047',NULL,NULL,NULL,NULL),
	 (NULL,'20230414165456',NULL,NULL,NULL,NULL),
	 (NULL,'20230417100706',NULL,NULL,NULL,NULL),
	 (NULL,'20230417100739',NULL,NULL,NULL,NULL),
	 (NULL,'20230417100932',NULL,NULL,NULL,NULL),
	 (NULL,'20230417101054',NULL,NULL,NULL,NULL);
INSERT INTO tagocms.t_file_group (table_name,created_date,created_by,modified_date,modified_by,is_deleted) VALUES
	 (NULL,'20230417101640',NULL,NULL,NULL,NULL),
	 (NULL,'20230417101746',NULL,NULL,NULL,NULL),
	 (NULL,'20230417101901',NULL,NULL,NULL,NULL),
	 (NULL,'20230417101910',NULL,NULL,NULL,NULL),
	 (NULL,'20230417102007',NULL,NULL,NULL,NULL),
	 (NULL,'20230417102138',NULL,NULL,NULL,NULL),
	 (NULL,'20230417102351',NULL,NULL,NULL,NULL),
	 (NULL,'20230417104520',NULL,NULL,NULL,NULL),
	 (NULL,'20230417104903',NULL,NULL,NULL,NULL),
	 (NULL,'20230417104935',NULL,NULL,NULL,NULL);
INSERT INTO tagocms.t_file_group (table_name,created_date,created_by,modified_date,modified_by,is_deleted) VALUES
	 (NULL,'20230417104951',NULL,NULL,NULL,NULL),
	 (NULL,'20230417105016',NULL,NULL,NULL,NULL),
	 (NULL,'20230417105310',NULL,NULL,NULL,NULL),
	 (NULL,'20230417105310',NULL,NULL,NULL,NULL),
	 (NULL,'20230417105311',NULL,NULL,NULL,NULL),
	 (NULL,'20230417105353',NULL,NULL,NULL,NULL),
	 (NULL,'20230417105537',NULL,NULL,NULL,NULL),
	 (NULL,'20230417105537',NULL,NULL,NULL,NULL),
	 (NULL,'20230417105537',NULL,NULL,NULL,NULL),
	 (NULL,'20230417105537',NULL,NULL,NULL,NULL);
INSERT INTO tagocms.t_file_group (table_name,created_date,created_by,modified_date,modified_by,is_deleted) VALUES
	 (NULL,'20230417105537',NULL,NULL,NULL,NULL),
	 (NULL,'20230417131704',NULL,NULL,NULL,NULL),
	 (NULL,'20230417131743',NULL,NULL,NULL,NULL),
	 (NULL,'20230417131801',NULL,NULL,NULL,NULL),
	 (NULL,'20230417132002',NULL,NULL,NULL,NULL),
	 (NULL,'20230417132220',NULL,NULL,NULL,NULL),
	 (NULL,'20230417132659',NULL,NULL,NULL,NULL),
	 (NULL,'20230417132742',NULL,NULL,NULL,NULL),
	 (NULL,'20230417132902',NULL,NULL,NULL,NULL),
	 (NULL,'20230417133242',NULL,NULL,NULL,NULL);
INSERT INTO tagocms.t_file_group (table_name,created_date,created_by,modified_date,modified_by,is_deleted) VALUES
	 (NULL,'20230417133454',NULL,NULL,NULL,NULL),
	 (NULL,'20230417133455',NULL,NULL,NULL,NULL),
	 (NULL,'20230417133506',NULL,NULL,NULL,NULL),
	 (NULL,'20230417143558',NULL,NULL,NULL,NULL),
	 (NULL,'20230417143620',NULL,NULL,NULL,NULL),
	 (NULL,'20230418104725',NULL,NULL,NULL,NULL),
	 (NULL,'20230418104746',NULL,NULL,NULL,NULL),
	 (NULL,'20230418104815',NULL,NULL,NULL,NULL),
	 (NULL,'20230418104930',NULL,NULL,NULL,NULL),
	 (NULL,'20230418105238',NULL,NULL,NULL,NULL);
INSERT INTO tagocms.t_file_group (table_name,created_date,created_by,modified_date,modified_by,is_deleted) VALUES
	 (NULL,'20230418105414',NULL,NULL,NULL,NULL),
	 (NULL,'20230418105640',NULL,NULL,NULL,NULL),
	 (NULL,'20230418105716',NULL,NULL,NULL,NULL),
	 (NULL,'20230418105803',NULL,NULL,NULL,NULL),
	 (NULL,'20230418105820',NULL,NULL,NULL,NULL),
	 (NULL,'20230418110002',NULL,NULL,NULL,NULL),
	 (NULL,'20230418110846',NULL,NULL,NULL,NULL),
	 (NULL,'20230418110918',NULL,NULL,NULL,NULL),
	 (NULL,'20230418111913',NULL,NULL,NULL,NULL),
	 (NULL,'20230418111919',NULL,NULL,NULL,NULL);
INSERT INTO tagocms.t_file_group (table_name,created_date,created_by,modified_date,modified_by,is_deleted) VALUES
	 (NULL,'20230418112027',NULL,NULL,NULL,NULL),
	 (NULL,'20230418112207',NULL,NULL,NULL,NULL),
	 (NULL,'20230418113518',NULL,NULL,NULL,NULL),
	 (NULL,'20230418131235',NULL,NULL,NULL,NULL),
	 (NULL,'20230418131235',NULL,NULL,NULL,NULL),
	 (NULL,'20230418131355',NULL,NULL,NULL,NULL),
	 (NULL,'20230418131355',NULL,NULL,NULL,NULL),
	 (NULL,'20230418131802',NULL,NULL,NULL,NULL),
	 (NULL,'20230418141003',NULL,NULL,NULL,NULL),
	 (NULL,'20230418150853',NULL,NULL,NULL,NULL);
INSERT INTO tagocms.t_file_group (table_name,created_date,created_by,modified_date,modified_by,is_deleted) VALUES
	 (NULL,'20230418150853',NULL,NULL,NULL,NULL),
	 (NULL,'20230418151041',NULL,NULL,NULL,NULL),
	 (NULL,'20230418151042',NULL,NULL,NULL,NULL),
	 (NULL,'20230418180209',NULL,NULL,NULL,NULL),
	 (NULL,'20230418180218',NULL,NULL,NULL,NULL),
	 (NULL,'20230418180256',NULL,NULL,NULL,NULL),
	 (NULL,'20230419110934',NULL,NULL,NULL,NULL),
	 (NULL,'20230419110934',NULL,NULL,NULL,NULL),
	 (NULL,'20230419110956',NULL,NULL,NULL,NULL),
	 (NULL,'20230419110956',NULL,NULL,NULL,NULL);
INSERT INTO tagocms.t_file_group (table_name,created_date,created_by,modified_date,modified_by,is_deleted) VALUES
	 (NULL,'20230419111834',NULL,NULL,NULL,NULL),
	 (NULL,'20230419111834',NULL,NULL,NULL,NULL),
	 (NULL,'20230419112100',NULL,NULL,NULL,NULL),
	 (NULL,'20230419112100',NULL,NULL,NULL,NULL),
	 (NULL,'20230419112335',NULL,NULL,NULL,NULL),
	 (NULL,'20230419112339',NULL,NULL,NULL,NULL),
	 (NULL,'20230419112930',NULL,NULL,NULL,NULL),
	 (NULL,'20230419112930',NULL,NULL,NULL,NULL),
	 (NULL,'20230419112947',NULL,NULL,NULL,NULL),
	 (NULL,'20230419112947',NULL,NULL,NULL,NULL);
INSERT INTO tagocms.t_file_group (table_name,created_date,created_by,modified_date,modified_by,is_deleted) VALUES
	 (NULL,'20230419113031',NULL,NULL,NULL,NULL),
	 (NULL,'20230419113031',NULL,NULL,NULL,NULL),
	 (NULL,'20230419113401',NULL,NULL,NULL,NULL),
	 (NULL,'20230419113402',NULL,NULL,NULL,NULL),
	 (NULL,'20230419113412',NULL,NULL,NULL,NULL),
	 (NULL,'20230419113412',NULL,NULL,NULL,NULL),
	 (NULL,'20230419113420',NULL,NULL,NULL,NULL),
	 (NULL,'20230419113420',NULL,NULL,NULL,NULL),
	 (NULL,'20230419113445',NULL,NULL,NULL,NULL),
	 (NULL,'20230419113445',NULL,NULL,NULL,NULL);
INSERT INTO tagocms.t_file_group (table_name,created_date,created_by,modified_date,modified_by,is_deleted) VALUES
	 (NULL,'20230419113523',NULL,NULL,NULL,NULL),
	 (NULL,'20230419113849',NULL,NULL,NULL,NULL),
	 (NULL,'20230419113923',NULL,NULL,NULL,NULL),
	 (NULL,'20230419113923',NULL,NULL,NULL,NULL),
	 (NULL,'20230419114959',NULL,NULL,NULL,NULL),
	 (NULL,'20230419114959',NULL,NULL,NULL,NULL),
	 (NULL,'20230419115142',NULL,NULL,NULL,NULL),
	 (NULL,'20230419115142',NULL,NULL,NULL,NULL),
	 (NULL,'20230419115156',NULL,NULL,NULL,NULL),
	 (NULL,'20230419115156',NULL,NULL,NULL,NULL);
INSERT INTO tagocms.t_file_group (table_name,created_date,created_by,modified_date,modified_by,is_deleted) VALUES
	 (NULL,'20230419115508',NULL,NULL,NULL,NULL),
	 (NULL,'20230419115509',NULL,NULL,NULL,NULL),
	 (NULL,'20230419131509',NULL,NULL,NULL,NULL),
	 (NULL,'20230419131509',NULL,NULL,NULL,NULL),
	 (NULL,'20230419131732',NULL,NULL,NULL,NULL),
	 (NULL,'20230419131732',NULL,NULL,NULL,NULL),
	 (NULL,'20230419131936',NULL,NULL,NULL,NULL),
	 (NULL,'20230419131936',NULL,NULL,NULL,NULL),
	 (NULL,'20230419132046',NULL,NULL,NULL,NULL),
	 (NULL,'20230419132046',NULL,NULL,NULL,NULL);
INSERT INTO tagocms.t_file_group (table_name,created_date,created_by,modified_date,modified_by,is_deleted) VALUES
	 (NULL,'20230419150001',NULL,NULL,NULL,NULL),
	 (NULL,'20230419150114',NULL,NULL,NULL,NULL),
	 (NULL,'20230419163303',NULL,NULL,NULL,NULL),
	 (NULL,'20230419163303',NULL,NULL,NULL,NULL),
	 (NULL,'20230419163422',NULL,NULL,NULL,NULL),
	 (NULL,'20230419163422',NULL,NULL,NULL,NULL),
	 (NULL,'20230419165350',NULL,NULL,NULL,NULL),
	 (NULL,'20230419165350',NULL,NULL,NULL,NULL),
	 (NULL,'20230420144916',NULL,NULL,NULL,NULL),
	 (NULL,'20230420154922',NULL,NULL,NULL,NULL);
INSERT INTO tagocms.t_file_group (table_name,created_date,created_by,modified_date,modified_by,is_deleted) VALUES
	 (NULL,'20230420154922',NULL,NULL,NULL,NULL),
	 (NULL,'20230420155453',NULL,NULL,NULL,NULL),
	 (NULL,'20230420155453',NULL,NULL,NULL,NULL),
	 (NULL,'20230420155621',NULL,NULL,NULL,NULL),
	 (NULL,'20230420155621',NULL,NULL,NULL,NULL),
	 (NULL,'20230420155833',NULL,NULL,NULL,NULL),
	 (NULL,'20230420155833',NULL,NULL,NULL,NULL),
	 (NULL,'20230420160340',NULL,NULL,NULL,NULL),
	 (NULL,'20230420160349',NULL,NULL,NULL,NULL),
	 (NULL,'20230420160359',NULL,NULL,NULL,NULL);
INSERT INTO tagocms.t_file_group (table_name,created_date,created_by,modified_date,modified_by,is_deleted) VALUES
	 (NULL,'20230420160420',NULL,NULL,NULL,NULL),
	 (NULL,'20230420160431',NULL,NULL,NULL,NULL),
	 (NULL,'20230421100446',NULL,NULL,NULL,NULL),
	 (NULL,'20230421100446',NULL,NULL,NULL,NULL),
	 (NULL,'20230421104030',NULL,NULL,NULL,NULL),
	 (NULL,'20230421104031',NULL,NULL,NULL,NULL),
	 (NULL,'20230421112955',NULL,NULL,NULL,NULL),
	 (NULL,'20230421112955',NULL,NULL,NULL,NULL),
	 (NULL,'20230421113808',NULL,NULL,NULL,NULL),
	 (NULL,'20230421113808',NULL,NULL,NULL,NULL);
INSERT INTO tagocms.t_file_group (table_name,created_date,created_by,modified_date,modified_by,is_deleted) VALUES
	 (NULL,'20230421132102',NULL,NULL,NULL,NULL),
	 (NULL,'20230421132102',NULL,NULL,NULL,NULL),
	 (NULL,'20230421132405',NULL,NULL,NULL,NULL),
	 (NULL,'20230421132405',NULL,NULL,NULL,NULL),
	 (NULL,'20230421132528',NULL,NULL,NULL,NULL),
	 (NULL,'20230421132528',NULL,NULL,NULL,NULL),
	 (NULL,'20230421133034',NULL,NULL,NULL,NULL),
	 (NULL,'20230421133034',NULL,NULL,NULL,NULL),
	 (NULL,'20230421135223',NULL,NULL,NULL,NULL),
	 (NULL,'20230421135223',NULL,NULL,NULL,NULL);
INSERT INTO tagocms.t_file_group (table_name,created_date,created_by,modified_date,modified_by,is_deleted) VALUES
	 (NULL,'20230421135912',NULL,NULL,NULL,NULL),
	 (NULL,'20230421135912',NULL,NULL,NULL,NULL),
	 (NULL,'20230421144923',NULL,NULL,NULL,NULL),
	 (NULL,'20230421144924',NULL,NULL,NULL,NULL),
	 (NULL,'20230421145911',NULL,NULL,NULL,NULL),
	 (NULL,'20230421145911',NULL,NULL,NULL,NULL),
	 (NULL,'20230421155712',NULL,NULL,NULL,NULL),
	 (NULL,'20230421155712',NULL,NULL,NULL,NULL),
	 (NULL,'20230421155950',NULL,NULL,NULL,NULL),
	 (NULL,'20230421155950',NULL,NULL,NULL,NULL);
INSERT INTO tagocms.t_file_group (table_name,created_date,created_by,modified_date,modified_by,is_deleted) VALUES
	 (NULL,'20230421162204',NULL,NULL,NULL,NULL),
	 (NULL,'20230421162204',NULL,NULL,NULL,NULL),
	 (NULL,'20230421172056',NULL,NULL,NULL,NULL),
	 (NULL,'20230421172056',NULL,NULL,NULL,NULL),
	 (NULL,'20230421175908',NULL,NULL,NULL,NULL),
	 (NULL,'20230421175908',NULL,NULL,NULL,NULL),
	 (NULL,'20230421180935',NULL,NULL,NULL,NULL),
	 (NULL,'20230421180935',NULL,NULL,NULL,NULL),
	 (NULL,'20230421182400',NULL,NULL,NULL,NULL),
	 (NULL,'20230421182413',NULL,NULL,NULL,NULL);
INSERT INTO tagocms.t_file_group (table_name,created_date,created_by,modified_date,modified_by,is_deleted) VALUES
	 (NULL,'20230421182512',NULL,NULL,NULL,NULL),
	 (NULL,'20230421182613',NULL,NULL,NULL,NULL),
	 (NULL,'20230421182639',NULL,NULL,NULL,NULL),
	 (NULL,'20230421183218',NULL,NULL,NULL,NULL),
	 (NULL,'20230421183218',NULL,NULL,NULL,NULL),
	 (NULL,'20230421183641',NULL,NULL,NULL,NULL),
	 (NULL,'20230421183641',NULL,NULL,NULL,NULL),
	 (NULL,'20230421183839',NULL,NULL,NULL,NULL),
	 (NULL,'20230421183839',NULL,NULL,NULL,NULL),
	 (NULL,'20230421184206',NULL,NULL,NULL,NULL);
INSERT INTO tagocms.t_file_group (table_name,created_date,created_by,modified_date,modified_by,is_deleted) VALUES
	 (NULL,'20230421184206',NULL,NULL,NULL,NULL),
	 (NULL,'20230421184542',NULL,NULL,NULL,NULL),
	 (NULL,'20230421184542',NULL,NULL,NULL,NULL),
	 (NULL,'20230421184640',NULL,NULL,NULL,NULL),
	 (NULL,'20230421184640',NULL,NULL,NULL,NULL),
	 (NULL,'20230421185002',NULL,NULL,NULL,NULL),
	 (NULL,'20230421191501',NULL,NULL,NULL,NULL),
	 (NULL,'20230421191501',NULL,NULL,NULL,NULL),
	 (NULL,'20230424092959',NULL,NULL,NULL,NULL),
	 (NULL,'20230424092959',NULL,NULL,NULL,NULL);
INSERT INTO tagocms.t_file_group (table_name,created_date,created_by,modified_date,modified_by,is_deleted) VALUES
	 (NULL,'20230424095701',NULL,NULL,NULL,NULL),
	 (NULL,'20230424095701',NULL,NULL,NULL,NULL),
	 (NULL,'20230424100002',NULL,NULL,NULL,NULL),
	 (NULL,'20230424100002',NULL,NULL,NULL,NULL),
	 (NULL,'20230424100619',NULL,NULL,NULL,NULL),
	 (NULL,'20230424100619',NULL,NULL,NULL,NULL),
	 (NULL,'20230424104035',NULL,NULL,NULL,NULL),
	 (NULL,'20230424104035',NULL,NULL,NULL,NULL),
	 (NULL,'20230424104107',NULL,NULL,NULL,NULL),
	 (NULL,'20230424104108',NULL,NULL,NULL,NULL);
INSERT INTO tagocms.t_file_group (table_name,created_date,created_by,modified_date,modified_by,is_deleted) VALUES
	 (NULL,'20230424120531',NULL,NULL,NULL,NULL),
	 (NULL,'20230424120532',NULL,NULL,NULL,NULL),
	 (NULL,'20230424142140',NULL,NULL,NULL,NULL),
	 (NULL,'20230424142140',NULL,NULL,NULL,NULL),
	 (NULL,'20230424145406',NULL,NULL,NULL,NULL),
	 (NULL,'20230424145406',NULL,NULL,NULL,NULL),
	 (NULL,'20230424150329',NULL,NULL,NULL,NULL),
	 (NULL,'20230424150330',NULL,NULL,NULL,NULL),
	 (NULL,'20230424151252',NULL,NULL,NULL,NULL),
	 (NULL,'20230424151252',NULL,NULL,NULL,NULL);
INSERT INTO tagocms.t_file_group (table_name,created_date,created_by,modified_date,modified_by,is_deleted) VALUES
	 (NULL,'20230424160452',NULL,NULL,NULL,NULL),
	 (NULL,'20230424160452',NULL,NULL,NULL,NULL),
	 (NULL,'20230424164831',NULL,NULL,NULL,NULL),
	 (NULL,'20230424164831',NULL,NULL,NULL,NULL),
	 (NULL,'20230425114128',NULL,NULL,NULL,NULL),
	 (NULL,'20230425114128',NULL,NULL,NULL,NULL),
	 (NULL,'20230425132154',NULL,NULL,NULL,NULL),
	 (NULL,'20230425132155',NULL,NULL,NULL,NULL),
	 (NULL,'20230425132607',NULL,NULL,NULL,NULL),
	 (NULL,'20230425132607',NULL,NULL,NULL,NULL);
INSERT INTO tagocms.t_file_group (table_name,created_date,created_by,modified_date,modified_by,is_deleted) VALUES
	 (NULL,'20230425135720',NULL,NULL,NULL,NULL),
	 (NULL,'20230425135720',NULL,NULL,NULL,NULL),
	 (NULL,'20230425140017',NULL,NULL,NULL,NULL),
	 (NULL,'20230425140017',NULL,NULL,NULL,NULL),
	 (NULL,'20230425140731',NULL,NULL,NULL,NULL),
	 (NULL,'20230425140731',NULL,NULL,NULL,NULL),
	 (NULL,'20230425154831',NULL,NULL,NULL,NULL),
	 (NULL,'20230425154831',NULL,NULL,NULL,NULL),
	 (NULL,'20230425155124',NULL,NULL,NULL,NULL),
	 (NULL,'20230425155124',NULL,NULL,NULL,NULL);
INSERT INTO tagocms.t_file_group (table_name,created_date,created_by,modified_date,modified_by,is_deleted) VALUES
	 (NULL,'20230425155755',NULL,NULL,NULL,NULL),
	 (NULL,'20230425155756',NULL,NULL,NULL,NULL),
	 (NULL,'20230425155848',NULL,NULL,NULL,NULL),
	 (NULL,'20230425155848',NULL,NULL,NULL,NULL),
	 (NULL,'20230425160747',NULL,NULL,NULL,NULL),
	 (NULL,'20230425160747',NULL,NULL,NULL,NULL),
	 (NULL,'20230425170324',NULL,NULL,NULL,NULL),
	 (NULL,'20230425170324',NULL,NULL,NULL,NULL),
	 (NULL,'20230425170729',NULL,NULL,NULL,NULL),
	 (NULL,'20230425170729',NULL,NULL,NULL,NULL);
INSERT INTO tagocms.t_file_group (table_name,created_date,created_by,modified_date,modified_by,is_deleted) VALUES
	 (NULL,'20230426090003',NULL,NULL,NULL,NULL),
	 (NULL,'20230426090003',NULL,NULL,NULL,NULL),
	 (NULL,'20230426091502',NULL,NULL,NULL,NULL),
	 (NULL,'20230426091502',NULL,NULL,NULL,NULL),
	 (NULL,'20230426091744',NULL,NULL,NULL,NULL),
	 (NULL,'20230426091744',NULL,NULL,NULL,NULL),
	 (NULL,'20230426095144',NULL,NULL,NULL,NULL),
	 (NULL,'20230426095144',NULL,NULL,NULL,NULL),
	 (NULL,'20230426111152',NULL,NULL,NULL,NULL),
	 (NULL,'20230426111200',NULL,NULL,NULL,NULL);
INSERT INTO tagocms.t_file_group (table_name,created_date,created_by,modified_date,modified_by,is_deleted) VALUES
	 (NULL,'20230426111408',NULL,NULL,NULL,NULL),
	 (NULL,'20230426111408',NULL,NULL,NULL,NULL),
	 (NULL,'20230426111536',NULL,NULL,NULL,NULL),
	 (NULL,'20230426111751',NULL,NULL,NULL,NULL),
	 (NULL,'20230426112118',NULL,NULL,NULL,NULL),
	 (NULL,'20230426112155',NULL,NULL,NULL,NULL),
	 (NULL,'20230426112227',NULL,NULL,NULL,NULL),
	 (NULL,'20230426112529',NULL,NULL,NULL,NULL),
	 (NULL,'20230426112548',NULL,NULL,NULL,NULL),
	 (NULL,'20230426112835',NULL,NULL,NULL,NULL);
INSERT INTO tagocms.t_file_group (table_name,created_date,created_by,modified_date,modified_by,is_deleted) VALUES
	 (NULL,'20230426112957',NULL,NULL,NULL,NULL),
	 (NULL,'20230426113012',NULL,NULL,NULL,NULL),
	 (NULL,'20230426113314',NULL,NULL,NULL,NULL),
	 (NULL,'20230426113339',NULL,NULL,NULL,NULL),
	 (NULL,'20230426113400',NULL,NULL,NULL,NULL),
	 (NULL,'20230426113537',NULL,NULL,NULL,NULL),
	 (NULL,'20230426113620',NULL,NULL,NULL,NULL),
	 (NULL,'20230426113634',NULL,NULL,NULL,NULL),
	 (NULL,'20230427094840',NULL,NULL,NULL,NULL),
	 (NULL,'20230427094916',NULL,NULL,NULL,NULL);
INSERT INTO tagocms.t_file_group (table_name,created_date,created_by,modified_date,modified_by,is_deleted) VALUES
	 (NULL,'20230427095118',NULL,NULL,NULL,NULL),
	 (NULL,'20230427095118',NULL,NULL,NULL,NULL),
	 (NULL,'20230427095118',NULL,NULL,NULL,NULL),
	 (NULL,'20230427100135',NULL,NULL,NULL,NULL),
	 (NULL,'20230427100241',NULL,NULL,NULL,NULL),
	 (NULL,'20230427100433',NULL,NULL,NULL,NULL),
	 (NULL,'20230427101420',NULL,NULL,NULL,NULL),
	 (NULL,'20230427101540',NULL,NULL,NULL,NULL),
	 (NULL,'20230427101540',NULL,NULL,NULL,NULL),
	 (NULL,'20230427101702',NULL,NULL,NULL,NULL);
INSERT INTO tagocms.t_file_group (table_name,created_date,created_by,modified_date,modified_by,is_deleted) VALUES
	 (NULL,'20230427101702',NULL,NULL,NULL,NULL),
	 (NULL,'20230427103955',NULL,NULL,NULL,NULL),
	 (NULL,'20230427110740',NULL,NULL,NULL,NULL),
	 (NULL,'20230427110740',NULL,NULL,NULL,NULL),
	 (NULL,'20230427110740',NULL,NULL,NULL,NULL),
	 (NULL,'20230427111032',NULL,NULL,NULL,NULL),
	 (NULL,'20230427111600',NULL,NULL,NULL,NULL),
	 (NULL,'20230427111600',NULL,NULL,NULL,NULL),
	 (NULL,'20230427111600',NULL,NULL,NULL,NULL),
	 (NULL,'20230427111714',NULL,NULL,NULL,NULL);
INSERT INTO tagocms.t_file_group (table_name,created_date,created_by,modified_date,modified_by,is_deleted) VALUES
	 (NULL,'20230427113402',NULL,NULL,NULL,NULL),
	 (NULL,'20230427113402',NULL,NULL,NULL,NULL),
	 (NULL,'20230427113436',NULL,NULL,NULL,NULL),
	 (NULL,'20230427113436',NULL,NULL,NULL,NULL),
	 (NULL,'20230427113557',NULL,NULL,NULL,NULL),
	 (NULL,'20230427114345',NULL,NULL,NULL,NULL),
	 (NULL,'20230427114345',NULL,NULL,NULL,NULL),
	 (NULL,'20230427114416',NULL,NULL,NULL,NULL),
	 (NULL,'20230427114416',NULL,NULL,NULL,NULL),
	 (NULL,'20230427114559',NULL,NULL,NULL,NULL);
INSERT INTO tagocms.t_file_group (table_name,created_date,created_by,modified_date,modified_by,is_deleted) VALUES
	 (NULL,'20230427114559',NULL,NULL,NULL,NULL),
	 (NULL,'20230427120350',NULL,NULL,NULL,NULL),
	 (NULL,'20230427151209',NULL,NULL,NULL,NULL),
	 (NULL,'20230427152410',NULL,NULL,NULL,NULL),
	 (NULL,'20230427170432',NULL,NULL,NULL,NULL),
	 (NULL,'20230428104016',NULL,NULL,NULL,NULL),
	 (NULL,'20230428104036',NULL,NULL,NULL,NULL),
	 (NULL,'20230428104036',NULL,NULL,NULL,NULL),
	 (NULL,'20230428104625',NULL,NULL,NULL,NULL),
	 (NULL,'20230428104718',NULL,NULL,NULL,NULL);
INSERT INTO tagocms.t_file_group (table_name,created_date,created_by,modified_date,modified_by,is_deleted) VALUES
	 (NULL,'20230428143517',NULL,NULL,NULL,NULL),
	 (NULL,'20230428151308',NULL,NULL,NULL,NULL),
	 (NULL,'20230428151440',NULL,NULL,NULL,NULL),
	 (NULL,'20230428164526',NULL,NULL,NULL,NULL),
	 (NULL,'20230501092718',NULL,NULL,NULL,NULL),
	 (NULL,'20230501095148',NULL,NULL,NULL,NULL),
	 (NULL,'20230501095343',NULL,NULL,NULL,NULL),
	 (NULL,'20230501102340',NULL,NULL,NULL,NULL),
	 (NULL,'20230501112234',NULL,NULL,NULL,NULL),
	 (NULL,'20230501115325',NULL,NULL,NULL,NULL);
INSERT INTO tagocms.t_file_group (table_name,created_date,created_by,modified_date,modified_by,is_deleted) VALUES
	 (NULL,'20230501115325',NULL,NULL,NULL,NULL),
	 (NULL,'20230501130832',NULL,NULL,NULL,NULL),
	 (NULL,'20230501130832',NULL,NULL,NULL,NULL),
	 (NULL,'20230501134009',NULL,NULL,NULL,NULL),
	 (NULL,'20230501141037',NULL,NULL,NULL,NULL),
	 (NULL,'20230501141037',NULL,NULL,NULL,NULL),
	 (NULL,'20230502151126',NULL,NULL,NULL,NULL),
	 (NULL,'20230502163634',NULL,NULL,NULL,NULL),
	 (NULL,'20230502174145',NULL,NULL,NULL,NULL),
	 (NULL,'20230502174257',NULL,NULL,NULL,NULL);
INSERT INTO tagocms.t_file_group (table_name,created_date,created_by,modified_date,modified_by,is_deleted) VALUES
	 (NULL,'20230502174344',NULL,NULL,NULL,NULL),
	 (NULL,'20230502174752',NULL,NULL,NULL,NULL),
	 (NULL,'20230503094957',NULL,NULL,NULL,NULL),
	 (NULL,'20230503095057',NULL,NULL,NULL,NULL),
	 (NULL,'20230503095403',NULL,NULL,NULL,NULL),
	 (NULL,'20230503095702',NULL,NULL,NULL,NULL),
	 (NULL,'20230503100251',NULL,NULL,NULL,NULL),
	 (NULL,'20230503100251',NULL,NULL,NULL,NULL),
	 (NULL,'20230503104224',NULL,NULL,NULL,NULL),
	 (NULL,'20230503104224',NULL,NULL,NULL,NULL);
INSERT INTO tagocms.t_file_group (table_name,created_date,created_by,modified_date,modified_by,is_deleted) VALUES
	 (NULL,'20230503104224',NULL,NULL,NULL,NULL),
	 (NULL,'20230503104630',NULL,NULL,NULL,NULL),
	 (NULL,'20230503111305',NULL,NULL,NULL,NULL),
	 (NULL,'20230503111340',NULL,NULL,NULL,NULL),
	 (NULL,'20230503111421',NULL,NULL,NULL,NULL),
	 (NULL,'20230503112109',NULL,NULL,NULL,NULL),
	 (NULL,'20230503112146',NULL,NULL,NULL,NULL),
	 (NULL,'20230503112841',NULL,NULL,NULL,NULL),
	 (NULL,'20230503134032',NULL,NULL,NULL,NULL),
	 (NULL,'20230503140146',NULL,NULL,NULL,NULL);
INSERT INTO tagocms.t_file_group (table_name,created_date,created_by,modified_date,modified_by,is_deleted) VALUES
	 (NULL,'20230503140246',NULL,NULL,NULL,NULL),
	 (NULL,'20230503144356',NULL,NULL,NULL,NULL),
	 (NULL,'20230503144417',NULL,NULL,NULL,NULL),
	 (NULL,'20230503144417',NULL,NULL,NULL,NULL),
	 (NULL,'20230503185041',NULL,NULL,NULL,NULL),
	 (NULL,'20230503185044',NULL,NULL,NULL,NULL),
	 (NULL,'20230504110723',NULL,NULL,NULL,NULL),
	 (NULL,'20230504132845',NULL,NULL,NULL,NULL),
	 (NULL,'20230504135941',NULL,NULL,NULL,NULL),
	 (NULL,'20230504143133',NULL,NULL,NULL,NULL);
INSERT INTO tagocms.t_file_group (table_name,created_date,created_by,modified_date,modified_by,is_deleted) VALUES
	 (NULL,'20230504143428',NULL,NULL,NULL,NULL),
	 (NULL,'20230504144408',NULL,NULL,NULL,NULL),
	 (NULL,'20230504145723',NULL,NULL,NULL,NULL),
	 (NULL,'20230504163146',NULL,NULL,NULL,NULL),
	 (NULL,'20230505121427',NULL,NULL,NULL,NULL),
	 (NULL,'20230505122203',NULL,NULL,NULL,NULL),
	 (NULL,'20230505134241',NULL,NULL,NULL,NULL),
	 (NULL,'20230505134733',NULL,NULL,NULL,NULL),
	 (NULL,'20230505135021',NULL,NULL,NULL,NULL),
	 (NULL,'20230505135421',NULL,NULL,NULL,NULL);
INSERT INTO tagocms.t_file_group (table_name,created_date,created_by,modified_date,modified_by,is_deleted) VALUES
	 (NULL,'20230505135421',NULL,NULL,NULL,NULL),
	 (NULL,'20230510132137',NULL,NULL,NULL,NULL),
	 (NULL,'20230510132558',NULL,NULL,NULL,NULL),
	 (NULL,'20230510132558',NULL,NULL,NULL,NULL),
	 (NULL,'20230510132558',NULL,NULL,NULL,NULL),
	 (NULL,'20230510132616',NULL,NULL,NULL,NULL),
	 (NULL,'20230510132616',NULL,NULL,NULL,NULL),
	 (NULL,'20230510132616',NULL,NULL,NULL,NULL),
	 (NULL,'20230510132620',NULL,NULL,NULL,NULL),
	 (NULL,'20230510132620',NULL,NULL,NULL,NULL);
INSERT INTO tagocms.t_file_group (table_name,created_date,created_by,modified_date,modified_by,is_deleted) VALUES
	 (NULL,'20230510132620',NULL,NULL,NULL,NULL),
	 (NULL,'20230510132639',NULL,NULL,NULL,NULL),
	 (NULL,'20230510132639',NULL,NULL,NULL,NULL),
	 (NULL,'20230510132639',NULL,NULL,NULL,NULL),
	 (NULL,'20230510132733',NULL,NULL,NULL,NULL),
	 (NULL,'20230510132748',NULL,NULL,NULL,NULL),
	 (NULL,'20230510132748',NULL,NULL,NULL,NULL),
	 (NULL,'20230510132800',NULL,NULL,NULL,NULL),
	 (NULL,'20230510132800',NULL,NULL,NULL,NULL),
	 (NULL,'20230510132800',NULL,NULL,NULL,NULL);
INSERT INTO tagocms.t_file_group (table_name,created_date,created_by,modified_date,modified_by,is_deleted) VALUES
	 (NULL,'20230511173258',NULL,NULL,NULL,NULL),
	 (NULL,'20230511173258',NULL,NULL,NULL,NULL),
	 (NULL,'20230511173505',NULL,NULL,NULL,NULL),
	 (NULL,'20230511173824',NULL,NULL,NULL,NULL),
	 (NULL,'20230511174033',NULL,NULL,NULL,NULL),
	 (NULL,'20230511190616',NULL,NULL,NULL,NULL),
	 (NULL,'20230512091921',NULL,NULL,NULL,NULL),
	 (NULL,'20230512100452',NULL,NULL,NULL,NULL),
	 (NULL,'20230512100656',NULL,NULL,NULL,NULL),
	 (NULL,'20230512113105',NULL,NULL,NULL,NULL);
INSERT INTO tagocms.t_file_group (table_name,created_date,created_by,modified_date,modified_by,is_deleted) VALUES
	 (NULL,'20230519105658',NULL,NULL,NULL,NULL),
	 (NULL,'20230519110144',NULL,NULL,NULL,NULL),
	 (NULL,'20230519162749',NULL,NULL,NULL,NULL),
	 (NULL,'20230519164959',NULL,NULL,NULL,NULL),
	 (NULL,'20230519165400',NULL,NULL,NULL,NULL),
	 (NULL,'20230519170216',NULL,NULL,NULL,NULL),
	 (NULL,'20230522112214',NULL,NULL,NULL,NULL),
	 (NULL,'20230522144200',NULL,NULL,NULL,NULL),
	 (NULL,'20230522145301',NULL,NULL,NULL,NULL),
	 (NULL,'20230522151126',NULL,NULL,NULL,NULL);
INSERT INTO tagocms.t_file_group (table_name,created_date,created_by,modified_date,modified_by,is_deleted) VALUES
	 (NULL,'20230522152418',NULL,NULL,NULL,NULL),
	 (NULL,'20230522152814',NULL,NULL,NULL,NULL),
	 (NULL,'20230522161324',NULL,NULL,NULL,NULL),
	 (NULL,'20230522170728',NULL,NULL,NULL,NULL),
	 (NULL,'20230522170841',NULL,NULL,NULL,NULL),
	 (NULL,'20230523100716',NULL,NULL,NULL,NULL),
	 (NULL,'20230523105310',NULL,NULL,NULL,NULL),
	 (NULL,'20230523110008',NULL,NULL,NULL,NULL),
	 (NULL,'20230523144508',NULL,NULL,NULL,NULL),
	 (NULL,'20230523152124',NULL,NULL,NULL,NULL);
INSERT INTO tagocms.t_file_group (table_name,created_date,created_by,modified_date,modified_by,is_deleted) VALUES
	 (NULL,'20230523173536',NULL,NULL,NULL,NULL),
	 (NULL,'20230523173614',NULL,NULL,NULL,NULL),
	 (NULL,'20230523173713',NULL,NULL,NULL,NULL),
	 (NULL,'20230523173845',NULL,NULL,NULL,NULL),
	 (NULL,'20230523173954',NULL,NULL,NULL,NULL),
	 (NULL,'20230523174214',NULL,NULL,NULL,NULL),
	 (NULL,'20230524101810',NULL,NULL,NULL,NULL),
	 (NULL,'20230524103121',NULL,NULL,NULL,NULL),
	 (NULL,'20230524112458',NULL,NULL,NULL,NULL),
	 (NULL,'20230524114804',NULL,NULL,NULL,NULL);
INSERT INTO tagocms.t_file_group (table_name,created_date,created_by,modified_date,modified_by,is_deleted) VALUES
	 (NULL,'20230524114804',NULL,NULL,NULL,NULL),
	 (NULL,'20230524124923',NULL,NULL,NULL,NULL),
	 (NULL,'20230524124923',NULL,NULL,NULL,NULL),
	 (NULL,'20230529110513',NULL,NULL,NULL,NULL),
	 (NULL,'20230529110801',NULL,NULL,NULL,NULL),
	 (NULL,'20230529110801',NULL,NULL,NULL,NULL),
	 (NULL,'20230605131735',NULL,NULL,NULL,NULL),
	 (NULL,'20230605131801',NULL,NULL,NULL,NULL),
	 (NULL,'20230605131824',NULL,NULL,NULL,NULL),
	 (NULL,'20230605131851',NULL,NULL,NULL,NULL);
INSERT INTO tagocms.t_file_group (table_name,created_date,created_by,modified_date,modified_by,is_deleted) VALUES
	 (NULL,'20230605131913',NULL,NULL,NULL,NULL),
	 (NULL,'20230605131933',NULL,NULL,NULL,NULL),
	 (NULL,'20230605131950',NULL,NULL,NULL,NULL),
	 (NULL,'20230605132013',NULL,NULL,NULL,NULL),
	 (NULL,'20230605141747',NULL,NULL,NULL,NULL),
	 (NULL,'20230605152322',NULL,NULL,NULL,NULL),
	 (NULL,'20230605162150',NULL,NULL,NULL,NULL),
	 (NULL,'20230605162150',NULL,NULL,NULL,NULL),
	 (NULL,'20230605162639',NULL,NULL,NULL,NULL),
	 (NULL,'20230605162639',NULL,NULL,NULL,NULL);
INSERT INTO tagocms.t_file_group (table_name,created_date,created_by,modified_date,modified_by,is_deleted) VALUES
	 (NULL,'20230605163720',NULL,NULL,NULL,NULL),
	 (NULL,'20230605163720',NULL,NULL,NULL,NULL),
	 (NULL,'20230605164600',NULL,NULL,NULL,NULL),
	 (NULL,'20230605164600',NULL,NULL,NULL,NULL),
	 (NULL,'20230605165737',NULL,NULL,NULL,NULL),
	 (NULL,'20230605170917',NULL,NULL,NULL,NULL),
	 (NULL,'20230605171100',NULL,NULL,NULL,NULL),
	 (NULL,'20230605171100',NULL,NULL,NULL,NULL),
	 (NULL,'20230605174444',NULL,NULL,NULL,NULL),
	 (NULL,'20230605175719',NULL,NULL,NULL,NULL);
INSERT INTO tagocms.t_file_group (table_name,created_date,created_by,modified_date,modified_by,is_deleted) VALUES
	 (NULL,'20230607110129',NULL,NULL,NULL,NULL),
	 (NULL,'20230607110746',NULL,NULL,NULL,NULL),
	 (NULL,'20230607112452',NULL,NULL,NULL,NULL),
	 (NULL,'20230607112544',NULL,NULL,NULL,NULL),
	 (NULL,'20230607113758',NULL,NULL,NULL,NULL),
	 (NULL,'20230607152807',NULL,NULL,NULL,NULL),
	 (NULL,'20230607152808',NULL,NULL,NULL,NULL),
	 (NULL,'20230607161352',NULL,NULL,NULL,NULL),
	 (NULL,'20230608113832',NULL,NULL,NULL,NULL),
	 (NULL,'20230608120104',NULL,NULL,NULL,NULL);
INSERT INTO tagocms.t_file_group (table_name,created_date,created_by,modified_date,modified_by,is_deleted) VALUES
	 (NULL,'20230612132806',NULL,NULL,NULL,NULL),
	 (NULL,'20230612134107',NULL,NULL,NULL,NULL),
	 (NULL,'20230612134822',NULL,NULL,NULL,NULL),
	 (NULL,'20230613111121',NULL,NULL,NULL,NULL),
	 (NULL,'20230626143250',NULL,NULL,NULL,NULL),
	 (NULL,'20230626145524',NULL,NULL,NULL,NULL),
	 (NULL,'20230626150052',NULL,NULL,NULL,NULL),
	 (NULL,'20230626150052',NULL,NULL,NULL,NULL),
	 (NULL,'20230626151437',NULL,NULL,NULL,NULL);
INSERT INTO tagocms.t_mail_history (mail_template_seq,target_group,sender_seq,sender_username,sender_fullname,status,recipient_cc,recipient_bcc,subject,content,send_date,created_date,is_deleted) VALUES
	 (2,'ALL',NULL,NULL,NULL,'SUCCESS','timbold87@gmail.com,admin@gmail.com',NULL,'mail_sending_1','mail_sending_content_1','20230425190011','20230425150318','N'),
	 (2,NULL,NULL,NULL,NULL,'SUCCESS','amaayamato@gmail.com',NULL,'HelloWorld','HelloWorld content!!!','20230504111444','20230504111444','N'),
	 (2,NULL,NULL,NULL,NULL,'SUCCESS','amaayamato@gmail.com',NULL,'HelloWorld','<div style="background: #169BD5; color: #FFFFFF; width: 100%; height: 250px; display: flex; justify-content: center; align-items: center; padding: auto">
<div style="width: 50%; display: flex; justify-content: space-between; padding: auto">
<div>
<div>&nbsp;</div>

<ul>
	<li>TAGO CMS</li>
</ul>

<ul>
	<li>Email: test@test.com</li>
</ul>

<ul>
	<li>Tel: 070-0000-0000</li>
</ul>

<ul>
	<li>Address: qewrqwerq,qwrqre</li>
</ul>
&nbsp;

<ul>
	<li>Copyright @ 2023 TAGOCMS. All Right Reserved</li>
</ul>
</div>

<div style="height:150px; width:200px">
<div><img alt="footer logo" src="#atchFooterLogo" style="height:100px; width:200px" /></div>
&nbsp;

<div style="display: flex; justify-content: space-between; padding: auto"><svg fill="none" height="30" viewbox="0 0 30 30" width="30" xmlns="http://www.w3.org/2000/svg"> <path clip-rule="evenodd" d="M8.80448 0.184094C6.36266 0.294269 4.24622 0.891264 2.53724 2.59303C0.822292 4.30374 0.232712 6.42856 0.122263 8.84498C0.0536046 10.3532 -0.347871 21.7475 0.816324 24.7356C1.60141 26.7515 3.14766 28.3015 5.18202 29.0891C6.13128 29.4584 7.21491 29.7083 8.80448 29.7813C22.0957 30.3828 27.0226 30.0553 29.1003 24.7356C29.4689 23.7887 29.7227 22.706 29.7928 21.1204C30.4003 7.79506 29.6943 4.90672 27.3779 2.59303C25.5405 0.760239 23.3793 -0.487381 8.80448 0.184094ZM8.92684 27.1013C7.4716 27.0358 6.68205 26.7933 6.15518 26.5894C4.82979 26.0742 3.83425 25.0828 3.32231 23.7652C2.43573 21.4946 2.72977 10.7108 2.80888 8.96583C2.88649 7.25661 3.23276 5.69451 4.43875 4.48854C5.9313 2.99967 7.85967 2.26999 20.9897 2.86256C22.7032 2.93998 24.2689 3.28554 25.4778 4.48854C26.9704 5.97739 27.7107 7.9206 27.1077 21.0003C27.042 22.4519 26.7988 23.2396 26.5943 23.7652C25.2435 27.2267 22.136 27.7073 8.92684 27.1013ZM21.1345 7.03444C21.1345 8.02007 21.936 8.82155 22.9256 8.82155C23.9151 8.82155 24.7181 8.02007 24.7181 7.03444C24.7181 6.04882 23.9151 5.24806 22.9256 5.24806C21.936 5.24806 21.1345 6.04882 21.1345 7.03444ZM7.294 14.9819C7.294 19.2044 10.7254 22.6277 14.9583 22.6277C19.1912 22.6277 22.6226 19.2044 22.6226 14.9819C22.6226 10.7595 19.1912 7.33839 14.9583 7.33839C10.7254 7.33839 7.294 10.7595 7.294 14.9819ZM9.98359 14.9819C9.98359 12.2425 12.2105 10.0198 14.9583 10.0198C17.7061 10.0198 19.933 12.2425 19.933 14.9819C19.933 17.7229 17.7061 19.9463 14.9583 19.9463C12.2105 19.9463 9.98359 17.7229 9.98359 14.9819Z" fill="white" fill-rule="evenodd"></path> </svg><svg fill="none" height="30" viewbox="0 0 30 30" width="30" xmlns="http://www.w3.org/2000/svg"> <path d="M19.1007 16.4359C19.0917 16.794 18.7996 17.0801 18.4405 17.0801C18.4355 17.0801 18.4305 17.0801 18.4265 17.0801H16.1709C16.1668 17.0801 16.1618 17.0801 16.1568 17.0801C15.7977 17.0801 15.5057 16.793 15.4966 16.4359V11.6595C15.5057 11.2694 15.8227 10.9563 16.2149 10.9563C16.607 10.9563 16.9241 11.2694 16.9331 11.6585V15.7897H18.4275C18.4315 15.7897 18.4365 15.7897 18.4415 15.7897C18.8006 15.7897 19.0927 16.0768 19.1017 16.4339L19.1007 16.4359ZM11.7195 14.7064L12.4217 12.7108L13.1239 14.7064H11.7195ZM13.359 11.6525C13.233 11.2474 12.8609 10.9583 12.4217 10.9583C11.9826 10.9583 11.6115 11.2474 11.4864 11.6455L11.4844 11.6525L9.80294 16.0798C9.58988 16.743 9.77593 16.9891 9.96999 17.0781C10.101 17.1391 10.2541 17.1752 10.4151 17.1752C10.4161 17.1752 10.4161 17.1752 10.4171 17.1752C10.4381 17.1782 10.4631 17.1792 10.4881 17.1792C10.7112 17.1792 10.9043 17.0531 11.0003 16.8681L11.0023 16.8651L11.3504 15.9528H13.494L13.8422 16.8641C13.9402 17.0521 14.1332 17.1792 14.3563 17.1792C14.3813 17.1792 14.4063 17.1772 14.4303 17.1742H14.4273C14.5894 17.1742 14.7434 17.1381 14.8805 17.0751L14.8735 17.0781C15.0675 16.9891 15.2536 16.743 15.0395 16.0778L13.359 11.6525ZM23.7961 16.0298C23.8822 16.1448 23.9342 16.2909 23.9342 16.4479C23.9342 16.8361 23.6191 17.1511 23.231 17.1511C23.0049 17.1511 22.8038 17.0441 22.6748 16.8781L22.6738 16.8761L21.0243 14.6914L20.7802 14.9355V16.4699C20.7752 16.8541 20.4621 17.1641 20.077 17.1641C19.6919 17.1641 19.3788 16.8551 19.3738 16.4709V11.6605C19.3738 11.2724 19.6889 10.9573 20.077 10.9573C20.4651 10.9573 20.7802 11.2724 20.7802 11.6605V13.172L22.7418 11.2104C22.8399 11.1133 22.9759 11.0543 23.1249 11.0543C23.1279 11.0543 23.1299 11.0543 23.1329 11.0543C23.497 11.0643 23.7931 11.3474 23.8231 11.7055V11.7085C23.8241 11.7215 23.8251 11.7375 23.8251 11.7525C23.8251 11.9016 23.7651 12.0376 23.6681 12.1366L22.0656 13.7391L23.7961 16.0298ZM10.061 12.3347H8.96369V16.512C8.94568 16.8871 8.63759 17.1832 8.26048 17.1832C7.88336 17.1832 7.57527 16.8861 7.55727 16.513V16.511V12.3337H6.45994C6.07982 12.3337 5.77173 12.0256 5.77173 11.6455C5.77173 11.2654 6.07982 10.9573 6.45994 10.9573H10.06C10.4401 10.9573 10.7482 11.2654 10.7482 11.6455C10.7482 12.0256 10.4401 12.3337 10.06 12.3337L10.061 12.3347ZM14.9995 23.438C14.9965 23.438 14.9935 23.438 14.9895 23.438C14.2293 23.438 13.482 23.383 12.7518 23.277L12.8349 23.287C12.1316 23.7821 8.06842 26.637 7.68531 26.69C7.64829 26.704 7.60528 26.712 7.56027 26.712C7.50025 26.712 7.44223 26.697 7.39222 26.671L7.39422 26.672C7.26018 26.593 7.28519 26.3869 7.28519 26.3869C7.3252 26.1118 8.3385 22.6138 8.52556 21.9706C5.28158 20.5752 3.0109 17.4892 2.81384 13.8522L2.81284 13.8281C2.81284 8.52056 8.26948 4.21827 15.0005 4.21827C21.7315 4.21827 27.1882 8.52056 27.1882 13.8281C27.1882 19.1357 21.7305 23.438 14.9995 23.438ZM27.6563 0H2.3437C1.04931 0 0 1.04931 0 2.3437V27.6563C0 28.9507 1.04931 30 2.3437 30H27.6563C28.9507 30 30 28.9507 30 27.6563V2.3437C30 1.04931 28.9507 0 27.6563 0Z" fill="white"></path> </svg><svg fill="none" height="30" viewbox="0 0 30 30" width="30" xmlns="http://www.w3.org/2000/svg"> <path clip-rule="evenodd" d="M0 6C0 2.68629 2.68629 0 6 0H24C27.3137 0 30 2.68629 30 6V24C30 27.3137 27.3137 30 24 30H6C2.68629 30 0 27.3137 0 24V6ZM6 3C4.34314 3 3 4.34314 3 6V24C3 25.6569 4.34314 27 6 27H15V16.5H13.5C12.6715 16.5 12 15.8285 12 15C12 14.1715 12.6715 13.5 13.5 13.5H15V11.25C15 8.3505 17.3505 6 20.25 6H21.15C21.9785 6 22.65 6.67158 22.65 7.5C22.65 8.32842 21.9785 9 21.15 9H20.25C19.0074 9 18 10.0074 18 11.25V13.5H21.15C21.9785 13.5 22.65 14.1715 22.65 15C22.65 15.8285 21.9785 16.5 21.15 16.5H18V27H24C25.6569 27 27 25.6569 27 24V6C27 4.34314 25.6569 3 24 3H6Z" fill="white" fill-rule="evenodd"></path> </svg><svg fill="none" height="30" viewbox="0 0 30 23" width="30" xmlns="http://www.w3.org/2000/svg"> <path d="M28.8018 19.2934C28.2534 20.5263 26.8387 21.6429 25.5102 21.8894C25.3742 21.9147 22.1276 22.5007 15.0089 22.5007H14.9902C7.87243 22.5007 4.62296 21.9147 4.48795 21.8904C3.15947 21.6429 1.7438 20.5263 1.19441 19.2925C1.14566 19.1828 0 16.5446 0 11.2504C0 5.95612 1.14566 3.31698 1.19441 3.20729C1.7438 1.9735 3.15947 0.857839 4.48795 0.611269C4.62296 0.585956 7.87243 0 14.9902 0C22.1276 0 25.3742 0.585956 25.5092 0.610332C26.8386 0.857839 28.2534 1.9735 28.8028 3.20635C28.8515 3.31698 30 5.95612 30 11.2504C30 16.5446 28.8515 19.1828 28.8018 19.2934ZM27.0871 3.96575C26.7946 3.30854 25.8777 2.58664 25.167 2.45445C25.137 2.44883 21.9241 1.87506 15.0089 1.87506C8.07588 1.87506 4.86015 2.44883 4.82921 2.45445C4.11857 2.58664 3.2026 3.30854 2.90915 3.9695C2.89978 3.98919 1.876 6.40239 1.876 11.2504C1.876 16.0974 2.89978 18.5106 2.91103 18.535C3.2026 19.1922 4.11857 19.9141 4.83015 20.0463C4.86015 20.0519 8.07588 20.6256 14.9902 20.6256H15.0089C21.9241 20.6256 25.137 20.0519 25.168 20.0463C25.8786 19.9141 26.7946 19.1922 27.088 18.5312C27.0974 18.5106 28.1231 16.0974 28.1231 11.2504C28.1231 6.40332 27.0974 3.98919 27.0871 3.96575ZM12.6941 16.7311C12.5423 16.8277 12.3679 16.8755 12.1944 16.8755C12.0388 16.8755 11.8832 16.8371 11.7416 16.7583C11.4425 16.5933 11.2569 16.2793 11.2569 15.938V6.56271C11.2569 6.22238 11.4407 5.90925 11.7379 5.74424C12.0351 5.5783 12.3998 5.5858 12.6876 5.76487L20.2056 10.4113C20.4803 10.581 20.6491 10.881 20.65 11.2044C20.651 11.5279 20.486 11.8297 20.2122 12.0013L12.6941 16.7311ZM13.1329 8.24463V14.2401L17.9406 11.2157L13.1329 8.24463Z" fill="white"></path> </svg></div>
</div>
</div>
</div>
','20230504112340','20230504112340','N'),
	 (2,NULL,NULL,NULL,NULL,'SUCCESS','amaayamato@gmail.com',NULL,'HelloWorld','<div style="background: #169BD5; color: #FFFFFF; width: 100%; height: 250px; display: flex; justify-content: center; align-items: center; padding: auto">
<div style="width: 50%; display: flex; justify-content: space-between; padding: auto">
<div>
<div>&nbsp;</div>

<ul>
	<li>TAGO CMS</li>
</ul>

<ul>
	<li>Email: test@test.com</li>
</ul>

<ul>
	<li>Tel: 070-0000-0000</li>
</ul>

<ul>
	<li>Address: qewrqwerq,qwrqre</li>
</ul>
&nbsp;

<ul>
	<li>Copyright @ 2023 TAGOCMS. All Right Reserved</li>
</ul>
</div>

<div style="height:150px; width:200px">
<div><img alt="footer logo" src="#atchFooterLogo" style="height:100px; width:200px" /></div>
&nbsp;

<div style="display: flex; justify-content: space-between; padding: auto"><svg fill="none" height="30" viewbox="0 0 30 30" width="30" xmlns="http://www.w3.org/2000/svg"> <path clip-rule="evenodd" d="M8.80448 0.184094C6.36266 0.294269 4.24622 0.891264 2.53724 2.59303C0.822292 4.30374 0.232712 6.42856 0.122263 8.84498C0.0536046 10.3532 -0.347871 21.7475 0.816324 24.7356C1.60141 26.7515 3.14766 28.3015 5.18202 29.0891C6.13128 29.4584 7.21491 29.7083 8.80448 29.7813C22.0957 30.3828 27.0226 30.0553 29.1003 24.7356C29.4689 23.7887 29.7227 22.706 29.7928 21.1204C30.4003 7.79506 29.6943 4.90672 27.3779 2.59303C25.5405 0.760239 23.3793 -0.487381 8.80448 0.184094ZM8.92684 27.1013C7.4716 27.0358 6.68205 26.7933 6.15518 26.5894C4.82979 26.0742 3.83425 25.0828 3.32231 23.7652C2.43573 21.4946 2.72977 10.7108 2.80888 8.96583C2.88649 7.25661 3.23276 5.69451 4.43875 4.48854C5.9313 2.99967 7.85967 2.26999 20.9897 2.86256C22.7032 2.93998 24.2689 3.28554 25.4778 4.48854C26.9704 5.97739 27.7107 7.9206 27.1077 21.0003C27.042 22.4519 26.7988 23.2396 26.5943 23.7652C25.2435 27.2267 22.136 27.7073 8.92684 27.1013ZM21.1345 7.03444C21.1345 8.02007 21.936 8.82155 22.9256 8.82155C23.9151 8.82155 24.7181 8.02007 24.7181 7.03444C24.7181 6.04882 23.9151 5.24806 22.9256 5.24806C21.936 5.24806 21.1345 6.04882 21.1345 7.03444ZM7.294 14.9819C7.294 19.2044 10.7254 22.6277 14.9583 22.6277C19.1912 22.6277 22.6226 19.2044 22.6226 14.9819C22.6226 10.7595 19.1912 7.33839 14.9583 7.33839C10.7254 7.33839 7.294 10.7595 7.294 14.9819ZM9.98359 14.9819C9.98359 12.2425 12.2105 10.0198 14.9583 10.0198C17.7061 10.0198 19.933 12.2425 19.933 14.9819C19.933 17.7229 17.7061 19.9463 14.9583 19.9463C12.2105 19.9463 9.98359 17.7229 9.98359 14.9819Z" fill="white" fill-rule="evenodd"></path> </svg><svg fill="none" height="30" viewbox="0 0 30 30" width="30" xmlns="http://www.w3.org/2000/svg"> <path d="M19.1007 16.4359C19.0917 16.794 18.7996 17.0801 18.4405 17.0801C18.4355 17.0801 18.4305 17.0801 18.4265 17.0801H16.1709C16.1668 17.0801 16.1618 17.0801 16.1568 17.0801C15.7977 17.0801 15.5057 16.793 15.4966 16.4359V11.6595C15.5057 11.2694 15.8227 10.9563 16.2149 10.9563C16.607 10.9563 16.9241 11.2694 16.9331 11.6585V15.7897H18.4275C18.4315 15.7897 18.4365 15.7897 18.4415 15.7897C18.8006 15.7897 19.0927 16.0768 19.1017 16.4339L19.1007 16.4359ZM11.7195 14.7064L12.4217 12.7108L13.1239 14.7064H11.7195ZM13.359 11.6525C13.233 11.2474 12.8609 10.9583 12.4217 10.9583C11.9826 10.9583 11.6115 11.2474 11.4864 11.6455L11.4844 11.6525L9.80294 16.0798C9.58988 16.743 9.77593 16.9891 9.96999 17.0781C10.101 17.1391 10.2541 17.1752 10.4151 17.1752C10.4161 17.1752 10.4161 17.1752 10.4171 17.1752C10.4381 17.1782 10.4631 17.1792 10.4881 17.1792C10.7112 17.1792 10.9043 17.0531 11.0003 16.8681L11.0023 16.8651L11.3504 15.9528H13.494L13.8422 16.8641C13.9402 17.0521 14.1332 17.1792 14.3563 17.1792C14.3813 17.1792 14.4063 17.1772 14.4303 17.1742H14.4273C14.5894 17.1742 14.7434 17.1381 14.8805 17.0751L14.8735 17.0781C15.0675 16.9891 15.2536 16.743 15.0395 16.0778L13.359 11.6525ZM23.7961 16.0298C23.8822 16.1448 23.9342 16.2909 23.9342 16.4479C23.9342 16.8361 23.6191 17.1511 23.231 17.1511C23.0049 17.1511 22.8038 17.0441 22.6748 16.8781L22.6738 16.8761L21.0243 14.6914L20.7802 14.9355V16.4699C20.7752 16.8541 20.4621 17.1641 20.077 17.1641C19.6919 17.1641 19.3788 16.8551 19.3738 16.4709V11.6605C19.3738 11.2724 19.6889 10.9573 20.077 10.9573C20.4651 10.9573 20.7802 11.2724 20.7802 11.6605V13.172L22.7418 11.2104C22.8399 11.1133 22.9759 11.0543 23.1249 11.0543C23.1279 11.0543 23.1299 11.0543 23.1329 11.0543C23.497 11.0643 23.7931 11.3474 23.8231 11.7055V11.7085C23.8241 11.7215 23.8251 11.7375 23.8251 11.7525C23.8251 11.9016 23.7651 12.0376 23.6681 12.1366L22.0656 13.7391L23.7961 16.0298ZM10.061 12.3347H8.96369V16.512C8.94568 16.8871 8.63759 17.1832 8.26048 17.1832C7.88336 17.1832 7.57527 16.8861 7.55727 16.513V16.511V12.3337H6.45994C6.07982 12.3337 5.77173 12.0256 5.77173 11.6455C5.77173 11.2654 6.07982 10.9573 6.45994 10.9573H10.06C10.4401 10.9573 10.7482 11.2654 10.7482 11.6455C10.7482 12.0256 10.4401 12.3337 10.06 12.3337L10.061 12.3347ZM14.9995 23.438C14.9965 23.438 14.9935 23.438 14.9895 23.438C14.2293 23.438 13.482 23.383 12.7518 23.277L12.8349 23.287C12.1316 23.7821 8.06842 26.637 7.68531 26.69C7.64829 26.704 7.60528 26.712 7.56027 26.712C7.50025 26.712 7.44223 26.697 7.39222 26.671L7.39422 26.672C7.26018 26.593 7.28519 26.3869 7.28519 26.3869C7.3252 26.1118 8.3385 22.6138 8.52556 21.9706C5.28158 20.5752 3.0109 17.4892 2.81384 13.8522L2.81284 13.8281C2.81284 8.52056 8.26948 4.21827 15.0005 4.21827C21.7315 4.21827 27.1882 8.52056 27.1882 13.8281C27.1882 19.1357 21.7305 23.438 14.9995 23.438ZM27.6563 0H2.3437C1.04931 0 0 1.04931 0 2.3437V27.6563C0 28.9507 1.04931 30 2.3437 30H27.6563C28.9507 30 30 28.9507 30 27.6563V2.3437C30 1.04931 28.9507 0 27.6563 0Z" fill="white"></path> </svg><svg fill="none" height="30" viewbox="0 0 30 30" width="30" xmlns="http://www.w3.org/2000/svg"> <path clip-rule="evenodd" d="M0 6C0 2.68629 2.68629 0 6 0H24C27.3137 0 30 2.68629 30 6V24C30 27.3137 27.3137 30 24 30H6C2.68629 30 0 27.3137 0 24V6ZM6 3C4.34314 3 3 4.34314 3 6V24C3 25.6569 4.34314 27 6 27H15V16.5H13.5C12.6715 16.5 12 15.8285 12 15C12 14.1715 12.6715 13.5 13.5 13.5H15V11.25C15 8.3505 17.3505 6 20.25 6H21.15C21.9785 6 22.65 6.67158 22.65 7.5C22.65 8.32842 21.9785 9 21.15 9H20.25C19.0074 9 18 10.0074 18 11.25V13.5H21.15C21.9785 13.5 22.65 14.1715 22.65 15C22.65 15.8285 21.9785 16.5 21.15 16.5H18V27H24C25.6569 27 27 25.6569 27 24V6C27 4.34314 25.6569 3 24 3H6Z" fill="white" fill-rule="evenodd"></path> </svg><svg fill="none" height="30" viewbox="0 0 30 23" width="30" xmlns="http://www.w3.org/2000/svg"> <path d="M28.8018 19.2934C28.2534 20.5263 26.8387 21.6429 25.5102 21.8894C25.3742 21.9147 22.1276 22.5007 15.0089 22.5007H14.9902C7.87243 22.5007 4.62296 21.9147 4.48795 21.8904C3.15947 21.6429 1.7438 20.5263 1.19441 19.2925C1.14566 19.1828 0 16.5446 0 11.2504C0 5.95612 1.14566 3.31698 1.19441 3.20729C1.7438 1.9735 3.15947 0.857839 4.48795 0.611269C4.62296 0.585956 7.87243 0 14.9902 0C22.1276 0 25.3742 0.585956 25.5092 0.610332C26.8386 0.857839 28.2534 1.9735 28.8028 3.20635C28.8515 3.31698 30 5.95612 30 11.2504C30 16.5446 28.8515 19.1828 28.8018 19.2934ZM27.0871 3.96575C26.7946 3.30854 25.8777 2.58664 25.167 2.45445C25.137 2.44883 21.9241 1.87506 15.0089 1.87506C8.07588 1.87506 4.86015 2.44883 4.82921 2.45445C4.11857 2.58664 3.2026 3.30854 2.90915 3.9695C2.89978 3.98919 1.876 6.40239 1.876 11.2504C1.876 16.0974 2.89978 18.5106 2.91103 18.535C3.2026 19.1922 4.11857 19.9141 4.83015 20.0463C4.86015 20.0519 8.07588 20.6256 14.9902 20.6256H15.0089C21.9241 20.6256 25.137 20.0519 25.168 20.0463C25.8786 19.9141 26.7946 19.1922 27.088 18.5312C27.0974 18.5106 28.1231 16.0974 28.1231 11.2504C28.1231 6.40332 27.0974 3.98919 27.0871 3.96575ZM12.6941 16.7311C12.5423 16.8277 12.3679 16.8755 12.1944 16.8755C12.0388 16.8755 11.8832 16.8371 11.7416 16.7583C11.4425 16.5933 11.2569 16.2793 11.2569 15.938V6.56271C11.2569 6.22238 11.4407 5.90925 11.7379 5.74424C12.0351 5.5783 12.3998 5.5858 12.6876 5.76487L20.2056 10.4113C20.4803 10.581 20.6491 10.881 20.65 11.2044C20.651 11.5279 20.486 11.8297 20.2122 12.0013L12.6941 16.7311ZM13.1329 8.24463V14.2401L17.9406 11.2157L13.1329 8.24463Z" fill="white"></path> </svg></div>
</div>
</div>
</div>
','20230504112734','20230504112734','N'),
	 (2,NULL,NULL,NULL,NULL,'SUCCESS','amaayamato@gmail.com',NULL,'HelloWorld','<div style="background: #169BD5; color: #FFFFFF; width: 100%; height: 250px; display: flex; justify-content: center; align-items: center; padding: auto">
<div style="width: 50%; display: flex; justify-content: space-between; padding: auto">
<div>
<div>&nbsp;</div>

<ul>
	<li>TAGO CMS</li>
</ul>

<ul>
	<li>Email: test@test.com</li>
</ul>

<ul>
	<li>Tel: 070-0000-0000</li>
</ul>

<ul>
	<li>Address: qewrqwerq,qwrqre</li>
</ul>
&nbsp;

<ul>
	<li>Copyright @ 2023 TAGOCMS. All Right Reserved</li>
</ul>
</div>

<div style="height:150px; width:200px">
<div><img alt="footer logo" src="#atchFooterLogo" style="height:100px; width:200px" /></div>
&nbsp;

<div style="display: flex; justify-content: space-between; padding: auto"><svg fill="none" height="30" viewbox="0 0 30 30" width="30" xmlns="http://www.w3.org/2000/svg"> <path clip-rule="evenodd" d="M8.80448 0.184094C6.36266 0.294269 4.24622 0.891264 2.53724 2.59303C0.822292 4.30374 0.232712 6.42856 0.122263 8.84498C0.0536046 10.3532 -0.347871 21.7475 0.816324 24.7356C1.60141 26.7515 3.14766 28.3015 5.18202 29.0891C6.13128 29.4584 7.21491 29.7083 8.80448 29.7813C22.0957 30.3828 27.0226 30.0553 29.1003 24.7356C29.4689 23.7887 29.7227 22.706 29.7928 21.1204C30.4003 7.79506 29.6943 4.90672 27.3779 2.59303C25.5405 0.760239 23.3793 -0.487381 8.80448 0.184094ZM8.92684 27.1013C7.4716 27.0358 6.68205 26.7933 6.15518 26.5894C4.82979 26.0742 3.83425 25.0828 3.32231 23.7652C2.43573 21.4946 2.72977 10.7108 2.80888 8.96583C2.88649 7.25661 3.23276 5.69451 4.43875 4.48854C5.9313 2.99967 7.85967 2.26999 20.9897 2.86256C22.7032 2.93998 24.2689 3.28554 25.4778 4.48854C26.9704 5.97739 27.7107 7.9206 27.1077 21.0003C27.042 22.4519 26.7988 23.2396 26.5943 23.7652C25.2435 27.2267 22.136 27.7073 8.92684 27.1013ZM21.1345 7.03444C21.1345 8.02007 21.936 8.82155 22.9256 8.82155C23.9151 8.82155 24.7181 8.02007 24.7181 7.03444C24.7181 6.04882 23.9151 5.24806 22.9256 5.24806C21.936 5.24806 21.1345 6.04882 21.1345 7.03444ZM7.294 14.9819C7.294 19.2044 10.7254 22.6277 14.9583 22.6277C19.1912 22.6277 22.6226 19.2044 22.6226 14.9819C22.6226 10.7595 19.1912 7.33839 14.9583 7.33839C10.7254 7.33839 7.294 10.7595 7.294 14.9819ZM9.98359 14.9819C9.98359 12.2425 12.2105 10.0198 14.9583 10.0198C17.7061 10.0198 19.933 12.2425 19.933 14.9819C19.933 17.7229 17.7061 19.9463 14.9583 19.9463C12.2105 19.9463 9.98359 17.7229 9.98359 14.9819Z" fill="white" fill-rule="evenodd"></path> </svg><svg fill="none" height="30" viewbox="0 0 30 30" width="30" xmlns="http://www.w3.org/2000/svg"> <path d="M19.1007 16.4359C19.0917 16.794 18.7996 17.0801 18.4405 17.0801C18.4355 17.0801 18.4305 17.0801 18.4265 17.0801H16.1709C16.1668 17.0801 16.1618 17.0801 16.1568 17.0801C15.7977 17.0801 15.5057 16.793 15.4966 16.4359V11.6595C15.5057 11.2694 15.8227 10.9563 16.2149 10.9563C16.607 10.9563 16.9241 11.2694 16.9331 11.6585V15.7897H18.4275C18.4315 15.7897 18.4365 15.7897 18.4415 15.7897C18.8006 15.7897 19.0927 16.0768 19.1017 16.4339L19.1007 16.4359ZM11.7195 14.7064L12.4217 12.7108L13.1239 14.7064H11.7195ZM13.359 11.6525C13.233 11.2474 12.8609 10.9583 12.4217 10.9583C11.9826 10.9583 11.6115 11.2474 11.4864 11.6455L11.4844 11.6525L9.80294 16.0798C9.58988 16.743 9.77593 16.9891 9.96999 17.0781C10.101 17.1391 10.2541 17.1752 10.4151 17.1752C10.4161 17.1752 10.4161 17.1752 10.4171 17.1752C10.4381 17.1782 10.4631 17.1792 10.4881 17.1792C10.7112 17.1792 10.9043 17.0531 11.0003 16.8681L11.0023 16.8651L11.3504 15.9528H13.494L13.8422 16.8641C13.9402 17.0521 14.1332 17.1792 14.3563 17.1792C14.3813 17.1792 14.4063 17.1772 14.4303 17.1742H14.4273C14.5894 17.1742 14.7434 17.1381 14.8805 17.0751L14.8735 17.0781C15.0675 16.9891 15.2536 16.743 15.0395 16.0778L13.359 11.6525ZM23.7961 16.0298C23.8822 16.1448 23.9342 16.2909 23.9342 16.4479C23.9342 16.8361 23.6191 17.1511 23.231 17.1511C23.0049 17.1511 22.8038 17.0441 22.6748 16.8781L22.6738 16.8761L21.0243 14.6914L20.7802 14.9355V16.4699C20.7752 16.8541 20.4621 17.1641 20.077 17.1641C19.6919 17.1641 19.3788 16.8551 19.3738 16.4709V11.6605C19.3738 11.2724 19.6889 10.9573 20.077 10.9573C20.4651 10.9573 20.7802 11.2724 20.7802 11.6605V13.172L22.7418 11.2104C22.8399 11.1133 22.9759 11.0543 23.1249 11.0543C23.1279 11.0543 23.1299 11.0543 23.1329 11.0543C23.497 11.0643 23.7931 11.3474 23.8231 11.7055V11.7085C23.8241 11.7215 23.8251 11.7375 23.8251 11.7525C23.8251 11.9016 23.7651 12.0376 23.6681 12.1366L22.0656 13.7391L23.7961 16.0298ZM10.061 12.3347H8.96369V16.512C8.94568 16.8871 8.63759 17.1832 8.26048 17.1832C7.88336 17.1832 7.57527 16.8861 7.55727 16.513V16.511V12.3337H6.45994C6.07982 12.3337 5.77173 12.0256 5.77173 11.6455C5.77173 11.2654 6.07982 10.9573 6.45994 10.9573H10.06C10.4401 10.9573 10.7482 11.2654 10.7482 11.6455C10.7482 12.0256 10.4401 12.3337 10.06 12.3337L10.061 12.3347ZM14.9995 23.438C14.9965 23.438 14.9935 23.438 14.9895 23.438C14.2293 23.438 13.482 23.383 12.7518 23.277L12.8349 23.287C12.1316 23.7821 8.06842 26.637 7.68531 26.69C7.64829 26.704 7.60528 26.712 7.56027 26.712C7.50025 26.712 7.44223 26.697 7.39222 26.671L7.39422 26.672C7.26018 26.593 7.28519 26.3869 7.28519 26.3869C7.3252 26.1118 8.3385 22.6138 8.52556 21.9706C5.28158 20.5752 3.0109 17.4892 2.81384 13.8522L2.81284 13.8281C2.81284 8.52056 8.26948 4.21827 15.0005 4.21827C21.7315 4.21827 27.1882 8.52056 27.1882 13.8281C27.1882 19.1357 21.7305 23.438 14.9995 23.438ZM27.6563 0H2.3437C1.04931 0 0 1.04931 0 2.3437V27.6563C0 28.9507 1.04931 30 2.3437 30H27.6563C28.9507 30 30 28.9507 30 27.6563V2.3437C30 1.04931 28.9507 0 27.6563 0Z" fill="white"></path> </svg><svg fill="none" height="30" viewbox="0 0 30 30" width="30" xmlns="http://www.w3.org/2000/svg"> <path clip-rule="evenodd" d="M0 6C0 2.68629 2.68629 0 6 0H24C27.3137 0 30 2.68629 30 6V24C30 27.3137 27.3137 30 24 30H6C2.68629 30 0 27.3137 0 24V6ZM6 3C4.34314 3 3 4.34314 3 6V24C3 25.6569 4.34314 27 6 27H15V16.5H13.5C12.6715 16.5 12 15.8285 12 15C12 14.1715 12.6715 13.5 13.5 13.5H15V11.25C15 8.3505 17.3505 6 20.25 6H21.15C21.9785 6 22.65 6.67158 22.65 7.5C22.65 8.32842 21.9785 9 21.15 9H20.25C19.0074 9 18 10.0074 18 11.25V13.5H21.15C21.9785 13.5 22.65 14.1715 22.65 15C22.65 15.8285 21.9785 16.5 21.15 16.5H18V27H24C25.6569 27 27 25.6569 27 24V6C27 4.34314 25.6569 3 24 3H6Z" fill="white" fill-rule="evenodd"></path> </svg><svg fill="none" height="30" viewbox="0 0 30 23" width="30" xmlns="http://www.w3.org/2000/svg"> <path d="M28.8018 19.2934C28.2534 20.5263 26.8387 21.6429 25.5102 21.8894C25.3742 21.9147 22.1276 22.5007 15.0089 22.5007H14.9902C7.87243 22.5007 4.62296 21.9147 4.48795 21.8904C3.15947 21.6429 1.7438 20.5263 1.19441 19.2925C1.14566 19.1828 0 16.5446 0 11.2504C0 5.95612 1.14566 3.31698 1.19441 3.20729C1.7438 1.9735 3.15947 0.857839 4.48795 0.611269C4.62296 0.585956 7.87243 0 14.9902 0C22.1276 0 25.3742 0.585956 25.5092 0.610332C26.8386 0.857839 28.2534 1.9735 28.8028 3.20635C28.8515 3.31698 30 5.95612 30 11.2504C30 16.5446 28.8515 19.1828 28.8018 19.2934ZM27.0871 3.96575C26.7946 3.30854 25.8777 2.58664 25.167 2.45445C25.137 2.44883 21.9241 1.87506 15.0089 1.87506C8.07588 1.87506 4.86015 2.44883 4.82921 2.45445C4.11857 2.58664 3.2026 3.30854 2.90915 3.9695C2.89978 3.98919 1.876 6.40239 1.876 11.2504C1.876 16.0974 2.89978 18.5106 2.91103 18.535C3.2026 19.1922 4.11857 19.9141 4.83015 20.0463C4.86015 20.0519 8.07588 20.6256 14.9902 20.6256H15.0089C21.9241 20.6256 25.137 20.0519 25.168 20.0463C25.8786 19.9141 26.7946 19.1922 27.088 18.5312C27.0974 18.5106 28.1231 16.0974 28.1231 11.2504C28.1231 6.40332 27.0974 3.98919 27.0871 3.96575ZM12.6941 16.7311C12.5423 16.8277 12.3679 16.8755 12.1944 16.8755C12.0388 16.8755 11.8832 16.8371 11.7416 16.7583C11.4425 16.5933 11.2569 16.2793 11.2569 15.938V6.56271C11.2569 6.22238 11.4407 5.90925 11.7379 5.74424C12.0351 5.5783 12.3998 5.5858 12.6876 5.76487L20.2056 10.4113C20.4803 10.581 20.6491 10.881 20.65 11.2044C20.651 11.5279 20.486 11.8297 20.2122 12.0013L12.6941 16.7311ZM13.1329 8.24463V14.2401L17.9406 11.2157L13.1329 8.24463Z" fill="white"></path> </svg></div>
</div>
</div>
</div>
','20230504112859','20230504112859','N'),
	 (2,NULL,NULL,NULL,NULL,'SUCCESS','amaayamato@gmail.com',NULL,'HelloWorld','<div style="background: #169BD5; color: #FFFFFF; width: 100%; height: 250px; display: flex; justify-content: center; align-items: center; padding: auto">
<div style="width: 50%; display: flex; justify-content: space-between; padding: auto">
<div>
<div>&nbsp;</div>

<ul>
	<li>TAGO CMS</li>
</ul>

<ul>
	<li>Email: test@test.com</li>
</ul>

<ul>
	<li>Tel: 070-0000-0000</li>
</ul>

<ul>
	<li>Address: qewrqwerq,qwrqre</li>
</ul>
&nbsp;

<ul>
	<li>Copyright @ 2023 TAGOCMS. All Right Reserved</li>
</ul>
</div>

<div style="height:150px; width:200px">
<div><img alt="footer logo" src="#atchFooterLogo" style="height:100px; width:200px" /></div>
&nbsp;

<div style="display: flex; justify-content: space-between; padding: auto"><svg fill="none" height="30" viewbox="0 0 30 30" width="30" xmlns="http://www.w3.org/2000/svg"> <path clip-rule="evenodd" d="M8.80448 0.184094C6.36266 0.294269 4.24622 0.891264 2.53724 2.59303C0.822292 4.30374 0.232712 6.42856 0.122263 8.84498C0.0536046 10.3532 -0.347871 21.7475 0.816324 24.7356C1.60141 26.7515 3.14766 28.3015 5.18202 29.0891C6.13128 29.4584 7.21491 29.7083 8.80448 29.7813C22.0957 30.3828 27.0226 30.0553 29.1003 24.7356C29.4689 23.7887 29.7227 22.706 29.7928 21.1204C30.4003 7.79506 29.6943 4.90672 27.3779 2.59303C25.5405 0.760239 23.3793 -0.487381 8.80448 0.184094ZM8.92684 27.1013C7.4716 27.0358 6.68205 26.7933 6.15518 26.5894C4.82979 26.0742 3.83425 25.0828 3.32231 23.7652C2.43573 21.4946 2.72977 10.7108 2.80888 8.96583C2.88649 7.25661 3.23276 5.69451 4.43875 4.48854C5.9313 2.99967 7.85967 2.26999 20.9897 2.86256C22.7032 2.93998 24.2689 3.28554 25.4778 4.48854C26.9704 5.97739 27.7107 7.9206 27.1077 21.0003C27.042 22.4519 26.7988 23.2396 26.5943 23.7652C25.2435 27.2267 22.136 27.7073 8.92684 27.1013ZM21.1345 7.03444C21.1345 8.02007 21.936 8.82155 22.9256 8.82155C23.9151 8.82155 24.7181 8.02007 24.7181 7.03444C24.7181 6.04882 23.9151 5.24806 22.9256 5.24806C21.936 5.24806 21.1345 6.04882 21.1345 7.03444ZM7.294 14.9819C7.294 19.2044 10.7254 22.6277 14.9583 22.6277C19.1912 22.6277 22.6226 19.2044 22.6226 14.9819C22.6226 10.7595 19.1912 7.33839 14.9583 7.33839C10.7254 7.33839 7.294 10.7595 7.294 14.9819ZM9.98359 14.9819C9.98359 12.2425 12.2105 10.0198 14.9583 10.0198C17.7061 10.0198 19.933 12.2425 19.933 14.9819C19.933 17.7229 17.7061 19.9463 14.9583 19.9463C12.2105 19.9463 9.98359 17.7229 9.98359 14.9819Z" fill="white" fill-rule="evenodd"></path> </svg><svg fill="none" height="30" viewbox="0 0 30 30" width="30" xmlns="http://www.w3.org/2000/svg"> <path d="M19.1007 16.4359C19.0917 16.794 18.7996 17.0801 18.4405 17.0801C18.4355 17.0801 18.4305 17.0801 18.4265 17.0801H16.1709C16.1668 17.0801 16.1618 17.0801 16.1568 17.0801C15.7977 17.0801 15.5057 16.793 15.4966 16.4359V11.6595C15.5057 11.2694 15.8227 10.9563 16.2149 10.9563C16.607 10.9563 16.9241 11.2694 16.9331 11.6585V15.7897H18.4275C18.4315 15.7897 18.4365 15.7897 18.4415 15.7897C18.8006 15.7897 19.0927 16.0768 19.1017 16.4339L19.1007 16.4359ZM11.7195 14.7064L12.4217 12.7108L13.1239 14.7064H11.7195ZM13.359 11.6525C13.233 11.2474 12.8609 10.9583 12.4217 10.9583C11.9826 10.9583 11.6115 11.2474 11.4864 11.6455L11.4844 11.6525L9.80294 16.0798C9.58988 16.743 9.77593 16.9891 9.96999 17.0781C10.101 17.1391 10.2541 17.1752 10.4151 17.1752C10.4161 17.1752 10.4161 17.1752 10.4171 17.1752C10.4381 17.1782 10.4631 17.1792 10.4881 17.1792C10.7112 17.1792 10.9043 17.0531 11.0003 16.8681L11.0023 16.8651L11.3504 15.9528H13.494L13.8422 16.8641C13.9402 17.0521 14.1332 17.1792 14.3563 17.1792C14.3813 17.1792 14.4063 17.1772 14.4303 17.1742H14.4273C14.5894 17.1742 14.7434 17.1381 14.8805 17.0751L14.8735 17.0781C15.0675 16.9891 15.2536 16.743 15.0395 16.0778L13.359 11.6525ZM23.7961 16.0298C23.8822 16.1448 23.9342 16.2909 23.9342 16.4479C23.9342 16.8361 23.6191 17.1511 23.231 17.1511C23.0049 17.1511 22.8038 17.0441 22.6748 16.8781L22.6738 16.8761L21.0243 14.6914L20.7802 14.9355V16.4699C20.7752 16.8541 20.4621 17.1641 20.077 17.1641C19.6919 17.1641 19.3788 16.8551 19.3738 16.4709V11.6605C19.3738 11.2724 19.6889 10.9573 20.077 10.9573C20.4651 10.9573 20.7802 11.2724 20.7802 11.6605V13.172L22.7418 11.2104C22.8399 11.1133 22.9759 11.0543 23.1249 11.0543C23.1279 11.0543 23.1299 11.0543 23.1329 11.0543C23.497 11.0643 23.7931 11.3474 23.8231 11.7055V11.7085C23.8241 11.7215 23.8251 11.7375 23.8251 11.7525C23.8251 11.9016 23.7651 12.0376 23.6681 12.1366L22.0656 13.7391L23.7961 16.0298ZM10.061 12.3347H8.96369V16.512C8.94568 16.8871 8.63759 17.1832 8.26048 17.1832C7.88336 17.1832 7.57527 16.8861 7.55727 16.513V16.511V12.3337H6.45994C6.07982 12.3337 5.77173 12.0256 5.77173 11.6455C5.77173 11.2654 6.07982 10.9573 6.45994 10.9573H10.06C10.4401 10.9573 10.7482 11.2654 10.7482 11.6455C10.7482 12.0256 10.4401 12.3337 10.06 12.3337L10.061 12.3347ZM14.9995 23.438C14.9965 23.438 14.9935 23.438 14.9895 23.438C14.2293 23.438 13.482 23.383 12.7518 23.277L12.8349 23.287C12.1316 23.7821 8.06842 26.637 7.68531 26.69C7.64829 26.704 7.60528 26.712 7.56027 26.712C7.50025 26.712 7.44223 26.697 7.39222 26.671L7.39422 26.672C7.26018 26.593 7.28519 26.3869 7.28519 26.3869C7.3252 26.1118 8.3385 22.6138 8.52556 21.9706C5.28158 20.5752 3.0109 17.4892 2.81384 13.8522L2.81284 13.8281C2.81284 8.52056 8.26948 4.21827 15.0005 4.21827C21.7315 4.21827 27.1882 8.52056 27.1882 13.8281C27.1882 19.1357 21.7305 23.438 14.9995 23.438ZM27.6563 0H2.3437C1.04931 0 0 1.04931 0 2.3437V27.6563C0 28.9507 1.04931 30 2.3437 30H27.6563C28.9507 30 30 28.9507 30 27.6563V2.3437C30 1.04931 28.9507 0 27.6563 0Z" fill="white"></path> </svg><svg fill="none" height="30" viewbox="0 0 30 30" width="30" xmlns="http://www.w3.org/2000/svg"> <path clip-rule="evenodd" d="M0 6C0 2.68629 2.68629 0 6 0H24C27.3137 0 30 2.68629 30 6V24C30 27.3137 27.3137 30 24 30H6C2.68629 30 0 27.3137 0 24V6ZM6 3C4.34314 3 3 4.34314 3 6V24C3 25.6569 4.34314 27 6 27H15V16.5H13.5C12.6715 16.5 12 15.8285 12 15C12 14.1715 12.6715 13.5 13.5 13.5H15V11.25C15 8.3505 17.3505 6 20.25 6H21.15C21.9785 6 22.65 6.67158 22.65 7.5C22.65 8.32842 21.9785 9 21.15 9H20.25C19.0074 9 18 10.0074 18 11.25V13.5H21.15C21.9785 13.5 22.65 14.1715 22.65 15C22.65 15.8285 21.9785 16.5 21.15 16.5H18V27H24C25.6569 27 27 25.6569 27 24V6C27 4.34314 25.6569 3 24 3H6Z" fill="white" fill-rule="evenodd"></path> </svg><svg fill="none" height="30" viewbox="0 0 30 23" width="30" xmlns="http://www.w3.org/2000/svg"> <path d="M28.8018 19.2934C28.2534 20.5263 26.8387 21.6429 25.5102 21.8894C25.3742 21.9147 22.1276 22.5007 15.0089 22.5007H14.9902C7.87243 22.5007 4.62296 21.9147 4.48795 21.8904C3.15947 21.6429 1.7438 20.5263 1.19441 19.2925C1.14566 19.1828 0 16.5446 0 11.2504C0 5.95612 1.14566 3.31698 1.19441 3.20729C1.7438 1.9735 3.15947 0.857839 4.48795 0.611269C4.62296 0.585956 7.87243 0 14.9902 0C22.1276 0 25.3742 0.585956 25.5092 0.610332C26.8386 0.857839 28.2534 1.9735 28.8028 3.20635C28.8515 3.31698 30 5.95612 30 11.2504C30 16.5446 28.8515 19.1828 28.8018 19.2934ZM27.0871 3.96575C26.7946 3.30854 25.8777 2.58664 25.167 2.45445C25.137 2.44883 21.9241 1.87506 15.0089 1.87506C8.07588 1.87506 4.86015 2.44883 4.82921 2.45445C4.11857 2.58664 3.2026 3.30854 2.90915 3.9695C2.89978 3.98919 1.876 6.40239 1.876 11.2504C1.876 16.0974 2.89978 18.5106 2.91103 18.535C3.2026 19.1922 4.11857 19.9141 4.83015 20.0463C4.86015 20.0519 8.07588 20.6256 14.9902 20.6256H15.0089C21.9241 20.6256 25.137 20.0519 25.168 20.0463C25.8786 19.9141 26.7946 19.1922 27.088 18.5312C27.0974 18.5106 28.1231 16.0974 28.1231 11.2504C28.1231 6.40332 27.0974 3.98919 27.0871 3.96575ZM12.6941 16.7311C12.5423 16.8277 12.3679 16.8755 12.1944 16.8755C12.0388 16.8755 11.8832 16.8371 11.7416 16.7583C11.4425 16.5933 11.2569 16.2793 11.2569 15.938V6.56271C11.2569 6.22238 11.4407 5.90925 11.7379 5.74424C12.0351 5.5783 12.3998 5.5858 12.6876 5.76487L20.2056 10.4113C20.4803 10.581 20.6491 10.881 20.65 11.2044C20.651 11.5279 20.486 11.8297 20.2122 12.0013L12.6941 16.7311ZM13.1329 8.24463V14.2401L17.9406 11.2157L13.1329 8.24463Z" fill="white"></path> </svg></div>
</div>
</div>
</div>
','20230504150323','20230504150323','N'),
	 (2,NULL,NULL,NULL,NULL,'SUCCESS','amaayamato@gmail.com',NULL,'HelloWorld','<h1>Hello World</h1>','20230504150417','20230504150417','N'),
	 (2,NULL,NULL,NULL,NULL,'SUCCESS','amaayamato@gmail.com',NULL,'HelloWorld','<h1>Hello World</h1>','20230504150516','20230504150516','N'),
	 (2,NULL,NULL,NULL,NULL,'SUCCESS','amaayamato@gmail.com',NULL,'HelloWorld','<h1>Hello World</h1>','20230504150918','20230504150918','N');
INSERT INTO tagocms.t_mail_template (name,target_group,subject,content,item_date,item_user_seq,item_username,item_user_fullname,item_site_name,item_site_url,item_site_phone,use_yn,created_date,created_by,modified_date,modified_by,is_deleted) VALUES
	 ('ADMIN_MAIL_TEMPLATE_1','ADMIN','test_email_subject_1','test_email_content_1','20230424',1,'admin@gmail.com','hongildon','tagoplus','tagoplus.co.kr','01012345678',NULL,'20230424162759',NULL,NULL,NULL,'N'),
	 ('ADMIN_MAIL_TEMPLATE_1_1','ADMIN','test_email_subject_1_1','test_email_content_1_1','20230424',1,'admin@gmail.com','hongildon','tagoplus','tagoplus.co.kr','01012345678','Y','20230424162906',NULL,'20230607145531',NULL,'N'),
	 ('test bold','ALL','test bold','<p>content</p>
',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Y','20230609142133','admin@gmail.com',NULL,NULL,'Y'),
	 ('ADMIN_MAIL_TEMPLATE_1_3','ALL','ADMIN_MAIL_TEMPLATE_1_3','<p>ADMIN_MAIL_TEMPLATE_1_3</p>
',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Y','2023-06-16 16:03:59','admin@gmail.com',NULL,NULL,'N');
INSERT INTO tagocms.t_menu (menu_name,menu_name_kr,menu_url,order_number,parent_seq,position_type,menu_type,created_date,created_by,modified_date,modified_by,is_deleted,use_yn,header_text,show_yn,menu_id,admin_menu_yn,file_group_seq) VALUES
	 ('사이트 소개',NULL,'/about/site',1,0,NULL,NULL,NULL,NULL,NULL,NULL,'N','Y',NULL,'Y','01','N',NULL),
	 ('소개 및 개요',NULL,'/about/site',5,129,NULL,NULL,NULL,NULL,'2023-05-02 08:59:04',NULL,'N','Y','','Y','0101','N',NULL),
	 ('조직 소개',NULL,'/about/history',6,129,NULL,NULL,'2023-05-02 07:45:43',NULL,NULL,NULL,'N','Y','','Y','0102','N',NULL),
	 ('정보마당',NULL,'/intro/works',8,0,NULL,NULL,'2023-05-02 08:58:07',NULL,NULL,NULL,'N','Y','','Y','02','N',NULL),
	 ('주요사업 소개',NULL,'/intro/works',9,201,NULL,NULL,'2023-05-02 08:58:38',NULL,NULL,NULL,'N','Y','','Y','0201','N',NULL),
	 ('서비스 소개',NULL,'/intro/service',10,201,NULL,NULL,'2023-05-02 08:58:56',NULL,NULL,NULL,'N','Y','','Y','0202','N',NULL),
	 ('고객지원',NULL,'/support/download',11,0,NULL,NULL,'2023-05-02 08:59:53',NULL,NULL,NULL,'N','Y','','Y','03','N',NULL),
	 ('자료실',NULL,'/support/download',12,204,NULL,NULL,'2023-05-02 09:00:17',NULL,'2023-05-29 15:12:02',NULL,'N','N','','N','0301','N',NULL),
	 ('묻고답하기(Q&A)',NULL,'/inform/qna',13,204,NULL,NULL,'2023-05-02 09:00:33',NULL,'2023-06-08 11:57:41',NULL,'N','Y','','Y','0302','N',NULL),
	 ('고객지원',NULL,'/support/apply',14,204,NULL,NULL,'2023-05-02 09:00:47',NULL,NULL,NULL,'N','Y','','Y','0304','N',NULL);
INSERT INTO tagocms.t_menu (menu_name,menu_name_kr,menu_url,order_number,parent_seq,position_type,menu_type,created_date,created_by,modified_date,modified_by,is_deleted,use_yn,header_text,show_yn,menu_id,admin_menu_yn,file_group_seq) VALUES
	 ('알림마당',NULL,'/inform/notice',15,0,'PS_01','MT_01','2023-05-02 09:01:10',NULL,'2023-06-08 14:40:35',NULL,'N','Y','','Y','04','N',NULL),
	 ('오늘의 행사1',NULL,'/inform/daily/detail',16,208,'PS_01','MT_05','2023-05-02 09:01:25',NULL,'2023-06-05 12:54:02',NULL,'N','N','','N','0401','N',NULL),
	 ('금주의 행사',NULL,'/inform/weekly',17,208,'PS_01','MT_01','2023-05-02 09:01:42',NULL,'2023-06-05 12:54:16',NULL,'N','N','','N','0402','N',NULL),
	 ('공지사항',NULL,'/inform/notice',18,208,'PS_01','MT_01','2023-05-02 09:01:56',NULL,'2023-05-29 15:12:40',NULL,'N','Y','','Y','0403','N',NULL),
	 ('갤러리',NULL,'/inform/gallery',19,208,'PS_01','MT_01','2023-05-02 09:02:10',NULL,'2023-05-10 13:16:25',NULL,'N','N','','Y','0404','N',NULL),
	 ('자주 묻는 질문',NULL,'/inform/faq',20,208,'PS_01','MT_01','2023-05-02 09:02:23',NULL,NULL,NULL,'N','Y','','Y','0405','N',NULL),
	 ('asdasd',NULL,'asdas',26,218,NULL,NULL,'2023-05-03 05:28:06',NULL,NULL,NULL,'N','Y','asdasd','Y','0501','N',NULL),
	 ('asdasd',NULL,'sadasd',27,218,NULL,NULL,'2023-05-03 05:28:15',NULL,NULL,NULL,'N','Y','asdasdas','Y','0502','N',NULL),
	 ('Dashboard','Dashboard','/dashboard/default',77,0,'PS_02','MT_05','2023-05-11 02:18:04',NULL,'2023-06-05 13:17:47',NULL,'N','Y','','Y','01','Y',925),
	 ('Pages',NULL,'/menu3',78,0,'PS_02','MT_05','2023-05-11 02:18:19',NULL,'2023-05-12 01:49:37',NULL,'N','Y','','Y','02','Y',NULL);
INSERT INTO tagocms.t_menu (menu_name,menu_name_kr,menu_url,order_number,parent_seq,position_type,menu_type,created_date,created_by,modified_date,modified_by,is_deleted,use_yn,header_text,show_yn,menu_id,admin_menu_yn,file_group_seq) VALUES
	 ('Dashboard','대시보드','/dashboard/default',85,277,'PS_02','MT_05','2023-05-11 02:24:23',NULL,'2023-06-05 14:23:22',NULL,'N','Y','','Y','0101','Y',926),
	 ('Content management','컨텐츠 관리','/menu31',86,278,'PS_02','MT_05','2023-05-11 02:24:43',NULL,'2023-06-05 12:18:01',NULL,'N','Y','','Y','0201','Y',918),
	 ('Banner manage','배너 관리','/manage/banner',87,286,'PS_02','MT_05','2023-05-11 02:25:02',NULL,'2023-05-23 16:23:12',NULL,'N','Y','','Y','020101','Y',NULL),
	 ('Popup manage','팝업관리','/manage/popup',89,286,'PS_01','MT_04','2023-05-12 01:51:33',NULL,'2023-05-23 16:23:20',NULL,'N','Y','Popup manage','Y','020102','Y',NULL),
	 ('Content form manage','폼 컨텐츠 관리','/manage/content/data',90,286,'PS_01','MT_04','2023-05-12 01:51:48',NULL,'2023-05-23 16:23:31',NULL,'N','Y','sadasd','Y','020103','Y',NULL),
	 ('User content manage','사용자 컨텐츠 관리','/manage/content/menu',91,286,'PS_01','MT_04','2023-05-12 01:51:59',NULL,'2023-05-23 16:24:07',NULL,'N','Y','asdasd','Y','020104','Y',NULL),
	 ('Menu manage','메뉴 관리','sadsad',92,278,'PS_01','MT_04','2023-05-12 01:52:16',NULL,'2023-06-05 12:18:24',NULL,'N','Y','adasd','Y','0202','Y',919),
	 ('Member manage','회원관리','asdsadsa',93,278,'PS_01','MT_04','2023-05-12 01:52:41',NULL,'2023-06-05 12:18:51',NULL,'N','Y','asdasdsa','Y','0203','Y',920),
	 ('Community','커뮤니티','sadsadas',94,278,'PS_01','MT_04','2023-05-12 01:53:17',NULL,'2023-06-05 12:19:13',NULL,'N','Y','asdsadas','Y','0204','Y',921),
	 ('Form manage',NULL,'/Formmanage',99,297,'PS_01','MT_04','2023-05-12 01:54:48',NULL,NULL,NULL,'N','Y','Form manage','Y','04','Y',NULL);
INSERT INTO tagocms.t_menu (menu_name,menu_name_kr,menu_url,order_number,parent_seq,position_type,menu_type,created_date,created_by,modified_date,modified_by,is_deleted,use_yn,header_text,show_yn,menu_id,admin_menu_yn,file_group_seq) VALUES
	 ('Role manage',NULL,'/Role',100,297,'PS_01','MT_04','2023-05-12 01:55:16',NULL,NULL,NULL,'N','Y','Role manage','Y','05','Y',NULL),
	 ('Settings',NULL,'/settings',103,302,'PS_01','MT_04','2023-05-12 01:57:31',NULL,NULL,NULL,'N','Y','Settings','Y','09','Y',NULL),
	 ('Utilities',NULL,'sadasd',105,0,'PS_01','MT_04','2023-05-12 01:59:19',NULL,NULL,NULL,'N','Y','sadas','Y','03','Y',NULL),
	 ('Admin menu','관리자 메뉴관리','/admin/menu',109,292,'PS_01','MT_04','2023-05-12 02:54:34',NULL,'2023-05-23 16:24:35',NULL,'N','Y','Admin menu','Y','020201','Y',NULL),
	 ('User menu','사용자 메뉴관리','/user/menu',110,292,'PS_01','MT_04','2023-05-12 02:55:16',NULL,'2023-05-23 16:24:48',NULL,'N','Y','User menu','Y','020202','Y',NULL),
	 ('Admin manage','관리자 관리','/member/admin',111,293,'PS_01','MT_04','2023-05-12 02:55:44',NULL,'2023-05-23 16:25:09',NULL,'N','Y','Admin manage','Y','020301','Y',NULL),
	 ('User manage','사용자관리','/member/user',112,293,'PS_01','MT_04','2023-05-12 02:56:27',NULL,'2023-05-23 16:25:16',NULL,'N','Y','User manage','Y','020302','Y',NULL),
	 ('Notice board','공지 게시판','/community/notice',113,294,'PS_01','MT_04','2023-05-12 02:56:41',NULL,'2023-05-23 16:25:37',NULL,'N','Y','Notice board','Y','020401','Y',NULL),
	 ('Faq board','FAQ 게시판','/community/faq',114,294,'PS_01','MT_04','2023-05-12 02:56:53',NULL,'2023-05-23 16:25:47',NULL,'N','Y','Faq board','Y','020402','Y',NULL),
	 ('QnA board','QnA 게시판','/community/qna',115,294,'PS_01','MT_04','2023-05-12 02:57:08',NULL,'2023-05-23 16:25:55',NULL,'N','Y','QnA board','Y','020403','Y',NULL);
INSERT INTO tagocms.t_menu (menu_name,menu_name_kr,menu_url,order_number,parent_seq,position_type,menu_type,created_date,created_by,modified_date,modified_by,is_deleted,use_yn,header_text,show_yn,menu_id,admin_menu_yn,file_group_seq) VALUES
	 ('Settings','설정','Settings',116,305,'PS_01','MT_04','2023-05-12 03:17:26',NULL,'2023-06-05 12:19:34',NULL,'N','Y','Settings','Y','0301','Y',922),
	 ('Common','공통','/Common',117,305,'PS_01','MT_04','2023-05-12 03:17:45',NULL,'2023-06-05 12:19:50',NULL,'N','Y','Common','Y','0302','Y',923),
	 ('Contact',NULL,'asdsad',118,0,'PS_01','MT_04','2023-05-12 03:18:10',NULL,NULL,NULL,'N','Y','Contact','Y','04','Y',NULL),
	 ('Form manage','폼 관리','/manage/content/form',119,318,'PS_01','MT_04','2023-05-12 03:18:35',NULL,'2023-05-23 16:30:29',NULL,'N','Y','Form manage','Y','030101','Y',NULL),
	 ('Role manage','권한 관리','/settings/rolemanage',120,318,'PS_01','MT_04','2023-05-12 03:18:54',NULL,'2023-05-23 16:30:39',NULL,'N','Y','Role manage','Y','030102','Y',NULL),
	 ('Site info','사이트 정보','/settings/siteinfo',121,318,'PS_01','MT_04','2023-05-12 03:19:15',NULL,'2023-05-23 16:30:57',NULL,'N','Y','Site info','Y','030103','Y',NULL),
	 ('System setting','시스템 설정','/settings/systemsetting',122,318,'PS_01','MT_04','2023-05-12 03:19:35',NULL,'2023-05-23 16:31:19',NULL,'N','Y','System setting','Y','030104','Y',NULL),
	 ('Common code','코드 관리','/common/code',123,319,'PS_01','MT_04','2023-05-12 03:19:55',NULL,'2023-05-23 16:32:27',NULL,'N','Y','Common code','Y','030201','Y',NULL),
	 ('Mail template','메일 템플릿','/common/mail',124,319,'PS_01','MT_04','2023-05-12 03:20:15',NULL,'2023-05-23 16:32:38',NULL,'N','Y','Mail template','Y','030202','Y',NULL),
	 ('Send group mail','이메일 발송','/common/send',125,319,'PS_01','MT_04','2023-05-12 03:20:35',NULL,'2023-05-23 16:32:49',NULL,'N','Y','Send group mail','Y','030203','Y',NULL);
INSERT INTO tagocms.t_menu (menu_name,menu_name_kr,menu_url,order_number,parent_seq,position_type,menu_type,created_date,created_by,modified_date,modified_by,is_deleted,use_yn,header_text,show_yn,menu_id,admin_menu_yn,file_group_seq) VALUES
	 ('Contact','문의','Contact',126,320,'PS_01','MT_04','2023-05-12 05:39:01',NULL,'2023-06-05 12:20:13',NULL,'N','Y','sadasd','Y','0401','Y',924),
	 ('오늘의 행사2',NULL,'/inform/daily',129,208,'PS_01','MT_01','2023-05-24 16:15:09',NULL,'2023-06-05 12:54:20',NULL,'N','N','','N','0406','N',0),
	 ('testmenu',NULL,'/web/menucontents/',130,204,NULL,'MT_04','2023-05-24 16:21:45',NULL,NULL,NULL,'Y','Y','tester','Y','0303','N',0),
	 ('QnA 게시판',NULL,'/inform/qna',131,208,'PS_01','MT_06','2023-06-08 14:39:16',NULL,NULL,NULL,'Y','Y','','Y','0407','N',0);
INSERT INTO tagocms.t_notice (title,division_yn,content,file_group_seq,reservation_date,exposure_yn,created_date,created_by,modified_date,modified_by,is_deleted,created_ip,modified_ip,view_cnt,start_date) VALUES
	 ('test test test','General post','<p>notice</p>
',650,'2023-04-21','Y','2023-06-06 16:02','admin@gmail.com','20230519163644','admin@gmail.com','N','0:0:0:0:0:0:0:1','203.23.49.100',2,NULL),
	 ('Title','General post','<p>sdsd</p>
',730,'2023-04-26','N','2023-06-06 16:03','admin@gmail.com','20230519163719','admin@gmail.com','N','0:0:0:0:0:0:0:1','203.23.49.100',0,NULL),
	 ('bold test266','General post','<p>content</p>
',770,'2023-04-26','N','2023-06-06 16:05','admin@gmail.com','20230427111714','admin@gmail.com','N','0:0:0:0:0:0:0:1','0:0:0:0:0:0:0:1',0,NULL),
	 ('test','General post',NULL,0,'2023-04-26','Y','2023-06-06 16:06','admin@gmail.com',NULL,NULL,'N','0:0:0:0:0:0:0:1',NULL,2,NULL),
	 ('asdasdasd','General post','<p>czxc</p>
',748,'2023-04-26','Y','2023-06-06 16:10','admin@gmail.com','20230426113634','admin@gmail.com','N','0:0:0:0:0:0:0:1','0:0:0:0:0:0:0:1',4,NULL),
	 ('bold test 011','Notice post','<p>상세 내용fdsfsdfdsf</p>
',883,'2023-05-25','Y','2023-06-06 16:11','admin@gmail.com','20230519163533','admin@gmail.com','N','0:0:0:0:0:0:0:1','203.23.49.100',9,NULL),
	 ('bold test 5','Notice post','<p>conetnt</p>
',0,'2023-06-06','Y','2023-06-06 16:19','admin@gmail.com',NULL,NULL,'N','203.23.49.100',NULL,8,NULL),
	 ('Test announcement ','Notice post','<p>ewrwrewe</p>
',953,'2023-06-12','Y','2023-06-12 12:48','admin@gmail.com',NULL,NULL,'N','112.160.125.253',NULL,2,NULL),
	 ('bold test','General post','<p>content</p>
',954,'2023-06-13','N','2023-06-13 10:11','admin@gmail.com',NULL,NULL,'Y','203.23.49.100',NULL,0,NULL);
INSERT INTO tagocms.t_popup (subject,content,popup_type,link_yn,window_yn,link_url,pc_file_group_seq,mobile_file_group_seq,image_desc,position_x,position_y,height,width,start_date,end_date,sort_no,use_yn,is_deleted,created_date,created_by,modified_date,modified_by) VALUES
	 ('팝업명입니다.',NULL,'M_IMG','N','off',NULL,756,0,'이미지 설명입니다. 팝업',200,100,700,500,'2023-04-27','2023-05-31','1','Y','Y','20230427100433',NULL,'20230427120419',NULL),
	 ('TestNewPopup100',NULL,'M_IMG','Y','on','www.google.com',780,781,'TestNewPopup101',34,34,800,1000,'2023-04-27','2023-04-27','2','Y','Y','20230427114559',NULL,NULL,NULL),
	 ('TestNewPopup200',NULL,'M_IMG','Y','on','www.google.com',0,0,'TestNewPopup201',56,56,800,800,'2023-04-27','2023-04-27','3','Y','Y','20230427114622',NULL,NULL,NULL),
	 ('Main popup',NULL,'M_IMG','N','off',NULL,790,0,'tailbar',200,100,500,350,'2023-04-28','2023-04-30','1','Y','Y','20230428104718',NULL,NULL,NULL),
	 ('팝업명입니다.',NULL,'M_IMG','N','off',NULL,915,916,'설명입니다',100,10,400,700,'2023-06-06','2023-06-10','1','Y','N','20230529110801',NULL,'20230606121355',NULL),
	 ('cms testing',NULL,'M_IMG','Y','on','cloud.kt.com/solution/finance2/',933,934,'오늘은월요일스폰지밥',120,120,120,120,'2023-06-05','2023-06-05','','Y','N','20230605164600',NULL,'20230605171209',NULL),
	 ('cms  testing2 ',NULL,'M_IMG','N','off',NULL,936,0,'LWERWEFWEf',125,145,130,130,'2023-06-05','2023-06-05','4','N','N','20230605170917',NULL,'20230605171225',NULL),
	 ('cms testing3',NULL,'M_IMG','N','off',NULL,937,938,'good',140,210,135,120,'2023-06-05','2023-06-05','8','Y','N','20230605171100',NULL,NULL,NULL),
	 ('testtest',NULL,'M_IMG','Y','off','v=y-j9IJfiAXo',946,947,'펀치',125,120,130,130,'2023-06-26','2023-06-27','2','N','N','20230607152807',NULL,'2023-06-26 17:31:31',NULL);
INSERT INTO tagocms.t_qna (username,title,content,answer,answer_username,created_date,created_by,modified_date,modified_by,is_deleted,is_secret,is_answered,view_count,file_group_seq,answer_file_group_seq) VALUES
	 ('test','test','1111','12cvcv','qwe','2023-06-07 15:13',NULL,'2023-06-07 15:13',NULL,'N',NULL,'Y',1,NULL,948),
	 ('tester111@gmail.com','sss','ssss',NULL,NULL,'2023-06-08 10:59','tester111@gmail.com','2023-06-08 11:00','tester111@gmail.com','N','N','N',1,0,0),
	 ('tester111@gmail.com','ㅅㄱㄷㅈㄱㅈㄷ','ㅈㄷㄱㅈㄷㄱㅈ','ㅅㄷㅅㄷㅅㄷㅅㄷㄱ',NULL,'2023-06-08 11:00','tester111@gmail.com','2023-06-08 11:01',NULL,'N','N','Y',2,0,950),
	 ('tester111@gmail.com','vzxcv','zv',NULL,NULL,'2023-06-15 15:15','tester111@gmail.com',NULL,NULL,'N','Y','N',3,0,0);
INSERT INTO tagocms.t_site_info (site_seq,site_nm,site_url,contact_tel,contact_email,contact_mobile,zip,addr,addr_etc,copyright,fav_file_group_seq,header_file_group_seq,footer_file_group_seq,footer_content,terms_use,privacy_policy,modified_date,modified_by) VALUES
	 (1,'Tago CMS','http://localhost:3000/','07007000700','test@email.com','01001100110','34000','대전 유성구 라온4길 38-43','123456','12 Copyright, IT Wizard. All rights reserved.',868,869,870,'<div style="background: #169BD5; color: #FFFFFF; width: 100%; height: 250px; display: flex; justify-content: center; align-items: center; padding: auto">
<div style="width: 50%; display: flex; justify-content: space-between; padding: auto">
<div>
<div>&nbsp;</div>

<ul>
	<li>TAGO CMS</li>
</ul>

<ul>
	<li>Email: test@test.com</li>
</ul>

<ul>
	<li>Tel: 070-0000-0000</li>
</ul>

<ul>
	<li>Address: qewrqwerq,qwrqre</li>
</ul>
&nbsp;

<ul>
	<li>Copyright @ 2023 TAGOCMS. All Right Reserved</li>
</ul>
</div>

<div style="height:150px; width:200px">
<div><img alt="footer logo" src="#atchFooterLogo" style="height:31px;" /></div>
&nbsp;

<div style="display: flex; justify-content: space-between; padding: auto"><svg fill="none" height="30" viewbox="0 0 30 30" width="30" xmlns="http://www.w3.org/2000/svg"> <path clip-rule="evenodd" d="M8.80448 0.184094C6.36266 0.294269 4.24622 0.891264 2.53724 2.59303C0.822292 4.30374 0.232712 6.42856 0.122263 8.84498C0.0536046 10.3532 -0.347871 21.7475 0.816324 24.7356C1.60141 26.7515 3.14766 28.3015 5.18202 29.0891C6.13128 29.4584 7.21491 29.7083 8.80448 29.7813C22.0957 30.3828 27.0226 30.0553 29.1003 24.7356C29.4689 23.7887 29.7227 22.706 29.7928 21.1204C30.4003 7.79506 29.6943 4.90672 27.3779 2.59303C25.5405 0.760239 23.3793 -0.487381 8.80448 0.184094ZM8.92684 27.1013C7.4716 27.0358 6.68205 26.7933 6.15518 26.5894C4.82979 26.0742 3.83425 25.0828 3.32231 23.7652C2.43573 21.4946 2.72977 10.7108 2.80888 8.96583C2.88649 7.25661 3.23276 5.69451 4.43875 4.48854C5.9313 2.99967 7.85967 2.26999 20.9897 2.86256C22.7032 2.93998 24.2689 3.28554 25.4778 4.48854C26.9704 5.97739 27.7107 7.9206 27.1077 21.0003C27.042 22.4519 26.7988 23.2396 26.5943 23.7652C25.2435 27.2267 22.136 27.7073 8.92684 27.1013ZM21.1345 7.03444C21.1345 8.02007 21.936 8.82155 22.9256 8.82155C23.9151 8.82155 24.7181 8.02007 24.7181 7.03444C24.7181 6.04882 23.9151 5.24806 22.9256 5.24806C21.936 5.24806 21.1345 6.04882 21.1345 7.03444ZM7.294 14.9819C7.294 19.2044 10.7254 22.6277 14.9583 22.6277C19.1912 22.6277 22.6226 19.2044 22.6226 14.9819C22.6226 10.7595 19.1912 7.33839 14.9583 7.33839C10.7254 7.33839 7.294 10.7595 7.294 14.9819ZM9.98359 14.9819C9.98359 12.2425 12.2105 10.0198 14.9583 10.0198C17.7061 10.0198 19.933 12.2425 19.933 14.9819C19.933 17.7229 17.7061 19.9463 14.9583 19.9463C12.2105 19.9463 9.98359 17.7229 9.98359 14.9819Z" fill="white" fill-rule="evenodd"></path> </svg><svg fill="none" height="30" viewbox="0 0 30 30" width="30" xmlns="http://www.w3.org/2000/svg"> <path d="M19.1007 16.4359C19.0917 16.794 18.7996 17.0801 18.4405 17.0801C18.4355 17.0801 18.4305 17.0801 18.4265 17.0801H16.1709C16.1668 17.0801 16.1618 17.0801 16.1568 17.0801C15.7977 17.0801 15.5057 16.793 15.4966 16.4359V11.6595C15.5057 11.2694 15.8227 10.9563 16.2149 10.9563C16.607 10.9563 16.9241 11.2694 16.9331 11.6585V15.7897H18.4275C18.4315 15.7897 18.4365 15.7897 18.4415 15.7897C18.8006 15.7897 19.0927 16.0768 19.1017 16.4339L19.1007 16.4359ZM11.7195 14.7064L12.4217 12.7108L13.1239 14.7064H11.7195ZM13.359 11.6525C13.233 11.2474 12.8609 10.9583 12.4217 10.9583C11.9826 10.9583 11.6115 11.2474 11.4864 11.6455L11.4844 11.6525L9.80294 16.0798C9.58988 16.743 9.77593 16.9891 9.96999 17.0781C10.101 17.1391 10.2541 17.1752 10.4151 17.1752C10.4161 17.1752 10.4161 17.1752 10.4171 17.1752C10.4381 17.1782 10.4631 17.1792 10.4881 17.1792C10.7112 17.1792 10.9043 17.0531 11.0003 16.8681L11.0023 16.8651L11.3504 15.9528H13.494L13.8422 16.8641C13.9402 17.0521 14.1332 17.1792 14.3563 17.1792C14.3813 17.1792 14.4063 17.1772 14.4303 17.1742H14.4273C14.5894 17.1742 14.7434 17.1381 14.8805 17.0751L14.8735 17.0781C15.0675 16.9891 15.2536 16.743 15.0395 16.0778L13.359 11.6525ZM23.7961 16.0298C23.8822 16.1448 23.9342 16.2909 23.9342 16.4479C23.9342 16.8361 23.6191 17.1511 23.231 17.1511C23.0049 17.1511 22.8038 17.0441 22.6748 16.8781L22.6738 16.8761L21.0243 14.6914L20.7802 14.9355V16.4699C20.7752 16.8541 20.4621 17.1641 20.077 17.1641C19.6919 17.1641 19.3788 16.8551 19.3738 16.4709V11.6605C19.3738 11.2724 19.6889 10.9573 20.077 10.9573C20.4651 10.9573 20.7802 11.2724 20.7802 11.6605V13.172L22.7418 11.2104C22.8399 11.1133 22.9759 11.0543 23.1249 11.0543C23.1279 11.0543 23.1299 11.0543 23.1329 11.0543C23.497 11.0643 23.7931 11.3474 23.8231 11.7055V11.7085C23.8241 11.7215 23.8251 11.7375 23.8251 11.7525C23.8251 11.9016 23.7651 12.0376 23.6681 12.1366L22.0656 13.7391L23.7961 16.0298ZM10.061 12.3347H8.96369V16.512C8.94568 16.8871 8.63759 17.1832 8.26048 17.1832C7.88336 17.1832 7.57527 16.8861 7.55727 16.513V16.511V12.3337H6.45994C6.07982 12.3337 5.77173 12.0256 5.77173 11.6455C5.77173 11.2654 6.07982 10.9573 6.45994 10.9573H10.06C10.4401 10.9573 10.7482 11.2654 10.7482 11.6455C10.7482 12.0256 10.4401 12.3337 10.06 12.3337L10.061 12.3347ZM14.9995 23.438C14.9965 23.438 14.9935 23.438 14.9895 23.438C14.2293 23.438 13.482 23.383 12.7518 23.277L12.8349 23.287C12.1316 23.7821 8.06842 26.637 7.68531 26.69C7.64829 26.704 7.60528 26.712 7.56027 26.712C7.50025 26.712 7.44223 26.697 7.39222 26.671L7.39422 26.672C7.26018 26.593 7.28519 26.3869 7.28519 26.3869C7.3252 26.1118 8.3385 22.6138 8.52556 21.9706C5.28158 20.5752 3.0109 17.4892 2.81384 13.8522L2.81284 13.8281C2.81284 8.52056 8.26948 4.21827 15.0005 4.21827C21.7315 4.21827 27.1882 8.52056 27.1882 13.8281C27.1882 19.1357 21.7305 23.438 14.9995 23.438ZM27.6563 0H2.3437C1.04931 0 0 1.04931 0 2.3437V27.6563C0 28.9507 1.04931 30 2.3437 30H27.6563C28.9507 30 30 28.9507 30 27.6563V2.3437C30 1.04931 28.9507 0 27.6563 0Z" fill="white"></path> </svg><svg fill="none" height="30" viewbox="0 0 30 30" width="30" xmlns="http://www.w3.org/2000/svg"> <path clip-rule="evenodd" d="M0 6C0 2.68629 2.68629 0 6 0H24C27.3137 0 30 2.68629 30 6V24C30 27.3137 27.3137 30 24 30H6C2.68629 30 0 27.3137 0 24V6ZM6 3C4.34314 3 3 4.34314 3 6V24C3 25.6569 4.34314 27 6 27H15V16.5H13.5C12.6715 16.5 12 15.8285 12 15C12 14.1715 12.6715 13.5 13.5 13.5H15V11.25C15 8.3505 17.3505 6 20.25 6H21.15C21.9785 6 22.65 6.67158 22.65 7.5C22.65 8.32842 21.9785 9 21.15 9H20.25C19.0074 9 18 10.0074 18 11.25V13.5H21.15C21.9785 13.5 22.65 14.1715 22.65 15C22.65 15.8285 21.9785 16.5 21.15 16.5H18V27H24C25.6569 27 27 25.6569 27 24V6C27 4.34314 25.6569 3 24 3H6Z" fill="white" fill-rule="evenodd"></path> </svg><svg fill="none" height="30" viewbox="0 0 30 23" width="30" xmlns="http://www.w3.org/2000/svg"> <path d="M28.8018 19.2934C28.2534 20.5263 26.8387 21.6429 25.5102 21.8894C25.3742 21.9147 22.1276 22.5007 15.0089 22.5007H14.9902C7.87243 22.5007 4.62296 21.9147 4.48795 21.8904C3.15947 21.6429 1.7438 20.5263 1.19441 19.2925C1.14566 19.1828 0 16.5446 0 11.2504C0 5.95612 1.14566 3.31698 1.19441 3.20729C1.7438 1.9735 3.15947 0.857839 4.48795 0.611269C4.62296 0.585956 7.87243 0 14.9902 0C22.1276 0 25.3742 0.585956 25.5092 0.610332C26.8386 0.857839 28.2534 1.9735 28.8028 3.20635C28.8515 3.31698 30 5.95612 30 11.2504C30 16.5446 28.8515 19.1828 28.8018 19.2934ZM27.0871 3.96575C26.7946 3.30854 25.8777 2.58664 25.167 2.45445C25.137 2.44883 21.9241 1.87506 15.0089 1.87506C8.07588 1.87506 4.86015 2.44883 4.82921 2.45445C4.11857 2.58664 3.2026 3.30854 2.90915 3.9695C2.89978 3.98919 1.876 6.40239 1.876 11.2504C1.876 16.0974 2.89978 18.5106 2.91103 18.535C3.2026 19.1922 4.11857 19.9141 4.83015 20.0463C4.86015 20.0519 8.07588 20.6256 14.9902 20.6256H15.0089C21.9241 20.6256 25.137 20.0519 25.168 20.0463C25.8786 19.9141 26.7946 19.1922 27.088 18.5312C27.0974 18.5106 28.1231 16.0974 28.1231 11.2504C28.1231 6.40332 27.0974 3.98919 27.0871 3.96575ZM12.6941 16.7311C12.5423 16.8277 12.3679 16.8755 12.1944 16.8755C12.0388 16.8755 11.8832 16.8371 11.7416 16.7583C11.4425 16.5933 11.2569 16.2793 11.2569 15.938V6.56271C11.2569 6.22238 11.4407 5.90925 11.7379 5.74424C12.0351 5.5783 12.3998 5.5858 12.6876 5.76487L20.2056 10.4113C20.4803 10.581 20.6491 10.881 20.65 11.2044C20.651 11.5279 20.486 11.8297 20.2122 12.0013L12.6941 16.7311ZM13.1329 8.24463V14.2401L17.9406 11.2157L13.1329 8.24463Z" fill="white"></path> </svg></div>
</div>
</div>
</div>
','<p><a href="/">itwizard. </a></p>

<p>Copyright, <strong>IT Wizard</strong>. All rights reserved.<br />
&copy;2021</p>

<p><a href="mailto:admin@itwizard.mn">admin@tagoplus.co.kr</a><br />
서울 금천구 가산디지털1로 5대륭테크노타운20차 402호<br />
+82 1644-5805</p>
','<p><a href="/">itwizard. </a></p>

<p>Copyright, <strong>IT Wizard</strong>. All rights reserved.<br />
&copy;2021</p>

<p><a href="mailto:admin@itwizard.mn">admin@tagoplus.co.kr</a><br />
서울 금천구 가산디지털1로 5대륭테크노타운20차 402호<br />
+82 1644-5805</p>
','20230510133027',NULL);
INSERT INTO tagocms.t_system_settings (admin_session_time_yn,admin_session_time,admin_passchange_cycle_yn,admin_passchange_cycle,admin_access_ip_yn,admin_access_ip,user_session_time_yn,user_session_time,user_passchange_cycle_yn,user_passchange_cycle,modified_date,modified_by,google_yn,google_acc_token,facebook_yn,facebook_acc_token,naver_yn,naver_acc_token,kakao_yn,kakao_acc_token) VALUES
	 ('N',3,'Y',300,'Y','5','Y',50,'Y',6,'20230607164435','admin@gmail.com','N','aaa','N','sss','N','ddd','N','абөа');
INSERT INTO tagocms.t_user (username,password,fullname,email,phone,last_login_date,is_deleted,file_group_seq,temp_pwd,temp_pwd_cre_dt,temp_pwd_end_dt,use_yn,gender,mobile,job,zip,addr,addr_etc,created_date,created_by,modified_date,modified_by,birthday,introduction) VALUES
	 ('bold777','$2a$10$F.mSRxQNNvMlMquk9/RguewT3UrUCVg6MSs4H0i3ozoazAb7evUqu','Bold','boldbayaribi77@gmail.com','88008899','2022-01-02','Y',446,NULL,NULL,NULL,'Y','M','77777777','Job55','256','Addr','Etc22','2023-04-14 06:26:09',NULL,'2023-04-27 16:54:07',NULL,'1989-06-01','introcs'),
	 ('test테스트','$2a$10$DFyfFh.yjlaJ7Tn8cep.g.eEHC0FW/RRt9az.wRDsZwnmpqTHrJbO','test2020','admin202cs@admin.com','88888888801',NULL,'N',478,NULL,NULL,NULL,'Y','M','8686868686','job bn ','06124','서울 강남구 봉은사로16길 10','address','2023-04-17 02:07:39',NULL,'20230505111326',NULL,'2034-04-17','description'),
	 ('id652','$2a$10$dzR/cL5NE6Sre7nrZV3ttu7uc4iwtAbDsd4OJ7pFOClLs2azBrv3i','User251','admin9897865@gmail.com','888888881521',NULL,'Y',0,NULL,NULL,NULL,NULL,'M',NULL,NULL,NULL,NULL,NULL,'2023-04-24 07:10:52',NULL,NULL,NULL,'2023-04-18',NULL),
	 ('Batchimeg@gmail.com','$2a$10$SGiDwwBA30t96gc1zyAl1.qx7z6E7RLchmG7ZHD3XQKmiY6lFjPcu','Batchimeg','haku.batchimeg@gmail.com','010-1111-2222',NULL,'N',762,NULL,NULL,NULL,'Y','F','010-1111-2222','asassa','48060','부산 해운대구 APEC로 17','wwerwerwerwrewer','2023-04-27 02:39:55',NULL,'20230512093039',NULL,'1995-02-27','sasas'),
	 ('admin1001','123456aA@','admin','admin1001@gmail.com','88009900',NULL,'N',783,NULL,NULL,NULL,'Y','M','99009900','works','06124','서울 강남구 봉은사로16길 10','address','2023-04-27 07:12:10',NULL,'20230427151630',NULL,'2023-04-27','description'),
	 ('admin2023@gmail.com','$2a$10$V/KcmysIqHqj/H6eYK8Cl.Og8iWEhYR9W2AXpjTFivK6oerr8RReK','admin2023','admin2023@gmail.com','88009900',NULL,'Y',784,NULL,NULL,NULL,'Y','M','99009900','12345','01047','서울 강북구 한천로166길 2','address','2023-04-27 07:24:10',NULL,'2023-04-27 15:26:47',NULL,'2023-04-27','description'),
	 ('GGG','$2a$10$JkOhNb4kWpMkhDlT9B8pXeYKVPaVvOtE4ZZAILvPV3eYXmeKEA/nW','GGG','admin@admin.com','88008899',NULL,'Y',792,NULL,NULL,NULL,'Y','M','8686868686','job bn ','01047','서울 강북구 한천로166길 2','address','2023-04-28 07:13:08',NULL,NULL,NULL,'2023-04-28','job dood tal '),
	 ('admin505@gmail.com','$2a$10$F.mSRxQNNvMlMquk9/RguewT3UrUCVg6MSs4H0i3ozoazAb7evUqu','admin505@gmail.com','admin@admin.com','88008899',NULL,'N',793,NULL,NULL,NULL,'Y','M','8686868686','job bn ','01047','서울 강북구 한천로166길 2','address','2023-04-28 07:14:40',NULL,NULL,NULL,'2023-04-28','job dood tal '),
	 ('adminTEST@gmail.com','$2a$10$BHLKovNKYdU4eLCBowQToeJy84wEz.cwRMP4d2v6hq7l0tNqznTne','admin','admin@admin.com','88008899',NULL,'N',796,NULL,NULL,NULL,'Y','M','8686868686','job bn aaa','06124','서울 강남구 봉은사로16길 10','address101','2023-05-01 01:51:48',NULL,'20230512093006',NULL,'2023-05-01','description description '),
	 ('admin8989@gmail.com','$2a$10$h6gkA7yMIt5vh9X03ZGKHe3Dadu8bsGeIjZhtR4pDwdTAKdws.eum','admin8989@gmail.com','admin@admin.com','88888888',NULL,'Y',804,NULL,NULL,NULL,'Y','M','8686868686','job bn ','01047','서울 강북구 한천로166길 2','address','2023-05-01 05:40:09',NULL,NULL,NULL,'2023-05-01','job dood tal ');
INSERT INTO tagocms.t_user (username,password,fullname,email,phone,last_login_date,is_deleted,file_group_seq,temp_pwd,temp_pwd_cre_dt,temp_pwd_end_dt,use_yn,gender,mobile,job,zip,addr,addr_etc,created_date,created_by,modified_date,modified_by,birthday,introduction) VALUES
	 ('khongor','$2a$10$NOAOeQBHxBU5yBGmDnIXBu.qTUCV1byg9NE1iWSOoTZKM0wvHvKQC','khongor','khongor8832@gmail.com','880088991',NULL,'N',0,'$2a$10$CRVKjoSSeYgtCQev3kB8ZuTvNYzsDz3zEzLmkXJ23ZXnzVB9si0Ki','20230501153442','20230501153521','N','M','55554','225854','02230','서울 중랑구 겸재로 68','서울시 중랑구','2023-05-01 07:30:12',NULL,'20230504173551',NULL,'2023-05-11','직업직업02'),
	 ('ad112min@admin.com','$2a$10$3kDKKQy/Mvn4zpmB18LHYeMUdj8zEap7YLYg9u.iERAl8uYst8SyS','Testname','adcsmin@admin.com','88008899',NULL,'N',807,NULL,NULL,NULL,'Y','F','8686868686','job bn ','06779','서울 서초구 강남대로16길 3','c','2023-05-02 07:11:26',NULL,'20230512093121',NULL,'2023-05-02','job dood tal  kk'),
	 ('test@admin.com','$2a$10$NTbihWomcwo7icxvDzrHueKQhQa0ZuzhQt6b6csw2OFZ3DGRNzy/G','test','test@gmail.com','89898989',NULL,'N',813,NULL,NULL,NULL,'Y','M','98989898','job bn ','06124','서울 강남구 봉은사로16길 10','address','2023-05-03 01:49:57',NULL,NULL,NULL,'2023-05-03','description'),
	 ('acdmin@admin.cosa','$2a$10$aLPSBn/.ZZg62IcJUY2Pa.4gRUJX6SJs9JEe1z/hBM8TywRbO4WDu','csacsacsa','adcsamin@admin.com','88008899',NULL,'N',814,NULL,NULL,NULL,'Y','M','8686868686','job bn ','06124','서울 강남구 봉은사로16길 10','csacsacsa','2023-05-03 01:50:57',NULL,'20230512092840',NULL,'2023-05-03','job dood tal '),
	 ('','$2a$10$Zbdju6kG5jfJkC/VwEBGOeRNke9MkjGIU13cvDkHuIHk.dmscDSbi','','123456','123456',NULL,'N',0,NULL,NULL,NULL,'Y','M','','123456','','','','2023-05-03 07:04:00',NULL,NULL,NULL,'2023-05-03','123456'),
	 ('admin303@admin.com','$2a$10$wLBo5coxfmY5NZyL3.IBquGbdUCFhpRxko8oTURw96.K9X41OnfNe','admin303@admin.com',NULL,'88008899534',NULL,'N',837,NULL,NULL,NULL,'N','M','8888888888888354','job bn ','06124','서울 강남구 봉은사로16길 10','address','2023-05-04 03:07:24',NULL,'20230504174730',NULL,'2023-05-04','job dood tal '),
	 ('admin@gmail.com','$2a$10$qF..i8J1kEhZK8pMKpvkkut8JPORUGPKcOZy6qKZRb/h4kmiRtk.2','세진0331',NULL,'555554413221215465432121545142121',NULL,'Y',0,NULL,NULL,NULL,'Y','F','10122313565322352656565656565','프로젝트 매니저','','','','2023-05-04 16:43:30',NULL,'20230504174537',NULL,'2035-05-04','아이티위자드직원입니다.'),
	 ('sejin9642@gmail.com','$2a$10$N5SVmCICP/YCKVbfcGduuepU31ZgOC8Lcs8erNcHwGXQUM/s0rB42','test A',NULL,'70112525',NULL,'Y',0,NULL,NULL,NULL,'Y','F','94942563',' 직업직업','35389','대전 서구 가수원로 5','lllkklkl','2023-05-04 17:36:07',NULL,'20230504184034',NULL,'1996-05-04','12345'),
	 ('dadadada@gmail.com','$2a$10$kJoSOytBIiK33L.5UGo40e9.kUnf9DMJ/.NYBUZOZpydLPH8m2XBW','Sergelen',NULL,'98989898',NULL,'N',0,NULL,NULL,NULL,'Y','F','99874547','직업직업직업직업','1','1','1','2023-05-12 08:37:55',NULL,'20230512112838',NULL,'2023-05-08','소개소개소개소개'),
	 ('lin@hanmail.net','$2a$10$G2s3xez8uBNE6yuZl43knOgBF163yqVKzFvX0cwX18WXnJ6kd.2I.','테스트123',NULL,'554141115',NULL,'N',0,NULL,NULL,NULL,'Y','F','99999999','job bn ','','','','2023-05-12 08:40:00',NULL,NULL,NULL,'2026-01-01','description description ');
INSERT INTO tagocms.t_user (username,password,fullname,email,phone,last_login_date,is_deleted,file_group_seq,temp_pwd,temp_pwd_cre_dt,temp_pwd_end_dt,use_yn,gender,mobile,job,zip,addr,addr_etc,created_date,created_by,modified_date,modified_by,birthday,introduction) VALUES
	 ('test2@hotmail.com','$2a$10$2Rx.3CwtvTAZcjQosYWJFeU7xY.h/q7mRp9d0oNe8Ncbr4X6W1HLy','test2',NULL,'95959595',NULL,'N',0,NULL,NULL,NULL,'Y',NULL,'87878787','job bn aaa','','','','2023-05-12 08:51:00',NULL,NULL,NULL,'2023-05-06','description description '),
	 ('25545@yahoo.com','$2a$10$9pCbnYaXpqj03mVWSLF2HuqZDSC2CdAbdcsQfeyjGLO5tN34XDl5a','김 세르겔링',NULL,'4444444',NULL,'N',878,NULL,NULL,NULL,'Y',NULL,'241422415465435453','job bna  job bna job bna job','','','','2023-05-12 09:04:53',NULL,NULL,NULL,'Invalid date','아이티위자드직원입니다요'),
	 ('dkjkj@naver.com','$2a$10$sDWdlB2EJgdbH3B0oyXiKOZZ2aLxTwW21MoR6sBCQzyVdUKhYl.U2','테스트1234',NULL,'70110390',NULL,'N',879,NULL,NULL,NULL,'Y',NULL,'95954740','직업 부분입니다','','','','2023-05-12 09:06:56',NULL,NULL,NULL,'Invalid date','아이티위자드직원'),
	 ('sdsd@empas.com','$2a$10$Jsv17kY7bKQN2qjxJ9TAgutpyeX9vRfYcXQbsKjiw5qsyCvEV8Tfm','테스트12345',NULL,'4444444555',NULL,'N',0,NULL,NULL,NULL,'Y',NULL,'95954740','job bna  job bna job bna job','','','','2023-05-12 09:13:20',NULL,NULL,NULL,'Invalid date','description description '),
	 ('djfhdjfh@mail.com','$2a$10$jo121K2dpS9eK5tALoHrQejc30USZv5sJoX0nIKWvp0gvNLYCyYHS','test123456',NULL,'70110393',NULL,'N',0,NULL,NULL,NULL,'Y',NULL,'24354335435','job bn aaa','','','','2023-05-12 09:14:20',NULL,NULL,NULL,'Invalid date','description description '),
	 ('seegii@gmail.com','$2a$10$gXBWrfvLQs6eq4DSoRtY8.AX4rXMF2Ye1JG/48y1bAatGq34KfJ6y','Seegii',NULL,'702555415',NULL,'N',880,NULL,NULL,NULL,'Y',NULL,'95954740','직업직업직업','','','','2023-05-12 10:31:05',NULL,NULL,NULL,'Invalid date','아이티위자드를 사랑하는 직원입니다'),
	 ('USER123','$2a$10$JgCWy9R657QVYI3p2R7G0eGcFQAPuV4xZ0QBrD8UqvgqpOrtlGJJ6','Test User',NULL,'70110393',NULL,'N',0,NULL,NULL,NULL,'Y','F','95954740','Job job','','','','2023-05-22 09:43:44',NULL,'20230522104436',NULL,'2023-05-22','introduction '),
	 ('test test','$2a$10$f8ePp/h7izHCL0ZgN08G5.NEU8i.eTQnx.at5uB4MHzMzdHaO528u','Sergelen','sejin9642@gmail.com','95954740',NULL,'N',0,NULL,NULL,NULL,'Y','F','95954740','직업job',NULL,NULL,NULL,'2023-05-22 09:47:11',NULL,'20230522105021',NULL,'1989-03-13','introduction'),
	 ('tester','$2a$10$OSlYOn55iHUUHCYhec6DYu0cbZvzeKOYI8wFlkmPXn7kwo8bAUb2y','tester1','tester@gmail.com','99119911',NULL,'N',0,NULL,NULL,NULL,NULL,'M',NULL,NULL,NULL,NULL,NULL,'2023-05-24 16:19:33',NULL,NULL,NULL,'2023-05-01',NULL),
	 ('batchimeg2@gmail.com','$2a$10$2y27tydTm0ejJ4/nv/n9f.dLxpIlb/P7bzpo6vBtaRFSEO8NTHhxu','Batchimeg',NULL,'123456789',NULL,'N',0,NULL,NULL,NULL,'N','F',NULL,NULL,NULL,NULL,NULL,'2023-05-29 15:50:13',NULL,NULL,NULL,'2023-05-10',NULL);
INSERT INTO tagocms.t_user (username,password,fullname,email,phone,last_login_date,is_deleted,file_group_seq,temp_pwd,temp_pwd_cre_dt,temp_pwd_end_dt,use_yn,gender,mobile,job,zip,addr,addr_etc,created_date,created_by,modified_date,modified_by,birthday,introduction) VALUES
	 ('tester123@gmail.com','$2a$10$lWJdvZ8htxNgaLYrWZUlauyT4uhvS8S5PvNeJqrN.sR3VmoYicSIO','tester',NULL,'01099119911',NULL,'N',0,NULL,NULL,NULL,'N','M',NULL,NULL,NULL,NULL,NULL,'2023-06-06 17:13:30',NULL,NULL,NULL,'1989-10-10',NULL),
	 ('buiinakh@gmail.com','$2a$10$Bj29XqKOWKGKs/N0ZTS4.evHsbLZsyJjVi4IGd4yGUDybJti4KO6a','nan_naya',NULL,'34235324534',NULL,'N',942,NULL,NULL,NULL,'Y','M','4235234523452345','기획자입니다','08594','서울 금천구 가산디지털1로 5','402호','2023-06-07 10:07:46',NULL,NULL,NULL,NULL,'안녕하세요'),
	 ('boomboompow@naver.com','$2a$10$5W8wBrrNm0zJRRlF5a/f8.3yLTs9kkJav/cEtvA290o56bcXughF6','boomboom',NULL,'3424234234',NULL,'N',943,NULL,NULL,NULL,'Y','F','365464546',' 디자이너','46769','부산 강서구 가덕해안로 3','234지','2023-06-07 10:24:52',NULL,NULL,NULL,NULL,'저는 웹디자이너입니다'),
	 ('boompow@naver.com','$2a$10$AuTHSLkoepUlHrna1ct/5eXAEg11QIKcHlq7K.tuu2H7DfHWadmem','boomboom',NULL,'3424234234',NULL,'N',944,NULL,NULL,NULL,'Y','F','365464546',' 디자이너','46769','부산 강서구 가덕해안로 3','234지','2023-06-07 10:25:44',NULL,NULL,NULL,NULL,'저는 웹디자이너입니다'),
	 ('likeG6@gmail.com','$2a$10$u6IravA2AXqBIwW0OnAO7eh4QbA/O9oG9XkD7cjsIHHgUjQhvrsbi','G6234',NULL,'985861232',NULL,'N',945,NULL,NULL,NULL,'Y','M','01023235656','퍼블리셔입니다','08261','서울 구로구 부일로 831','하이츠아파트 324','2023-06-07 10:37:58',NULL,NULL,NULL,NULL,'실력있는 퍼블리셔입니다'),
	 ('tester111@gmail.com','$2a$10$6wALh683xULqLHw1BP9R9uUInnQ4AVjtmm1rX8itZcjQG1YDoNmFy','tester123',NULL,'01031231212312',NULL,'N',0,NULL,NULL,NULL,'Y','M','123123123123','12312312312',NULL,NULL,NULL,'2023-06-08 10:23:50',NULL,'20230608114931',NULL,'2006-06-14','3123123123'),
	 ('testing_beta@gmail.com','$2a$10$WTfGv5WszfPFumqDkVcsseTc8XcNNyCYayUg87wyapjj84OV5Yxo2','Betty',NULL,'97896756',NULL,'N',949,NULL,NULL,NULL,'Y','F','01086786578','웹디자이너','06143','서울 강남구 선릉로107길 24','펠리초 458호 123층 ','2023-06-08 10:38:32',NULL,NULL,NULL,NULL,'웹디자이너'),
	 ('ariel@naver.com','$2a$10$584lPYXT5U9qqpgsBCdpQey.oh94.1liQY3BJxe967o1RaQjjyihK','Ariana not Grande ',NULL,'985861232',NULL,'N',951,NULL,NULL,NULL,'Y','F','01023235656','퍼포머스마케터','01810','서울 노원구 공릉로 264','그랜드하얏트 23','2023-06-12 12:28:07',NULL,NULL,NULL,NULL,'마케터입니다'),
	 ('tester333@gmail.com','$2a$10$b..Ru9zwqvgLTNzF862T8eLT/UdM4RmChLzx8AjpR0cM9QDA06iyG','tester1',NULL,'991199112221',NULL,'N',0,NULL,NULL,NULL,'Y','F',NULL,NULL,NULL,NULL,NULL,'2023-06-15 15:13:10',NULL,NULL,NULL,'2023-06-16',NULL);
