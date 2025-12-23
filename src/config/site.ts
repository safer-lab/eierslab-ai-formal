// SITE CONFIGURATION
// Edit this file to update your lab's basic information
// No coding knowledge required - just update the text between quotes

export const siteConfig = {
  // Lab name and tagline
  labName: "SAFER",
  labTagline: "SAFER: The Lab for Symbolic AI, Federated Learning, Explainability, and Robustness",

  // Principal Investigator
  pi: {
    name: "William Eiers",
    title: "Assistant Professor",
    department: "Department of Computer Science",
    university: "Stevens Institute of Technology",
    email: "weiers@stevens.edu",
    website: "https://william-eiers.github.io",
  },

  // Contact information
  contact: {
    address: "Gateway North, GN-404\nStevens Institute of Technology\nHoboken, NJ 07030",
  },

  // Social links (leave empty "" if not applicable)
  social: {
    twitter: "",
    github: "",
    scholar: "https://scholar.google.com/citations?user=william-eiers",
    linkedin: "",
  },

  // Homepage hero section
  hero: {
    title: "SAFER",
    subtitle: "The Lab for Symbolic AI, Federated Learning, Explainability, and Robustness",
  },

  // Research highlights (3-4 main areas)
  highlights: [
    {
      title: "Software Verification",
      description: "Developing tools and approaches for automatically verifying software, particularly in compute clouds like AWS, GCP, and Azure.",
    },
    {
      title: "Access Control Policy Analysis",
      description: "Using quantitative techniques for verifying and repairing access control policies, including permissiveness analysis and policy repair.",
    },
    {
      title: "Neural Network Verification",
      description: "Quantitative robustness verification for neural networks, including symbolic analysis and model counting approaches.",
    },
    {
      title: "Generative AI for Verification",
      description: "Investigating how large language models can be used in software verification and software engineering tasks.",
    },
  ],

  // News configuration
  news: {
    rssUrl: "https://techcrunch.com/category/artificial-intelligence/feed/",
  },
};
