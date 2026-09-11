/**
 * data.js
 * -----------------------------------------------------------------------
 * Single source of truth for ALL bilingual content in the presentation.
 * Every string that appears on screen lives here as { ar, en }.
 *
 * To add new content later (new section, new equipment, new test):
 *   1. Add an entry to the relevant array below, following the existing
 *      shape exactly.
 *   2. Add any new image to /assets/images/... and reference it in
 *      the `images` map at the bottom of this file.
 *   3. Nothing in app.js, i18n.js, index.html or style.css needs to change.
 * -----------------------------------------------------------------------
 */

/* ============================== IMAGES ============================== */
/* Centralized image configuration. Replace any path below with a real
   photograph later — filenames and structure may stay identical. */
const images = {
  hero: "assets/images/hero/refinery.png",

  sections: {
    gas: "assets/images/sections/gas.jpg",
    water: "assets/images/sections/Water.png",
    hydrocarbon: "assets/images/sections/hydrocarbon.png",
    crude: "assets/images/sections/crude.png",
    physical: "assets/images/sections/physical.png",
    chemical: "assets/images/sections/chemical.png",
    chemicalPrepration: "assets/images/sections/chemicalPrepration.png",
    Octain: "assets/images/sections/Mon.jpeg",
  },

  storage: {
    gasStore: "assets/images/equipment/Storage/gasStore.jpeg",
    MainStore: "assets/images/equipment/Storage/MainStore.png",
    chemicalStore: "assets/images/equipment/Storage/chemicalStore.png",
    DrumStore: "assets/images/equipment/Storage/DrumStore.png",
  },

  safety: {
    ppe: "assets/images/safety/PPE.png",
    chemicalGasHandling: "assets/images/safety/Hand.png",
    sampleHandling: "assets/images/safety/emerg.png",
  },

  equipment: {
    gc: "assets/images/equipment/gc.jpg",
    Flash_asphult: "assets/images/equipment/Flash_asphult.jpg",
    corrosion: "assets/images/equipment/corrosion.svg",
    octane: "assets/images/equipment/octane.svg",
    crude_test: "assets/images/equipment/crude_test.svg",
    asphalt_test: "assets/images/equipment/asphalt_test.svg",

    BMPA: "assets/images/equipment/BMPA.jpg",
    Salt: "assets/images/equipment/Salt.jpg",
    Visc: "assets/images/equipment/Visc.jpeg",
    BSW: "assets/images/equipment/BSW.jpeg",
    Dict: "assets/images/equipment/Dict.jpeg",
    Mon: "assets/images/equipment/Mon.jpeg",
    Pintration: "assets/images/equipment/Pintration.jpeg",
    Ron: "assets/images/equipment/Ron.jpeg",
    RVP: "assets/images/equipment/RVP.jpeg",
    SG: "assets/images/equipment/SG.jpeg",

    ColorASTM: "assets/images/equipment/ColorASTM.jpg",
    ColorSA: "assets/images/equipment/ColorSA.jpg",
    CorrisonBath: "assets/images/equipment/Corrison Bath.jpg",
    Density: "assets/images/equipment/Density.jpg",
    opitdist: "assets/images/equipment/opitdist.jpg",
    distM: "assets/images/equipment/distM.jpg",
    FlashPoint: "assets/images/equipment/FlashPoint.jpg",
    FlashPointK: "assets/images/equipment/FlashPointK.jpg",
    GasoColor: "assets/images/equipment/GasoColor.jpg",
    Visc40: "assets/images/equipment/Visc40.jpg",
    Sul_xry: "assets/images/equipment/Sul_xry.jpg",
    Ash_asp: "assets/images/equipment/Ash_asp.jpg",
    Souli_asp: "assets/images/equipment/Souli_asp.jpg",

    c7: "assets/images/equipment/phyi/c7.jpg",
    PourPoint: "assets/images/equipment/phyi/PourPoint.jpg",
    Smok: "assets/images/equipment/phyi/Smok.jpg",
    wism: "assets/images/equipment/phyi/wism.jpg",
    freezing: "assets/images/equipment/phyi/freezing.jpg",
    indectionP: "assets/images/equipment/phyi/indectionP.jpg",
    Partc_desel: "assets/images/equipment/phyi/Partc_desel.jpg",
    Partic_jet: "assets/images/equipment/phyi/Partic_jet.jpg",
    corrison_JET: "assets/images/equipment/phyi/corrison_JET.jpg",
    condv: "assets/images/equipment/phyi/condv.jpg",
    ccr: "assets/images/equipment/phyi/ccr.jpg",
    Acidnu: "assets/images/equipment/phyi/Acidnu.jpg",
    Biqn: "assets/images/equipment/phyi/Biqn.jpg",
    Jeftot: "assets/images/equipment/phyi/Jeftot.jpg",
    LOI: "assets/images/equipment/phyi/LOI.jpg",
    ChlorideCat: "assets/images/equipment/phyi/ChlorideCat.jpg",

    ChlorideByXray: "assets/images/equipment/Chim/ChlorideByXray.jpg",
    doctor: "assets/images/equipment/Chim/doctor.png",
    ChloridebyUV: "assets/images/equipment/Chim/ChloridebyUV.jpg",
    HPLC_DE: "assets/images/equipment/Chim/HPLC_DE.jpg",
    HPNA: "assets/images/equipment/Chim/HPNA.jpg",
    KarlF: "assets/images/equipment/Chim/KarlF.jpg",
    Mercapin: "assets/images/equipment/Chim/Mercapin.jpg",
    SimiDist: "assets/images/equipment/Chim/SimiDist.jpg",
    Sul_Low: "assets/images/equipment/Chim/Sul_Low.jpg",

    EDTA: "assets/images/equipment/Water/EDTA.jpg",
    cod: "assets/images/equipment/Water/cod.jpg",
    baume: "assets/images/equipment/Water/baume.png",
    TOC: "assets/images/equipment/Water/TOC.png",
    HSS: "assets/images/equipment/Water/HSS.png",
    Choride_Low: "assets/images/equipment/Water/Choride_Low.jpg",
    PH: "assets/images/equipment/Water/PH.jpg",
    BOD: "assets/images/equipment/Water/BOD.jpg",
    Condv: "assets/images/equipment/Water/Condv.jpg",
    HSO44: "assets/images/equipment/Water/HSO44.jpg",
    Kldaj: "assets/images/equipment/Water/Kldaj.jpg",
    Chloride_hight: "assets/images/equipment/Water/Chloride_hight.jpg",
    Turb: "assets/images/equipment/Water/Turb.jpg",
    Oil: "assets/images/equipment/Water/Oil.jpg",
    Hach: "assets/images/equipment/Water/Hach.jpg",

    Cetain: "assets/images/equipment/Hydro/Cetain.jpg",
    Cloud: "assets/images/equipment/Hydro/Cloud.jpg",
    Lubracity: "assets/images/equipment/Hydro/Lubracity.jpg",
    app: "assets/images/equipment/Hydro/app.png",
  },
};

/* ============================ INTERFACE ============================= */
/* Static UI strings: navigation, buttons, labels, section headers. */
const ui = {
  brand: { ar: "مختبر مصفاة الرياض", en: "Riyadh Refinery Laboratory" },
  brandShort: { ar: "المختبر", en: "P-Lab" },

  nav: {
    home: { ar: "الرئيسية", en: "Home" },
    about: { ar: "عن المختبر", en: "About" },
    safety: { ar: "السلامة", en: "Safety" },
    sections: { ar: "الأقسام", en: "Sections" },
    labStorage: { ar: "مخزن المختبر", en: "Laboratory Storage" },
  },

  langSwitch: { ar: "AR", en: "EN" },

  hero: {
    title: { ar: "مختبر مصفاة الرياض البترولي", en: "Riyadh Refinery Laboratory" },
    subtitle: {
      ar: "منشأة متخصصة في التحاليل والفحوصات المخبرية للعينات البترولية والغازية والمائية، بأعلى معايير الدقة والسلامة والمطابقة.",
      en: "A specialized facility for laboratory analysis and testing of petroleum, gas, and water samples — engineered for precision, safety, and full specification compliance.",
    },
    cta: { ar: "ابدأ", en: "START" },
    scroll: { ar: "استكشف", en: "Explore" },
  },

  about: {
    eyebrow: { ar: "عن المختبر", en: "About the Laboratory" },
    title: { ar: "عن المختبر", en: "About the Laboratory" },
    body: {
      ar: "المختبر البترولي هو أحد المرافق المتخصصة في إجراء الفحوصات والتحاليل المخبرية للعينات البترولية والغازية والمائية، بهدف تحديد خصائصها ومكوناتها والتأكد من مطابقتها للمواصفات والمعايير المعتمدة.",
      en: "The Petroleum Laboratory is a specialized facility responsible for conducting laboratory analyses and tests on petroleum, gas, and water samples to determine their properties and composition and verify their compliance with approved specifications and standards.",
    },
    pillars: [
      /* `value` on each pillar controls exactly what's displayed — no
         other file needs editing to change these numbers.
         - A plain number (e.g. 13) shows as a big animated counter,
           same as always (Beneficiaries / Final Products).
         - A bilingual string ending in a number (e.g. { ar: "أكثر من
           78", en: "More than 78" }) is shown as a small label above
           a large animated, comma-formatted counter (Equipment Count /
           Tests Count). Any leading words work — nothing is hardcoded
           in app.js beyond "the last number in the string animates". */
      { id: "equipment-count", title: { ar: "جهاز للفحوصات", en: "Equipment for test" }, icon: "equipment", value: { ar: "أكثر من 154", en: "More than 154" } },
      { id: "tests-count", title: { ar: "فحص في السنة", en: "Test per year" }, icon: "tests", value: { ar: "أكثر من 120,000", en: "More than 120,000" } },
      { id: "beneficiaries", title: { ar: "المستفيدين من خدمات المختبر", en: "Laboratory Service Beneficiaries" }, icon: "beneficiaries", value: 13 },
      { id: "quality", title: { ar: "الجودة", en: "Quality" }, icon: "quality" },
    ],

    /* Detail content shown in the glass info modal when a pillar card
       (Beneficiaries / Final Products / Quality) is clicked. Keyed by
       the matching pillar `id` above. Edit freely — purely data, no
       markup. `highlights` is optional (used by "quality" only). */
    pillarDetails: {
      beneficiaries: {
        title: { ar: "المستفيدون من خدمات المختبر", en: "Laboratory Service Beneficiaries" },
        body: {
          ar: "يخدم المختبر أكثر من 13 مستفيدًا من مختلف العمليات والجهات ذات العلاقة، من خلال توفير خدمات تحليلية وفنية موثوقة تدعم التشغيل وجودة المنتجات واتخاذ القرارات الفنية.",
          en: "The laboratory serves more than 13 beneficiaries across related operations and functions by providing reliable analytical and technical services that support operations, product quality, and technical decision-making.",
        },
        highlights: [
     {
  key: { ar: "مصفاة الرياض", en: "Riyadh Refinery" },
},
{
  key: { ar: "SSSP#1 - محطة التوزيع 1", en: "SSSP#1 - Distribution Plant 1" },
},
{
  key: { ar: "SSSP#3 - محطة التوزيع 2", en: "SSSP#3 - Distribution Plant 2" },
},
{
  key: { ar: "KKIA - مطار الملك خالد الدولي", en: "KKIA - King Khalid International Airport" },
},
{
  key: { ar: "KSAB - قاعدة الملك سلمان الجوية", en: "KSAB - King Salman Air Base" },
},
{
  key: { ar: "PSAB - قاعدة الأمير سلطان الجوية", en: "PSAB - Prince Sultan Air Base" },
},
{
  key: { ar: "KFAA", en: "KFAA" },
},
{
  key: { ar: "PP-09 - الشركة السعودية للطاقة", en: "PP-09 - SaudiEnergy" },
},
{
  key: { ar: "PP-10 - الشركة السعودية للطاقة", en: "PP-10 - SaudiEnergy" },
},
{
  key: { ar: "PS-06 - محطة خطوط الأنابيب 6", en: "PS-06 - Pipeline Station 6" },
},
{
  key: { ar: "PS-03 - محطة خطوط الأنابيب 3", en: "PS-03 - Pipeline Station 3" },
},
{
  key: { ar: "QSBP - محطة القصيم", en: "QSBP - Qassim Bulk Plant" },
},
{
  key: { ar: "SRPB - محطة جنوب الرياض", en: "SRPB - South Riyadh Bulk Plant" },
},
{
  key: { ar: "SULAYL - محطة السليل", en: "ALSULAYL - Sulayl Station" },
},
        ],
      },
      quality: {
        title: { ar: "الجودة", en: "Quality" },
        body: {
          ar: "نلتزم بتطبيق أنظمة ضمان الجودة ومراقبة الجودة (QA & QC) بشكل شهري للمحافظة على دقة النتائج واستمرارية مستوى الأداء، مع الالتزام بمعايير الجودة والسلامة المعتمدة.",
          en: "We maintain a strong quality assurance and quality control approach through monthly QA & QC activities to ensure reliable results, consistent performance, and compliance with established quality and safety requirements.",
        },
        highlights: [
          {
            key: { ar: "QA & QC", en: "QA & QC" },
            desc: { ar: "مراجعات وفحوصات جودة شهرية", en: "Monthly quality assurance and quality control activities" },
          },
          {
            key: { ar: "ISO", en: "ISO" },
            desc: { ar: "الالتزام بمعايير الجودة المعتمدة", en: "Commitment to recognized quality standards" },
          },
          {
            key: { ar: "OSHA", en: "OSHA" },
            desc: { ar: "الالتزام بممارسات ومتطلبات السلامة المهنية", en: "Commitment to occupational health and safety practices" },
          },
        ],
      },
    },
  },

  safetySection: {
    eyebrow: { ar: "السلامة", en: "Safety" },
    title: { ar: "السلامة في المختبر", en: "Laboratory Safety" },
    subtitle: {
      ar: "بيئة العمل في المختبر البترولي تتعامل مع مواد وغازات وأجهزة تتطلب أعلى درجات الحذر والانضباط في تطبيق إجراءات السلامة.",
      en: "Working with petroleum materials, gases, and analytical instruments demands strict discipline and rigorous adherence to safety procedure at every step.",
    },
  },

  sectionsSection: {
    eyebrow: { ar: "الأقسام", en: "Sections" },
    title: { ar: "أقسام المختبر", en: "Laboratory Sections" },
    subtitle: {
      ar: "يضم المختبر ستة أقسام رئيسية، يتخصص كل منها في نوع محدد من العينات والفحوصات المخبرية.",
      en: "The laboratory comprises six core sections, each specialized in a specific class of sample and laboratory testing.",
    },
    exploreBtn: { ar: "اضغط هنا", en: "Explore Section" },
    comingSoon: { ar: "المحتوى قيد الإضافة", en: "Content Coming Soon" },
    comingSoonBody: {
      ar: "المحتوى التقني لهذا القسم قيد الإعداد وسيُضاف قريبًا.",
      en: "Technical content for this section is being prepared and will be added soon.",
    },
    backToSections: { ar: "العودة إلى الأقسام", en: "Back to Sections" },
    equipmentTitle: { ar: "الأجهزة والفحوصات", en: "Equipment & Tests" },
  },

  /* Independent final section — NOT part of sectionsSection/navigation.
     See renderLabStorageCards()/openStorageDetail() in app.js. */
  labStorageSection: {
    eyebrow: { ar: "مخزن المختبر", en: "Laboratory Storage" },
    title: { ar: "مخزن المختبر", en: "Laboratory Storage" },
    subtitle: {
      ar: "مرافق التخزين الخاصة بالمختبر، التي تحافظ على العينات والمواد الكيميائية والغازات والمستلزمات بأمان وتنظيم.",
      en: "The laboratory's dedicated storage facilities, keeping samples, chemicals, gases, and supplies safe and organized.",
    },
  },

  detail: {
    definition: { ar: "تعريف الفحص", en: "Test Definition" },
    why: { ar: "لماذا نسوي الفحص؟", en: "Why Do We Perform This Test?" },
    purpose: { ar: "الهدف من الفحص", en: "Test Objective" },
    methodNo: { ar: "Method No", en: "Method No." },
    description: { ar: "الوصف", en: "Description" },
    close: { ar: "إغلاق", en: "Close" },
    category: { ar: "التصنيف", en: "Category" },
    bonaBreakdown: { ar: "تصنيف المكونات", en: "Component Breakdown" },
    selectDevice: { ar: "اختر الجهاز", en: "Select a Device" },
    backToDevices: { ar: "الرجوع إلى الأجهزة", en: "Back to Devices" },
    otherDevices: { ar: "أجهزة أخرى", en: "Other Devices" },
  },

  progress: {
    label: { ar: "القسم", en: "Section" },
  },

  search: {
    openLabel: { ar: "بحث", en: "Search" },
    closeLabel: { ar: "إغلاق البحث", en: "Close search" },
    placeholder: {
      ar: "ابحث عن قسم أو فحص...",
      en: "Search sections, equipment, or tests...",
    },
    hint: {
      ar: "اكتب للبحث في أقسام المختبر وأجهزته وفحوصاته",
      en: "Type to search laboratory sections, equipment, and tests",
    },
    noResults: { ar: "لا توجد نتائج مطابقة", en: "No matching results" },
    groups: {
      sections: { ar: "الأقسام", en: "Sections" },
      equipment: { ar: "الأجهزة والفحوصات", en: "Equipment & Tests" },
      safety: { ar: "السلامة", en: "Safety" },
      storage: { ar: "مخزن المختبر", en: "Laboratory Storage" },
    },
  },

  footer: {
    rights: {
      ar: "Created by shift ( K )",
      en: "Created by shift ( K )",
    },
  },
};

