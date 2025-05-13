<script>
    document.getElementById('uploadForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const input = document.getElementById('photoInput');
        const file = input.files[0];

        if (!file || !file.type.startsWith('image/')) {
            alert('Пожалуйста, выберите изображение!');
            return;
        }

        const reader = new FileReader();
        reader.onload = function(event) {
            const gallery = document.querySelector('.gallery');
            const link = document.createElement('a');
            link.href = event.target.result;
            link.target = '_blank';

            const img = document.createElement('img');
            img.src = event.target.result;
            img.alt = 'Загруженное фото';

            link.appendChild(img);
            gallery.appendChild(link);
        };

        reader.readAsDataURL(file);
        input.value = ''; // очищаем input
    });
</script>
