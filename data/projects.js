export const projects = [
  {
    id: 1,
    title: "HoPak dormitory system",
    description: "HoPak is a comprehensive, cloud-native Software-as-a-Service (SaaS) platform designed to streamline and automate property management. Built to bridge the gap between property owners and tenants, the system eliminates manual paperwork by automating utility calculations, contract management, and invoicing. Additionally, it introduces an innovative gamified 'Behavior Score' system to incentivize timely payments and foster a better living environment.",
    category: "Software Engineerning",
    techStack: ["Next.js", "Supabase","Tailwind CSS"],
    githubUrl: "https://github.com/AofFy-122/hopak",
    liveUrl: "https://hopak.vercel.app/",
    image: "/hopak.png"
  },
  {
    id: 2,
    title: "AI Flower",
    description: "An end-to-end Deep Learning project designed to classify various flower species and identify potentially toxic plants using Computer Vision. The model processes floral images and predicts their species with high confidence, providing a foundational tool for botanical identification and safety screening.",
    category: "AI",
    techStack: ["Next.js", "Node.js", "Express","PyTorch","TensorFlow"],
    githubUrl: "https://github.com/AofFy-122/frontendAI",
    liveUrl: "https://aiflowers.vercel.app/",
    image: "/ai.png"
  },
  {
    id: 3,
    title: "Employee Check-in Project",
    description: "This project is a mobile application developed using Flutter, designed to streamline and modernize employee attendance tracking. It provides a seamless, accurate, and user-friendly platform for employees to log their working hours while giving administrators reliable location verification. The backend infrastructure is fully powered by Firebase, ensuring secure and real-time data synchronization.",
    category: "Mobile",
    techStack: ["Flutter", "Firebase"],
    githubUrl: "https://github.com/AofFy-122/employee_project",
    liveUrl: "",
    image: "/mobile.png"
  },
  {
    id: 4,
    title: "Automated Invoice & Accounting Processing Pipeline",
    description: "Developed a fully automated, end-to-end Python script designed to eliminate manual data entry and streamline the accounting workflow. The system acts as a digital accountant, continuously monitoring incoming emails for invoices, extracting complex line-item data via OCR, dynamically generating styled Excel reports, and triggering real-time push notifications to stakeholders.",
    category: "Other",
    techStack: ["Python", "Pytesseract", "Openpyxl", "OCR"],
    githubUrl: "https://github.com/AofFy-122/RPA_get-data-from-email-ues-OCR-and-Save-data-into-excel",
    liveUrl: "",
    image: "/rpa.png"
  },
  {
    id: 5,
    title: "DriveEase - Full-Stack Car Rental Platform",
    description: "An interactive, full-stack car rental application featuring Leaflet-based geolocation maps for dynamic, region-specific vehicle filtering. The application features advanced search capabilities, a secure booking flow, and a dedicated admin control panel for vehicle fleet management. Authentication and database functions are seamlessly integrated using Supabase.",
    category: "Web",
    techStack: ["Next.js", "Supabase", "Mantine UI", "Leaflet", "React Query"],
    githubUrl: "https://github.com/AofFy-122/car_rental",
    liveUrl: "https://car-rental-nine-eosin-13.vercel.app/",
    image: "/carrent.png"
  }
];
