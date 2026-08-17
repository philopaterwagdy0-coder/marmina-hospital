// بيانات مواعيد عيادات مستشفى مارمينا - طاحونة البابا كيرلس

// عرض التاريخ الحالي
function displayCurrentDate() {
    const days = ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];
    const months = ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'];
    const now = new Date();
    const dayName = days[now.getDay()];
    const day = now.getDate();
    const month = months[now.getMonth()];
    const year = now.getFullYear();
    
    const dateElement = document.getElementById('currentDate');
    if (dateElement) {
        dateElement.textContent = `📅 ${dayName} ${day} ${month} ${year}`;
    }
}

// رقم واتساب المستشفى
const WHATSAPP_NUMBER = "201128081867";

// بيانات الأقسام والأطباء
const departments = [
    {
        id: 1,
        name: "الجراحة العامة",
        icon: "🔪",
        category: "الجراحة",
        doctors: [
            { name: "د/ جورج وليم", time: "1:00 PM", status: "present" },
            { name: "د/ استافرو باولو", time: "2:00 PM", status: "present" },
            { name: "د/ شنودة سمر", time: "4:00 PM", status: "present" },
            { name: "د/ عصام جاب الله", time: "7:00 PM", status: "present" }
        ]
    },
    {
        id: 2,
        name: "العلاج الطبيعي",
        icon: "🏃",
        category: "أخرى",
        doctors: [
            { name: "د/ مينا ألبرت", time: "9:00 AM", status: "present" },
            { name: "د/ مينا البير", time: "2:00 PM", status: "present" },
            { name: "د/ مريم القصص", time: "1:00 PM", status: "present" },
            { name: "د/ كيرلس جورح", time: "2:00 PM", status: "present" },
            { name: "د/ أرميا مسعود", time: "3:00 PM", status: "present" }
        ],
        note: "أطفال"
    },
    {
        id: 3,
        name: "قلب وأوعية دموية وإيكو",
        icon: "❤️",
        category: "القلب",
        doctors: [
            { name: "د/ أمير أنور", time: "9:30 AM", status: "present" },
            { name: "د/ مينا عيد", time: "6:00 PM", status: "present" },
            { name: "د/ أنطوان سعد", time: "-", status: "present", specialty: "استشاري القلب والأوعية الدموية والايكو" }
        ]
    },
    {
        id: 4,
        name: "العظام",
        icon: "🦴",
        category: "الجراحة",
        doctors: [
            { name: "د/ امجد فخري", time: "12:00 PM", status: "present" },
            { name: "د/ مارك موريس", time: "4:00 PM", status: "present" },
            { name: "د/ أمير خيري", time: "-", status: "absent" }
        ]
    },
    {
        id: 5,
        name: "أسنان",
        icon: "🦷",
        category: "الأسنان",
        doctors: [
            { name: "د/ جورج نادر", time: "9:00 AM", status: "present", specialty: "أخصائي طب وجراحة الفم والأسنان" },
            { name: "د/ مريم عبيد", time: "4:00 PM", status: "present" }
        ]
    },
    {
        id: 6,
        name: "المسالك البولية",
        icon: "🫘",
        category: "الجراحة",
        doctors: [
            { name: "طلعت فؤاد", time: "3:00 PM", status: "present" },
            { name: "يوسف فتحي", time: "-", status: "absent" }
        ]
    },
    {
        id: 7,
        name: "نساء وتوليد",
        icon: "",
        category: "النساء",
        doctors: [
            { name: "د/ محب بطرس", time: "1:00 PM", status: "present" },
            { name: "د/ إيهاب تانان", time: "-", status: "absent" }
        ]
    },
    {
        id: 8,
        name: "الأشعة والموجات الصوتية",
        icon: "🩻",
        category: "الأشعة",
        doctors: [
            { name: "د/ كريستينا فوزي", time: "11:00 AM", status: "present" },
            { name: "د/ منال حليم", time: "6:00 PM", status: "present" },
            { name: "د/ رامي رأفت", time: "-", status: "present", specialty: "أخصائي الموجات الصوتية والأشعة التشخيصية" }
        ]
    },
    {
        id: 9,
        name: "باطنة عامة",
        icon: "🩺",
        category: "الباطنة",
        doctors: [
            { name: "د/ رقيق يوسف", time: "3:00 PM", status: "present" }
        ]
    },
    {
        id: 10,
        name: "باطنة صدر",
        icon: "🫁",
        category: "الباطنة",
        doctors: [
            { name: "د/ راجي جرجس", time: "3:30 PM", status: "present" }
        ]
    },
    {
        id: 11,
        name: "أطفال",
        icon: "👶",
        category: "الأطفال",
        doctors: [
            { name: "د/ يوسف سعد", time: "1:30 PM", status: "present" }
        ]
    },
    {
        id: 12,
        name: "أمراض كلى",
        icon: "",
        category: "الباطنة",
        doctors: [
            { name: "د/ منال مهنى", time: "10:00 AM", status: "present" }
        ]
    },
    {
        id: 13,
        name: "مخ وأعصاب",
        icon: "🧠",
        category: "الباطنة",
        doctors: [
            { name: "د/ أشرف ماهر", time: "6:00 PM", status: "present" }
        ]
    },
    {
        id: 14,
        name: "رمد",
        icon: "️",
        category: "أخرى",
        doctors: [
            { name: "د/ بيتر وهيب", time: "4:00 PM", status: "present" }
        ]
    },
    {
        id: 15,
        name: "باطنة وكلى",
        icon: "🩺",
        category: "الباطنة",
        doctors: [
            { name: "د/ ميشيل عزيز", time: "10:00 AM", status: "present" }
        ]
    },
    {
        id: 16,
        name: "جلدية وتناسلية",
        icon: "🧴",
        category: "الجلدية",
        doctors: [
            { name: "د/ ايناس فايز", time: "10:00 AM", status: "present", specialty: "استشاري الأمراض الجلدية والتناسلية" },
            { name: "د/ نيفين يعقوب", time: "10:00 AM", status: "present" }
        ]
    },
    {
        id: 17,
        name: "سكر وغدد صماء",
        icon: "💉",
        category: "الباطنة",
        doctors: [
            { name: "د/ ماجد حبيب", time: "10:00 AM", status: "present" }
        ],
        note: "20 حالة فقط"
    },
    {
        id: 18,
        name: "جهاز هضمي وكبد",
        icon: "🫀",
        category: "الباطنة",
        doctors: [
            { name: "د/ رامي عدلي", time: "11:00 AM", status: "present" }
        ]
    },
    {
        id: 19,
        name: "تنمية مهارات",
        icon: "🧩",
        category: "أخرى",
        doctors: [
            { name: "ا/ مريم عيده", time: "12:00 PM", status: "present" }
        ]
    },
    {
        id: 20,
        name: "أنف وأذن وحنجرة",
        icon: "👂",
        category: "أخرى",
        doctors: [
            { name: "د/ ايفانا نبيل", time: "7:00 PM", status: "present" }
        ]
    },
    {
        id: 21,
        name: "استشارات تغذية",
        icon: "",
        category: "أخرى",
        doctors: [
            { name: "ا/ نانسي مبروك", time: "6:00 PM", status: "present" }
        ]
    },
    {
        id: 22,
        name: "جراحة الأورام",
        icon: "🎗️",
        category: "الأورام",
        doctors: [
            { name: "د/ فادي رشاد", time: "-", status: "present", specialty: "مدرس مساعد جراحة الأورام - المعهد القومي للأورام - جامعة القاهرة" }
        ]
    }
];

