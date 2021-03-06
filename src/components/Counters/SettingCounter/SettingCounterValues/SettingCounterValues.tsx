import React from "react";
import s from "./SettingCounterValues.module.css";

type PropsType = {}

const SettingCounterValues: React.FC<PropsType> = (
    {}
) => {

    return (
        <div className={s.result}>
            <div className={s.containerInputValuesMax}>
                <span>max value: </span>
                <input className={s.inputValuesMax} type="number"/>
            </div>
            <div className={s.containerInputValuesStart}>
                <span>start value: </span>
                <input className={s.inputValuesStart} type="number"/>
            </div>
        </div>
    );
}

export default SettingCounterValues;