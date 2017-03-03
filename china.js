$(document).ready(function() {

  $('body').css('background-image', 'url(img/bg.jpg)').waitForImages({

    waitForAll: true,
    finished: function() {

    $('#main').show();

    $('.vrl').animate({'height': "10%"}, 2000);

    $('.vrleven').animate({'height': "25%"}, 2000);

    $('.rubric').animate({'height': "312px"}, 2000, function() {
      $('.rubricName').show();
    });

    $('#banner').animate({'width': "100%"}, 2000, function() {
      $('#bannerText').show();
    });

    }

  });

});
