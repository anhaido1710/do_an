<?php 
	include "../controller/db_connect.php";
	$ma_danh_muc = $_POST['ma_danh_muc'];
	$query = "select * from nhom_san_pham where ma_danh_muc =".$ma_danh_muc;
	$run = mysqli_query($con,$query);
	$arr=[];
	$i=0;
	$j=0;
	while ($rs1 = mysqli_fetch_array($run)) {
		$arr['background'][$i]['ma_nhom']= $rs1[0];
		$query1 = "select * from san_pham where ma_nhom=".$rs1[0];
		$run1 = mysqli_query($con,$query1);
		while ($rs = mysqli_fetch_array($run1)) {
			$arr['ref'][$j]['ma_san_pham'] = $rs[0];
			$query2 = "select count(DISTINCT ma_mau_sac) from chi_tiet_sp where ma_san_pham=".$rs[0];
			$run2 = mysqli_query($con,$query2);
			while ($rs2 = mysqli_fetch_array($run2)) {
				$arr['ref'][$j]['so_mau'] = $rs2[0];
			}
			$arr['ref'][$j]['ten_san_pham'] = $rs[1];
			$arr['ref'][$j]['gia_tien'] = $rs[3];
			$arr['ref'][$j]['mo_ta'] = $rs[4];
			$arr['ref'][$j]['ma_nhom'] = $rs[7];
			$arr['ref'][$j]['anh_bia'] =$rs[6];
			$j++;
		}
		$arr['background'][$i]['ten_nhom']= $rs1[1];
		$arr['background'][$i]['anh_nen']= $rs1[2];
		$arr['background'][$i]['ma_danh_muc']= $rs1[3];
		$i++;
	}
	echo json_encode($arr);
 ?>
