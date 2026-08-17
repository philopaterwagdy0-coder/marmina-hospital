// بيانات مستشفى مارمينا

// الأقسام الطبية
const departments = [
    { 
        id: 1, 
        name: "قسم الباطنة", 
        icon: "", 
        desc: "رعاية شاملة لأمراض الجهاز الهضمي والقلب والسكر والضغط" 
    },
    { 
        id: 2, 
        name: "قسم الأطفال", 
        icon: "👶", 
        desc: "عناية متخصصة بصحة أطفالكم من الولادة حتى المراهقة" 
    },
    { 
        id: 3, 
        name: "قسم النساء والولادة", 
        icon: "🤰", 
        desc: "رعاية متكاملة للأمهات والولادة الآمنة" 
    },
    { 
        id: 4, 
        name: "قسم الأسنان", 
        icon: "", 
        desc: "تجميل وعلاج جذور وتركيبات بأحدث الأجهزة" 
    },
    { 
        id: 5, 
        name: "قسم الأشعة", 
        icon: "🩻", 
        desc: "أشعة مقطعية، رنين مغناطيسي، وموجات صوتية دقيقة" 
    },
    { 
        id: 6, 
        name: "قسم الطوارئ", 
        icon: "🚨", 
        desc: "خدمة طوارئ 24 ساعة على مدار الأسبوع" 
    }
];

// الأطباء
const doctors = [
    { 
        id: 101, 
        name: "د. أحمد محمد", 
        specialty: "استشاري قلب", 
        price: 250, 
        image: "👨‍⚕️" 
    },
    { 
        id: 102, 
        name: "د. سارة علي", 
        specialty: "طبيبة أطفال", 
        price: 200, 
        image: "👩‍⚕️" 
    },
    { 
        id: 103, 
        name: "د. خالد حسن", 
        specialty: "جراحة أسنان", 
        price: 300, 
        image: "👨‍⚕️" 
    },
    { 
        id: 104, 
        name: "د. منى إبراهيم", 
        specialty: "نساء وتوليد", 
        price: 250, 
        image: "👩‍⚕️" 
    }
];

// عرض الأقسام
function renderDepartments() {
    const container = document.getElementById('departments-grid');
    let htmlContent = "";

    departments.forEach(dep => {
        htmlContent += `
            <div class="card">
                <div style="font-size: 3.5rem; text-align: center; margin-bottom: 1rem;">${dep.icon}</div>
                <h3>${dep.name}</h3>
                <p style="color: #666; line-height: 1.8;">${dep.desc}</p>
            </div>
        `;
    });

    container.innerHTML = htmlContent;
}

// عرض الأطباء
function renderDoctors() {
    const container = document.getElementById('doctors-grid');
    let htmlContent = "";

    doctors.forEach(doc => {
        htmlContent += `
            <div class="card">
                <div style="font-size: 5rem; text-align: center; margin-bottom: 1rem;">${doc.image}</div>
                <h3>${doc.name}</h3>
                <p style="color: var(--teal); font-weight: 700; margin: 0.5rem 0;">${doc.specialty}</p>
                <div class="price">${doc.price} ج.م / كشف</div>
                <button class="btn-book" onclick="bookAppointment('${doc.name}')">
                     احجز موعد الآن
                </button>
            </div>
        `;
    });

    container.innerHTML = htmlContent;
}

// حجز موعد
function bookAppointment(doctorName) {
    const phoneNumber = "201128081867";
    const message = `السلام عليكم، أريد حجز موعد مع ${doctorName} في مستشفى مارمينا`;
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // فتح واتساب في نافذة جديدة
    window.open(whatsappURL, '_blank');
    
    console.log("حجز موعد مع:", doctorName);
}

// تشغيل الدوال عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    renderDepartments();
    renderDoctors();
    console.log("✅ مستشفى مارمينا - طاحونة البابا كيرلس جاهز!");
});
