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

const WHATSAPP_NUMBER = "201128081867";

const departments = [
    { id: 1, name: "العظام", icon: "", category: "العظام", doctors: [
        { name: "د/ اندرو جمال", time: "1:00 PM", status: "present" },
        { name: "د/ أندرو أسامة", time: "6:00 PM", status: "present" },
        { name: "د/ فايق عبد الشهيد", time: "-", status: "absent" }
    ]},
    { id: 2, name: "العلاج الطبيعي", icon: "🏃", category: "العلاج الطبيعي", doctors: [
        { name: "د/ اينوب سميح", time: "10:00 AM", status: "present" },
        { name: "د/ مريم صبحي", time: "12:00 PM", status: "present" },
        { name: "د/ إسحق زكريا", time: "3:00 PM", status: "present" },
        { name: "د/ كيرلس جورج", time: "9:30 AM", status: "present" }
    ], note: "أطفال" },
    { id: 3, name: "أسنان", icon: "🦷", category: "الأسنان", doctors: [
        { name: "د/ الهام فرج الله", time: "10:00 AM", status: "present" },
        { name: "د/ مادونا اشرف", time: "2:00 PM", status: "present" }
    ]},
    { id: 4, name: "جراحة عامة وأورام", icon: "️", category: "الجراحة", doctors: [
        { name: "د/ رامز رغبت", time: "10:00 AM", status: "present" },
        { name: "د/ بيتر نعيم", time: "8:00 PM", status: "present" }
    ]},
    { id: 5, name: "نساء وتوليد", icon: "", category: "النساء", doctors: [
        { name: "د/ مرقس صفوت", time: "6:00 PM", status: "present" }
    ]},
    { id: 6, name: "أطفال", icon: "👶", category: "الأطفال", doctors: [
        { name: "د/ جيهان عدلي", time: "10:00 AM", status: "present" }
    ]},
    { id: 7, name: "باطنة وكلى", icon: "🫘", category: "الباطنة", doctors: [
        { name: "د/ ميشيل عزيز", time: "9:00 AM", status: "present" }
    ]},
    { id: 8, name: "قلب وأوعية دموية وإيكو", icon: "❤️", category: "القلب", doctors: [
        { name: "د/ امير اسكندر", time: "10:00 AM", status: "present" }
    ]},
    { id: 9, name: "باطنة عامة", icon: "🩺", category: "الباطنة", doctors: [
        { name: "د/ سامي عطية", time: "1:00 PM", status: "present" }
    ]},
    { id: 10, name: "جهاز هضمي وكبد", icon: "🫀", category: "الباطنة", doctors: [
        { name: "د/ فادي فضل", time: "3:00 PM", status: "present" }
    ]},
    { id: 11, name: "الجراحة العامة", icon: "🔪", category: "الجراحة", doctors: [
        { name: "د/ مينا كمال", time: "12:30 PM", status: "present" },
        { name: "د/ جورج ابراهيم", time: "4:00 PM", status: "present" }
    ]},
    { id: 12, name: "أمراض كلى", icon: "🫘", category: "الباطنة", doctors: [
        { name: "د/ ماريا بباوي", time: "-", status: "absent" },
        { name: "د/ كرستين عزت", time: "-", status: "absent" }
    ]},
    { id: 13, name: "الأشعة والموجات الصوتية", icon: "🩻", category: "الأشعة", doctors: [
        { name: "د/ رامي رأفت", time: "11:00 AM", status: "present" }
    ]},
    { id: 14, name: "جراحة تجميل", icon: "💉", category: "الجراحة", doctors: [
        { name: "د/ عمرو الدياسطي", time: "4:00 PM", status: "present" }
    ]},
    { id: 15, name: "مخ وأعصاب", icon: "", category: "المخ والأعصاب", doctors: [
        { name: "د/ سامية ابراهيم", time: "10:00 AM", status: "present" }
    ]},
    { id: 16, name: "جراحة أوعية دموية", icon: "", category: "الجراحة", doctors: [
        { name: "د/ مينا مدحت", time: "7:00 PM", status: "present" }
    ]},
    { id: 17, name: "المسالك البولية", icon: "🫘", category: "المسالك البولية", doctors: [
        { name: "د/ مينا ناجح", time: "4:00 PM", status: "present" }
    ]},
    { id: 18, name: "رمد", icon: "️", category: "العيون", doctors: [
        { name: "د/ ريمون عاطف", time: "2:30 PM", status: "present" },
        { name: "د/ جون أسامة", time: "6:00 PM", status: "present" }
    ]},
    { id: 19, name: "تخاطب وتنمية مهارات وتعديل سلوك", icon: "🧩", category: "التنمية", doctors: [
        { name: "ا/ كرستين صموئيل", time: "3:00 PM", status: "present" }
    ]}
];

