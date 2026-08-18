// بيانات النصائح الطبية مع الترجمة
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
        icon: "",
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
        icon: "🚨",
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
        icon: "",
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

// بيانات الدكاترة مع الترجمة
const featuredDoctors = [
    { 
        name: "د/ أمير أنور", 
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
        specialty: "استشاري الجهاز الهضمي والكبد", 
        specialtyEn: "Gastroenterology and Hepatology Consultant",
        bio: "متخصص في مناظير الجهاز الهضمي وعلاج أمراض الكبد المزمنة بأحدث التقنيات.", 
        bioEn: "Specialist in gastrointestinal endoscopy and treatment of chronic liver diseases with latest techniques.",
        schedule: "🕐 الأحد والثلاثاء: 3:00 م - 7:00 م", 
        scheduleEn: "🕐 Sunday & Tuesday: 3:00 PM - 7:00 PM",
        image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop" 
    },
    { 
        name: "د/ مرقس صفوت", 
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
        specialty: "استشاري طب الأطفال وحديثي الولادة", 
        specialtyEn: "Pediatrics and Neonatology Consultant",
        bio: "رعاية شاملة لصحة طفلك، من المتابعة الدورية للتطعيمات وعلاج أمراض الأطفال.", 
        bioEn: "Comprehensive care for your child's health, from regular vaccination follow-ups to treating childhood diseases.",
        schedule: "🕐 السبت والأربعاء: 10:00 ص - 2:00 م", 
        scheduleEn: "🕐 Saturday & Wednesday: 10:00 AM - 2:00 PM",
        image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop" 
    }
];

// بيانات التخصصات مع الترجمة
const medicalDepartments = [
    { id: 1, name: "القلب والأوعية الدموية", nameEn: "Cardiology & Vascular", icon: "❤️", description: "رعاية وتشخيص أمراض القلب والقسطرة العلاجية بأحدث الأجهزة", descriptionEn: "Care and diagnosis of heart diseases and therapeutic catheterization with latest equipment", category: "القلب" },
    { id: 2, name: "العظام والمفاصل", nameEn: "Orthopedics & Joints", icon: "🦴", description: "تشخيص وعلاج مشاكل العظام والمفاصل والإصابات الرياضية", descriptionEn: "Diagnosis and treatment of bone and joint problems and sports injuries", category: "العظام" },
    { id: 3, name: "الأطفال وحديثي الولادة", nameEn: "Pediatrics & Neonatology", icon: "👶", description: "رعاية شاملة لصحة طفلك من الولادة حتى المراهقة", descriptionEn: "Comprehensive care for your child's health from birth to adolescence", category: "الأطفال" },
    { id: 4, name: "النساء والتوليد", nameEn: "Obstetrics & Gynecology", icon: "", description: "متابعة الحمل والولادة الآمنة وعلاج مشاكل العقم", descriptionEn: "Pregnancy follow-up, safe delivery and infertility treatment", category: "النساء" },
    { id: 5, name: "الباطنة العامة", nameEn: "General Internal Medicine", icon: "🩺", description: "تشخيص وعلاج الأمراض الباطنية المزمنة والحادة", descriptionEn: "Diagnosis and treatment of chronic and acute internal diseases", category: "الباطنة" },
    { id: 6, name: "الأسنان والفم", nameEn: "Dentistry & Oral Health", icon: "🦷", description: "علاج الأسنان والتجميل وزراعة الأسنان بأحدث التقنيات", descriptionEn: "Dental treatment, cosmetics and implants with latest techniques", category: "الأسنان" },
    { id: 7, name: "المخ والأعصاب", nameEn: "Neurology & Neurosurgery", icon: "🧠", description: "تشخيص وعلاج أمراض المخ والأعصاب والعمود الفقري", descriptionEn: "Diagnosis and treatment of brain, nerve and spine diseases", category: "المخ والأعصاب" },
    { id: 8, name: "العيون", nameEn: "Ophthalmology", icon: "👁️", description: "فحص النظر وعلاج أمراض العيون والعمليات الجراحية", descriptionEn: "Vision examination, eye diseases treatment and surgical operations", category: "العيون" },
    { id: 9, name: "الجراحة العامة", nameEn: "General Surgery", icon: "🔪", description: "إجراء العمليات الجراحية العامة والمنظار", descriptionEn: "Performing general and laparoscopic surgeries", category: "الجراحة" },
    { id: 10, name: "الأشعة والتحاليل", nameEn: "Radiology & Laboratory", icon: "🩻", description: "أشعة مقطعية ورنين مغناطيسي وتحاليل طبية شاملة", descriptionEn: "CT scan, MRI and comprehensive medical laboratory", category: "الأشعة" }
];
