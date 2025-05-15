document.addEventListener("DOMContentLoaded", function () {
    const footerContainer = document.getElementById("footer");
    if (!footerContainer) return;

    // Função para garantir que o Font Awesome está carregado
    function ensureFontAwesomeLoaded() {
        return new Promise((resolve) => {
            if (document.querySelector('link[href*="font-awesome"]')) {
                resolve();
            } else {
                const link = document.createElement('link');
                link.rel = 'stylesheet';
                link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css';
                link.crossOrigin = 'anonymous';
                link.referrerPolicy = 'no-referrer';
                document.head.appendChild(link);
                link.onload = resolve;
                // fallback: resolve após 1s caso onload não dispare
                setTimeout(resolve, 1000);
            }
        });
    }

    fetch('footer.html')
        .then(res => {
            if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
            return res.text();
        })
        .then(data => {
            ensureFontAwesomeLoaded().then(() => {
                footerContainer.innerHTML = data;
            });
        })
        .catch(error => {
            console.error("Erro ao carregar o footer:", error);
            footerContainer.innerHTML = `
                <footer>
                    <div class="footer-content">
                        <div class="footer-section">
                            <h3>IMREA HCFMUSP</h3>
                            <p>© 2024 Todos os direitos reservados.</p>
                        </div>
                    </div>
                </footer>
            `;
        });
});
  