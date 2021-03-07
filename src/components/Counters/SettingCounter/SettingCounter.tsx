import React, {Dispatch, SetStateAction, useState} from 'react';
import SettingCounterValues from "./SettingCounterValues/SettingCounterValues";
import ButtonSet from "./ButtonSet/ButtonSet";
import s from './SettingCounter.module.css';

type PropsType = {
    addNewValueCounter: (startValue: number, maxValue: number) => void
    startValue: number
    maxValue: number

}

const SettingCounter: React.FC<PropsType> = (
    {
        addNewValueCounter,
        startValue,
        maxValue
    }
) => {

    const [start, setStart] = useState<number>(startValue)
    const [max, setMax] = useState<number>(maxValue)

    const setNewValue = () => {
        addNewValueCounter(start, max)
    }
    return (
        <div className={s.container}>
            <SettingCounterValues
                                  setMax={setMax}
                                  setStart={setStart}
                                  max={max}
                                  start={start}

            />
            <div className={s.keyboards}>
                <ButtonSet onClick={setNewValue}/>
            </div>
        </div>
    );
}

export default SettingCounter;