// بيانات التقييمات
const reviews = [
    { id: 1, name: "أحمد محمد", rating: 5, text: "مستشفى ممتاز جداً، الأطباء محترفين والخدمة راقية. أنصح به بشدة!", date: "2026-08-15", type: "positive" },
    { id: 2, name: "فاطمة حسن", rating: 5, text: "تجربة رائعة! الدكتورة كانت متعاونة جداً والتمريض محترم. شكراً مارمينا", date: "2026-08-14", type: "positive" },
    { id: 3, name: "مينا جورج", rating: 5, text: "أفضل مستشفى في المنطقة. الأجهزة حديثة والنظافة ممتازة", date: "2026-08-13", type: "positive" },
    { id: 4, name: "سارة إبراهيم", rating: 4, text: "خدمة جيدة والأسعار معقولة. فقط الانتظار كان طويل شوية", date: "2026-08-12", type: "positive" },
    { id: 5, name: "يوسف عادل", rating: 5, text: "دكتور فادي رشاد ممتاز جداً في جراحة الأورام. الله يكرمه", date: "2026-08-11", type: "positive" },
    { id: 6, name: "مريم كمال", rating: 5, text: "قسم النساء والولادة رائع. الدكتورة محب بطرس محترفة جداً", date: "2026-08-10", type: "positive" },
    { id: 7, name: "كريم سامي", rating: 2, text: "الخدمة كانت بطيئة جداً واضطررت أنتظر ساعتين. لازم يتحسنوا في إدارة المواعيد", date: "2026-08-09", type: "negative" },
    { id: 8, name: "نور الدين", rating: 5, text: "مستشفى نظيف ومنظم. الأطباء على مستوى عالي. أنصح الجميع بالتعامل معهم", date: "2026-08-08", type: "positive" },
    { id: 9, name: "هبة الله", rating: 5, text: "تجربة ممتازة في قسم الأسنان. دكتور جورج نادر شاطر جداً", date: "2026-08-07", type: "positive" },
    { id: 10, name: "عمر فاروق", rating: 4, text: "مستشفى جيد بشكل عام. فقط أسعار الأشعة غالية شوية", date: "2026-08-06", type: "positive" },
    { id: 11, name: "جيسيكا ميلاد", rating: 5, text: "التمريض محترم جداً والأطباء متعاونين. شكراً لمستشفى مارمينا", date: "2026-08-05", type: "positive" },
    { id: 12, name: "بولس حنا", rating: 5, text: "أفضل مستشفى في طاحونة البابا كيرلس. خدمة 24 ساعة ممتازة", date: "2026-08-04", type: "positive" },
    { id: 13, name: "لوجينا عادل", rating: 1, text: "تجربة سيئة. الدكتور كان مش موجود والموعد اتلغى بدون ما حد يبلغني. خيبة أمل", date: "2026-08-03", type: "negative" },
    { id: 14, name: "مايكل فوزي", rating: 5, text: "مستشفى راقي جداً. قسم القلب ممتاز ودكتور أنطوان سعد استشاري محترم", date: "2026-08-02", type: "positive" },
    { id: 15, name: "كيرلس وجيه", rating: 5, text: "أنصح به بشدة! خدمة ممتازة وأسعار مناسبة. الله يبارك فيكم", date: "2026-08-01", type: "positive" }
];

