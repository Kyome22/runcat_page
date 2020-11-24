import React from "react";
import i18n from "i18next";
import "./RunnerTable.css";

type RunnerValue = {
  en_name: string;
  ja_name: string;
  apng: string;
};

type RunnerBox = {
  directory: string;
  runners: RunnerValue[];
};

type Props = {
  runnerBox: RunnerBox;
  num: number;
};

export function RunnerTable(props: Props) {
  const { runnerBox, num } = props;
  const { directory, runners } = runnerBox;
  const lang = i18n.language;

  const rows = (values: RunnerValue[], n: number) => {
    return values.reduce(
      (array, value) => {
        if (array[array.length - 1].length < n) {
          array[array.length - 1].push(value);
        } else {
          array.push([value]);
        }
        return array;
      },
      [[]] as RunnerValue[][]
    );
  };

  const trs = (rows: RunnerValue[][]) => {
    return rows.map((enumValues, i) => (
      <tr key={`tr-${i}`}>{tds(enumValues)}</tr>
    ));
  };

  const tds = (row: RunnerValue[]) => {
    return row.map((enumValue, i) => {
      const name = lang == "en" ? enumValue.en_name : enumValue.ja_name;
      return (
        <td key={`td-${i}`}>
          <div className="runner">
            <img
              src={`images/runners/${directory}/${enumValue.apng}`}
              alt={name}
              onContextMenu={(e) => e.preventDefault()}
              onMouseDown={(e) => e.preventDefault()}
              onSelect={(e) => e.preventDefault()}
            />
          </div>
          <p className="newline">{name}</p>
        </td>
      );
    });
  };

  return (
    <table className="runner-table">
      <tbody>{trs(rows(runners, num))}</tbody>
    </table>
  );
}