/* ============================== SAFETY ================================ */
const safetyCards = [
  {
    id: "ppe",
    icon: "ppe",
    image: images.safety.ppe,
    title: { ar: "معدات الوقاية الشخصية", en: "Personal Protective Equipment" },
    description: {
      ar: "ارتداء معدات الوقاية الشخصية المناسبة كالنظارات والقفازات والملابس الواقية قبل التعامل مع أي عينة أو جهاز داخل المختبر.",
      en: "Wear appropriate personal protective equipment — safety goggles, gloves, and protective clothing — before handling any sample or device inside the laboratory.",
    },
  },
  {
    id: "chemical-gas-handling",
    icon: "chemical",
    image: images.safety.chemicalGasHandling,
    title: { ar: "التعامل مع المواد الكيميائية والغازات", en: "Chemical Handling & Gas Safety" },
    description: {
      ar: "التعامل مع المذيبات والمواد الكيميائية وفق بطاقات السلامة (SDS)، والتحقق من سلامة خطوط وأسطوانات الغازات وعدم وجود تسرب قبل التشغيل.",
      en: "Handle solvents and chemicals per Safety Data Sheets (SDS), and verify gas lines and cylinders are secure and leak-free before startup.",
    },
  },
{
 id: "sample-handling",
    icon: "sample",
    image: images.safety.sampleHandling,
  title: { ar: "إجراءات الطوارئ", en: "Emergency Procedures" },
  description: {
    ar: "إيقاف العمل وتفعيل إنذار الطوارئ، والابتعاد عن مصدر الخطر والتوجه لنقطة التجمع، مع استخدام دش الطوارئ أو مغسلة العيون عند التعرض للمواد الكيميائية.",
    en: "Stop work and activate the emergency alarm, move away from the hazard and proceed to the assembly point. Use the emergency shower or eyewash in case of chemical exposure.",
  },
},
];

/* ===================== LAB STORAGE — STANDALONE INFO SECTION =====================
   Content for the standalone "Lab Storage" informational section. This is
   intentionally NOT part of `laboratorySections` — it is not one of the
   six main laboratory sections and has no equipment/tests of its own. */
/* ===================== LAB STORAGE — FULL LABORATORY SECTION =====================
   Lab Storage behaves exactly like Gas/Water/Hydrocarbon/etc: it is a full
   entry in `laboratorySections` (see bottom of this file), and each of
   its five storage areas is a normal equipment object using the SAME
   schema as every other test/equipment card (definition/why/purpose +
   image), so it renders through the exact same equip-card + modal system. */

/* ===================== LABORATORY STORAGE — INDEPENDENT FINAL SECTION =====================
   NOT one of the six main laboratory sections, NOT part of navigation.
   Rendered as its own section at the very end of the page, using the
   exact same .section-card visual design (see renderLabStorageCards in
   app.js). Clicking a card opens a single standalone detail view (image
   + name + description) in the existing equipment modal — never a
   nested list of cards. */
const labStorageAreas = [
  {
    id: "gas-store",
    image: images.storage.gasStore,
    title: { ar: "مخزن الغازات", en: "Gas Store" },
    description: {
      ar: "مستودع مخصص لتخزين أسطوانات الغازات المستخدمة في تشغيل أجهزة المختبر، وفق متطلبات السلامة الخاصة بالغازات المضغوطة.",
      en: "A store dedicated to housing the gas cylinders used to operate laboratory instruments, maintained per compressed-gas safety requirements.",
    },
  },
  {
    id: "Main-store",
    image: images.storage.MainStore,
    title: { ar: "مخزن المختبر", en: "Main Store" },
    description: {
      ar: "المخزن العام لمستلزمات وأدوات المختبر غير الكيميائية، مثل الأدوات الزجاجية وقطع الغيار والمواد الاستهلاكية.",
      en: "The general store for non-chemical laboratory tools and supplies, such as glassware, spare parts, and consumables.",
    },
  },
  {
    id: "chemical-store",
    image: images.storage.chemicalStore,
    title: { ar: "مخزن المواد الكيميائية", en: "Chemical Store" },
    description: {
      ar: "مخزن مخصص لحفظ المواد الكيميائية والمذيبات المستخدمة في الفحوصات المخبرية، مع الفصل والتخزين المناسب وفق بطاقات السلامة (SDS).",
      en: "A store dedicated to housing the chemicals and solvents used in laboratory testing, separated and stored appropriately per Safety Data Sheets (SDS).",
    },
  },
  {
    id: "Drum-store",
    image: images.storage.DrumStore,
    title: { ar: "مخزن مخزن البراميل الكيميائية", en: "Drum Store" },
    description: {
      ar: "مخزن لتخزين وتزويد المختبر بالمواد الكيميائية من البراميل",
      en: "Storage area for storing and supplying the laboratory with chemicals from drums"
    },
  },
];

const ponaComponents = [
  {
    id: "paraffins",
    title: { ar: "Paraffins", en: "Paraffins" },
    description: {
      ar: "هيدروكربونات مشبعة تحتوي على روابط أحادية بين ذرات الكربون.",
      en: "Saturated hydrocarbons containing single bonds between carbon atoms.",
    },
  },
  {
    id: "olefins",
    title: { ar: "Olefins", en: "Olefins" },
    description: {
      ar: "هيدروكربونات غير مشبعة تحتوي على رابطة مزدوجة بين ذرات الكربون.",
      en: "Unsaturated hydrocarbons containing a double bond between carbon atoms.",
    },
  },
  {
    id: "naphthenes",
    title: { ar: "Naphthenes", en: "Naphthenes" },
    description: {
      ar: "هيدروكربونات حلقية مشبعة موجودة ضمن مكونات الوقود.",
      en: "Saturated cyclic hydrocarbons present among the components of the fuel.",
    },
  },  {
    id: "aromatics",
    title: { ar: "Aromatics", en: "Aromatics" },
    description: {
      ar: "هيدروكربونات عطرية تحتوي على حلقة بنزين، وتُعد من المكونات الرئيسية التي يتم قياس نسبها في تحليل PONA.",
      en: "Aromatic hydrocarbons containing a benzene ring and representing one of the main hydrocarbon groups measured in PONA analysis.",
    },
  },
];

/* ============================ GAS SECTION ============================= */
const gasCategory = { ar: "GC – كروماتوغرافيا الغاز", en: "GC – Gas Chromatography" };

const lpgTestsCategory = { ar: "فحوصات LPG", en: "LPG Tests" };

const gasEquipment = [
  {
    id: "gc-lpg",
    image: images.equipment.gc,
    category: gasCategory,
    title: { ar: "GC For LPG", en: "GC for LPG" },
    definition: {
      ar: "جهاز GC (Gas Chromatograph) يستخدم لفصل وتحليل مكونات العينة وتحديد نسبة كل مكوّن فيها.",
      en: "A GC (Gas Chromatograph) is used to separate and analyze the components of a sample and determine the percentage of each component.",
    },
    why: {
      ar: "لأن بعض مكونات الـ LPG مثل H₂S قد تشكل خطرًا على الصحة والسلامة، وبعض المكونات قد تسبب التآكل في المعدات والأنابيب.",
      en: "Because some LPG components, such as H₂S, may pose health and safety risks, while certain components may cause corrosion in equipment and pipelines.",
    },
    purpose: {
      ar: "معرفة تركيب العينة ونسب مكوناتها والتأكد من مطابقتها للحدود والمواصفات المطلوبة.",
      en: "To determine the composition and component percentages of the sample and verify compliance with the required limits and specifications.",
    },
    methodNo: 2022,
  },
  {
    id: "gc-rga",
    image: images.equipment.gc,
    category: gasCategory,
    title: { ar: "GC For RGA", en: "GC for RGA" },
    definition: {
      ar: "جهاز GC (Gas Chromatograph) يستخدم لتحليل مكونات الغازات وتحديد نسبها. ويختلف عن فحص LPG بأن RGA يركز على تحليل مكونات الغاز الخفيفة، بينما فحص LPG يركز على مكونات الغاز البترولي المسال.",
      en: "A GC (Gas Chromatograph) is used to analyze gas components and determine their percentages. RGA differs from LPG analysis in that it focuses on light gas components, while LPG analysis focuses on liquefied petroleum gas components.",
    },
    why: {
      ar: "لتحليل مكونات الغاز التي قد تؤثر على السلامة والتشغيل، مثل H₂S، وبعض المكونات التي قد تسبب التآكل.",
      en: "To analyze gas components that may affect safety and operations, such as H₂S and certain components that may cause corrosion.",
    },
    purpose: {
      ar: "تحديد تركيب الغاز ونسب مكوناته ومعرفة المكونات الموجودة في العينة.",
      en: "To determine the gas composition, component percentages, and the components present in the sample.",
    },
    methodNo: 2022,
  },
  {
    id: "gc-benzene",
    image: images.equipment.BMPA,
    category: gasCategory,
    title: { ar: "GC For Benzene", en: "GC for Benzene" },
    definition: {
      ar: "جهاز GC يستخدم لتحليل العينة. وفحص Benzene هو قياس كمية البنزين الموجودة في العينة، وهو مركب هيدروكربوني عطري.",
      en: "A GC is used to analyze the sample. The Benzene test measures the amount of benzene present in the sample. Benzene is an aromatic hydrocarbon compound.",
    },
    why: {
      ar: "لأن البنزين مادة سامة ومضرة بالصحة عند التعرض لها، لذلك يتم قياس تركيزه ومتابعة مستواه في العينة.",
      en: "Because benzene is toxic and harmful to health upon exposure, its concentration is measured and monitored in the sample.",
    },
    purpose: {
      ar: "تحديد نسبة Benzene في العينة والتأكد من أن تركيزه ضمن الحدود والمواصفات المطلوبة.",
      en: "To determine the percentage of Benzene in the sample and verify that its concentration is within the required limits and specifications.",
    },
    methodNo: 2022,
  },
  {
    id: "gc-mtbe",
    image: images.equipment.BMPA,
    category: gasCategory,
    title: { ar: "GC For MTBE", en: "GC for MTBE" },
    definition: {
      ar: "جهاز GC يستخدم لتحليل العينة. وفحص MTBE هو قياس تركيز مادة Methyl Tert-Butyl Ether الموجودة في العينة، وهي مادة مضافة للوقود.",
      en: "A GC is used to analyze the sample. The MTBE test measures the concentration of Methyl Tert-Butyl Ether present in the sample, which is a fuel additive.",
    },
    why: {
      ar: "لمعرفة تركيز MTBE ومتابعة نسبته في العينة، لأن تغير تركيزه قد يؤثر على خصائص الوقود.",
      en: "To determine and monitor the concentration of MTBE in the sample, as changes in its concentration may affect fuel properties.",
    },
    purpose: {
      ar: "تحديد نسبة MTBE في العينة والتأكد من أن تركيزه ضمن الحدود والمواصفات المطلوبة.",
      en: "To determine the percentage of MTBE in the sample and verify that its concentration is within the required limits and specifications.",
    },
    methodNo: 2022,
  },
  {
    id: "gc-aromatics",
    image: images.equipment.BMPA,
    category: gasCategory,
    title: { ar: "GC For Aromatics", en: "GC for Aromatics" },
    definition: {
      ar: "جهاز GC يستخدم لتحليل العينة. وفحص Aromatics هو قياس نسبة المركبات الهيدروكربونية العطرية الموجودة في العينة، مثل Benzene وToluene وXylene.",
      en: "A GC is used to analyze the sample. The Aromatics test measures the percentage of aromatic hydrocarbon compounds present in the sample, such as Benzene, Toluene, and Xylene.",
    },
    why: {
      ar: "لأن معرفة نسبة Aromatics مهمة لمتابعة تركيب وخصائص الوقود، كما أن نسب بعض هذه المركبات تخضع لحدود ومواصفات للوقود.",
      en: "Because monitoring Aromatics content is important for evaluating fuel composition and properties, and certain aromatic compounds are subject to fuel specifications and limits.",
    },
    purpose: {
      ar: "تحديد نسبة Aromatics في العينة والتأكد من أن تركيزها ضمن الحدود والمواصفات المطلوبة.",
      en: "To determine the percentage of Aromatics in the sample and verify that their concentration is within the required limits and specifications.",
    },
    methodNo: 2022,
  },
  {
    id: "gc-bona",
    image: images.equipment.BMPA,
    category: gasCategory,
    title: { ar: "GC For PONA", en: "GC for PONA" },
    definition: {
      ar: "جهاز GC يستخدم لتحليل العينة. وفحص PONA المستخدم في المختبر يحدد نسب مجموعات الهيدروكربونات الرئيسية في العينة، ومنها:",
      en: "A GC is used to analyze the sample. The PONA test used in the laboratory determines the percentages of the main hydrocarbon groups in the sample, including:",
    },
    why: {
      ar: "لمعرفة توزيع مكونات العينة ومتابعة تركيبها، لأن اختلاف نسب هذه المكونات يؤثر على خصائص الوقود.",
      en: "To understand the distribution and composition of the sample, as differences in the proportions of these components affect fuel properties.",
    },
    purpose: {
      ar: "تحديد نسب Paraffins وOlefins وNaphthenes وAromatics في العينة والتأكد من مطابقتها للحدود والمواصفات المطلوبة.",
      en: "To determine the percentages of Paraffins, Olefins, Naphthenes, and Aromatics in the sample and verify compliance with the required limits and specifications.",
    },
    methodNo: 2022,
    bonaBreakdown: ponaComponents,
  },
  {
    id: "gc-sulfur-lpg",
    image: images.equipment.gc,
    category: gasCategory,
    title: { ar: "GC For Sulfur in LPG", en: "GC for Sulfur in LPG" },
    definition: {
      ar: "جهاز GC يستخدم لتحليل عينة LPG وقياس مركبات Sulfur الموجودة فيها، مثل H₂S ومركبات الكبريت الأخرى.",
      en: "A GC is used to analyze an LPG sample and measure sulfur compounds present in it, such as H₂S and other sulfur compounds.",
    },
    why: {
      ar: "لأن مركبات الكبريت قد تكون ضارة للصحة، كما أن وجودها بنسب مرتفعة قد يسبب التآكل في المعدات والأنابيب.",
      en: "Because sulfur compounds may be harmful to health, and high concentrations may cause corrosion in equipment and pipelines.",
    },
    purpose: {
      ar: "تحديد نسبة Sulfur في LPG والتأكد من أن تركيزه ضمن الحدود والمواصفات المطلوبة.",
      en: "To determine the Sulfur concentration in LPG and verify that it is within the required limits and specifications.",
    },
    methodNo: 2022,
  },
  {
    id: "corrosion-lpg",
    image: images.equipment.corrosion,
    category: lpgTestsCategory,
    title: { ar: "Corrosion For LPG", en: "LPG Corrosion Test" },
    definition: {
      ar: "فحص Corrosion يستخدم لتحديد مدى قابلية عينة LPG للتسبب في تآكل المعادن. يتم وضع العينة في Bath بدرجة حرارة 37.6°C لمدة ساعة ثم يتم تقييم تأثيرها على المعدن.",
      en: "The Corrosion test determines the tendency of an LPG sample to cause corrosion of metals. The sample is placed in a bath at 37.6°C for one hour, after which its effect on the metal is evaluated.",
    },
    why: {
      ar: "لأن بعض المكونات الموجودة في LPG قد تسبب تآكل الأنابيب والمعدات، مما قد يؤدي مع الوقت إلى ضعفها وحدوث تسرب.",
      en: "Because certain components in LPG may cause corrosion of pipelines and equipment, which can eventually lead to weakening and leakage.",
    },
    purpose: {
      ar: "التأكد من أن LPG لا يسبب تآكلًا غير مقبول للمعدات والأنابيب، وأن العينة ضمن الحدود والمواصفات المطلوبة.",
      en: "To ensure that the LPG does not cause unacceptable corrosion to equipment and pipelines and that the sample meets the required limits and specifications.",
    },
    methodNo: 2022,
  },
];

