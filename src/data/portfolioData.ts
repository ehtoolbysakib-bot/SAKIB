import {
  PersonalInfo,
  ProjectItem,
  SkillItem,
  ExperienceItem,
  EducationItem,
  StatItem,
} from '../types';

export const personalInfo: PersonalInfo = {
  name: 'MD SAKIB HOSEN',
  headline: 'হাই, আমি MD SAKIB HOSEN',
  title: 'ফুল স্ট্যাক ডেভেলপার ও UI/UX ডিজাইনার',
  experienceYears: '৬+ বছর',
  workType: 'ইন্ডিপেন্ডেন্ট ডেভেলপার',
  bio: 'আমি MD SAKIB HOSEN, একজন প্রফেশনাল ফুল স্ট্যাক ডেভেলপার এবং UI/UX ডিজাইনার। বিগত ৬+ বছর ধরে আধুনিক ওয়েবসাইট, ওয়েব অ্যাপ্লিকেশন, অটোমেশন বট এবং ব্যবহারকারী-বান্ধব ডিজিটাল প্ল্যাটফর্ম তৈরি করে আসছি। আমার মূল লক্ষ্য হলো উচ্চ কর্মক্ষমতাসম্পন্ন, সুরক্ষিত এবং দৃষ্টিনন্দন ডিজিটাল অভিজ্ঞতা উপহার দেওয়া।',
  email: 'mdsakibhosen1219@gmail.com',
  whatsapp: '+8801765051219',
  whatsappRaw: '+8801765051219',
  facebook: 'https://www.facebook.com/2ndJohnnySins',
  messenger: 'https://www.m.me/2ndJohnnySins',
  telegram: 'https://www.t.me/Cyber_Ghost_Sakib',
  githubNote: 'গিটহাব প্রোফাইল বর্তমানে প্রাইভেট রয়েছে',
  education: {
    degree: 'এইচএসসি (HSC)',
    institution: 'সরকারি আকবর আলী কলেজ',
    passingYear: '২০২৫',
  },
  avatarUrl: '/sakib-profile.jpg',
  cvPath: '/MD-SAKIB-HOSEN-CV.pdf',
};

export const statistics: StatItem[] = [
  {
    label: 'অভিজ্ঞতা',
    value: '৬+ বছর',
    description: 'ফুল স্ট্যাক ওয়েব ডেভেলপমেন্ট ও ইউআই ডিজাইন',
    iconName: 'Clock',
  },
  {
    label: 'মোট প্রজেক্ট',
    value: '৮+ প্রজেক্ট',
    description: 'ওয়েব অ্যাপ্লিকেশন, বট ও সিকিউরিটি টুলস',
    iconName: 'FolderGit2',
  },
  {
    label: 'বিশেষত্ব',
    value: 'ওয়েব ও অটোমেশন',
    description: 'রেস্পনসিভ, দ্রুতগতির ও নিরাপদ প্ল্যাটফর্ম',
    iconName: 'Layout',
  },
  {
    label: 'কমিউনিটি বট',
    value: 'বট ও স্ক্রিপ্টস',
    description: 'মেসেঞ্জার ও টেলিগ্রাম অটোমেটেড সিস্টেম',
    iconName: 'Bot',
  },
];

