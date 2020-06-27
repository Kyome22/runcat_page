import React from "react";
import { useTranslation } from "react-i18next";
import "./Footer.css";

export function Footer() {
  const { t } = useTranslation();

  return (
    <div className="footer">
      <div className="privacy-policy">
        <p className="contents-title">{t("privacy_policy")}</p>
        <button
          className="privacy-link"
          onClick={() => {
            window.location.href = t("privacy_policy_url");
          }}
        >
          {t("detail")}
        </button>
      </div>
      <div className="support">
        <p className="contents-title">{t("support")}</p>
        <a
          className="twitter-link"
          href="https://twitter.com/Kyomesuke"
          target="_blank"
        >
          <img className="link-image" src="images/kyome_twitter.png" alt="" />
          <span>@Kyomesuke</span>
        </a>
        <a
          className="facebook-link"
          href="https://www.facebook.com/takuto.nakamura.kyome"
          target="_blank"
        >
          <img className="link-image" src="images/kyome_facebook.png" alt="" />
          <span>Takuto Nakamura</span>
        </a>
      </div>
      <p className="copyright">{t("copyright")}</p>
    </div>
  );
}
