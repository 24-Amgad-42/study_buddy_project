# 📚 توثيق مشروع منظم المهام الدراسي الشامل

**Student Study Buddy Project - Complete Documentation**

---

## 📋 جدول المحتويات

1. [معلومات المشروع](#معلومات-المشروع)
2. [الملفات والهيكل](#الملفات-والهيكل)
3. [المميزات](#المميزات)
4. [التقنيات المستخدمة](#التقنيات-المستخدمة)
5. [كيفية الاستخدام](#كيفية-الاستخدام)
6. [شرح الكود](#شرح-الكود)
7. [معلومات فريق العمل](#معلومات-فريق-العمل)
8. [معايير التقييم](#معايير-التقييم)
9. [التعليمات للنشر على GitHub](#التعليمات-للنشر-على-github)

---

## معلومات المشروع

| المعلومة | التفاصيل |
|---------|---------|
| **اسم المشروع** | منظم المهام الدراسي (Student Study Buddy) |
| **الهدف** | مساعدة الطلاب على تنظيم مهامهم الدراسية |
| **المقرر** | أساسيات تطوير الويب 1 (Web Development Fundamentals) |
| **نوع المشروع** | موقع ويب تفاعلي (Interactive Web Application) |
| **التقنيات** | HTML5, CSS3, JavaScript (Vanilla) |
| **التخزين** | localStorage (محلي في المتصفح) |
| **التاريخ** | 2026 |
| **الحالة** | مكتمل ✅ |

---

## الملفات والهيكل

```
study_buddy_project/
│
├── index.html              # الصفحة الرئيسية
│   └── محتوى: مقدمة عن الموقع وأزرار التنقل
│
├── tasks.html              # صفحة عرض المهام
│   └── محتوى: قائمة بجميع المهام المحفوظة
│
├── add_task.html           # صفحة إضافة مهمة
│   └── محتوى: نموذج لإضافة مهام جديدة
│
├── about.html              # صفحة حول المشروع
│   └── محتوى: معلومات عن المشروع وفريق العمل
│
├── style.css               # ملف التنسيقات
│   └── محتوى: جميع أنماط CSS لجميع الصفحات
│
├── script.js               # ملف JavaScript
│   └── محتوى: المنطق والتفاعلية والتخزين
│
└── README.md               # ملف التوثيق الأساسي
    └── محتوى: معلومات عامة عن المشروع
```

---

## المميزات

### 1. تصميم متجاوب (Responsive Design)
- يعمل بشكل مثالي على جميع أحجام الشاشات
- استخدام CSS Flexbox و Media Queries
- تجربة مستخدم متسقة على الهواتف والأجهزة اللوحية والحواسيب

### 2. إدارة المهام (Task Management)
- **إضافة مهام**: ملء نموذج بسيط وحفظ المهمة
- **عرض المهام**: عرض جميع المهام في قائمة منظمة
- **حذف مهام**: إزالة المهام غير المطلوبة
- **التحقق من البيانات**: التأكد من ملء الحقول المطلوبة

### 3. التخزين المحلي (Local Storage)
- حفظ المهام محلياً في المتصفح
- البيانات تبقى حتى بعد إغلاق المتصفح
- لا حاجة لخادم بعيد أو قاعدة بيانات

### 4. الوضع الليلي (Dark Mode)
- تبديل سهل بين الوضع الفاتح والداكن
- تحسين الراحة البصرية
- حفظ تفضيل المستخدم

### 5. واجهة سهلة الاستخدام (User-Friendly Interface)
- تصميم بسيط وواضح
- قائمة تنقل منظمة
- رسائل توضيحية وتأكيدات

---

## التقنيات المستخدمة

### HTML5
```html
<!-- هيكل دلالي صحيح -->
<header>      <!-- رأس الصفحة -->
<nav>         <!-- شريط التنقل -->
<main>        <!-- المحتوى الرئيسي -->
<footer>      <!-- تذييل الصفحة -->
```

**المميزات المستخدمة:**
- عناصر دلالية صحيحة (Semantic HTML)
- نماذج مع التحقق من الصحة (Form Validation)
- حقول إدخال متعددة الأنواع

### CSS3
```css
/* متغيرات CSS */
:root {
  --primary-color: #4a90e2;
  --text-color: #333;
}

/* Flexbox للتخطيط */
display: flex;
justify-content: space-around;

/* Media Queries للتجاوب */
@media (max-width: 600px) {
  /* أنماط للأجهزة الصغيرة */
}

/* Transitions للتأثيرات */
transition: background-color 0.3s;
```

**المميزات المستخدمة:**
- متغيرات CSS (CSS Variables)
- Flexbox Layout
- Media Queries للتجاوب
- Transitions و Animations
- Dark Mode Support

### JavaScript (Vanilla)
```javascript
// إدارة localStorage
localStorage.setItem('tasks', JSON.stringify(tasks));
const tasks = JSON.parse(localStorage.getItem('tasks'));

// معالجة الأحداث
document.addEventListener('DOMContentLoaded', displayTasks);
button.addEventListener('click', deleteTask);

// التلاعب بـ DOM
document.getElementById('task-list').innerHTML = taskHTML;
```

**المميزات المستخدمة:**
- localStorage API
- Event Listeners
- DOM Manipulation
- JSON Parsing
- Array Methods (forEach, filter)

---

## كيفية الاستخدام

### التثبيت والتشغيل

#### الطريقة 1: فتح مباشر
```bash
# 1. استنساخ المستودع أو تحميل الملفات
git clone https://github.com/24-Amgad-42/study_buddy_project.git

# 2. الانتقال إلى المجلد
cd study_buddy_project

# 3. فتح الملف في المتصفح
open index.html
# أو انقر نقراً مزدوجاً على index.html
```

#### الطريقة 2: استخدام خادم محلي
```bash
# استخدام Python
python3 -m http.server 8000

# ثم افتح المتصفح وانتقل إلى:
# http://localhost:8000
```

### الاستخدام الأساسي

#### 1. الصفحة الرئيسية
- تعرض مقدمة عن الموقع
- أزرار سريعة للانتقال إلى الصفحات الأخرى
- شريط تنقل في الأعلى

#### 2. إضافة مهمة جديدة
```
الخطوات:
1. انقر على "إضافة مهمة" من القائمة
2. أدخل عنوان المهمة (مطلوب)
3. أدخل وصف المهمة (اختياري)
4. اختر تاريخ التسليم (مطلوب)
5. انقر على "حفظ المهمة"
6. سيتم إعادة التوجيه إلى صفحة المهام
```

#### 3. عرض المهام
```
الخطوات:
1. انقر على "المهام" من القائمة
2. ستظهر جميع المهام المحفوظة
3. كل مهمة تعرض:
   - العنوان
   - الوصف
   - تاريخ التسليم
   - زر الحذف
```

#### 4. حذف مهمة
```
الخطوات:
1. انتقل إلى صفحة المهام
2. انقر على زر "حذف" بجانب المهمة
3. أكد الحذف في النافذة المنبثقة
4. سيتم حذف المهمة من localStorage
```

#### 5. تبديل المظهر
```
الخطوات:
1. انقر على زر "تبديل الوضع" في الزاوية العلوية اليمنى
2. سيتم التبديل بين الوضع الفاتح والداكن
3. التفضيل يتم حفظه في localStorage
```

---

## شرح الكود

### ملف script.js - إدارة المظهر

```javascript
// الحصول على الـ Theme المحفوظ
const currentTheme = localStorage.getItem('theme') || 'light';

// تطبيق الـ Theme
if (currentTheme === 'dark') {
    document.body.setAttribute('data-theme', 'dark');
}

// تبديل الـ Theme عند النقر على الزر
themeToggle.addEventListener('click', () => {
    let theme = document.body.getAttribute('data-theme');
    if (theme === 'dark') {
        document.body.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
    } else {
        document.body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
});
```

### ملف script.js - إضافة مهمة

```javascript
// معالج النموذج
addTaskForm.addEventListener('submit', (e) => {
    e.preventDefault(); // منع إعادة تحميل الصفحة
    
    // الحصول على البيانات من النموذج
    const title = document.getElementById('task-title').value;
    const desc = document.getElementById('task-desc').value;
    const date = document.getElementById('task-date').value;
    
    // إنشاء كائن المهمة
    const newTask = {
        id: Date.now(),           // معرف فريد
        title,
        desc,
        date
    };
    
    // الحصول على المهام السابقة
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    
    // إضافة المهمة الجديدة
    tasks.push(newTask);
    
    // حفظ في localStorage
    localStorage.setItem('tasks', JSON.stringify(tasks));
    
    // إظهار رسالة نجاح
    alert('تم حفظ المهمة بنجاح!');
    
    // تفريغ النموذج
    addTaskForm.reset();
    
    // الانتقال إلى صفحة المهام
    window.location.href = 'tasks.html';
});
```

### ملف script.js - عرض المهام

```javascript
function displayTasks() {
    // الحصول على العناصر
    const taskListContainer = document.getElementById('task-list');
    const noTasksMsg = document.getElementById('no-tasks');
    
    // الحصول على المهام من localStorage
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    
    if (tasks.length > 0) {
        // إخفاء رسالة "لا توجد مهام"
        if (noTasksMsg) noTasksMsg.style.display = 'none';
        
        // مسح المحتوى السابق
        taskListContainer.innerHTML = '';
        
        // عرض كل مهمة
        tasks.forEach(task => {
            const taskElement = document.createElement('div');
            taskElement.className = 'task-item';
            taskElement.innerHTML = `
                <div class="task-info">
                    <h3>${task.title}</h3>
                    <p>${task.desc}</p>
                    <small>التاريخ: ${task.date}</small>
                </div>
                <div class="task-actions">
                    <button onclick="deleteTask(${task.id})">حذف</button>
                </div>
            `;
            taskListContainer.appendChild(taskElement);
        });
    }
}
```

### ملف script.js - حذف مهمة

```javascript
function deleteTask(id) {
    // طلب تأكيد من المستخدم
    if (confirm('هل أنت متأكد من حذف هذه المهمة؟')) {
        // الحصول على المهام
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        
        // تصفية المهام (إزالة المهمة المختارة)
        tasks = tasks.filter(task => task.id !== id);
        
        // حفظ المهام المتبقية
        localStorage.setItem('tasks', JSON.stringify(tasks));
        
        // تحديث العرض
        displayTasks();
    }
}
```

### ملف style.css - المتغيرات

```css
:root {
    --primary-color: #4a90e2;      /* اللون الأساسي */
    --secondary-color: #f5f5f5;    /* اللون الثانوي */
    --text-color: #333;             /* لون النص */
    --bg-color: #fff;               /* لون الخلفية */
    --card-bg: #fff;                /* لون خلفية البطاقات */
    --border-color: #ddd;           /* لون الحدود */
}

[data-theme="dark"] {
    --primary-color: #357abd;
    --secondary-color: #1a1a1a;
    --text-color: #f5f5f5;
    --bg-color: #121212;
    --card-bg: #1e1e1e;
    --border-color: #333;
}
```

---

## معلومات فريق العمل

| الاسم | الرقم الجامعي | الدور | المسؤوليات |
|-------|--------------|------|-----------|
| علي السراري | 20201234 | هيكلية HTML | تصميم هيكل الصفحات، العناصر الدلالية، النماذج |
| عمر القحطاني | 20205678 | تنسيق CSS | التنسيق، التجاوب، الألوان، الخطوط |
| هدى محمد | 20207890 | برمجة JavaScript | المنطق، localStorage، الأحداث، التفاعلية |

---

## معايير التقييم

| المعيار | النقاط | الملاحظات |
|--------|--------|---------|
| هيكلية HTML (Semantic, Correct) | 15 | استخدام عناصر دلالية صحيحة |
| تنسيق CSS والتجاوب | 15 | تصميم متجاوب يعمل على جميع الأجهزة |
| تفاعل JavaScript | 20 | إضافة، عرض، حذف المهام بسلاسة |
| استخدام localStorage | 10 | حفظ واسترجاع البيانات بشكل صحيح |
| تصميم الموقع والواجهة (UI/UX) | 10 | واجهة جذابة وسهلة الاستخدام |
| وضوح الكود والتعليقات | 10 | كود منظم مع تعليقات توضيحية |
| اكتمال الوظائف | 10 | جميع الميزات تعمل بشكل صحيح |
| التعاون الجماعي | 5 | توزيع المهام والتعاون الفعال |
| التسليم في الموعد | 5 | تسليم المشروع قبل الموعد النهائي |
| **المجموع** | **100** | - |

---

## التعليمات للنشر على GitHub

### الخطوة 1: إنشاء مستودع على GitHub
1. انتقل إلى https://github.com/new
2. أدخل اسم المستودع: `study_buddy_project`
3. أضف وصفاً: "موقع منظم المهام الدراسي"
4. اختر "Public"
5. انقر على "Create repository"

### الخطوة 2: نسخ الملفات إلى المستودع
```bash
# 1. استنساخ المستودع الفارغ
git clone https://github.com/YOUR_USERNAME/study_buddy_project.git
cd study_buddy_project

# 2. نسخ ملفات المشروع
cp /path/to/study_buddy/* .

# 3. إضافة الملفات
git add .

# 4. التزام التغييرات
git commit -m "Initial commit: Add Study Buddy Project files"

# 5. رفع إلى GitHub
git push -u origin master
```

### الخطوة 3: تفعيل GitHub Pages (اختياري)
1. انتقل إلى إعدادات المستودع (Settings)
2. اختر "Pages" من القائمة الجانبية
3. اختر "master" كـ Source
4. انقر على "Save"
5. سيتم نشر الموقع على: `https://YOUR_USERNAME.github.io/study_buddy_project/`

---

## ملاحظات تقنية مهمة

### localStorage
- **الحد الأقصى للتخزين**: عادة 5-10 MB لكل موقع
- **المدة الزمنية**: البيانات تبقى حتى يتم حذفها يدوياً
- **الخصوصية**: البيانات محلية فقط في المتصفح

### التوافقية
- جميع المتصفحات الحديثة تدعم HTML5 و CSS3
- JavaScript ES6 مدعوم في جميع المتصفحات الحديثة
- localStorage مدعوم في جميع المتصفحات الحديثة

### الأمان
- هذا المشروع مخصص للتعليم
- لا يتضمن ميزات أمان متقدمة
- لا يتم إرسال البيانات إلى خادم بعيد

---

## الخطوات التالية والتحسينات المستقبلية

### إضافات مقترحة
1. **قاعدة بيانات**: لحفظ البيانات على خادم بعيد
2. **تحرير المهام**: إمكانية تعديل المهام الموجودة
3. **الفرز والتصفية**: تنظيم المهام حسب التاريخ أو الأولوية
4. **الإشعارات**: تنبيهات عند اقتراب تاريخ التسليم
5. **المصادقة**: نظام حسابات مستخدمين
6. **التصدير**: تصدير المهام إلى PDF أو Excel
7. **التعاون**: مشاركة المهام مع مستخدمين آخرين

---

## الدعم والمساعدة

إذا واجهت أي مشاكل:

1. **تحقق من console**: افتح Developer Tools (F12) وتحقق من الأخطاء
2. **امسح localStorage**: قد تكون البيانات القديمة تسبب مشاكل
3. **استخدم متصفح حديث**: تأكد من استخدام متصفح محدث
4. **افتح issue على GitHub**: إذا كنت تريد الإبلاغ عن خطأ

---

## الترخيص والاستخدام

هذا المشروع مفتوح المصدر ومتاح للاستخدام التعليمي بحرية.

---

## شكر وتقدير

شكراً لاستخدامك منظم المهام الدراسي. نأمل أن يساعدك في تنظيم مهامك الدراسية بشكل أفضل!

**تم إنشاء هذا المشروع بواسطة**: فريق تطوير الويب 1  
**التاريخ**: 2026  
**الحالة**: مكتمل ✅

---

## معلومات الاتصال

- **البريد الإلكتروني**: web1@university.edu
- **GitHub**: https://github.com/24-Amgad-42/study_buddy_project
- **الموقع**: https://24-Amgad-42.github.io/study_buddy_project/

---

**آخر تحديث**: 2026-06-02