export const skillsData: SkillItem[] = [
  {
    id: 'html',
    name: 'HTML',
    category: 'frontend',
    levelDescription: 'সিম্যান্টিক স্ট্রাকচার, আধুনিক স্ট্যান্ডার্ড ও সার্চ ইঞ্জিন অপ্টিমাইজেশন (SEO)',
    iconName: 'FileCode2',
    color: '#06b6d4',
    tags: ['HTML5 সিম্যান্টিক', 'অ্যাক্সেসিবিলিটি', 'এসইও অপ্টিমাইজেশন'],
  },
  {
    id: 'css',
    name: 'CSS',
    category: 'frontend',
    levelDescription: 'রেস্পনসিভ লেআউট, ফ্লেক্সবক্স/গ্রিড, মসৃণ অ্যানিমেশন ও মডার্ন গ্লাস ইফেক্ট',
    iconName: 'Palette',
    color: '#0891b2',
    tags: ['Tailwind CSS', 'সিএসএস অ্যানিমেশন', 'গ্লাসফিজম', 'মোবাইল-ফার্স্ট ডিজাইন'],
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    category: 'frontend',
    levelDescription: 'মডার্ন ES6+, ডোম ম্যানিপুলেশন, অ্যাসিঙ্ক্রোনাস ও ইভেন্ট হ্যান্ডলিং',
    iconName: 'Braces',
    color: '#0284c7',
    tags: ['ES6+ ফিচারস', 'Async / Await', 'ডোম এপিআই', 'ইভেন্ট আর্কিটেকচার'],
  },
  {
    id: 'react',
    name: 'React',
    category: 'frontend',
    levelDescription: 'কম্পোনেন্ট আর্কিটেকচার, স্টেট ম্যানেজমেন্ট, কাস্টম হুকস ও পারফরম্যান্স অপ্টিমাইজেশন',
    iconName: 'Atom',
    color: '#06b6d4',
    tags: ['React 18/19', 'কাস্টম হুকস', 'ইন্টারেক্টিভ UI', 'স্পিড অপ্টিমাইজেশন'],
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    category: 'backend',
    levelDescription: 'সার্ভার-সাইড রানটাইম, রেস্টফুল এপিআই, ব্যাকএন্ড লজিক ও বট সার্ভার',
    iconName: 'Server',
    color: '#059669',
    tags: ['Express.js', 'RESTful APIs', 'বট ফ্রেমওয়ার্ক', 'NPM ইকোসিস্টেম'],
  },
  {
    id: 'php',
    name: 'PHP',
    category: 'backend',
    levelDescription: 'সার্ভার-সাইড স্ক্রিপ্টিং, ডাইনামিক ওয়েব লজিক ও ডেটাবেজ ম্যানেজমেন্ট',
    iconName: 'Code2',
    color: '#7c3aed',
    tags: ['ব্যাকএন্ড এপিআই', 'অথেনটিকেশন', 'MySQL ইন্টিগ্রেশন', 'ডাইনামিক লজিক'],
  },
  {
    id: 'python',
    name: 'Python',
    category: 'backend',
    levelDescription: 'অটোমেশন স্ক্রিপ্ট, টেলিগ্রাম বট ডেভেলপমেন্ট ও সিকিউরিটি রিসার্চ টুলস',
    iconName: 'Terminal',
    color: '#0284c7',
    tags: ['Telegram Bot APIs', 'অটোমেশন স্ক্রিপ্ট', 'সিকিউরিটি টুলিং', 'AsyncIO'],
  },
  {
    id: 'mysql',
    name: 'MySQL',
    category: 'database',
    levelDescription: 'রিলেশনাল ডেটাবেজ স্কিমা ডিজাইন, অপ্টিমাইজড কুয়েরি ও ডেটা সিকিউরিটি',
    iconName: 'Database',
    color: '#0891b2',
    tags: ['রিলেশনাল স্কিমা', 'স্ট্রাকচার্ড কুয়েরি', 'ইনডেক্সিং', 'ডেটা ইন্টিগ্রিটি'],
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    category: 'database',
    levelDescription: 'NoSQL ডকুমেন্ট ডেটা স্টোরেজ, ফ্লেক্সিবল ডেটা মডেলিং ও দ্রুতগতির ডেটা অ্যাক্সেস',
    iconName: 'Boxes',
    color: '#10b981',
    tags: ['ডকুমেন্ট স্টোর', 'কালেকশনস', 'JSON পাইপলাইন', 'স্কেলেবল ডেটা'],
  },
];

