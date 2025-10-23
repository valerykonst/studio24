
export const i18n = {
    defaultLocale: "ru",
    locales: ["uk", "ru"],
    localeNames: {
        uk: "Українська",
        ru: "Русский",
    }
  } as const;
  
  export type Locale = (typeof i18n)["locales"][number];