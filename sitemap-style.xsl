<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" 
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
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&amp;display=swap" rel="stylesheet"/>
                <style type="text/css">
                    :root {
                        --bg-main: #0f0e17;       
                        --bg-secondary: #1a1a2e;  
                        --purple-primary: #7f5af0; 
                        --purple-glow: rgba(127, 90, 240, 0.4); 
                        --text-light: #fffffe;    
                        --text-gray: #a7a9be;
                        --lh-green: #0cce6b;
                        --font-main: 'Poppins', sans-serif;
                    }
                    
                    body {
                        font-family: var(--font-main);
                        background-color: var(--bg-main);
                        color: var(--text-light);
                        margin: 0;
                        padding: 40px;
                        line-height: 1.6;
                    }
                    
                    .container {
                        max-width: 1000px;
                        margin: 0 auto;
                        background-color: var(--bg-secondary);
                        padding: 30px;
                        border-radius: 16px;
                        border: 1px solid rgba(127, 90, 240, 0.2);
                        box-shadow: 0 10px 30px -10px var(--purple-glow);
                    }
                    
                    h1 {
                        color: var(--text-light);
                        font-size: 2rem;
                        margin-top: 0;
                        border-bottom: 2px solid var(--purple-primary);
                        padding-bottom: 10px;
                        display: inline-block;
                    }
                    
                    .purple-dot { color: var(--purple-primary); }
                    
                    p.desc {
                        color: var(--text-gray);
                        margin-bottom: 30px;
                    }
                    
                    table {
                        width: 100%;
                        border-collapse: collapse;
                        margin-top: 20px;
                    }
                    
                    th {
                        text-align: left;
                        padding: 15px;
                        background-color: rgba(127, 90, 240, 0.1);
                        color: var(--purple-primary);
                        border-bottom: 2px solid var(--purple-primary);
                        font-weight: 600;
                    }
                    
                    td {
                        padding: 15px;
                        border-bottom: 1px solid rgba(255, 255, 255, 0.05);
                        color: var(--text-light);
                    }
                    
                    tr:hover td {
                        background-color: rgba(127, 90, 240, 0.05);
                    }
                    
                    a {
                        color: var(--lh-green);
                        text-decoration: none;
                        font-weight: 600;
                        transition: all 0.3s ease;
                    }
                    
                    a:hover {
                        color: var(--text-light);
                        text-shadow: 0 0 8px rgba(12, 206, 107, 0.5);
                    }
                    
                    .hreflang-tag {
                        display: inline-block;
                        background: rgba(127, 90, 240, 0.2);
                        color: var(--text-light);
                        padding: 2px 8px;
                        border-radius: 4px;
                        font-size: 0.8rem;
                        margin-right: 5px;
                        margin-bottom: 5px;
                        border: 1px solid var(--purple-primary);
                    }
                    
                    .badge {
                        background: var(--purple-primary);
                        color: #fff;
                        padding: 4px 10px;
                        border-radius: 50px;
                        font-size: 0.8rem;
                        font-weight: bold;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <h1>XML Sitemap <span class="purple-dot">.</span></h1>
                    <p class="desc">
                        Este é um sitemap formatado por XSLT para leitura humana.<br/> 
                        Desenvolvido com foco em <strong>SEO Internacional</strong> (Hreflang) e <strong>Crawl Budget</strong>.<br/>
                        Total de URLs indexáveis: <span class="badge"><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/></span>
                    </p>
                    
                    <table>
                        <thead>
                            <tr>
                                <th>URL Oficial (Canonical)</th>
                                <th>Última Modificação</th>
                                <th>Versões Alternativas (Hreflang)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <xsl:for-each select="sitemap:urlset/sitemap:url">
                                <tr>
                                    <td>
                                        <a href="{sitemap:loc}" target="_blank">
                                            <xsl:value-of select="sitemap:loc"/>
                                        </a>
                                    </td>
                                    <td style="color: var(--text-gray);">
                                        <xsl:value-of select="sitemap:lastmod"/>
                                    </td>
                                    <td>
                                        <xsl:for-each select="xhtml:link">
                                            <span class="hreflang-tag">
                                                <xsl:value-of select="@hreflang"/>
                                            </span>
                                        </xsl:for-each>
                                    </td>
                                </tr>
                            </xsl:for-each>
                        </tbody>
                    </table>
                </div>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>