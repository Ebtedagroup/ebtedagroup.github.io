/* نمونه‌کارهای ابتدا گروپ، برای هر دو نسخه‌ی فارسی (index.html) و انگلیسی (en.html).
   تا وقتی این فهرست خالی است، بخش «نمونه‌کارها» و لینک آن در منو نمایش داده نمی‌شوند.
   کارت‌ها به همان ترتیبی که اینجا نوشته شده‌اند نمایش داده می‌شوند.

   فیلدها:
   slug      شناسه‌ی ثابت انگلیسی، بدون فاصله (مثل "cafe-teaser"). در آمار گوگل همین ثبت می‌شود؛ بعد از انتشار عوضش نکنید.
   cat       نوع کار: "motion" (موشن‌گرافیک)، "ai" (انیمیشن با هوش مصنوعی)، "reels" (استوری و ریلز)، "web" (ارتقای سایت)
   title_fa / title_en         عنوان
   client_fa / client_en       نام مشتری یا برند (اختیاری؛ فقط اگر اجازه‌ی نام بردن دارید)
   year      سال، مثل "1405" (در صفحه‌ی فارسی خودکار با ارقام فارسی نمایش داده می‌شود)
   desc_fa / desc_en           توضیح کوتاه (اختیاری)

   ویدیوی آپارات:  aparat: "xxxx"   بخش آخر لینک aparat.com/v/xxxx
                   poster: "v-<slug>.jpg"   تصویر ثابت ۹۶۰×۵۴۰ (برای عمودی ۵۴۰×۹۶۰)، JPG حدود ۶۰ تا ۱۲۰ کیلوبایت
                   d: "2026-10-15"      تاریخ انتشار میلادی (اختیاری؛ برای گوگل)
   ویدیوی تلوبیون: tw: "0x…"           بخش آخر لینک telewebion.net/episode/0x… (کارت به خود تلوبیون لینک می‌شود)
   لینک دیگر:      url: "https://…"    مثلاً پست اینستاگرام؛ cta_fa / cta_en متن دکمه (اختیاری)
   vertical: true  برای ویدیوی عمودی ۹:۱۶ (استوری و ریلز)

   ارتقای سایت (قبل و بعد):
                   before: "w-<slug>-before.webp" ، after: "w-<slug>-after.webp"
                   برای هر کدام یک نسخه‌ی کوچک با پسوند -t هم لازم است (w-<slug>-before-t.webp)
                   result_fa / result_en   نتیجه‌ی بهبود، مثل "زمان بارگذاری از ۶ به ۱٫۵ ثانیه" (اختیاری)

   gallery: ["g-<slug>-1.webp", …]   عکس‌های پشت‌صحنه (اختیاری؛ حداکثر ۱۴۰۰ پیکسل)،
            برای هر عکس یک نسخه‌ی کوچک با پسوند -t هم لازم است (g-<slug>-1-t.webp)

   نمونه:
   {
     "slug": "cafe-teaser",
     "cat": "motion",
     "title_fa": "تیزر افتتاحیه‌ی کافه",
     "title_en": "Café opening teaser",
     "year": "1405",
     "desc_fa": "تیزر ۳۰ ثانیه‌ای برای معرفی منوی جدید.",
     "desc_en": "A 30-second teaser introducing the new menu.",
     "aparat": "xxxx",
     "poster": "v-cafe-teaser.jpg"
   },
*/
window.PORTFOLIO = [
 {
  "slug": "hyperfab-multicolor-1",
  "cat": "motion",
  "title_fa": "پرینت چندرنگ، قسمت ۱: راز چاپ رنگی",
  "title_en": "Multi-colour printing, part 1: how colour printing works",
  "client_fa": "هایپرفب",
  "client_en": "HyperFab",
  "year": "1405",
  "desc_fa": "پرینترهای امروزی با فقط یک نازل تا ۱۶ رنگ چاپ می‌کنند. این کلیپ برای هایپرفب نشان می‌دهد در هر تعویض رنگ چه اتفاقی می‌افتد: فیلامنت بریده می‌شود، به جعبه‌ی CFS برمی‌گردد و رنگ جدید تا نازل می‌آید.",
  "desc_en": "Today's printers print up to 16 colours with a single nozzle. This clip for HyperFab shows what happens at each colour change: the filament is cut, goes back to the CFS box, and the new colour feeds to the nozzle.",
  "aparat": "dne9rlc",
  "poster": "v-hyperfab-multicolor-1.jpg",
  "vertical": true
 },
 {
  "slug": "hyperfab-multicolor-2",
  "cat": "motion",
  "title_fa": "پرینت چندرنگ، قسمت ۲: راز پرتی‌ها",
  "title_en": "Multi-colour printing, part 2: where the waste comes from",
  "client_fa": "هایپرفب",
  "client_en": "HyperFab",
  "year": "1405",
  "desc_fa": "چرا پرینت رنگی این‌قدر پرتی دارد؟ بعد از هر تعویض رنگ، پرینتر مقداری فیلامنت بیرون می‌دهد تا رنگ‌ها قاطی نشوند و نوک نازل را روی برج پرایم تمیز می‌کند؛ همین کار پرینت چندرنگ را پرتی‌تر و زمان‌برتر می‌کند.",
  "desc_en": "Why does colour printing waste so much filament? After each colour change the printer purges filament so the colours don't mix and wipes the nozzle on a prime tower, which makes multi-colour prints more wasteful and slower.",
  "aparat": "ghz7235",
  "poster": "v-hyperfab-multicolor-2.jpg",
  "vertical": true
 },
 {
  "slug": "hyperfab-gripper",
  "cat": "ai",
  "title_fa": "از یک عکس در گوشی تا قطعه‌ی واقعی",
  "title_en": "From a photo on your phone to a real part",
  "client_fa": "هایپرفب",
  "client_en": "HyperFab",
  "year": "1405",
  "desc_fa": "کلیپ انیمیشنی برای خدمات پرینت سه‌بعدی هایپرفب: دانشجویی که مدل گریپرش را در اینترنت پیدا کرده، فقط با فرستادن یک لینک، قطعه‌ی واقعی را تحویل می‌گیرد.",
  "desc_en": "An animated clip for HyperFab's 3D printing service: an engineering student finds a gripper model online, sends just the link, and receives the real part.",
  "aparat": "rbthfo9",
  "poster": "v-hyperfab-gripper.jpg",
  "vertical": true
 },
 {
  "slug": "hyperfab-order-guide",
  "cat": "motion",
  "title_fa": "آموزش سفارش پرینت سه‌بعدی",
  "title_en": "How to order a 3D print",
  "client_fa": "هایپرفب",
  "client_en": "HyperFab",
  "year": "1405",
  "desc_fa": "کلیپ آموزشی برای هایپرفب که سفارش پرینت سه‌بعدی از سایت را در سه قدم نشان می‌دهد.",
  "desc_en": "A tutorial clip for HyperFab showing how to order a 3D print from the website in three steps.",
  "aparat": "efnzfq6",
  "poster": "v-hyperfab-order-guide.jpg",
  "vertical": true
 },
 {
  "slug": "hyperfab-dragon",
  "cat": "motion",
  "title_fa": "اژدهای مفصلی یک‌تکه",
  "title_en": "A one-piece articulated dragon",
  "client_fa": "هایپرفب",
  "client_en": "HyperFab",
  "year": "1405",
  "desc_fa": "کلیپی برای هایپرفب که نشان می‌دهد مفصل‌های تودرتوی این اژدها چطور یک‌تکه با پرینتر سه‌بعدی چاپ شده‌اند.",
  "desc_en": "A clip for HyperFab showing how this dragon's interlocking joints were printed in one piece on a 3D printer.",
  "aparat": "gqyd926",
  "poster": "v-hyperfab-dragon.jpg",
  "vertical": true
 },
 {
  "slug": "hyperfab-print-price",
  "cat": "motion",
  "title_fa": "زمان، یعنی قیمت: قیمت پرینت سه‌بعدی چطور حساب می‌شود؟",
  "title_en": "Time is price: how a 3D print is priced",
  "client_fa": "هایپرفب",
  "client_en": "HyperFab",
  "year": "1405",
  "desc_fa": "کلیپی برای هایپرفب که توضیح می‌دهد چرا زمان چاپ، قیمت پرینت سه‌بعدی را تعیین می‌کند.",
  "desc_en": "A clip for HyperFab explaining why print time sets the price of a 3D print.",
  "aparat": "kxxl13o",
  "poster": "v-hyperfab-print-price.jpg",
  "vertical": true
 },
 {
  "slug": "hyperfab-dino-battle",
  "cat": "motion",
  "title_fa": "نبرد دایناسورها",
  "title_en": "Dinosaur battle",
  "client_fa": "هایپرفب",
  "client_en": "HyperFab",
  "year": "1405",
  "desc_fa": "کلیپ تعاملی برای هایپرفب: سه دایناسور مفصلی پرینت‌شده رو در روی هم قرار می‌گیرند و مخاطب رنگ برنده را در کامنت می‌نویسد.",
  "desc_en": "An interactive clip for HyperFab: three 3D-printed articulated dinosaurs face off and viewers comment the winning colour.",
  "aparat": "knzjkwm",
  "poster": "v-hyperfab-dino-battle.jpg",
  "vertical": true
 }
];
