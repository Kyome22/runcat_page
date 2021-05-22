import React from "react";
import i18n from "i18next";
import { useTranslation } from "react-i18next";

export default function UsefulPoint() {
  const lang = i18n.language;
  const { t } = useTranslation();

  return (
    <div className="section" id="useful_point">
      <p className="contents-title">{t("useful_point")}</p>
      <img src={`images/${lang}/info.png`} alt="info" />
      <p className="explain">{t("explain1")}</p>
      <ul className="info-item">
        <li>{t("cpu")}</li>
        <li>{t("memory")}</li>
        <li>{t("battery")}</li>
        <li>{t("disk")}</li>
        <li>{t("network")}</li>
      </ul>
    </div>
  );
}
