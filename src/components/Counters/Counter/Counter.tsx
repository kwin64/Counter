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
}

const Counter: React.FC<PropsType> = (
    {
        addNumberCount,
        counterValue,
        resetCounter,
        maxValue,
        startValue,
        helpMessage
    }
) => {


    return (
        <div className={s.container}>
            <OutputResult counterValue={counterValue}
                          maxValue={maxValue}
                          helpMessage={helpMessage}/>
            <div className={s.keyboards}>
                <ButtonInc counter={counterValue}
                           addNumberCount={addNumberCount}
                           maxValue={maxValue}/>
                <ButtonReset counter={counterValue}
                             resetCounter={resetCounter}
                             startValue={startValue}/>
            </div>
        </div>
    );
}

export default Counter;