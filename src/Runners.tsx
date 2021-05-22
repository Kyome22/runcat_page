import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { RunnerTable, RunnerBox } from "./RunnerTable";
import defaults from "./json/defaults.json";
import animal from "./json/animal.json";
import inanimate from "./json/inanimate.json";
import seasonal from "./json/seasonal.json";
import special from "./json/special.json";

interface StringKeyObject {
  [key: string]: boolean;
}

type SummaryButtonProps = {
  id: string;
  onClickHandler: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  buttonLabelFlag: boolean;
};

function SummaryButton(props: SummaryButtonProps) {
  const { t } = useTranslation();
  return (
    <button className="summary" id={props.id} onClick={props.onClickHandler}>
      {props.buttonLabelFlag ? t("show_more") : t("show_less")}
    </button>
  );
}
// SHOW MORE, SHOW LESS

export default function Runners() {
  const { t } = useTranslation();

  const [summaries, setSummaries] = useState<StringKeyObject>({
    defaults: true,
    animal: true,
    inanimate: true,
    seasonal: true,
    special: false,
  });

  const handleSummaries = (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    const id = event.currentTarget.id;
    const obj = { [id]: !summaries[id] };
    setSummaries(Object.assign({}, summaries, obj));
  };

  const runnerSet = (id: string, box: RunnerBox, num: number) => {
    return (
      <React.Fragment>
        <p className="explain">{t(id)}</p>
        <RunnerTable runnerBox={box} rowNum={num} summary={summaries[id]} />
        {num < box.runners.length && (
          <SummaryButton
            id={id}
            onClickHandler={handleSummaries}
            buttonLabelFlag={summaries[id]}
          />
        )}
      </React.Fragment>
    );
  };

  return (
    <React.Fragment>
      <div className="section">
        <a className="anchor" id="happy_runners" />
        <p className="contents-title">{t("happy_runners")}</p>
        {runnerSet("defaults", defaults, 5)}
      </div>
      <div className="section">
        <a className="anchor" id="runners_store" />
        <p className="contents-title">{t("runners_store")}</p>
        {runnerSet("animal", animal, 5)}
        {runnerSet("inanimate", inanimate, 5)}
        {runnerSet("seasonal", seasonal, 4)}
        {runnerSet("special", special, 3)}
        <p className="explain" id="help">
          {t("more")}
        </p>
      </div>
    </React.Fragment>
  );
}
