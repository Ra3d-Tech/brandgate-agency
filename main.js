/**
 * ========================================================================
 * BrandGate Agency - Modern Luxury Architecture Core Engine
 * 100% Synchronized with index.html
 * Features:
 *   - Complete Bilingual Translation (Pure Arabic & Pure English)
 *   - Eastern Arabic (٠-٩) <-> Western (0-9) Digits Engine
 *   - Interactive Animated Numbers on Scroll
 *   - Dynamic Video Lightbox Modal (Reels 9:16 & Cinema 16:9)
 *   - Professional Corporate WhatsApp Dispatcher (Zero Language Mixing)
 *   - Dark & Light Mode Controller with Inline SVG Support
 *   - Smooth 3D Card Tilt & Mouse Spotlight Glow (#cursorGlow)
 * ========================================================================
 */

'use strict';

/**
 * ------------------------------------------------------------------------
 * 1. Number Localization Utility (٠-٩ / 0-9)
 * ------------------------------------------------------------------------
 */
const DIGITS = {
  ar: ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'],
  en: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
};

function localizeNumberString(str, lang = 'ar') {
  if (str === null || str === undefined) return '';
  const s = String(str);
  if (lang === 'ar') {
    return s.replace(/[0-9]/g, (d) => DIGITS.ar[+d]);
  } else {
    return s.replace(/[٠-٩]/g, (ch) => {
      const idx = DIGITS.ar.indexOf(ch);
      return idx !== -1 ? DIGITS.en[idx] : ch;
    });
  }
}

/**
 * ------------------------------------------------------------------------
 * 2. Full Bilingual Dictionary
 * ------------------------------------------------------------------------
 */
