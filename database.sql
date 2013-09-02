-- phpMyAdmin SQL Dump
-- version 3.3.3
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2012 年 07 月 01 日 22:38
-- 服务器版本: 5.0.91
-- PHP 版本: 5.2.13

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 数据库: `sign`
--

-- --------------------------------------------------------

--
-- 表的结构 `wtow`
--

CREATE TABLE IF NOT EXISTS `wtow` (
  `id` int(9) NOT NULL auto_increment,
  `tid` int(9) NOT NULL,
  `words` text character set utf8 collate utf8_unicode_ci NOT NULL,
  `name` varchar(16) character set utf8 collate utf8_unicode_ci NOT NULL,
  `time` datetime NOT NULL,
  `sort` varchar(10) character set utf8 collate utf8_unicode_ci NOT NULL,
  `other` text character set utf8 collate utf8_unicode_ci NOT NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=16 ;

--
-- 转存表中的数据 `wtow`
--

INSERT INTO `wtow` (`id`, `tid`, `words`, `name`, `time`, `sort`, `other`) VALUES
(1, 1, '测试数据', 'sign', '2012-07-18 00:00:00', 'words', ''),
(2, 1, '测试2', 'xday', '0000-00-00 00:00:00', 'article', ''),
(3, 1, '以文章和留言两种不同的方式，区分各个区块的颜色<br/>另外，是否有视频也要以颜色区分，大致分类为留言（words to words），视频，游戏<br/>每次都在各个类别中随机抽几篇以及最新的抽1篇，或者不抽，因为游戏那项及可能很久不会更新，而留言也更新的太快了，另外，最好手机一下各篇的点击率，以及，各篇出现按照以前设想的，以中等热门为重点进行抽取', 'xday', '2012-07-01 03:13:56', 'game', ''),
(4, 1, '视频颜色', 'video', '2012-07-31 14:00:14', 'video', '<embed src="http://www.tudou.com/v/NW9Ck1kUSrU/&resourceId=0_05_02_99/v.swf" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" wmode="opaque" width="480" height="400"></embed>'),
(5, 0, '$word', '$name', '2012-07-01 21:24:52', 'words', ''),
(6, 0, '''$word''', '''$name''', '2012-07-01 21:29:20', 'words', ''),
(7, 2, 'cehis完成', 'name', '2012-07-01 21:31:13', 'words', ''),
(8, 5, '', 'xx', '2012-07-01 21:52:08', 'words', ''),
(9, 4, '', 'xx', '2012-07-01 21:52:18', 'words', ''),
(10, 4, '', 'name', '2012-07-01 21:54:08', 'words', ''),
(11, 1, '', 'name', '2012-07-01 21:55:06', 'words', ''),
(12, 0, '', '', '2012-07-01 22:14:39', '', ''),
(13, 2, 'words', 'sign', '2012-07-01 22:16:23', 'text', 'aa'),
(14, 0, 'words', '', '2012-07-01 22:17:35', 'text', ''),
(15, 0, 'words', '', '2012-07-01 22:20:29', 'text', '<img src="images/01.png"/>');
