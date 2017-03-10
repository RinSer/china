$(document).ready(function() {

  $('body').css('background-image', 'url(img/bg.jpg)').waitForImages({

    waitForAll: true,
    finished: function() {

            $('#loader').hide();

	    $('#main').show();

	    $('.vrl').animate({'height': "48px"}, 2000);

	    $('.vrleven').animate({'height': "88px"}, 2000);

	    $('.rubric').animate({'height': "312px"}, 2000, function() {
	      $('.rubricName').show();
	    });

	    $('#banner').animate({width: ["toggle", "swing"]}, 2000, function() {
	      $('#bannerText').show();
	    });

            if ($(window).width() > $(window).height()) {
		    $('#dragon').animate({left: '+=2500', bottom: '+=500'}, 10000, function() {
			$(this).hide();
		    });
	    } else {
		    $('#dragon').animate({left: '+=1000', bottom: '+=2500'}, 10000, function() {
			$(this).hide();
		    });
	    }

	    // Event listener
            $('.rubric').click(function() {
                if ($(window).width() < 1141) {
			$(this).parent().find('.vr').animate({height: ["toggle", "swing"]}, 'slow');
		}
		$(this).parent().find('ul.subdivisions').animate({
			height: ["toggle", "swing"],
                        width: ["toggle", "swing"]
		}, 'slow');
	    });

	    if ($(window).width() > 1140) {
		    $('.col-lg-4').hover(function() {
			$(this).find('.vr').animate({height: ["toggle", "swing"]}, 'slow');
		    });
	    }

    }

  });

});
