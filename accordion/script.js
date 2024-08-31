const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const accordionItem = header.parentElement;
        const isActive = accordionItem.classList.contains('active');
        
        document.querySelectorAll('.accordion-item').forEach(item => {
            item.classList.remove('active');
            item.querySelector('.accordion-content').style.maxHeight = null;
        });

        if (!isActive) {
            accordionItem.classList.add('active');
            const content = accordionItem.querySelector('.accordion-content');
            content.style.maxHeight = content.scrollHeight + 'px';
        }
    });
});
