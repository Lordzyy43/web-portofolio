import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    title: "Revora Platform",
    slug: "revora-platform",
    category: "Fullstack",
    status: "Completed",
    featured: true,
    year: "2026",
    role: "Frontend experience and backend architecture",
    summary:
      "Vehicle service booking and tracking platform with customer, admin, mechanic, and owner workflows.",
    description:
      "Revora is a full vehicle-service platform that separates booking from workshop execution. I shaped the product flow so customers can book service, track progress, and approve estimates while the workshop team manages operations cleanly behind the scenes.",
    context:
      "The project was built to solve a real workflow gap: bookings, service orders, inspections, and approvals often live in separate tools, which makes the experience harder for both customers and workshops.",
    challenge:
      "The hardest part was balancing a customer-friendly booking journey with a backend structure that could still support owner dashboards, mechanic tasks, and operational tracking.",
    approach:
      "I split the system into a React + Vite client and a Laravel API, then used data shaping, role-based access, and frontend-friendly response formats so each dashboard could stay focused on the right user.",
    impact:
      "Revora pushed me to think like a product builder, not just a feature builder. It sharpened my understanding of state flow, API design, dashboard UX, and how different roles see the same system differently.",
    highlights: [
      "Customer, admin, mechanic, and owner workflows",
      "Role-based access and booking-to-service separation",
      "React + Vite client with React Query and Zustand",
      "Laravel 12 API with Sanctum and API Resource responses",
    ],
    tech: [
      "React",
      "Vite",
      "TypeScript",
      "React Query",
      "Zustand",
      "Laravel",
      "Sanctum",
    ],
    links: [
      {
        label: "Frontend Repo",
        url: "https://github.com/Lordzyy43/revora-client",
      },
      {
        label: "Backend Repo",
        url: "https://github.com/Lordzyy43/revora-api",
      },
    ],
    githubUrl: "https://github.com/Lordzyy43/revora-client",
  },
  {
    title: "Website Booking Lapangan",
    slug: "website-booking-lapangan",
    category: "Web App",
    status: "Completed",
    featured: true,
    year: "2026",
    role: "Web booking system",
    summary:
      "Laravel-based booking website for field reservations and user scheduling.",
    description:
      "This project focuses on a booking workflow for lapangan reservations, combining a structured backend with a user-facing reservation flow. It is a good example of how I handle practical CRUD systems, scheduling logic, and admin-facing management views.",
    context:
      "The problem space is simple on the surface, but booking systems get messy quickly once you add schedules, availability, user accounts, and management needs.",
    challenge:
      "The challenge is keeping the booking experience clear while preventing schedule conflicts and preserving a manageable admin workflow.",
    approach:
      "I treated the app like a real service business tool: clear navigation, reservation flow, and Laravel structure that can scale into a more complete booking product.",
    impact:
      "This project strengthens my ability to work on business-oriented web apps where correctness and clarity matter as much as the UI.",
    highlights: [
      "Reservation-centric UX",
      "Scheduling and availability thinking",
      "Laravel application structure",
      "Suitable for real-world booking workflows",
    ],
    tech: ["Laravel", "PHP", "MySQL", "Blade", "CSS"],
    githubUrl: "https://github.com/Lordzyy43/Website-Booking-lapangan",
  },
  {
    title: "E-Learning",
    slug: "e-learning",
    category: "Academic Project",
    status: "Completed",
    featured: false,
    year: "2026",
    role: "Learning portal and auth flow",
    summary:
      "PHP-based e-learning platform with login, registration, course pages, and admin area.",
    description:
      "E-learning is a simple but practical learning portal built around authentication, course access, and admin-style content management. It shows my earlier work on structured PHP applications and basic learning platform flows.",
    context:
      "The repository structure shows a compact learning system with admin, includes, login, register, and course pages, which is exactly the kind of early project that helped me understand application flow.",
    challenge:
      "The main challenge was making the project feel organized despite being built with a lightweight PHP structure.",
    approach:
      "I kept the implementation straightforward: separate pages for auth and course views, plus shared includes and CSS assets to keep the app maintainable.",
    impact:
      "Even if it is simpler than the newer projects, it documents an important part of my growth path and shows that I started with real application flow, not just static pages.",
    highlights: [
      "Login and registration flow",
      "Course page structure",
      "Admin-oriented folder organization",
      "Useful stepping stone into full web apps",
    ],
    tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/Lordzyy43/e-learning",
  },
  {
    title: "Portfolio Website",
    slug: "portfolio-website",
    category: "Web App",
    status: "In Progress",
    featured: true,
    year: "2026",
    role: "End-to-end design and development",
    summary:
      "Personal portfolio website built with Next.js, TypeScript, and Tailwind CSS.",
    description:
      "This portfolio is designed to show my work with a cleaner narrative: stronger typography, case-study structure, and a more intentional visual system that can grow with future projects.",
    context:
      "The site itself is part of the portfolio story, so I wanted the structure to feel like a product instead of a starter template.",
    challenge:
      "The challenge was making a personal site feel polished and distinct without making it heavy or overdesigned.",
    approach:
      "I organized the content into reusable sections, kept the data model flexible, and shaped the project pages so they can grow into richer case studies later.",
    impact:
      "This project gives me a better public face for the rest of my work and makes it easier to keep the portfolio updated over time.",
    highlights: [
      "Reusable section-based architecture",
      "Case-study-ready project pages",
      "Custom dark visual language",
      "SEO and social preview support",
    ],
    tech: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Vercel"],
    githubUrl: "https://github.com/Lordzyy43/web-portofolio",
  },
];

export function getAllProjects() {
  return projects;
}

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
