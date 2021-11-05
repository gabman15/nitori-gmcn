$(function() {
    $("#badApple").hover(
        function() {
            $(this).attr("src", "images/badapple.gif");
        },
        function() {
            $(this).attr("src", "images/badapple.jpg");
        }                         
    );
    $(".mainButtonIcon").click(function() {
        var blocks = ["#badAppleBlock", "#leadingEdgeBlock", "#programmingBlock"];
        
        for (var x=0; x < blocks.length; x++) {
            $(blocks[x]).toggle(750);
        }
    });
});




