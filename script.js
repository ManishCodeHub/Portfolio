document.querySelector('.nav-toggle').addEventListener('change', function() {
    document.body.classList.toggle('nav-open', this.checked);
});

window.addEventListener('scroll', () => {
    const navToggle = document.querySelector('.nav-toggle');
    if (navToggle.checked) {
        navToggle.checked = false;
        document.body.classList.remove('nav-open');
    }
});