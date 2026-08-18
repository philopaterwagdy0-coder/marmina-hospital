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
    { id: 1, name: "العظام", nameEn: "Orthopedics", icon: "🦴", category: "العظام", categoryEn: "Orthopedics", doctors: [
        { name: "د/ اندرو جمال", nameEn: "Dr. Andrew Gamal", time: "1:00 PM", status: "present", statusEn: "Present" },
        { name: "د/ أندرو أسامة", nameEn: "Dr. Andrew Osama", time: "6:00 PM", status: "present", statusEn: "Present" },
        { name: "د/ فايق عبد الشهيد", nameEn: "Dr. Fayek Abdel Shahid", time: "-", status: "absent", statusEn: "Absent" }
    ]},
    { id: 2, name: "العلاج الطبيعي", nameEn: "Physical Therapy", icon: "🏃", category: "العلاج الطبيعي", categoryEn: "Physical Therapy", doctors: [
        { name: "د/ اينوب سميح", nameEn: "Dr. Aynoub Samih", time: "10:00 AM", status: "present", statusEn: "Present" },
        { name: "د/ مريم صبحي", nameEn: "Dr. Mariam Sobhy", time: "12:00 PM", status: "present", statusEn: "Present" },
        { name: "د/ إسحق زكريا", nameEn: "Dr. Isaac Zakaria", time: "3:00 PM", status: "present", statusEn: "Present" },
        { name: "د/ كيرلس جورج", nameEn: "Dr. Kyrillos George", time: "9:30 AM", status: "present", statusEn: "Present" }
    ], note: "أطفال", noteEn: "Children" },
    { id: 3, name: "أسنان", nameEn: "Dentistry", icon: "", category: "الأسنان", categoryEn: "Dentistry", doctors: [
        { name: "د/ الهام فرج الله", nameEn: "Dr. Elham Faragallah", time: "10:00 AM", status: "present", statusEn: "Present" },
        { name: "د/ مادونا اشرف", nameEn: "Dr. Madonna Ashraf", time: "2:00 PM", status: "present", statusEn: "Present" }
    ]},
    { id: 4, name: "جراحة عامة وأورام", nameEn: "General Surgery & Oncology", icon: "🎗️", category: "الجراحة", categoryEn: "Surgery", doctors: [
        { name: "د/ رامز رغبت", nameEn: "Dr. Ramez Ragheb", time: "10:00 AM", status: "present", statusEn: "Present" },
        { name: "د/ بيتر نعيم", nameEn: "Dr. Peter Naeem", time: "8:00 PM", status: "present", statusEn: "Present" }
    ]},
    { id: 5, name: "نساء وتوليد", nameEn: "Obstetrics & Gynecology", icon: "🤰", category: "النساء", categoryEn: "Obstetrics", doctors: [
        { name: "د/ مرقس صفوت", nameEn: "Dr. Marcos Safwat", time: "6:00 PM", status: "present", statusEn: "Present" }
    ]},
    { id: 6, name: "أطفال", nameEn: "Pediatrics", icon: "👶", category: "الأطفال", categoryEn: "Pediatrics", doctors: [
        { name: "د/ جيهان عدلي", nameEn: "Dr. Gehan Adly", time: "10:00 AM", status: "present", statusEn: "Present" }
    ]},
    { id: 7, name: "باطنة وكلى", nameEn: "Internal Medicine & Nephrology", icon: "🫘", category: "الباطنة", categoryEn: "Internal Medicine", doctors: [
        { name: "د/ ميشيل عزيز", nameEn: "Dr. Michel Aziz", time: "9:00 AM", status: "present", statusEn: "Present" }
    ]},
    { id: 8, name: "قلب وأوعية دموية وإيكو", nameEn: "Cardiology & Echocardiography", icon: "❤️", category: "القلب", categoryEn: "Cardiology", doctors: [
        { name: "د/ امير اسكندر", nameEn: "Dr. Amir Eskandar", time: "10:00 AM", status: "present", statusEn: "Present" }
    ]},
    { id: 9, name: "باطنة عامة", nameEn: "General Internal Medicine", icon: "🩺", category: "الباطنة", categoryEn: "Internal Medicine", doctors: [
        { name: "د/ سامي عطية", nameEn: "Dr. Samy Atia", time: "1:00 PM", status: "present", statusEn: "Present" }
    ]},
    { id: 10, name: "جهاز هضمي وكبد", nameEn: "Gastroenterology & Hepatology", icon: "", category: "الباطنة", categoryEn: "Internal Medicine", doctors: [
        { name: "د/ فادي فضل", nameEn: "Dr. Fady Fadel", time: "3:00 PM", status: "present", statusEn: "Present" }
    ]},
    { id: 11, name: "الجراحة العامة", nameEn: "General Surgery", icon: "🔪", category: "الجراحة", categoryEn: "Surgery", doctors: [
        { name: "د/ مينا كمال", nameEn: "Dr. Mina Kamal", time: "12:30 PM", status: "present", statusEn: "Present" },
        { name: "د/ جورج ابراهيم", nameEn: "Dr. George Ibrahim", time: "4:00 PM", status: "present", statusEn: "Present" }
    ]},
    { id: 12, name: "أمراض كلى", nameEn: "Nephrology", icon: "🫘", category: "الباطنة", categoryEn: "Internal Medicine", doctors: [
        { name: "د/ ماريا بباوي", nameEn: "Dr. Maria Bebawy", time: "-", status: "absent", statusEn: "Absent" },
        { name: "د/ كرستين عزت", nameEn: "Dr. Christine Ezzat", time: "-", status: "absent", statusEn: "Absent" }
    ]},
    { id: 13, name: "الأشعة والموجات الصوتية", nameEn: "Radiology & Ultrasound", icon: "🩻", category: "الأشعة", categoryEn: "Radiology", doctors: [
        { name: "د/ رامي رأفت", nameEn: "Dr. Rami Raafat", time: "11:00 AM", status: "present", statusEn: "Present" }
    ]},
    { id: 14, name: "جراحة تجميل", nameEn: "Plastic Surgery", icon: "💉", category: "الجراحة", categoryEn: "Surgery", doctors: [
        { name: "د/ عمرو الدياسطي", nameEn: "Dr. Amr El-Diasty", time: "4:00 PM", status: "present", statusEn: "Present" }
    ]},
    { id: 15, name: "مخ وأعصاب", nameEn: "Neurology", icon: "🧠", category: "المخ والأعصاب", categoryEn: "Neurology", doctors: [
        { name: "د/ سامية ابراهيم", nameEn: "Dr. Samia Ibrahim", time: "10:00 AM", status: "present", statusEn: "Present" }
    ]},
    { id: 16, name: "جراحة أوعية دموية", nameEn: "Vascular Surgery", icon: "🩸", category: "الجراحة", categoryEn: "Surgery", doctors: [
        { name: "د/ مينا مدحت", nameEn: "Dr. Mina Medhat", time: "7:00 PM", status: "present", statusEn: "Present" }
    ]},
    { id: 17, name: "المسالك البولية", nameEn: "Urology", icon: "🫘", category: "المسالك البولية", categoryEn: "Urology", doctors: [
        { name: "د/ مينا ناجح", nameEn: "Dr. Mina Nagah", time: "4:00 PM", status: "present", statusEn: "Present" }
    ]},
    { id: 18, name: "رمد", nameEn: "Ophthalmology", icon: "️", category: "العيون", categoryEn: "Ophthalmology", doctors: [
        { name: "د/ ريمون عاطف", nameEn: "Dr. Raymond Atef", time: "2:30 PM", status: "present", statusEn: "Present" },
        { name: "د/ جون أسامة", nameEn: "Dr. John Osama", time: "6:00 PM", status: "present", statusEn: "Present" }
    ]},
    { id: 19, name: "تخاطب وتنمية مهارات وتعديل سلوك", nameEn: "Speech Therapy & Development", icon: "🧩", category: "التنمية", categoryEn: "Development", doctors: [
        { name: "ا/ كرستين صموئيل", nameEn: "Ms. Christine Samuel", time: "3:00 PM", status: "present", statusEn: "Present" }
    ]}
];

