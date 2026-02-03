export type Language = 'en' | 'de';

export interface Translations {
  // Password Gate
  passwordGate: {
    welcome: string;
    enterPassword: string;
    passwordPlaceholder: string;
    enterButton: string;
    incorrectPassword: string;
  };

  // Hero Section
  hero: {
    name: string;
    title: string;
    intro: string;
    viewWorkButton: string;
    contactButton: string;
  };

  // About Section
  about: {
    title: string;
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
    focusAreasTitle: string;
    focusAreas: {
      mobile: string;
      frontend: string;
      ai: string;
      agile: string;
    };
    currentlyLearningTitle: string;
    learning: {
      vba: string;
      csharp: string;
      patterns: string;
    };
  };

  // Skills Section
  skills: {
    title: string;
    subtitle: string;
    categories: {
      mobile: {
        title: string;
        skills: string[];
      };
      frontend: {
        title: string;
        skills: string[];
      };
      backend: {
        title: string;
        skills: string[];
      };
      ai: {
        title: string;
        skills: string[];
      };
      projectManagement: {
        title: string;
        skills: string[];
      };
      tools: {
        title: string;
        skills: string[];
      };
    };
    certificationsTitle: string;
    certifications: {
      psm: {
        title: string;
        subtitle: string;
      };
      pspo: {
        title: string;
        subtitle: string;
      };
    };
  };

  // Projects Section
  projects: {
    title: string;
    subtitle: string;
    moreProjectsNote: string;
    githubNote: string;
    keyFeatures: string;
    technologies: string;
    projectList: {
      reminderApp: {
        title: string;
        category: string;
        status: string;
        description: string;
        features: string[];
        tech: string[];
      };
      healthcareApp: {
        title: string;
        category: string;
        status: string;
        description: string;
        features: string[];
        tech: string[];
      };
      portfolio: {
        title: string;
        category: string;
        status: string;
        description: string;
        features: string[];
        tech: string[];
      };
      vacationRental: {
        title: string;
        category: string;
        status: string;
        description: string;
        features: string[];
        tech: string[];
      };
    };
  };

  // Experience Section
  experience: {
    title: string;
    educationTitle: string;
    professionalTitle: string;
    certificationsTitle: string;
    continuousLearningTitle: string;
    continuousLearningText: string;
    currentEducation: {
      title: string;
      institution: string;
      period: string;
      status: string;
      topics: string[];
    };
    workExperience: {
      title: string;
      company: string;
      period: string;
      responsibilities: string[];
    };
    certificationsList: {
      psm: {
        title: string;
        issuer: string;
        description: string;
      };
      pspo: {
        title: string;
        issuer: string;
        description: string;
      };
      react: {
        title: string;
        issuer: string;
        description: string;
      };
    };
  };

  // Contact Section
  contact: {
    title: string;
    subtitle: string;
    email: {
      title: string;
      description: string;
      action: string;
    };
    github: {
      title: string;
      description: string;
      status: string;
      action: string;
    };
    closingText: string;
  };

  // Impressum
  impressum: {
    title: string;
    information: string;
    contactTitle: string;
    disclaimerTitle: string;
    contentLiability: {
      title: string;
      text: string;
    };
    linkLiability: {
      title: string;
      text: string;
    };
    copyright: {
      title: string;
      text: string;
    };
    dataProtection: {
      title: string;
      text1: string;
      text2: string;
    };
    note: string;
    closeButton: string;
  };

