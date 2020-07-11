import React, { useState, useEffect } from "react";
import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import { ParsedQuery } from "query-string";
import { Helmet } from "react-helmet";
import { Header } from "./Header";
import { Top } from "./Top";
import { Content } from "./Content";
import { Footer } from "./Footer";
import ja from "./json/locales/ja.json";
import en from "./json/locales/en.json";
import "./App.css";

i18n.use(initReactI18next).init({
  debug: true,
  resources: {
    ja: { translation: ja },
    en: { translation: en },
  },
  lng: "ja",
  fallbackLng: "en",
  returnEmptyString: false,
});

const App: React.FC<{ qs: ParsedQuery }> = (props) => {
  const defaultLang = (qs: ParsedQuery) => {
    if ("lang" in qs && qs.lang === "en") {
      return "en";
    }
    return "ja";
  };
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState(defaultLang(props.qs));

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang, i18n]);

  const onLangChange = () => {
    window.scrollTo(0, 0);
    setLang(lang === "en" ? "ja" : "en");
  };

  return (
    <div className="app">
      <Helmet title={t("app_name")} />
      <Header onLangChange={onLangChange} />
      <div className="dummyHeader" />
      <Top />
      <Content />
      <Footer />
    </div>
  );
};

export default App;
