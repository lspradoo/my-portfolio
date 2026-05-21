<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" 
    xmlns:html="http://www.w3.org/TR/REC-html40"
    xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
    xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:xhtml="http://www.w3.org/1999/xhtml"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    
    <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
    
    <xsl:template match="/">
        <html xmlns="http://www.w3.org/1999/xhtml">
            <head>
                <title>Advanced XML Sitemap | Lucas Prado</title>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                
                <link rel="icon" href="/iconProjects/favicon.png" type="image/png" />
                <link rel="apple-touch-icon" href="/iconProjects/favicon.png" />
                
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&amp;display=swap" rel="stylesheet"/>
                <style type="text/css">
                    :root {
                        --bg-main: #0f0e17;       
                        --bg-secondary: #1a1a2e;  
                        --purple-primary: #7f5af0; 
                        --purple-glow: rgba(127, 90, 240, 0.4); 
                        --text-light: #fffffe;    
                        --text-gray: #a7a9be;
                        --font-main: 'Poppins', sans-serif;
                        --font-mono: 'Courier New', Courier, monospace;
                    }
                    
                    /* Garante que o fundo sempre preencha a tela toda */
                    html, body {
                        background-color: var(--bg-main);
                        min-height: 100vh;
                        margin: 0;
                    }

                    body {
                        font-family: var(--font-main);
                        color: var(--text-light);
                        padding: 50px 20px;
                        box-sizing: border-box;
                        display: flex;
                        justify-content: center;
                        align-items: flex-start; /* Ajuda a não esticar a caixa além do necessário */
                    }
                    
                    .container {
                        width: 100%;
                        max-width: 1100px;
                        background: linear-gradient(145deg, var(--bg-secondary) 0%, #110f18 100%);
                        padding: 40px;
                        border-radius: 20px;
                        border: 1px solid rgba(127, 90, 240, 0.2);
                        box-shadow: 0 15px 50px -15px rgba(127, 90, 240, 0.3);
                        margin-bottom: 30px; /* Espaço pro final da tela */
                    }
                    
                    .header-section {
                        margin-bottom: 40px;
                        border-bottom: 1px solid rgba(255, 255, 255, 0.05);
                        padding-bottom: 30px;
                    }

                    .header-top {
                        display: flex;
                        justify-content: space-between;
                        align-items: flex-start;
                        flex-wrap: wrap;
                        gap: 20px;
                    }
                    
                    h1 {
                        color: var(--text-light);
                        font-size: 2.5rem;
                        margin: 0 0 10px 0;
                        font-weight: 700;
                        letter-spacing: -0.5px;
                    }
                    
                    .purple-dot { color: var(--purple-primary); }
                    
                    p.desc {
                        color: var(--text-gray);
                        font-size: 1.05rem;
                        margin: 0 0 20px 0;
                    }
                    
                    .stats-badge {
                        display: inline-flex;
                        align-items: center;
                        background: rgba(127, 90, 240, 0.1);
                        border: 1px solid rgba(127, 90, 240, 0.3);
                        color: var(--text-light);
                        padding: 8px 16px;
                        border-radius: 50px;
                        font-size: 0.9rem;
                        font-weight: 600;
                    }
                    
                    .stats-badge span {
                        background: var(--purple-primary);
                        color: #fff;
                        padding: 2px 10px;
                        border-radius: 50px;
                        margin-left: 10px;
                    }

                    .btn-back {
                        display: inline-flex;
                        align-items: center;
                        gap: 8px;
                        background: rgba(127, 90, 240, 0.1);
                        color: var(--text-light);
                        text-decoration: none;
                        padding: 10px 24px;
                        border-radius: 50px;
                        font-size: 0.95rem;
                        font-weight: 600;
                        border: 1px solid rgba(127, 90, 240, 0.3);
                        transition: all 0.3s ease;
                    }

                    .btn-back:hover {
                        background: var(--purple-primary);
                        border-color: var(--purple-primary);
                        box-shadow: 0 4px 15px var(--purple-glow);
                        transform: translateY(-2px);
                    }

                    /* Wrapper para não quebrar o layout se a tabela for grande */
                    .table-wrapper {
                        width: 100%;
                        overflow-x: auto;
                    }

                    table {
                        width: 100%;
                        border-collapse: separate;
                        border-spacing: 0;
                        margin-top: 20px;
                    }
                    
                    th {
                        text-align: left;
                        padding: 15px 20px;
                        color: var(--text-gray);
                        font-size: 0.85rem;
                        text-transform: uppercase;
                        letter-spacing: 1.5px;
                        border-bottom: 2px solid rgba(127, 90, 240, 0.3);
                        font-weight: 600;
                        white-space: nowrap;
                    }
                    
                    td {
                        padding: 20px;
                        border-bottom: 1px solid rgba(255, 255, 255, 0.03);
                        vertical-align: middle;
                        transition: background-color 0.2s;
                    }
                    
                    tr:last-child td {
                        border-bottom: none;
                    }
                    
                    tr:hover td {
                        background-color: rgba(127, 90, 240, 0.03);
                    }
                    
                    .url-link {
                        color: var(--text-light);
                        text-decoration: none;
                        font-weight: 600;
                        font-size: 1rem;
                        transition: all 0.3s ease;
                    }
                    
                    .url-link:hover {
                        color: var(--purple-primary);
                        text-shadow: 0 0 10px var(--purple-glow);
                    }
                    
                    .date-text {
                        font-family: var(--font-mono);
                        color: var(--text-gray);
                        font-size: 0.9rem;
                    }
                    
                    .tags-wrapper {
                        display: flex;
                        flex-wrap: wrap;
                        gap: 8px;
                    }

                    .hreflang-tag {
                        text-decoration: none;
                        padding: 4px 12px;
                        border-radius: 50px;
                        font-size: 0.8rem;
                        font-weight: 600;
                        transition: all 0.2s;
                        border: 1px solid transparent;
                    }
                    
                    .lang-pt { border-color: rgba(43, 219, 129, 0.4); color: #2bdb81; background: rgba(43, 219, 129, 0.05); }
                    .lang-pt:hover { background: rgba(43, 219, 129, 0.15); box-shadow: 0 4px 10px rgba(43, 219, 129, 0.2); transform: translateY(-2px); }

                    .lang-en { border-color: rgba(58, 134, 255, 0.4); color: #3a86ff; background: rgba(58, 134, 255, 0.05); }
                    .lang-en:hover { background: rgba(58, 134, 255, 0.15); box-shadow: 0 4px 10px rgba(58, 134, 255, 0.2); transform: translateY(-2px); }

                    .lang-es { border-color: rgba(255, 190, 11, 0.4); color: #ffbe0b; background: rgba(255, 190, 11, 0.05); }
                    .lang-es:hover { background: rgba(255, 190, 11, 0.15); box-shadow: 0 4px 10px rgba(255, 190, 11, 0.2); transform: translateY(-2px); }

                    .lang-pl { border-color: rgba(255, 0, 110, 0.4); color: #ff006e; background: rgba(255, 0, 110, 0.05); }
                    .lang-pl:hover { background: rgba(255, 0, 110, 0.15); box-shadow: 0 4px 10px rgba(255, 0, 110, 0.2); transform: translateY(-2px); }

                    .lang-x-default { border-color: rgba(167, 169, 190, 0.4); color: #a7a9be; background: rgba(167, 169, 190, 0.05); }
                    .lang-x-default:hover { background: rgba(167, 169, 190, 0.15); box-shadow: 0 4px 10px rgba(167, 169, 190, 0.2); transform: translateY(-2px); color: #fffffe; }

                    @media (max-width: 768px) {
                        .header-top {
                            flex-direction: column;
                        }
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header-section">
                        <div class="header-top">
                            <div>
                                <h1>XML Sitemap <span class="purple-dot">.</span></h1>
                                <p class="desc">
                                    Human-readable sitemap generated via XSLT.<br/> 
                                    Engineered for advanced <strong>International SEO</strong> (Hreflang) and optimal <strong>Crawl Budget</strong>.
                                </p>
                                <div class="stats-badge">
                                    Indexable URLs <span><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/></span>
                                </div>
                            </div>
                            
                            <a href="https://lucasprado.space/" class="btn-back">
                                ← Back to Website
                            </a>
                        </div>
                    </div>
                    
                    <div class="table-wrapper">
                        <table>
                            <thead>
                                <tr>
                                    <th>Canonical URL</th>
                                    <th>Last Modified</th>
                                    <th>Alternate Versions (Hreflang)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <xsl:for-each select="sitemap:urlset/sitemap:url">
                                    <tr>
                                        <td>
                                            <a href="{sitemap:loc}" target="_blank" class="url-link">
                                                <xsl:value-of select="sitemap:loc"/>
                                            </a>
                                        </td>
                                        <td>
                                            <span class="date-text"><xsl:value-of select="sitemap:lastmod"/></span>
                                        </td>
                                        <td>
                                            <div class="tags-wrapper">
                                                <xsl:for-each select="xhtml:link">
                                                    <a href="{@href}" target="_blank" class="hreflang-tag lang-{@hreflang}" title="Go to {@hreflang} version">
                                                        <xsl:value-of select="@hreflang"/>
                                                    </a>
                                                </xsl:for-each>
                                            </div>
                                        </td>
                                    </tr>
                                </xsl:for-each>
                            </tbody>
                        </table>
                    </div>
                </div>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