// دالة الحجز عبر واتساب
function bookViaWhatsApp(doctorName, departmentName) {
    const message = `السلام عليكم 🙏\nأريد الاستفسار وحجز موعد مع:\n👨⚕️ ${doctorName}\n قسم: ${departmentName}\n\nمستشفى مارمينا - طاحونة البابا كيرلس`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
}

// عرض الأقسام مع الفلترة
function renderDepartments(filter = 'all') {
    const container = document.getElementById('departments-grid');
    let htmlContent = "";

    const filteredDepts = filter === 'all' 
        ? departments 
        : departments.filter(dept => dept.category === filter);

    filteredDepts.forEach(dep => {
        dep.doctors.forEach(doc => {
            const statusClass = doc.status === 'present' ? 'status-present' : 'status-absent';
            const statusText = doc.status === 'present' ? 'موجود' : 'معتذر';
            const canBook = doc.status === 'present';
            
            htmlContent += `
                <div class="doctor-card" data-category="${dep.category}">
                    <div class="doc-header">
                        <span class="doc-icon">${dep.icon}</span>
                        <span class="dept-name">${dep.name}</span>
                    </div>
                    <div class="doc-body">
                        <div class="doc-name">${doc.name}</div>
                        ${doc.specialty ? `<div class="doc-specialty">${doc.specialty}</div>` : ''}
                        <div class="doc-time">
                            <span class="time-icon"></span>
                            <span class="time-text">${doc.time}</span>
                        </div>
                        <div class="doc-status ${statusClass}">${statusText}</div>
                        ${canBook ? `
                            <button class="btn-whatsapp-large" onclick="bookViaWhatsApp('${doc.name}', '${dep.name}')">
                                <span>💬</span>
                                <span>احجز موعد الآن</span>
                            </button>
                        ` : ''}
                    </div>
                    ${dep.note ? `<div class="doc-note">📝 ${dep.note}</div>` : ''}
                </div>
            `;
        });
    });

    container.innerHTML = htmlContent;
}