const medicalDepartments = [
    { id: 1, name: "القلب والأوعية الدموية", icon: "❤️", description: "رعاية وتشخيص أمراض القلب والقسطرة العلاجية بأحدث الأجهزة", category: "القلب" },
    { id: 2, name: "العظام والمفاصل", icon: "🦴", description: "تشخيص وعلاج مشاكل العظام والمفاصل والإصابات الرياضية", category: "العظام" },
    { id: 3, name: "الأطفال وحديثي الولادة", icon: "👶", description: "رعاية شاملة لصحة طفلك من الولادة حتى المراهقة", category: "الأطفال" },
    { id: 4, name: "النساء والتوليد", icon: "🤰", description: "متابعة الحمل والولادة الآمنة وعلاج مشاكل العقم", category: "النساء" },
    { id: 5, name: "الباطنة العامة", icon: "🩺", description: "تشخيص وعلاج الأمراض الباطنية المزمنة والحادة", category: "الباطنة" },
    { id: 6, name: "الأسنان والفم", icon: "🦷", description: "علاج الأسنان والتجميل وزراعة الأسنان بأحدث التقنيات", category: "الأسنان" },
    { id: 7, name: "المخ والأعصاب", icon: "🧠", description: "تشخيص وعلاج أمراض المخ والأعصاب والعمود الفقري", category: "المخ والأعصاب" },
    { id: 8, name: "العيون", icon: "️", description: "فحص النظر وعلاج أمراض العيون والعمليات الجراحية", category: "العيون" },
    { id: 9, name: "الجراحة العامة", icon: "", description: "إجراء العمليات الجراحية العامة والمنظار", category: "الجراحة" },
    { id: 10, name: "الأشعة والتحاليل", icon: "🩻", description: "أشعة مقطعية ورنين مغناطيسي وتحاليل طبية شاملة", category: "الأشعة" }
];

const featuredDoctors = [
    { name: "د/ أمير أنور", specialty: "استشاري القلب والأوعية الدموية", bio: "خبرة تزيد عن 15 عاماً في تشخيص وعلاج أمراض القلب والقسطرة العلاجية.", schedule: " السبت والاثنين: 10:00 ص - 2:00 م", image: "https://img.freepik.com/free-photo/portrait-smiling-handsome-male-doctor-man_171337-5055.jpg" },
    { name: "د/ فادي فضل", specialty: "استشاري الجهاز الهضمي والكبد", bio: "متخصص في مناظير الجهاز الهضمي وعلاج أمراض الكبد المزمنة بأحدث التقنيات.", schedule: "🕐 الأحد والثلاثاء: 3:00 م - 7:00 م", image: "https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-closed-posture_409827-254.jpg" },
    { name: "د/ مرقس صفوت", specialty: "استشاري النساء والتوليد", bio: "متابعة الحمل والولادة الآمنة، وعلاج مشاكل العقم وتأخر الإنجاب برعاية فائقة.", schedule: "🕐 يومياً: 6:00 م - 9:00 م", image: "https://img.freepik.com/free-photo/smiling-doctor-with-strethoscope-isolated-grey_651396-974.jpg" },
    { name: "د/ جيهان عدلي", specialty: "استشاري طب الأطفال وحديثي الولادة", bio: "رعاية شاملة لصحة طفلك، من المتابعة الدورية للتطعيمات وعلاج أمراض الأطفال.", schedule: "🕐 السبت والأربعاء: 10:00 ص - 2:00 م", image: "https://img.freepik.com/free-photo/medium-shot-scientist-with-crossed-arms_23-2148821202.jpg" }
];

