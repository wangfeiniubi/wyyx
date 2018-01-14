SET NAMES UTF8;
DROP DATABASE IF EXISTS wyyx;
CREATE DATABASE wyyx CHARSET=UTF8;
USE wyyx;

CREATE TABLE yx_products(
    pid INT PRIMARY KEY AUTO_INCREMENT,		#商品ID(同一商品的总称)
    fid INT,					#分类,类别ID(二级分类，例如家具)
    title VARCHAR(128),				#主标题
    producter VARCHAR(32),			#制造商
    subtitle VARCHAR(128),			#副标题
    price DECIMAL(10,2),			#价格，售价
    evaluate INT,				#评论
    coupon VARCHAR(32),				#优惠券
    promotion VARCHAR(32),			#促销
    integral VARCHAR(32),			#积分
    promise VARCHAR(1024),			#服务承诺  
    shelf_time BIGINT,				#上架时间
    is_onsale BOOLEAN,				#是否促销中
    onsale_price DECIMAL(10,2),			#促销价格
    onsale_time BIGINT,				#促销截止时间
    cm_sm VARCHAR(1024),			#通用图片(小)
    cm_md VARCHAR(1024),			#通用图片(中)
    cm_lg VARCHAR(1024),			#通用图片(大)
    details VARCHAR(1024)			#产品详细说明
);
CREATE TABLE yx_products_detail(
    id INT PRIMARY KEY,				#商品ID(区分颜色、规格)
    pid INT,					#商品ID(同一商品的总称)
    spec VARCHAR(64),				#规格
    color VARCHAR(16),				#颜色    
    sold_count INT,				#已售出件数
    stock INT,					#库存件数
    sm VARCHAR(128),				#小图片路径
    md VARCHAR(128),				#中图片路径
    lg VARCHAR(128)				#大图片路径
);
CREATE TABLE yx_products_family(
    fid INT PRIMARY KEY AUTO_INCREMENT,		#分类,类别ID(二级分类，例如家具)
    cid INT,					#分类ID(一级分类，例如居家)
    fname VARCHAR(32),				#分类,类别名称(二级分类，例如家具)
    cname VARCHAR(32)				#分类名称(一级分类，例如居家)
);
INSERT INTO yx_products_family VALUES
	(1,1,'床品套件','居家'),
	(2,1,'被枕','居家'),
	(3,1,'家具','居家'),
	(4,1,'收纳','居家'),
	(5,1,'布艺软装','居家'),
	(6,1,'家饰','居家'),
	(7,1,'宠物','居家'),
	(8,2,'咖啡具','餐厨'),
	(9,2,'水具酒具','餐厨'),
	(10,2,'锅具','餐厨'),
	(11,2,'餐具','餐厨'),
	(12,2,'功能厨具','餐厨'),
	(13,2,'茶具','餐厨'),
	(14,2,'清洁保鲜','餐厨'),
	(15,2,'刀剪砧板','餐厨'),
	(16,3,'行李箱','配件'),
	(17,3,'男士包袋','配件'),
	(18,3,'女士包袋','配件'),
	(19,3,'钱包及小皮件','配件'),
	(20,3,'男鞋','配件'),
	(21,3,'女鞋','配件'),
	(22,3,'拖鞋','配件'),
	(23,3,'鞋配','配件'),
	(24,3,'围巾件套','配件'),
	(25,3,'配饰','配件'),
	(26,3,'眼镜','配件'),
	(27,4,'毛衫','服装'),
	(28,4,'外衣','服装'),
	(29,4,'卫衣','服装'),
	(30,4,'裤装','服装'),
	(31,4,'衬衫','服装'),
	(32,4,'T恤','服装'),
	(33,4,'内衣','服装'),
	(34,4,'内裤','服装'),
	(35,4,'袜子','服装'),
	(36,4,'丝袜','服装'),
	(37,4,'家居服','服装'),
	(38,4,'裙装','服装'),
	(39,5,'生活电器','电器'),
	(40,5,'厨房电器','电器'),
	(41,5,'个护健康','电器'),
	(42,5,'数码','电器'),
	(43,5,'影音娱乐','电器'),
	(44,6,'毛巾','洗护'),
	(45,6,'家庭清洁','洗护'),
	(46,6,'美妆','洗护'),
	(47,6,'面部护理','洗护'),
	(48,6,'身体护理','洗护'),
	(49,6,'香薰','洗护'),
	(50,6,'洗发护发','洗护'),
	(51,6,'浴室用具','洗护'),
	(52,6,'生理用','洗护'),
	(53,7,'海外','杂货'),
	(54,7,'春风系列','杂货'),
	(55,7,'黑凤梨系列','杂货'),
	(56,7,'旅行用品','杂货'),
	(57,7,'户外','杂货'),
	(58,7,'文具','杂货'),
	(59,7,'圣诞礼盒','杂货'),
	(60,7,'礼品卡','杂货'),
	(61,8,'糕点','饮食'),
	(62,8,'小食','饮食'),
	(63,8,'坚果炒货','饮食'),
	(64,8,'果干','饮食'),
	(65,8,'冲饮','饮食'),
	(66,8,'茗茶','饮食'),
	(67,8,'肉制品','饮食'),
	(68,8,'食材','饮食'),
	(69,8,'调味','饮食'),
	(70,8,'生鲜','饮食'),
	(71,8,'酒水','饮食'),
	(72,9,'婴幼儿服饰','婴童'),
	(73,9,'儿童服饰','婴童'),
	(74,9,'配搭','婴童'),
	(75,9,'寝居','婴童'),
	(76,9,'妈咪','婴童'),
	(77,9,'玩具','婴童'),
	(78,9,'婴童洗护','婴童'),
	(79,9,'喂养','婴童'),
	(80,9,'婴童出行','婴童'),
	(81,10,'唱片','志趣'),
	(82,10,'魔兽世界','志趣'),
	(83,10,'炉石传说','志趣'),
	(84,10,'守望先锋','志趣'),
	(85,10,'暗黑破坏神III','志趣'),
	(86,10,'星际争霸II','志趣'),
	(87,10,'风暴英雄','志趣'),
	(88,10,'我的世界','志趣'),
	(89,10,'阴阳师','志趣'),
	(90,10,'梦幻西游','志趣'),
	(91,10,'大话西游','志趣'),
	(92,10,'游戏表情','志趣'),
	(93,10,'游戏点卡','志趣');

