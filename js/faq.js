// Script de acordeão acessível para o FAQ

document.addEventListener('DOMContentLoaded', function () {
    const questions = document.querySelectorAll('.faq-question');
    questions.forEach(btn => {
        btn.addEventListener('click', function () {
            const expanded = this.getAttribute('aria-expanded') === 'true';
            // Fecha todos
            questions.forEach(q => {
                q.setAttribute('aria-expanded', 'false');
                q.nextElementSibling.hidden = true;
                q.querySelector('.faq-icon').textContent = '+';
            });
            // Abre se não estava aberto
            if (!expanded) {
                this.setAttribute('aria-expanded', 'true');
                this.nextElementSibling.hidden = false;
                this.querySelector('.faq-icon').textContent = '–';
                this.focus();
            }
        });
        // Acessibilidade: abrir/fechar com Enter/Espaço
        btn.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                btn.click();
            }
        });
    });
}); 