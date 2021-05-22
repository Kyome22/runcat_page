import React from "react";
import i18n from "i18next";
import { PreventImage } from "./Content";
import "./RunnerTable.css";

type RunnerValue = {
  en_name: string;
  ja_name: string;
  apng: string;
};

export type RunnerBox = {
  directory: string;
  runners: RunnerValue[];
};

type Props = {
  runnerBox: RunnerBox;
  rowNum: number;
  summary: boolean;
};

export function RunnerTable(props: Props) {
  const { runnerBox, rowNum, summary } = props;
  const { directory, runners } = runnerBox;
  const lang = i18n.language;

  const runnerGrid = (flag: boolean) => {
    return runners.map((enumValue, i) => {
      if (flag && rowNum <= i) {
        return null;
      }
      const name = lang == "en" ? enumValue.en_name : enumValue.ja_name;
      return (
        <div className="runner" key={`runenr-${i}`}>
          <div className="runner-image-box">
            <PreventImage
              class="runner-image"
              src={`images/runners/${directory}/${enumValue.apng}`}
              alt={name}
            />
          </div>
          <p className="newline">{name}</p>
        </div>
      );
    });
  };

  return (
    <div className={`runner-table grid-row-${rowNum}`}>
      {runnerGrid(summary)}
    </div>
  );
}
