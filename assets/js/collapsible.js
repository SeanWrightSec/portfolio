// Collapsible boxes
var collapsibleButtons = document.getElementsByClassName("collapsible");
var i;
    
for (i = 0; i < collapsibleButtons.length; i++) {
    collapsibleButtons[i].addEventListener("click", function() {
        this.classList.toggle("primary");

        var content = this.nextElementSibling;
        
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}