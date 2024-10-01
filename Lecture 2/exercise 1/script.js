document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const fileInput = document.getElementById('imageUpload');
    const files = fileInput.files;
    if (files.length > 0) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const newImage = document.createElement('img');
            newImage.src = e.target.result;
            newImage.alt = 'New Image';
            const newGalleryItem = document.createElement('div');
            newGalleryItem.className = 'gallery-item';
            newGalleryItem.appendChild(newImage);
            document.querySelector('.gallery').appendChild(newGalleryItem);
        };
        reader.readAsDataURL(files[0]);
    }
});