const defaultReviews = [
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

let reviews = [...defaultReviews];

const savedReviews = localStorage.getItem('marmina_reviews');
if (savedReviews) {
    const parsedReviews = JSON.parse(savedReviews);
    parsedReviews.forEach(review => {
        if (!reviews.find(r => r.id === review.id)) {
            reviews.unshift(review);
        }
    });
}

function bookViaWhatsApp(doctorName, departmentName) {
    const message = `السلام عليكم 🙏\nأريد الاستفسار وحجز موعد مع:\n👨‍️ ${doctorName}\n🏥 قسم: ${departmentName}\n\nمستشفى مارمينا - طاحونة البابا كيرلس`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
}

function renderDepartmentsCards() {
    const container = document.getElementById('departments-grid');
    if (!container) return;
    let htmlContent = "";
    medicalDepartments.forEach((dept, index) => {
        htmlContent += `
            <div class="department-card" onclick="showDepartmentSchedule('${dept.category}')" style="animation: fadeInUp 0.6s ease ${index * 0.1}s both;">
                <span class="department-icon">${dept.icon}</span>
                <h3 class="department-name">${dept.name}</h3>
                <p class="department-description">${dept.description}</p>
                <div class="department-link">
                    <span>📅</span>
                    <span>عرض المواعيد</span>
                </div>
            </div>
        `;
    });
    container.innerHTML = htmlContent;
}

function showDepartmentSchedule(category) {
    const scheduleSection = document.getElementById('schedule');
    const categoriesView = document.getElementById('categoriesView');
    categoriesView.style.display = 'block';
    setTimeout(() => {
        scheduleSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setTimeout(() => { showDoctorsByCategory(category); }, 300);
    }, 100);
}

function renderFeaturedDoctors() {
    const container = document.getElementById('doctors-grid');
    if (!container) return;
    let htmlContent = "";
    featuredDoctors.forEach((doc, index) => {
        htmlContent += `
            <div class="doctor-profile-card" style="animation: fadeInUp 0.6s ease ${index * 0.1}s both;">
                <div class="doctor-img-container">
                    <img src="${doc.image}" alt="${doc.name}" loading="lazy">
                </div>
                <div class="doctor-profile-body">
                    <div class="doctor-profile-name">${doc.name}</div>
                    <div class="doctor-profile-specialty">${doc.specialty}</div>
                    <div class="doctor-profile-bio">${doc.bio}</div>
                    <div class="doctor-profile-schedule">${doc.schedule}</div>
                    <button class="btn-view-profile" onclick="alert('قريباً: صفحة التفاصيل الكاملة للدكتور ${doc.name}')">
                        عرض الملف الشخصي
                    </button>
                </div>
            </div>
        `;
    });
    container.innerHTML = htmlContent;
}

function renderCategories() {
    const container = document.getElementById('categoriesGrid');
    let htmlContent = "";
    const uniqueCategories = [...new Set(departments.map(dep => dep.category))];
    uniqueCategories.forEach((category, index) => {
        const categoryDepts = departments.filter(dep => dep.category === category);
        const totalDoctors = categoryDepts.reduce((sum, dep) => sum + dep.doctors.length, 0);
        const icon = categoryDepts[0].icon;
        htmlContent += `
            <div class="category-card" onclick="showDoctorsByCategory('${category}')" style="animation-delay: ${index * 0.05}s">
                <span class="category-icon">${icon}</span>
                <div class="category-name">${category}</div>
                <div class="category-count">${totalDoctors} طبيب</div>
            </div>
        `;
    });
    container.innerHTML = htmlContent;
}

function showDoctorsByCategory(category) {
    const categoriesView = document.getElementById('categoriesView');
    const doctorsView = document.getElementById('doctorsView');
    const doctorsGrid = document.getElementById('doctorsGrid');
    const currentCategoryTitle = document.getElementById('currentCategoryTitle');

    categoriesView.style.display = 'none';
    doctorsView.style.display = 'block';
    currentCategoryTitle.textContent = ` ${category}`;

    const filteredDepts = departments.filter(dept => dept.category === category);
    let htmlContent = "";

    filteredDepts.forEach(dep => {
        dep.doctors.forEach(doc => {
            const statusClass = doc.status === 'present' ? 'status-present' : 'status-absent';
            const statusText = doc.status === 'present' ? 'موجود' : 'معتذر';
            const canBook = doc.status === 'present';
            
            htmlContent += `
                <div class="doctor-card">
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
                        <div class="doc-status ${statusClass}">${statusText}</div>
                        ${canBook ? `
                            <button class="btn-whatsapp-large" onclick="bookViaWhatsApp('${doc.name}', '${dep.name}')">
                                <span>💬</span>
                                <span>احجز موعد الآن</span>
                            </button>
                        ` : ''}
                    </div>
                    ${dep.note ? `<div class="doc-note"> ${dep.note}</div>` : ''}
                </div>
            `;
        });
    });
    doctorsGrid.innerHTML = htmlContent;
    doctorsView.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function backToCategories() {
    document.getElementById('doctorsView').style.display = 'none';
    const categoriesView = document.getElementById('categoriesView');
    categoriesView.style.display = 'block';
    categoriesView.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function backToMain() {
    document.getElementById('categoriesView').style.display = 'none';
    document.getElementById('doctorsView').style.display = 'none';
    document.getElementById('schedule').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function showAllDoctors() {
    const categoriesView = document.getElementById('categoriesView');
    categoriesView.style.display = 'block';
    renderCategories();
    categoriesView.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function renderReviews(filter = 'all') {
    const container = document.getElementById('reviews-grid');
    let htmlContent = "";
    const filteredReviews = filter === 'all' ? reviews : reviews.filter(review => review.type === filter);

    filteredReviews.forEach((review, index) => {
        const stars = '⭐'.repeat(review.rating);
        const initial = review.name.charAt(0);
        htmlContent += `
            <div class="review-card ${review.type}" style="animation-delay: ${index * 0.1}s">
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

function setupReviewFilters() {
    const buttons = document.querySelectorAll('.review-filter-btn');
    const reviewsGrid = document.getElementById('reviews-grid');
    
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.getAttribute('data-filter');
            renderReviews(filter);
            reviewsGrid.classList.add('show');
            setTimeout(() => {
                reviewsGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        });
    });
}

function setupFAQ() {
    document.querySelectorAll('.faq-item').forEach(item => {
        item.querySelector('.faq-question').addEventListener('click', () => {
            document.querySelectorAll('.faq-item').forEach(i => {
                if (i !== item) i.classList.remove('active');
            });
            item.classList.toggle('active');
        });
    });
}

function setupMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const sideMenu = document.getElementById('sideMenu');
    const menuClose = document.getElementById('menuClose');

    if (hamburger) hamburger.addEventListener('click', () => sideMenu.classList.add('active'));
    if (menuClose) menuClose.addEventListener('click', () => sideMenu.classList.remove('active'));
    
    document.querySelectorAll('.menu-link').forEach(link => {
        link.addEventListener('click', () => sideMenu.classList.remove('active'));
    });
}

function setupStarRating() {
    const stars = document.querySelectorAll('.star');
    let selectedRating = 0;

    stars.forEach(star => {
        star.addEventListener('click', () => {
            selectedRating = parseInt(star.getAttribute('data-rating'));
            stars.forEach((s, index) => {
                s.classList.toggle('active', index < selectedRating);
            });
        });
    });

    const form = document.getElementById('reviewForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            if (selectedRating === 0) {
                alert('يرجى اختيار التقييم');
                return;
            }

            const newReview = {
                id: Date.now(),
                name: document.getElementById('reviewerName').value,
                rating: selectedRating,
                text: document.getElementById('reviewText').value,
                date: new Date().toISOString().split('T')[0],
                type: selectedRating >= 3 ? 'positive' : 'negative'
            };

            reviews.unshift(newReview);
            const currentSaved = JSON.parse(localStorage.getItem('marmina_reviews') || '[]');
            currentSaved.unshift(newReview);
            localStorage.setItem('marmina_reviews', JSON.stringify(currentSaved));
            
            const reviewsGrid = document.getElementById('reviews-grid');
            renderReviews('all');
            reviewsGrid.classList.add('show');
            
            document.querySelectorAll('.review-filter-btn').forEach(b => b.classList.remove('active'));
            document.querySelector('.review-filter-btn[data-filter="all"]').classList.add('active');
            
            form.reset();
            stars.forEach(s => s.classList.remove('active'));
            selectedRating = 0;
            alert('✅ شكراً لتقييمك! تم حفظه بنجاح');
        });
    }
}

function setupScrollToTop() {
    const btn = document.createElement('div');
    btn.className = 'scroll-to-top';
    btn.innerHTML = '↑';
    document.body.appendChild(btn);

    window.addEventListener('scroll', () => {
        btn.classList.toggle('visible', window.pageYOffset > 300);
    });

    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

function setupNavigation() {
    const btnAll = document.getElementById('btnAllDoctors');
    const btnBackCat = document.getElementById('btnBackToCategories');
    const btnBackMain = document.getElementById('btnBackToMain');

    if (btnAll) btnAll.addEventListener('click', showAllDoctors);
    if (btnBackCat) btnBackCat.addEventListener('click', backToCategories);
    if (btnBackMain) btnBackMain.addEventListener('click', backToMain);
}

document.addEventListener('DOMContentLoaded', () => {
    displayCurrentDate();
    renderFeaturedDoctors();
    renderDepartmentsCards();
    setupReviewFilters();
    setupFAQ();
    setupMobileMenu();
    setupStarRating();
    setupScrollToTop();
    setupNavigation();
    console.log("✅ مستشفى مارمينا - طاحونة البابا كيرلس - جاهز!");
});
