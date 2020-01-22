;(function($){

    $(document).ready(function() {
            
        $('.tab').hide().eq(0).show();

        $('.item').click(function(event) {
            $('.item').removeClass('active');
            console.log(this);
            $(this).addClass('active');
            let idTab = $(this).data('tab');

            $('.tab').hide();
            $(`#${idTab}`).show();
        });            
    });
})(jQuery);