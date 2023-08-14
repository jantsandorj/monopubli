-- MySQL dump 10.13  Distrib 5.5.62, for Win64 (AMD64)
--
-- Host: 127.0.0.1    Database: monopubli
-- ------------------------------------------------------
-- Server version	8.0.33-0ubuntu0.20.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `common_code`
--

DROP TABLE IF EXISTS `common_code`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `common_code` (
  `id` int NOT NULL,
  `code_group` varchar(255) DEFAULT NULL,
  `code_group_nm` varchar(255) DEFAULT NULL,
  `code` varchar(255) DEFAULT NULL,
  `code_eng_nm` varchar(255) DEFAULT NULL,
  `use_yn` varchar(2) DEFAULT NULL,
  `code_description` text,
  `created_by` int DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_by` int DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  `is_deleted` varchar(2) DEFAULT NULL,
  `is_active` varchar(2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `t_admin`
--

DROP TABLE IF EXISTS `t_admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_admin` (
  `seq` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `fullname` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `last_login_date` varchar(255) DEFAULT NULL,
  `failed_login_count` varchar(255) DEFAULT NULL,
  `created_date` varchar(255) DEFAULT NULL,
  `created_by` varchar(255) DEFAULT NULL,
  `modified_date` varchar(255) DEFAULT NULL,
  `modified_by` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `is_deleted` varchar(255) DEFAULT NULL,
  `temp_pwd` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `temp_pwd_cre_dt` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `temp_pwd_end_dt` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `file_group_seq` int DEFAULT NULL,
  `use_yn` varchar(1) DEFAULT 'N',
  `mobile` varchar(45) DEFAULT NULL,
  `task_in_charge` varchar(45) DEFAULT NULL,
  `author_cd` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`seq`)
) ENGINE=InnoDB AUTO_INCREMENT=62 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `t_author_info`
--

DROP TABLE IF EXISTS `t_author_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_author_info` (
  `author_cd` varchar(35) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `author_nm` varchar(256) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `author_desc` varchar(256) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `use_yn` varchar(1) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `is_deleted` varchar(1) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT 'N',
  `created_date` varchar(25) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `modified_date` varchar(25) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `t_author_role`
--

DROP TABLE IF EXISTS `t_author_role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_author_role` (
  `menu_seq` int NOT NULL,
  `author_cd` varchar(45) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `created_by` varchar(45) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `created_date` varchar(25) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `t_banner`
--

DROP TABLE IF EXISTS `t_banner`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_banner` (
  `seq` int NOT NULL AUTO_INCREMENT,
  `banner_nm` varchar(255) DEFAULT NULL,
  `type` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `media_type` varchar(255) DEFAULT NULL,
  `link_yn` varchar(5) DEFAULT NULL,
  `window_yn` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT 'off',
  `link` varchar(100) DEFAULT NULL,
  `pc_file_group_seq` int DEFAULT NULL,
  `mobile_file_group_seq` int DEFAULT NULL,
  `image_alt` varchar(45) DEFAULT NULL,
  `main_text` varchar(100) DEFAULT NULL,
  `sub_text` varchar(150) DEFAULT NULL,
  `start_date` varchar(255) DEFAULT NULL,
  `end_date` varchar(255) DEFAULT NULL,
  `sort_no` int DEFAULT NULL,
  `use_yn` varchar(1) DEFAULT NULL,
  `is_deleted` varchar(1) DEFAULT NULL,
  `created_date` varchar(255) DEFAULT NULL,
  `created_by` varchar(255) DEFAULT NULL,
  `modified_date` varchar(255) DEFAULT NULL,
  `modified_by` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`seq`)
) ENGINE=InnoDB AUTO_INCREMENT=208 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `t_board`
--

