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
      react: string;
      backend: string;
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
    };
  };

  // Experience Section
  experience: {
    title: string;
    professionalTitle: string;
    certificationsTitle: string;
    continuousLearningTitle: string;
    continuousLearningText: string;
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
    linkedin: {
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
    cv: {
      title: string;
      description: string;
      format: string;
      status: string;
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
      name: 'Marvin Espeter',
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
        react: 'React & Modern JavaScript',
        backend: 'Backend Development',
        patterns: 'Best Practices & Design Patterns',
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
          skills: ['Firebase', 'Authentication', 'Real-time Database', 'Cloud Functions'],
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
          skills: ['Git & Version Control', 'VS Code', 'Chrome DevTools', 'Responsive Design'],
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
      moreProjectsNote: 'More projects and code samples coming soon.',
      githubNote: 'GitHub Profile Link Coming Soon',
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
          title: 'Healthcare Web Application',
          category: 'Web App',
          status: 'Completed',
          description: 'A frontend web application for a healthcare project, built with vanilla HTML, CSS, and JavaScript. Focused on clean user interface and responsive design for medical information management.',
          features: [
            'Responsive design for mobile and desktop',
            'Clean, accessible user interface',
            'Optimized performance with vanilla JavaScript',
            'Healthcare-focused information architecture',
          ],
          tech: ['HTML5', 'CSS3', 'JavaScript'],
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
      },
    },

    experience: {
      title: 'Experience & Education',
      professionalTitle: 'Professional Experience',
      certificationsTitle: 'Certifications & Training',
      continuousLearningTitle: 'Continuous Learning',
      continuousLearningText: "As a beginner-level IT professional, I'm committed to continuous learning and skill development. I actively work on personal projects, explore new technologies, and stay updated with industry trends to grow my expertise in software development and project management.",
      workExperience: {
        title: 'IT Professional',
        company: 'Various Projects',
        period: 'Recent',
        responsibilities: [
          'Developed mobile applications using Flutter and Firebase',
          'Built frontend web applications for healthcare sector',
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
      linkedin: {
        title: 'LinkedIn',
        description: "Let's connect professionally",
        action: 'Opens in new tab',
      },
      github: {
        title: 'GitHub',
        description: 'Check out my code',
        status: 'Link coming soon',
        action: 'Opens in new tab',
      },
      cv: {
        title: 'Download CV',
        description: 'Get my resume',
        format: 'PDF Format',
        status: 'Coming soon',
      },
      closingText: "Whether you're looking for a developer for your project, want to collaborate on something exciting, or just want to say hi, I'd love to hear from you. I typically respond within 24 hours.",
    },

    impressum: {
      title: 'Impressum',
      information: 'Angaben gemäß § 5 TMG',
      contactTitle: 'Kontakt',
      disclaimerTitle: 'Haftungsausschluss',
      contentLiability: {
        title: 'Haftung für Inhalte',
        text: 'Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.',
      },
      linkLiability: {
        title: 'Haftung für Links',
        text: 'Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.',
      },
      copyright: {
        title: 'Urheberrecht',
        text: 'Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.',
      },
      dataProtection: {
        title: 'Datenschutz',
        text1: 'Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten erhoben werden, erfolgt dies stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben.',
        text2: 'Wir weisen darauf hin, dass die Datenübertragung im Internet Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.',
      },
      note: 'Bitte ersetzen Sie die Platzhaltertexte mit Ihren tatsächlichen Kontaktdaten und passen Sie die rechtlichen Hinweise ggf. an Ihre spezifische Situation an. Bei Bedarf konsultieren Sie einen Rechtsanwalt für eine vollständige und rechtssichere Impressumsgestaltung.',
      closeButton: 'Schließen',
    },

    footer: {
      copyright: '© 2024 Marvin Espeter. All rights reserved.',
      impressumButton: 'Impressum',
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
      name: 'Marvin Espeter',
      title: 'IT-Experte & Entwickler',
      intro: 'Leidenschaftlich im Erstellen von mobilen und Web-Anwendungen mit modernen Technologien. Erfahren in Flutter, Firebase und KI-Integration.',
      viewWorkButton: 'Meine Arbeiten',
      contactButton: 'Kontakt aufnehmen',
    },

    about: {
      title: 'Über mich',
      paragraph1: "Ich bin ein IT-Professional auf Einstiegsniveau mit wachsender Leidenschaft für Softwareentwicklung. Meine Reise in die Technologie wurde von Neugier und dem Wunsch angetrieben, praktische Lösungen zu schaffen, die einen Unterschied machen.",
      paragraph2: "Ich habe an verschiedenen Projekten gearbeitet, von mobilen Anwendungen bis zur Webentwicklung, stets begierig darauf, neue Technologien zu erlernen und meine Fähigkeiten zu verbessern. Meine Erfahrung erstreckt sich über Frontend- und Mobile-Entwicklung, mit besonderem Interesse an KI-Integration.",
      paragraph3: "Über das Programmieren hinaus habe ich auch wertvolles Wissen in agilen Methoden und Projektmanagement erworben. Ich besitze Professional Scrum-Zertifizierungen, die mir helfen, das größere Bild der Softwareentwicklung zu verstehen.",
      focusAreasTitle: 'Schwerpunkte',
      focusAreas: {
        mobile: 'Mobile App-Entwicklung (Flutter)',
        frontend: 'Frontend-Webentwicklung',
        ai: 'KI-Integration & Automatisierung',
        agile: 'Agiles Projektmanagement',
      },
      currentlyLearningTitle: 'Aktuell lerne ich',
      learning: {
        react: 'React & Modernes JavaScript',
        backend: 'Backend-Entwicklung',
        patterns: 'Best Practices & Design Patterns',
      },
    },

    skills: {
      title: 'Fähigkeiten & Technologien',
      subtitle: 'Eine Sammlung von Technologien und Tools, mit denen ich arbeite, und die ich kontinuierlich erweitere.',
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
          skills: ['Firebase', 'Authentifizierung', 'Echtzeit-Datenbank', 'Cloud Functions'],
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
          skills: ['Git & Versionsverwaltung', 'VS Code', 'Chrome DevTools', 'Responsive Design'],
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
      subtitle: "Eine Auswahl von Projekten, die ich entwickelt habe und die meine Fähigkeiten in mobiler und Web-Entwicklung zeigen.",
      moreProjectsNote: 'Weitere Projekte und Code-Beispiele folgen bald.',
      githubNote: 'GitHub-Profil-Link folgt in Kürze',
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
          title: 'Gesundheitswesen Web-Anwendung',
          category: 'Web App',
          status: 'Abgeschlossen',
          description: 'Eine Frontend-Web-Anwendung für ein Gesundheitsprojekt, entwickelt mit reinem HTML, CSS und JavaScript. Fokussiert auf saubere Benutzeroberfläche und responsives Design für medizinische Informationsverwaltung.',
          features: [
            'Responsives Design für Mobilgeräte und Desktop',
            'Saubere, zugängliche Benutzeroberfläche',
            'Optimierte Performance mit reinem JavaScript',
            'Auf Gesundheitswesen fokussierte Informationsarchitektur',
          ],
          tech: ['HTML5', 'CSS3', 'JavaScript'],
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
      },
    },

    experience: {
      title: 'Erfahrung & Bildung',
      professionalTitle: 'Berufserfahrung',
      certificationsTitle: 'Zertifizierungen & Weiterbildung',
      continuousLearningTitle: 'Kontinuierliches Lernen',
      continuousLearningText: "Als IT-Professional auf Einstiegsniveau bin ich dem kontinuierlichen Lernen und der Kompetenzentwicklung verpflichtet. Ich arbeite aktiv an persönlichen Projekten, erkunde neue Technologien und halte mich über Branchentrends auf dem Laufenden, um mein Fachwissen in Softwareentwicklung und Projektmanagement auszubauen.",
      workExperience: {
        title: 'IT-Professional',
        company: 'Verschiedene Projekte',
        period: 'Aktuell',
        responsibilities: [
          'Entwicklung mobiler Anwendungen mit Flutter und Firebase',
          'Erstellung von Frontend-Web-Anwendungen für den Gesundheitssektor',
          'Integration von KI-APIs (Gemini) in mobile Anwendungen',
          'Nutzung von KI-Tools für Code-Entwicklung und Bildgenerierung',
        ],
      },
      certificationsList: {
        psm: {
          title: 'Professional Scrum Master I (PSM I)',
          issuer: 'Scrum.org',
          description: 'Zertifiziert im Scrum Framework, Sprint-Planung und agiler Team-Facilitation.',
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
      subtitle: "Ich bin aktuell offen für neue Möglichkeiten und Zusammenarbeiten. Kontaktieren Sie mich gerne, wenn Sie über Projekte, Möglichkeiten sprechen oder einfach nur Kontakt aufnehmen möchten.",
      email: {
        title: 'Email',
        description: 'Senden Sie mir eine Nachricht',
        action: 'Klicken zum Verfassen einer E-Mail',
      },
      linkedin: {
        title: 'LinkedIn',
        description: 'Lassen Sie uns professionell vernetzen',
        action: 'Öffnet in neuem Tab',
      },
      github: {
        title: 'GitHub',
        description: 'Schauen Sie sich meinen Code an',
        status: 'Link folgt in Kürze',
        action: 'Öffnet in neuem Tab',
      },
      cv: {
        title: 'Lebenslauf herunterladen',
        description: 'Mein Lebenslauf',
        format: 'PDF-Format',
        status: 'Folgt in Kürze',
      },
      closingText: "Ob Sie einen Entwickler für Ihr Projekt suchen, an etwas Spannendem zusammenarbeiten möchten oder einfach nur Hallo sagen wollen – ich würde mich freuen, von Ihnen zu hören. Ich antworte in der Regel innerhalb von 24 Stunden.",
    },

    impressum: {
      title: 'Impressum',
      information: 'Angaben gemäß § 5 TMG',
      contactTitle: 'Kontakt',
      disclaimerTitle: 'Haftungsausschluss',
      contentLiability: {
        title: 'Haftung für Inhalte',
        text: 'Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.',
      },
      linkLiability: {
        title: 'Haftung für Links',
        text: 'Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.',
      },
      copyright: {
        title: 'Urheberrecht',
        text: 'Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.',
      },
      dataProtection: {
        title: 'Datenschutz',
        text1: 'Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten erhoben werden, erfolgt dies stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben.',
        text2: 'Wir weisen darauf hin, dass die Datenübertragung im Internet Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.',
      },
      note: 'Bitte ersetzen Sie die Platzhaltertexte mit Ihren tatsächlichen Kontaktdaten und passen Sie die rechtlichen Hinweise ggf. an Ihre spezifische Situation an. Bei Bedarf konsultieren Sie einen Rechtsanwalt für eine vollständige und rechtssichere Impressumsgestaltung.',
      closeButton: 'Schließen',
    },

    footer: {
      copyright: '© 2024 Marvin Espeter. Alle Rechte vorbehalten.',
      impressumButton: 'Impressum',
    },
  },
};
