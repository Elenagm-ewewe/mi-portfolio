import type { describe } from "astro:schema";
import { Icon } from 'astro-icon/components';


export const contacto = [
    {
        name: 'Email',
        label: 'elenapapoula@gmail.com',
        link: 'mailto:elenapapoula@gmail.com',
        icon: 'mdi:email-outline',
    },
    {
        name: 'LinkedIn',
        label: 'linkedin.com/in/elenapapoula/',
        link: 'https://www.linkedin.com/in/elena-gutierrez-morata/',
        icon: 'mdi:linkedin',
    },
    {
        name: 'GitHub',
        label: 'github.com/elenapapoula',
        link: 'https://github.com/Elenagm-ewewe',
        icon: 'mdi:github',
    },
];

export const graficas = [
	{ name: 'Photoshop', icon: 'logos:adobe-photoshop' },
	{ name: 'Illustrator', icon: 'logos:adobe-illustrator' },
	{ name: 'After Effects', icon: 'logos:adobe-after-effects' },
	{ name: 'Premiere', icon: 'logos:adobe-premiere' },
    { name: 'Indesign', icon: 'logos:adobe-indesign' },
    { name: 'Inkscape', icon: 'devicon:inkscape' },
    { name: 'Lightroom', icon: 'logos:adobe-lightroom' }
]

export const traducciones = {
    es: {
        nav: {
            about: 'Sobre mí',
            projects: 'Proyectos',
            contact: 'Contacto',
        },
        toggle: {
            label: 'Cambiar a inglés',
            short: 'EN',
        },
        hero: {
            eyebrow: 'Front-end developer / Técnica audiovisual',
            name: 'Elena',
            surname: 'Gutiérrez Morata',
            description:
                'Especializada en crear soluciones digitales y contenido visual combinando desarrollo web, diseño gráfico y producción audiovisual. ',
            primary: 'Ver proyectos',
            secondary: 'Contactar',
        },
        stats: [
            { value: '4+', label: 'años construyendo interfaces limpias' },
            { value: '12', label: 'proyectos entregados con foco visual' },
            { value: '100%', label: 'estructura preparada para escalar' },
        ],
        summary: {
            eyebrow: 'Resumen',
            title: 'Interfaces con orden visual y foco en el contenido.',
            badge: 'UI',
            contactTitle: 'Contacto rápido',
            contactDescription:
                'Abierto a portfolios, landing pages y productos simples con buena presentación.',
        },
        about: {
            description:"Desarrolladora frontend junior y técnica audiovisual con experiencia en Angular, Vue, Astro, .NET y edición multimedia profesional. Especializada en crear soluciones digitales y contenido visual combinando desarrollo web, diseño gráfico y producción audiovisual. ",
            eyebrow: 'Sobre mí',
            title: 'Un poco sobre mi experiencia y enfoque',
            cta: 'Hablemos',
            paragraphs: [
                'Soy un desarrollador front-end con más de 4 años de experiencia creando interfaces limpias y funcionales. Me especializo en construir portfolios, landing pages y productos digitales que destacan por su estética clara, orden visual y foco en el contenido.',
                'Mi enfoque se basa en la simplicidad, la consistencia y la usabilidad. Creo que una buena interfaz debe ser fácil de entender, agradable a la vista y orientada a la conversión. Me gusta trabajar con tecnologías modernas como Astro, Tailwind CSS y TypeScript para crear experiencias rápidas, accesibles y fáciles de mantener.',
            ],

        },
        projects: {
            eyebrow: 'Proyectos',
            title: 'Selección de trabajos destacados',
            cta: 'Hablemos',
            featured: 'Destacado',
            items: [
                {
                    title: 'Dashboard de métricas',
                    description:
                        'Panel limpio para visualizar KPIs, rendimiento y actividad en tiempo real con una interfaz enfocada en legibilidad.',
                },
                {
                    title: 'Landing de producto',
                    description:
                        'Landing moderna con narrativa clara, secciones modulares y llamadas a la acción pensadas para conversión.',
                },
                {
                    title: 'Portfolio personal',
                    description:
                        'Base flexible para presentar proyectos, experiencia y contacto de forma ordenada y fácil de mantener.',
                },
            ],
        },
        contact: {
            eyebrow: 'Contacto',
        },
    },
    en: {
        nav: {
            about: 'About',
            projects: 'Projects',
            contact: 'Contact',
        },
        toggle: {
            label: 'Switch to Spanish',
            short: 'ES',
        },
        hero: {
            eyebrow: 'Front-end developer',
            title: 'I build portfolios and products with a clear, elegant, and direct look.',
            description:
                'This index is designed to present projects, capabilities, and contact information with a sober, modern, and easy-to-maintain visual structure.',
            primary: 'View projects',
            secondary: 'Contact me',
        },
        stats: [
            { value: '4+', label: 'years building clean interfaces' },
            { value: '12', label: 'projects delivered with visual focus' },
            { value: '100%', label: 'structure ready to scale' },
        ],
        summary: {
            eyebrow: 'Summary',
            title: 'Interfaces with visual order and focus on content.',
            badge: 'UI',
            contactTitle: 'Quick contact',
            contactDescription:
                'Open to portfolios, landing pages, and simple products with strong presentation.',
        },
        about: {
            eyebrow: 'About me',
            title: 'A bit about my experience and approach',
            cta: 'Let\'s talk',
            paragraphs: [
                'I am a front-end developer with more than 4 years of experience building clean and functional interfaces. I specialize in creating portfolios, landing pages, and digital products that stand out for their clear aesthetics, visual order, and focus on content.',
                'My approach is based on simplicity, consistency, and usability. I believe a good interface should be easy to understand, pleasant to look at, and oriented toward conversion. I like working with modern technologies such as Astro, Tailwind CSS, and TypeScript to create fast, accessible, and maintainable experiences.',
            ],
            servicesTitle: 'Services I offer:',
            services: [
                'Simple and consistent interface design',
                'Reusable and maintainable components',
                'Responsive experiences with good visual rhythm',
                'Fast, clear pages focused on conversion',
            ],
        },
        projects: {
            eyebrow: 'Projects',
            title: 'Selected featured work',
            cta: 'Let\'s talk',
            featured: 'Featured',
            items: [
                {
                    title: 'Metrics dashboard',
                    description:
                        'A clean dashboard to visualize KPIs, performance, and real-time activity with an interface focused on readability.',
                },
                {
                    title: 'Product landing page',
                    description:
                        'A modern landing page with a clear narrative, modular sections, and conversion-oriented calls to action.',
                },
                {
                    title: 'Personal portfolio',
                    description:
                        'A flexible base to present projects, experience, and contact information in an organized and easy-to-maintain way.',
                },
            ],
        },
        contact: {
            eyebrow: 'Contact',
        },
    },
} as const;

export const proyectos = traducciones.es.projects.items.map((item) => ({
    title: item.title,
    description: item.description,
    link: '',
}));