const i18nData = {
  ar: {
    nav: {
      home: 'الرئيسية',
      about: 'من نحن',
      strengths: 'نقاط قوتنا',
      services: 'الخدمات',
      portfolio: 'الأعمال',
      performance: 'الأداء والتقنية',
      contact: 'تواصل معنا'
    },
    hero: {
      tag: 'الوكالة الأولى الرائدة في التسويق والنمو الرقمي في الإمارات',
      title: 'بناء علامات تجارية جريئة تأسر الأنظار وتوقف التمرير',
      subtitle: 'استراتيجيات | مقاطع ريلز | إعلانات ممولة | بناء الهوية | إدارة التواصل',
      desc: 'براند جيت: مرحباً بك في عصر الريادة الرقمية. ندمج التحليلات المتقدمة مع الإنتاج السينمائي لنبني لعلامتك التجارية حضوراً استثنائياً في دبي والخليج يحول الجمهور إلى عملاء دائمين.',
      cta: 'راسلنا لتنمية علامتك التجارية',
      explore: 'استكشف أعمالنا',
      liveTag: 'إبداع دبي ٢٠٢٦',
      videoTitle: 'علامتك التجارية، لوحتنا الإبداعية',
      videoSub: 'معادلة نجاح المشاريع الرائدة في دولة الإمارات'
    },
    about: {
      tag: 'من نحن وفلسفة العمل',
      quote: '"لبناء علامة تجارية قوية، تكفيك فكرة ملهمة. نحن نقدم لك الاختلاف، من أجلك وحدك. قصة لا تشبه غيرها."',
      lead: 'معادلة المشاريع الرائدة في الإمارات: مرحباً بكم في براند جيت، وكالة التسويق المتطورة في دبي. نجمع بين التفكير الإبداعي والخبرة الاستراتيجية والفهم العميق للأسواق لتمكين عملائنا من التفوق والنمو في بيئة تنافسية لا ترحم.',
      p1: {
        title: 'طرق غير تقليدية',
        desc: 'تحويل الأفكار الاستثنائية إلى واقع حي لصناعة سرد فريد للعلامة التجارية يختلف كلياً عن السائد ويترك بصمة خالدة في الذاكرة.',
        tag: 'ابتكار بلا حدود'
      },
      p2: {
        title: 'نهج فريد ومخصص',
        desc: 'ابتكار أسلوب مخصص يلبي تطلعاتك بدقة ويقدم حلولاً متكاملة لتأسيس علامة تجارية تعيش وتكبر باستمرار عبر الزمن.',
        tag: 'حلول مخصصة لكل علامة'
      },
      p3: {
        title: 'تنفيذ متقن ودقيق',
        desc: 'بتكاتف فريقنا الإبداعي، نصل إلى أعلى درجات الإتقان مع استثمار كل ثانية بدقة دون أي إهدار للوقت أو الميزانيات.',
        tag: 'دقة وسرعة قصوى'
      },
      teamBadge: 'فريق الإبداع في دبي',
      teamTitle: 'حيث تلتقي الرؤية الجريئة مع التنفيذ الاحترافي',
      teamDesc: 'فريقنا متعدد الخبرات من استراتيجيين، مخرجين سينمائيين، وخبراء نمو إعلاني يعيدون رسم ملامح التسويق الرقمي من قلب الإمارات لخدمة الأسواق الخليجية والعالمية.'
    },
    strengths: {
      tag: 'نقاط قوتنا',
      title: 'ما الذي يميز براند جيت ويجعلها فريدة؟',
      subtitle: 'الركائز الأساسية الثلاث التي تدير محرك نجاحنا ونجاح عملائنا في كل خطوة.',
      s1: {
        title: 'نقدر قيمة الأفكار',
        desc: 'نتبنى ثقافة الإبداع ونشجع التفكير الابتكاري والتمكين والتعاون المثمر، لنحول الأفكار الجريئة إلى حلول استثنائية تصنع فارقاً حقيقياً لعملائنا.'
      },
      s2: {
        title: 'لا حدود لطموحنا',
        desc: 'بعقلية متحررة ونهج شجاع لا يخشى التحديات، نكسر القوالب المعتادة ونعيد تعريف ما يمكن تحقيقه لتحقيق نجاحات كاسحة تتجاوز كل التوقعات.'
      },
      s3: {
        title: 'تطور مستمر بلا توقف',
        desc: 'في صدارة الابتكار الرقمي، نتحدى النمطية ونتطور باستمرار لنعيد رسم معايير التميز في كل مرحلة من مراحل النمو.'
      }
    },
    services: {
      tag: 'الخدمات والخبرات',
      title: 'حلول متكاملة لهيمنة علامتك التجارية',
      subtitle: 'منظومة تسويقية متكاملة تغطي كل زاوية من زوايا النمو والانتشار والمبيعات.',
      s1: {
        title: 'استراتيجيات العلامات التجارية الرقمية',
        desc: 'تحديد التموضع التنافسي وصياغة صوت العلامة ورسم خرائط طريق دقيقة لاختراق الأسواق وتصدر مجالك.',
        t1: 'تحديد التموضع',
        t2: 'خطط النمو'
      },
      s2: {
        title: 'صناعة الفيديوهات ومقاطع الريلز',
        desc: 'إنتاج محتوى فيديو قصير يخطف الانتباه في أول ثانيتين، مع إخراج سينمائي مواكب لخوارزميات المنصات.',
        t1: 'خطافات جذابة',
        t2: 'تصوير سينمائي'
      },
      s3: {
        title: 'الإعلانات الممولة وجذب المبيعات',
        desc: 'حملات إعلانية مدفوعة بالبيانات والأرقام لتحقيق أعلى عائد على الإنفاق الإعلاني ومضاعفة الأرباح.',
        t1: 'عائد استثماري مضاعف',
        t2: 'عملاء محتملون'
      },
      s4: {
        title: 'تصميم وتطوير الهوية البصرية',
        desc: 'ابتكار هويات بصرية فاخرة تشمل الشعار ونظام الألوان ودليل الهوية الكامل الذي يعكس هيبة العلامة وقوتها.',
        t1: 'هوية بصرية',
        t2: 'دليل الهوية'
      },
      s5: {
        title: 'إدارة وسائل التواصل الاجتماعي',
        desc: 'إشراف يومي على صناعة وجدولة المحتوى، التفاعل الاحترافي مع المتابعين، وبناء مجتمع مخلص لعلامتك.',
        t1: 'إدارة المجتمعات',
        t2: 'خطة نشر شهرية'
      },
      s6: {
        title: 'التسويق عبر محركات البحث',
        desc: 'استهداف نية الشراء المباشرة عبر إعلانات محركات البحث لجذب عملاء يبحثون عن خدماتك ومستعدين للتعاقد فوراً.',
        t1: 'إعلانات البحث',
        t2: 'استهداف مباشر'
      },
      s7: {
        title: 'تحسين محركات البحث',
        desc: 'تصدر النتائج المجانية الأولى في محركات البحث لبناء حركة زيارات مستمرة ذات جودة عالية بدون تكلفة لكل نقرة.',
        t1: 'المرتبة الأولى',
        t2: 'زيارات مجانية'
      },
      s8: {
        title: 'كتابة النصوص الإعلانية وتطوير المنصات',
        desc: 'صياغة نصوص بيعية تأسر المشاعر وتحفز اتخاذ القرار، مع بناء مواقع سريعة فائقة الأداء تحول الزوار إلى عملاء.',
        t1: 'سرد قصصي مؤثر',
        t2: 'برمجة متطورة'
      }
    },
    cinema: {
      quote: '"أنت هو المنتج نفسه. عندما تجعلهم يشعرون بشيء ما، فهذا هو ما يبيع حقاً."',
      author: '– دون دريبر',
      sub: 'الخيار المفضل لكبرى الشركات العالمية والمؤسسات الناشئة الطموحة. ضاعف مبيعاتك وتفاعل جمهورك معنا بحلولنا المدعومة بالبيانات.',
      btn: 'ابدأ مشروعك معنا الآن'
    },
    portfolio: {
      tag: 'سابقة الأعمال والمحتوى المميز',
      title: 'أعمال صنعت فارقاً حقيقياً في السوق',
      subtitle: 'اضغط على أي عمل لتشغيل الفيديو فوراً في نافذة العرض السينمائية.',
      p1: {
        badge: 'عرض ريلز',
        cat: 'إنتاج محتوى فيديو وسينما',
        title: 'مشروع محتوى: يوم طبيعي بشركتنا',
        desc: 'سلسلة مقاطع عفوية كشفت كواليس بيئة العمل وأظهرت الجانب الإنساني للعلامة، وحققت انتشاراً واسعاً وملايين المشاهدات في وقت قياسي.',
        link: 'شاهد الفيديو الآن ←'
      },
      p2: {
        badge: 'دراسة حالة',
        cat: 'حملات تحويل وسرد قصصي',
        title: 'مشروع محتوى: عميل فاقد الأمل',
        desc: 'حملة سرد قصصي ملهمة خاطبت مخاوف العملاء الواقعية وحولتها إلى دافع شراء مؤكد وقوة جذب تسويقية ضخمة.',
        link: 'شاهد الفيديو الآن ←'
      },
      p3: {
        badge: 'هوية تجارية',
        cat: 'هوية بصرية متكاملة',
        title: 'مشروع الهوية: من فكرة إلى هوية - قطاف',
        desc: 'رحلة تحويل فكرة تجارية طموحة إلى هوية خليجية أصيلة وفاخرة تبرز في سوق تنافسي شرس مع بناء دليل الهوية وتطبيقاتها.',
        link: 'شاهد استعراض الهوية ←'
      }
    },
    perf: {
      brand1: 'براند جيت',
      brand2: 'تقنيات رعد للأداء الفائق',
      title: 'معمارية تقنية فائقة وأداء لا يقبل المساومة',
      subtitle: 'تمت برمجة وتطوير هذه المنصة خصيصاً بمعايير هندسية متقدمة تحقق أقصى درجات السرعة والأمان والتجاوب.',
      c1: {
        unit: 'ثانية',
        title: 'سرعة تحميل خارقة (أقل من ثانية واحدة)',
        desc: 'تحميل فوري للصفحات والمحتوى لتحقيق أفضل تجربة تصفح وأعلى معدلات تحويل للعملاء.'
      },
      c2: {
        title: 'أمان متقدم وحماية تامة للبيانات',
        desc: 'طبقات حماية متطورة وتشفير كامل لكافة الاتصالات والبيانات الصادرة والواردة.'
      },
      c3: {
        title: 'كود برمجي نقي وقابل للتوسع اللامحدود',
        desc: 'هندسة برمجية نموذجية بدون شوائب أو مكتبات زائدة، تضمن مرونة تامة لاستيعاب مئات الآلاف من الزوار.'
      }
    },
    contact: {
      tag: 'تواصل معنا',
      title: 'انضم إلينا اليوم، فنحن نصنع الفارق دائماً.',
      desc: 'تواصل مباشرة مع فريق قيادة الاستراتيجيات في دبي لمناقشة أهدافك وبدء العمل على مشروعك القادم.',
      locLabel: 'المقر الرئيسي',
      locVal: 'دبي - الإمارات العربية المتحدة',
      emailLabel: 'البريد الإلكتروني',
      phoneLabel: 'الهواتف والواتساب المباشر',
      socialLabel: 'تابعنا وتواصل معنا عبر:',
      formTitle: 'ابدأ مشروعك الآن',
      formSubtitle: 'أرسل لنا متطلباتك وسنرد عليك خلال ساعات معدودة.',
      nameLabel: 'الاسم الكامل أو اسم الشركة *',
      contactLabel: 'رقم الهاتف أو البريد الإلكتروني *',
      serviceLabel: 'الخدمة المطلوبة *',
      optAll: 'باقة النمو المتكامل',
      optStrat: 'استراتيجيات العلامات التجارية',
      optReels: 'صناعة الفيديوهات والريلز',
      optAds: 'الإعلانات الممولة وجذب المبيعات',
      optBrand: 'تصميم وتطوير الهوية البصرية',
      optSmm: 'إدارة وسائل التواصل الاجتماعي',
      optSeo: 'تحسين وتصدر محركات البحث',
      msgLabel: 'تفاصيل مشروعك أو فكرتك',
      sendBtn: 'إرسال الرسالة عبر الواتساب فوراً'
    },
    social: {
      ig: 'إنستغرام',
      tk: 'تيك توك',
      li: 'لينكد إن',
      fb: 'فيسبوك',
      th: 'ثريدز',
      wa: 'واتساب'
    },
    footer: {
      copy: '© ٢٠٢٦ وكالة براند جيت. جميع الحقوق محفوظة. | دبي، الإمارات.',
      creditPrefix: 'تم التصميم والبرمجة بمعمارية هندسية فائقة بواسطة '
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About Us',
      strengths: 'Strengths',
      services: 'Services',
      portfolio: 'Portfolio',
      performance: 'Performance',
      contact: 'Contact Us'
    },
    hero: {
      tag: 'Leading Marketing & Digital Growth Powerhouse in UAE',
      title: 'Building bold, scroll stopping brands',
      subtitle: 'Strategies | Cinematic Reels | Paid Ads | Identity Systems | Social Media',
      desc: 'BrandGate: Welcome to the future of digital leadership. We fuse advanced audience analytics with cinema-grade production to build an unforgettable market presence in Dubai and the GCC that transforms visitors into loyal clients.',
      cta: 'Message Us to Scale Your Brand',
      explore: 'Explore Our Work',
      liveTag: 'Dubai Creativity 2026',
      videoTitle: 'Your Brand, Our Cinematic Canvas',
      videoSub: 'The growth formula for premier enterprises in the UAE'
    },
    about: {
      tag: 'About Us & Philosophy',
      quote: '"To build a powerful brand, an inspiring idea is just the start. We deliver true distinction crafted exclusively for you. A story unlike any other."',
      lead: 'The formula for leading UAE ventures: Welcome to BrandGate, the forward-thinking creative agency in Dubai. We combine bold creative vision, strategic rigor, and deep market fluency to empower our clients to dominate competitive arenas.',
      p1: {
        title: 'Unconventional Thinking',
        desc: 'Translating visionary concepts into living brand narratives that break conventional molds and leave enduring impressions.',
        tag: 'Boundless Innovation'
      },
      p2: {
        title: 'Bespoke Strategy',
        desc: 'Crafting tailored frameworks that align precisely with your goals and establish an identity engineered for sustained market expansion.',
        tag: 'Custom Brand Solutions'
      },
      p3: {
        title: 'Flawless Execution',
        desc: 'Our unified creative collective achieves the highest echelon of craftsmanship, maximizing every second without wasted resources.',
        tag: 'Peak Precision & Speed'
      },
      teamBadge: 'Dubai Creative Collective',
      teamTitle: 'Where Bold Vision Meets Surgical Execution',
      teamDesc: 'Our multidisciplinary team of brand strategists, commercial directors, and performance specialists redefines digital marketing from Dubai to the world.'
    },
    strengths: {
      tag: 'Our Strengths',
      title: 'What Sets BrandGate Apart?',
      subtitle: 'The three foundational pillars driving our relentless momentum and client success at every stage.',
      s1: {
        title: 'We Value Bold Ideas',
        desc: 'We cultivate an open creative culture, championing inventive thinking and empowered collaboration to transform ambitious ideas into market advantages.'
      },
      s2: {
        title: 'Boundless Ambition',
        desc: 'With a fearless mindset, we shatter standard templates and continually redefine what is possible to deliver results that exceed expectations.'
      },
      s3: {
        title: 'Relentless Evolution',
        desc: 'At the frontier of digital innovation, we challenge routine and evolve constantly to raise industry benchmarks at every touchpoint.'
      }
    },
    services: {
      tag: 'Services & Capabilities',
      title: 'Integrated Solutions for Market Dominance',
      subtitle: 'A full-funnel marketing ecosystem covering positioning, cinema production, paid media, and revenue acceleration.',
      s1: {
        title: 'Digital Brand Strategy',
        desc: 'Defining market positioning, brand voice, and surgical roadmaps to penetrate competitive sectors and establish market authority.',
        t1: 'Market Positioning',
        t2: 'Growth Roadmaps'
      },
      s2: {
        title: 'Cinematic Video & Reels Production',
        desc: 'Short-form visual content that hooks attention in under two seconds, directed with cinematic precision tailored to platform algorithms.',
        t1: 'Scroll-Stopping Hooks',
        t2: 'Cinema Production'
      },
      s3: {
        title: 'Performance Marketing & Paid Ads',
        desc: 'Data-driven paid media campaigns engineered to maximize Return on Ad Spend (ROAS) and scale profitable customer acquisition.',
        t1: 'Multiplying ROAS',
        t2: 'Qualified Inbound Leads'
      },
      s4: {
        title: 'Visual Identity Design & Systems',
        desc: 'Crafting luxury corporate identities including logos, color hierarchies, and comprehensive brand books reflecting true prestige.',
        t1: 'Visual Identity',
        t2: 'Brand Guidelines'
      },
      s5: {
        title: 'Social Media Growth & Management',
        desc: 'Daily content scheduling, community moderation, and strategic distribution that fosters genuine brand advocates.',
        t1: 'Community Building',
        t2: 'Monthly Publishing'
      },
      s6: {
        title: 'Search Engine Advertising (SEM)',
        desc: 'Capturing high-intent buyers searching directly for your solutions through precision Google Search and display ads.',
        t1: 'Search Ads',
        t2: 'Direct Intent Targeting'
      },
      s7: {
        title: 'Search Engine Optimization (SEO)',
        desc: 'Ranking on page one organically to build a sustained, compounding stream of high-value inbound traffic without click costs.',
        t1: 'Top Page Ranking',
        t2: 'Organic Acquisition'
      },
      s8: {
        title: 'Direct-Response Copy & Web Platforms',
        desc: 'Writing emotionally resonant copy paired with ultra-fast modern web applications engineered to convert visitors into clients.',
        t1: 'Persuasive Storytelling',
        t2: 'Modern Engineering'
      }
    },
    cinema: {
      quote: '"You are the product. When you make them feel something, that is what truly sells."',
      author: '– Don Draper',
      sub: 'The preferred creative partner for premier international brands and fast-growing enterprises. Accelerate your market reach with our data-backed solutions.',
      btn: 'Start Your Project Now'
    },
    portfolio: {
      tag: 'Portfolio & Highlighted Work',
      title: 'Work That Created Real Market Impact',
      subtitle: 'Click any project to instantly launch full video playback in our cinema modal.',
      p1: {
        badge: 'Reels Showcase',
        cat: 'Video & Cinema Production',
        title: 'Content Series: A Day at Our Agency',
        desc: 'A vibrant behind-the-scenes series showcasing the human side of the team, racking up millions of views and viral engagement.',
        link: 'Watch Video Now →'
      },
      p2: {
        badge: 'Case Study',
        cat: 'Conversion & Storytelling Campaigns',
        title: 'Narrative Series: The Skeptical Client',
        desc: 'An inspiring storytelling campaign that addressed real customer objections and transformed hesitation into confident sales momentum.',
        link: 'Watch Video Now →'
      },
      p3: {
        badge: 'Brand Identity',
        cat: 'Complete Visual Identity',
        title: 'Identity Project: From Concept to Icon - Qitaf',
        desc: 'The journey of turning a visionary retail concept into an authentic Gulf brand identity that stands tall in a demanding market.',
        link: 'Explore Brand Case →'
      }
    },
    perf: {
      brand1: 'BrandGate',
      brand2: 'Ra3d Ultra Architecture',
      title: 'Supreme Technical Architecture & Peak Performance',
      subtitle: 'Engineered from the ground up for maximum speed, security, and instantaneous mobile responsiveness.',
      c1: {
        unit: 's',
        title: 'Lightning Load Speed (Under 1 Second)',
        desc: 'Instant page delivery ensuring optimal user experience and peak conversion rates.'
      },
      c2: {
        title: 'Military-Grade Security & Privacy',
        desc: 'Advanced protection layers with full encryption across all inbound and outbound data streams.'
      },
      c3: {
        title: 'Pure Scalable Codebase',
        desc: 'Clean modular engineering without unnecessary dependencies, built to easily handle hundreds of thousands of concurrent visitors.'
      }
    },
    contact: {
      tag: 'Contact Us',
      title: 'Join Us Today. We Always Make The Difference.',
      desc: 'Connect directly with our strategy leadership in Dubai to discuss your milestones and kick off your next initiative.',
      locLabel: 'Headquarters',
      locVal: 'Dubai - United Arab Emirates',
      emailLabel: 'Direct Email',
      phoneLabel: 'Direct Phone & WhatsApp',
      socialLabel: 'Follow & Connect With Us:',
      formTitle: 'Start Your Project Now',
      formSubtitle: 'Send us your brief and we will reply within a few hours.',
      nameLabel: 'Full Name or Company Name *',
      contactLabel: 'Phone Number or Email Address *',
      serviceLabel: 'Selected Capability *',
      optAll: 'All-In-One Brand Growth Suite',
      optStrat: 'Digital Brand Strategy',
      optReels: 'Video & Reels Production',
      optAds: 'Paid Ads & Lead Generation',
      optBrand: 'Visual Identity Design',
      optSmm: 'Social Media Management',
      optSeo: 'SEO & Search Engine Marketing',
      msgLabel: 'Project Brief or Overview',
      sendBtn: 'Send Message via WhatsApp Instantly'
    },
    social: {
      ig: 'Instagram',
      tk: 'TikTok',
      li: 'LinkedIn',
      fb: 'Facebook',
      th: 'Threads',
      wa: 'WhatsApp'
    },
    footer: {
      copy: '© 2026 BrandGate Agency. All rights reserved. | Dubai, UAE.',
      creditPrefix: 'Designed and engineered with supreme architecture by '
    }
  }
};

