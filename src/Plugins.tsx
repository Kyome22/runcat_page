import React from "react";
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import { PreventImage } from "./Content";

export default function Plugins() {
  const lang = i18n.language;
  const { t } = useTranslation();

  return (
    <div className="section">
      <a className="anchor" id="plugins" />
      <p className="contents-title">
        <PreventImage
          class="plugins-icon"
          src="images/plugins_icon.png"
          alt=""
        />
        RunCat Plugins Manager
      </p>
      <img src={`images/${lang}/plugins.png`} alt="plugins" />
      <p className="limited-explain">{t("explain3")}</p>
      <a
        className="button"
        href="/packages/RunCat_Plugins_Manager.dmg"
        download="RunCat_Plugins_Manager.dmg"
      >
        {t("download")}
      </a>
    </div>
  );
}
