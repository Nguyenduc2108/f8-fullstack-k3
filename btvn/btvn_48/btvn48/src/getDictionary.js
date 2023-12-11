const dictionaries = {
  vi: () => import("../dictionaries/vi.json").then((a) => a.default),
  en: () => import("../dictionaries/en.json").then((a) => a.default),
};

export const getDictionary = (lang) => {
  return dictionaries[lang];
};
