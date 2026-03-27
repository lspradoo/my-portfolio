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
                        --lh-green: #0cce6b;
                        --font-main: 'Poppins', sans-serif;
                        --font-mono: 'Courier New', Courier, monospace;
                    }
                    
                    body {
                        font-family: var(--font-main);
                        background-color: var(--bg-main);
                        color: var(--text-light);
                        margin: 0;
                        padding: 50px 20px;
                        line-height: 1.6;
                        display: flex;
                        justify-content: center;
                    }
                    
                    .container {
                        width: 100%;
                        max-width: 1100px;
                        background: linear-gradient(145deg, var(--bg-secondary) 0%, #110f18 100%);
                        padding: 40px;
                        border-radius: 20px;
                        border: 1px solid rgba(127, 90, 240, 0.2);
                        box-shadow: 0 15px 50px -15px rgba(127, 90, 240, 0.3);
                    }
                    
                    .header-section {
                        margin-bottom: 40px;
                        border-bottom: 1px solid rgba(255, 255, 255, 0.05);
                        padding-bottom: 30px;
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

                    table {
                        width: 100%;
                        border-collapse: separate;
                        border-spacing: 0;
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
                        color: var(--lh-green);
                        text-shadow: 0 0 10px rgba(12, 206, 107, 0.3);
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
                        background: rgba(127, 90, 240, 0.05);
                        color: var(--text-gray);
                        padding: 4px 12px;
                        border-radius: 50px;
                        font-size: 0.8rem;
                        font-weight: 600;
                        border: 1px solid rgba(127, 90, 240, 0.2);
                        transition: all 0.2s;
                    }
                    
                    .hreflang-tag:hover {
                        background: rgba(127, 90, 240, 0.15);
                        border-color: var(--purple-primary);
                        color: var(--text-light);
                        transform: translateY(-2px);
                        box-shadow: 0 4px 10px rgba(127, 90, 240, 0.2);
                    }

                    /* Special highlight for x-default */
                    .hreflang-tag.x-default {
                        border-color: rgba(12, 206, 107, 0.4);
                        color: var(--lh-green);
                        background: rgba(12, 206, 107, 0.05);
                    }
                    
                    .hreflang-tag.x-default:hover {
                        border-color: var(--lh-green);
                        box-shadow: 0 4px 10px rgba(12, 206, 107, 0.2);
                        color: var(--lh-green);
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header-section">
                        <h1>XML Sitemap <span class="purple-dot">.</span></h1>
                        <p class="desc">
                            Human-readable sitemap generated via XSLT.<br/> 
                            Engineered for advanced <strong>International SEO</strong> (Hreflang) and optimal <strong>Crawl Budget</strong>.
                        </p>
                        <div class="stats-badge">
                            Indexable URLs <span><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/></span>
                        </div>
                    </div>
                    
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
                                                <xsl:choose>
                                                    <xsl:when test="@hreflang='x-default'">
                                                        <span class="hreflang-tag x-default">
                                                            <xsl:value-of select="@hreflang"/>
                                                        </span>
                                                    </xsl:when>
                                                    <xsl:otherwise>
                                                        <span class="hreflang-tag">
                                                            <xsl:value-of select="@hreflang"/>
                                                        </span>
                                                    </xsl:otherwise>
                                                </xsl:choose>
                                            </xsl:for-each>
                                        </div>
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