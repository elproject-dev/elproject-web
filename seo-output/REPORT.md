# Laporan Jangkauan Pencarian — EL Project

Generated: 2026-08-02T18:26:15.533Z

## Ringkasan
| Metrik | Nilai |
|--------|-------|
| Total keyword expanded | **1804** |
| Seed keywords | 20 |
| Google operator queries | 12 |
| Rank-check URLs | 500 |
| AI bots di robots | 16 |

## Cara pakai

### 1. Google Search Console
1. Buka https://search.google.com/search-console
2. Submit sitemap: `https://www.elproject.studio/sitemap.xml`
3. Pantau keyword dari `keywords.txt` di menu Performance

### 2. Cek index & operator
Buka `google-operators.json` atau `dashboard.html` di browser.

### 3. AI Search (ChatGPT, Gemini, Perplexity, Copilot)
1. Jalankan dengan `--apply-ai` agar robots.txt + llms.txt ter-update
2. Pastikan `https://www.elproject.studio/llms.txt` public
3. Uji prompt di `ai-prompt-pack.json`

### 4. Rank monitoring manual
File `google-rank-check-urls.json` — buka 10–20 keyword prioritas tiap minggu.

## Top 30 keyword prioritas
1. jasa pembuatan aplikasi
2. jasa pembuatan aplikasi terdekat
3. terdekat jasa pembuatan aplikasi
4. jasa pembuatan aplikasi terbaik
5. terbaik jasa pembuatan aplikasi
6. jasa pembuatan aplikasi murah
7. murah jasa pembuatan aplikasi
8. jasa pembuatan aplikasi profesional
9. profesional jasa pembuatan aplikasi
10. jasa pembuatan aplikasi terpercaya
11. terpercaya jasa pembuatan aplikasi
12. jasa pembuatan aplikasi cepat
13. cepat jasa pembuatan aplikasi
14. jasa pembuatan aplikasi custom
15. custom jasa pembuatan aplikasi
16. jasa pembuatan aplikasi harga
17. harga jasa pembuatan aplikasi
18. jasa pembuatan aplikasi biaya
19. biaya jasa pembuatan aplikasi
20. jasa pembuatan aplikasi contoh
21. contoh jasa pembuatan aplikasi
22. jasa pembuatan aplikasi portofolio
23. portofolio jasa pembuatan aplikasi
24. jasa pembuatan aplikasi rekomendasi
25. rekomendasi jasa pembuatan aplikasi
26. jasa pembuatan aplikasi yogyakarta
27. jasa pembuatan aplikasi di yogyakarta
28. jasa pembuatan aplikasi yogyakarta terdekat
29. jasa pembuatan aplikasi yogyakarta terbaik
30. jasa pembuatan aplikasi yogyakarta murah

## Google operator (siap pakai)
- **Semua halaman terindex**: [site:www.elproject.studio](https://www.google.com/search?q=site%3Awww.elproject.studio&num=20&hl=id&gl=id)
- **Brand mention di web lain**: ["EL Project" OR "elproject.studio" -site:www.elproject.studio](https://www.google.com/search?q=%22EL+Project%22+OR+%22elproject.studio%22+-site%3Awww.elproject.studio&num=20&hl=id&gl=id)
- **Judul mengandung brand**: [intitle:"EL Project" OR intitle:"elproject"](https://www.google.com/search?q=intitle%3A%22EL+Project%22+OR+intitle%3A%22elproject%22&num=20&hl=id&gl=id)
- **URL mengandung brand**: [inurl:elproject](https://www.google.com/search?q=inurl%3Aelproject&num=20&hl=id&gl=id)
- **Kompetitor lokal**: ["jasa pembuatan aplikasi" Yogyakarta -site:www.elproject.studio](https://www.google.com/search?q=%22jasa+pembuatan+aplikasi%22+Yogyakarta+-site%3Awww.elproject.studio&num=20&hl=id&gl=id)
- **Blog terindex**: [site:www.elproject.studio/blog](https://www.google.com/search?q=site%3Awww.elproject.studio%2Fblog&num=20&hl=id&gl=id)
- **Showcase terindex**: [site:www.elproject.studio/showcase](https://www.google.com/search?q=site%3Awww.elproject.studio%2Fshowcase&num=20&hl=id&gl=id)
- **Cache homepage**: [cache:www.elproject.studio](https://www.google.com/search?q=cache%3Awww.elproject.studio&num=20&hl=id&gl=id)
- **Related sites**: [related:www.elproject.studio](https://www.google.com/search?q=related%3Awww.elproject.studio&num=20&hl=id&gl=id)
- **File dokumen**: [site:www.elproject.studio filetype:pdf OR filetype:doc](https://www.google.com/search?q=site%3Awww.elproject.studio+filetype%3Apdf+OR+filetype%3Adoc&num=20&hl=id&gl=id)
- **AI Overview target**: [berapa biaya jasa pembuatan aplikasi Yogyakarta](https://www.google.com/search?q=berapa+biaya+jasa+pembuatan+aplikasi+Yogyakarta&num=20&hl=id&gl=id)
- **Software house jogja**: [software house yogyakarta OR "software house jogja"](https://www.google.com/search?q=software+house+yogyakarta+OR+%22software+house+jogja%22&num=20&hl=id&gl=id)

## Checklist AI reach
- [ ] Pastikan llms.txt bisa diakses di /llms.txt
- [ ] Pastikan robots.txt mengizinkan GPTBot, ClaudeBot, PerplexityBot, Google-Extended
- [ ] Schema.org ProfessionalService + FAQPage di homepage
- [ ] Konten FAQ natural-language (bukan keyword stuffing)
- [ ] Sitemap.xml up-to-date & disubmit di Google Search Console
- [ ] Submit URL di Bing Webmaster (untuk Copilot)
- [ ] Buat artikel blog yang menjawab pertanyaan user secara langsung
- [ ] Cantumkan NAP (Name, Address, Phone) konsisten di semua halaman
- [ ] Backlink dari direktori bisnis lokal Yogyakarta / Jakarta
- [ ] Profil Google Business Profile aktif (jika ada alamat fisik)

---
```bash
node scripts/expand-search-reach.mjs
node scripts/expand-search-reach.mjs --seed "jasa pembuatan aplikasi kasir"
node scripts/expand-search-reach.mjs --apply-ai
```
