import React from "react";
import "./Header.css";
import i18n from "i18next";
import { useTranslation } from "react-i18next";

type Props = {
  onLangChange: () => void;
};

export function Header(props: Props) {
  const lang = i18n.language;
  const { onLangChange } = props;
  const { t } = useTranslation();

  return (
    <div className="header">
      <div className="menubar">
        <img src={`images/${lang}/menubar.png`} alt="" />
      </div>
      <div className="header-item">
        <h2 className="title">{t("app_name")}</h2>
        <h3 className="language" onClick={onLangChange}>
          {t("language")}
        </h3>
      </div>
    </div>
  );
}
