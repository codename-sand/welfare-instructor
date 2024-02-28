$(document).ready(function(){

	var linkTab = $(".link_tab").offset();

	$(window).scroll(function(){
		
		if($(document).scrollTop() > linkTab.top) {
			$('.link_tab').addClass("link_tab_fix");
			$('.link_tab_fake').css("display","block");
		}

		else {
			$('.link_tab').removeClass("link_tab_fix");
			$('.link_tab_fake').css("display","none");
		}

	});

}) 
