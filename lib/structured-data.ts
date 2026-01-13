export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Vinayak Pandey",
  url: "https://geekyvinayak.tech",
  image: "https://geekyvinayak.tech/profilephoto.jpeg",
  sameAs: [
    "https://github.com/geekyvinayak",
    "https://www.linkedin.com/in/ivinayakpandey/",
  ],
  jobTitle: "Full-stack Developer",
  worksFor: {
    "@type": "Organization",
    name: "Freelance",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ahmedabad",
    addressRegion: "Gujarat",
    addressCountry: "IN",
  },
  email: "geekyvinayak@gmail.com",
  description:
    "Full-stack developer specializing in building exceptional digital experiences with React, Node.js, and modern web technologies.",
  knowsAbout: [
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "JavaScript",
    "MongoDB",
    "PostgreSQL",
    "Tailwind CSS",
    "Full-stack Development",
    "Web Development",
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Vinayak Pandey Portfolio",
  url: "https://geekyvinayak.tech",
  description:
    "Portfolio website of Vinayak Pandey, a full-stack developer specializing in React, Node.js, and modern web technologies.",
  author: {
    "@type": "Person",
    name: "Vinayak Pandey",
  },
  inLanguage: "en-US",
};

export const portfolioSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: {
    "@type": "Person",
    name: "Vinayak Pandey",
    alternateName: "geekyvinayak",
    description:
      "Full-stack developer specializing in building exceptional digital experiences",
    image: "https://geekyvinayak.tech/profilephoto.jpeg",
    sameAs: [
      "https://github.com/geekyvinayak",
      "https://www.linkedin.com/in/ivinayakpandey/",
    ],
  },
};

export const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://geekyvinayak.tech",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Projects",
      item: "https://geekyvinayak.tech/#projects",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Skills",
      item: "https://geekyvinayak.tech/#skills",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Contact",
      item: "https://geekyvinayak.tech/#contact",
    },
  ],
};

