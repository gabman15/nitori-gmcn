$(function() {
    $("#badApple").hover(
        function() {
            $(this).attr("src", "images/badapple.gif");
        },
        function() {
            $(this).attr("src", "images/badapple.jpg");
        }                         
    );                  
});

function toggleBlocks() {
    var blocks = ["#badAppleBlock", "#leadingEdgeBlock", "#programmingBlock"];
    for (let x = 0; x < blocks.length; x++) {
        $(blocks[x]).toggle("slide");
    }
}


