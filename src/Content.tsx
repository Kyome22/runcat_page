import React from "react";
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import "./Content.css";

export function Content() {
  const lang = i18n.language;
  const { t } = useTranslation();

  const newline = (str: string) => {
    return str.split("\n").map((str, index) => (
      <React.Fragment key={index}>
        {str}
        <br />
      </React.Fragment>
    ));
  };

  return (
    <div className="content">
      <div className="what-is-this">
        <p className="contents-title">{t("what_is_this")}</p>
        <img className="" src="images/demo.gif" alt="demo" />
        <p className="explain">{newline(t("summary"))}</p>
      </div>
      <div className="useful-point">
        <p className="contents-title">{t("useful_point")}</p>
        <img className="" src={`images/${lang}/info.png`} alt="info" />
        <p className="explain">{t("explain1")}</p>
        <ul className="info-item">
          <li>{t("cpu")}</li>
          <li>{t("memory")}</li>
          <li>{t("disk")}</li>
          <li>{t("network")}</li>
        </ul>
      </div>
    </div>
  );
}
