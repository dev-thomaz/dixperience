export const navigation = [
  { id: "home", label: "Home" },
  { id: "work", label: "Work" },
  { id: "solutions", label: "Solutions" },
  { id: "products", label: "Products" },
  { id: "contact", label: "Contact" },
] as const;

export const email = "contacto@dixperience.com";
export const whatsapp =
  "https://wa.me/351936277504?text=" +
  encodeURIComponent("Hi! I found D!XPERIENCE through your website and would love to discuss a project.");
export const linkedin = "https://www.linkedin.com/in/diandra-lavareda";

export const description =
  "Creative and digital consultancy. We combine digital strategy, creativity, design, and technology to build brands and digital experiences that connect with people, drive growth, and deliver meaningful business results.";

export const solutions = {
  consulting: {
    name: "Creative & Digital Consulting",
    details: "Brand consulting, digital strategy, customer experience and business communication.",
  },
  marketing: {
    name: "Digital Marketing & Growth",
    details: "Social media, paid campaigns, content marketing, email and growth strategy.",
  },
  "web-design": {
    name: "Web & Digital Design",
    details: "Websites, landing pages, e-commerce, apps and digital experiences.",
  },
  communication: {
    name: "Content & Communication",
    details: "UX writing, copywriting, content design and content strategy.",
  },
  branding: {
    name: "Branding & Creative Design",
    details: "Brand identity, graphic design, visual communication and art direction.",
  },
  "product-design": {
    name: "UX/UI & Product Design",
    details: "User research, product design, prototyping and user journeys.",
  },
} as const;

export const products = [
  {
    name: "Websites & landing pages",
    details: "Institutional websites and campaign pages that put your message and the next step first.",
  },
  {
    name: "E-commerce",
    details: "Digital storefronts that make it easier to discover, explore and buy your products.",
  },
  {
    name: "Apps & digital experiences",
    details: "User journeys, interfaces and prototypes that turn an idea into something people can use.",
  },
];
