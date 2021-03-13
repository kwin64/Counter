import React from 'react';
import s from './Counter.module.css';
import ButtonInc from "./Buttons/ButtonInc";
import OutputResult from "./OutputResult/OutputResult";
import ButtonReset from "./Buttons/ButtonReset";
import {HelpMessageType} from "../../../App";

type PropsType = {
    addNumberCount: () => void
    counterValue: number
    resetCounter: () => void
    maxValue: number
    startValue: number
    helpMessage: HelpMessageType
    disableButtonInc: boolean
    disableButtonReset: boolean
}

const Counter: React.FC<PropsType> = (
    {
        addNumberCount,
        counterValue,
        resetCounter,
        maxValue,
        startValue,
        helpMessage,
        disableButtonInc,
        disableButtonReset
    }
) => {

    return (
        <div className={s.container}>
            <OutputResult counterValue={counterValue}
                          maxValue={maxValue}
                          helpMessage={helpMessage}/>
            <div className={s.keyboards}>
                <ButtonInc counterValue={counterValue}
                           maxValue={maxValue}
                           addNumberCount={addNumberCount}
                           disableButtonInc={disableButtonInc}/>
                <ButtonReset counterValue={startValue}
                             maxValue={maxValue}
                             resetCounter={resetCounter}
                             disableButtonReset={disableButtonReset}/>
            </div>
        </div>
    );
}

export default Counter;