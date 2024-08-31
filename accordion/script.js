document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const accordionContent = header.nextElementSibling;

        header.classList.toggle('active');
        accordionContent.classList.toggle('open');

        if (accordionContent.style.maxHeight) {
            accordionContent.style.maxHeight = null;
        } else {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
        }
    });
});
