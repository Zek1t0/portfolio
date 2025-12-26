import en from "./en";
import es from "./es";

export const LANGS = ["en", "es"] as const;
export type Lang = typeof LANGS[number];

export const UI: Record<Lang, any> = { en, es };

export function isLang(x: string): x is Lang {
  return (LANGS as readonly string[]).includes(x);
}
