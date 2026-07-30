# Ana Sayfaya İleride Tekrar Eklenecek Bölümler

Aşağıdaki bölümler geçici olarak Ana Sayfa (`app/page.tsx`) üzerinden kaldırılmıştır. İlerleyen aşamalarda ihtiyaç halinde tekrar aktif edilecektir:

1. **Öne Çıkan İmalatlarımız (`ServiceCard` Izgarası)**
   - Projelerin ölçüsüne göre üretilen 15 temel demir ve çelik çözümü kartları.
   - İlgili Bileşenler: `ServiceCard.tsx`, `db.service.findMany()`

2. **Bilgilendirme Rehberi (`GuideCard` Kartları)**
   - Uygulama yaptırmadan önce bilinmesi gereken pratik ipuçları ve rehber makaleleri.
   - İlgili Bileşenler: `GuideCard.tsx`, `db.guide.findMany()`

3. **Teklif Al (WhatsApp + Hızlı Form - `QuoteForm`)**
   - Ana sayfa üzerindeki hızlı teklif alma ve WhatsApp yönlendirme formu.
   - İlgili Bileşenler: `QuoteForm.tsx`

4. **Sık Sorulan Sorular (`AccordionFAQ`)**
   - Müşterilerin aklına takılan soruların yanıtlandığı SSS akordeon bileşeni.
   - İlgili Bileşenler: `AccordionFAQ.tsx`, `db.fAQ.findMany()`
