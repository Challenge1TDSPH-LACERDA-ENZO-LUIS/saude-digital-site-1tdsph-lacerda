document.addEventListener('DOMContentLoaded', function() {
    const logo = document.querySelector('.logo-header');
    if (!logo) return;
    logo.addEventListener('click', function(e) {
        // Só anima, não faz scroll (o link já redireciona)
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 200);
    });
}); 