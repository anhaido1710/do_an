$(document).ready(function(){
	// $(document).on('click','.background-detail-product',function(){
		// var san_pham =$(this).attr('data');
		var height_element;
		$.ajax({
			url : 'model/hien_thi_chi_tiet_sp.php',
			// type: 'POST',
			dataType: 'json',
			// data: {san_pham : san_pham},
			success : function(data){
				for(var value of data.ref){
					for(var back of value.anh_san_pham){
						$('.left').append('<div style="background:url(views/picture/'+back+')no-repeat center center/cover;" class="background-detail"></div>');
					}
				}
					for(var value1 of data.ref){
						var size = value1.so_size;
						$('.information').append('<div id="name-detail">'+value1.ten_san_pham+'</div><div class="price-detail">'+value1.gia_tien+'.000 VND</div><div class="description-detail"><div class="description-color-tittle">Màu sắc: '+value1.ten_mau+'</div><div class="date-create">Ngày sản xuất: '+value1.ngay_sx+'</div><div class="model-height">HEIGHT OF MODEL: 189 cm. / 74.4″</div><div class="description-content-detail">'+value1.mo_ta+'</div></div><div class="description-button">Views</div>');
					}
							height_element = $('.description-detail').outerHeight();
							$('.description-detail').css({
								height: '70px'
								
							});
								var string_color='<div class="all-size"><ul>';
								for(var value_size of data.all_size){
									console.log('11');
									string_color += '<li>'+value_size+'</li>';
								}
									string_color += '</ul></div>'
									$('.information').append(string_color);
									var height_size = $('li').height();
										if(size > 1){
											$('.information').append('<div class="tittle-more-color">More Color</div>');
											var colo_detail1 ='<div class="color-detail-detail">';
											for(var detail_color of data.color_all_detail.ma_mau_sp){
												colo_detail1 +='<div class="color-detail1" style="background:'+detail_color.ma_hexa+'" id="'+detail_color.ma_mau_sp+'"></div>';
											}
											colo_detail1+='</div>';
											$('.information').append(colo_detail1);
										}
											$('.information').append('<div class="add"><span>ADD</span></div>')
			}
		});
		$(document).on('click','.color-detail1',function(e){
			$('.color-detail1').css('border','1px solid black');
			$(this).css('border','3px solid black');
			var color_detail =$(this).attr('id');
			$.ajax({
				url : "model/xu_li_anh_detail.php",
				method : "POST",
				dataType : "json",
				data : {color_detail : color_detail},
				success : function(data){
                     var background='';
                     for(var value of data.background){
                     	background += '<div style="background:url(views/picture/'+value+')no-repeat center center/cover;" class="background-detail"></div>'
                     }
                     $('.left').html(background);
				}
			})
		});
		$(document).on('mouseenter','li',function(e){
			$(this).css('background','#d9dce4');
		});
		$(document).on('mouseleave','li',function(e){
			$(this).css('background','white');
		});
		var choice=0;
		$(document).on('click','li',function(e){
			if(choice%2==0){
				$('li').css('display','none');
				$(this).css('display','block');
				choice++;
			}else if(choice%2!=0){
				$('li').css('display','block');
				choice++;
			}
		});

	// });
	$('.sreach').css({
		'position':'relative'
	});
	$('.navble').css({
		'color':'black'
	});
	$('#sreach').css({
		'border-bottom':'2px solid black'
	});
	$('.sreach').animate({margin : "0px 0px 0px 570px"}, 900);
	var dem =1;
	$(document).on('click','.description-button',function(e){
		if(dem%2!=0){
			$('.description-detail').animate({height : height_element}, 500);
			dem++;
		}else if(dem%2==0){
			console.log(height_element);
			$('.description-detail').animate({height : "70px"}, 500);
			dem++;
		}
	})
});
