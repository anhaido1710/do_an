<?php 
	include "../controller/db_connect.php";
	$ma_san_pham=7;
	$ma_mau_sac = $_POST['color_detail'];
	$query = "select * from anh_chi_tiet_sp where ma_san_pham =".$ma_san_pham." and ma_mau_sac =".$ma_mau_sac;
	$run = mysqli_query($con,$query);
	$arr=[];
	$dem=0;
	while ($rs = mysqli_fetch_array($run)) {
		$arr['background'][$dem]=$rs[1];
		$dem++;
	}
	echo json_encode($arr);
 ?>