export const projectsData: ProjectItem[] = [
  {
    id: 'messenger-bot',
    title: 'মেসেঞ্জার গ্রুপ আড্ডা বট',
    category: 'bots',
    description:
      'ফেসবুক মেসেঞ্জার গ্রুপ চ্যাটে আড্ডা, বিনোদন ও স্বয়ংক্রিয় কথোপকথনের জন্য তৈরি একটি জনপ্রিয় কমিউনিটি বট।',
    longDescription:
      'মেসেঞ্জার গ্রুপে স্বয়ংক্রিয় আড্ডা, মজার গেমস, কুইজ, ওয়েলকাম মেসেজ ও বিভিন্ন প্রয়োজনীয় কমান্ডের মাধ্যমে গ্রুপ মেম্বারদের সক্রিয় ও আনন্দিত রাখার জন্য এই বটটি তৈরি করা হয়েছে।',
    technologies: ['Node.js', 'Messenger API', 'JavaScript', 'Webhooks'],
    features: [
      'স্মার্ট চ্যাট কমান্ড ও তাৎক্ষণিক স্বয়ংক্রিয় উত্তর',
      'গ্রুপ মেম্বার এনগেজমেন্ট ও মজার গেম মডিউল',
      'নতুন মেম্বার ওয়েলকাম ও গ্রুপ মডারেশন সুবিধা',
      '২৪/৭ নিরবচ্ছিন্ন ও দ্রুতগতির সার্ভার রেসপন্স',
    ],
    hasLiveUrl: false,
    featured: true,
    badge: 'জনপ্রিয় বট',
  },
  {
    id: 'cybersecurity-tool',
    title: 'এথিক্যাল হ্যাকিং ও সাইবার সিকিউরিটি টুল',
    category: 'security',
    description:
      'অনুমোদিত সিকিউরিটি রিসার্চ ও টেস্টের জন্য তৈরি সাইবার সিকিউরিটি টুল, যা DarkByteCrew কমিউনিটির সাথে সম্পৃক্ত।',
    longDescription:
      'অনুমোদিত পরিবেশে সিস্টেম সিকিউরিটি অডিট, ভালনারেবিলিটি রিসার্চ ও নিরাপত্তা সচেতনতা বৃদ্ধির জন্য তৈরি একটি আধুনিক টুলসেট। DarkByteCrew সিকিউরিটি কমিউনিটির সাথে এটি যুক্ত রয়েছে।',
    technologies: ['Python', 'Security Research', 'Network Utilities', 'Automation'],
    features: [
      'সিকিউরিটি অডিট ও সিস্টেম অ্যানালাইসিস রুটিন',
      'অনুমোদিত পরিবেশে টেস্টিং ও রিসার্চ সাপোর্ট',
      'DarkByteCrew কমিউনিটি প্ল্যাটফর্ম কানেকশন',
      'টার্মিনাল বেসড অটোমেশন ও সিকিউরিটি স্ক্রিপ্ট',
    ],
    connectedPage: {
      name: 'DarkByteCrew',
      url: 'https://www.facebook.com/DarkByteCrew',
      buttonLabel: 'ফেসবুক পেজ দেখুন',
    },
    hasLiveUrl: true,
    externalUrl: 'https://www.facebook.com/DarkByteCrew',
    externalLabel: 'ফেসবুক পেজ দেখুন',
    isExternalLink: true,
    featured: true,
    badge: 'সিকিউরিটি রিসার্চ',
  },
  {
    id: 'telegram-bot',
    title: 'টেলিগ্রাম অটোমেশন বট',
    category: 'bots',
    description:
      'অটোমেশন, নোটিফিকেশন ও ইন্টারেক্টিভ সুবিধার জন্য তৈরি কাস্টম টেলিগ্রাম বট।',
    longDescription:
      'টেলিগ্রাম বট এপিআই ও পাইথন ব্যবহার করে বিভিন্ন স্বয়ংক্রিয় টাস্ক, ব্যবহারকারীর তথ্য সংগ্রহ এবং তাৎক্ষণিক নোটিফিকেশন পাঠানোর উপযোগী একটি স্মার্ট সিস্টেম।',
    technologies: ['Python', 'Telegram API', 'AsyncIO', 'JSON Storage'],
    features: [
      'কাস্টম মেনু ও দ্রুত কমান্ড প্রসেসিং সিস্টেম',
      'ব্যাকগ্রাউন্ড অটোমেটেড নোটিফিকেশন সার্ভিস',
      'ইউজার স্টেট ট্র্যাকিং ও ইন্টারেক্টিভ প্রম্পট',
      'স্কেলেবল অ্যাসিঙ্ক রিকোয়েস্ট হ্যান্ডলিং',
    ],
    hasLiveUrl: false,
    featured: false,
    badge: 'অটোমেশন বট',
  },
  {
    id: 'ecommerce-website',
    title: 'ই-কমার্স ওয়েবসাইট',
    category: 'web',
    description:
      'আধুনিক পণ্য প্রদর্শন, শপিং কার্ট এবং দ্রুত অর্ডারিং সুবিধার সম্পূর্ণ ই-কমার্স প্ল্যাটফর্ম।',
    longDescription:
      'ব্যবহারকারী-বান্ধব ইন্টারফেস, মসৃণ নেভিগেশন, ডাইনামিক প্রোডাক্ট ফিল্টারিং, কার্ট ম্যানেজমেন্ট এবং দ্রুত চেকআউট সুবিধার একটি চমৎকার ই-কমার্স অ্যাপ্লিকেশন।',
    technologies: ['React', 'JavaScript', 'CSS3', 'Node.js', 'MySQL'],
    features: [
      'রেস্পনসিভ প্রোডাক্ট গ্যালারি ও ফিল্টার সিস্টেম',
      'রিয়েল-টাইম শপিং কার্ট ও অর্ডার সামারি',
      'দৃষ্টিনন্দন আধুনিক ইউআই ও দ্রুতগতির লোডিং',
      'মোবাইল-ফ্রেন্ডলি ব্রাউজিং ও চেকআউট অভিজ্ঞতা',
    ],
    hasLiveUrl: false,
    featured: true,
    badge: 'ওয়েব অ্যাপ্লিকেশন',
  },
  {
    id: 'smm-panel',
    title: 'এসএমএম সার্ভিস প্যানেল (SMM Panel)',
    category: 'web',
    description:
      'সোশ্যাল মিডিয়া সার্ভিস ম্যানেজমেন্ট ও ড্যাশবোর্ড ভিত্তিক অর্ডার ট্র্যাকিং প্ল্যাটফর্ম।',
    longDescription:
      'অ্যাডমিন ও ইউজার ড্যাশবোর্ড সমৃদ্ধ একটি প্ল্যাটফর্ম, যেখানে বিভিন্ন সোশ্যাল সার্ভিস ক্যাটালগ দেখা, অর্ডার প্লেস করা এবং রিয়েল-টাইম স্ট্যাটাস ট্র্যাক করা যায়।',
    technologies: ['PHP', 'MySQL', 'JavaScript', 'Tailwind CSS'],
    features: [
      'ড্যাশবোর্ড অ্যানালিটিক্স ও সার্ভিস ক্যাটালগ',
      'অর্ডার প্রসেসিং ও লাইভ স্ট্যাটাস মনিটরিং',
      'ইউজার ব্যালেন্স ও অ্যাকাউন্ট ম্যানেজমেন্ট',
      'মোবাইল ও ডেক্সটপ ফ্রেন্ডলি রেস্পনসিভ লেআউট',
    ],
    hasLiveUrl: false,
    featured: false,
    badge: 'ড্যাশবোর্ড ইউআই',
  },
  {
    id: 'loan-website',
    title: 'লোন প্ল্যাটফর্ম ওয়েবসাইট',
    category: 'web',
    description:
      'লোন ক্যালকুলেশন, আবেদন প্রক্রিয়া ও স্বচ্ছ আর্থিক তথ্যের ওয়েব ইন্টারফেস।',
    longDescription:
      'সহজ ও সুন্দর লোন ক্যালকুলেটর, ধাপে ধাপে আবেদন ফরম এবং গ্রাহক যোগাযোগ ব্যবস্থার একটি মার্জিত আর্থিক প্ল্যাটফর্ম।',
    technologies: ['PHP', 'JavaScript', 'CSS3', 'MySQL'],
    features: [
      'ইন্টারেক্টিভ লোন ও ইন্টারেস্ট ক্যালকুলেটর',
      'সহজ ধাপে তথ্য জমা ও আবেদন ফরম',
      'পরিচ্ছন্ন টাইপোগ্রাফি ও দ্রুত লোডিং স্পিড',
      'মোবাইল-ফার্স্ট রেস্পনসিভ আর্কিটেকচার',
    ],
    hasLiveUrl: false,
    featured: false,
    badge: 'ফিনটেক ইউআই',
  },
  {
    id: 'deposit-website',
    title: 'ডিপোজিট ম্যানেজমেন্ট ওয়েবসাইট',
    category: 'web',
    description:
      'ডিপোজিট প্যাকেজ, ব্যালেন্স ট্র্যাকিং ও লেনদেনের হিসেব রাখার সুরক্ষিত প্ল্যাটফর্ম।',
    longDescription:
      'ব্যবহারকারীর ডিপোজিট স্তর নির্বাচন, লেনদেনের রসিদ ও অ্যাকাউন্টের ইতিহাস দেখার জন্য নির্মিত একটি পরিচ্ছন্ন ও সুরক্ষিত ফ্রন্টএন্ড ইন্টারফেস।',
    technologies: ['React', 'JavaScript', 'Node.js', 'MongoDB'],
    features: [
      'ডিপোজিট প্যাকেজ নির্বাচন ও কনফার্মেশন মডাল',
      'লাইভ ব্যালেন্স ও ট্রানজেকশন হিস্ট্রি প্রদর্শন',
      'পরিষ্কার স্ট্যাটাস ইন্ডিকেটর ও সহজ নেভিগেশন',
      'দ্রুতগতির ও নিরাপদ ফ্রন্টএন্ড ডিজাইন',
    ],
    hasLiveUrl: false,
    featured: false,
    badge: 'ফিনটেক ওয়েব',
  },
  {
    id: 'earning-website',
    title: 'অনলাইন আর্নিং প্ল্যাটফর্ম',
    category: 'web',
    description:
      'টাস্ক ম্যানেজমেন্ট, পয়েন্ট হিসেব ও রিওয়ার্ড পাওয়ার ইন্টারেক্টিভ ওয়েব প্ল্যাটফর্ম।',
    longDescription:
      'ব্যবহারকারীদের বিভিন্ন টাস্ক সম্পন্ন করার মাধ্যমে পয়েন্ট ও রিওয়ার্ড অর্জনের জন্য তৈরি একটি গেমিফাইড ও আকর্ষণীয় ওয়েব ইন্টারফেস।',
    technologies: ['Full Stack', 'JavaScript', 'PHP', 'MySQL'],
    features: [
      'ইউজার অ্যাক্টিভিটি ট্র্যাকিং ও প্রোগ্রেস বার',
      'দৈনিক টাস্ক ম্যানেজমেন্ট ও পয়েন্ট সিস্টেম',
      'উইথড্রয়াল রিকোয়েস্ট ও ব্যালেন্স হিস্ট্রি',
      'আধুনিক কার্ড-ভিত্তিক রেস্পনসিভ ডিজাইন',
    ],
    hasLiveUrl: false,
    featured: false,
    badge: 'রিওয়ার্ড প্ল্যাটফর্ম',
  },
];

