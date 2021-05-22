import React from "react";
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import { PreventImage } from "./Content";
import "./SelfMade.css";

export default function SelfMade() {
  const lang = i18n.language;
  const { t } = useTranslation();

  return (
    <div className="section" id="self_made">
      <p className="contents-title">
        <PreventImage
          class="self-made-icon"
          src="images/runners/4_special/self_made.png"
          alt=""
        />
        {t("self_made")}
      </p>
      <p className="explain">{t("explain3")}</p>
      <div>
        <p className="howto">{t("draw_runner")}</p>
        <p className="howto-sub">{t("regulations")}</p>
        <ul className="regulations">
          <li>{t("format")}</li>
          <li>{t("height")}</li>
          <li>{t("width")}</li>
          <li>{t("number")}</li>
        </ul>
        <img className="howto" src="images/howto1.png" alt="" />
      </div>
      <div>
        <p className="howto">{t("open_preferences")}</p>
        <img
          className="howto"
          src={`images/${lang}/open_preferences.png`}
          alt=""
        />
      </div>
      <div>
        <p className="howto">{t("edit_runner")}</p>
        <p className="howto-sub">{t("preview")}</p>
        <img className="howto" src={`images/${lang}/self_made_1.png`} alt="" />
      </div>
      <div>
        <p className="howto">{t("edit_order")}</p>
        <p className="howto-sub">{t("drag_drop")}</p>
        <img className="howto" src={`images/${lang}/self_made_2.gif`} alt="" />
      </div>
      <div>
        <p className="howto">{t("register")}</p>
        <img className="howto" src={`images/${lang}/registered.png`} alt="" />
      </div>
      <p className="explain">{t("warning")}</p>
    </div>
  );
}
