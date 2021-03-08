import React, {ChangeEvent, Dispatch, SetStateAction, useState} from "react";
import s from "./SettingCounterValues.module.css";

type PropsType = {
    start: number
    max: number
    setMax: (value: number) => void
    setStart: (value: number) => void
    setError: Dispatch<SetStateAction<boolean>>
}

const SettingCounterValues: React.FC<PropsType> = (
    {
        start,
        max,
        setMax,
        setStart,
        setError
    }
) => {

    const [checkedValue, setCheckedValue] = useState(false)

    setError(checkedValue) //???

    const newMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.valueAsNumber <= 1) {
            setCheckedValue(true)
        }
        if (e.currentTarget.valueAsNumber > 0) {

        }
        setMax(e.currentTarget.valueAsNumber)
    }
    const newStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.valueAsNumber < 0) {
            setCheckedValue(true)
        }
        if (e.currentTarget.valueAsNumber > 0) {

        }
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