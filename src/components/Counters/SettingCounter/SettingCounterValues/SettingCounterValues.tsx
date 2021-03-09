import React, {ChangeEvent} from "react";
import s from "./SettingCounterValues.module.css";

type PropsType = {
    start: number
    max: number
    setMax: (value: number) => void
    setStart: (value: number) => void
}

const SettingCounterValues: React.FC<PropsType> = (
    {
        start,
        max,
        setMax,
        setStart,
    }
) => {

    const newMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        setMax(e.currentTarget.valueAsNumber)
    }
    const newStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        setStart(e.currentTarget.valueAsNumber)
    }


    return (
        <div className={s.result}>
            <div className={s.containerInputValuesMax}>
                <span>max value: </span>
                <input className={s.inputValuesMax} type="number"
                       onChange={newMaxValue}
                       value={max}/>
            </div>
            <div className={s.containerInputValuesStart}>
                <span>start value: </span>
                <input className={s.inputValuesStart} type="number"
                       onChange={newStartValue}
                       value={start}/>
            </div>
        </div>
    );
}

export default SettingCounterValues;