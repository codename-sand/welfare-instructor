$(function(){   

    var autoWidth = $(".slideBanner li").length*1200;
    $('.slideBanner').css({"width": autoWidth});

    var total = $(".slideBanner li").length;
    $('.total').text(total);

    var m_num = 0;

    $('.next_btn').click(function(){
        var thumb = $(this).parent().prev().children('li');
        if(m_num>=thumb.length-1) return false;
        m_num++;
        var mg = -1200*m_num+"px";
        $('.slideBanner').css({"margin-left":mg});
        $('.now').text(m_num+1);
        return false;
    });

    $('.prev_btn').click(function(){
        var thumb = $(this).parent().prev().children('li');
        if(m_num<=0) return false;
        m_num--; 
        var mg = -1200*m_num+"px";       
        $('.slideBanner').css({"margin-left":mg});
        $('.now').text(m_num+1);
        return false;
    });

});