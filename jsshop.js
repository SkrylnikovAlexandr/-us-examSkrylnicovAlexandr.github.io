function openImage(src) {
            const imageWindow = window.open("", "_blank");
            imageWindow.document.write('<img src="' + src + '" style="width:100%">');
        }
function toggleMenu() {
    var navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("show");
}



 

