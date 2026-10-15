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
 }
];
