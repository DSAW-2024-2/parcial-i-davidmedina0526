const shareButton = document.querySelector('.share_button');
const shareOptions = document.getElementById('share-options');

shareButton.addEventListener('click', () => {
    shareOptions.classList.toggle('hidden');
});