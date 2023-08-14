import React from "react";
import SelectAnswer from "../SelectAnswer/SelectAnswer";
import style from "./style.module.css";

export default function SymptomForm() {
  return (
    <div className={style["container"]}>
      <SelectAnswer />
    </div>
  );
}