/* ================= HYDROCARBON / CRUDE / ASPHALT SECTION ================ */
const RonMonCategory = {};
const RonMonEquipment= [
  {
    id: "ron",
    image: images.equipment.Ron,
    category: RonMonCategory,
    title: { ar: "رقم الأوكتان البحثي (RON)", en: "RON – Research Octane Number" },
    definition: {
      ar: "يقيس مقاومة البنزين للطرق تحت ظروف اختبار محددة.",
      en: "Measures gasoline resistance to knocking under specified conditions.",
    },
    why: {
      ar: "لتقييم جودة الوقود وأدائه.",
      en: "To evaluate gasoline quality and performance.",
    },
    purpose: {
      ar: "لتحديد قيمة RON والتأكد من مطابقتها للمواصفات.",
      en: "To determine the RON value and verify compliance with specifications.",
    },
    methodNo: "ASTM D2699",
  },
  {
    id: "mon",
    image: images.equipment.Ron,
    category: RonMonCategory,
    title: { ar: "رقم الأوكتان الحركي (MON)", en: "MON – Motor Octane Number" },
    definition: {
      ar: "يقيس مقاومة البنزين للطرق تحت ظروف تشغيل أكثر شدة.",
      en: "Measures gasoline resistance to knocking under more severe operating conditions.",
    },
    why: {
      ar: "لتقييم أداء الوقود عند درجات حرارة وأحمال محرك أعلى.",
      en: "To evaluate fuel performance under higher temperature and engine-load conditions.",
    },
    purpose: {
      ar: "لتحديد قيمة MON والتأكد من مطابقتها للمواصفات.",
      en: "To determine the MON value and verify compliance with specifications.",
    },
    methodNo: "ASTM D2700",
  },
];
/* ================= HYDROCARBON / CRUDE / ASPHALT SECTION ================ */
const hydrocarbonCategories = {
  hydrocarbon: { ar: "فحوصات المختبر", en: "Laboratory Tests" },
  crude: { ar: "تحليل النفط الخام", en: "Crude Oil Analysis" },
  asphalt: { ar: "تحليل الأسفلت", en: "Asphalt Analysis" },
};

const hydrocarbonEquipment = [
  {
    id: "salt",
    image: images.equipment.Salt,
    category: hydrocarbonCategories.crude,
    title: { ar: "الملح", en: "Salt" },
    definition: {
      ar: "يقيس تركيز الملح، وخاصة الكلوريدات، في النفط الخام.",
      en: "Measures the salt concentration, mainly chlorides, in crude oil.",
    },
    why: {
      ar: "لمنع التآكل والترسبات ومشاكل التشغيل في المصفاة.",
      en: "To prevent corrosion, fouling, and refinery operating problems.",
    },
    purpose: {
      ar: "لتحديد تركيز الملح والتأكد من بقائه ضمن الحدود المحددة.",
      en: "To determine the salt concentration and verify it is within the specified limits.",
    },
    methodNo: "ASTM D3230",
  },
  {
    id: "bsw",
    image: images.equipment.BSW,
    category: hydrocarbonCategories.crude,
    title: { ar: "BSW – الماء والرواسب الأساسية", en: "BSW \u2013 Basic Sediment & Water" },
    definition: {
      ar: "يقيس كمية الماء والرواسب الموجودة في النفط الخام.",
      en: "Measures the amount of water and sediment in crude oil.",
    },
    why: {
      ar: "لمتابعة جودة النفط الخام ومنع مشاكل النقل والتكرير.",
      en: "To monitor crude oil quality and prevent transportation and refining problems.",
    },
    purpose: {
      ar: "لتحديد محتوى الماء والرواسب الأساسية والتأكد من مطابقته للمواصفات.",
      en: "To determine the BSW content and verify compliance.",
    },
    methodNo: "ASTM D4007",
  },
  {
    id: "density",
    image: images.equipment.SG,
    category: hydrocarbonCategories.crude,
    title: { ar: "الكثافة", en: "Density" },
    definition: {
      ar: "تقيس كتلة النفط الخام لكل وحدة حجم عند درجة حرارة محددة.",
      en: "Measures the mass of crude oil per unit volume at a specified temperature.",
    },
    why: {
      ar: "لتوصيف النفط الخام ودعم حسابات الكمية والحجم.",
      en: "To characterize crude oil and support quantity and volume calculations.",
    },
    purpose: {
      ar: "لتحديد كثافة النفط الخام بدقة.",
      en: "To determine the density accurately.",
    },
    methodNo: "ASTM D4052",
  },
  {
    id: "gravity",
    image: images.equipment.SG,
    category: hydrocarbonCategories.crude,
    title: { ar: "درجة API", en: "API Gravity" },
    definition: {
      ar: "تقيس الكثافة النوعية للنفط الخام وتعبّر عنها بدرجة API.",
      en: "Measures the specific gravity of crude oil and expresses it as API Gravity.",
    },
    why: {
      ar: "لتصنيف النفط الخام وتقييم خصائصه أثناء المعالجة.",
      en: "To classify crude oil and evaluate its processing characteristics.",
    },
    purpose: {
      ar: "لتحديد درجة API ومقارنتها بالمواصفات المطلوبة.",
      en: "To determine the API Gravity and compare it with the required specifications.",
    },
    methodNo: "ASTM D4052",
  },
  {
    id: "total-sulphur-xray",
    image: images.equipment.Sul_xry,
    category: hydrocarbonCategories.crude,
    title: { ar: "الكبريت الكلي بالأشعة السينية", en: "Total Sulphur by X-Ray" },
    definition: {
      ar: "يقيس تركيز الكبريت الكلي باستخدام تقنية الأشعة السينية.",
      en: "Measures the total sulfur concentration using X-Ray technology.",
    },
    why: {
      ar: "لمتابعة مستويات الكبريت وتأثيرها على التآكل وعمليات التكرير.",
      en: "To monitor sulfur levels and their effects on corrosion and refining.",
    },
    purpose: {
      ar: "لتحديد تركيز الكبريت الكلي والتأكد من مطابقته للمواصفات.",
      en: "To determine the Total Sulphur concentration and verify compliance.",
    },
    methodNo: "ASTM D4294",
  },
  {
    id: "rvp",
    image: images.equipment.RVP,
    category: hydrocarbonCategories.crude,
    title: { ar: "RVP – ضغط البخار Reid", en: "RVP \u2013 Reid Vapor Pressure" },
    definition: {
      ar: "يقيس ضغط البخار ويعطي مؤشرًا على تطاير العينة البترولية.",
      en: "Measures the vapor pressure and indicates the volatility of a petroleum sample.",
    },
    why: {
      ar: "لتقييم التطاير ومخاطر السلامة المحتملة.",
      en: "To evaluate volatility and potential safety concerns.",
    },
    purpose: {
      ar: "لتحديد قيمة RVP والتأكد من مطابقتها للمواصفات.",
      en: "To determine the RVP value and verify compliance.",
    },
    methodNo: "ASTM D323",
  },
  {
    id: "penetration",
    image: images.equipment.Pintration,
    category: hydrocarbonCategories.asphalt,
    title: { ar: "الاختراق", en: "Penetration" },
    definition: {
      ar: "يقيس عمق اختراق إبرة قياسية داخل الأسفلت.",
      en: "Measures the penetration depth of a standard needle into asphalt.",
    },
    why: {
      ar: "لتقييم صلابة أو ليونة الأسفلت.",
      en: "To evaluate asphalt hardness or softness.",
    },
    purpose: {
      ar: "لتحديد قيمة الاختراق وتصنيف الأسفلت.",
      en: "To determine the penetration value and asphalt classification.",
    },
    methodNo: "ASTM D5",
  },
  {
    id: "viscosity-100",
    image: images.equipment.Visc,
    category: hydrocarbonCategories.asphalt,
    title: { ar: "اللزوجة عند 100°C", en: "Viscosity at 100\u00b0C" },
    definition: {
      ar: "تقيس مقاومة الأسفلت للجريان عند درجة حرارة 100°C.",
      en: "Measures the resistance of asphalt to flow at 100\u00b0C.",
    },
    why: {
      ar: "لتقييم سلوك جريان الأسفلت أثناء التسخين والمعالجة.",
      en: "To evaluate asphalt flow during heating and processing.",
    },
    purpose: {
      ar: "لتحديد اللزوجة والتأكد من مطابقتها للمواصفات.",
      en: "To determine viscosity and verify compliance.",
    },
    methodNo: "ASTM D4402",
  },
  {
    id: "ductility",
    image: images.equipment.Dict,
    category: hydrocarbonCategories.asphalt,
    title: { ar: "المطيلية", en: "Ductility" },
    definition: {
      ar: "تقيس قدرة الأسفلت على الاستطالة قبل الانقطاع.",
      en: "Measures the ability of asphalt to elongate before breaking.",
    },
    why: {
      ar: "لتقييم مرونة الأسفلت ومقاومته للتشقق.",
      en: "To evaluate asphalt flexibility and resistance to cracking.",
    },
    purpose: {
      ar: "لتحديد قيمة المطيلية وتقييم المرونة.",
      en: "To determine the ductility value and evaluate flexibility.",
    },
    methodNo: "ASTM D113",
  },
  {
    id: "solubility",
    image: images.equipment.Souli_asp,
    category: hydrocarbonCategories.asphalt,
    title: { ar: "الذوبانية", en: "Solubility" },
    definition: {
      ar: "تقيس نسبة مكونات الأسفلت القابلة للذوبان في مذيب محدد.",
      en: "Measures the percentage of asphalt components soluble in a specified solvent.",
    },
    why: {
      ar: "لتقييم نقاء الأسفلت والكشف عن المواد غير الذائبة.",
      en: "To evaluate asphalt purity and detect insoluble materials.",
    },
    purpose: {
      ar: "لتحديد نسبة الذوبانية والتحقق من النقاء.",
      en: "To determine the solubility percentage and verify purity.",
    },
    methodNo: "ASTM D2042",
  },
  {
    id: "flash-point",
    image: images.equipment.Flash_asphult,
    category: hydrocarbonCategories.asphalt,
    title: { ar: "نقطة الوميض", en: "Flash Point" },
    definition: {
      ar: "تحدد أدنى درجة حرارة يمكن عندها أن تشتعل أبخرة الأسفلت.",
      en: "Determines the lowest temperature at which asphalt vapors can ignite.",
    },
    why: {
      ar: "لتقييم مخاطر الحريق أثناء التسخين والمناولة والتخزين.",
      en: "To assess fire hazards during heating, handling, and storage.",
    },
    purpose: {
      ar: "لتحديد نقطة الوميض والتحقق من متطلبات السلامة.",
      en: "To determine the Flash Point and verify safety requirements.",
    },
    methodNo: "ASTM D92",
  },
  {
    id: "tfot",
    image: images.equipment.asphalt_test,
    category: hydrocarbonCategories.asphalt,
    title: { ar: "TFOT – اختبار الفرن الرقيق", en: "TFOT \u2013 Thin Film Oven Test" },
    definition: {
      ar: "يحدد تأثير الحرارة والهواء على طبقة رقيقة من الأسفلت.",
      en: "Determines the effects of heat and air on a thin film of asphalt.",
    },
    why: {
      ar: "لتقييم التغيرات في خصائص الأسفلت الناتجة عن التسخين والتعرض للهواء.",
      en: "To evaluate changes in asphalt properties caused by heating and air exposure.",
    },
    purpose: {
      ar: "لتقييم التقادم قصير المدى والتغيرات في خصائص الأسفلت.",
      en: "To assess short-term aging and changes in asphalt properties.",
    },
    methodNo: "ASTM D1754/D1754M",
  },
  {
    id: "flot",
    image: images.equipment.asphalt_test,
    category: hydrocarbonCategories.asphalt,
    title: { ar: "FLOT – اختبار الطفو", en: "FLOT \u2013 Float Test" },
    definition: {
      ar: "يقيس قوام الأسفلت وخصائص جريانه عند درجة حرارة محددة.",
      en: "Measures the consistency and flow characteristics of asphalt at a specified temperature.",
    },
    why: {
      ar: "لتقييم سلوك جريان الأسفلت وقوامه.",
      en: "To evaluate asphalt flow behavior and consistency.",
    },
    purpose: {
      ar: "لتحديد قيمة اختبار الطفو والتأكد من مطابقتها للمواصفات.",
      en: "To determine the Float Test value and verify compliance with specifications.",
    },
    methodNo: "UOP 139",
  },
];
/* ===================== CHEMICAL PREPARATION SECTION ===================== */

const chemicalPreparationCategory = {
    ar: "تحضير المحاليل",
    en: "Chemical Preparation"
};

const chemicalPreparationEquipment = [];
/* ===================== HYDROCARBON SECTION (crude id) TESTS ===================== */
/* Additional tests for the standalone "Hydrocarbon Section" (laboratorySections
   entry with id "crude"). These are separate from hydrocarbonEquipment above,
   which belongs to the "Crude Oil, Asphalt & RON Section" (id "hydrocarbon"). */
const hydrocarbonSectionCategory = {
  ar: "الفحوصات العامة للهيدروكاربون",
  en: "General Hydrocarbon Tests",
};

