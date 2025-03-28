const generateSitemap = () => {
    const urls = [
        "https://example.com/",
        "https://example.com/page1",
        "https://example.com/page2",
        "https://example.com/spreadsheet"
    ];

    let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
    xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

    urls.forEach(url => {
        xml += `  <url>\n`;
        xml += `    <loc>${url}</loc>\n`;
        xml += `    <lastmod>${new Date().toISOString()}</lastmod>\n`;
        xml += `    <changefreq>weekly</changefreq>\n`;
        xml += `    <priority>0.8</priority>\n`;
        xml += `  </url>\n`;
    });

    xml += `</urlset>`;

    return xml;
};

// Simpan file sitemap
const saveSitemap = () => {
    const sitemapContent = generateSitemap();
    const blob = new Blob([sitemapContent], { type: "application/xml" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "sitemap.xml";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
};

// Jalankan fungsi saat halaman dimuat
window.onload = saveSitemap;
