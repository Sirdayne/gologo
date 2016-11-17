$(document).ready(function(){        
    $('.burger-menu').click(function() {
        $(this).toggleClass('burger-active');
    });
    
    var telephone = $('.telephone');
    var marginLeft = $('.telephone-2 img').css('margin-left');
    var height = $('.telephone-2 img').css('height');
    var width = $('.telephone-2 img').css('width');
    var px = '25px';
    var telWidth = $('.telephone').css('width');
    var telCh = document.getElementById('tel-ch');
    $('.tel-fixed').css('width', telWidth );
    /*
    $('.telephone span img').css('height' , height );
    $('.telephone span img').css('height' , '-=40');
    $('.telephone span img').css('width' , width );
    $('.telephone span img').css('width' , '-=40' );
    */
    $('.main-tel').waypoint({
        handler: function(direction) {
            if (direction === 'down') {
                $('.tel-fixed').show();
                //$('.telephone').addClass('tel-fixed');
                //$('.tel-img').css('margin-left' , marginLeft );
                //$('.telephone-3 img').css('visibility' , 'hidden' );
            } 
            else {
                $('.tel-fixed').hide();
                //$('.telephone').removeClass('tel-fixed');
                //$('.telephone-3 img').css('visibility' , 'visible' );
            }
        },
        offset: 0
    });
    
    $('#tel-right').waypoint({
        handler: function(direction) {
            if (direction === 'down') {
                $('.tel-fixed').hide();
                //$('.telephone').removeClass('tel-fixed');
                //$('.telephone-3 img').css('visibility' , 'visible' );
            } 
            else {
                $('.tel-fixed').show();
                //$('.telephone').addClass('tel-fixed');
                //$('.tel-img').css('margin-left' , marginLeft );
                //$('.telephone-3 img').css('visibility' , 'hidden' );
            }
        },
        offset: 0
    });
    
    $('.telephone-2').waypoint({
        handler: function(direction) {
            if (direction === 'down') {
                $('.tel-ch').hide();
                $('#tel-ch-2').show();
            } 
            else {
                $('.tel-ch').hide();
                $('#tel-ch-1').show();
            }
        },
        offset: 200
    });
    
    $('.telephone-3').waypoint({
        handler: function(direction) {
            if (direction === 'down') {
                $('.tel-ch').hide();
                $('#tel-ch-3').show();
            } 
            else {
                $('.tel-ch').hide();
                $('#tel-ch-2').show();
            }
        },
        offset: 200
    });
    
});

