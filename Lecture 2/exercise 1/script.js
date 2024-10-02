document.getElementById('uploadForm').addEventListener('submit', function(event) 
{
    //uploadForm - ime na formata
    event.preventDefault();
    const fileInput = document.getElementById('ImageUpload');
    //imageupload - id na input
    const files = fileInput.files;
    if (files.length > 0) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const newImage = document.createElement('img');
            newImage.src = e.target.result;
            newImage.alt = 'New Image';
            newImage.style.width = '300px';
            newImage.style.height = '200px';
            const newGalleryItem = document.createElement('div');
            newGalleryItem.className = 'gallery-item';
            newGalleryItem.appendChild(newImage);
            document.querySelector('.gallery').appendChild(newGalleryItem);
        };
        reader.readAsDataURL(files[0]);
    }
});