INSERT INTO yx_products VALUES 
    (1,1,'冬眠暖绒四件套','罗莱制造商','纯棉拉舍尔，被窝享冬眠',499,999,'每满155减30元券','满赠 每满1件领取赠品','购买最高得49积分',
	'· 30天无忧退换货    · 48小时快速退款    · 满88元免邮费    · 网易自营品牌    · 国内部分地区无法配送    ',150123456789,true,399,150135456789,
	'img/products/46a2bbc32337e40cfe1322b38c8354c1 (1).jpg img/products/740b9f5a8915717b0c9aa4074bf5a436 (1).jpg img/products/960e2718a8a4ebdf049ab42280253aa3 (1).jpg img/products/fa31e181465839e49d7d26883aa5970a (1).jpg img/products/ff485de9150a1d1f6e9004f15c853972 (1).jpg',
	'img/products/46a2bbc32337e40cfe1322b38c8354c1.jpg img/products/740b9f5a8915717b0c9aa4074bf5a436.jpg img/products/960e2718a8a4ebdf049ab42280253aa3.jpg img/products/fa31e181465839e49d7d26883aa5970a.jpg img/products/ff485de9150a1d1f6e9004f15c853972.jpg',null,null),
    (2,1,'全棉色织磨毛四件套','Ralph Lauren制造商','温暖浅磨毛，入冬必备',299,999,'每满155减30元券','加价购 满130元可超值换购','购买最高得29积分',
	'· 30天无忧退换货    · 48小时快速退款    · 满88元免邮费    · 网易自营品牌    · 国内部分地区无法配送    ',1515115367863,false,null,null,
	'img/products/3c317ab4307fa7b9479a040f1bf6d85c (1).jpg img/products/17a92159902c068c392532b9458af7ea (1).jpg img/products/26bdd3f2248ec1e84c811afd6d271e7f (1).jpg img/products/a946e69898bc5cda26d78d7957c6ec3b (1).jpg img/products/fd1b4429d02410af591db8b10c49eaa7 (1).jpg',
	'img/products/3c317ab4307fa7b9479a040f1bf6d85c.jpg img/products/17a92159902c068c392532b9458af7ea.jpg img/products/26bdd3f2248ec1e84c811afd6d271e7f.jpg img/products/a946e69898bc5cda26d78d7957c6ec3b.jpg img/products/fd1b4429d02410af591db8b10c49eaa7.jpg',null,null),
    (3,2,'安全智能控温电热毯',null,'日德进口原配件，安全调温',349,999,null,'加价购 满130元可超值换购','购买最高得34积分',
	'· 30天无忧退换货    · 48小时快速退款    · 满88元免邮费    · 网易自营品牌    · 国内部分地区无法配送    ',151125556789,false,null,null,
	'img/products/00ab59e8ea4cf1306f075ba13c9b8dd0.jpg img/products/0a1d7333b5f99b67ce97946e06265468.png img/products/559d14e20fa555d71c1100725e5f0442.jpg img/products/c097653b415b8c9d998e8988cc5acd65.jpg img/products/9fb5a08008fc7be40452b20e48738bd6.jpg',
	'img/products/00ab59e8ea4cf1306f075ba13c9b8dd0 (1).jpg img/products/0a1d7333b5f99b67ce97946e06265468 (1).png img/products/559d14e20fa555d71c1100725e5f0442 (1).jpg img/products/c097653b415b8c9d998e8988cc5acd65 (1).jpg img/products/9fb5a08008fc7be40452b20e48738bd6 (1).jpg',null,null),
    (4,2,'保暖嫩肤蚕丝羽绒子母被','MUJI制造商','95%白鹅绒+双宫茧桑蚕丝，保暖保湿二合一',1999,671,null,'加价购 满130元可超值换购','购买最高得199积分',
	'· 30天无忧退换货    · 48小时快速退款    · 满88元免邮费    · 网易自营品牌    · 国内部分地区无法配送    ',1515115367863,false,null,null,
	'img/products/048ee37e9691ad52a796939911a38630.png img/products/df308992f08429707d732b1f91b7c608.jpg img/products/ca0c08d4b0bcc47e45595861c88f890b.jpg img/products/7392824aa5ee0e199c7df5aac11df2b2.jpg img/products/bd89a8c1476dd429b04070ade0adb42d.jpg',
	'img/products/048ee37e9691ad52a796939911a38630 (1).png img/products/df308992f08429707d732b1f91b7c608 (1).jpg img/products/ca0c08d4b0bcc47e45595861c88f890b (1).jpg img/products/7392824aa5ee0e199c7df5aac11df2b2 (1).jpg img/products/bd89a8c1476dd429b04070ade0adb42d (1).jpg',null,null),
    (5,3,'胶囊形带镜衣帽架','NITORI制造商','一物三用 玄关神器',99,58,null,'APP特惠 用严选APP购买更便宜','购买最高得9积分',
	'· 30天无忧退换货    · 48小时快速退款    · 满88元免邮费    · 网易自营品牌    · 免费配送到家    · 国内部分地区无法配送        ',150124356789,false,null,null,
	'img/products/1870c0dafa1483911715a089b6d20197.png img/products/ecb0c06b3d64b7e00e12af8085f28801.jpg img/products/0f59751406657af81e499f1563979e1f.jpg img/products/40e9c257ef3f62ae27446cb2124c216c.jpg img/products/78c81ab5e0ddf8b51325af6beb780d54.png',
	'img/products/1870c0dafa1483911715a089b6d20197 (1).png img/products/ecb0c06b3d64b7e00e12af8085f28801 (1).jpg img/products/0f59751406657af81e499f1563979e1f (1).jpg img/products/40e9c257ef3f62ae27446cb2124c216c (1).jpg img/products/78c81ab5e0ddf8b51325af6beb780d54 (1).png',null,null);
