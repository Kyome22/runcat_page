import React from "react";
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import { RunnerTable } from "./RunnerTable";
import defaults from "./json/defaults.json";
import animal from "./json/animal.json";
import inanimate from "./json/inanimate.json";
import seasonal from "./json/seasonal.json";
import special from "./json/special.json";
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
      <div className="happy-runners">
        <p className="contents-title">{t("happy_runners")}</p>
        <p className="explain">{t("explain2")}</p>
        <RunnerTable values={defaults} num={5} />
      </div>
      <div className="runners-store">
        <p className="contents-title">{t("runners_store")}</p>
        <p className="explain">{t("animal")}</p>
        <RunnerTable values={animal} num={5} />
        <p className="explain">{t("inanimate")}</p>
        <RunnerTable values={inanimate} num={5} />
        <p className="explain">{t("seasonal")}</p>
        <RunnerTable values={seasonal} num={4} />
        <p className="explain">{t("special")}</p>
        <RunnerTable values={special} num={2} />
        <p className="explain">{t("more")}</p>
      </div>
      <div className="self-made">
        <p className="contents-title">
          <img
            className="self-made-icon"
            src="images/runners/4_special/self_made.png"
            alt=""
            onContextMenu={(e) => e.preventDefault()}
            onMouseDown={(e) => e.preventDefault()}
            onSelect={(e) => e.preventDefault()}
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
          <img className="howto-700" src="images/howto1.png" />
        </div>
        <div>
          <p className="howto">{t("open_preferences")}</p>
          <img className="howto-300" src="images/en/howto2.png" />
        </div>
        <div>
          <p className="howto">{t("edit_runner")}</p>
          <p className="howto-sub">{t("preview")}</p>
          <img className="howto-700" src="images/en/howto3.png" />
        </div>
        <div>
          <p className="howto">{t("edit_order")}</p>
          <p className="howto-sub">{t("drag_drop")}</p>
          <img className="howto-700" src="images/en/howto4.gif" />
        </div>
        <div>
          <p className="howto">{t("register")}</p>
          <img className="howto-400" src="images/en/howto5.png" />
        </div>
        <p className="attention">{t("warning")}</p>
      </div>
    </div>
  );
}
