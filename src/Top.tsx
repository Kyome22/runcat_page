import React from "react";
import { useTranslation } from "react-i18next";
import "./Top.css";

export function Top() {
  const { t } = useTranslation();

  return (
    <div className="top">
      <div className="app">
        <img className="app-icon" src="images/icon.png" alt="" />
        <span className="app-name">{t("app_name")}</span>
      </div>
      <h2 className="catchcopy">{t("catchcopy")}</h2>
      <h3 className="short-description">{t("short_description")}</h3>
      <img
        className="download-icon"
        src="images/en/download_on_the_App_Store.svg"
        alt=""
        onClick={() => {
          window.location.href = t("download_url");
        }}
      />
    </div>
  );
}
