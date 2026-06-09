export type Language = "tr" | "en";

export type LocalizedString = {
  tr: string;
  en: string;
};

export function pickLocalized(text: LocalizedString, lang: Language): string {
  return text[lang];
}
