<?php 
	session_start();
 ?>
<?php 
	include "../controller/db_connect.php";
	$ma_san_pham =$_POST['ma_san_pham'];
	$so_luong=$_POST['so_luong'];
	$query = "select * from san_pham where ma_san_pham=".$ma_san_pham;
	$run = mysqli_query($con,$query);
	$rf = mysqli_fetch_array($run);
	$dem=0;
	if(!isset($_SESSION['cart'])){
		$arr =[];
			$arr[$ma_san_pham][$dem]['name']=$rf[1];
			$arr[$ma_san_pham][$dem]['so_luong']=$_POST['so_luong'];
			$arr[$ma_san_pham][$dem]['gia']=$rf[3];
			$arr[$ma_san_pham][$dem]['img']=$rf[6];
	}else{
		$arr = $_SESSION['cart'];
		if(array_key_exists($ma_san_pham,$arr)){
			$arr[$ma_san_pham][$dem]['name']=$rf[1];
			$arr[$ma_san_pham][$dem]['so_luong']=$_POST['so_luong'];
			$arr[$ma_san_pham][$dem]['gia']=$rf[3];
			$arr[$ma_san_pham][$dem]['img']=$rf[6];
		}else{
			$arr[$ma_san_pham][$dem]['name']=$rf[1];
			$arr[$ma_san_pham][$dem]['so_luong']=$_POST['so_luong'];
			$arr[$ma_san_pham][$dem]['gia']=$rf[3];
			$arr[$ma_san_pham][$dem]['img']=$rf[6];
		}

	}
	$_SESSION['cart']=$arr;
	echo json_encode($_SESSION['cart']);
 ?>