  // Footer
  footer: {
    copyright: string;
    impressumButton: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    passwordGate: {
      welcome: 'Welcome',
      enterPassword: 'Please enter the password to view this portfolio.',
      passwordPlaceholder: 'Enter password',
      enterButton: 'Enter',
      incorrectPassword: 'Incorrect password. Please try again.',
    },

    hero: {
      name: '', // Loaded from personal-data.ts
      title: 'IT Professional & Developer',
      intro: 'Passionate about building mobile and web applications with modern technologies. Experienced in Flutter, Firebase, and AI integration.',
      viewWorkButton: 'View My Work',
      contactButton: 'Get In Touch',
    },

    about: {
      title: 'About Me',
      paragraph1: "I'm a beginner-level IT professional with a growing passion for software development. My journey into tech has been driven by curiosity and a desire to create practical solutions that make a difference.",
      paragraph2: "I've worked on various projects ranging from mobile applications to web development, always eager to learn new technologies and improve my skills. My experience spans both frontend and mobile development, with a particular interest in AI integration.",
      paragraph3: "Beyond coding, I've also gained valuable knowledge in agile methodologies and project management, holding Professional Scrum certifications that help me understand the broader picture of software delivery.",
      focusAreasTitle: 'Focus Areas',
      focusAreas: {
        mobile: 'Mobile App Development (Flutter)',
        frontend: 'Frontend Web Development',
        ai: 'AI Integration & Automation',
        agile: 'Agile Project Management',
      },
      currentlyLearningTitle: 'Currently Learning',
      learning: {
        vba: 'VBA for Business Applications',
        csharp: 'C# Development (upcoming)',
        patterns: 'Software Architecture & Design Patterns',
      },
    },

    skills: {
      title: 'Skills & Technologies',
      subtitle: 'A collection of technologies and tools I work with, continuously expanding my knowledge.',
      categories: {
        mobile: {
          title: 'Mobile Development',
          skills: ['Flutter', 'Dart', 'Mobile UI/UX'],
        },
        frontend: {
          title: 'Frontend Development',
          skills: ['HTML', 'CSS', 'JavaScript', 'React (Learning)'],
        },
        backend: {
          title: 'Backend & Cloud',
          skills: ['Firebase', 'Authentication', 'Real-time Database', 'Cloud Functions', 'C# (Learning)'],
        },
        ai: {
          title: 'AI & Automation',
          skills: ['Gemini AI API', 'AI-Assisted Coding', 'Local Image Generation', 'Prompt Engineering'],
        },
        projectManagement: {
          title: 'Project Management',
          skills: ['Scrum Framework', 'Agile Methodologies', 'User Story Mapping'],
        },
        tools: {
          title: 'Tools & Technologies',
          skills: ['Git & Version Control', 'VS Code', 'VBA', 'Chrome DevTools', 'Responsive Design'],
        },
      },
      certificationsTitle: 'Certifications',
      certifications: {
        psm: {
          title: 'Professional Scrum Master I',
          subtitle: 'PSM I',
        },
        pspo: {
          title: 'Professional Scrum Product Owner I',
          subtitle: 'PSPO I',
        },
      },
    },

    projects: {
      title: 'Projects',
      subtitle: "A selection of projects I've built, showcasing my skills in mobile and web development.",
      moreProjectsNote: 'More projects and code samples available on GitHub.',
      githubNote: '',
      keyFeatures: 'Key Features',
      technologies: 'Technologies Used',
      projectList: {
        reminderApp: {
          title: 'AI-Powered Reminder App',
          category: 'Mobile App',
          status: 'Completed',
          description: 'A comprehensive mobile application built with Flutter and Firebase, featuring AI-powered assistance through Gemini API integration. Includes user authentication, real-time synchronization, friend requests, and intelligent reminder management.',
          features: [
            'Real-time account synchronization across devices',
            'AI-powered assistance for reminder creation and management',
            'Social features with friend request system',
            'Cloud-based data storage and authentication',
          ],
          tech: ['Flutter', 'Dart', 'Firebase', 'Gemini AI API'],
        },
        healthcareApp: {
          title: 'Care Consulting Website',
          category: 'Web App',
          status: 'Completed',
          description: 'Professional website for a care consulting service, built with Bootstrap and vanilla JavaScript. Features elderly-friendly design with full accessibility compliance, mobile-optimized contact options, and German legal compliance.',
          features: [
            'WCAG 2.1 AA accessibility (large fonts, keyboard navigation, screen reader support)',
            'Mobile sticky contact bar with WhatsApp integration',
            'Trust-building credentials section and 3-step process visualization',
            'Full legal compliance with Impressum and Datenschutz (GDPR)',
          ],
          tech: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap 5'],
        },
        portfolio: {
          title: 'Portfolio Website',
          category: 'Web App',
          status: 'In Progress',
          description: 'Modern, password-protected portfolio website built with Astro, TypeScript, and Tailwind CSS. Features a minimalist design, smooth animations, and full responsive layout. Showcases professional work and skills.',
          features: [
            'Static site generation for optimal performance',
            'Password protection for privacy control',
            'Minimalist, professional design',
            'Fully responsive and accessible',
          ],
          tech: ['Astro', 'TypeScript', 'Tailwind CSS'],
        },
        vacationRental: {
          title: 'Vacation Rental Website',
          category: 'Web App',
          status: 'Completed',
          description: 'Interactive single-page website for a vacation rental property featuring 12 apartments. Visitors can explore apartments by floor through an intuitive building diagram interface with smooth animations and a modern dark theme.',
          features: [
            'Interactive building map with floor selection',
            'Slide-out apartment detail panels with booking links',
            'Scroll-based animations and ambient effects',
            'Firebase Hosting with global CDN deployment',
          ],
          tech: ['HTML5', 'CSS3', 'JavaScript', 'Firebase Hosting'],
        },
      },
    },

    experience: {
      title: 'Experience & Education',
      educationTitle: 'Current Education',
      professionalTitle: 'Professional Experience',
      certificationsTitle: 'Certifications & Training',
      continuousLearningTitle: 'Continuous Learning',
      continuousLearningText: "Beyond my formal training, I'm committed to continuous learning and skill development. I actively work on personal projects, explore new technologies, and stay updated with industry trends to grow my expertise in software development.",
      currentEducation: {
        title: 'IT Specialist for Application Development',
        institution: 'Comcave College, Münster',
        period: '09/2025 - Present',
        status: 'In Progress',
        topics: [
          'VBA for business applications',
          'C# application development (upcoming)',
          'Software development fundamentals',
          'Database management',
        ],
      },
      workExperience: {
        title: 'IT Professional',
        company: 'Various Projects',
        period: 'Recent',
        responsibilities: [
          'Developed mobile applications using Flutter and Firebase',
          'Built frontend web applications for healthcare sector',
          'Created interactive vacation rental website with building map interface, apartment showcase, and Firebase Hosting deployment',
          'Integrated AI APIs (Gemini) into mobile applications',
          'Utilized AI tools for code development and image generation',
        ],
      },
      certificationsList: {
        psm: {
          title: 'Professional Scrum Master I (PSM I)',
          issuer: 'Scrum.org',
          description: 'Certified in Scrum framework, sprint planning, and agile team facilitation.',
        },
        pspo: {
          title: 'Professional Scrum Product Owner I (PSPO I)',
          issuer: 'Scrum.org',
          description: 'Certified in product ownership, backlog management, and stakeholder collaboration.',
        },
        react: {
          title: 'React Beginner Course',
          issuer: 'Self-directed learning',
          description: 'Completed foundational React course covering components, hooks, and modern React patterns.',
        },
      },
    },

    contact: {
      title: 'Get In Touch',
      subtitle: "I'm currently open to new opportunities and collaborations. Feel free to reach out if you'd like to discuss projects, opportunities, or just connect.",
      email: {
        title: 'Email',
        description: 'Send me a message',
        action: 'Click to compose email',
      },
      github: {
        title: 'GitHub',
        description: 'Check out my code',
        status: 'Link coming soon',
        action: 'Opens in new tab',
      },
      closingText: "Whether you're looking for a developer for your project, want to collaborate on something exciting, or just want to say hi, I'd love to hear from you. I typically respond within 24 hours.",
    },

    impressum: {
      title: 'Legal Notice',
      information: 'Information according to § 5 DDG',
      contactTitle: 'Contact',
      disclaimerTitle: 'Disclaimer',
      contentLiability: {
        title: 'Liability for Content',
        text: 'The contents of my pages were created with great care. However, I cannot guarantee the accuracy, completeness, or timeliness of the content. As a service provider, I am responsible for my own content on these pages according to general laws pursuant to § 7 (1) DDG. According to §§ 8 to 10 DDG, however, I am not obligated as a service provider to monitor transmitted or stored third-party information.',
      },
      linkLiability: {
        title: 'Liability for Links',
        text: 'My website contains links to external third-party websites over whose content I have no influence. Therefore, I cannot accept any liability for this third-party content. The respective provider or operator of the pages is always responsible for the content of the linked pages. The linked pages were checked for possible legal violations at the time of linking. Illegal content was not recognizable at the time of linking.',
      },
      copyright: {
        title: 'Copyright',
        text: 'The content and works on these pages created by me are subject to German copyright law. Reproduction, editing, distribution, and any kind of use beyond the limits of copyright law require my written consent. Downloads and copies of this site are only permitted for private, non-commercial use.',
      },
      dataProtection: {
        title: 'Data Protection',
        text1: 'The use of my website is generally possible without providing personal data. This website does not use cookies and does not collect personal data. No analytics or tracking tools are used.',
        text2: 'I would like to point out that data transmission over the Internet (e.g., communication by email) may have security vulnerabilities. Complete protection of data against access by third parties is not possible.',
      },
      note: 'Last updated: January 2025',
      closeButton: 'Close',
    },

    footer: {
      copyright: '', // Constructed in component with personal-data.ts
      impressumButton: 'Legal Notice',
    },
  },

