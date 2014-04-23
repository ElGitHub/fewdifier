$(document).ready(function(){

    // Hide the content with JS so it's available in non-js browsers
    $('.drop').hide();

    // Show the correct dropdown menu when clicking through the
    // primary navigation menu
    $('#primary-nav li').on('click', function(e){

        var $this = $(this);
        var target = $this.find('a').attr('href');

        if ( $this.hasClass('active') ) {

            $('#slide-down').slideUp(300, function(){
                $('.drop').hide();
                $('#primary-nav li').removeClass('active');
            });

        } else {

            $this.addClass('active').siblings().removeClass('active');

            $('.drop').hide();
            $(target).show();
            $('#slide-down').slideDown(300);

        }

        e.preventDefault();

    });

});
