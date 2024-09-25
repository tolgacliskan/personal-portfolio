import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, Phone } from "lucide-react";

export const DATA = {
  name: "Tolga Çalışkan",
  initials: "TÇ",
  url: "https://tolgacliskan.com",
  location: "Bursa, Turkey",
  locationLink: "https://www.google.com/maps/place/nilufer",
  description:
    "Backend Developer",
  summary:
    "I have experience in web development and back-end services. I have worked on various projects involving backend, API integration, and payment systems. I have developed projects using technologies such as **PHP**, **Laravel**, **VueJS**, and **NodeJS**. Additionally, I have experience with cloud solutions using **AWS** and microservices architecture with **Spring Boot**. In my projects, I adhere to **SOLID principles** and best practices to deliver high-quality, scalable, and secure solutions. I emphasize **teamwork** to ensure the successful completion of projects. Currently, I am actively using **Laravel** to develop **REST API**s and working on projects",
  avatarUrl: "/me.png",
  skills: [
    "Laravel",
    "PHP",
    "REST API",
    "Kotlin",
    "Spring Boot",
    "AWS",
    "PostgreSQL",
    "MySQL",
    "Redis",
    "Codeigniter4",
    "Javascript",
    "Vue.js",
    "Node.js",
    "Teamwork",
    "E-commerce",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contactButtons: [
    {
      type: "Website",
      href: "https://tolgacliskan.com",
      icon: <Icons.globe className="size-3" />,
    },
    {
      type: "Email",
      href: "mailto:tolgacliskan@gmail.com",
      icon: <Icons.email className="size-3" />,
    },
    {
      type: "Phone",
      href: "tel:+905416164277",
      icon: <Icons.phone className="size-3" />,
    },
    {
      type: "GitHub",
      href: "https://github.com/tolgacliskan",
      icon: <Icons.github className="size-3" />,
    },
    {
      type: "LinkedIn",
      href: "https://www.linkedin.com/in/tolgacliskan/",
      icon: <Icons.linkedin className="size-3" />,
    },
  ],
  contact: {
    email: "tolgacliskan@gmail.com",
    tel: "+905416164277",
    social: {
      Email: {
        name: "Send Email",
        url: "mailto:tolgacliskan@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
      Phone: {
        name: "Call",
        url: "tel:+905416164277",
        icon: Icons.phone,
        navbar: true,
      },
      GitHub: {
        name: "GitHub",
        url: "https://github.com/tolgacliskan",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/tolgacliskan/",
        icon: Icons.linkedin,
        navbar: true,
      }
    },
  },

  work: [
    {
      company: "Turkticaret.Net",
      badges: [],
      location: "Bursa, Turkey",
      title: "Software Specialist",
      logoUrl: "/turkticaretnet-logo.jpeg",
      start: "September 2023",
      end: "Present",
      description:
        "In **e-commerce systems**, I used **PHP** technology to develop data models and back-ends with **Laravel’s Eloquent ORM and MVC** structures. I worked on **multi-tenant architectures** to design systems supporting multiple users. For mobile projects, I created and tested **REST APIs**, established **WebSocket** connections between **VueJS** and **NodeJS**, and developed real-time messaging modules. I handled various **bank integrations**, **payment systems**, and the integration of email and SMS services. Additionally, I adhered to **SOLID principles** while working on sustainable and scalable management systems, supporting their long-term success.",
    },
    {
      company: "Feat Speak",
      badges: [],
      location: "Hybrid",
      title: "Software Development Specialist",
      logoUrl: "/feat-logo.jpg",
      start: "August 2022",
      end: "September 2023",
      description:
        "I developed mobile application back-ends based on the **MVC structure** using **Spring Boot** and **Kotlin**. I created REST API documentation with **Swagger** and performed API testing. I prepared dashboards with **AWS CloudWatch** to classify and track incoming requests. I used **Docker** on **AWS** to deploy mobile back-ends and connected the application back-end to AI microservices on AWS. I designed database models using **PostgreSQL** and **NoSQL (DynamoDB)**, queried data, and conducted performance analysis. Additionally, I ensured successful project completion by working effectively in a team environment with other developers.",
    },
    {
      company: "Freelance",
      badges: [],
      location: "Remote",
      title: "Web Developer",
      logoUrl: "/freelance-logo.jpg",
      start: "January 2020",
      end: "April 2020",
      description:
        "I adapted front-end designs using **HTML5/CSS3**, **JavaScript**, and Bootstrap. I created and maintained websites with **OOP** and **MVC structures** using **PHP**, **CodeIgniter4**, and **Laravel** technologies. I designed database models using **MySQL** and **PostgreSQL**, and performed data creation and analysis tasks. I developed user-friendly interfaces for websites and tested their functionality. I worked on creating **e-commerce infrastructures**, **stock** and **order tracking systems**, virtual POS and **cargo integrations**. Additionally, I gained experience in sustainable and scalable systems such as **ERP**, **CRM**, and inventory management systems, and also worked on invoice and accounting systems.",
    }
  ],
  education: [
    {
      school: "Bursa Uludağ University",
      degree: "Bachelor's Degree of Computer Engineering",
      logoUrl: "/bursauludaguniversitesi_logo.jpeg",
      start: "2019",
      end: "2024",
    }
  ],
  projects: [
    {
      title: "Kadim Promosyon",
      href: "https://kadimpromosyon.com",
      dates: "",
      active: true,
      description:
        "",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "",
      active: true,
      description:
        "",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  hackathons: [
    {
      title: "Board Member",
      dates: "2022 - 2023",
      location: "Software Community",
      description: "",
      image: "/yazilim_toplulugu_logo.jpeg",
      mlh: "",
      links: [],
    },
    {
      title: "Board Member",
      dates: "2020 - 2022",
      location: "Radio and Television Community",
      description: "",
      image:
        "/ulurtv-logo.jpg",
      mlh: "",
      links: [],
    }
  ],
} as const;
