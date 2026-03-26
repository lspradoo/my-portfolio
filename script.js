// ================= DICIONÁRIO DE TRADUÇÕES =================
// Se você é recrutador e tá lendo isso: Sim, eu fiz meu próprio i18n em JS puro. 
// Bibliotecas pesadas como i18next são legais, mas pra uma Landing Page de alta performance, 
// eu prefiro não fazer o Lighthouse chorar com o tamanho do bundle. 
// Menos request, menos parse time = lead convertendo mais rápido. Me contrata.

const translations = {
    pt: {
        // SEO no código (invisível pro usuário, perfeito pro Google)
        title_tag: "Lucas Prado | Desenvolvedor Web, Criação de Sites de Alta Performance e SEO",
        lang_label: "<i class='fas fa-globe' aria-hidden='true'></i> Idioma:",
        
        // Hero Section - Copy focado em UX, com veneno invisível de SEO
        hero_title: "Desenvolvedor Web com <span class='purple-text'>Marketing Mindset</span>.",
        hero_subtitle: "Criação de sites de alta performance, extensões para navegador e automações focadas em resolver problemas reais e melhorar a experiência do usuário.",
        hero_bio: "Meu diferencial está na interseção entre engenharia web, produto e comunicação. Não construo apenas interfaces bonitas. Eu crio soluções digitais com foco em SEO, clareza, eficiência e impacto real.",
        btn_projects: "Ver projetos <i class='fas fa-arrow-down' aria-hidden='true'></i>",
        
        // Projetos
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
        
        // Serviços & Conversão
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
        // Zap com mensagem de quem sabe o que quer:
        whatsapp_msg: "Fala, Lucas! Vi seu portfólio de criação de sites de alta performance e SEO. Gostaria de bater um papo sobre um projeto para o meu negócio."
    },
    en: {
        title_tag: "Lucas Prado | Web Developer, High-Performance Website Creation & SEO",
        lang_label: "<i class='fas fa-globe' aria-hidden='true'></i> Language:",
        
        hero_title: "Web Developer with a <span class='purple-text'>Marketing Mindset</span>.",
        hero_subtitle: "High-performance website creation, browser extensions, and automations focused on solving real problems and improving the user experience.",
        hero_bio: "My edge lies at the intersection of web engineering, product, and communication. I don't just build pretty interfaces. I create digital solutions focused on SEO, clarity, efficiency, and real impact.",
        btn_projects: "View projects <i class='fas fa-arrow-down' aria-hidden='true'></i>",
        
        section_title: "Featured projects <span class='purple-dot' aria-hidden='true'>.</span>",
        sites_title: "Websites",
        ext_title: "Browser Extensions",
        
        proj1_desc: "Corporate website developed for an accounting firm. Focused on presenting corporate services clearly, professionally, and quickly.",
        btn_visit: "Visit Site <i class='fas fa-external-link-alt' aria-hidden='true'></i>",
        
        lbl_perf: "Perf.",
        lbl_acess: "Access.",
        lbl_prat: "Practices",
        lbl_media: "Average",
        lbl_fonte: "Source: Google PageSpeed Insights Audit",
        
        proj2_desc: "Web platform for a law firm. Design focused on conveying legal security and facilitating direct contact with the lawyers.",
        
        proj3_title: "Real-Time Exchange",
        proj3_desc: "Tool for fast and precise access to global exchange rates, without impacting the browser.",
        feat1: "<strong>Smart Badge:</strong> Pins your currency to the icon.",
        feat2: "<strong>Conversion:</strong> Right-click context menu.",
        feat3: "<strong>12 Currencies:</strong> USD, EUR, PLN, BTC and more.",
        btn_store: "Download Extension <i class='fas fa-download' aria-hidden='true'></i>",
        
        proj4_title: "SmartCase Pro (Format)",
        proj4_desc: "The ultimate formatting tool. Convert text, clean data, and hide sensitive information. 100% local and secure.",
        feat4_1: "<strong>Dev Tools:</strong> camelCase, snake_case.",
        feat4_2: "<strong>Privacy:</strong> Redact data in one click.",
        feat4_3: "<strong>Global:</strong> Native translation in 6 languages.",
        
        proj5_title: "ClipOctaplus",
        proj5_desc: "Clipboard manager focused on privacy and productivity. Saves your history 100% locally.",
        feat5_1: "<strong>Auto-History:</strong> Saves copied texts and images.",
        feat5_2: "<strong>Secure Vault:</strong> PIN-protected area for sensitive items.",
        feat5_3: "<strong>Privacy First:</strong> Runs 100% offline with zero tracking.",
        
        srv_title: "Elevate your business <span class='purple-dot' aria-hidden='true'>.</span>",
        srv_desc: "Whether creating a website from scratch, guaranteeing the highest SEO score so you are found on Google, or taking care of maintenance, I bring high-end engineering to your company.",
        srv_1_title: "Corporate Website Creation:",
        srv_1_desc: "Custom engineering with pure code, free of heavy templates. The result? Ultra-fast platforms designed to convert real clients.",
        srv_2_title: "Optimization & 100% SEO:",
        srv_2_desc: "I tune your site to ace Google's tests. Optimized SEO isn't a cost, it's free, lifelong organic traffic. If you're not seen at the top, you're not remembered.",
        srv_3_title: "Specialized Maintenance:",
        srv_3_desc: "Your ecosystem running smoothly and securely. I offer 6 months of free technical warranty after delivery (although the structure is so solid you'll hardly need it).",
        
        btn_zap_srv: "I want a High-Performance website",
        btn_calendly: "Schedule Strategy Meeting",
        
        game_title: "Corgi Break <span class='purple-dot' aria-hidden='true'>.</span>",
        game_desc: "Tired of looking at code? I made this Chrome \"Dino Run\" style game, but with a Corgi (because Corgis are better). Try to beat your high score!",
        btn_google: "View Google Profile",
        footer: "Developed by Lucas Prado © 2026. All rights reserved.",
        
        whatsapp_btn: "<i class='fab fa-whatsapp' aria-hidden='true'></i> Start a Project",
        whatsapp_msg: "Hi Lucas! I saw your portfolio on high-performance website creation and SEO. I'd like to chat about a project for my business."
    },
    es: {
        title_tag: "Lucas Prado | Desarrollador Web, Creación de Sitios de Alto Rendimiento y SEO",
        lang_label: "<i class='fas fa-globe' aria-hidden='true'></i> Idioma:",
        
        hero_title: "Desarrollador Web con <span class='purple-text'>Mentalidad de Marketing</span>.",
        hero_subtitle: "Creación de sitios web de alto rendimiento, extensiones para navegador y automatizaciones enfocadas en resolver problemas reales y mejorar la experiencia del usuario.",
        hero_bio: "Mi diferencial está en la intersección entre ingeniería web, producto y comunicación. No solo construyo interfaces bonitas. Creo soluciones digitales con enfoque en SEO, claridad, eficiencia e impacto real.",
        btn_projects: "Ver proyectos <i class='fas fa-arrow-down' aria-hidden='true'></i>",
        
        section_title: "Proyectos destacados <span class='purple-dot' aria-hidden='true'>.</span>",
        sites_title: "Sitios Web",
        ext_title: "Extensiones de Navegador",
        
        proj1_desc: "Sitio institucional desarrollado para una firma de contabilidad. Enfocado en presentar los servicios corporativos de manera clara, profesional y rápida.",
        btn_visit: "Visitar Sitio <i class='fas fa-external-link-alt' aria-hidden='true'></i>",
        
        lbl_perf: "Rend.",
        lbl_acess: "Acceso.",
        lbl_prat: "Prácticas",
        lbl_media: "Media",
        lbl_fonte: "Fuente: Auditoría Google PageSpeed Insights",
        
        proj2_desc: "Plataforma web para un bufete de abogados. Diseño enfocado en transmitir seguridad jurídica y facilitar el contacto directo con los abogados.",
        
        proj3_title: "Cambio en Tiempo Real",
        proj3_desc: "Herramienta para acceso rápido y preciso a tasas globales, sin afectar el navegador.",
        feat1: "<strong>Smart Badge:</strong> Fija tu moneda en el ícono.",
        feat2: "<strong>Conversión:</strong> Directo en el clic derecho.",
        feat3: "<strong>12 Monedas:</strong> USD, EUR, PLN, BTC y más.",
        btn_store: "Descargar Extensión <i class='fas fa-download' aria-hidden='true'></i>",
        
        proj4_title: "SmartCase Pro (Format)",
        proj4_desc: "La herramienta definitiva de formato. Convierte texto, limpia datos y oculta información sensible. 100% local y seguro.",
        feat4_1: "<strong>Herramientas Dev:</strong> camelCase, snake_case.",
        feat4_2: "<strong>Privacidad:</strong> Oculta datos con un clic.",
        feat4_3: "<strong>Global:</strong> Traducción nativa en 6 idiomas.",
        
        proj5_title: "ClipOctaplus",
        proj5_desc: "Gestor de portapapeles centrado en la privacidad y productividad. Guarda tu historial 100% localmente.",
        feat5_1: "<strong>Historial Automático:</strong> Guarda textos e imágenes.",
        feat5_2: "<strong>Bóveda Segura:</strong> Área protegida con código PIN.",
        feat5_3: "<strong>Privacidad:</strong> Funciona 100% offline, sin rastreo.",
        
        srv_title: "Eleva el nivel de tu negocio <span class='purple-dot' aria-hidden='true'>.</span>",
        srv_desc: "Ya sea creando un sitio desde cero, garantizando la máxima puntuación en SEO para que te encuentren en Google, o encargándome del mantenimiento, aporto ingeniería de alto nivel a tu empresa.",
        srv_1_title: "Creación de Sitios Corporativos:",
        srv_1_desc: "Ingeniería a medida con código puro, libre de plantillas pesadas. ¿El resultado? Plataformas ultrarrápidas diseñadas para convertir clientes reales.",
        srv_2_title: "Optimización y SEO 100%:",
        srv_2_desc: "Ajusto tu sitio para superar las pruebas de Google. El SEO optimizado no es un gasto, es tráfico orgánico gratuito y de por vida.",
        srv_3_title: "Mantenimiento Especializado:",
        srv_3_desc: "Tu ecosistema funcionando de forma fluida y segura. Ofrezco 6 meses de garantía técnica gratuita tras la entrega.",
        
        btn_zap_srv: "Quiero un sitio de Alto Rendimiento",
        btn_calendly: "Agendar Reunión Estratégica",
        
        game_title: "Pausa para el Corgi <span class='purple-dot' aria-hidden='true'>.</span>",
        game_desc: "¿Cansado de ver código? Hice este juego al estilo \"Dino Run\" de Chrome, pero con un Corgi. ¡Intenta superar tu récord!",
        btn_google: "Ver Perfil en Google",
        footer: "Desarrollado por Lucas Prado © 2026. Todos los derechos reservados.",
        
        whatsapp_btn: "<i class='fab fa-whatsapp' aria-hidden='true'></i> Iniciar Proyecto",
        whatsapp_msg: "¡Hola Lucas! Vi tu portafolio sobre creación de sitios web de alto rendimiento y SEO. Me gustaría hablar sobre un proyecto para mi negocio."
    },
    pl: {
        title_tag: "Lucas Prado | Programista Web, Tworzenie Stron o Wysokiej Wydajności i SEO",
        lang_label: "<i class='fas fa-globe' aria-hidden='true'></i> Język:",
        
        hero_title: "Programista Web z <span class='purple-text'>Podejściem Marketingowym</span>.",
        hero_subtitle: "Tworzenie wydajnych stron internetowych, rozszerzeń do przeglądarek i automatyzacji skupionych na rozwiązywaniu rzeczywistych problemów i poprawie doświadczeń użytkownika.",
        hero_bio: "Moja przewaga leży na skrzyżowaniu inżynierii webowej, produktu i komunikacji. Nie tworzę tylko ładnych interfejsów. Tworzę cyfrowe rozwiązania z naciskiem na SEO, przejrzystość, efektywność i realny wpływ.",
        btn_projects: "Zobacz projekty <i class='fas fa-arrow-down' aria-hidden='true'></i>",
        
        section_title: "Polecane projekty <span class='purple-dot' aria-hidden='true'>.</span>",
        sites_title: "Strony Internetowe",
        ext_title: "Rozszerzenia Przeglądarki",
        
        proj1_desc: "Strona korporacyjna opracowana dla biura rachunkowego. Skupiona na jasnym, profesjonalnym i szybkim prezentowaniu usług firmy.",
        btn_visit: "Odwiedź stronę <i class='fas fa-external-link-alt' aria-hidden='true'></i>",
        
        lbl_perf: "Wydaj.",
        lbl_acess: "Dostęp.",
        lbl_prat: "Praktyki",
        lbl_media: "Średnia",
        lbl_fonte: "Źródło: Audyt Google PageSpeed Insights",
        
        proj2_desc: "Platforma internetowa dla kancelarii prawnej. Projekt skupiony na przekazywaniu bezpieczeństwa prawnego i ułatwianiu bezpośredniego kontaktu z prawnikami.",
        
        proj3_title: "Kursy Walut w Czasie Rzeczywistym",
        proj3_desc: "Narzędzie do szybkiego i precyzyjnego dostępu do globalnych kursów bez obciążania przeglądarki.",
        feat1: "<strong>Smart Badge:</strong> Zapisuje walutę na ikonie.",
        feat2: "<strong>Konwersja:</strong> Z menu kontekstowego.",
        feat3: "<strong>12 Walut:</strong> USD, EUR, PLN, BTC i inne.",
        btn_store: "Pobierz Rozszerzenie <i class='fas fa-download' aria-hidden='true'></i>",
        
        proj4_title: "SmartCase Pro (Format)",
        proj4_desc: "Najlepsze narzędzie do formatowania. Konwertuj tekst, czyść dane i ukrywaj poufne informacje. 100% lokalnie i bezpiecznie.",
        feat4_1: "<strong>Narzędzia Dev:</strong> camelCase, snake_case.",
        feat4_2: "<strong>Prywatność:</strong> Ukryj dane jednym kliknięciem.",
        feat4_3: "<strong>Globalne:</strong> 6 języków, w tym polski.",
        
        proj5_title: "ClipOctaplus",
        proj5_desc: "Menedżer schowka zoptymalizowany pod kątem prywatności i produktywności. Zapisuje historię w 100% lokalnie.",
        feat5_1: "<strong>Auto-Historia:</strong> Zapisuje skopiowane teksty i obrazy.",
        feat5_2: "<strong>Bezpieczny Sejf:</strong> Obszar chroniony kodem PIN.",
        feat5_3: "<strong>Prywatność:</strong> Działa 100% offline, bez śledzenia.",
        
        srv_title: "Wznieś swój biznes na wyższy poziom <span class='purple-dot' aria-hidden='true'>.</span>",
        srv_desc: "Niezależnie od tego, czy tworzysz stronę od zera, gwarantujesz maksymalny wynik SEO, aby można było Cię znaleźć w Google, czy też dbasz o konserwację, wnoszę do Twojej firmy wysokiej klasy inżynierię.",
        srv_1_title: "Tworzenie Stron Korporacyjnych:",
        srv_1_desc: "Niestandardowa inżynieria z czystym kodem, wolna od ciężkich szablonów. Wynik? Ultraszybkie platformy zaprojektowane do konwersji.",
        srv_2_title: "Optymalizacja i 100% SEO:",
        srv_2_desc: "Dostrajam Twoją stronę, aby zaliczyła testy Google. Zoptymalizowane SEO to nie koszt, to darmowy, dożywotni ruch organiczny.",
        srv_3_title: "Specjalistyczna Konserwacja:",
        srv_3_desc: "Twój ekosystem działa płynnie i bezpiecznie. Oferuję 6 miesięcy darmowej gwarancji technicznej po dostarczeniu.",
        
        btn_zap_srv: "Chcę stronę o Wysokiej Wydajności",
        btn_calendly: "Zaplanuj Spotkanie Strategiczne",
        
        game_title: "Przerwa na Corgi <span class='purple-dot' aria-hidden='true'>.</span>",
        game_desc: "Zmęczony patrzeniem na kod? Zrobiłem tę grę w stylu \"Dino Run\" z Chrome, ale z Corgi. Spróbuj pobić swój rekord!",
        btn_google: "Zobacz Profil w Google",
        footer: "Zaprojektowane i stworzone przez Lucas Prado © 2026. Wszelkie prawa zastrzeżone.",
        
        whatsapp_btn: "<i class='fab fa-whatsapp' aria-hidden='true'></i> Rozpocznij Projekt",
        whatsapp_msg: "Cześć Lucas! Widziałem Twoje portfolio dotyczące tworzenia wydajnych stron i SEO. Chciałbym porozmawiać o projekcie dla mojej firmy."
    }
};

