export const locales = ["en", "pt"] as const;
export type Locale = (typeof locales)[number];

export const localePaths: Record<Locale, string> = { en: "/", pt: "/pt" };
export const languageTags: Record<Locale, string> = { en: "en", pt: "pt-PT" };

export const sectionIds = ["home", "solutions", "work", "brands", "approach", "products", "about", "contact"] as const;
export const navigationIds = ["home", "solutions", "work", "approach", "products", "contact"] as const;

export const email = "contacto@dixperience.com";
export const linkedin = "https://www.linkedin.com/in/diandra-lavareda";

export function whatsappLink(message: string) {
  return "https://wa.me/351936277504?text=" + encodeURIComponent(message);
}
