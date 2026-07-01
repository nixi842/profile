document.addEventListener('DOMContentLoaded', () => {
    const navButtons = document.querySelectorAll('.nav-btn');
    const sections = document.querySelectorAll('.view-section');

    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.getAttribute('data-target');

            // Update navigation buttons
            navButtons.forEach(b => {
                b.classList.remove('active', 'text-charcoal');
                b.classList.add('text-charcoal/40');
            });
            btn.classList.add('active', 'text-charcoal');
            btn.classList.remove('text-charcoal/40');

            // Update sections
            sections.forEach(section => {
                if (section.id === targetId) {
                    section.classList.remove('hidden');
                    // Small delay to allow display:block to apply before transition
                    setTimeout(() => {
                        section.classList.add('active');
                    }, 10);
                } else {
                    section.classList.remove('active');
                    // Hide after transition completes
                    setTimeout(() => {
                        if(!section.classList.contains('active')) {
                            section.classList.add('hidden');
                        }
                    }, 600); // matches the transition duration in CSS
                }
            });
        });
    });

    // PDF Modal logic
    const certLinks = document.querySelectorAll('.cert-link');
    const pdfModal = document.getElementById('pdf-modal');
    const pdfFrame = document.getElementById('pdf-frame');
    const closeModal = document.getElementById('close-modal');

    certLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const pdfSrc = link.getAttribute('data-pdf');
            pdfFrame.src = pdfSrc;
            pdfModal.classList.remove('hidden');
            setTimeout(() => {
                pdfModal.classList.remove('opacity-0');
            }, 10);
        });
    });

    closeModal.addEventListener('click', () => {
        pdfModal.classList.add('opacity-0');
        setTimeout(() => {
            pdfModal.classList.add('hidden');
            pdfFrame.src = '';
        }, 300);
    });
});
