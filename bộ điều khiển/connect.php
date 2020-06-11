<?php 
	$host ='localhost';
	$root ='root';
	$pass ='';
	$name_db ='do_an';
	$con = mysqli_connect($host,$root,$pass,$name_db);
	if(!$con){
		echo "kết nối thất bại";
	}
 ?>
