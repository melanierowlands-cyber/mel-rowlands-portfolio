export const site = {
  name: "Mel Rowlands",
  role: "Product Designer",
  location: "Cape Town, South Africa",
  email: "melanie.rowlands@gmail.com",
  linkedin: "https://www.linkedin.com/in/melanierowlands/",
  linkedinLabel: "/in/melanierowlands",
  cvUrl: "/Mel-Rowlands-CV.pdf",
  cvLabel: "Download PDF",
  copyright: "© 2026 Mel Rowlands",
};

export const navLinks = [
  { label: "Work", href: "/#work" },
  { label: "Approach", href: "/approach" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerLinks: { label: string; href: string; download?: boolean }[] = [
  { label: "melanie.rowlands@gmail.com", href: `mailto:${site.email}` },
  { label: "LinkedIn", href: site.linkedin },
  { label: "Download CV", href: site.cvUrl, download: true },
];
