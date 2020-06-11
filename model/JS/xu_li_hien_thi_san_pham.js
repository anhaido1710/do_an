$(document).ready(function(){
	var ma_danh_muc =1;
	$.ajax({
		url : "model/xu_li_anh_bia.php",
		method : "POST",
		data :{ma_danh_muc : ma_danh_muc},
		dataType : "json",
		success : function(data){
			var dem=1;
			for(var value of data.background){
				console.log(value.ma_nhom);
				if(dem%2!=0){
					$('.all-product').append('<div class="background-product" style="background:url(views/picture/'+value.anh_nen+')no-repeat center center/cover;"></div> <br>');
					dem++;
					if(dem%2==0){
						for(var value1 of data.ref){
							if(value1.ma_nhom == value.ma_nhom){
								$('.all-product').append('<div class="background-detail-product"><div class="picture-background-detail" style="background:url(views/picture/'+value1.anh_bia+')no-repeat center center/cover;"></div><div class="color-detail" id="'+value1.ma_san_pham+'">+MORE COLOR</div><div id="name'+value1.ma_san_pham+'">'+value1.ten_san_pham+'</div><div class="price-background-detail">'+value1.gia_tien+'.000 VND</div></div>');//height 460px
								if(value1.so_mau == 0){
									$('#'+value1.ma_san_pham+'').css('display','none');
									$('#name'+value1.ma_san_pham+'').addClass('name-background-detail_2');
								}else{
									$('#'+value1.ma_san_pham+'').css('display','block');
									$('#name'+value1.ma_san_pham+'').addClass('name-background-detail_1');
								}
							}
						}
						dem=1;
					}
				}

			}
		}
	})
});
