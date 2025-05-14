
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('show');
}

document.getElementById('upload-photo').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const preview = document.getElementById('preview-photo');
            const downloadLink = document.getElementById('download-link');
            preview.src = e.target.result;
            preview.style.display = 'block';

            downloadLink.href = e.target.result;
            downloadLink.style.display = 'inline-block';
        };
        reader.readAsDataURL(file);
    }
});
