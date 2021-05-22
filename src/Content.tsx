import React from "react";
import { useTranslation } from "react-i18next";
import Top from "./Top";
import UsefulPoint from "./UsefulPoint";
import Runners from "./Runners";
import SelfMade from "./SelfMade";
import "./Content.css";

export default function Content() {
  const { t } = useTranslation();

  return (
    <div className="content">
      <Top />
      <div className="section" id="what_is_this">
        <p className="contents-title">{t("what_is_this")}</p>
        <img src="images/demo.gif" alt="demo" />
        <p className="explain newline">{t("summary")}</p>
      </div>
      <UsefulPoint />
      <Runners />
      <SelfMade />
    </div>
  );
}

type ImageProps = {
  class: string;
  src: string;
  alt: string;
};

export function PreventImage(props: ImageProps) {
  return (
    <img
      className={props.class}
      src={props.src}
      alt={props.alt}
      onContextMenu={(e) => e.preventDefault()}
      onMouseDown={(e) => e.preventDefault()}
      onSelect={(e) => e.preventDefault()}
    />
  );
}