export const experienceData: ExperienceItem[] = [
  {
    id: 'independent-dev',
    role: 'ইন্ডিপেন্ডেন্ট ডেভেলপার (Independent Developer)',
    period: '২০১৯ — বর্তমান (৬+ বছর)',
    type: 'ফুল স্ট্যাক ওয়েব ডেভেলপমেন্ট ও UI/UX ডিজাইন',
    summary:
      'গত ৬ বছরেরও বেশি সময় ধরে স্বাধীনভাবে ক্লায়েন্ট ও ব্যক্তিগত প্রজেক্টে আধুনিক ওয়েবসাইট, ওয়েব অ্যাপ্লিকেশন, অটোমেশন বট, আকর্ষণীয় ইউআই/ইউএক্স ইন্টারফেস ও সিকিউরিটি টুলস তৈরি করে আসছি।',
    responsibilities: [
      'আধুনিক ফ্রন্টএন্ড ফ্রেমওয়ার্ক ও শক্তিশালী ব্যাকএন্ডের সমন্বয়ে ফুল স্ট্যাক ওয়েব অ্যাপ তৈরি।',
      'ফেসবুক মেসেঞ্জার ও টেলিগ্রামের জন্য কাস্টম লজিকভিত্তিক অটোমেটেড কমিউনিটি বট তৈরি।',
      'মোবাইল-ফার্স্ট, দ্রুতগতির, দৃষ্টিনন্দন ও ব্যবহারকারী-বান্ধব ইউআই/ইউএক্স ইন্টারফেস ডিজাইন।',
      'এথিক্যাল সিকিউরিটি টুলস, অটোমেশন স্ক্রিপ্ট ও প্রসেস অপ্টিমাইজেশন।',
      'MySQL ও MongoDB ডেটাবেজের দক্ষ স্ট্রাকচারিং ও ডেটা নিরাপত্তা নিশ্চিতকরণ।',
    ],
    technologies: [
      'React',
      'JavaScript',
      'Node.js',
      'Python',
      'PHP',
      'MySQL',
      'MongoDB',
      'Tailwind CSS',
    ],
  },
];

