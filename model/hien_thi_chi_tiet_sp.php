<?php 
	include "../controller/db_connect.php";
	$ma_san_pham =7;
	$query = "select ma_mau_sac from chi_tiet_sp where ma_san_pham =".$ma_san_pham."  LIMIT 1,1";
	$run = mysqli_query($con,$query);
	if(!$run){
		echo "404";
	}else{
		$arr =[];
		$dem =0;
		$dem1 =0;
		$dem2=0;
		$dem3=0;
		$dem4=0;
		$dem5=0;
		while($rs = mysqli_fetch_array($run)){
			$arr['ref'][$dem1]['ma_mau_sac']= $rs[0]; 
				$run_size = mysqli_query($con,"select * from chi_tiet_sp where ma_mau_sac =".$rs[0]);
				while ($rf = mysqli_fetch_array($run_size)) {
					$arr['ref'][$dem1]['size'][$dem2]= $rf[2]; 
					$dem2++;
				}
					$query = "select * from mau_sac_sp where ma_mau_sac=".$rs[0];
					$run1 = mysqli_query($con,$query);
					while ($rs3 = mysqli_fetch_array($run1)) {
							$arr['ref'][$dem1]['ten_mau']= $rs3[1]; 
							$arr['ref'][$dem1]['ma_hexa_mau']= $rs3[2]; 
					}
						$query = "select * from san_pham where ma_san_pham=".$ma_san_pham;
						$run1 = mysqli_query($con,$query);
						while ($rs1 = mysqli_fetch_array($run1)) {
							$arr['ref'][$dem1]['ma_san_pham']= $rs1[0]; 
							$count = "select count(DISTINCT ma_mau_sac) from chi_tiet_sp where ma_san_pham=".$rs1[0];
							$run_count = mysqli_query($con,$count);
							while ($count = mysqli_fetch_array($run_count)) {
								$arr['ref'][$dem1]['so_size']= $count[0];
							}
								$arr['ref'][$dem1]['ten_san_pham']= $rs1[1]; 
								$arr['ref'][$dem1]['gia_tien']= $rs1[3]; 
								$arr['ref'][$dem1]['mo_ta']= $rs1[4]; 
								$arr['ref'][$dem1]['ngay_sx']= $rs1[5]; 
									$query = "select * from anh_chi_tiet_sp where ma_mau_sac=".$rs[0]." and ma_san_pham =".$ma_san_pham;
									$run1 = mysqli_query($con,$query);
									while ($rs2 = mysqli_fetch_array($run1)) {
										$arr['ref'][$dem1]['anh_san_pham'][$dem]= $rs2[1]; 
										$dem++;
									}
						}
		}
		$all_size = mysqli_query($con,"select * from kich_co_sp");
		while ($rf_size = mysqli_fetch_array($all_size)) {
			$arr['all_size'][$dem3] = $rf_size[1];
			$dem3++;
		}
		$all_color = mysqli_query($con,"select * from chi_tiet_sp where ma_san_pham = ".$ma_san_pham." group by ma_mau_sac");
		while ($rf_color = mysqli_fetch_array($all_color)) {
			$arr['color_all_detail']['ma_mau_sp'][$dem4]['ma_mau_sp'] = $rf_color[1];
				$all_hexa_color = mysqli_query($con,"select * from mau_sac_sp where ma_mau_sac = ".$rf_color[1]);
				while ($rf_detail_color = mysqli_fetch_array($all_hexa_color)) {
					$arr['color_all_detail']['ma_mau_sp'][$dem4]['ma_hexa'] = $rf_detail_color[2];
					$dem4++;
				}
		}
		echo json_encode($arr);
	}
 ?>
