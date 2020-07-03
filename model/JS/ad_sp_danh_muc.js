$(document).ready(function(){
	var danh_muc=0;
	$(document).on('click', '#san_pham',function(){
		if(danh_muc%2==0){
			$('.danh_muc_admin').css('display','block');
			danh_muc++;
		}else{
			$('.danh_muc_admin').css('display','none');
			danh_muc++;
		}
	});
	var control;
	var page=1;
	var all_page1;
	var num=0;
	function all(num){
		$.ajax({
			url : "model/xu_li_page_admin.php",
			method : "POST",
			data : {num : num},
			dataType : "html",
			success : function(data2){
				all_page1=data2;
				$('.page-detail').html('<div class="all-size"><div class="change-size">1</div><p style="color:black; float:left; margin: 2px 0px 0px 5px;"> of </p><div style="float:left; margin: 0px 0px 0px 6px;">'+data2+'||</div></div>')
				$('.page-detail').append('<div class="page-true"><a class="down">Pre<< </a><div class="true-page">1</div><a class="up">>>Next</a></div>');
			}
		});
	}
	function data_page(control,page,num){
		$.ajax({
			url : "views/admin_sp_hien_thi.php",
			method : "POST",
			dataType : "json",
			data :{control : control,page : page,num:num},
			success : function(data){
				console.log(data);
				var detail='';
				detail+='<table><tr><th>Mã sản phẩm</th><th>Tên sản phẩm</th><th>Giá</th><th>Ngày sản xuất</th><th>Mô tả</th><th>Ảnh bìa</th></tr>';

				for(var value1 of data){
					detail+='<tr><td id="'+value1.ma_san_pham+'">'+value1.ma_san_pham+'</td><td><p class="name-pro">'+value1.ten_san_pham+'</p></td><td>'+value1.gia_tien+'</td><td>'+value1.ngay_sx+'</td><td class="mota"><p>'+value1.mo_ta+'</p></td><td class="img" style="background:url(views/picture/'+value1.img+')no-repeat center center/cover"></td><td><button data="'+value1.ma_san_pham+'" class="delete">Xóa</button></td><td><button class="detail" data="'+value1.ma_san_pham+'">chi tiết</button></td></tr>';
				}
				detail+='</table>';
				$('.admin-content-detail').html(detail);
					$.ajax({
						url : "model/xu_li_menu_sp_admin.php",
						method : "POST",
						dataType : "json",
						data :{control : control},
						success : function(data1){
							console.log(data1);
							var dem='';
							dem+='<div class="click-nhom_sp_admin">---Chọn nhóm sản phẩm---</div>';
							dem+='<div class="detail-menu-admin">';
							for(var value of data1.menu){
								dem+='<div class="detail-detail-menu-admin" data-ma="'+value.ma_nhom+'">'+value.ten_nhom+'</div>';
							}
							dem+='</div>';
							$('.admin-right-tittle').html(dem);
						}
					})
			}
		})
	}
	$(document).on('click', '.detail-admin-danhmuc-sp',function(){
		num=0;
		control = $(this).attr('data-ma-danh-muc');
		all(num);
		data_page(control,page,num);
	});
	var dem1=0;
	$(document).on('click', '.click-nhom_sp_admin',function(){
		if(dem1%2==0){
			$('.detail-menu-admin').css('display','block');
			dem1++;
		}else{
			$('.detail-menu-admin').css('display','none');
			dem1++;
		}
	});
	var num;
	$(document).on('click', '.down',function(){
		page = $('.true-page').text();
		num=0;
		if(page !=1){
			page--;
			$('.true-page').text(page);
			$('.change-size').text(page);
			data_page(control,page,num);
		}
	});
	$(document).on('click', '.up',function(){
		page = $('.true-page').text();
		num=0;
		if(page < all_page1){
			page++;
			$('.true-page').text(page);
			$('.change-size').text(page);
			data_page(control,page,num);
		}
	});
	$(document).on('click', '.detail-detail-menu-admin',function(){
		num = $(this).attr('data-ma');
		all(num);
		page=1;
		data_page(control,page,num);
	});
	$(document).on('click', '.delete',function(){
		var data1 =$(this).attr('data');
		$.ajax({
			url: 'model/xoa_san_pham_admin.php',
			method : "POST",
			dataType : "html",
			data: {data1 : data1},
			success : function(data){
				num=0;
				page=1;
				all(num);
				data_page(control,page,num);
			}
		})
	});
	$(document).on('click', '.detail',function(){
		var ma_san_pham = $(this).attr('data');
			$.ajax({
				url: 'model/hien_thi_chi_tiet_sp.php',
				method : "POST",
				dataType : "json",
				data: {ma_san_pham : ma_san_pham},
				success : function(data5){
					console.log(data5);
					var dem='<div class="tittle_add">THÔNG TIN SẢN PHẨM</div><div class="sua1" style="display:none; color:red;">Ghi lại tin bạn muốn trong ô.</div><table class="table_detail"><tr><th>Tên</th><th>Giá</th><th>Ngày sản xuất</th><th>Mô tả</th></tr>';

					for(var value1 of data5.ref){
							dem+='<tr><td data-id="'+value1.ma_san_pham+'" contenteditable class="name_add lala" data-name="name">'+value1.ten_san_pham+'</td><td class="price_add lala" data-id="'+value1.ma_san_pham+'" contenteditable data-name="price">'+value1.gia_tien+'</td><td class="ngay_add lala" data-id="'+value1.ma_san_pham+'" contenteditable data-name="date">'+value1.ngay_sx+'</td><td class="mo_ta_add lala" data-id="'+value1.ma_san_pham+'" contenteditable data-name="mo_ta">'+value1.mo_ta+'</td></tr>';	
							var color= value1.ma_mau_sac;				
						}
					dem+='</table>';
					dem+='<div class="erro_price" style="display:none; color:red;">Bạn phải nhập đúng định dạng giá</div><div class="erro_date" style="display:none; color:red;">Bạn phải nhập đúng định dạng ngày</div>';
					dem+='<div class="tittle_add2">CHI TIẾT SẢN PHẨM</div>';
					dem+='<div class="color_add2">Màu sắc:</div><table class="table_detail3"><tr>';
					for(var value4 of data5.color_all_detail.ma_mau_sp){
						if(value4.ma_mau_sp == color){
							dem+='<td class="color_add" data-color="'+value4.ma_mau_sp+'"><div class="add_detail_color" style="background:'+value4.ma_hexa+'; border:2px solid black;"><div></td>';
						}else{
							dem+='<td class="color_add" data-color="'+value4.ma_mau_sp+'"><div class="add_detail_color" style="background:'+value4.ma_hexa+'; border:1px solid black;"><div></td>';
						}
					}
					dem+='</tr></table>';
					dem+='<div class="size_add2">Size:</div><table class="table_detail4"><tr>'
					for(var value5 of data5.ref){
						for(var value6 of value5.size){
							dem+='<td class="size_add">'+value6+'</td>';
						}
					}
					dem+='</tr></table>';
					dem+='<div class="back_add2">Hình ảnh:</div><div class="sua2" style="display:none; color:red;">Chọn hình ảnh bạn muốn sửa</div><table class="table_detail2"><tr>';
					for(var value2 of data5.ref){
						for(var value3 of value2.anh_san_pham){
							dem+='<td class="pic_add_detail"><label class="back_add_all" for="pic"><div class="back_add" style="background:url(views/picture/'+value3+')no-repeat center center/cover;"></div><input type="file" data-id="'+value2.ma_san_pham+'" id="pic" style="display:none;"></label></td>'
						}
					}
					dem+='</tr>';
					dem+='</table>';
					dem+='<div class="up_date" data="show" data-name="fail" data-price="fail" data-date="fail" data-ta="fail">SỬA</div>';
					$('.update-page').html(dem);
				}
		})
	});
	$(document).on('click', '.name-pro1',function(){
		var consol = $(this).attr('data-value');
		var status = $(this).attr('data-status');
		var ma_san_pham = $(this).attr('data');
		var value_new = $('#inf').val();
		console.log(consol);
		console.log(status);
		console.log(ma_san_pham);
		console.log(value_new);
		$.ajax({
			url : "model/xu_li_update.php",
			method : "POST",
			dataType : "html",
			data :{consol : consol,status : status,ma_san_pham:ma_san_pham,value_new:value_new},
			success : function(data){
				console.log(data);
			}
		})
	});
	$(document).on('click', '.up_date',function(){
		var check = $(this).attr('data');
		if(check == 'show'){
			$('.sua2').css('display','block');
			$('.sua1').css('display','block');
		}
	})
	$(document).on('blur', '.lala',function(){
		var check=$(this).attr('data-name');
		var value = $(this).text();
		if(check == 'date'){
			$.ajax({
				url : "model/check_date.php",
				method : "POST",
				dataType : "html",
				data : {date : value},
				success : function(data){
					if(data == 'true'){
						
					}else{
						
					}
				}
			})
		}
	})
})