const hydrocarbonSectionEquipment = [
  {
    id: "distillation",
    image: images.equipment.opitdist,
    category: hydrocarbonSectionCategory,
    title: { ar: "Distillation", en: "Distillation" },
    definition: {
      ar: "يُستخدم الفحص لتقييم تطاير المنتج الهيدروكربوني وخصائص الغليان الخاصة به.",
      en: "Evaluates the volatility and boiling characteristics of the hydrocarbon product.",
    },
    why: {
      ar: "لتحديد نطاق الغليان وفهم سلوك العينة أثناء التسخين.",
      en: "To determine the boiling range and understand the behavior of the sample during heating.",
    },
    purpose: {
      ar: "يتم تنفيذ الفحص باستخدام جهاز التقطير الآلي وفقًا لـ ASTM D86 لتحديد نطاق الغليان وتطاير العينة والتأكد من مطابقتها للمواصفات المطلوبة.",
      en: "Performed using the Automatic Distillation Unit in accordance with ASTM D86 to characterize the boiling range and volatility of the sample and verify compliance with product specifications.",
    },
    methodNo: { ar: "ASTM D86", en: "ASTM D86" },
  },
  {
    id: "flash-point-hydrocarbon",
    image: images.equipment.FlashPoint,
    category: hydrocarbonSectionCategory,
    title: { ar: "Flash Point", en: "Flash Point" },
    definition: {
      ar: "مهم لتقييم سلامة المنتج أثناء التخزين والمناولة والنقل.",
      en: "Important for product safety, storage, handling, and transportation.",
    },
    why: {
      ar: "لتحديد أدنى درجة حرارة تنتج عندها العينة أبخرة قادرة على تكوين خليط قابل للاشتعال مع الهواء.",
      en: "To determine the lowest temperature at which the sample produces vapors capable of forming a flammable mixture with air.",
    },
    purpose: {
      ar: "يتم القياس باستخدام جهاز Pensky-Martens للكأس المغلق وفقًا لـ ASTM D93 للتأكد من مطابقة العينة لحدود السلامة المطلوبة للتخزين والمناولة والنقل.",
      en: "Measured using the Pensky-Martens Closed Cup Tester per ASTM D93 to verify the sample meets required safety limits for storage, handling, and transportation.",
    },
    methodNo: { ar: "ASTM D93", en: "ASTM D93" },
        /* -------------------------------------------------------------------
       MULTI-DEVICE SUPPORT
       "color" has more than one physical device that performs it. Each
       entry below is a full, self-contained device profile (own image,
       name, definition, why, purpose, methodNo). When an equipment item
       has a `variants` array, the modal shows THIS main object's own
       details first, then an "Other Devices" strip below them listing
       each variant; the item ITSELF still stays a single card in the
       main equipment grid.

       To add Device #3, #4, #5, ... later: just push another object with
       the same shape into this array. No other file needs to change.
       See README.md for full step-by-step instructions (Arabic).
       ------------------------------------------------------------------- */
    variants: [
          {
    id: "flash-point-hydrocarbon",
    image: images.equipment.FlashPointK,
    category: hydrocarbonSectionCategory,
    title: { ar: "Flash Point", en: "Flash Point" },
    definition: {
      ar: "مهم لتقييم سلامة المنتج أثناء التخزين والمناولة والنقل.",
      en: "Important for product safety, storage, handling, and transportation.",
    },
    why: {
      ar: "لتحديد أدنى درجة حرارة تنتج عندها العينة أبخرة قادرة على تكوين خليط قابل للاشتعال مع الهواء.",
      en: "To determine the lowest temperature at which the sample produces vapors capable of forming a flammable mixture with air.",
    },
    purpose: {
      ar: "يتم القياس باستخدام جهاز Pensky-Martens للكأس المغلق وفقًا لـ ASTM D93 للتأكد من مطابقة العينة لحدود السلامة المطلوبة للتخزين والمناولة والنقل.",
      en: "Measured using the Pensky-Martens Closed Cup Tester per ASTM D93 to verify the sample meets required safety limits for storage, handling, and transportation.",
    },
    methodNo: { ar: "ASTM D93", en: "ASTM D93" },
      },
    ],
  },
  {
    id: "density-hydrocarbon",
    image: images.equipment.Density,
    category: hydrocarbonSectionCategory,
    title: { ar: "Density", en: "Density" },
    definition: {
      ar: "خاصية أساسية تُستخدم في توصيف الهيدروكربونات وحسابات الكميات.",
      en: "A fundamental property used for hydrocarbon characterization and quantity calculations.",
    },
    why: {
      ar: "لتحديد كتلة العينة لكل وحدة حجم ودعم حسابات الكتلة والحجم.",
      en: "To determine the mass per unit volume of the sample and support mass/volume calculations.",
    },
    purpose: {
      ar: "يتم القياس بواسطة جهاز قياس الكثافة الرقمي وفقًا لـ ASTM D4052 لدعم حسابات الكتلة والحجم بدقة وتوصيف المنتج.",
      en: "Measured with a Digital Density Meter per ASTM D4052 to support accurate mass/volume calculations and product characterization.",
    },
    methodNo: { ar: "ASTM D4052", en: "ASTM D4052" },
  },
  {
    id: "specific-gravity",
    image: images.equipment.Density,
    category: hydrocarbonSectionCategory,
    title: { ar: "Specific Gravity", en: "Specific Gravity" },
    definition: {
      ar: "يساعد في توصيف المنتج الهيدروكربوني من خلال مقارنة كثافته بكثافة الماء.",
      en: "Helps characterize the hydrocarbon product by comparing its density with water.",
    },
    why: {
      ar: "لتحديد نسبة كثافة العينة إلى كثافة الماء.",
      en: "To determine the ratio of the sample density to the density of water.",
    },
    purpose: {
      ar: "يتم تحديدها باستخدام هيدروميتر أو جهاز قياس الكثافة الرقمي وفقًا لـ ASTM D1298 / D4052 لمقارنة كثافة العينة بكثافة الماء لتصنيف المنتج.",
      en: "Determined using a Hydrometer or Digital Density Meter per ASTM D1298 / D4052 to compare sample density with water for product classification.",
    },
    methodNo: { ar: "ASTM D1298 / D4052", en: "ASTM D1298 / D4052" },
  },
  {
    id: "color",
    image: images.equipment.ColorASTM,
    category: hydrocarbonSectionCategory,
    title: { ar: "Color", en: "Color" },
    definition: {
      ar: "يعطي مؤشرًا سريعًا على جودة المنتج ونظافته.",
      en: "Provides a quick indication of product quality and cleanliness.",
    },
    why: {
      ar: "للكشف عن أي تغير غير طبيعي في اللون قد يشير إلى وجود تلوث أو تدهور أو مشاكل في جودة المنتج.",
      en: "To detect abnormal color changes that may indicate contamination, degradation, or product quality issues.",
    },
    purpose: {
      ar: "يتم التقييم باستخدام جهاز قياس اللون الآلي وفقًا لـ ASTM D1500 لإعطاء مؤشر سريع على جودة المنتج والكشف عن أي تلوث محتمل.",
      en: "Assessed using an Automatic Colorimeter per ASTM D1500 to provide a quick check on product quality and detect possible contamination.",
    },
    methodNo: { ar: "ASTM D1500", en: "ASTM D1500" },
    /* -------------------------------------------------------------------
       MULTI-DEVICE SUPPORT
       "color" has more than one physical device that performs it. Each
       entry below is a full, self-contained device profile (own image,
       name, definition, why, purpose, methodNo). When an equipment item
       has a `variants` array, the modal shows THIS main object's own
       details first, then an "Other Devices" strip below them listing
       each variant; the item ITSELF still stays a single card in the
       main equipment grid.

       To add Device #3, #4, #5, ... later: just push another object with
       the same shape into this array. No other file needs to change.
       See README.md for full step-by-step instructions (Arabic).
       ------------------------------------------------------------------- */
    variants: [
      {
        id: "color-1",
        name: { ar: "Gasoline", en: "Gasoline" },
        image: images.equipment.GasoColor,
        definition: {
          ar: "يعطي مؤشرًا سريعًا على جودة المنتج ونظافته.",
          en: "Provides a quick indication of product quality and cleanliness.",
        },
        why: {
          ar: "للكشف عن أي تغير غير طبيعي في اللون قد يشير إلى وجود تلوث أو تدهور أو مشاكل في جودة المنتج.",
          en: "To detect abnormal color changes that may indicate contamination, degradation, or product quality issues.",
        },
        purpose: {
          ar: "يتم التقييم باستخدام جهاز قياس اللون الآلي وفقًا لـ ASTM D1500 لإعطاء مؤشر سريع على جودة المنتج والكشف عن أي تلوث محتمل.",
          en: "Assessed using an Automatic Colorimeter per ASTM D1500 to provide a quick check on product quality and detect possible contamination.",
        },
        methodNo: { ar: "ASTM D1500", en: "ASTM D1500" },
      },
      {
        id: "color-2",
        name: { ar: "Saybolt", en: "Saybolt" },
        image: images.equipment.ColorSA,
        definition: {
          ar: "يعطي مؤشرًا سريعًا على جودة المنتج ونظافته، ويُستخدم غالبًا للمنتجات الفاتحة اللون.",
          en: "Provides a quick indication of product quality and cleanliness, typically used for light-colored products.",
        },
        why: {
          ar: "للكشف عن أي تغير غير طبيعي في اللون قد يشير إلى وجود تلوث أو تدهور أو مشاكل في جودة المنتج.",
          en: "To detect abnormal color changes that may indicate contamination, degradation, or product quality issues.",
        },
        purpose: {
          ar: "يتم التقييم باستخدام جهاز قياس اللون وفقًا لـ ASTM D156 (Saybolt) لإعطاء مؤشر سريع على جودة المنتج والكشف عن أي تلوث محتمل.",
          en: "Assessed using a Saybolt Colorimeter per ASTM D156 to provide a quick check on product quality and detect possible contamination.",
        },
        methodNo: { ar: "ASTM D156", en: "ASTM D156" },
      },
    ],
  },
  {
    id: "rvp-hydrocarbon",
    image: images.equipment.RVP,
    category: hydrocarbonSectionCategory,
    title: { ar: "RVP – Reid Vapor Pressure", en: "RVP – Reid Vapor Pressure" },
    definition: {
      ar: "يعطي مؤشرًا على تطاير المنتج وضغط البخار الخاص به.",
      en: "Indicates the volatility and vapor pressure of the product.",
    },
    why: {
      ar: "لتقييم تطاير المنتج وسلامة مناولته وسلوكه أثناء التخزين وخصائص التبخر، ويعتبر مهمًا بشكل خاص للبنزين والنافثا.",
      en: "To evaluate product volatility, handling safety, storage behavior, and evaporation characteristics. Particularly important for Gasoline and Naphtha.",
    },
    purpose: {
      ar: "يتم القياس باستخدام جهاز قياس ضغط البخار Reid وفقًا لـ ASTM D323 لتقييم التطاير وسلامة المناولة، وبشكل خاص للبنزين والنافثا.",
      en: "Measured with a Reid Vapor Pressure Analyzer per ASTM D323 to evaluate volatility and handling safety, particularly for Gasoline and Naphtha.",
    },
    methodNo: { ar: "ASTM D323", en: "ASTM D323" },
  },
  {
    id: "cloud-point",
    image: images.equipment.Cloud,
    category: hydrocarbonSectionCategory,
    title: { ar: "Cloud Point", en: "Cloud Point" },
    definition: {
      ar: "يقيّم أداء الوقود عند درجات الحرارة المنخفضة.",
      en: "Evaluates the low-temperature performance of the fuel.",
    },
    why: {
      ar: "لتحديد درجة الحرارة التي تبدأ عندها بلورات الشمع بالتكوّن، مما قد يؤثر على تدفق الوقود وقابليته للترشيح. ويعتبر مهمًا بشكل خاص للديزل.",
      en: "To determine the temperature at which wax crystals begin to form, which can affect fuel flow and filterability. Particularly important for Diesel.",
    },
    purpose: {
      ar: "يتم تحديدها باستخدام جهاز قياس نقطة الغيوم وفقًا لـ ASTM D2500 لتقييم سلوك التدفق عند درجات الحرارة المنخفضة، وبشكل خاص للديزل.",
      en: "Determined using a Cloud Point Analyzer per ASTM D2500 to evaluate low-temperature flow behavior, particularly for Diesel.",
    },
    methodNo: { ar: "ASTM D2500", en: "ASTM D2500" },
  },
  {
    id: "viscosity-kinematic",
    image: images.equipment.Visc40,
    category: hydrocarbonSectionCategory,
    title: { ar: "Viscosity", en: "Viscosity" },
    definition: {
      ar: "يحدد مقاومة السائل للجريان.",
      en: "Determines the resistance of the liquid to flow.",
    },
    why: {
      ar: "لتقييم خصائص التدفق وأداء الضخ وسلوك حقن الوقود.",
      en: "To evaluate flow characteristics, pumping performance, and fuel injection behavior.",
    },
    purpose: {
      ar: "يتم القياس باستخدام جهاز قياس اللزوجة الحركية وفقًا لـ ASTM D445 لتقييم خصائص التدفق وأداء الضخ والحقن.",
      en: "Measured using a Kinematic Viscometer per ASTM D445 to evaluate flow characteristics and pumping/injection performance.",
    },
    methodNo: { ar: "ASTM D445", en: "ASTM D445" },
  },
  {
    id: "cetane-number",
    image: images.equipment.Cetain,
    category: hydrocarbonSectionCategory,
    title: { ar: "Cetane Number", en: "Cetane Number" },
    definition: {
      ar: "يحدد جودة اشتعال وقود الديزل.",
      en: "Indicates the ignition quality of diesel fuel.",
    },
    why: {
      ar: "لتحديد جودة الاشتعال وفترة تأخر الاشتعال لوقود الديزل في محركات الاشتعال بالضغط.",
      en: "To determine the ignition quality and ignition delay of Diesel fuel in a compression-ignition engine.",
    },
    purpose: {
      ar: "يتم تحديده باستخدام محرك CFR لقياس رقم السيتان وفقًا لـ ASTM D613 لتقييم جودة اشتعال وقود الديزل.",
      en: "Determined using the CFR Cetane Engine per ASTM D613 to evaluate the ignition quality of Diesel fuel.",
    },
    methodNo: { ar: "ASTM D613", en: "ASTM D613" },
  },
  {
    id: "sulfur-xray-hydrocarbon",
    image: images.equipment.Sul_xry,
    category: hydrocarbonSectionCategory,
    title: { ar: "Sulfur by X-Ray", en: "Sulfur by X-Ray" },
    definition: {
      ar: "مهم لجودة الوقود والتحكم في الانبعاثات والحد من التآكل وعمليات التكرير.",
      en: "Important for fuel quality, emissions control, corrosion prevention, and refinery processing.",
    },
    why: {
      ar: "لتحديد إجمالي محتوى الكبريت والتأكد من مطابقته للمواصفات المطبقة على المنتج.",
      en: "To determine the Total Sulfur Content and verify compliance with the applicable product specification.",
    },
    purpose: {
      ar: "يتم القياس باستخدام جهاز تحليل الكبريت بتقنية ED-XRF وفقًا لـ ASTM D4294 للتأكد من مطابقة الوقود لمواصفات الكبريت ودعم التحكم في الانبعاثات.",
      en: "Measured using an ED-XRF Sulfur Analyzer per ASTM D4294 to verify compliance with fuel sulfur specifications and support emissions control.",
    },
    methodNo: { ar: "ASTM D4294", en: "ASTM D4294" },
  },
  {
    id: "lubricity",
    image: images.equipment.Lubracity,
    category: hydrocarbonSectionCategory,
    title: { ar: "Lubricity", en: "Lubricity" },
    definition: {
      ar: "مهم لحماية مضخات الوقود وحاقنات الوقود من التآكل.",
      en: "Important for protecting fuel pumps and injectors against wear.",
    },
    why: {
      ar: "لتقييم قدرة الوقود على تقليل الاحتكاك والتآكل بين الأسطح المعدنية المتلامسة، ويعتبر مهمًا بشكل خاص للديزل.",
      en: "To evaluate the ability of the fuel to reduce friction and wear between contacting metal surfaces. Particularly important for Diesel.",
    },
    purpose: {
      ar: "يتم التقييم باستخدام جهاز HFRR وفقًا لـ ASTM D6079 لتقييم قدرة الوقود على تقليل التآكل في المضخات والحاقنات، وبشكل خاص للديزل.",
      en: "Evaluated using the HFRR (High Frequency Reciprocating Rig) per ASTM D6079 to assess the fuel's ability to reduce wear on pumps and injectors, particularly for Diesel.",
    },
    methodNo: { ar: "ASTM D6079", en: "ASTM D6079" },
  },
  {
    id: "bsw-hydrocarbon",
    image: images.equipment.BSW,
    category: hydrocarbonSectionCategory,
    title: { ar: "BS&W – Basic Sediment & Water", en: "BS&W – Basic Sediment & Water" },
    definition: {
      ar: "يحدد التلوث الناتج عن الماء والرواسب.",
      en: "Determines contamination by water and sediment.",
    },
    why: {
      ar: "لتحديد كمية الماء والرواسب التي قد تسبب التآكل وانسداد المرشحات والمشاكل التشغيلية.",
      en: "To determine the amount of water and sediment that may cause corrosion, filter plugging, and operational problems.",
    },
    purpose: {
      ar: "يتم تحديدها باستخدام جهاز الطرد المركزي وفقًا لـ ASTM D2709 للكشف عن الماء والرواسب التي قد تسبب التآكل أو انسداد المرشحات.",
      en: "Determined using a Centrifuge per ASTM D2709 to detect water and sediment that may cause corrosion or filter plugging.",
    },
    methodNo: { ar: "ASTM D2709", en: "ASTM D2709" },
  },
  {
    id: "appearance",
    image: images.equipment.app,
    category: hydrocarbonSectionCategory,
    title: { ar: "Appearance", en: "Appearance" },
    definition: {
      ar: "يوفر تقييمًا بصريًا سريعًا لحالة العينة.",
      en: "Provides a quick visual assessment of the sample condition.",
    },
    why: {
      ar: "للكشف بصريًا عن وجود الماء أو الرواسب أو العكارة أو الجسيمات أو أي مظهر غير طبيعي.",
      en: "To visually detect water, sediment, haze, particles, or any abnormal appearance.",
    },
    purpose: {
      ar: "يتم التقييم بالفحص البصري باستخدام أسطوانة زجاجية شفافة وفقًا للمواصفات المطبقة على المنتج، للكشف عن وجود ماء أو رواسب أو مظهر غير طبيعي.",
      en: "Assessed by visual inspection using a clear glass cylinder, per the applicable product specification, to detect water, sediment, or abnormal appearance.",
    },
    methodNo: {
      ar: "وفقًا للمواصفات المطبقة على المنتج",
      en: "According to the applicable product specification",
    },
  },
  {
    id: "ash",
    image: images.equipment.Ash_asp,
    category: hydrocarbonSectionCategory,
    title: { ar: "Ash", en: "Ash" },
    definition: {
      ar: "يحدد كمية المتبقي غير القابل للاحتراق بعد حرق العينة.",
      en: "Determines the amount of non-combustible residue remaining after burning the sample.",
    },
    why: {
      ar: "للكشف عن البقايا المعدنية أو غير العضوية والتلوث المحتمل في المنتج.",
      en: "To detect metallic or inorganic residues and potential contamination in the product.",
    },
    purpose: {
      ar: "يتم تحديده باستخدام فرن Muffle / جهاز قياس الرماد وفقًا لـ ASTM D482 للكشف عن البقايا المعدنية أو غير العضوية في المنتج.",
      en: "Determined using a Muffle Furnace / Ash Apparatus per ASTM D482 to detect metallic or inorganic residues in the product.",
    },
    methodNo: { ar: "ASTM D482", en: "ASTM D482" },
  },
  {
    id: "carbon-residue",
    image: images.equipment.Ash_asp,
    category: hydrocarbonSectionCategory,
    title: { ar: "Carbon Residue", en: "Carbon Residue" },
    definition: {
      ar: "يوضح قابلية المنتج لتكوين ترسبات كربونية.",
      en: "Indicates the tendency of the product to form carbon deposits.",
    },
    why: {
      ar: "لتقييم قابلية المنتج لتكوين ترسبات كربونية أثناء التسخين أو الاحتراق.",
      en: "To evaluate the tendency of the product to form carbonaceous deposits during heating or combustion.",
    },
    purpose: {
      ar: "يتم تحديده باستخدام جهاز قياس المتبقي الكربوني وفقًا لـ ASTM D189 / D524 لتقييم قابلية المنتج لتكوين ترسبات كربونية.",
      en: "Determined using a Carbon Residue Apparatus per ASTM D189 / D524 to evaluate the tendency of the product to form carbonaceous deposits.",
    },
    methodNo: { ar: "ASTM D189 / D524", en: "ASTM D189 / D524" },
  },
];

