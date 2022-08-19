import { useState } from "react";
import { content } from "../api/content";
import { getCookie, setCookie } from "../api/cookie";
import { Content, Language, LANG_KEY } from "../types/global";

export const useGetContent = (lang = "es") => {
  const cookie = globalThis.document?.cookie;
  const [language, setLanguage] = useState<Language>(
    getCookie(cookie, LANG_KEY) ?? (lang as Language)
  );
  console.log('lang', language)
  const response: Content = {};
  for (const key of Object.keys(content)) {
    response[key] = content[key][language];
  }

  const changeLanguage = (lang: Language) => {
    setCookie(LANG_KEY, lang);
    setLanguage(lang);
  };

  return {
    language,
    content: response,
    changeLanguage,
  };
};