const medicalDepartments = [
    { id: 1, name: "القلب والأوعية الدموية", nameEn: "Cardiology & Vascular", icon: "❤️", description: "رعاية وتشخيص أمراض القلب والقسطرة العلاجية بأحدث الأجهزة", descriptionEn: "Care and diagnosis of heart diseases and therapeutic catheterization with latest equipment", category: "القلب" },
    { id: 2, name: "العظام والمفاصل", nameEn: "Orthopedics & Joints", icon: "🦴", description: "تشخيص وعلاج مشاكل العظام والمفاصل والإصابات الرياضية", descriptionEn: "Diagnosis and treatment of bone and joint problems and sports injuries", category: "العظام" },
    { id: 3, name: "الأطفال وحديثي الولادة", nameEn: "Pediatrics & Neonatology", icon: "👶", description: "رعاية شاملة لصحة طفلك من الولادة حتى المراهقة", descriptionEn: "Comprehensive care for your child's health from birth to adolescence", category: "الأطفال" },
    { id: 4, name: "النساء والتوليد", nameEn: "Obstetrics & Gynecology", icon: "🤰", description: "متابعة الحمل والولادة الآمنة وعلاج مشاكل العقم", descriptionEn: "Pregnancy follow-up, safe delivery and infertility treatment", category: "النساء" },
    { id: 5, name: "الباطنة العامة", nameEn: "General Internal Medicine", icon: "🩺", description: "تشخيص وعلاج الأمراض الباطنية المزمنة والحادة", descriptionEn: "Diagnosis and treatment of chronic and acute internal diseases", category: "الباطنة" },
    { id: 6, name: "الأسنان والفم", nameEn: "Dentistry & Oral Health", icon: "🦷", description: "علاج الأسنان والتجميل وزراعة الأسنان بأحدث التقنيات", descriptionEn: "Dental treatment, cosmetics and implants with latest techniques", category: "الأسنان" },
    { id: 7, name: "المخ والأعصاب", nameEn: "Neurology & Neurosurgery", icon: "🧠", description: "تشخيص وعلاج أمراض المخ والأعصاب والعمود الفقري", descriptionEn: "Diagnosis and treatment of brain, nerve and spine diseases", category: "المخ والأعصاب" },
    { id: 8, name: "العيون", nameEn: "Ophthalmology", icon: "👁️", description: "فحص النظر وعلاج أمراض العيون والعمليات الجراحية", descriptionEn: "Vision examination, eye diseases treatment and surgical operations", category: "العيون" },
    { id: 9, name: "الجراحة العامة", nameEn: "General Surgery", icon: "🔪", description: "إجراء العمليات الجراحية العامة والمنظار", descriptionEn: "Performing general and laparoscopic surgeries", category: "الجراحة" },
    { id: 10, name: "الأشعة والتحاليل", nameEn: "Radiology & Laboratory", icon: "🩻", description: "أشعة مقطعية ورنين مغناطيسي وتحاليل طبية شاملة", descriptionEn: "CT scan, MRI and comprehensive medical laboratory", category: "الأشعة" }
];