// ================= FUNÇÃO DE TROCA DE IDIOMA =================
// A famosa "gambiarra elegante". Funciona rápido, não depende de NPM e o DOM agradece.
function changeLanguage(lang) {
    // 1. Atualiza os textos da tela
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            // innerHTML aqui é seguro porque sou eu mesmo quem controla o payload no dicionário acima. Sem neura de XSS.
            element.innerHTML = translations[lang][key];
        }
    });
    
    // 2. SEO DINÂMICO! Isso aqui separa os devs juniores dos que resolvem problema.
    // Atualizar a Title tag com base na língua selecionada para ranquear melhor se a pessoa favoritar ou compartilhar.
    if(translations[lang] && translations[lang].title_tag) {
        document.title = translations[lang].title_tag;
    }

    // 3. Marketing Mindset on: Reduzindo atrito na conversão.
    // Já atualiza os links do WhatsApp com a mensagem pré-pronta na língua do cliente.
    const zapBtns = document.querySelectorAll('.whatsapp-btn, .dynamic-zap');
    zapBtns.forEach(btn => {
        if (translations[lang] && translations[lang].whatsapp_msg) {
            const numeroZap = "5511999156687";
            const msgCodificada = encodeURIComponent(translations[lang].whatsapp_msg);
            btn.href = `https://wa.me/${numeroZap}?text=${msgCodificada}`;
        }
    });
    
    // 4. Mantém o select sincronizado caso a linguagem seja trocada via código
    const langSelect = document.getElementById('lang-select');
    if (langSelect) {
        langSelect.value = lang;
    }
    
    // 5. Acessibilidade (A11y) levada a sério: Muda o idioma raiz da página pro leitor de tela não ler Inglês com sotaque de caipira Brasileiro.
    document.documentElement.lang = lang;
}

// ================= INICIALIZAÇÃO AUTOMÁTICA =================
document.addEventListener('DOMContentLoaded', () => {
    // Pego o idioma nativo do navegador do usuário e já sirvo a página mastigada pra ele. 
    // É o famoso "It works on my machine" convertido para "It works everywhere".
    const browserLang = navigator.language.slice(0, 2);
    
    // Fallback inteligente: se for um idioma que eu não dou suporte (ex: ar, de, ja), carrega em inglês por padrão.
    const initialLang = translations[browserLang] ? browserLang : 'en';
    changeLanguage(initialLang);
});