/* ===================== CHEMICAL SAMPLE SECTION TESTS ===================== */
/* Populates the existing laboratorySections entry with id "chemical". */
const chemicalCategory = {
  ar: "قسم العينات الكيميائية",
  en: "Chemical Sample Section",
};

const chemicalEquipment = [
  {
    id: "nitrogen-liquid-hydrocarbons",
    image: images.equipment.Sul_Low,
    category: chemicalCategory,
    title: { ar: "Nitrogen in Liquid Hydrocarbons", en: "Nitrogen in Liquid Hydrocarbons" },
    definition: {
      ar: "هو فحص يُستخدم لتحديد كمية النيتروجين الموجودة في الهيدروكربونات السائلة، سواء كان النيتروجين موجودًا في مركبات عضوية أو مركبات نيتروجينية أخرى.",
      en: "A test used to determine the amount of nitrogen present in liquid hydrocarbons, whether present in organic compounds or other nitrogen-containing compounds.",
    },
    why: {
      ar: "لأن مركبات النيتروجين قد تؤثر على عمليات التكرير وتسبب تسممًا أو انخفاضًا في كفاءة بعض المحفزات المستخدمة في وحدات المعالجة.",
      en: "Nitrogen compounds may affect refinery processes and can poison or reduce the efficiency of catalysts used in processing units.",
    },
    purpose: {
      ar: "تحديد تركيز النيتروجين في العينة ومقارنته بالحدود والمواصفات المطلوبة للمنتج أو لعملية التكرير.",
      en: "To determine the nitrogen concentration in the sample and compare it with the required product or refining specifications and limits.",
    },
    methodNo: { ar: "ASTM D4629", en: "ASTM D4629" },
  },
  {
    id: "low-sulfur-uv-fluorescence",
    image: images.equipment.Sul_Low,
    category: chemicalCategory,
    title: {
      ar: "Low Trace Sulfur in Liquid Hydrocarbons (UV Fluorescence)",
      en: "Low Trace Sulfur in Liquid Hydrocarbons with UV Fluorescence Detection",
    },
    definition: {
      ar: "هو فحص يُستخدم لقياس التراكيز المنخفضة جدًا من الكبريت في الهيدروكربونات السائلة باستخدام تقنية الأشعة فوق البنفسجية الفلورية (UV Fluorescence).",
      en: "A test used to measure very low concentrations of sulfur in liquid hydrocarbons using UV Fluorescence detection.",
    },
    why: {
      ar: "لأن وجود الكبريت حتى بتراكيز منخفضة قد يؤثر على المحفزات ويساهم في تكوين مركبات ضارة أثناء عمليات الاحتراق والمعالجة.",
      en: "Sulfur, even at low concentrations, may affect catalysts and contribute to the formation of harmful compounds during combustion and processing.",
    },
    purpose: {
      ar: "تحديد كمية الكبريت الموجودة في العينة بدقة عند التراكيز المنخفضة والتأكد من مطابقتها للحدود والمواصفات المطلوبة.",
      en: "To accurately determine the sulfur concentration at low levels and verify compliance with the required limits and specifications.",
    },
    methodNo: { ar: "UOP 987", en: "UOP 987" },
  },
  {
    id: "mercaptan-h2s",
    image: images.equipment.Mercapin,
    category: chemicalCategory,
    title: { ar: "Mercaptan and H₂S", en: "Mercaptan and H₂S" },
    definition: {
      ar: "هو فحص يُستخدم لتحديد وجود أو كمية مركبات المركبتان (Mercaptans) وكبريتيد الهيدروجين (H₂S) في المنتجات والهيدروكربونات.",
      en: "A test used to determine the presence or amount of Mercaptans and Hydrogen Sulfide (H₂S) in petroleum products and hydrocarbons.",
    },
    why: {
      ar: "لأن H₂S والمركبتانات قد تسبب رائحة نفاذة وتساهم في التآكل، كما أن H₂S غاز سام ويُعد وجوده من الأمور المهمة التي يجب مراقبتها في المنتجات البترولية.",
      en: "H₂S and Mercaptans may cause strong odors and contribute to corrosion. H₂S is also toxic, making its presence important to monitor in petroleum products.",
    },
    purpose: {
      ar: "تحديد مستوى H₂S والمركبتانات في العينة والتأكد من عدم تجاوزها الحدود المحددة للمنتج.",
      en: "To determine the H₂S and Mercaptan levels in the sample and verify that they do not exceed the specified product limits.",
    },
    methodNo: { ar: "ASTM D3227", en: "ASTM D3227" },
  },
  {
    id: "water-karl-fischer",
    image: images.equipment.KarlF,
    category: chemicalCategory,
    title: {
      ar: "Water in Petroleum Products by Coulometric Karl Fischer Titration",
      en: "Water in Petroleum Products by Coulometric Karl Fischer Titration",
    },
    definition: {
      ar: "هو فحص يُستخدم لتحديد كمية الماء الموجودة في المنتجات البترولية باستخدام طريقة Karl Fischer Coulometric، وهي طريقة مناسبة لقياس كميات الماء المنخفضة.",
      en: "A test used to determine the amount of water present in petroleum products using the Coulometric Karl Fischer method, which is suitable for measuring low levels of water.",
    },
    why: {
      ar: "لأن وجود الماء في المنتجات البترولية قد يسبب التآكل، ويؤثر على عمليات المعالجة والتخزين، وقد يؤثر على خصائص المنتج.",
      en: "Water in petroleum products may cause corrosion, affect processing and storage operations, and affect product properties.",
    },
    purpose: {
      ar: "تحديد محتوى الماء في العينة بدقة والتأكد من مطابقته للحدود والمواصفات المطلوبة.",
      en: "To accurately determine the water content in the sample and verify compliance with the required limits and specifications.",
    },
    methodNo: { ar: "ASTM D6304", en: "ASTM D6304" },
  },
  {
    id: "simulated-distillation-gc",
    image: images.equipment.SimiDist,
    category: chemicalCategory,
    title: {
      ar: "Simulated Distillation Boiling Range by GC",
      en: "Simulated Distillation Boiling Range by GC",
    },
    definition: {
      ar: "هو فحص يستخدم جهاز كروماتوغرافيا الغاز (GC) لتحديد نطاق درجات غليان مكونات العينة، وذلك من خلال فصل المركبات حسب درجة تطايرها.",
      en: "A test that uses Gas Chromatography (GC) to determine the boiling range of the sample components by separating compounds according to their volatility.",
    },
    why: {
      ar: "لأن معرفة توزيع درجات الغليان تساعد في معرفة طبيعة وتركيب المنتج وتحديد مدى احتوائه على المكونات الخفيفة والثقيلة.",
      en: "Understanding the boiling point distribution helps characterize the product and determine the presence and distribution of light and heavy components.",
    },
    purpose: {
      ar: "تحديد منحنى ونطاق الغليان للعينة وتقييم توزيع المكونات حسب درجات غليانها.",
      en: "To determine the boiling curve and boiling range of the sample and evaluate the distribution of components according to their boiling temperatures.",
    },
    methodNo: { ar: "ASTM D6352", en: "ASTM D6352" },
  },
  {
    id: "chloride-hydrocarbons",
    image: images.equipment.ChlorideByXray,
    category: chemicalCategory,
    title: { ar: "Chloride in Hydrocarbons", en: "Chloride in Hydrocarbons" },
    definition: {
      ar: "هو فحص يُستخدم لتحديد كمية الكلوريدات الموجودة في الهيدروكربونات والمنتجات البترولية.",
      en: "A test used to determine the amount of chlorides present in hydrocarbons and petroleum products.",
    },
    why: {
      ar: "لأن مركبات الكلوريد قد تتحول أثناء عمليات التكرير إلى مركبات تسبب التآكل، خصوصًا في الأجزاء التي تتعرض لدرجات حرارة مرتفعة.",
      en: "Chloride compounds may transform during refining into compounds that cause corrosion, particularly in areas exposed to high temperatures.",
    },
    purpose: {
      ar: "تحديد تركيز الكلوريد في العينة ومراقبته لتقليل مخاطر التآكل والمشاكل التي قد تحدث أثناء عمليات التكرير.",
      en: "To determine the chloride concentration in the sample and monitor it to reduce corrosion risks and refining-related problems.",
    },
    methodNo: { ar: "ASTM D7536 / UOP 991", en: "ASTM D7536 / UOP 991" },
  },
  {
    id: "doctor-test",
    image: images.equipment.doctor,
    category: chemicalCategory,
    title: { ar: "Doctor Test", en: "Doctor Test" },
    definition: {
      ar: "هو فحص نوعي يُستخدم للكشف عن وجود مركبات الكبريت النشطة، مثل المركبتانات، في بعض المنتجات البترولية.",
      en: "A qualitative test used to detect the presence of active sulfur compounds, such as Mercaptans, in certain petroleum products.",
    },
    why: {
      ar: "لأن بعض مركبات الكبريت النشطة قد تسبب رائحة غير مرغوبة وتؤثر على خصائص المنتج وقد تكون لها قابلية للتفاعل والتآكل.",
      en: "Some active sulfur compounds may cause undesirable odors, affect product properties, and may be reactive and corrosive.",
    },
    purpose: {
      ar: "تحديد ما إذا كانت العينة تحتوي على مركبات الكبريت النشطة من خلال ظهور نتيجة موجبة أو سالبة للفحص.",
      en: "To determine whether the sample contains active sulfur compounds based on a positive or negative test result.",
    },
    methodNo: { ar: "ASTM D4952", en: "ASTM D4952" },
  },
  {
    id: "nickel-vanadium",
    image: images.equipment.Sul_xry,
    category: chemicalCategory,
    title: { ar: "Nickel and Vanadium in Hydrocarbons", en: "Nickel and Vanadium in Hydrocarbons" },
    definition: {
      ar: "هو فحص يُستخدم لتحديد تراكيز النيكل (Ni) والفاناديوم (V) الموجودة في الهيدروكربونات والمنتجات البترولية.",
      en: "A test used to determine the concentrations of Nickel (Ni) and Vanadium (V) present in hydrocarbons and petroleum products.",
    },
    why: {
      ar: "لأن النيكل والفاناديوم من المعادن التي قد تؤثر على عمليات التكرير، كما يمكن أن تسبب مشاكل للمحفزات وتؤثر على عمليات المعالجة.",
      en: "Nickel and Vanadium may affect refining operations, cause catalyst-related problems, and affect processing operations.",
    },
    purpose: {
      ar: "تحديد تركيز النيكل والفاناديوم في العينة ومراقبة مستوياتها قبل أو أثناء عمليات التكرير والمعالجة.",
      en: "To determine the Nickel and Vanadium concentrations in the sample and monitor their levels before or during refining and processing.",
    },
    methodNo: { ar: "ASTM D8252", en: "ASTM D8252" },
  },
  {
    id: "aromatics-jet-diesel",
    image: images.equipment.HPLC_DE,
    category: chemicalCategory,
    title: { ar: "Aromatics in Jet Fuel & Diesel", en: "Aromatics in Jet Fuel & Diesel" },
    definition: {
      ar: "هو فحص يُستخدم لتحديد نسبة المركبات العطرية (Aromatics) الموجودة في وقود الطائرات والديزل.",
      en: "A test used to determine the percentage of aromatic compounds present in Jet Fuel and Diesel.",
    },
    why: {
      ar: "لأن نسبة المركبات العطرية تؤثر على بعض خصائص الوقود، مثل سلوك الاحتراق وبعض الخصائص الفيزيائية للمنتج.",
      en: "The aromatic content affects certain fuel properties, including combustion behavior and some physical properties of the product.",
    },
    purpose: {
      ar: "تحديد نسبة المركبات العطرية في وقود الطائرات والديزل والتأكد من مطابقتها للحدود والمواصفات المحددة.",
      en: "To determine the aromatic content in Jet Fuel and Diesel and verify compliance with the specified limits and requirements.",
    },
    methodNo: { ar: "ASTM D6591 / ASTM D6379", en: "ASTM D6591 / ASTM D6379" },
  },
  {
    id: "hpna",
    image: images.equipment.HPNA,
    category: chemicalCategory,
    title: { ar: "Heavy Polynuclear Aromatics (HPNA)", en: "Heavy Polynuclear Aromatics (HPNA)" },
    definition: {
      ar: "هو فحص يُستخدم لتحديد المركبات العطرية متعددة الحلقات الثقيلة (Heavy Polynuclear Aromatics) الموجودة في المنتجات أو التي تتكون أثناء بعض عمليات التكرير.",
      en: "A test used to determine the concentration of Heavy Polynuclear Aromatics (HPNA) present in products or formed during certain refining processes.",
    },
    why: {
      ar: "لأن تراكم المركبات العطرية الثقيلة قد يؤدي إلى مشاكل في وحدات التكرير، مثل ترسب المواد وتكوين الكوك، كما قد يؤثر على أداء المحفزات.",
      en: "The accumulation of heavy aromatic compounds may cause problems in refinery units, such as deposits and coke formation, and may affect catalyst performance.",
    },
    purpose: {
      ar: "تحديد تركيز المركبات العطرية متعددة الحلقات الثقيلة ومراقبة مستوياتها لتقليل مشاكل الترسب والكوك والمحافظة على كفاءة عملية التكرير.",
      en: "To determine the concentration of Heavy Polynuclear Aromatics and monitor their levels to reduce deposition and coke-related problems and maintain refining efficiency.",
    },
    methodNo: { ar: "UOP 860", en: "UOP 860" },
  },
];


