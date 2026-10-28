const exploreBtn = document.getElementById('exploreBtn');

if (window.AOS) {
    AOS.init({
        duration: 800,
        once: true,
        offset: 30
    });
}

if (exploreBtn) {
    exploreBtn.addEventListener('click', () => {
        document.getElementById('services')?.scrollIntoView({
            behavior: 'smooth',
            block : 'start'
        });
    });
}
