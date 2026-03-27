// ================= DICIONÁRIO DE TRADUÇÕES =================
// Se você é recrutador e tá lendo isso: Sim, eu fiz meu próprio i18n em JS puro. 
// Bibliotecas pesadas como i18next são legais, mas pra uma Landing Page de alta performance, 
// eu prefiro não fazer o Lighthouse chorar com o tamanho do bundle. 
// Menos request, menos parse time = lead convertendo mais rápido. Me contrata.
//
// NOTA DA ENGENHARIA: Este dicionário foi mantido como legado e fallback. 
// O site agora usa um sistema de SEO Internacional avançado com arquivos físicos 
// e pastas (/en/, /es/, /pl/) para ranquear nativamente no Google em cada país!

const translations = {
    pt: {
        title_tag: "Lucas Prado | Desenvolvedor Web, Criação de Sites de Alta Performance e SEO",
        meta_desc: "Procurando um profissional para criar seu site? Engenharia web de elite focada em criação de sites rápidos (Performance 90+), SEO gabaritado e alta conversão.",
        og_title: "Lucas Prado | Criação de Sites e Engenharia Web de Elite",
        og_desc: "Transformo código em ativos de alta conversão. Especialista em criação de sites com SEO 100% gabaritado pelo Google.",
        lang_label: "<i class='fas fa-globe' aria-hidden='true'></i> Idioma:",
        verified_badge: "<i class='fas fa-check-circle' aria-hidden='true'></i> Desenvolvedor Verificado Google",
        hero_title: "Desenvolvedor Web com <span class='purple-text'>Marketing Mindset</span>.",
        hero_subtitle: "Criação de sites de alta performance, extensões para navegador e automações focadas em resolver problemas reais e melhorar a experiência do usuário.",
        hero_bio: "Meu diferencial está na interseção entre engenharia web, produto e comunicação. Não construo apenas interfaces bonitas. Eu crio soluções digitais com foco em SEO, clareza, eficiência e impacto real.",
        btn_projects: "Ver projetos <i class='fas fa-arrow-down' aria-hidden='true'></i>",
        section_title: "Projetos em destaque <span class='purple-dot' aria-hidden='true'>.</span>",
        sites_title: "Websites",
        ext_title: "Extensões para Navegador",
        proj1_desc: "Site institucional desenvolvido para um escritório de contabilidade. Foco em apresentar os serviços corporativos de forma clara, profissional e rápida.",
        btn_visit: "Visitar Site <i class='fas fa-external-link-alt' aria-hidden='true'></i>",
        lbl_perf: "Perf.",
        lbl_acess: "Acess.",
        lbl_prat: "Práticas",
        lbl_media: "Média",
        lbl_fonte: "Fonte: Auditoria Google PageSpeed Insights",
        proj2_desc: "Plataforma web para um escritório de advocacia. Design focado em transmitir segurança jurídica e facilitar o contato direto com os advogados.",
        proj3_title: "Câmbio Real-Time",
        proj3_desc: "Ferramenta para acesso rápido e preciso a cotações globais, sem impactar o navegador.",
        feat1: "<strong>Smart Badge:</strong> Salva sua moeda no ícone.",
        feat2: "<strong>Conversão:</strong> Direto no botão direito.",
        feat3: "<strong>12 Moedas:</strong> USD, EUR, PLN, BTC e mais.",
        btn_store: "Baixar Extensão <i class='fas fa-download' aria-hidden='true'></i>",
        proj4_title: "SmartCase Pro (Format)",
        proj4_desc: "A mais completa ferramenta de formatação. Converta textos, limpe dados e oculte informações sensíveis. 100% local e seguro.",
        feat4_1: "<strong>Dev Tools:</strong> camelCase, snake_case.",
        feat4_2: "<strong>Privacidade:</strong> Oculte dados com um clique.",
        feat4_3: "<strong>Global:</strong> Tradução nativa para 6 idiomas.",
        proj5_title: "ClipOctaplus",
        proj5_desc: "Gerenciador de área de transferência focado em privacidade e produtividade. Salva seu histórico 100% localmente.",
        feat5_1: "<strong>Histórico Automático:</strong> Salva textos e imagens copiados.",
        feat5_2: "<strong>Cofre Seguro:</strong> Proteção de itens com senha (PIN).",
        feat5_3: "<strong>Privacidade:</strong> Roda 100% offline e sem rastreio.",
        srv_title: "Eleve o nível do seu negócio <span class='purple-dot' aria-hidden='true'>.</span>",
        srv_desc: "Seja criando um site do zero, garantindo a nota máxima em SEO para você ser achado no Google, ou cuidando da manutenção, eu trago a engenharia de alto padrão para a sua empresa.",
        srv_1_title: "Criação de Sites Institucionais:",
        srv_1_desc: "Engenharia sob medida com código puro, livre de templates pesados. O resultado? Plataformas ultra-rápidas desenhadas para converter clientes reais.",
        srv_2_title: "Otimização e SEO 100%:",
        srv_2_desc: "Ajusto seu site para gabaritar o Google. SEO otimizado não é custo, é tráfego orgânico gratuito e vitalício. Quem não é visto no topo, não é lembrado.",
        srv_3_title: "Manutenção Especializada:",
        srv_3_desc: "Seu ecossistema rodando liso e seguro. Ofereço 6 meses de garantia técnica gratuita após a entrega (embora a estrutura seja tão sólida que você dificilmente precisará usar).",
        btn_zap_srv: "Quero um site de Alta Performance",
        btn_calendly: "Agendar Reunião Estratégica",
        game_title: "Pausa para o Corgi <span class='purple-dot' aria-hidden='true'>.</span>",
        game_desc: "Cansado de ver código? Eu fiz esse joguinho estilo \"Dino Run\" do Chrome, mas com um Corgi (porque Corgis são melhores). Tente bater seu recorde!",
        btn_google: "Ver Perfil no Google",
        footer: "Desenvolvido por Lucas Prado © 2026. Todos os direitos reservados.",
        whatsapp_btn: "<i class='fab fa-whatsapp' aria-hidden='true'></i> Iniciar Projeto",
        whatsapp_msg: "Fala, Lucas! Vi seu portfólio de criação de sites de alta performance e SEO. Gostaria de bater um papo sobre um projeto para o meu negócio."
    },
    // Nota: O Inglês, Espanhol e Polonês também estão a salvo fisicamente nas pastas /en/, /es/ e /pl/.
};

