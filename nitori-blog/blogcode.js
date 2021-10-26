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
    var blocks = [document.getElementById("badAppleBlock"), document.getElementById("leadingEdgeBlock"),
             document.getElementById("programmingBlock")];
    for (let x = 0; x < blocks.length; x++) {
        if (blocks[x].style.display === "none") {
            blocks[x].style.display = "block";
        } else {
            blocks[x].style.display = "none";
        }
    }
}
