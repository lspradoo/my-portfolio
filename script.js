// ================= DICIONÁRIO DE TRADUÇÕES =================
const translations = {
    pt: {
        lang_label: "<i class='fas fa-globe'></i> Idioma:",
        hero_title: "Desenvolvedor com <span class='purple-text'>Marketing Mindset</span>.",
        hero_subtitle: "Desenvolvo sites de alta performance, extensões para navegador e automações focadas em resolver problemas reais e melhorar a experiência do usuário.",
        hero_bio: "Meu diferencial está na interseção entre código, produto e comunicação. Não construo apenas interfaces bonitas. Eu crio soluções digitais com foco em clareza, eficiência e impacto real.",
        btn_projects: "Ver projetos <i class='fas fa-arrow-down'></i>",
        section_title: "Projetos em destaque <span class='purple-dot'>.</span>",
        sites_title: "Websites",
        ext_title: "Extensões para Navegador",
        proj1_desc: "Plataforma corporativa otimizada para SEO e conversão. Redesenhada para posicionar a marca como autoridade no setor contábil e agilizar a captação de novos clientes.",
        btn_visit: "Visitar Site <i class='fas fa-external-link-alt'></i>",
        proj2_desc: "Site focado em experiência do usuário (UX) e geração de leads. Estrutura desenvolvida para transmitir confiança instantânea e encurtar a jornada de contato entre cliente e advogado.",
        
        proj3_title: "Câmbio Real-Time",
        proj3_desc: "Ferramenta para acesso rápido e preciso a cotações globais, sem impactar o navegador.",
        feat1: "<i class='fas fa-check purple-text'></i> <span><strong>Smart Badge:</strong> Salva sua moeda no ícone.</span>",
        feat2: "<i class='fas fa-check purple-text'></i> <span><strong>Conversão:</strong> Direto no botão direito.</span>",
        feat3: "<i class='fas fa-check purple-text'></i> <span><strong>12 Moedas:</strong> USD, EUR, PLN, BTC e mais.</span>",
        btn_store: "Baixar Extensão <i class='fas fa-download'></i>",
        
        proj4_title: "SmartCase Pro (Format)",
        proj4_desc: "A mais completa ferramenta de formatação. Converta textos, limpe dados e oculte informações sensíveis. 100% local e seguro.",
        feat4_1: "<i class='fas fa-check purple-text'></i> <span><strong>Dev Tools:</strong> camelCase, snake_case.</span>",
        feat4_2: "<i class='fas fa-check purple-text'></i> <span><strong>Privacidade:</strong> Oculte dados com um clique.</span>",
        feat4_3: "<i class='fas fa-check purple-text'></i> <span><strong>Global:</strong> Tradução nativa para 6 idiomas.</span>",
        
        // NOVO PROJETO: CLIPOCTAPLUS (SEM ÍCONE E FOCADO NO COPY/PASTE)
        proj5_title: "ClipOctaplus (Clipboard)",
        proj5_desc: "Gerenciador de área de transferência focado em privacidade e produtividade. Salva seu histórico 100% localmente.",
        feat5_1: "<span><strong>Histórico (Copy/Paste):</strong> Salva textos e imagens automaticamente.</span>",
        feat5_2: "<span><strong>Cofre Seguro:</strong> Proteção de itens com senha (PIN).</span>",
        feat5_3: "<span><strong>Privacidade:</strong> Roda 100% offline e sem rastreio.</span>",
        
        game_title: "Pausa para o Corgi <span class='purple-dot'>.</span>",
        game_desc: "Cansado de ver código? Eu fiz esse joguinho estilo \"Dino Run\" do Chrome, mas com um Corgi (porque Corgis são melhores). Meu recorde é <strong>829</strong>. Duvido você bater!",
        footer: "Desenvolvido por Lucas Prado © 2026. Todos os direitos reservados.",
        whatsapp_btn: "<i class='fab fa-whatsapp'></i> Iniciar Projeto",
        whatsapp_msg: "Olá, Lucas! Vi seu portfólio e gostaria de falar sobre um projeto."
    },
    en: {
        lang_label: "<i class='fas fa-globe'></i> Language:",
        hero_title: "Developer with a <span class='purple-text'>Marketing Mindset</span>.",
        hero_subtitle: "I build high-performance websites, browser extensions, and automations focused on solving real problems and improving user experience.",
        hero_bio: "My edge lies at the intersection of code, product, and communication. I don't just build pretty interfaces. I create digital solutions focused on clarity, efficiency, and real impact.",
        btn_projects: "View projects <i class='fas fa-arrow-down'></i>",
        section_title: "Featured projects <span class='purple-dot'>.</span>",
        sites_title: "Websites",
        ext_title: "Browser Extensions",
        proj1_desc: "Corporate platform optimized for SEO and conversion. Redesigned to position the brand as an authority in the accounting sector and streamline new client acquisition.",
        btn_visit: "Visit Site <i class='fas fa-external-link-alt'></i>",
        proj2_desc: "Website focused on User Experience (UX) and lead generation. Structure developed to convey instant trust and shorten the contact journey between client and lawyer.",
        
        proj3_title: "Real-Time Exchange",
        proj3_desc: "Tool for fast and precise access to global exchange rates without impacting the browser.",
        feat1: "<i class='fas fa-check purple-text'></i> <span><strong>Smart Badge:</strong> Pins your currency to the icon.</span>",
        feat2: "<i class='fas fa-check purple-text'></i> <span><strong>Conversion:</strong> Right-click context menu.</span>",
        feat3: "<i class='fas fa-check purple-text'></i> <span><strong>12 Currencies:</strong> USD, EUR, PLN, BTC, and more.</span>",
        btn_store: "Download <i class='fas fa-download'></i>",
        
        proj4_title: "SmartCase Pro (Format)",
        proj4_desc: "The ultimate formatting tool. Convert text, clean data, and hide sensitive information. 100% local and secure.",
        feat4_1: "<i class='fas fa-check purple-text'></i> <span><strong>Dev Tools:</strong> camelCase, snake_case.</span>",
        feat4_2: "<i class='fas fa-check purple-text'></i> <span><strong>Privacy:</strong> Redact data in one click.</span>",
        feat4_3: "<i class='fas fa-check purple-text'></i> <span><strong>Global:</strong> Native in 6 languages.</span>",
        
        // NOVO PROJETO: CLIPOCTAPLUS
        proj5_title: "ClipOctaplus (Clipboard)",
        proj5_desc: "Clipboard manager focused on privacy and productivity. Saves your history 100% locally.",
        feat5_1: "<span><strong>Auto-History:</strong> Saves copied texts and images seamlessly.</span>",
        feat5_2: "<span><strong>Secure Vault:</strong> PIN-protected area for sensitive items.</span>",
        feat5_3: "<span><strong>Privacy First:</strong> Runs 100% offline with zero tracking.</span>",
        
        game_title: "Corgi Break <span class='purple-dot'>.</span>",
        game_desc: "Tired of looking at code? I made this Chrome \"Dino Run\" style game, but with a Corgi (because Corgis are better). My high score is <strong>829</strong>. I dare you to beat it!",
        footer: "Developed by Lucas Prado © 2026. All rights reserved.",
        whatsapp_btn: "<i class='fab fa-whatsapp'></i> Start a Project",
        whatsapp_msg: "Hi, Lucas! I saw your portfolio and would like to talk about a project."
    },
    es: {
        lang_label: "<i class='fas fa-globe'></i> Idioma:",
        hero_title: "Desarrollador con <span class='purple-text'>Mentalidad de Marketing</span>.",
        hero_subtitle: "Desarrollo sitios de alto rendimiento, extensiones para navegador y automatizaciones enfocadas en resolver problemas reales y mejorar la experiencia del usuario.",
        hero_bio: "Mi diferencial está en la intersección entre código, producto y comunicación. No solo construyo interfaces bonitas. Creo soluciones digitales con enfoque en claridad, eficiencia e impacto real.",
        btn_projects: "Ver proyectos <i class='fas fa-arrow-down'></i>",
        section_title: "Proyectos destacados <span class='purple-dot'>.</span>",
        sites_title: "Sitios Web",
        ext_title: "Extensiones de Navegador",
        proj1_desc: "Plataforma corporativa optimizada para SEO y conversión. Rediseñada para posicionar la marca como autoridad en el sector contable y agilizar la captación de nuevos clientes.",
        btn_visit: "Visitar Sitio <i class='fas fa-external-link-alt'></i>",
        proj2_desc: "Sitio centrado en la experiencia del usuario (UX) y la generación de leads. Estructura desarrollada para transmitir confianza instantánea y acortar el proceso de contacto entre cliente y abogado.",
        
        proj3_title: "Cambio en Tiempo Real",
        proj3_desc: "Herramienta para acceso rápido y preciso a tasas globales sin afectar el navegador.",
        feat1: "<i class='fas fa-check purple-text'></i> <span><strong>Smart Badge:</strong> Fija tu moneda en el ícono.</span>",
        feat2: "<i class='fas fa-check purple-text'></i> <span><strong>Conversión:</strong> Directo en el clic derecho.</span>",
        feat3: "<i class='fas fa-check purple-text'></i> <span><strong>12 Monedas:</strong> USD, EUR, PLN, BTC y más.</span>",
        btn_store: "Descargar <i class='fas fa-download'></i>",
        
        proj4_title: "SmartCase Pro (Format)",
        proj4_desc: "La herramienta definitiva de formato. Convierte texto, limpia datos y oculta información sensible. 100% local y seguro.",
        feat4_1: "<i class='fas fa-check purple-text'></i> <span><strong>Herramientas Dev:</strong> camelCase, snake_case.</span>",
        feat4_2: "<i class='fas fa-check purple-text'></i> <span><strong>Privacidad:</strong> Oculta datos con un clic.</span>",
        feat4_3: "<i class='fas fa-check purple-text'></i> <span><strong>Global:</strong> Nativo en 6 idiomas.</span>",
        
        // NOVO PROJETO: CLIPOCTAPLUS
        proj5_title: "ClipOctaplus (Portapapeles)",
        proj5_desc: "Gestor de portapapeles centrado en la privacidad y productividad. Guarda tu historial 100% localmente.",
        feat5_1: "<span><strong>Historial:</strong> Guarda textos e imágenes al copiar.</span>",
        feat5_2: "<span><strong>Bóveda Segura:</strong> Área protegida con código PIN.</span>",
        feat5_3: "<span><strong>Privacidad:</strong> Funciona 100% offline, sin rastreo.</span>",
        
        game_title: "Pausa para el Corgi <span class='purple-dot'>.</span>",
        game_desc: "¿Cansado de ver código? Hice este juego al estilo \"Dino Run\" de Chrome, pero con un Corgi (porque los Corgis son mejores). Mi récord es <strong>829</strong>. ¡Te reto a superarlo!",
        footer: "Desarrollado por Lucas Prado © 2026. Todos los derechos reservados.",
        whatsapp_btn: "<i class='fab fa-whatsapp'></i> Iniciar Proyecto",
        whatsapp_msg: "¡Hola, Lucas! Vi tu portafolio y me gustaría hablar sobre un proyecto."
    },
    pl: {
        lang_label: "<i class='fas fa-globe'></i> Język:",
        hero_title: "Programista z <span class='purple-text'>Podejściem Marketingowym</span>.",
        hero_subtitle: "Tworzę wydajne strony internetowe, rozszerzenia do przeglądarek i automatyzacje skupione na rozwiązywaniu rzeczywistych problemów i poprawie doświadczeń użytkowników.",
        hero_bio: "Moja przewaga leży na skrzyżowaniu kodu, produktu i komunikacji. Nie tworzę tylko ładnych interfejsów. Tworzę cyfrowe rozwiązania z naciskiem na przejrzystość, efektywność i realny wpływ.",
        btn_projects: "Zobacz projekty <i class='fas fa-arrow-down'></i>",
        section_title: "Polecane projekty <span class='purple-dot'>.</span>",
        sites_title: "Strony Internetowe",
        ext_title: "Rozszerzenia Przeglądarki",
        proj1_desc: "Platforma korporacyjna zoptymalizowana pod kątem SEO i konwersji. Zaprojektowana, aby pozycjonować markę jako autorytet w branży księgowej i usprawnić pozyskiwanie nowych klientów.",
        btn_visit: "Odwiedź stronę <i class='fas fa-external-link-alt'></i>",
        proj2_desc: "Strona zorientowana na doświadczenie użytkownika (UX) i generowanie leadów. Struktura opracowana w celu wzbudzenia natychmiastowego zaufania i skrócenia ścieżki kontaktu między klientem a prawnikiem.",
        
        proj3_title: "Kursy Walut",
        proj3_desc: "Narzędzie do szybkiego i precyzyjnego dostępu do globalnych kursów bez obciążania przeglądarki.",
        feat1: "<i class='fas fa-check purple-text'></i> <span><strong>Smart Badge:</strong> Zapisuje walutę na ikonie.</span>",
        feat2: "<i class='fas fa-check purple-text'></i> <span><strong>Konwersja:</strong> Z menu kontekstowego.</span>",
        feat3: "<i class='fas fa-check purple-text'></i> <span><strong>12 Walut:</strong> USD, EUR, PLN, BTC i inne.</span>",
        btn_store: "Pobierz <i class='fas fa-download'></i>",
        
        proj4_title: "SmartCase Pro (Format)",
        proj4_desc: "Najlepsze narzędzie do formatowania. Konwertuj tekst, czyść dane i ukrywaj poufne informacje. 100% lokalnie i bezpiecznie.",
        feat4_1: "<i class='fas fa-check purple-text'></i> <span><strong>Narzędzia Dev:</strong> camelCase, snake_case.</span>",
        feat4_2: "<i class='fas fa-check purple-text'></i> <span><strong>Prywatność:</strong> Ukryj dane jednym kliknięciem.</span>",
        feat4_3: "<i class='fas fa-check purple-text'></i> <span><strong>Globalne:</strong> 6 języków, w tym polski.</span>",
        
        // NOVO PROJETO: CLIPOCTAPLUS
        proj5_title: "ClipOctaplus (Schowek)",
        proj5_desc: "Menedżer schowka zoptymalizowany pod kątem prywatności i produktywności. Zapisuje historię w 100% lokalnie.",
        feat5_1: "<span><strong>Historia:</strong> Auto-zapis tekstów i obrazów.</span>",
        feat5_2: "<span><strong>Bezpieczny Sejf:</strong> Obszar chroniony kodem PIN.</span>",
        feat5_3: "<span><strong>Prywatność:</strong> Działa 100% offline, bez śledzenia.</span>",
        
        game_title: "Przerwa na Corgi <span class='purple-dot'>.</span>",
        game_desc: "Zmęczony patrzeniem na kod? Zrobiłem tę grę w stylu \"Dino Run\" z Chrome, ale z Corgi (bo Corgi są lepsze). Mój rekord to <strong>829</strong>. Ciekawe, czy go pobijesz!",
        footer: "Zaprojektowane i stworzone przez Lucas Prado © 2026. Wszelkie prawa zastrzeżone.",
        whatsapp_btn: "<i class='fab fa-whatsapp'></i> Rozpocznij Projekt",
        whatsapp_msg: "Cześć, Lucas! Widziałem Twoje portfolio i chciałbym porozmawiać o projekcie."
    }
};

// ================= FUNÇÃO DE TROCA DE IDIOMA =================
function changeLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });
    
    const zapBtn = document.querySelector('.whatsapp-btn');
    if (zapBtn && translations[lang] && translations[lang].whatsapp_msg) {
        const numeroZap = "5511999156687";
        const msgCodificada = encodeURIComponent(translations[lang].whatsapp_msg);
        zapBtn.href = `https://wa.me/${numeroZap}?text=${msgCodificada}`;
    }
    
    const langSelect = document.getElementById('lang-select');
    if (langSelect) {
        langSelect.value = lang;
    }
    
    document.documentElement.lang = lang;
}

// ================= INICIALIZAÇÃO AUTOMÁTICA =================
document.addEventListener('DOMContentLoaded', () => {
    const browserLang = navigator.language.slice(0, 2);
    const initialLang = translations[browserLang] ? browserLang : 'en';
    changeLanguage(initialLang);
});
