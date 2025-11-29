export const projectsData = [
  {
    slug: "aig-education-global",
    title: "AIG Education Global Platform",
    description:
      "Transformed an outdated WordPress website into a powerful, custom-built school discovery platform with a modern database system, helping international families find and compare 500+ schools worldwide.",
    image: "/clients/AIG/1.png",
    liveUrl: "https://aigeducation.pages.dev/",
    category: "Education Platform",
    tech: ["Next.js", "React", "PostgreSQL", "Google Maps API", "Tailwind CSS", "Cloudflare"],
    color: "azure-green",
    accent: "#c60000",
    gradient: "from-emerald-500 to-green-600",
    year: "2025",
    caseStudy: {
      client: "AIG Education Global",
      duration: "4 months",
      challenge:
        "AIG Education Global was running an outdated WordPress website that couldn't handle their growing database of international schools. The platform had no search functionality, poor mobile experience, and required manual updates for every school listing. Families struggled to find relevant schools, and AIG couldn't scale their mission to help international families navigate global education options.",
      solution:
        "We completely redesigned and rebuilt the platform from scratch with a custom PostgreSQL database, modern React/Next.js frontend, and intuitive UI/UX. Migrated 1000+ school listings from static pages to a dynamic, searchable database. Implemented advanced filtering, Google Maps integration, and a mobile-first responsive design that works seamlessly on all devices.",
      beforeAfter: {
        before: [
          "Static WordPress pages with no search",
          "Manual updates required for each school",
          "Poor mobile experience",
          "No filtering or comparison tools", 
          "Limited to basic text information",
          "Slow loading times"
        ],
        after: [
          "Dynamic database-driven platform",
          "Instant search across 500+ schools",
          "Beautiful mobile-first design",
          "Advanced filters (location, curriculum, fees)",
          "Lightning-fast performance"
        ]
      },
      results: [
        { metric: "500+", label: "Schools in Database" },
        { metric: "1K+", label: "Monthly Active Users" },
        { metric: "8 min", label: "Average Session Time" },
        { metric: "95%", label: "Mobile Traffic" }
      ],
      features: [
        "Custom PostgreSQL database for 500+ schools",
        "Advanced search with instant results",
        "Smart filtering (location, curriculum, fees, language)",
        "Detailed school profiles with rich content",
        "Curriculum and program listings",
        "Transparent tuition fee information",
        "Bilingual support (Vietnamese/English)",
        "Fully responsive mobile design",
        "Admin dashboard for easy updates"
      ],
      technologies: [
        { name: "Next.js 14", purpose: "Modern React framework for server-side rendering" },
        { name: "PostgreSQL", purpose: "Robust database for school data" },
        { name: "Tailwind CSS", purpose: "Responsive, utility-first styling" },
        { name: "Vercel", purpose: "Fast, global deployment" }
      ],
      screenshots: [
        {
          image: "/clients/AIG/1.png",
          title: "Homepage & Search",
          description: "Clean, intuitive landing page with powerful search functionality"
        },
        {
          image: "/clients/AIG/3.png",
          title: "School Listings",
          description: "Browse 1000+ schools with advanced filtering options"
        },
      ]
    },
  },
];
