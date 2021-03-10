import React, {useEffect, useState} from 'react';
import SettingCounterValues from "./SettingCounterValues/SettingCounterValues";
import ButtonSet from "./ButtonSet/ButtonSet";
import s from './SettingCounter.module.css';
import {HelpMessageType} from "../../../App";

type PropsType = {
    addNewValueCounter: (startValue: number, maxValue: number) => void
    startValue: number
    maxValue: number
    setHelpMessage: (value: HelpMessageType) => void
    helpMessage: HelpMessageType
}

const SettingCounter: React.FC<PropsType> = (
    {
        addNewValueCounter,
        startValue,
        maxValue,
        setHelpMessage,
        helpMessage
    }
) => {

    const [start, setStart] = useState<number>(startValue)
    const [max, setMax] = useState<number>(maxValue)

    useEffect(() => {
        if (start < 0 || start >= max || max < 1) {
            setHelpMessage('Incorrect value')
        } else setHelpMessage('Enter values and press set')
    },[start, max])

    const setNewValue = () => {
        addNewValueCounter(start, max)
    }

    return (
        <div className={s.container}>
            <SettingCounterValues setMax={setMax}
                                  setStart={setStart}
                                  max={max}
                                  start={start}/>
            <div className={s.keyboards}>
                <ButtonSet onClick={setNewValue}
                           helpMessage={helpMessage}/>
            </div>
        </div>
    );
}

export default SettingCounter;