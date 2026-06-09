# QR & Yayın Rehberi — Avlu Dessert Menü

Bu dosya, menüyü internete yayınlama ve masalara basılacak QR kodunu oluşturma
adımlarını anlatır. Sıra önemli: **önce yayın (URL) → sonra QR**.

---

## Özet mantık

- QR kodu aslında sadece bir **link (URL)** taşır. Müşteri okutunca telefon o
  adrese gider.
- Dolayısıyla QR üretmeden önce menünün **internette açık bir adresi** olmalı.
- `localhost:5173` sadece senin bilgisayarında çalışır — masada okutulunca açılmaz.

```
[Müşteri telefonu] --QR okut--> https://avludessert.com --> Menü açılır
```

---

## Adım 1 — Domaini al

- İstediğin sağlayıcıdan `.com` al (örn. GoDaddy, Namecheap, Google Domains, Turhost).
- Örnek: `avludessert.com`
- Domaini ALMAN yeterli; DNS ayarını Adım 3'te hosting'e bağlayacağız.

---

## Adım 2 — Projeyi yayına al (hosting)

Bu proje statik bir site (Vite + React). En kolay ücretsiz seçenekler: **Netlify**
veya **Vercel**. İkisi de GitHub'a push edince otomatik yayınlar.

### Önerilen: GitHub + Netlify

1. Projeyi GitHub'a push et (Adım 4'teki komutlar).
2. https://netlify.com → "Add new site" → "Import an existing project" → GitHub reposunu seç.
3. Build ayarları (bu repoda `netlify.toml` zaten hazır, otomatik dolar):
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Deploy bitince Netlify sana geçici bir adres verir:
   `https://avlu-dessert-menu.netlify.app`
5. Artık bu adres çalışır durumda — istersen QR'ı şimdilik bu adrese de üretebilirsin.

> Not: `netlify.toml` içindeki redirect kuralı, sayfa yenilemelerinde menünün
> düzgün açılması için gereklidir (SPA fallback).

---

## Adım 3 — Domaini hosting'e bağla

Netlify panelinde:

1. Site → **Domain management** → **Add a custom domain** → `avludessert.com` yaz.
2. Netlify sana DNS kayıtlarını verir. İki yol var:
   - **A / CNAME kaydı:** Domain sağlayıcının panelinde Netlify'ın verdiği
     kayıtları gir, veya
   - **Nameserver değişimi:** Domain sağlayıcıda nameserver'ları Netlify'ınkilerle
     değiştir (daha kolay yönetim).
3. SSL (https) sertifikası Netlify tarafından otomatik ve ücretsiz verilir
   (birkaç dakika–saat sürebilir).

Bundan sonra menü `https://avludessert.com` adresinde yayında olur.

---

## Adım 4 — Git push

```bash
git add .
git commit -m "Avlu Dessert QR menu MVP"
git branch -M main
git remote add origin https://github.com/<KULLANICI-ADIN>/<REPO-ADI>.git
git push -u origin main
```

> `node_modules` ve `dist` zaten `.gitignore` içinde, push edilmez.

---

## Adım 5 — QR kodunu oluştur

Domain hazır olunca QR'ı **final adrese** göre üret. Yöntemler:

### Yöntem A — Online (en hızlı)
- https://qr-code-generator.com veya https://www.qrcode-monkey.com
- URL alanına `https://avludessert.com` yaz.
- **PNG/SVG** olarak indir. Baskı için **SVG veya min. 1024px PNG** seç (masaya
  basılınca bulanık olmasın).

### Yöntem B — Terminalden (ücretsiz, otomatik)
```bash
# Kütüphaneyi global kurmadan tek seferlik çalıştır:
npx qrcode "https://avludessert.com" -o avlu-qr.png -w 1024
```
Bu komut proje klasörüne `avlu-qr.png` üretir.

### Yöntem C — Projeye gömülü, LOGOLU /qr afiş sayfası (PLANLANDI)

Menünün içine baskıya hazır, logolu, indirilebilir bir QR afişi eklenecek.
Domain hazır olunca aşağıdaki adımlarla yapılacak:

1. Kütüphaneyi kur:
   ```bash
   npm install qrcode.react
   ```
2. `src/components/QrPoster.tsx` bileşeni oluşturulacak. İçeriği:
   - Ortada QR kodu (merkezde **logo** gömülü — `imageSettings` ile)
   - Üstte cafe adı **"Avlu Dessert"**
   - Altta **"Menü için okutun / Scan for menu"** yazısı
   - **PNG indir** butonu (yüksek çözünürlük, baskıya uygun min. 1024px)
   - Baskı dostu A6/A7 kart düzeni, sıcak cafe renkleriyle
3. Yönlendirme: `App.tsx` içinde `window.location.pathname === "/qr"` ise
   `QrPoster`, değilse normal menü gösterilecek (Netlify SPA redirect `/qr`'ı
   `index.html`'e düşürdüğü için sorunsuz çalışır).
4. QR'ın hedef URL'i `menu-data.ts` veya bir config'ten okunacak (domain
   değişince tek yerden güncellenir).
5. Logo dosyası `public/logo.png` (veya `.svg`) olarak eklenecek; QR ortasına
   gömülecek.

Kullanım: `https://avludessert.com/qr` → afişi aç → PNG indir → bastır.

> Bu özellik henüz KURULMADI (şimdilik sadece git push yapılacak). Domain
> alındıktan sonra "logolu QR sayfasını ekle" denince uygulanacak.

---

## "Domaini sonra değiştirebilir miyim? QR'ı baştan basmam gerekir mi?"

- **Aynı QR'ı korumak istiyorsan:** QR'ı **final domaine** (`avludessert.com`)
  göre üret ve masalara öyle bastır. İleride hosting'i (Netlify → başka yer)
  değiştirsen bile domain aynı kaldığı için **QR çalışmaya devam eder**. Sadece
  DNS'i yeni hosting'e yönlendirirsin.
- **`.netlify.app` adresine QR basarsan:** sonra gerçek domaine geçince o eski
  QR'ları yeniden basman gerekir. Bu yüzden **masaya baskı için domaini
  beklemek en doğrusu**.
- **Kısa süreli/deneme** için `.netlify.app` adresine QR üretmek sorun değil.

**Öneri:** Masalara basılacak kalıcı QR'ı, domain alınıp bağlandıktan sonra
`https://avludessert.com` adresine üret.

---

## Gerçek menü gelince (içerik güncelleme)

- Tüm menü tek dosyada: `src/data/menu-data.ts`
- Ürün ekle/çıkar, fiyat, kategori, `image` (görsel URL), `isPopular`,
  `isAvailable` alanlarını düzenle.
- Görseller için: ürün fotoğraflarını bir klasöre koyup (`public/images/...`)
  veya bir CDN'e yükleyip `image` alanına linkini ver.
- `git push` → Netlify otomatik yeniden yayınlar. **QR aynı kalır**, değişmez.

---

## Kontrol listesi

- [ ] Domain alındı (`.com`)
- [ ] GitHub reposu oluşturuldu ve push edildi
- [ ] Netlify'a bağlandı, deploy başarılı (`.netlify.app` çalışıyor)
- [ ] Custom domain Netlify'a eklendi + DNS yönlendirildi + https aktif
- [ ] Logolu `/qr` afiş sayfası eklendi (Yöntem C — domain sonrası)
- [ ] QR final domaine göre üretildi (yüksek çözünürlük)
- [ ] QR bir telefonla test edildi (menü açılıyor mu?)
- [ ] Masalara baskı