INSERT INTO yx_products_detail VALUES
    (1,1,'1.8M','红梅色',100,2000,
	'img/products/167e19f31c28d9afc9cebecf24416b8d (1).png',
	'img/products/167e19f31c28d9afc9cebecf24416b8d.png',null),
	(2,1,'1.8M','丁子灰',100,2000,
	'img/products/27280745e59bc2a1507ba287ab798a00 (1).png',
	'img/products/27280745e59bc2a1507ba287ab798a00.png',null),
	(3,1,'1.8M','鸠羽紫',100,2000,
	'img/products/87ec0f9c24d94a90f137824ecb48bbc3 (1).png',
	'img/products/87ec0f9c24d94a90f137824ecb48bbc3.png',null),
	(4,1,'1.8M','路考茶',100,2000,
	'img/products/817190b2e3920f3b3ba13e527053027a (1).png',
	'img/products/817190b2e3920f3b3ba13e527053027a.png',null),
	(5,1,'1.8M','琉璃蓝',100,2000,
	'img/products/fb1d04a09a72c4ecaaae5824efacddd8 (1).png',
	'img/products/fb1d04a09a72c4ecaaae5824efacddd8.png',null),
	(6,1,'1.5M','红梅色',100,2000,
	'img/products/167e19f31c28d9afc9cebecf24416b8d (1).png',
	'img/products/167e19f31c28d9afc9cebecf24416b8d.png',null),
	(7,1,'1.5M','丁子灰',100,2000,
	'img/products/27280745e59bc2a1507ba287ab798a00 (1).png',
	'img/products/27280745e59bc2a1507ba287ab798a00.png',null),
	(8,1,'1.5M','鸠羽紫',100,2000,
	'img/products/87ec0f9c24d94a90f137824ecb48bbc3 (1).png',
	'img/products/87ec0f9c24d94a90f137824ecb48bbc3.png',null),
	(9,1,'1.5M','路考茶',100,2000,
	'img/products/817190b2e3920f3b3ba13e527053027a (1).png',
	'img/products/817190b2e3920f3b3ba13e527053027a.png',null),
	(10,1,'1.5M','琉璃蓝',100,2000,
	'img/products/fb1d04a09a72c4ecaaae5824efacddd8 (1).png',
	'img/products/fb1d04a09a72c4ecaaae5824efacddd8.png',null),
    (11,2,'1.5M','红赤色',100,2000,
	'img/products/9d3c3828db6d4d234b2d735e97163e91.png',
	'img/products/9d3c3828db6d4d234b2d735e97163e91 (1).png',null),
	(12,2,'1.5M','黑灰色',100,2000,
	'img/products/336d0b26be3c27c81bc38f40eacf3e57.png',
	'img/products/336d0b26be3c27c81bc38f40eacf3e57 (1).png',null),
	(13,2,'1.5M','靛蓝色',100,2000,
	'img/products/8100879217207e8986f40488cc247ee5.png',
	'img/products/8100879217207e8986f40488cc247ee5 (1).png',null),
	(14,2,'1.8M','红赤色',100,2000,
	'img/products/9d3c3828db6d4d234b2d735e97163e91.png',
	'img/products/9d3c3828db6d4d234b2d735e97163e91 (1).png',null),
	(15,2,'1.8M','黑灰色',100,2000,
	'img/products/336d0b26be3c27c81bc38f40eacf3e57.png',
	'img/products/336d0b26be3c27c81bc38f40eacf3e57 (1).png',null),
	(16,2,'1.8M','靛蓝色',100,2000,
	'img/products/8100879217207e8986f40488cc247ee5.png',
	'img/products/8100879217207e8986f40488cc247ee5 (1).png',null),
    (17,3,'176*88cm（单人）',null,100,2000,null,null,null),
	(18,3,'176*140cm（双人）',null,100,2000,null,null,null),
    (19,4,'220*240cm（蚕丝570g+羽绒1370g）',null,100,2000,null,null,null),
	(20,4,'200*230cm（蚕丝500g+羽绒1200g）',null,100,2000,null,null,null),
    (21,5,null,'茶色',100,2000,
	'img/products/78c81ab5e0ddf8b51325af6beb780d54.png',
	'img/products/78c81ab5e0ddf8b51325af6beb780d54 (1).png',null),
        (22,5,null,'原木',100,2000,'img/products/1870c0dafa1483911715a089b6d20197.png','img/products/1870c0dafa1483911715a089b6d20197 (1).png',null);

