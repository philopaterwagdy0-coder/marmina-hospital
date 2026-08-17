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
        dateElement.textContent = ` ${dayName} ${day} ${month} ${year}`;
    }
}

// رقم واتساب المستشفى
const WHATSAPP_NUMBER = "201128081867";

// بيانات الأقسام والأطباء مع التصنيف
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
        icon: "🤰",
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
        icon: "",
        category: "الأطفال",
        doctors: [
            { name: "د/ يوسف سعد", time: "1:30 PM", status: "present" }
        ]
    },
    {
        id: 12,
        name: "أمراض كلى",
        icon: "🫘",
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
        icon: "👁️",
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

// دالة الحجز عبر واتساب
function bookViaWhatsApp(doctorName, departmentName) {
    const message = `السلام عليكم 🙏\nأريد الاستفسار وحجز موعد مع:\n👨‍⚕️ ${doctorName}\n🏥 قسم: ${departmentName}\n\nمستشفى مارمينا - طاحونة البابا كيرلس`;
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
                            <span class="time-icon">🕐</span>
                            <span class="time-text">${doc.time}</span>
                        </div>
                        
                        <div class="doc-status ${statusClass}">
                            ${statusText}
                        </div>
                        
                        ${canBook ? `
                            <button class="btn-whatsapp-large" onclick="bookViaWhatsApp('${doc.name}', '${dep.name}')">
                                <span></span>
                                <span>احجز موعد الآن</span>
                            </button>
                        ` : ''}
                    </div>
                    
                    ${dep.note ? `<div class="doc-note"> ${dep.note}</div>` : ''}
                </div>
            `;
        });
    });

    container.innerHTML = htmlContent;
}

// تفعيل أزرار الفلترة
function setupFilterButtons() {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            // إزالة active من كل الأزرار
            buttons.forEach(b => b.classList.remove('active'));
            // إضافة active للزر المضغوط
            btn.classList.add('active');
            // فلترة الأطباء
            const filter = btn.getAttribute('data-filter');
            renderDepartments(filter);
        });
    });
}

// الأسئلة الشائعة
function setupFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            // إغلاق كل الأسئلة المفتوحة
            faqItems.forEach(i => {
                if (i !== item) i.classList.remove('active');
            });
            // تبديل حالة السؤال الحالي
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

// تشغيل الدوال عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    displayCurrentDate();
    renderDepartments();
    setupFilterButtons();
    setupFAQ();
    setupMobileMenu();
    console.log("✅ مستشفى مارمينا - طاحونة البابا كيرلس - جاهز!");
});
