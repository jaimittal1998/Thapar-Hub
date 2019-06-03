
(function() {
    
    var loading = 0;
    var id = setInterval(frame, 60);
    
    function frame() {
        if(loading==50) {
            clearInterval(id);
            window.open("./wrapper/index.html", "_self");
        } else {
            loading = loading +1;
            if(loading==40) {
                    $(".preloader").fadeOut(600);
            }
        }
    }
    
})();