// عرض التقييمات
function renderReviews(filter = 'all') {
    const container = document.getElementById('reviews-grid');
    let htmlContent = "";

    const filteredReviews = filter === 'all' 
        ? reviews 
        : reviews.filter(review => review.type === filter);

    filteredReviews.forEach(review => {
        const stars = '⭐'.repeat(review.rating);
        const initial = review.name.charAt(0);
        
        htmlContent += `
            <div class="review-card ${review.type}">
                <span class="review-type-badge ${review.type}">
                    ${review.type === 'positive' ? 'إيجابي' : 'سلبي'}
                </span>
                <div class="review-header">
                    <div class="reviewer-info">
                        <div class="reviewer-avatar">${initial}</div>
                        <div>
                            <div class="reviewer-name">${review.name}</div>
                            <div class="review-date">${review.date}</div>
                        </div>
                    </div>
                </div>
                <div class="review-rating">${stars}</div>
                <div class="review-text">${review.text}</div>
            </div>
        `;
    });

    container.innerHTML = htmlContent;
}

// تفعيل أزرار الفلترة
function setupFilterButtons() {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.getAttribute('data-filter');
            renderDepartments(filter);
        });
    });
}

// فلترة التقييمات
function setupReviewFilters() {
    const buttons = document.querySelectorAll('.review-filter-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.getAttribute('data-filter');
            renderReviews(filter);
        });
    });
}

// الأسئلة الشائعة
function setupFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            faqItems.forEach(i => {
                if (i !== item) i.classList.remove('active');
            });
            item.classList.toggle('active');
        });
    });
}

// القائمة الجانبية
function setupMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const sideMenu = document.getElementById('sideMenu');
    const menuClose = document.getElementById('menuClose');
    const menuLinks = document.querySelectorAll('.menu-link');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            sideMenu.classList.add('active');
        });
    }

    if (menuClose) {
        menuClose.addEventListener('click', () => {
            sideMenu.classList.remove('active');
        });
    }

    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            sideMenu.classList.remove('active');
        });
    });
}

// نظام التقييم بالنجوم
function setupStarRating() {
    const stars = document.querySelectorAll('.star');
    let selectedRating = 0;

    stars.forEach(star => {
        star.addEventListener('click', () => {
            selectedRating = parseInt(star.getAttribute('data-rating'));
            stars.forEach((s, index) => {
                if (index < selectedRating) {
                    s.classList.add('active');
                } else {
                    s.classList.remove('active');
                }
            });
        });
    });

    const form = document.getElementById('reviewForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('reviewerName').value;
            const text = document.getElementById('reviewText').value;
            
            if (selectedRating === 0) {
                alert('يرجى اختيار التقييم');
                return;
            }

            const newReview = {
                id: reviews.length + 1,
                name: name,
                rating: selectedRating,
                text: text,
                date: new Date().toISOString().split('T')[0],
                type: selectedRating >= 3 ? 'positive' : 'negative'
            };

            reviews.unshift(newReview);
            renderReviews();
            
            form.reset();
            stars.forEach(s => s.classList.remove('active'));
            selectedRating = 0;
            
            alert('✅ شكراً لتقييمك!');
        });
    }
}

// تشغيل الدوال عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    displayCurrentDate();
    renderDepartments();
    setupFilterButtons();
    setupFAQ();
    setupMobileMenu();
    renderReviews();
    setupReviewFilters();
    setupStarRating();
    console.log("✅ مستشفى مارمينا - طاحونة البابا كيرلس - جاهز!");
});
