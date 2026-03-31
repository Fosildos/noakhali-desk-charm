import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "bn" | "en";

interface LangContextType {
  lang: Lang;
  toggle: () => void;
}

const LangContext = createContext<LangContextType>({ lang: "bn", toggle: () => {} });

export const useLang = () => useContext(LangContext);

export const LangProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("bn");
  const toggle = () => setLang((l) => (l === "bn" ? "en" : "bn"));
  return <LangContext.Provider value={{ lang, toggle }}>{children}</LangContext.Provider>;
};

/** Helper: returns Bengali text, English text, or both based on lang */
export const t = (bn: string, en: string, lang: Lang) => {
  if (lang === "bn") return bn;
  return en;
};