/* ===================== PHYSICAL SECTION TESTS ===================== */
/* Populates the existing laboratorySections entry with id "physical". */
const physicalCategory = {
  ar: "الفحوصات الفيزيائية",
  en: "Physical Tests",
};

/* Sub-category within the Physical section for catalyst/material analysis
   (UOP test methods). UOP 703 and UOP 864 are intentionally NOT added yet —
   push more objects into physicalEquipment with category: uopCategory when
   their real technical content is available. */
const uopCategory = {
  ar: "فحوص المحفزات والمواد العضوية وغير العضوية",
  en: "UOP Test Methods | Catalyst and Material Analysis",
};

const physicalEquipment = [
  {
    id: "c7-insoluble",
    image: images.equipment.c7,
    category: physicalCategory,
    title: { ar: "C7 Insoluble", en: "C7 Insoluble" },
    definition: {
      ar: "فحص يحدد نسبة المواد غير الذائبة في الهبتان (Heptane)، عن طريق خلط العينة بالهبتان، ثم ترشيح الرواسب غير الذائبة وتجفيفها وتوزينها.",
      en: "A test that determines the percentage of materials insoluble in heptane by mixing the sample with heptane, filtering the insoluble residue, drying it, and weighing it.",
    },
    why: {
      ar: "للكشف عن الأسفلتينات (Asphaltenes) والكوك والمواد الصلبة غير الذائبة التي قد تتسبب في ترسبات وانسداد داخل المعدات.",
      en: "To detect asphaltenes, coke, and insoluble solids that may cause deposits and plugging inside equipment.",
    },
    purpose: {
      ar: "لتقدير قابلية الزيت لتكوين الكوك والترسبات، وتقييم مدى صلاحيته كتغذية لعمليات التكسير والمعالجة.",
      en: "To estimate the tendency of the oil to form coke and deposits and evaluate its suitability as a feedstock for cracking and processing operations.",
    },
    methodNo: { ar: "UOP 614", en: "UOP 614" },
  },
  {
    id: "ccr",
    image: images.equipment.ccr,
    category: physicalCategory,
    title: { ar: "CCR – Conradson Carbon Residue", en: "CCR – Conradson Carbon Residue" },
    definition: {
      ar: "فحص يقيس كمية المتبقي الكربوني المتكوّن بعد تبخّر العينة وتحللها حراريًا تحت شروط محددة.",
      en: "A test that measures the amount of carbonaceous residue formed after evaporation and thermal decomposition of the sample under specified conditions.",
    },
    why: {
      ar: "قد تتحلل المنتجات البترولية الثقيلة عند تسخينها وتترك متبقيات كربونية تساهم في تكوّن الترسبات.",
      en: "Heavy petroleum products may decompose when heated and leave carbonaceous residues that contribute to deposit formation.",
    },
    purpose: {
      ar: "لتقديم مؤشر نسبي على قابلية المنتج لتكوين الكوك أثناء التسخين وعمليات المعالجة.",
      en: "To provide a relative indication of the product's tendency to form coke during heating and processing operations.",
    },
    methodNo: { ar: "ASTM D189", en: "ASTM D189" },
  },
  {
    id: "corrosion-copper-strip",
    image: images.equipment.corrison_JET,
    category: physicalCategory,
    title: { ar: "Corrosion – Copper Strip", en: "Corrosion – Copper Strip" },
    definition: {
      ar: "فحص نوعي يقيّم قابلية المنتج البترولي للتسبب في تبقيع أو تآكل شريحة نحاس مصقولة، تحت شروط محددة من الحرارة والزمن.",
      en: "A qualitative test that evaluates the tendency of a petroleum product to cause staining or corrosion of a polished copper strip under specified temperature and time conditions.",
    },
    why: {
      ar: "للكشف عن مركبات الكبريت النشطة وغيرها من المواد التي قد تهاجم النحاس، حتى عند انخفاض نسبة الكبريت الكلي نسبيًا.",
      en: "To detect active sulfur compounds and other materials that may attack copper, even when the total sulfur content is relatively low.",
    },
    purpose: {
      ar: "للتأكد من أن المنتج لا يتسبب في تآكل مكونات النحاس وسبائكه، ومطابقته لمتطلبات الجودة المعتمدة.",
      en: "To ensure that the product does not cause corrosion of copper and copper-alloy components and meets applicable quality requirements.",
    },
    methodNo: { ar: "ASTM D130", en: "ASTM D130" },
  },
  {
    id: "jftot",
    image: images.equipment.Jeftot,
    category: physicalCategory,
    title: { ar: "JFTOT – Jet Fuel Thermal Oxidation Test", en: "JFTOT – Jet Fuel Thermal Oxidation Test" },
    definition: {
      ar: "فحص يقيّم قابلية وقود التوربينات الجوي لتكوين ترسبات عند مروره على أنبوب ألمنيوم مسخّن، من خلال تقييم ترسبات الأنبوب وفرق الضغط عبر الفلتر.",
      en: "A test that evaluates the tendency of aviation turbine fuel to form deposits when it flows over a heated aluminum tube by assessing tube deposits and pressure drop across the filter.",
    },
    why: {
      ar: "يتعرض وقود الطائرات لدرجات حرارة مرتفعة داخل أنظمة الوقود، وهذا قد يتسبب في تحلل الوقود وتكوّن الترسبات.",
      en: "Aviation fuel is exposed to elevated temperatures within fuel systems, which can cause fuel degradation and deposit formation.",
    },
    purpose: {
      ar: "لتقييم الثبات الحراري لوقود الطائرات، والمساهمة في حماية الفلاتر والمرشات ومكونات نظام الوقود من الترسبات والانسداد.",
      en: "To evaluate the thermal stability of aviation fuel and help protect filters, nozzles, and fuel-system components from deposits and plugging.",
    },
    methodNo: { ar: "ASTM D3241", en: "ASTM D3241" },
  },
  {
    id: "induction-period",
    image: images.equipment.indectionP,
    category: physicalCategory,
    title: { ar: "Induction Period", en: "Induction Period" },
    definition: {
      ar: "فحص يقيس مقاومة البنزين للتأكسد تحت ضغط أكسجين ودرجة حرارة محددة، ويُعبَّر عن النتيجة بفترة الحث (Induction Period).",
      en: "A test that measures the resistance of gasoline to oxidation under specified oxygen pressure and temperature conditions. The result is reported as the induction period.",
    },
    why: {
      ar: "قد يتأكسد البنزين أثناء التخزين ويتكوّن عنه صمغ (Gum) وترسبات تؤثر على جودته وأدائه.",
      en: "Gasoline can oxidize during storage and form gum and deposits that affect its quality and performance.",
    },
    purpose: {
      ar: "لتقييم ثبات البنزين أثناء التخزين؛ فكلما طالت فترة الحث زادت مقاومة البنزين للتأكسد.",
      en: "To evaluate the storage stability of gasoline. A longer induction period indicates greater resistance to oxidation.",
    },
    methodNo: { ar: "ASTM D525", en: "ASTM D525" },
  },
  {
    id: "particulate-light-extinction",
    image: images.equipment.Partic_jet,
    category: physicalCategory,
    title: { ar: "Particulate Using Light Extinction", en: "Particulate Using Light Extinction" },
    definition: {
      ar: "فحص يحدد عدد وحجم الجزيئات الصلبة وقطرات الماء المتناثرة في وقود الطائرات، باستخدام تقنية إخماد الضوء (Light Extinction).",
      en: "A test that determines the number and size of solid particles and dispersed water droplets in aviation fuel using light-extinction technology.",
    },
    why: {
      ar: "للكشف عن التلوث الذي قد يدخل إلى الوقود خلال الإنتاج أو النقل أو التخزين أو المناولة.",
      en: "To detect contamination that may enter the fuel during production, transportation, storage, or handling.",
    },
    purpose: {
      ar: "لتحديد نظافة الوقود، والمساعدة على منع انسداد الفلاتر والفتحات الصغيرة في أنظمة وقود الطائرات.",
      en: "To determine fuel cleanliness and help prevent blockage of filters and small openings in aircraft fuel systems.",
    },
    methodNo: { ar: "IP 577", en: "IP 577" },
  },
  {
    id: "particulate-vacuum-filtration",
    image: images.equipment.Partc_desel,
    category: physicalCategory,
    title: { ar: "Particulate by Vacuum Filtration", en: "Particulate by Vacuum Filtration" },
    definition: {
      ar: "فحص يحدد كتلة التلوث الجسيمي الصلب في وقود القطاعات الوسطى، مثل الديزل، عن طريق الترشيح تحت التفريغ (Vacuum Filtration) وتوزين المتبقي المحتجز.",
      en: "A test that determines the mass of solid particulate contamination in middle distillate fuels, such as diesel, by vacuum filtration and weighing the retained residue.",
    },
    why: {
      ar: "قد يتسبب التلوث الجسيمي في انسداد سريع للفلاتر، وسد الممرات الصغيرة، وزيادة تآكل مكونات نظام الوقود.",
      en: "Particulate contamination can cause rapid filter plugging, blockage of small passages, and increased wear of fuel-system components.",
    },
    purpose: {
      ar: "لتقييم نظافة الوقود، ومراقبة التلوث الجسيمي، والتحقق من التوافق مع المواصفات المعتمدة.",
      en: "To evaluate fuel cleanliness, control particulate contamination, and verify compliance with applicable specifications.",
    },
    methodNo: { ar: "ASTM D6217", en: "ASTM D6217" },
  },
  {
    id: "wism",
    image: images.equipment.wism,
    category: physicalCategory,
    title: { ar: "WISM – Water Separation Index Modified", en: "WISM – Water Separation Index Modified" },
    definition: {
      ar: "فحص يقيس قدرة وقود التوربينات الجوي على فصل الماء المستحلَب، ويُعبَّر عن النتيجة عادة بمعدل WISM أو MSEP يتراوح غالبًا بين 50 و100.",
      en: "A test that measures the ability of aviation turbine fuel to separate emulsified water. The result is commonly reported as a WISM or MSEP rating, typically from 50 to 100.",
    },
    why: {
      ar: "للكشف عن المواد النشطة سطحيًا ومخلفات المعالجة والإضافات التي قد تقلل من كفاءة فلاتر فصل الماء.",
      en: "To detect surface-active materials, processing residues, and additives that may reduce the efficiency of water-separating filters.",
    },
    purpose: {
      ar: "للتحقق من قدرة الوقود على فصل الماء، والمساهمة في حماية أنظمة وقود الطائرات من المشاكل المرتبطة بالماء والتآكل والتجمد.",
      en: "To verify the fuel's ability to separate water and help protect aircraft fuel systems from water-related problems, corrosion, and freezing.",
    },
    methodNo: { ar: "ASTM D3948", en: "ASTM D3948" },
  },
  {
    id: "electrical-conductivity-fuel",
    image: images.equipment.condv,
    category: physicalCategory,
    title: { ar: "Electrical Conductivity", en: "Electrical Conductivity" },
    definition: {
      ar: "فحص يقيس قدرة وقود الطائرات ووقود القطاعات المتقطرة على توصيل وتبديد الشحنات الكهربائية، ويُعبَّر عن النتيجة غالبًا بوحدة pS/m.",
      en: "A test that measures the ability of aviation fuels and distillate fuels to conduct and dissipate electrical charges. The result is commonly expressed in pS/m.",
    },
    why: {
      ar: "قد تتسبب عمليات الضخ والترشيح والنقل في توليد كهرباء ساكنة قد تتراكم داخل الوقود.",
      en: "Pumping, filtration, and transportation can generate static electricity that may accumulate in the fuel.",
    },
    purpose: {
      ar: "لتقليل خطر التفريغ الكهروستاتيكي والحريق، ومراقبة فعالية إضافات تبديد الشحنات الساكنة.",
      en: "To reduce the risk of electrostatic sparking and fire and to monitor the effectiveness of static-dissipater additives.",
    },
    methodNo: { ar: "ASTM D2624", en: "ASTM D2624" },
  },
  {
    id: "Specific Gravity and Density (Pycnometer)",
    image: images.equipment.Biqn,
    category: physicalCategory,
    title: { ar: "Pycnometer", en: "Pycnometer" },
    definition: {
      ar: "فحص يحدد الكثافة أو الكثافة النسبية للبيتومين ومواد الأسفلت شبه الصلبة، عن طريق قياس كتلتها وحجمها عند درجة حرارة محددة.",
      en: "A test that determines the density or relative density of bitumen and semi-solid asphalt materials by measuring their mass and volume at a specified temperature.",
    },
    why: {
      ar: "الكثافة مطلوبة لتحويل الحجم إلى كتلة، وتصحيح الأحجام إلى درجة حرارة مرجعية قياسية.",
      en: "Density is required for converting volume to mass and correcting volumes to a standard reference temperature.",
    },
    purpose: {
      ar: "لدعم حسابات الإنتاج والمخزون والمزج ومراقبة الجودة للمواد الأسفلتية.",
      en: "To support production, inventory, blending, and quality-control calculations for asphaltic materials.",
    },
    methodNo: { ar: "ASTM D70/D70M", en: "ASTM D70/D70M" },
  },
  {
    id: "freezing-point-fuel",
    image: images.equipment.freezing,
    category: physicalCategory,
    title: { ar: "Freezing Point", en: "Freezing Point" },
    definition: {
      ar: "فحص يحدد درجة الحرارة التي تبدأ عندها بلورات الهيدروكاربونات الصلبة بالتكوّن في وقود التوربينات الجوي، باستخدام كاشف ليزر آلي.",
      en: "A test that determines the temperature at which solid hydrocarbon crystals begin to form in aviation turbine fuel using automated laser detection.",
    },
    why: {
      ar: "تنخفض درجة حرارة الوقود أثناء الطيران، وقد تتكوّن بلورات شمعية تعيق تدفق الوقود عبر الفلاتر وخطوط الوقود.",
      en: "Fuel temperature decreases during flight, and wax-like crystals may form and restrict fuel flow through filters and fuel lines.",
    },
    purpose: {
      ar: "للتأكد من خلو الوقود من البلورات عند أدنى درجة حرارة تشغيلية متوقعة، والمحافظة على تدفقه الآمن أثناء الطيران.",
      en: "To ensure that the fuel remains free of crystals at the lowest expected operating temperature and maintains safe flow during flight.",
    },
    methodNo: { ar: "ASTM D7153", en: "ASTM D7153" },
  },
  {
    id: "acid-number",
    image: images.equipment.Acidnu,
    category: physicalCategory,
    title: { ar: "Acid Number", en: "Acid Number" },
    definition: {
      ar: "فحص يقيس كمية المركبات الحمضية الموجودة بتركيزات منخفضة في وقود التوربينات الجوي، ويُعبَّر عن النتيجة بوحدة mg KOH/g.",
      en: "A test that measures the amount of acidic compounds present at low concentrations in aviation turbine fuel. The result is expressed in mg KOH/g.",
    },
    why: {
      ar: "قد تنتج الأحماض عن عمليات التكرير أو التأكسد أو التلوث، وقد تساهم في تآكل مكونات نظام الوقود.",
      en: "Acids may originate from refining, oxidation, or contamination and can contribute to corrosion of fuel-system components.",
    },
    purpose: {
      ar: "للتأكد من أن حموضة الوقود ضمن الحدود المسموح بها، وحماية الصهاريج وخطوط الوقود ومكونات النظام.",
      en: "To ensure that the acidity of the fuel remains within allowable limits and to protect tanks, fuel lines, and system components.",
    },
    methodNo: { ar: "ASTM D3242", en: "ASTM D3242" },
  },
  {
    id: "pour-point",
    image: images.equipment.PourPoint,
    category: physicalCategory,
    title: { ar: "Pour Point", en: "Pour Point" },
    definition: {
      ar: "فحص يحدد أدنى درجة حرارة يمكن عندها ملاحظة حركة أو سريان المنتج البترولي، تحت شروط فحص محددة.",
      en: "A test that determines the lowest temperature at which movement or flow of a petroleum product can be observed under specified test conditions.",
    },
    why: {
      ar: "قد تؤدي درجات الحرارة المنخفضة إلى زيادة لزوجة المنتج وتكوّن الشمع، وهذا قد يمنع سريانه.",
      en: "Low temperatures can increase product viscosity and cause wax formation, which may prevent the product from flowing.",
    },
    purpose: {
      ar: "لتحديد مدى ملاءمة المنتج للتخزين والضخ والتشغيل في الأجواء الباردة، ومنع انقطاع السريان في خطوط الأنابيب والمضخات.",
      en: "To determine the suitability of the product for storage, pumping, and operation under cold conditions and to prevent flow interruption in pipelines and pumps.",
    },
    methodNo: { ar: "ASTM D5949", en: "ASTM D5949" },
  },
  {
    id: "smoke-point",
    image: images.equipment.Smok,
    category: physicalCategory,
    title: { ar: "Smoke Point", en: "Smoke Point" },
    definition: {
      ar: "فحص يقيس أقصى ارتفاع للهب، بالميليمتر، يمكن الوصول إليه دون تكوّن الدخان عند حرق الكيروسين أو وقود التوربينات الجوي.",
      en: "A test that measures the maximum flame height, in millimeters, that can be achieved without producing smoke when kerosene or aviation turbine fuel is burned.",
    },
    why: {
      ar: "الوقود الذي يحتوي على نسبة أعلى من المركبات العطرية يميل لإنتاج دخان وسخام أكبر أثناء الاحتراق.",
      en: "Fuels containing higher proportions of aromatic compounds tend to produce more smoke and soot during combustion.",
    },
    purpose: {
      ar: "لتقييم جودة الاحتراق، وتقليل تكوّن الدخان والسخام، والمساهمة في حماية الأجزاء الساخنة من محركات التوربين.",
      en: "To evaluate combustion quality, reduce smoke and soot formation, and help protect hot sections of turbine engines.",
    },
    methodNo: { ar: "ASTM D1322", en: "ASTM D1322" },
  },
  {
    id: "viscosity-minus20",
    image: images.equipment.c7,
    category: physicalCategory,
    title: { ar: "Viscosity at -20°C", en: "Viscosity at -20°C" },
    definition: {
      ar: "فحص يقيس لزوجة وقود التوربينات الجوي عند درجة حرارة -20°C، لتحديد مقاومته للسريان في الأجواء الباردة.",
      en: "A test that measures the viscosity of aviation turbine fuel at −20 °C to determine its resistance to flow under cold conditions.",
    },
    why: {
      ar: "تزيد درجات الحرارة المنخفضة من لزوجة الوقود، وهذا قد يؤثر على الضخ والسريان والتذرية داخل نظام الوقود.",
      en: "Low temperatures increase fuel viscosity, which can affect pumping, flow, and atomization within the fuel system.",
    },
    purpose: {
      ar: "للتأكد من كفاية سريان الوقود عند درجات الحرارة المنخفضة، والتحقق من أن اللزوجة ضمن الحدود المطلوبة.",
      en: "To ensure adequate fuel flow at low temperatures and verify that viscosity remains within the required limits.",
    },
    methodNo: { ar: "ASTM D7042", en: "ASTM D7042" },
  },
  {
    id: "total-chloride",
    image: images.equipment.ChlorideCat,
    category: uopCategory,
    title: {
      ar: "total-chloride",
      en: "total-chloride",
    },
    definition: {
      ar: "فحص يحدد المحتوى الكلي للكلوريد غير العضوي في محفزات الألومينا والسيليكا-ألومينا أو حواملها، سواء كانت جديدة أو مستعملة. ويغطي الميثود نطاقًا كميًا من 0.01 إلى 10 بالمئة من الكتلة.",
      en: "A test that determines the total inorganic chloride content in alumina and silica-alumina catalysts or their supports, whether fresh or used. The method covers a quantitative range of 0.01% to 10% by mass.",
    },
    why: {
      ar: "لأن تغيّر محتوى الكلوريد قد يدل على فقده من المحفز أو تراكمه عليه، وقد يؤثر في الخصائص الحمضية وأداء بعض أنواع المحفزات، كما يساعد على كشف التلوث بالكلوريد.",
      en: "Because a change in chloride content may indicate loss from or accumulation on the catalyst, which can affect the acidic properties and performance of certain catalyst types, and helps detect chloride contamination.",
    },
    purpose: {
      ar: "التأكد من أن محتوى الكلوريد ضمن النطاق المطلوب، ومقارنة حالة المحفز الجديد والمستعمل، ودعم قرارات التشغيل والمعالجة أو الاستبدال.",
      en: "To confirm that chloride content is within the required range, compare fresh versus used catalyst condition, and support operating, regeneration, or replacement decisions.",
    },
    methodNo: { ar: "UOP 291", en: "UOP 291" },
  },
  {
    id: "loss-on-ignition",
    image: images.equipment.LOI,
    category: uopCategory,
    title: {
      ar: "loss-on-ignition",
      en: "loss-on-ignition",
    },
    definition: {
      ar: "فحص يحدد نسبة الفقد في كتلة العينة بعد إشعالها في الهواء عند درجة حرارة وزمن محددين. ويُطبّق على المحفزات الجديدة والمجددة والمستخدمة والمستنفدة، وعلى حوامل المحفزات والمواد المازة، وتبلغ قابلية القياس الكمي نحو 0.1 بالمئة من الكتلة.",
      en: "A test that determines the percentage mass loss of a sample after ignition in air at a specified temperature and time. It applies to fresh, regenerated, used, and spent catalysts, catalyst supports, and adsorbents, with a quantitation capability of about 0.1% by mass.",
    },
    why: {
      ar: "لأن العينة قد تحتوي على رطوبة أو كربون أو كلور أو فلور أو مواد متطايرة أخرى تؤثر في كتلتها وتركيبها. لذلك لا تمثل نتيجة الفقد بالإشعال الماء وحده، بل مجموع ما يتطاير تحت ظروف الفحص.",
      en: "Because the sample may contain moisture, carbon, chlorine, fluorine, or other volatile matter that affects its mass and composition — so the loss-on-ignition result represents everything volatilized under the test conditions, not just water.",
    },
    purpose: {
      ar: "تقييم حالة المادة ومقارنتها قبل الاستخدام وبعده أو بعد التجديد، وتحديد الفقد الكلي للمواد المتطايرة، والمساعدة في تصحيح النتائج إلى أساس جاف عند الحاجة.",
      en: "To assess and compare material condition before and after use or regeneration, determine total volatile-matter loss, and help correct results to a dry basis when needed.",
    },
    methodNo: { ar: "UOP 954", en: "UOP 954" },
  },
];

