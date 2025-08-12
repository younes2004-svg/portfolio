# YounesPortfolio - Professional Portfolio Website

[English](#english) | [العربية](#arabic)

---

<a name="english"></a>
## English

### Project Overview
A modern, interactive portfolio website showcasing professional work and skills. Features include:
- Responsive design with dark/light mode
- Interactive animations and transitions
- Dynamic content loading
- Contact form integration
- Social media links
- Portfolio showcase with modal views
- Testimonials carousel
- Skills visualization
- Custom cursor and preloader

### Technologies Used
- HTML5
- CSS3 (with CSS Variables and Modern Animations)
- JavaScript (ES6+)
- GSAP (GreenSock Animation Platform)
- Three.js (for 3D effects)
- EmailJS (for contact form)

### Local Development Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/younes-portfolio.git
   cd younes-portfolio
   ```

2. Open `index.html` in your browser or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   # OR using Node.js
   npx serve
   ```

3. Configure EmailJS:
   - Create an account at [EmailJS](https://www.emailjs.com/)
   - Create a new email service
   - Create an email template
   - Update `js/script.js` with your credentials:
     ```javascript
     emailjs.init("YOUR_USER_ID");
     ```
   - Update the service and template IDs in the send method:
     ```javascript
     emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', ...)
     ```

### Production Build
1. Minify CSS:
   ```bash
   npx clean-css-cli css/style.css -o css/style.min.css
   ```

2. Minify JavaScript:
   ```bash
   npx terser js/script.js -o js/script.min.js
   ```

### Deployment
#### GitHub Pages
1. Go to repository settings
2. Navigate to "Pages"
3. Select main branch
4. Save and wait for deployment

#### Vercel
1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel login
   vercel
   ```

---

<a name="arabic"></a>
## العربية

### نظرة عامة على المشروع
موقع محفظة أعمال حديث وتفاعلي يعرض العمل المهني والمهارات. يتضمن:
- تصميم متجاوب مع وضعي النهار والليل
- رسوم متحركة وانتقالات تفاعلية
- تحميل محتوى ديناميكي
- نموذج اتصال متكامل
- روابط وسائل التواصل الاجتماعي
- عرض المحفظة مع عروض تفصيلية
- شريط شهادات العملاء
- عرض المهارات
- مؤشر ماوس مخصص وشاشة تحميل

### التقنيات المستخدمة
- HTML5
- CSS3 (مع متغيرات CSS ورسوم متحركة حديثة)
- JavaScript (ES6+)
- GSAP (منصة الرسوم المتحركة)
- Three.js (للتأثيرات ثلاثية الأبعاد)
- EmailJS (لنموذج الاتصال)

### إعداد التطوير المحلي
1. استنساخ المستودع:
   ```bash
   git clone https://github.com/younes-portfolio.git
   cd younes-portfolio
   ```

2. فتح `index.html` في المتصفح أو استخدام خادم محلي:
   ```bash
   # باستخدام Python
   python -m http.server 8000
   # أو باستخدام Node.js
   npx serve
   ```

3. تكوين EmailJS:
   - إنشاء حساب في [EmailJS](https://www.emailjs.com/)
   - إنشاء خدمة بريد إلكتروني جديدة
   - إنشاء قالب بريد إلكتروني
   - تحديث `js/script.js` ببيانات اعتمادك:
     ```javascript
     emailjs.init("YOUR_USER_ID");
     ```
   - تحديث معرفات الخدمة والقالب:
     ```javascript
     emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', ...)
     ```

### بناء الإنتاج
1. تصغير CSS:
   ```bash
   npx clean-css-cli css/style.css -o css/style.min.css
   ```

2. تصغير JavaScript:
   ```bash
   npx terser js/script.js -o js/script.min.js
   ```

### النشر
#### صفحات GitHub
1. الذهاب إلى إعدادات المستودع
2. الانتقال إلى "Pages"
3. اختيار الفرع الرئيسي
4. حفظ والانتظار للنشر

#### Vercel
1. تثبيت Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. النشر:
   ```bash
   vercel login
   vercel
   ```

---

© 2025 Younes Madani. All rights reserved.