export const educationData: EducationItem[] = [
  {
    id: 'hsc-akbar-ali',
    degree: 'এইচএসসি (Higher Secondary Certificate)',
    institution: 'সরকারি আকবর আলী কলেজ (Govt Akbar Ali College)',
    passingYear: '২০২৫',
    status: 'শিক্ষাগত যোগ্যতা',
    description:
      'সরকারি আকবর আলী কলেজ থেকে এইচএসসি (২০২৫)। প্রাতিষ্ঠানিক শিক্ষার পাশাপাশি বিগত ৬ বছর ধরে সেলফ-লার্নিং ও প্র্যাক্টিক্যাল প্রজেক্টের মাধ্যমে প্রোগ্রামিং, ওয়েব ডেভেলপমেন্ট এবং অটোমেশন প্রযুক্তিতে গভীর দক্ষতা অর্জন করেছি।',
  },
];

export const achievementsNote = {
  title: 'মাইলস্টোন ও ধারাবাহিক অগ্রগতি',
  subtitle: 'চলমান ডেভেলপমেন্ট যাত্রা',
  message: 'আরো নতুন মাইলস্টোন শীঘ্রই আসছে...',
  description:
    'প্রতিনিয়ত নতুন নতুন প্রযুক্তি আয়ত্ত করা, উন্নত কোডিং স্ট্যান্ডার্ড অনুসরণ এবং স্কেলেবল ডিজিটাল প্রোডাক্ট তৈরিই আমার নিয়মিত লক্ষ্য।',
  upcomingMilestones: [
    'ক্লাউড ও আধুনিক মাইক্রোসার্ভিসেস ডিপ্লয়মেন্ট আর্কিটেকচার',
    'ওপেন সোর্স বট ফ্রেমওয়ার্ক ও ডেভেলপার টুলস উন্মোচন',
    'ইন্টারেক্টিভ আধুনিক ফুল স্ট্যাক ওয়েব প্ল্যাটফর্ম সম্প্রসারণ',
  ],
};

export const navItems = [
  { label: 'হোম', href: '#home' },
  { label: 'পরিচিতি', href: '#about' },
  { label: 'স্কিলস', href: '#skills' },
  { label: 'প্রজেক্টসমূহ', href: '#projects' },
  { label: 'অভিজ্ঞতা', href: '#experience' },
  { label: 'শিক্ষা', href: '#education' },
  { label: 'মাইলস্টোন', href: '#achievements' },
  { label: 'যোগাযোগ', href: '#contact' },
];
