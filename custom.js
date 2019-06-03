/*jslint browser: true*/
/*global $, jQuery, alert*/
/*jslint devel: true */

$(document).ready(function() { 
    $('.slide').click(function(e) { 
        var link=$(this).attr('href');
        $('html,body').animate({
            scrollTop:
            $(link).offset().top});
        e.preventDefault();
    });
});