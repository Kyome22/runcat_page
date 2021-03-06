import React from "react";
import { useTranslation } from "react-i18next";
import Plugins from "./Plugins";
import "./Footer.css";

export default function Footer() {
  const { t } = useTranslation();

  const mail = (() => {
    let str = "mailto:kyomesuke@icloud.com";
    str += `?subject=${t("mail_subject")}`;
    str += `&body=${t("mail_body")}`;
    return encodeURI(str);
  })();

  return (
    <div className="footer">
      <Plugins />
      <div className="section">
        <a className="anchor" id="privacy_policy" />
        <p className="contents-title">{t("privacy_policy")}</p>
        <a className="button" href={t("privacy_policy_url")}>
          {t("detail")}
        </a>
      </div>
      <div className="section">
        <a className="anchor" id="support" />
        <p className="contents-title">{t("support")}</p>
        <a className="mail-link" href={mail}>
          <img className="link-image" src="images/mail.png" />
          <span>kyomesuke[at]icloud.com</span>
        </a>
      </div>
      <div className="section">
        <a className="anchor" id="runcat_for_windows" />
        <p className="contents-title">RunCat for Windows</p>
        <img src="images/runcat_for_windows_demo.gif" alt="demo" />
        <p className="explain">{t("explain4")}</p>
        <a
          className="button"
          href="https://github.com/Kyome22/RunCat_for_windows"
        >
          {t("download_win")}
        </a>
      </div>
      <p className="copyright">{t("copyright")}</p>
    </div>
  );
}