/**
 * ------------------------------------------------------------------------
 * 3. BrandGate Core Application Class
 * ------------------------------------------------------------------------
 */
class BrandGateCore {
  constructor() {
    this.currentLang = localStorage.getItem('bg_lang') || 'ar';
    this.currentTheme = localStorage.getItem('bg_theme') || 'dark';

    // Elements matching index.html
    this.html = document.documentElement;
    this.siteHeader = document.getElementById('siteHeader');
    this.navMenu = document.getElementById('navMenu');
    this.mobileMenuBtn = document.getElementById('mobileMenuBtn');
    this.langToggle = document.getElementById('langToggle');
    this.langLabel = document.getElementById('langLabel');
    this.themeToggle = document.getElementById('themeToggle');
    this.cursorGlow = document.getElementById('cursorGlow');
    this.marqueeTrack = document.getElementById('marqueeTrack');

    // Video Modal Elements
    this.videoModal = document.getElementById('videoModal');
    this.videoModalContainer = document.getElementById('videoModalContainer');
    this.videoModalTitle = document.getElementById('videoModalTitle');
    this.closeModalBtn = document.getElementById('closeModalBtn');
    this.modalVideoPlayer = document.getElementById('modalVideoPlayer');

    // Contact Form
    this.contactForm = document.getElementById('contactForm');

    this.countersTriggered = false;

    this.init();
  }