/* ===================== WATER SECTION TESTS ===================== */
/* Populates the existing laboratorySections entry with id "water".
   Content is English-only per request — each category/test string is
   a plain value (no `ar` translation invented); i18n.t() falls back to
   English automatically when the site is switched to Arabic. */
const waterCategories = {
  spectrometer: { ar: "Spectrometer", en: "Spectrometer" },
  environmental: { ar: "Environmental", en: "Environmental" },
  electrometer: { ar: "Electrometer", en: "Electrometer" },
  titrometric: { ar: "Titrometric", en: "Titrometric" },
};

const waterEquipment = [
  {
    id: "sulfate-water",
    image: images.equipment.Hach,
    category: waterCategories.spectrometer,
    title: "SO₄ – Sulfate in Water",
    definition: {
      ar: "فحص يُستخدم لتحديد تركيز أيونات الكبريتات (SO₄²⁻) الذائبة في الماء.",
      en: "A test used to determine the concentration of sulfate ions (SO₄²⁻) dissolved in water.",
    },
    why: {
      ar: "قد تساهم المستويات المرتفعة من الكبريتات في تكوّن الترسبات، خصوصًا بوجود الكالسيوم والباريوم، كما قد تتسبب في مشاكل للأغشية والمعدات.",
      en: "High sulfate levels may contribute to scale formation, especially in the presence of calcium and barium. High levels may also cause problems in membranes and equipment.",
    },
    purpose: {
      ar: "لمراقبة تركيز الكبريتات والتأكد من بقائه ضمن الحدود التشغيلية المطلوبة، خصوصًا بعد التناضح العكسي (RO) وفي أنظمة مياه التغذية.",
      en: "To monitor sulfate concentration and ensure that it remains within the required operating limits, especially after RO and in feedwater systems.",
    },
    methodNo: "HACH 8051",
  },
  {
    id: "silica-water",
    image: images.equipment.Hach,
    category: waterCategories.spectrometer,
    title: "SiO₂ – Silica in Water",
    definition: {
      ar: "فحص يُستخدم لتحديد تركيز السيليكا الذائبة (SiO₂) في الماء.",
      en: "A test used to determine the concentration of dissolved silica (SiO₂) in water.",
    },
    why: {
      ar: "ارتفاع السيليكا سبب مهم لتكوّن الترسبات في أغشية التناضح العكسي (RO) والمبادلات الحرارية والمراجل، وقد تنتقل مع البخار في أنظمة البخار وتتسبب في مشاكل للتوربينات.",
      en: "High silica is an important cause of scale formation in RO membranes, heat exchangers, and boilers. In steam systems, silica can carry over with steam and cause problems in turbines.",
    },
    purpose: {
      ar: "لمراقبة تركيز السيليكا ومنع تكوّن الترسبات، وحماية أنظمة RO والمراجل وتوربينات البخار، خصوصًا في أنظمة المياه عالية النقاء.",
      en: "To monitor silica concentration, prevent scaling, and protect RO systems, boilers, and steam turbines, especially in high-purity water systems.",
    },
    methodNo: "HACH 8282",
  },
  {
    id: "nitrate-water",
    image: images.equipment.Hach,
    category: waterCategories.spectrometer,
    title: "NO₃ – Nitrate in Water",
    definition: {
      ar: "فحص يُستخدم لتحديد تركيز أيونات النترات (NO₃⁻) في الماء.",
      en: "A test used to determine the concentration of nitrate ions (NO₃⁻) in water.",
    },
    why: {
      ar: "يشير ارتفاع تركيز النترات إلى وجود مركبات نيتروجينية، وقد يؤثر على جودة الماء بشكل عام.",
      en: "High nitrate levels indicate the presence of nitrogen compounds and may affect overall water quality.",
    },
    purpose: {
      ar: "لمراقبة جودة الماء وتقييم كفاءة عمليات المعالجة المخصصة لإزالة المركبات النيتروجينية.",
      en: "To monitor water quality and evaluate the efficiency of treatment processes designed to remove nitrogen compounds.",
    },
    methodNo: "HACH 8039",
  },
  {
    id: "nitrite-water",
    image: images.equipment.Hach,
    category: waterCategories.spectrometer,
    title: "NO₂ – Nitrite in Water",
    definition: {
      ar: "فحص يُستخدم لتحديد تركيز أيونات النتريت (NO₂⁻) في الماء.",
      en: "A test used to determine the concentration of nitrite ions (NO₂⁻) in water.",
    },
    why: {
      ar: "النتريت مركب نيتروجيني وسيط، وقد يشير وجوده إلى تغيرات حيوية أو كيميائية داخل عملية معالجة الماء.",
      en: "Nitrite is an intermediate nitrogen compound. Its presence may indicate biological or chemical changes within the water-treatment process.",
    },
    purpose: {
      ar: "للتأكد من بقاء مستويات النتريت ضمن الحدود المقبولة، ومراقبة جودة الماء وأداء المعالجة.",
      en: "To ensure that nitrite levels remain within acceptable limits and to monitor water quality and treatment performance.",
    },
    methodNo: "HACH 8153",
  },
  {
    id: "iron-water",
    image: images.equipment.Hach,
    category: waterCategories.spectrometer,
    title: "Fe – Iron in Water",
    definition: {
      ar: "فحص يُستخدم لتحديد تركيز الحديد الذائب و/أو الكلي الموجود في الماء.",
      en: "A test used to determine the concentration of dissolved and/or total iron present in water.",
    },
    why: {
      ar: "قد يتسبب ارتفاع الحديد في تغيّر اللون والطعم وتكوّن الترسبات والتلوث، وقد يساهم أيضًا في التآكل وانسداد الأغشية.",
      en: "High iron levels can cause color, taste, deposits, and fouling. Iron may also contribute to corrosion and membrane fouling.",
    },
    purpose: {
      ar: "لتحديد تركيز الحديد، ومراقبة التآكل، وتقييم كفاءة إزالة الحديد، وحماية أغشية RO والمعدات.",
      en: "To determine iron concentration, monitor corrosion, evaluate iron-removal efficiency, and protect RO membranes and equipment.",
    },
    methodNo: "HACH 8008",
  },
  {
    id: "free-chlorine",
    image: images.equipment.Hach,
    category: waterCategories.spectrometer,
    title: "Free Chlorine in Water",
    definition: {
      ar: "فحص يُستخدم لتحديد تركيز الكلور المتاح للتعقيم، والموجود أساسًا في صورة حمض هيبوكلوروز (HOCl) وأيون الهيبوكلوريت (OCl⁻).",
      en: "A test used to determine the concentration of chlorine available for disinfection, mainly present as hypochlorous acid (HOCl) and hypochlorite ion (OCl⁻).",
    },
    why: {
      ar: "يُعد الكلور الحر مهمًا لعملية التعقيم، إلا أن زيادته قد تلحق الضرر بأغشية RO المصنوعة من البولي أميد، بينما قد يشير نقصه إلى تعقيم غير كافٍ.",
      en: "Free chlorine is important for disinfection. However, excessive chlorine can damage polyamide RO membranes. Insufficient chlorine may indicate inadequate disinfection.",
    },
    purpose: {
      ar: "للتحقق من المحافظة على تركيز الكلور المطلوب للتعقيم، والتأكد من إزالته بشكل كافٍ قبل RO عند استخدام أغشية حساسة للكلور.",
      en: "To verify that the required chlorine concentration is maintained for disinfection and to ensure that chlorine is adequately removed before RO when chlorine-sensitive membranes are used.",
    },
    methodNo: "HACH 8021",
  },
  {
    id: "ammonia-nessler",
    image: images.equipment.Hach,
    category: waterCategories.spectrometer,
    title: "NH₃ – Ammonia in Water by Nessler",
    definition: {
      ar: "فحص لوني يُستخدم لتحديد تركيز الأمونيا/الأمونيوم في الماء باستخدام كاشف نسلر (Nessler).",
      en: "A colorimetric test used to determine the concentration of ammonia/ammonium in water using the Nessler reagent.",
    },
    why: {
      ar: "قد تؤثر التراكيز المرتفعة من الأمونيا على جودة الماء وتزيد من عبء المعالجة، وقد تساهم أيضًا في تكوّن مركبات نيتروجينية أخرى.",
      en: "High ammonia concentrations can affect water quality and increase the treatment load. Ammonia may also contribute to other nitrogen compounds.",
    },
    purpose: {
      ar: "لتحديد تركيز الأمونيا ومراقبة كفاءة المعالجة وجودة الماء بشكل عام.",
      en: "To determine ammonia concentration and monitor treatment efficiency and overall water quality.",
    },
    methodNo: "HACH 8038",
  },
  {
    id: "phosphate-water",
    image: images.equipment.Hach,
    category: waterCategories.spectrometer,
    title: "PO₄ – Phosphate in Water",
    definition: {
      ar: "فحص يُستخدم لتحديد تركيز مركبات الفوسفات، ويُعبَّر عنه غالبًا كـ PO₄ أو كفوسفور، حسب طريقة التحليل.",
      en: "A test used to determine the concentration of phosphate compounds, commonly reported as PO₄ or as phosphorus, depending on the analytical method.",
    },
    why: {
      ar: "قد تساهم التراكيز المرتفعة من الفوسفات في النمو البيولوجي أو تكوّن الترسبات حسب ظروف النظام، وقد يُستخدم الفوسفات أيضًا بشكل مقصود في بعض برامج معالجة المياه.",
      en: "High phosphate concentrations may contribute to biological growth or scale formation, depending on system conditions. Phosphate may also be intentionally used in some water-treatment programs.",
    },
    purpose: {
      ar: "لمراقبة تركيز أو جرعة الفوسفات والتأكد من بقائه عند المستوى المطلوب لعملية المعالجة.",
      en: "To monitor phosphate concentration or dosage and ensure that it remains at the required level for the treatment process.",
    },
    methodNo: "HACH 8114",
  },
  {
    id: "turbidity",
    image: images.equipment.Turb,
    category: waterCategories.spectrometer,
    title: { ar: "Turbidity", en: "Turbidity" },
    definition: {
      ar: "فحص يقيس عكارة الماء الناتجة عن الجزيئات العالقة والغروية التي تشتت الضوء.",
      en: "A test that measures the cloudiness of water caused by suspended and colloidal particles that scatter light.",
    },
    why: {
      ar: "قد تتسبب العكارة المرتفعة في انسداد الفلاتر وتلوث أغشية RO.",
      en: "High turbidity can cause filter blockage and RO membrane fouling.",
    },
    purpose: {
      ar: "لتقييم كفاءة الترشيح وتحديد كمية المواد العالقة الداخلة إلى مراحل المعالجة الحساسة.",
      en: "To evaluate filtration efficiency and determine the amount of suspended material entering sensitive treatment stages.",
    },
    methodNo: "ASTM 1889",
  },
  {
    id: "cod",
    image: images.equipment.cod,
    category: waterCategories.environmental,
    title: { ar: "COD – Chemical Oxygen Demand", en: "COD – Chemical Oxygen Demand" },
    definition: {
      ar: "فحص يقيس كمية الأكسجين المطلوبة للأكسدة الكيميائية للمواد العضوية وغيرها من المواد القابلة للأكسدة في الماء.",
      en: "A test that measures the amount of oxygen required to chemically oxidize organic and other oxidizable substances in water.",
    },
    why: {
      ar: "يشير ارتفاع COD إلى زيادة تركيز المواد القابلة للأكسدة، وبالتالي زيادة الحمل العضوي على نظام المعالجة.",
      en: "High COD indicates a higher concentration of oxidizable substances and therefore a higher organic load on the treatment system.",
    },
    purpose: {
      ar: "لقياس الحمل العضوي وتقييم كفاءة عمليات معالجة مياه الصرف والمياه المعالجة.",
      en: "To measure organic loading and evaluate the efficiency of wastewater and treated-water processes.",
    },
    methodNo: "ASTM 8000",
  },
  {
    id: "toc",
    image: images.equipment.TOC,
    category: waterCategories.environmental,
    title: { ar: "TOC – Total Organic Carbon", en: "TOC – Total Organic Carbon" },
    definition: {
      ar: "فحص يقيس إجمالي كمية الكربون الموجود في المركبات العضوية في الماء.",
      en: "A test that measures the total amount of carbon present in organic compounds in water.",
    },
    why: {
      ar: "يشير ارتفاع TOC إلى زيادة التلوث العضوي، وقد يؤثر على جودة المياه عالية النقاء وبعض العمليات الصناعية.",
      en: "High TOC indicates increased organic contamination and can affect high-purity water quality and certain industrial processes.",
    },
    purpose: {
      ar: "لمراقبة التلوث العضوي وتقييم نقاء الماء وأداء أنظمة معالجة المياه.",
      en: "To monitor organic contamination, evaluate water purity, and assess the performance of water-treatment systems.",
    },
    methodNo: "ASTM 4839",
  },
  {
    id: "ph",
    image: images.equipment.PH,
    category: waterCategories.electrometer,
    title: { ar: "pH", en: "pH" },
    definition: {
      ar: "قياس حموضة أو قلوية الماء بناءً على فعالية أيون الهيدروجين فيه.",
      en: "A measurement of the acidity or alkalinity of water based on its hydrogen-ion activity.",
    },
    why: {
      ar: "يؤثر pH على التآكل والترسبات وكفاءة المواد الكيميائية والتعقيم وعمليات المعالجة الكيميائية.",
      en: "pH affects corrosion, scaling, chemical efficiency, disinfection, and chemical-treatment processes.",
    },
    purpose: {
      ar: "للتأكد من بقاء الماء ضمن نطاق pH المطلوب، وحماية المعدات، وتحسين كفاءة المعالجة.",
      en: "To ensure that water remains within the required pH range, protect equipment, and optimize treatment efficiency.",
    },
    methodNo: "ASTM 1293B",
  },
  {
    id: "conductivity-water",
    image: images.equipment.Condv,
    category: waterCategories.electrometer,
    title: { ar: "Conductivity", en: "Conductivity" },
    definition: {
      ar: "قياس قدرة الماء على توصيل التيار الكهربائي، وترتبط بشكل أساسي بتركيز الأيونات الذائبة.",
      en: "A measurement of the ability of water to conduct electrical current, which is mainly related to the concentration of dissolved ions.",
    },
    why: {
      ar: "يشير ارتفاع التوصيلية إلى زيادة تركيز الأيونات والأملاح الذائبة في الماء.",
      en: "High conductivity indicates a higher concentration of dissolved ions and salts in water.",
    },
    purpose: {
      ar: "لمراقبة الأملاح الذائبة وتقييم أداء أنظمة RO وإزالة المعادن وDM وEDI.",
      en: "To monitor dissolved salts and evaluate the performance of RO, demineralization, DM, and EDI systems.",
    },
    methodNo: "ASTM 1125",
  },
  {
    id: "sodium-hydroxide",
    image: images.equipment.EDTA,
    category: waterCategories.titrometric,
    title: { ar: "NaOH – Sodium Hydroxide", en: "NaOH – Sodium Hydroxide" },
    definition: {
      ar: "فحص يُستخدم لتحديد أو التحقق من تركيز هيدروكسيد الصوديوم (NaOH)، وهو مادة قلوية قوية تُستخدم في معالجة المياه والتنظيف الكيميائي.",
      en: "A test used to determine or verify the concentration of sodium hydroxide (NaOH), a strong alkaline chemical used in water treatment and chemical cleaning.",
    },
    why: {
      ar: "قد تتسبب الجرعات الزائدة من NaOH في ارتفاع pH والقلوية، وربما مشاكل تشغيلية أو تآكلية حسب النظام.",
      en: "Excessive NaOH dosing can cause high pH, high alkalinity, and potential operational or corrosion-related problems, depending on the system.",
    },
    purpose: {
      ar: "للتحقق من تركيز NaOH المستخدم في معالجة المياه أو التنظيف الكيميائي، والتحكم في الجرعة الكيميائية المطلوبة.",
      en: "To verify the concentration of NaOH used for water treatment or chemical cleaning and to control the required chemical dosage.",
    },
    methodNo: "ASTM 514",
  },
  {
    id: "alkalinity",
    image: images.equipment.HSO44,
    category: waterCategories.titrometric,
    title: { ar: "Alkalinity", en: "Alkalinity" },
    definition: {
      ar: "قياس لقدرة الماء على معادلة الأحماض، وترتبط أساسًا بأيونات البيكربونات والكربونات والهيدروكسيد.",
      en: "A measurement of the water's capacity to neutralize acids, mainly due to bicarbonate, carbonate, and hydroxide ions.",
    },
    why: {
      ar: "قد تزيد القلوية المرتفعة من احتمالية تكوّن بعض أنواع الترسبات، وتؤثر على كيمياء الماء بشكل عام.",
      en: "High alkalinity may increase the potential for certain types of scale formation and affects overall water chemistry.",
    },
    purpose: {
      ar: "لتحديد كمية الحمض اللازمة للمعادلة، ومراقبة كيمياء الماء والتحكم في المعالجة.",
      en: "To determine the amount of acid required for neutralization and to monitor water chemistry and treatment control.",
    },
    methodNo: "APHA 403",
  },
  {
    id: "calcium-hardness",
    image: images.equipment.EDTA,
    category: waterCategories.titrometric,
    title: { ar: "Calcium Hardness", en: "Calcium Hardness" },
    definition: {
      ar: "فحص يُستخدم لتحديد تركيز أيونات الكالسيوم (Ca²⁺) المساهمة في عسر الماء.",
      en: "A test used to determine the concentration of calcium ions (Ca²⁺) contributing to water hardness.",
    },
    why: {
      ar: "يزيد عسر الكالسيوم المرتفع من خطر تكوّن ترسبات الكالسيوم، مثل كربونات الكالسيوم، خصوصًا عند ارتفاع pH والقلوية.",
      en: "High calcium hardness increases the risk of calcium scale formation, such as calcium carbonate, particularly at high pH and alkalinity.",
    },
    purpose: {
      ar: "لتحديد عسر الكالسيوم وتقييم احتمالية تكوّن الترسبات، ومراقبة كفاءة عمليات تنقية وتليين المياه.",
      en: "To determine calcium hardness, assess scaling potential, and monitor the efficiency of water-softening and treatment processes.",
    },
    methodNo: "HACH 8222",
  },
  {
    id: "chloride-water",
    image: images.equipment.Choride_Low,
    category: waterCategories.titrometric,
    title: { ar: "Chloride – Cl⁻", en: "Chloride – Cl⁻" },
    definition: {
      ar: "فحص يُستخدم لتحديد تركيز أيونات الكلوريد (Cl⁻) الذائبة في الماء.",
      en: "A test used to determine the concentration of chloride ions (Cl⁻) dissolved in water.",
    },
    why: {
      ar: "يزيد ارتفاع الكلوريد من خطر التآكل، خصوصًا لبعض المعادن، كما قد يشير ارتفاعه بعد RO إلى ضعف كفاءة إزالة الأملاح.",
      en: "High chloride levels increase the risk of corrosion, particularly for certain metals. Increased chloride after RO may also indicate reduced salt-removal efficiency.",
    },
    purpose: {
      ar: "لمراقبة الأملاح الذائبة، وتقييم خطر التآكل، وتقييم أداء أنظمة RO أو إزالة الأيونات.",
      en: "To monitor dissolved salts, assess corrosion risk, and evaluate RO or deionization performance.",
    },
    methodNo: "HACH 8225",
  },
  {
    id: "bisulfite",
    image: images.equipment.Chloride_hight,
    category: waterCategories.titrometric,
    title: { ar: "HSO₃⁻ – Bisulfite", en: "HSO₃⁻ – Bisulfite" },
    definition: {
      ar: "فحص يُستخدم لتحديد تركيز أيونات البيسلفيت (HSO₃⁻)، والتي تُستخدم غالبًا كعامل مختزل لإزالة الكلور.",
      en: "A test used to determine the concentration of bisulfite ions (HSO₃⁻), commonly used as a reducing agent for chlorine removal.",
    },
    why: {
      ar: "يُستخدم البيسلفيت عادة لإزالة الكلور الحر قبل RO؛ فنقصه قد يؤدي إلى إزالة غير كاملة للكلور، بينما تشير زيادته إلى معالجة مفرطة.",
      en: "Bisulfite is commonly used to remove free chlorine before RO. Insufficient bisulfite may result in incomplete chlorine removal, while excessive dosing indicates over-treatment.",
    },
    purpose: {
      ar: "للتحقق من توفر تركيز كافٍ من البيسلفيت لإزالة الكلور وحماية أغشية RO.",
      en: "To verify that an adequate bisulfite concentration is available to remove chlorine and protect RO membranes.",
    },
    methodNo: "APHA 428A",
  },
];