const healthTips = [
    {
        id: 1,
        icon: "❤️",
        category: "صحة القلب",
        categoryEn: "Heart Health",
        title: "كيف تحافظ على ضغط دم صحيpp؟",
        titleEn: "How to Maintain Healthy Blood Pressure?",
        excerpt: "تقليل الملح، ممارسة الرياضة بانتظام، وتناول الخضروات والفواكه الطازجة يومياً يساعد في الحفاظ على ضغط دم طبيعي.",
        excerptEn: "Reducing salt, regular exercise, and eating fresh vegetables and fruits daily helps maintain normal blood pressure.",
        fullText: "للحفاظ على ضغط دم صحي: قلل من تناول الملح (أقل من 5 جرام يومياً)، مارس الرياضة 30 دقيقة يومياً، تناول الخضروات والفواكه، تجنب التدخين، وحافظ على وزن صحي.",
        fullTextEn: "To maintain healthy blood pressure: Reduce salt intake (less than 5g daily), exercise 30 minutes daily, eat vegetables and fruits, avoid smoking, and maintain a healthy weight."
    },
    {
        id: 2,
        icon: "👶",
        category: "صحة الأطفال",
        categoryEn: "Children's Health",
        title: "متى يجب زيارة طبيب الأطفالpp؟",
        titleEn: "When Should You Visit a Pediatrician?",
        excerpt: "الزيارات الدورية مهمة لمتابعة نمو الطفل. يجب زيارة الطبيب عند ارتفاع الحرارة أو أي أعراض غير طبيعية.",
        excerptEn: "Regular visits are important to follow up child growth. Visit the doctor when fever occurs or any abnormal symptoms.",
        fullText: "يجب زيارة طبيب الأطفال بشكل دوري كل 3-6 أشهر في السنة الأولى، ثم سنوياً. زر الطبيب فوراً عند: ارتفاع الحرارة، صعوبة التنفس، رفض الطعام، أو أي تغيير مفاجئ في سلوك الطفل.",
        fullTextEn: "Visit pediatrician regularly every 3-6 months in the first year, then annually. Visit immediately when: fever, difficulty breathing, refusing food, or any sudden change in child's behavior."
    },
    {
        id: 3,
        icon: "",
        category: "طوارئ",
        categoryEn: "Emergency",
        title: "أعراض تستدعي الذهاب للطوارئpp؟",
        titleEn: "Symptoms That Require Going to Emergency?",
        excerpt: "ألم الصدر الشديد، صعوبة التنفس، النزيف الحاد، وفقدان الوعي من الأعراض التي تستدعي التوجه فوراً للطوارئ.",
        excerptEn: "Severe chest pain, difficulty breathing, severe bleeding, and loss of consciousness are symptoms that require immediate emergency care.",
        fullText: "توجه فوراً للطوارئ عند: ألم شديد في الصدر، صعوبة حادة في التنفس، نزيف لا يتوقف، فقدان الوعي، حروق شديدة، كسور مفتوحة، أو أي إصابة خطيرة في الرأس.",
        fullTextEn: "Go immediately to emergency when: severe chest pain, acute difficulty breathing, uncontrolled bleeding, loss of consciousness, severe burns, open fractures, or any serious head injury."
    },
    {
        id: 4,
        icon: "🩺",
        category: "فحوصات",
        categoryEn: "Check-ups",
        title: "أهمية الفحوصات الدوريةpp؟",
        titleEn: "Importance of Regular Check-ups?",
        excerpt: "الفحوصات الدورية تساعد في الكشف المبكر عن الأمراض وزيادة فرص العلاج الناجح بنسبة تصل إلى 90%.",
        excerptEn: "Regular check-ups help in early detection of diseases and increase successful treatment chances by up to 90%.",
        fullText: "الفحوصات الدورية مهمة جداً للكشف المبكر عن: السكري، ارتفاع ضغط الدم، أمراض القلب، والسرطان. يُنصح بإجراء فحص شامل سنوياً خاصة بعد سن الـ 40.",
        fullTextEn: "Regular check-ups are very important for early detection of: diabetes, high blood pressure, heart disease, and cancer. Annual comprehensive check-up is recommended especially after age 40."
    },
    {
        id: 5,
        icon: "🦷",
        category: "صحة الأسنان",
        categoryEn: "Dental Health",
        title: "نصائح للحفاظ على أسنان صحيةpp؟",
        titleEn: "Tips for Maintaining Healthy Teeth?",
        excerpt: "اغسل أسنانك مرتين يومياً، استخدم الخيط الطبي، وتجنب السكريات للحفاظ على أسنان قوية وصحية.",
        excerptEn: "Brush your teeth twice daily, use dental floss, and avoid sugars to maintain strong and healthy teeth.",
        fullText: "للحفاظ على أسنان صحية: اغسل أسنانك مرتين يومياً بمعجون يحتوي على الفلورايد، استخدم خيط الأسنان يومياً، قلل من السكريات، وزر طبيب الأسنان كل 6 أشهر.",
        fullTextEn: "For healthy teeth: Brush twice daily with fluoride toothpaste, use dental floss daily, reduce sugars, and visit dentist every 6 months."
    },
    {
        id: 6,
        icon: "🧠",
        category: "الصحة النفسية",
        categoryEn: "Mental Health",
        title: "كيف تحافظ على صحتك النفسيةpp؟",
        titleEn: "How to Maintain Your Mental Health?",
        excerpt: "النوم الكافي، ممارسة الرياضة، والتواصل الاجتماعي الجيد أساسيات للحفاظ على صحة نفسية متوازنة.",
        excerptEn: "Adequate sleep, exercise, and good social communication are basics for maintaining balanced mental health.",
        fullText: "للحفاظ على صحتك النفسية: نم 7-8 ساعات يومياً، مارس الرياضة بانتظام، حافظ على علاقات اجتماعية إيجابية، تعلم تقنيات الاسترخاء، ولا تتردد في طلب المساعدة المتخصصة عند الحاجة.",
        fullTextEn: "For mental health: Sleep 7-8 hours daily, exercise regularly, maintain positive social relationships, learn relaxation techniques, and don't hesitate to seek professional help when needed."
    }
];