// ================= ROTEADOR DE SEO INTERNACIONAL =================
function changeLanguage(lang) {
    // A mágica agora é física! Em vez de injetar no DOM e perder o SEO,
    // nós redirecionamos o usuário para a URL oficial da língua dele.
    
    // Salva a escolha manual do usuário no navegador (O Salvo-conduto contra o loop infinito no mobile!)
    localStorage.setItem('lang_manually_selected', 'true');
    
    const currentPath = window.location.pathname;
    const targetPath = lang === 'pt' ? '/' : `/${lang}/`;

    // Normalizamos o caminho atual (caso o usuário tenha acessado /index.html diretamente)
    // para fazer a comparação de forma exata e evitar bugs.
    const normalizedPath = currentPath.endsWith('index.html') ? currentPath.replace('index.html', '') : currentPath;

    // Se a pasta que ele quer ir é diferente de onde ele está, dispara o foguete
    if (normalizedPath !== targetPath) {
        window.location.href = targetPath;
    }
}

// ================= INICIALIZAÇÃO AUTOMÁTICA (O POLICIAL DA FRONTEIRA) =================
document.addEventListener('DOMContentLoaded', () => {
    // Pego o idioma nativo do navegador do usuário e já sirvo a página mastigada pra ele. 
    
    // Fallback rigoroso (|| 'en') porque extensões pesadas de privacidade 
    // podem retornar o navigator.language como undefined.
    const rawLang = navigator.language || navigator.userLanguage || 'en';
    const browserLang = rawLang.slice(0, 2);
    
    const currentPath = window.location.pathname;

    // REGRA DE OURO DO SEO INTERNACIONAL:
    // Só redirecionamos automaticamente se o usuário estiver acessando a raiz (lucasprado.space/)
    // Se ele já estiver dentro de /en/, /pl/, etc, deixamos ele quieto lá pra não gerar loop!
    const isRoot = currentPath === '/' || currentPath === '/index.html' || currentPath === '';
    
    // Verifica se o usuário já forçou a escolha na mão antes (O Salvo-conduto)
    const manualOverride = localStorage.getItem('lang_manually_selected');

    // Só atua se for na raiz E se o usuário não escolheu manualmente
    if (isRoot && !manualOverride) {
        // Se o cara é BR (pt), ele fica na raiz mesmo. 
        if (browserLang !== 'pt') {
            const supportedLangs = ['en', 'es', 'pl'];
            
            // Se a língua dele não existir (ex: um Alemão 'de' acessando), cai no fallback 'en' (Inglês)
            const targetLang = supportedLangs.includes(browserLang) ? browserLang : 'en';
            
            // Usamos replace() em vez de href pra não sujar o histórico do botão "Voltar" do navegador do cara
            window.location.replace(`/${targetLang}/`);
        }
    }

    // Mantém o <select> do HTML sincronizado visualmente com a URL atual (Marketing Mindset on)
    const langSelect = document.getElementById('lang-select');
    if (langSelect) {
        if (currentPath.includes('/en/')) langSelect.value = 'en';
        else if (currentPath.includes('/es/')) langSelect.value = 'es';
        else if (currentPath.includes('/pl/')) langSelect.value = 'pl';
        else langSelect.value = 'pt';
    }
});