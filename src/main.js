const openButton = document.getElementById('open-dialog');
const closeButton = document.getElementById('close-dialog');
const dialog = document.getElementById('contact-dialog');

openButton.addEventListener('click', () => {
    dialog.showModal();
});

closeButton.addEventListener('click', () => {
    dialog.close();
});

dialog.addEventListener('click', (e) => {
    const dialogDimensions = dialog.getBoundingClientRect();
    if (
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom
    ) {
        dialog.close();
    }
});