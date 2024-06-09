const imageContainers = document.querySelectorAll('.image-content');

imageContainers.forEach(container => {
  const image = container.querySelector('#image');
  const imageInfo = container.querySelector('#image-information');

  image.addEventListener('mouseover', () => {
    imageInfo.style.display = 'inline-block';
  });

  image.addEventListener('mouseout', () => {
    imageInfo.style.display = 'none';
  });
});