const featuredDoctors = [
    { 
        name: "د/ أمير أنور", 
        nameEn: "Dr. Amir Anwar",
        specialty: "استشاري القلب والأوعية الدموية", 
        specialtyEn: "Cardiovascular Consultant",
        bio: "خبرة تزيد عن 15 عاماً في تشخيص وعلاج أمراض القلب والقسطرة العلاجية.", 
        bioEn: "Over 15 years of experience in diagnosing and treating heart diseases and therapeutic catheterization.",
        schedule: "🕐 السبت والاثنين: 10:00 ص - 2:00 م", 
        scheduleEn: "🕐 Saturday & Monday: 10:00 AM - 2:00 PM",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop" 
    },
    { 
        name: "د/ فادي فضل", 
        nameEn: "Dr. Fady Fadel",
        specialty: "استشاري الجهاز الهضمي والكبد", 
        specialtyEn: "Gastroenterology and Hepatology Consultant",
        bio: "متخصص في مناظير الجهاز الهضمي وعلاج أمراض الكبد المزمنة بأحدث التقنيات.", 
        bioEn: "Specialist in gastrointestinal endoscopy and treatment of chronic liver diseases with latest techniques.",
        schedule: "🕐 الأحد والثلاثاء: 3:00 م - 7:00 م", 
        scheduleEn: " Sunday & Tuesday: 3:00 PM - 7:00 PM",
        image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop" 
    },
    { 
        name: "د/ مرقس صفوت", 
        nameEn: "Dr. Marcos Safwat",
        specialty: "استشاري النساء والتوليد", 
        specialtyEn: "Obstetrics and Gynecology Consultant",
        bio: "متابعة الحمل والولادة الآمنة، وعلاج مشاكل العقم وتأخر الإنجاب برعاية فائقة.", 
        bioEn: "Pregnancy follow-up and safe delivery, treating infertility and delayed conception with exceptional care.",
        schedule: "🕐 يومياً: 6:00 م - 9:00 م", 
        scheduleEn: "🕐 Daily: 6:00 PM - 9:00 PM",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop" 
    },
    { 
        name: "د/ جيهان عدلي", 
        nameEn: "Dr. Gehan Adly",
        specialty: "استشاري طب الأطفال وحديثي الولادة", 
        specialtyEn: "Pediatrics and Neonatology Consultant",
        bio: "رعاية شاملة لصحة طفلك، من المتابعة الدورية للتطعيمات وعلاج أمراض الأطفال.", 
        bioEn: "Comprehensive care for your child's health, from regular vaccination follow-ups to treating childhood diseases.",
        schedule: "🕐 السبت والأربعاء: 10:00 ص - 2:00 م", 
        scheduleEn: " Saturday & Wednesday: 10:00 AM - 2:00 PM",
        image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop" 
    }
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
    const message = `السلام عليكم 🙏\nأريد الاستفسار وحجز موعد مع:\n‍⚕️ ${doctorName}\n🏥 قسم: ${departmentName}\n\nمستشفى مارمينا - طاحونة البابا كيرلس`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
}

