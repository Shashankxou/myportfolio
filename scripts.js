document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio loaded successfully!');

    // Interactive certificate feature
    const certificates = document.querySelectorAll('.certificate-item img');
    certificates.forEach(certificate => {
        certificate.addEventListener('click', () => {
            const modal = document.createElement('div');
            modal.classList.add('modal');
            const modalContent = document.createElement('div');
            modalContent.classList.add('modal-content');
            const modalImage = document.createElement('img');
            modalImage.src = certificate.src;
            modalImage.alt = certificate.alt;
            modalContent.appendChild(modalImage);
            modal.appendChild(modalContent);
            document.body.appendChild(modal);
            modal.addEventListener('click', () => {
                document.body.removeChild(modal);
            });
        });
    });
});
