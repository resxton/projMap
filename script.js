$('.part').hover (
    function() {
        $('.description').html($(this).attr('description-data'));
        $('.description').fadeIn(0);
    }, 
    function () {
        $('.description').fadeOut(0);
    }
);