function renderDepartmentsCards() {
    const container = document.getElementById('departments-grid');
    if (!container) return;
    let htmlContent = "";
    const isEn = currentLang === 'en';
    medicalDepartments.forEach((dept, index) => {
        htmlContent += `
            <div class="department-card" onclick="showDepartmentSchedule('${dept.category}')" style="animation: fadeInUp 0.6s ease ${index * 0.1}s both;">
                <span class="department-icon">${dept.icon}</span>
                <h3 class="department-name" data-en="${dept.nameEn}">${dept.name}</h3>
                <p class="department-description" data-en="${dept.descriptionEn}">${dept.description}</p>
                <div class="department-link">
                    <span>📅</span>
                    <span data-en="View Schedule">عرض المواعيد</span>
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

function renderHealthTips() {
    const container = document.getElementById('health-tips-grid');
    if (!container) return;
    let htmlContent = "";
    healthTips.forEach((tip, index) => {
        htmlContent += `
            <div class="health-tip-card" onclick="showHealthTipDetail(${tip.id})" style="animation: fadeInUp 0.6s ease ${index * 0.1}s both;">
                <span class="health-tip-icon">${tip.icon}</span>
                <span class="health-tip-category" data-en="${tip.categoryEn}">${tip.category}</span>
                <h3 class="health-tip-title" data-en="${tip.titleEn}">${tip.title}</h3>
                <p class="health-tip-excerpt" data-en="${tip.excerptEn}">${tip.excerpt}</p>
                <div class="health-tip-read-more">
                    <span data-en="Read More">اقرأ المزيد</span>
                    <span>←</span>
                </div>
            </div>
        `;
    });
    container.innerHTML = htmlContent;
}

function showHealthTipDetail(tipId) {
    const tip = healthTips.find(t => t.id === tipId);
    if (tip) {
        const title = currentLang === 'en' ? tip.titleEn : tip.title;
        const text = currentLang === 'en' ? tip.fullTextEn : tip.fullText;
        alert(`${title}\n\n${text}`);
    }
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
                    <div class="doctor-profile-name" data-en="${doc.nameEn}">${doc.name}</div>
                    <div class="doctor-profile-specialty" data-en="${doc.specialtyEn}">${doc.specialty}</div>
                    <div class="doctor-profile-bio" data-en="${doc.bioEn}">${doc.bio}</div>
                    <div class="doctor-profile-schedule" data-en="${doc.scheduleEn}">${doc.schedule}</div>
                    <button class="btn-view-profile" onclick="alert('قريباً: صفحة التفاصيل الكاملة للدكتور ${doc.name}')" data-en="View Profile">
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
        const categoryEn = categoryDepts[0].categoryEn || category;
        htmlContent += `
            <div class="category-card" onclick="showDoctorsByCategory('${category}')" style="animation-delay: ${index * 0.05}s">
                <span class="category-icon">${icon}</span>
                <div class="category-name" data-en="${categoryEn}">${category}</div>
                <div class="category-count" data-en="${totalDoctors} Doctors">${totalDoctors} طبيب</div>
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
    
    const categoryData = departments.find(d => d.category === category);
    const categoryName = currentLang === 'en' && categoryData ? categoryData.categoryEn : category;
    currentCategoryTitle.textContent = `🏥 ${categoryName}`;

    const filteredDepts = departments.filter(dept => dept.category === category);
    let htmlContent = "";

    filteredDepts.forEach(dep => {
        dep.doctors.forEach(doc => {
            const statusClass = doc.status === 'present' ? 'status-present' : 'status-absent';
            const statusText = currentLang === 'en' ? (doc.statusEn || doc.status) : (doc.status === 'present' ? 'موجود' : 'معتذر');
            const canBook = doc.status === 'present';
            const doctorName = currentLang === 'en' ? (doc.nameEn || doc.name) : doc.name;
            const deptName = currentLang === 'en' ? (dep.nameEn || dep.name) : dep.name;
            
            htmlContent += `
                <div class="doctor-card">
                    <div class="doc-header">
                        <span class="doc-icon">${dep.icon}</span>
                        <span class="dept-name" data-en="${dep.nameEn}">${dep.name}</span>
                    </div>
                    <div class="doc-body">
                        <div class="doc-name" data-en="${doc.nameEn}">${doc.name}</div>
                        ${doc.specialty ? `<div class="doc-specialty" data-en="${doc.specialtyEn || ''}">${doc.specialty}</div>` : ''}
                        <div class="doc-time">
                            <span class="time-icon">🕐</span>
                            <span class="time-text">${doc.time}</span>
                        </div>
                        <div class="doc-status ${statusClass}" data-en="${doc.statusEn}">${statusText}</div>
                        ${canBook ? `
                            <button class="btn-whatsapp-large" onclick="bookViaWhatsApp('${doctorName}', '${deptName}')">
                                <span>💬</span>
                                <span data-en="Book Now">احجز موعد الآن</span>
                            </button>
                        ` : ''}
                    </div>
                    ${dep.note ? `<div class="doc-note" data-en="${dep.noteEn || ''}">📝 ${dep.note}</div>` : ''}
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
        const typeText = currentLang === 'en' ? (review.type === 'positive' ? 'Positive' : 'Negative') : (review.type === 'positive' ? 'إيجابي' : 'سلبي');
        htmlContent += `
            <div class="review-card ${review.type}" style="animation-delay: ${index * 0.1}s">
                <span class="review-type-badge ${review.type}" data-en="${typeText}">
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

// ===== Language Switcher =====
let currentLang = 'ar';

function toggleLanguage() {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    const langBtn = document.getElementById('langToggle');
    const html = document.documentElement;
    const body = document.body;
    
    if (currentLang === 'en') {
        langBtn.textContent = 'عربي';
        html.setAttribute('dir', 'ltr');
        html.setAttribute('lang', 'en');
        body.classList.add('en');
        body.classList.remove('ar');
    } else {
        langBtn.textContent = 'English';
        html.setAttribute('dir', 'rtl');
        html.setAttribute('lang', 'ar');
        body.classList.remove('en');
        body.classList.add('ar');
    }
    
    // Translate all elements with data-en attribute
    document.querySelectorAll('[data-en]').forEach(el => {
        if (currentLang === 'en' && el.dataset.en) {
            el.textContent = el.dataset.en;
        } else if (currentLang === 'ar') {
            if (!el.dataset.ar) {
                el.dataset.ar = el.textContent;
            }
            el.textContent = el.dataset.ar;
        }
    });
    
    // Translate placeholders
    document.querySelectorAll('[data-en-placeholder]').forEach(el => {
        if (currentLang === 'en' && el.dataset.enPlaceholder) {
            el.placeholder = el.dataset.enPlaceholder;
        } else if (currentLang === 'ar' && el.dataset.arPlaceholder) {
            el.placeholder = el.dataset.arPlaceholder;
        }
    });
    
    localStorage.setItem('marmina_lang', currentLang);
}

// Initialize language
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('marmina_lang') || 'ar';
    if (savedLang === 'en') {
        toggleLanguage();
    }
    
    const langBtn = document.getElementById('langToggle');
    if (langBtn) {
        langBtn.addEventListener('click', toggleLanguage);
    }
    
    displayCurrentDate();
    renderFeaturedDoctors();
    renderDepartmentsCards();
    renderHealthTips();
    setupReviewFilters();
    setupFAQ();
    setupMobileMenu();
    setupStarRating();
    setupScrollToTop();
    setupNavigation();
    console.log("✅ مستشفى مارمينا - طاحونة البابا كيرلس - جاهز!");
});