DROP TABLE IF EXISTS `t_board`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_board` (
  `seq` bigint unsigned NOT NULL AUTO_INCREMENT,
  `board_master_seq` bigint unsigned NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `memo` text,
  `public_yn` char(1) DEFAULT 'Y',
  `password` varchar(255) DEFAULT NULL,
  `start_date` date DEFAULT NULL,
  `start_time` time DEFAULT NULL,
  `end_date` date DEFAULT NULL,
  `end_time` time DEFAULT NULL,
  `contact_name` varchar(255) DEFAULT NULL,
  `contact_phone` varchar(255) DEFAULT NULL,
  `contact_email` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `featured_yn` char(1) DEFAULT 'Y',
  `order_no` int DEFAULT NULL,
  `view_count` int DEFAULT NULL,
  `use_yn` char(1) DEFAULT NULL,
  `custom_field1` varchar(255) DEFAULT NULL,
  `custom_field2` varchar(255) DEFAULT NULL,
  `custom_field3` varchar(255) DEFAULT NULL,
  `custom_field4` varchar(255) DEFAULT NULL,
  `custom_field5` varchar(255) DEFAULT NULL,
  `file_group_seq` bigint unsigned DEFAULT NULL,
  `created_date` varchar(14) NOT NULL DEFAULT '',
  `created_by` varchar(255) NOT NULL DEFAULT '',
  `created_ip` varchar(255) NOT NULL DEFAULT '',
  `modified_date` varchar(14) NOT NULL DEFAULT '',
  `modified_ip` varchar(255) NOT NULL DEFAULT '',
  `modified_by` varchar(255) NOT NULL DEFAULT '',
  `is_deleted` char(1) NOT NULL DEFAULT 'N',
  PRIMARY KEY (`seq`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `t_board_category`
--

DROP TABLE IF EXISTS `t_board_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_board_category` (
  `seq` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `order_number` int DEFAULT NULL,
  `created_date` varchar(255) DEFAULT NULL,
  `created_by` varchar(255) DEFAULT NULL,
  `modified_date` varchar(255) DEFAULT NULL,
  `modified_by` varchar(255) DEFAULT NULL,
  `is_deleted` varchar(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT 'N',
  PRIMARY KEY (`seq`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `t_board_column`
--

DROP TABLE IF EXISTS `t_board_column`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_board_column` (
  `board_master_seq` int DEFAULT NULL,
  `column_name` varchar(255) DEFAULT NULL,
  `column_type` varchar(255) DEFAULT NULL,
  `show_on_list` varchar(1) DEFAULT NULL,
  `show_on_view` varchar(1) DEFAULT NULL,
  `show_on_create` varchar(1) DEFAULT NULL,
  `show_on_update` varchar(1) DEFAULT NULL,
  `column_class` varchar(255) DEFAULT NULL,
  `is_required` varchar(1) DEFAULT NULL,
  `created_date` varchar(255) DEFAULT NULL,
  `created_by` varchar(255) DEFAULT NULL,
  `modified_date` varchar(255) DEFAULT NULL,
  `modified_by` varchar(255) DEFAULT NULL,
  `is_deleted` varchar(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT 'N'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `t_board_master`
--

DROP TABLE IF EXISTS `t_board_master`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_board_master` (
  `seq` int NOT NULL AUTO_INCREMENT,
  `board_category` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `has_attach` varchar(1) DEFAULT NULL,
  `max_attach` int DEFAULT NULL,
  `max_file_size` int DEFAULT NULL,
  `allowed_file_ext` varchar(255) DEFAULT NULL,
  `created_date` varchar(255) DEFAULT NULL,
  `created_by` varchar(255) DEFAULT NULL,
  `modified_date` varchar(255) DEFAULT NULL,
  `modified_by` varchar(255) DEFAULT NULL,
  `is_deleted` varchar(1) DEFAULT NULL,
  PRIMARY KEY (`seq`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `t_code`
--

DROP TABLE IF EXISTS `t_code`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_code` (
  `seq` int NOT NULL AUTO_INCREMENT,
  `code_group` varchar(255) NOT NULL,
  `code_group_nm` varchar(255) DEFAULT NULL,
  `code` varchar(255) NOT NULL,
  `code_nm` varchar(255) DEFAULT NULL,
  `code_eng_nm` varchar(255) DEFAULT NULL,
  `use_yn` varchar(1) NOT NULL DEFAULT 'N',
  `code_descript` text,
  `order_no` int DEFAULT NULL,
  `created_by` varchar(50) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `created_ip` varchar(255) DEFAULT NULL,
  `modified_by` varchar(50) DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  `modified_ip` varchar(255) DEFAULT NULL,
  `is_deleted` varchar(1) DEFAULT 'N',
  `is_active` varchar(1) DEFAULT 'N',
  PRIMARY KEY (`seq`)
) ENGINE=InnoDB AUTO_INCREMENT=90 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `t_common_code`
--

DROP TABLE IF EXISTS `t_common_code`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_common_code` (
  `group_code` varchar(255) DEFAULT NULL,
  `item_code` varchar(255) DEFAULT NULL,
  `group_name` varchar(255) DEFAULT NULL,
  `item_desc` varchar(255) CHARACTER SET armscii8 COLLATE armscii8_general_ci DEFAULT NULL,
  `use_yn` varchar(1) DEFAULT NULL,
  `item_name` varchar(255) DEFAULT NULL,
  `order_number` int DEFAULT NULL,
  `created_date` varchar(255) DEFAULT NULL,
  `created_by` varchar(255) DEFAULT NULL,
  `modified_date` varchar(255) DEFAULT NULL,
  `modified_by` varchar(255) DEFAULT NULL,
  `is_deleted` varchar(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `t_content`
--

DROP TABLE IF EXISTS `t_content`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_content` (
  `seq` int NOT NULL AUTO_INCREMENT,
  `cs_code` varchar(255) NOT NULL,
  `title` json DEFAULT NULL,
  `subject` json DEFAULT NULL,
  `content_json` json DEFAULT NULL,
  `status_cd` varchar(255) DEFAULT NULL,
  `view_cnt` int DEFAULT '0',
  `created_by` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `created_ip` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `created_date` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `modified_by` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `modified_ip` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `modified_date` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `is_deleted` varchar(1) DEFAULT 'N',
  PRIMARY KEY (`seq`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `t_content_old`
--

DROP TABLE IF EXISTS `t_content_old`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_content_old` (
  `seq` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `has_menu` varchar(1) DEFAULT NULL,
  `menu_seq` int DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `content_json` json DEFAULT NULL,
  `sanitized_content` text,
  `created_date` varchar(255) DEFAULT NULL,
  `created_by` varchar(255) DEFAULT NULL,
  `modified_date` varchar(255) DEFAULT NULL,
  `modified_by` varchar(255) DEFAULT NULL,
  `is_deleted` varchar(1) DEFAULT NULL,
  PRIMARY KEY (`seq`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `t_content_settings`
--

DROP TABLE IF EXISTS `t_content_settings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_content_settings` (
  `code` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `menu_seq` bigint DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `use_yn` varchar(1) DEFAULT NULL,
  `created_by` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `created_ip` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `created_date` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `modified_by` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `modified_ip` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `modified_date` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `is_deleted` varchar(1) DEFAULT 'N',
  `fields_json` json DEFAULT NULL,
  `content_type` varchar(100) DEFAULT NULL,
  `content` text,
  `file_group_seq` int DEFAULT NULL,
  PRIMARY KEY (`code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `t_faq`
--

DROP TABLE IF EXISTS `t_faq`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_faq` (
  `seq` int NOT NULL AUTO_INCREMENT,
  `question` varchar(255) DEFAULT NULL,
  `answer` text,
  `category_cd` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `file_group_seq` int DEFAULT NULL,
  `exposure_yn` varchar(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `created_date` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `created_by` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `modified_date` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `modified_by` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `is_deleted` varchar(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT 'N',
  `modified_ip` varchar(255) DEFAULT NULL,
  `created_ip` varchar(255) DEFAULT NULL,
  `view_cnt` int DEFAULT '0',
  PRIMARY KEY (`seq`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `t_file`
--

DROP TABLE IF EXISTS `t_file`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_file` (
  `file_seq` int NOT NULL AUTO_INCREMENT,
  `file_group_seq` int DEFAULT NULL,
  `order_number` int DEFAULT NULL,
  `stored_file_name` varchar(255) DEFAULT NULL,
  `file_ext` varchar(255) DEFAULT NULL,
  `file_size` int DEFAULT NULL,
  `stored_path` varchar(255) DEFAULT NULL,
  `view_url` varchar(255) DEFAULT NULL,
  `download_url` varchar(255) DEFAULT NULL,
  `delete_url` varchar(255) DEFAULT NULL,
  `created_date` varchar(255) DEFAULT NULL,
  `created_by` varchar(255) DEFAULT NULL,
  `modified_date` varchar(255) DEFAULT NULL,
  `modified_by` varchar(255) DEFAULT NULL,
  `is_deleted` varchar(1) DEFAULT 'N',
  `file_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`file_seq`)
) ENGINE=InnoDB AUTO_INCREMENT=1013 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `t_file_group`
--

DROP TABLE IF EXISTS `t_file_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_file_group` (
  `file_group_seq` int NOT NULL AUTO_INCREMENT,
  `table_name` varchar(255) DEFAULT NULL,
  `created_date` varchar(255) DEFAULT NULL,
  `created_by` varchar(255) DEFAULT NULL,
  `modified_date` varchar(255) DEFAULT NULL,
  `modified_by` varchar(255) DEFAULT NULL,
  `is_deleted` varchar(1) DEFAULT NULL,
  PRIMARY KEY (`file_group_seq`)
) ENGINE=InnoDB AUTO_INCREMENT=960 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `t_mail_history`
--

DROP TABLE IF EXISTS `t_mail_history`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_mail_history` (
  `seq` bigint NOT NULL AUTO_INCREMENT,
  `mail_template_seq` bigint NOT NULL,
  `target_group` varchar(5) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT 'ALL | USER | ADMIN',
  `sender_seq` bigint DEFAULT NULL,
  `sender_username` varchar(255) DEFAULT NULL,
  `sender_fullname` varchar(255) DEFAULT NULL,
  `status` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT 'SUCCESS | FAILED | SCHEDULED',
  `recipient_cc` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `recipient_bcc` varchar(255) DEFAULT NULL,
  `subject` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `send_date` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `created_date` varchar(255) DEFAULT NULL,
  `is_deleted` char(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT 'N',
  PRIMARY KEY (`seq`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `t_mail_template`
--

DROP TABLE IF EXISTS `t_mail_template`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_mail_template` (
  `seq` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `target_group` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT 'ALL | USER | ADMIN',
  `subject` varchar(255) DEFAULT NULL,
  `content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `item_date` varchar(255) DEFAULT NULL,
  `item_user_seq` bigint DEFAULT NULL,
  `item_username` varchar(255) DEFAULT NULL,
  `item_user_fullname` varchar(255) DEFAULT NULL,
  `item_site_name` varchar(255) DEFAULT NULL,
  `item_site_url` varchar(255) DEFAULT NULL,
  `item_site_phone` varchar(255) DEFAULT NULL,
  `use_yn` char(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT 'Y',
  `created_date` varchar(255) DEFAULT NULL,
  `created_by` varchar(100) DEFAULT NULL,
  `modified_date` varchar(255) DEFAULT NULL,
  `modified_by` varchar(100) DEFAULT NULL,
  `is_deleted` char(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT 'N',
  PRIMARY KEY (`seq`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `t_menu`
--

DROP TABLE IF EXISTS `t_menu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_menu` (
  `seq` int NOT NULL AUTO_INCREMENT,
  `menu_name` varchar(255) DEFAULT NULL,
  `menu_name_kr` varchar(255) DEFAULT NULL,
  `menu_url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `order_number` int DEFAULT NULL,
  `parent_seq` int DEFAULT NULL,
  `position_type` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `menu_type` varchar(50) DEFAULT NULL,
  `created_date` varchar(255) DEFAULT NULL,
  `created_by` varchar(255) DEFAULT NULL,
  `modified_date` varchar(255) DEFAULT NULL,
  `modified_by` varchar(255) DEFAULT NULL,
  `is_deleted` varchar(1) DEFAULT NULL,
  `use_yn` varchar(1) DEFAULT NULL,
  `header_text` varchar(255) DEFAULT NULL,
  `show_yn` varchar(1) DEFAULT NULL,
  `menu_id` varchar(50) DEFAULT NULL,
  `admin_menu_yn` varchar(1) DEFAULT 'N',
  `file_group_seq` int DEFAULT NULL,
  PRIMARY KEY (`seq`)
) ENGINE=InnoDB AUTO_INCREMENT=334 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `t_menu_content`
--

DROP TABLE IF EXISTS `t_menu_content`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_menu_content` (
  `seq` int NOT NULL AUTO_INCREMENT,
  `menu_id` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `content` text CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci,
  `is_deleted` varchar(1) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `use_yn` varchar(1) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `file_group_seq` int DEFAULT NULL,
  `created_by` varchar(45) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `created_date` varchar(45) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `modified_by` varchar(45) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `modified_date` varchar(45) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`seq`)
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `t_notice`
--

DROP TABLE IF EXISTS `t_notice`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_notice` (
  `seq` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `division_yn` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `content` text,
  `file_group_seq` int DEFAULT NULL,
  `reservation_date` varchar(255) DEFAULT NULL,
  `exposure_yn` varchar(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `created_date` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `created_by` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `modified_date` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `modified_by` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `is_deleted` varchar(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT 'N',
  `created_ip` varchar(255) DEFAULT NULL,
  `modified_ip` varchar(255) DEFAULT NULL,
  `view_cnt` int DEFAULT '0',
  `start_date` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`seq`)
) ENGINE=InnoDB AUTO_INCREMENT=103 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `t_popup`
--

DROP TABLE IF EXISTS `t_popup`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_popup` (
  `seq` int NOT NULL AUTO_INCREMENT,
  `subject` varchar(255) DEFAULT NULL,
  `content` text,
  `popup_type` varchar(100) DEFAULT NULL,
  `link_yn` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `window_yn` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT 'off',
  `link_url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `pc_file_group_seq` int DEFAULT NULL,
  `mobile_file_group_seq` int DEFAULT NULL,
  `image_desc` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `position_x` int DEFAULT NULL,
  `position_y` int DEFAULT NULL,
  `height` int DEFAULT NULL,
  `width` int DEFAULT NULL,
  `start_date` varchar(255) DEFAULT NULL,
  `end_date` varchar(255) DEFAULT NULL,
  `sort_no` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `use_yn` varchar(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT 'Y',
  `is_deleted` varchar(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `created_date` varchar(255) DEFAULT NULL,
  `created_by` varchar(255) DEFAULT NULL,
  `modified_date` varchar(255) DEFAULT NULL,
  `modified_by` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`seq`)
) ENGINE=InnoDB AUTO_INCREMENT=115 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `t_qna`
--

DROP TABLE IF EXISTS `t_qna`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_qna` (
  `seq` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `content` text,
  `answer` text,
  `answer_username` varchar(255) DEFAULT NULL,
  `created_date` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `created_by` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `modified_date` varchar(255) DEFAULT NULL,
  `modified_by` varchar(255) DEFAULT NULL,
  `is_deleted` varchar(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT 'N',
  `is_secret` varchar(1) DEFAULT NULL,
  `is_answered` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `view_count` int DEFAULT '0',
  `file_group_seq` int DEFAULT NULL,
  `answer_file_group_seq` int DEFAULT NULL,
  PRIMARY KEY (`seq`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `t_site_info`
--

DROP TABLE IF EXISTS `t_site_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_site_info` (
  `site_seq` int NOT NULL,
  `site_nm` varchar(45) DEFAULT NULL,
  `site_url` varchar(45) DEFAULT NULL,
  `contact_tel` varchar(45) DEFAULT NULL,
  `contact_email` varchar(45) DEFAULT NULL,
  `contact_mobile` varchar(45) DEFAULT NULL,
  `zip` varchar(45) DEFAULT NULL,
  `addr` varchar(100) DEFAULT NULL,
  `addr_etc` varchar(45) DEFAULT NULL,
  `copyright` varchar(45) DEFAULT NULL,
  `fav_file_group_seq` int DEFAULT NULL,
  `header_file_group_seq` int DEFAULT NULL,
  `footer_file_group_seq` int DEFAULT NULL,
  `footer_content` text,
  `terms_use` text,
  `privacy_policy` text,
  `modified_date` varchar(45) DEFAULT NULL,
  `modified_by` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`site_seq`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `t_system_settings`
--

DROP TABLE IF EXISTS `t_system_settings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_system_settings` (
  `site_seq` int NOT NULL AUTO_INCREMENT,
  `admin_session_time_yn` varchar(1) NOT NULL DEFAULT 'N',
  `admin_session_time` int NOT NULL DEFAULT '0',
  `admin_passchange_cycle_yn` varchar(1) NOT NULL DEFAULT 'N',
  `admin_passchange_cycle` int DEFAULT '0',
  `admin_access_ip_yn` varchar(1) NOT NULL DEFAULT 'N',
  `admin_access_ip` varchar(255) DEFAULT NULL,
  `user_session_time_yn` varchar(1) NOT NULL DEFAULT 'N',
  `user_session_time` int NOT NULL DEFAULT '0',
  `user_passchange_cycle_yn` varchar(1) NOT NULL DEFAULT 'N',
  `user_passchange_cycle` int NOT NULL DEFAULT '0',
  `modified_date` varchar(50) DEFAULT NULL,
  `modified_by` varchar(150) DEFAULT NULL,
  `google_yn` varchar(1) NOT NULL DEFAULT 'N',
  `google_acc_token` varchar(255) DEFAULT NULL,
  `facebook_yn` varchar(1) NOT NULL DEFAULT 'N',
  `facebook_acc_token` varchar(255) DEFAULT NULL,
  `naver_yn` varchar(1) NOT NULL DEFAULT 'N',
  `naver_acc_token` varchar(255) DEFAULT NULL,
  `kakao_yn` varchar(1) NOT NULL DEFAULT 'N',
  `kakao_acc_token` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`site_seq`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `t_user`
--

DROP TABLE IF EXISTS `t_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_user` (
  `seq` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `fullname` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `last_login_date` varchar(255) DEFAULT NULL,
  `is_deleted` varchar(1) DEFAULT NULL,
  `file_group_seq` int DEFAULT NULL,
  `temp_pwd` varchar(255) DEFAULT NULL,
  `temp_pwd_cre_dt` varchar(45) DEFAULT NULL,
  `temp_pwd_end_dt` varchar(45) DEFAULT NULL,
  `use_yn` varchar(1) DEFAULT 'N',
  `gender` varchar(1) DEFAULT NULL,
  `mobile` varchar(45) DEFAULT NULL,
  `job` varchar(45) DEFAULT NULL,
  `zip` varchar(45) DEFAULT NULL,
  `addr` varchar(255) DEFAULT NULL,
  `addr_etc` varchar(45) DEFAULT NULL,
  `created_date` varchar(255) DEFAULT NULL,
  `created_by` varchar(255) DEFAULT NULL,
  `modified_date` varchar(255) DEFAULT NULL,
  `modified_by` varchar(255) DEFAULT NULL,
  `birthday` varchar(45) DEFAULT NULL,
  `introduction` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`seq`)
) ENGINE=InnoDB AUTO_INCREMENT=136 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `t_user_profile`
--

DROP TABLE IF EXISTS `t_user_profile`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_user_profile` (
  `user_seq` int NOT NULL,
  `address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `zipcode` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `birthday` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `memo` text,
  `created_date` varchar(255) DEFAULT NULL,
  `created_by` varchar(255) DEFAULT NULL,
  `modified_date` varchar(255) DEFAULT NULL,
  `modified_by` varchar(255) DEFAULT NULL,
  `is_deleted` varchar(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping routines for database 'tagocms'
--
/*!50003 DROP PROCEDURE IF EXISTS `FN_REORDER` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE  PROCEDURE `FN_REORDER`(

	IN `currentSeq` INT,

	IN `upperMenuSeq` INT,

	IN `parentMenuSeq` INT

)
BEGIN



	DECLARE counter_order INT;

	

	SET @counter_order = 0;	

	

	UPDATE t_menu AS A, (SELECT TEMP.* FROM (SELECT order_number FROM t_menu WHERE seq = upperMenuSeq UNION SELECT 0 order_number) TEMP ORDER BY TEMP.order_number DESC LIMIT 1) AS B

	SET 

		A.order_number = @counter_order := @counter_order + 1 

	WHERE A.parent_seq = parentMenuSeq AND A.seq != currentSeq AND A.order_number <= B.order_number

	ORDER BY A.order_number ASC;

	

	UPDATE t_menu AS A, (SELECT TEMP.* FROM (SELECT order_number FROM t_menu WHERE seq = upperMenuSeq UNION SELECT 0 order_number) TEMP ORDER BY TEMP.order_number DESC LIMIT 1) AS B

	SET A.order_number = B.order_number + 1

	WHERE A.seq = currentSeq;

	

	SET @counter_order := @counter_order + 1 ;

	

	UPDATE t_menu AS A, (SELECT TEMP.* FROM (SELECT order_number FROM t_menu WHERE seq = upperMenuSeq UNION SELECT 0 order_number) TEMP ORDER BY TEMP.order_number DESC LIMIT 1) AS B

	SET 

		A.order_number = @counter_order := @counter_order + 1 

	WHERE A.parent_seq = parentMenuSeq AND A.seq != currentSeq AND A.order_number > B.order_number

	ORDER BY A.order_number ASC;

	

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-27 17:02:57
