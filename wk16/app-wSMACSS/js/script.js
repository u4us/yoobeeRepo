$(function(){
    $('[data-target]').on('click', function(){
        // var layer = $(this).data('target');
        // $(layer).addClass('current');
        $($(this).data('target')).addClass('current')
    });

    $('[data-dismiss]').on('click', function(){
        // var layer = $(this).data('target');
        // $(layer).addClass('current');
        $($(this).data('dismiss')).removeClass('current')
    });
});