// ================= ROTEADOR DE SEO INTERNACIONAL =================
// Se você está lendo isso no DevTools: sim, eu aposentei o i18n dinâmico por um motivo nobre.
// Para uma Landing Page de alta performance, decidi migrar para uma estrutura de arquivos físicos 
// e pastas (/pt/, /en/, etc.). Assim, o Google indexa o conteúdo nativo de cada país perfeitamente 
// e eu não sacrifico nenhum milissegundo de carregamento rodando scripts pesados. 
// Menos request, menos parse time = lead convertendo mais rápido.

function changeLanguage(lang) {
    // Salvo a escolha manual na sessão atual para blindar o navegador contra loops de redirecionamento
    sessionStorage.setItem('lang_redirected', 'true');
    
    const targetPath = `/${lang}/`;
    const currentPath = window.location.pathname;
    const normalizedPath = currentPath.endsWith('index.html') ? currentPath.replace('index.html', '') : currentPath;

    if (normalizedPath !== targetPath) {
        window.location.href = targetPath;
    }
}

// ================= INICIALIZAÇÃO AUTOMÁTICA =================
document.addEventListener('DOMContentLoaded', () => {
    const currentPath = window.location.pathname;

    // Se o usuário já entrou direto em uma subpasta, travo o estado da sessão.
    // Isso garante que o index da raiz saiba que ele já foi direcionado e não force um loop.
    if (currentPath.includes('/pt/') || currentPath.includes('/en/') || currentPath.includes('/es/') || currentPath.includes('/pl/')) {
        sessionStorage.setItem('lang_redirected', 'true');
    }

    // Mantenho o <select> do HTML sincronizado visualmente com a URL atual (foco total na UX)
    const langSelect = document.getElementById('lang-select');
    if (langSelect) {
        if (currentPath.includes('/pt/')) langSelect.value = 'pt';
        else if (currentPath.includes('/en/')) langSelect.value = 'en';
        else if (currentPath.includes('/es/')) langSelect.value = 'es';
        else if (currentPath.includes('/pl/')) langSelect.value = 'pl';
        else {
            langSelect.value = 'en';
        }
    }
});
