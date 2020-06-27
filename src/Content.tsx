import React from "react";
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import defaults from "./json/defaults.json";
import animal from "./json/animal.json";
import inanimate from "./json/inanimate.json";
import seasonal from "./json/seasonal.json";
import special from "./json/special.json";
import "./Content.css";

export type RunnerValue = {
  en_name: string;
  ja_name: string;
  apng: string;
};

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
            <img src={enumValue.apng} alt={name} />
          </div>
          <p>{name}</p>
        </td>
      );
    });
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
        <table className="runner-table">
          <tbody>{trs(rows(defaults, 5))}</tbody>
        </table>
      </div>
      <div className="runners-store">
        <p className="contents-title">{t("runners_store")}</p>
        <p className="explain">{t("animal")}</p>
        <table className="runner-table">
          <tbody>{trs(rows(animal, 5))}</tbody>
        </table>
        <p className="explain">{t("inanimate")}</p>
        <table className="runner-table">
          <tbody>{trs(rows(inanimate, 5))}</tbody>
        </table>
        <p className="explain">{t("seasonal")}</p>
        <table className="runner-table">
          <tbody>{trs(rows(seasonal, 4))}</tbody>
        </table>
        <p className="explain">{t("special")}</p>
        <table className="runner-table">
          <tbody>{trs(rows(special, 2))}</tbody>
        </table>
      </div>
    </div>
  );
}
