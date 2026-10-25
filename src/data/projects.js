export const PROJECT_CATEGORIES = [
  'All',
  'Web Development',
  'Data & Analytics',
  'UI/UX & Design',
]

export const PROJECTS = [
  {
    id: 'keliling-jawa',
    title: 'Kelilingi Jawa: AI-Based Open Trip Matchmaking Platform',
    year: '2025',
    category: 'UI/UX & Design',
    image: '/images/keliling-jawa.jpg',
    description:
      'An AI-powered open trip platform designed to match solo travelers based on budget, travel style, schedule, and destination preferences.',
    contribution: [
      'Designed interactive UI/UX prototypes in Figma for user preference input, matchmaking recommendations, and daily itinerary generation.',
      'Applied AI concepts including similarity scoring, user clustering, and dynamic event matchmaking to the proposed platform.',
      'Developed a user-centered concept aimed at improving social comfort for solo travelers.',
    ],
    technologies: ['Figma'],
    links: [
      {
        type: 'figma',
        label: 'Figma Prototype',
        href: 'https://www.figma.com/proto/EAd5dVOsHtVTyS0voKo1uB/AOL-AI?node-id=2016-6&t=g0kzOEZ9S69BqTqJ-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2016%3A6&show-proto-sidebar=1',
      },
    ],
  },
  {
    id: 'belanja-yuk',
    title: 'BelanjaYuk E-Commerce Web Application',
    year: '2025',
    category: 'Web Development',
    image: '/images/belanja-yuk.jpg',
    description:
      'An e-commerce web application developed as an IT Bootcamp project using ASP.NET Core 8, C#, and Microsoft SQL Server.',
    contribution: [
      'Developed buyer-side features including authentication, product browsing, shopping cart, checkout, and transaction history.',
      'Implemented category filtering, payment selection, profile management, and end-to-end transaction features.',
      'Designed and managed the relational database using Microsoft SQL Server and Entity Framework Core.',
      'Created SQL queries, stored procedures, and ETL processes for sales data analysis.',
    ],
    technologies: ['C#', 'ASP.NET Core 8', 'Microsoft SQL Server', 'Entity Framework Core'],
    links: [
      {
        type: 'github',
        label: 'GitHub',
        href: 'https://github.com/salza-pth/Belanja_yuk.git',
      },
    ],
  },
  {
    id: 'v-phone',
    title: "V-Phone's Website",
    year: '2025',
    category: 'Web Development',
    image: '/images/v-phone.jpg',
    description:
      'A smartphone website showcasing products based on customer needs across gaming, camera, and budget segments.',
    contribution: [
      'Designed the website UI/UX and a five-page prototype in Figma.',
      'Developed interactive website elements using HTML, CSS, and JavaScript.',
      'Applied HCI principles through consistent navigation and user-friendly interactions, including biodata and registration forms.',
    ],
    technologies: ['Figma', 'HTML', 'CSS', 'JavaScript'],
    links: [
      {
        type: 'github',
        label: 'GitHub',
        href: 'https://github.com/salza-pth/V-Phone-Website.git',
      },
      {
        type: 'figma',
        label: 'Figma Prototype',
        href: 'https://www.figma.com/proto/wRUuylhyin7c3cR9Zy5xBT/V-Phone?node-id=1-2&t=Qr4O6UnCBExNRjU1-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2',
      },
    ],
  },
  {
    id: 'data-analys',
    title: 'Cafe Sales Data Analysis & Visualization',
    year: '2026',
    category: 'Data & Analytics',
    image: '/images/data-analys.jpg',
    description:
      'Analyzed 10,000 cafe transactions to identify patterns, customer behavior, and business insights.',
    contribution: [
      'Performed data quality assessment and data cleaning using Python and Pandas as part of a team project.',
      'Analyzed customer behavior and transaction patterns through multivariate exploratory data analysis.',
      "Applied the Chi-Square Test and Cram\u00e9r's V to evaluate relationships between categorical variables.",
      'Designed two of the three Tableau dashboard pages to analyze revenue and relationships between variables.',
    ],
    technologies: ['Python', 'Pandas', 'Tableau'],
    links: [
      {
        type: 'github',
        label: 'GitHub',
        href: 'https://github.com/salza-pth/cafe-sales-analysis',
      },
      {
        type: 'tableau',
        label: 'Tableau Dashboard',
        href: 'https://public.tableau.com/app/profile/salzabilla.putri/viz/CafeBusinessSalesPerformanceAnalysis/DashboardOverview-1?publish=yes',
      },
    ],
  },
  {
    id: 'bdp',
    title: 'Walmart Sales Forecasting Model',
    year: '2026',
    category: 'Data & Analytics',
    image: '/images/bdp.jpg',
    description:
      'A distributed sales forecasting project using PySpark and machine learning to predict store-level Walmart sales.',
    contribution: [
      'Processed 421,570 training records using PySpark for preprocessing and feature engineering.',
      'Trained Linear Regression and Random Forest regression models using PySpark MLlib with a time-based train-test split.',
      'Compared models using RMSE and R\u00b2 to evaluate forecasting performance and select the better-performing model.',
    ],
    technologies: ['PySpark', 'PySpark MLlib', 'Machine Learning'],
    links: [
      {
        type: 'github',
        label: 'GitHub',
        href: 'https://github.com/salza-pth/walmart-sales-forecasting.git',
      },
      {
        type: 'powerbi',
        label: 'Power BI Dashboard',
        href: 'https://app.powerbi.com/view?r=eyJrIjoiMmFmNjM4NGYtOGZlYS00ZGNjLWE0NjYtNDQzODNmOTIxZTkzIiwidCI6IjM0ODViOTYzLTgyYmEtNGE2Zi04MTBmLWI1Y2MyMjZmZjg5OCIsImMiOjEwfQ%3D%3D',
      },
    ],
  },
  {
    id: 'gigstart',
    title: 'GigStart Website',
    year: '2026',
    category: 'Web Development',
    image: '/images/gigstart.jpg',
    description:
      'An AI-powered web platform integrating learning, competency assessment, portfolio building, and career preparation into one ecosystem.',
    contribution: [
      'Created user flows, wireframes, and high-fidelity interactive prototypes using Figma.',
      'Translated UI/UX designs into a responsive React/Vite frontend using reusable JSX and CSS components and interactive navigation.',
      'Integrated the frontend with the backend system for functional user interactions.',
    ],
    technologies: ['Figma', 'React', 'Vite', 'JavaScript', 'CSS'],
    links: [
      {
        type: 'github',
        label: 'GitHub',
        href: 'https://github.com/salza-pth/GigStart.git',
      },
      {
        type: 'demo',
        label: 'Live Demo',
        href: 'https://gigstart.vercel.app/',
      },
    ],
  },
  {
    id: 'data-eng',
    title: 'DKI Jakarta Air Quality Data Pipeline & Analytics',
    year: '2026',
    category: 'Data & Analytics',
    image: '/images/data-eng.jpg',
    description:
      'An automated ETL pipeline for processing and cleaning multi-station air quality data in Jakarta, enabling structured data storage and interactive dashboard visualization.',
    contribution: [
      'Cleaned historical ISPU data and removed missing values across five pollutant parameters.',
      'Built an automated ETL workflow using Pentaho Job to reduce manual preparation.',
      'Enhanced a Power BI dashboard using DAX Field Parameters for improved interactivity.',
    ],
    technologies: ['Pentaho', 'Power BI', 'DAX', 'ETL'],
    links: [
      {
        type: 'canva',
        label: 'Canva Presentation',
        href: 'https://canva.link/8s5jvwwg3xtyj5v',
      },
      {
        type: 'powerbi',
        label: 'Power BI Dashboard',
        href: 'https://app.powerbi.com/view?r=eyJrIjoiN2JhZTlhZDAtMjMyNC00NjY1LTljNGQtZmM1NjA4MzU4ZDRlIiwidCI6IjM0ODViOTYzLTgyYmEtNGE2Zi04MTBmLWI1Y2MyMjZmZjg5OCIsImMiOjEwfQ%3D%3D',
      },
    ],
  },
]
