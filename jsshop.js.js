<script>
document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".zoom-image");

    images.forEach(function (img) {
        img.addEventListener("click", function () {
            const src = img.getAttribute("data-large");
            const imageWindow = window.open("", "_blank");
            imageWindow.document.write('<img src="' + src + '" style="width:100%">');
        });
    });
});
</script>
