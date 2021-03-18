import React, {ChangeEvent, Dispatch, SetStateAction} from "react";
import s from "./SettingCounterValues.module.css";
import {HelpMessageType} from "../../../../App";
import {TextField} from "@material-ui/core";

type PropsType = {
    start: number
    max: number
    setMax: (value: number) => void
    setStart: (value: number) => void
    setDisableButtonInc: Dispatch<SetStateAction<boolean>>
    helpMessage: HelpMessageType
}

const SettingCounterValues: React.FC<PropsType> = (
    {
        start,
        max,
        setMax,
        setStart,
        setDisableButtonInc,
        helpMessage
    }
) => {

    const newMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        setMax(e.currentTarget.valueAsNumber)
        setDisableButtonInc(true)
    }
    const newStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        setStart(e.currentTarget.valueAsNumber)
        setDisableButtonInc(true)
    }

    return (
        <div className={helpMessage === 'Incorrect value' ? s.error : s.result}>
            <div className={s.containerInputValuesMax}>
                <span>max value: </span>
                <TextField className={helpMessage === 'Incorrect value' ? s.errorInput : s.inputValuesMax}
                           id="standard-number"
                           type="number"
                           InputLabelProps={{
                               shrink: true,
                           }}
                           onChange={newMaxValue}
                           value={max}/>
            </div>
            <div className={s.containerInputValuesStart}>
                <span>start value: </span>
                <TextField className={helpMessage === 'Incorrect value' ? s.errorInput : s.inputValuesStart}
                    type="number"
                    onChange={newStartValue}
                    value={start}/>
            </div>
        </div>
    );
}

export default SettingCounterValues;