  init() {
    this.applyTheme(this.currentTheme);
    this.applyLanguage(this.currentLang);
    this.buildMarquee();
    this.bindEvents();
    this.setupCursorGlow();
    this.setup3DTilt();
    this.setupScrollInteractions();
  }

  /**
   * Language Switcher & Localization
   */
  applyLanguage(lang) {
    this.currentLang = lang;
    localStorage.setItem('bg_lang', lang);

    this.html.setAttribute('lang', lang);
    this.html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    if (this.langLabel) {
      this.langLabel.textContent = lang === 'ar' ? 'EN' : 'عربي';
    }

    // 1. Translate data-i18n items
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const val = this.resolveKey(lang, key);
      if (val !== undefined) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = val;
        } else {
          el.textContent = val;
        }
      }
    });

    // 2. Localize all section & badge numbers (٠١ ⇋ 01)
    document.querySelectorAll('.pillar-number, .service-idx').forEach((badge) => {
      const original = badge.getAttribute('data-origin-num') || badge.textContent.trim();
      if (!badge.hasAttribute('data-origin-num')) {
        badge.setAttribute('data-origin-num', original);
      }
      badge.textContent = localizeNumberString(original, lang);
    });

    // 3. Update Performance counters with language digits
    this.updateCountersDisplay(lang);

    // 4. Update Marquee words
    this.buildMarquee();
  }

  toggleLanguage() {
    this.applyLanguage(this.currentLang === 'ar' ? 'en' : 'ar');
  }

  resolveKey(lang, path) {
    const keys = path.split('.');
    let obj = i18nData[lang];
    for (const k of keys) {
      if (obj && typeof obj === 'object' && k in obj) {
        obj = obj[k];
      } else {
        return undefined;
      }
    }
    return obj;
  }

  /**
   * Theme Switcher (Dark / Light)
   */
  applyTheme(theme) {
    this.currentTheme = theme;
    localStorage.setItem('bg_theme', theme);
    this.html.setAttribute('data-theme', theme);

    if (this.themeToggle) {
      const sun = this.themeToggle.querySelector('.sun-icon');
      const moon = this.themeToggle.querySelector('.moon-icon');
      if (sun && moon) {
        if (theme === 'dark') {
          sun.style.display = 'block';
          moon.style.display = 'none';
        } else {
          sun.style.display = 'none';
          moon.style.display = 'block';
        }
      }
    }
  }

  toggleTheme() {
    this.applyTheme(this.currentTheme === 'dark' ? 'light' : 'dark');
  }

  /**
   * Marquee Content
   */
  buildMarquee() {
    if (!this.marqueeTrack) return;
    const isAr = this.currentLang === 'ar';
    const items = isAr ? [
      'تصميم هويات فاخرة', 'إنتاج سينمائي', 'إعلانات رقمية عالية العائد',
      'برمجة مواقع فائقة السرعة', 'إدارة منصات التواصل', 'استراتيجيات نمو دبي'
    ] : [
      'Luxury Brand Identity', 'Cinematic Video Production', 'High-ROAS Paid Ads',
      'Bespoke Web Engineering', 'Social Media Management', 'Dubai Growth Strategies'
    ];

    const list = [...items, ...items];
    this.marqueeTrack.innerHTML = list.map((txt) => `<span class="marquee-item">${txt}</span><span class="marquee-star">✦</span>`).join('');
  }

  /**
   * Animated Performance Counters
   */
  runCounters() {
    const counters = document.querySelectorAll('.counter-num');
    counters.forEach((el) => {
      const target = parseFloat(el.getAttribute('data-target') || '0');
      const isDecimal = target % 1 !== 0;
      const duration = 1800;
      const startTime = performance.now();

      const updateCount = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        const current = target * easeOut;

        const numStr = isDecimal ? current.toFixed(1) : Math.round(current).toString();
        el.textContent = localizeNumberString(numStr, this.currentLang);

        if (progress < 1) {
          requestAnimationFrame(updateCount);
        } else {
          const finalStr = isDecimal ? target.toFixed(1) : target.toString();
          el.textContent = localizeNumberString(finalStr, this.currentLang);
        }
      };

      requestAnimationFrame(updateCount);
    });
  }

  updateCountersDisplay(lang) {
    const counters = document.querySelectorAll('.counter-num');
    counters.forEach((el) => {
      const target = parseFloat(el.getAttribute('data-target') || '0');
      const isDecimal = target % 1 !== 0;
      const numStr = isDecimal ? target.toFixed(1) : target.toString();
      el.textContent = localizeNumberString(numStr, lang);
    });
  }

  /**
   * Video Cinema Lightbox Modal
   */
  openVideo(src, title = '', format = 'landscape') {
    if (!this.videoModal || !this.modalVideoPlayer) return;

    if (this.videoModalTitle) {
      this.videoModalTitle.textContent = title;
    }

    if (this.videoModalContainer) {
      this.videoModalContainer.classList.remove('format-vertical', 'format-landscape');
      this.videoModalContainer.classList.add(format === 'vertical' ? 'format-vertical' : 'format-landscape');
    }

    this.modalVideoPlayer.src = src;
    this.modalVideoPlayer.load();

    this.videoModal.classList.add('active');
    this.videoModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    this.modalVideoPlayer.play().catch(() => {
      this.modalVideoPlayer.muted = true;
      this.modalVideoPlayer.play();
    });
  }

  closeVideo() {
    if (!this.videoModal || !this.modalVideoPlayer) return;

    this.videoModal.classList.remove('active');
    this.videoModal.setAttribute('aria-hidden', 'true');
    this.modalVideoPlayer.pause();
    this.modalVideoPlayer.currentTime = 0;
    this.modalVideoPlayer.src = '';
    document.body.style.overflow = '';
  }

  /**
   * Cursor Glow
   */
  setupCursorGlow() {
    if (!this.cursorGlow) return;
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;

    window.addEventListener('mousemove', (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
    }, { passive: true });

    const animateGlow = () => {
      currentX += (targetX - currentX) * 0.1;
      currentY += (targetY - currentY) * 0.1;
      this.cursorGlow.style.transform = `translate(${currentX}px, ${currentY}px)`;
      requestAnimationFrame(animateGlow);
    };
    requestAnimationFrame(animateGlow);
  }

  /**
   * 3D Tilt for Cards
   */
  setup3DTilt() {
    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      document.querySelectorAll('.tilt-box').forEach((card) => {
        card.addEventListener('mousemove', (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          const rotX = (y / (rect.height / 2)) * -6;
          const rotY = (x / (rect.width / 2)) * 6;
          card.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-4px)`;
        });
        card.addEventListener('mouseleave', () => {
          card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
        });
      });
    }
  }

  /**
   * Scroll Interactions
   */
  setupScrollInteractions() {
    window.addEventListener('scroll', () => {
      if (this.siteHeader) {
        if (window.scrollY > 40) {
          this.siteHeader.classList.add('scrolled');
        } else {
          this.siteHeader.classList.remove('scrolled');
        }
      }
    }, { passive: true });

    const perfSec = document.getElementById('performance');
    if (perfSec) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !this.countersTriggered) {
            this.countersTriggered = true;
            this.runCounters();
          }
        });
      }, { threshold: 0.25 });
      observer.observe(perfSec);
    }
  }

  /**
   * Event Listeners
   */
  bindEvents() {
    if (this.langToggle) {
      this.langToggle.addEventListener('click', () => this.toggleLanguage());
    }

    if (this.themeToggle) {
      this.themeToggle.addEventListener('click', () => this.toggleTheme());
    }

    if (this.mobileMenuBtn && this.navMenu) {
      this.mobileMenuBtn.addEventListener('click', () => {
        const isOpen = this.navMenu.classList.toggle('open');
        this.mobileMenuBtn.setAttribute('aria-expanded', isOpen);
      });

      this.navMenu.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
          this.navMenu.classList.remove('open');
          this.mobileMenuBtn.setAttribute('aria-expanded', 'false');
        });
      });
    }

    // Portfolio video triggers
    document.querySelectorAll('.portfolio-card').forEach((card) => {
      const videoSrc = card.getAttribute('data-video-src');
      const videoTitle = card.getAttribute('data-video-title') || '';
      const videoFormat = card.getAttribute('data-video-format') || 'landscape';

      const triggers = card.querySelectorAll('.play-trigger-btn, .portfolio-action-link, .portfolio-media');
      triggers.forEach((btn) => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          if (videoSrc) {
            this.openVideo(videoSrc, videoTitle, videoFormat);
          }
        });
      });
    });

    // Close Modal
    if (this.closeModalBtn) {
      this.closeModalBtn.addEventListener('click', () => this.closeVideo());
    }
    if (this.videoModal) {
      this.videoModal.addEventListener('click', (e) => {
        if (e.target === this.videoModal) {
          this.closeVideo();
        }
      });
    }
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.videoModal && this.videoModal.classList.contains('active')) {
        this.closeVideo();
      }
    });

    // 6. WhatsApp Professional Corporate Dispatcher (100% Pure Language - Zero Mixing)
    if (this.contactForm) {
      this.contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // قراءة لغة الصفحة الحالية بدقة تامة
        const currentActiveLang = document.documentElement.getAttribute('lang') || this.currentLang || 'ar';
        const isArabic = currentActiveLang === 'ar';

        const name = document.getElementById('userName')?.value.trim() || '';
        const contact = document.getElementById('userContact')?.value.trim() || '';
        const msg = document.getElementById('userMsg')?.value.trim() || '';

        // سحب النص المترجم للخدمة كما هو ظاهر على الشاشة تماماً لمنع أي خلط
        const serviceSelect = document.getElementById('userService');
        const selectedOpt = serviceSelect ? serviceSelect.options[serviceSelect.selectedIndex] : null;
        const serviceName = selectedOpt ? selectedOpt.textContent.trim() : '';

        let formalMessage = '';

        if (isArabic) {
          formalMessage = 
`السلام عليكم ورحمة الله وبركاته،
تحية طيبة لفريق عمل براند جيت،

يسعدنا التواصل معكم بخصوص طلب استشارة ومناقشة فرص التعاون لتطوير الأعمال، وفيما يلي تفاصيل الطلب:

• الاسم أو المؤسسة: ${name}
• وسيلة الاتصال المباشرة: ${contact}
• الخدمة المطلوبة: ${serviceName}
• نبذة عن المشروع: ${msg || 'سيتم توضيح التفاصيل أثناء الاجتماع.'}

نتطلع إلى التنسيق معكم وتحديد موعد لمناقشة الخطوات القادمة.
مع خالص التحية والتقدير.`;
        } else {
          formalMessage = 
`Dear BrandGate Leadership Team,

I hope this message finds you well.

We are reaching out regarding a strategic inquiry to explore potential collaboration. Below are our preliminary details:

• Client / Organization: ${name}
• Direct Contact: ${contact}
• Capability Required: ${serviceName}
• Project Overview: ${msg || 'To be shared during introductory briefing.'}

We look forward to coordinating with your team.
Best regards.`;
        }

        const encodedMessage = encodeURIComponent(formalMessage);
        window.open(`https://wa.me/971502676684?text=${encodedMessage}`, '_blank');
      });
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.brandGateApp = new BrandGateCore();
});