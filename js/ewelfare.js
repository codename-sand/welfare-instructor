$(function(){

	var content1 = $('#ewelfare').offset().top-80;
	var content2 = $('#ewelfare_program').offset().top-80;
	var content3 = $('#knowhow').offset().top-80;
	var content4 = $('#customer').offset().top-200;

	$(window).scroll(function(){

		var sct = $(this).scrollTop();

		if(sct > content1){
			$('.link_tab li').removeClass('active');
			$('.e1').addClass('active');
		}

		if(sct > content2){
			$('.link_tab li').removeClass('active');
			$('.e2').addClass('active');
		}

		if(sct > content3){
			$('.link_tab li').removeClass('active');
			$('.e3').addClass('active');
		}

		if(sct > content4){
			$('.link_tab li').removeClass('active');
			$('.e4').addClass('active');
		}

	})
	
})