  de: {
    passwordGate: {
      welcome: 'Willkommen',
      enterPassword: 'Bitte geben Sie das Passwort ein, um dieses Portfolio anzuzeigen.',
      passwordPlaceholder: 'Passwort eingeben',
      enterButton: 'Bestätigen',
      incorrectPassword: 'Falsches Passwort. Bitte versuchen Sie es erneut.',
    },

    hero: {
      name: '', // Loaded from personal-data.ts
      title: 'Entwickler & IT-Enthusiast',
      intro: 'Mit Leidenschaft entwickle ich mobile und Web-Anwendungen mit modernen Technologien. Erfahren in Flutter, Firebase und KI-Integration.',
      viewWorkButton: 'Meine Arbeiten',
      contactButton: 'Kontakt aufnehmen',
    },

    about: {
      title: 'Über mich',
      paragraph1: "Als Berufseinsteiger in der IT entwickle ich eine wachsende Leidenschaft für Softwareentwicklung. Mein Einstieg in die IT wurde von Neugier geprägt und dem Wunsch, Lösungen zu entwickeln, die einen echten Nutzen bieten.",
      paragraph2: "Ich habe an verschiedenen Projekten gearbeitet, von mobilen Anwendungen bis zur Webentwicklung, stets motiviert, neue Technologien zu erlernen und meine Fähigkeiten zu verbessern. Meine Erfahrung erstreckt sich über Frontend- und Mobile-Entwicklung, mit besonderem Interesse an KI-Integration.",
      paragraph3: "Über das Programmieren hinaus habe ich auch wertvolles Wissen in agilen Methoden und Projektmanagement erworben. Ich besitze Professional Scrum-Zertifizierungen, die mir einen ganzheitlichen Blick auf Softwareentwicklung ermöglichen.",
      focusAreasTitle: 'Schwerpunkte',
      focusAreas: {
        mobile: 'Mobile App-Entwicklung (Flutter)',
        frontend: 'Frontend-Webentwicklung',
        ai: 'KI-Integration & Automatisierung',
        agile: 'Agiles Projektmanagement',
      },
      currentlyLearningTitle: 'Aktuell lerne ich',
      learning: {
        vba: 'VBA for Application',
        csharp: 'C# Entwicklung (Einsteiger)',
        patterns: 'Softwarearchitektur & Design Patterns',
      },
    },

    skills: {
      title: 'Fähigkeiten & Technologien',
      subtitle: 'Eine Sammlung von Technologien und Tools, mit denen ich arbeite und meine Kenntnisse kontinuierlich erweitere.',
      categories: {
        mobile: {
          title: 'Mobile Entwicklung',
          skills: ['Flutter', 'Dart', 'Mobile UI/UX'],
        },
        frontend: {
          title: 'Frontend-Entwicklung',
          skills: ['HTML', 'CSS', 'JavaScript', 'React (In Arbeit)'],
        },
        backend: {
          title: 'Backend & Cloud',
          skills: ['Firebase', 'Authentifizierung', 'Echtzeit-Datenbank', 'Cloud Functions', 'C# (In Arbeit)'],
        },
        ai: {
          title: 'KI & Automatisierung',
          skills: ['Gemini AI API', 'KI-gestütztes Programmieren', 'Lokale Bildgenerierung', 'Prompt Engineering'],
        },
        projectManagement: {
          title: 'Projektmanagement',
          skills: ['Scrum Framework', 'Agile Methoden', 'User Story Mapping'],
        },
        tools: {
          title: 'Tools & Technologien',
          skills: ['Git & Versionsverwaltung', 'VS Code', 'VBA', 'Chrome DevTools', 'Responsive Design'],
        },
      },
      certificationsTitle: 'Zertifizierungen',
      certifications: {
        psm: {
          title: 'Professional Scrum Master I',
          subtitle: 'PSM I',
        },
        pspo: {
          title: 'Professional Scrum Product Owner I',
          subtitle: 'PSPO I',
        },
      },
    },

    projects: {
      title: 'Projekte',
      subtitle: "Eine Auswahl von Projekten, die ich entwickelt habe und die meine Fähigkeiten in der App- und Webentwicklung zeigen.",
      moreProjectsNote: 'Weitere Projekte und Code-Beispiele auf GitHub verfügbar.',
      githubNote: '',
      keyFeatures: 'Hauptfunktionen',
      technologies: 'Verwendete Technologien',
      projectList: {
        reminderApp: {
          title: 'KI-gestützte Erinnerungs-App',
          category: 'Mobile App',
          status: 'Abgeschlossen',
          description: 'Eine umfassende mobile Anwendung, entwickelt mit Flutter und Firebase, mit KI-gestützter Unterstützung durch Gemini API-Integration. Beinhaltet Benutzerauthentifizierung, Echtzeit-Synchronisation, Freundschaftsanfragen und intelligentes Erinnerungsmanagement.',
          features: [
            'Echtzeit-Kontosynchronisation über Geräte hinweg',
            'KI-gestützte Unterstützung für Erstellung und Verwaltung von Erinnerungen',
            'Soziale Funktionen mit Freundschaftsanfragen-System',
            'Cloud-basierte Datenspeicherung und Authentifizierung',
          ],
          tech: ['Flutter', 'Dart', 'Firebase', 'Gemini AI API'],
        },
        healthcareApp: {
          title: 'Pflegeberatungs-Website',
          category: 'Web App',
          status: 'Abgeschlossen',
          description: 'Professionelle Website für einen Pflegeberatungsdienst, entwickelt mit Bootstrap und Vanilla JavaScript. Mit seniorenfreundlichem Design, vollständiger Barrierefreiheit, mobiloptimierten Kontaktoptionen und deutscher Rechtskonformität.',
          features: [
            'WCAG 2.1 AA Barrierefreiheit (große Schrift, Tastaturnavigation, Screenreader-Unterstützung)',
            'Mobile Sticky-Kontaktleiste mit WhatsApp-Integration',
            'Vertrauensbildende Referenzen und 3-Schritte-Prozessvisualisierung',
            'Vollständige Rechtskonformität mit Impressum und Datenschutz (DSGVO)',
          ],
          tech: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap 5'],
        },
        portfolio: {
          title: 'Portfolio-Website',
          category: 'Web App',
          status: 'In Arbeit',
          description: 'Moderne, passwortgeschützte Portfolio-Website, entwickelt mit Astro, TypeScript und Tailwind CSS. Verfügt über minimalistisches Design, flüssige Animationen und vollständig responsives Layout. Präsentiert professionelle Arbeiten und Fähigkeiten.',
          features: [
            'Statische Site-Generierung für optimale Performance',
            'Passwortschutz für Datenschutzkontrolle',
            'Minimalistisches, professionelles Design',
            'Vollständig responsiv und barrierefrei',
          ],
          tech: ['Astro', 'TypeScript', 'Tailwind CSS'],
        },
        vacationRental: {
          title: 'Ferienwohnungs-Website',
          category: 'Web App',
          status: 'Abgeschlossen',
          description: 'Interaktive Single-Page-Website für eine Ferienwohnungsanlage mit 12 Apartments. Besucher können Wohnungen nach Etage über eine intuitive Gebäudekarten-Oberfläche mit flüssigen Animationen und modernem dunklen Design erkunden.',
          features: [
            'Interaktive Gebäudekarte mit Etagenauswahl',
            'Ausklappbare Wohnungsdetails mit Buchungslinks',
            'Scroll-basierte Animationen und Ambient-Effekte',
            'Firebase Hosting mit globalem CDN-Deployment',
          ],
          tech: ['HTML5', 'CSS3', 'JavaScript', 'Firebase Hosting'],
        },
      },
    },

    experience: {
      title: 'Erfahrung & Bildung',
      educationTitle: 'Aktuelle Ausbildung',
      professionalTitle: 'Berufserfahrung',
      certificationsTitle: 'Zertifizierungen & Weiterbildung',
      continuousLearningTitle: 'Kontinuierliches Lernen',
      continuousLearningText: "Neben meiner formalen Ausbildung lege ich großen Wert auf kontinuierliches Lernen und Kompetenzentwicklung. Ich arbeite aktiv an persönlichen Projekten, erkunde neue Technologien und halte mich über Branchentrends auf dem Laufenden, um mein Fachwissen in der Softwareentwicklung auszubauen.",
      currentEducation: {
        title: 'Fachinformatiker für Anwendungsentwicklung',
        institution: 'Comcave College, Münster',
        period: '09/2025 - Heute',
        status: 'In Ausbildung',
        topics: [
          'VBA for Application',
          'C# Anwendungsentwicklung (Einsteiger)',
          'Grundlagen der Softwareentwicklung',
          'Datenbankverwaltung',
        ],
      },
      workExperience: {
        title: 'Softwareentwickler',
        company: 'Verschiedene Projekte',
        period: 'Aktuell',
        responsibilities: [
          'Entwicklung mobiler Anwendungen mit Flutter und Firebase',
          'Erstellung von Frontend-Web-Anwendungen für den Gesundheitssektor',
          'Erstellung einer interaktiven Ferienwohnungs-Website mit Gebäudekarten-Interface, Wohnungsübersicht und Firebase Hosting Deployment',
          'Integration von KI-APIs (Gemini) in mobile Anwendungen',
          'Nutzung von KI-Tools für Code-Entwicklung und Bildgenerierung',
        ],
      },
      certificationsList: {
        psm: {
          title: 'Professional Scrum Master I (PSM I)',
          issuer: 'Scrum.org',
          description: 'Zertifiziert im Scrum Framework, Sprint-Planung und agiler Zusammenarbeit.',
        },
        pspo: {
          title: 'Professional Scrum Product Owner I (PSPO I)',
          issuer: 'Scrum.org',
          description: 'Zertifiziert in Product Ownership, Backlog-Management und Stakeholder-Zusammenarbeit.',
        },
        react: {
          title: 'React Anfängerkurs',
          issuer: 'Selbstgesteuertes Lernen',
          description: 'Abgeschlossener grundlegender React-Kurs über Komponenten, Hooks und moderne React-Patterns.',
        },
      },
    },

    contact: {
      title: 'Kontakt aufnehmen',
      subtitle: "Ich bin offen für neue Möglichkeiten und freue mich über Kontaktanfragen – ob für Projekte, Kooperationen oder einen ersten Austausch.",
      email: {
        title: 'Email',
        description: 'Senden Sie mir eine Nachricht',
        action: 'Klicken zum Verfassen einer E-Mail',
      },
      github: {
        title: 'GitHub',
        description: 'Schauen Sie sich meinen Code an',
        status: 'Link folgt in Kürze',
        action: 'Öffnet in neuem Tab',
      },
      closingText: "Ob Sie einen Entwickler suchen, eine spannende Idee besprechen möchten oder einfach Hallo sagen wollen – ich freue mich, von Ihnen zu hören. Ich antworte in der Regel innerhalb von 24 Stunden.",
    },

    impressum: {
      title: 'Impressum',
      information: 'Angaben gemäß § 5 DDG',
      contactTitle: 'Kontakt',
      disclaimerTitle: 'Haftungsausschluss',
      contentLiability: {
        title: 'Haftung für Inhalte',
        text: 'Die Inhalte meiner Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann ich jedoch keine Gewähr übernehmen. Als Diensteanbieter bin ich gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG bin ich als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen.',
      },
      linkLiability: {
        title: 'Haftung für Links',
        text: 'Mein Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte ich keinen Einfluss habe. Deshalb kann ich für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.',
      },
      copyright: {
        title: 'Urheberrecht',
        text: 'Die durch mich erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen meiner schriftlichen Zustimmung. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.',
      },
      dataProtection: {
        title: 'Datenschutz',
        text1: 'Die Nutzung meiner Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Diese Webseite verwendet keine Cookies und erhebt keine personenbezogenen Daten. Es werden keine Analyse- oder Tracking-Tools eingesetzt.',
        text2: 'Ich weise darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.',
      },
      note: 'Stand: Januar 2025',
      closeButton: 'Schließen',
    },

    footer: {
      copyright: '', // Constructed in component with personal-data.ts
      impressumButton: 'Impressum',
    },
  },
};