/* ============================ LAB SECTIONS ============================= */
/* The six top-level laboratory sections shown on the "Sections" screen. */
const laboratorySections = [
  {
  id: "water",
    title: { ar: "قسم الماء", en: "Water Section" },
    description: {
      ar: "فحوصات وتحاليل عينات المياه المرتبطة بالعمليات البترولية.",
      en: "Tests and analyses of water samples associated with petroleum operations.",
    },
    image: images.sections.water,
    available: true,
    categories: [
      waterCategories.spectrometer,
      waterCategories.environmental,
      waterCategories.electrometer,
      waterCategories.titrometric,
    ],
    equipment: waterEquipment,
  },
  {
    id: "crude",
 title: { ar: "قسم الهايدروكاربون", en: "Hydrocarbon Section" },
 description: {
      ar: "فحوصات الهايدروكاربون والنفط الخام والأسفلت لتقييم خصائص العينات وجودتها ومطابقتها للمواصفات.",
      en: "Hydrocarbon, crude oil, and asphalt testing to evaluate sample properties, quality, and compliance with specifications.",
    },
    image: images.sections.crude,
    available: true,
    categories: [hydrocarbonSectionCategory],
    equipment: hydrocarbonSectionEquipment,
  },
  {
    id: "hydrocarbon",
    title: { ar: "قسم النفط الخام والأسفلت", en: "Crude Oil & Asphalt Section" },
    description: {
      ar: "قسم متخصص في فحوصات النفط الخام والأسفلت لتقييم خصائص العينات وجودتها والتأكد من مطابقتها للمواصفات المطلوبة.",
      en: "A specialized section for crude oil and asphalt testing to evaluate sample properties, quality, and compliance with required specifications.",
    },
    image: images.sections.hydrocarbon,
    available: true,
    categories: [
      hydrocarbonCategories.crude,
      hydrocarbonCategories.asphalt,
    ],
    equipment: hydrocarbonEquipment,
  },
    {
  id: "physical",
    title: { ar: "قسم الفيزكال", en: "Physical Section" },
    description: {
      ar: "يساهم قسم الفيزكال في التحقق من جودة وسلامة المنتجات البترولية قبل تخزينها أو نقلها أو استخدامها.",
      en: "The Physical Section contributes to verifying the quality and safety of petroleum products before storage, transportation, or use.",
    },
    image: images.sections.physical,
    available: true,
    categories: [physicalCategory, uopCategory],
    equipment: physicalEquipment,
  },
  {
id: "chemical",
    title: { ar: "قسم الكيميكال", en: "Chemical Section" },
    description: {
      ar: "الفحوصات والتحاليل الكيميائية للعينات البترولية والمواد المرتبطة بها.",
      en: "Chemical testing and analysis of petroleum samples and related materials.",
    },
    image: images.sections.chemical,
    available: true,
    categories: [chemicalCategory],
    equipment: chemicalEquipment,
  },
  {
      id: "gas",
    title: { ar: "قسم الغاز", en: "Gas Section" },
    description: {
      ar: "تحليل عينات الغاز والمنتجات البترولية الخفيفة باستخدام أجهزة كروماتوغرافيا الغاز لتحديد التركيب ونسب المكونات.",
      en: "Analysis of gas samples and light petroleum products using gas chromatography instruments to determine composition and component ratios.",
    },
    image: images.sections.gas,
    available: true,
    categories: [gasCategory, lpgTestsCategory],
    equipment: gasEquipment,
  },
  {
   id: "RonMon",
    title: { ar: "قسم الأوكتان", en: "Octane Section" },
    description: {
      ar: "قسم مخصص لفحوصات RON وMON لتقييم أداء الوقود ومقاومته للطرق والتأكد من مطابقته للمواصفات.",
      en: "A dedicated section for RON and MON testing to evaluate fuel performance, knock resistance, and compliance with specifications.",
    },
    image: images.sections.Octain,
    available: true,
    categories: [RonMonCategory,],
    equipment: RonMonEquipment,
  },
  {
    id: "chemical-preparation",
    title: {
        ar: "قسم تحضير المحاليل",
        en: "Chemical Preparation Section"
    },
    description: {
        ar: "القسم المختص بتحضير المحاليل والكواشف المستخدمة في الفحوصات المخبرية.",
        en: "The section responsible for preparing solutions and reagents used in laboratory testing."
    },
    image: images.sections.chemicalPrepration,
    available: true,
    categories: [chemicalPreparationCategory],
    equipment: chemicalPreparationEquipment
},
];

/* Expose top-level content objects on window explicitly: this file is
   loaded as a plain <script>, and `const`/`let` at the top level does
   NOT attach to `window` the way `var` does. app.js resolves data-i18n
   paths like "ui.hero.title" via window lookup, so this registration
   step is required. */
window.ui = ui;
window.images = images;
window.safetyCards = safetyCards;
window.labStorageAreas = labStorageAreas;
window.laboratorySections = laboratorySections;