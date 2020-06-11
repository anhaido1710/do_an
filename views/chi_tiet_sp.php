<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>chi tiet san pham</title>
	<link rel="stylesheet" href="views/css/header.css">
	<link rel="stylesheet" href="views/css/hien_thi_san_pham.css">
	<script src="https://kit.fontawesome.com/de7000759e.js" crossorigin="anonymous"></script>
	<link rel="stylesheet" type="text/css" href="views/css/chi_tiet_sp.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
	<script src="model/xu_li_hien_thi_san_pham.js" type="text/javascript"></script>
	<script src="model/chi_tiet_sp.js" type="text/javascript"></script>
	 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css"/>
	 <link rel="stylesheet" href="views/css/end_trang_chu.css">
</head>
<body>
	<?php include "views/header.html" ?>
	<div class="video">
		<video id="video_background" playsinline autoplay muted loop>
		  <source src="https://static.zara.net/video///mkt/2020/1/ss20-north-joinlife/video-recogida-ropa/w/1366//landscape/video-recogida-ropa_0.mp4?ts=1579717394424" type="video/mp4">
		  <source src="https://static.zara.net/video///mkt/2020/1/ss20-north-joinlife/video-recogida-ropa/w/1366//landscape/video-recogida-ropa_0.mp4?ts=1579717394424" type="video/ogg">
		  Your browser does not support HTML video.
		</video>
		<div class="tittle-content">
			<h1>KHÔNG CHỈ VỀ KIỂU DÁNG</h1>
			<h2>MÀ CÒN VỀ CHẤT LƯỢNG</h2>
		</div>
	</div>
	<div class="product-sp">
		<?php include "views/hien_thi_san_pham.php"; ?>
	</div>
	<div class="end-chi-tiet">
		<?php include "views/end_trang_chu.php" ?>
	</div>
</body>
</html>
