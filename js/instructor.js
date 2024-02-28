$(function(){

	var content1 = $('#insructor').offset().top-80;
	var content2 = $('#insructor_grade').offset().top-80;
	var content3 = $('#insructor_license').offset().top-330;

	$(window).scroll(function(){

		var sct = $(this).scrollTop();

		if(sct > content1){
			$('.link_tab li').removeClass('active');
			$('.i1').addClass('active');
		}

		if(sct > content2){
			$('.link_tab li').removeClass('active');
			$('.i2').addClass('active');
		}

		if(sct > content3){
			$('.link_tab li').removeClass('active');
			$('.i3').addClass('active');
		}

	})
	
})


