import React from 'react';
import s from './Counter.module.css';
import ButtonInc from "./Buttons/ButtonInc";
import OutputResult from "./OutputResult/OutputResult";
import ButtonReset from "./Buttons/ButtonReset";

type PropsType = {
    addNumberCount: () => void
    counterValue: number
    resetCounter: () => void
}

const Counter: React.FC<PropsType> = (
    {
        addNumberCount,
        counterValue,
        resetCounter
    }
) => {

    return (
        <div className={s.container}>
            <OutputResult counter={counterValue}/>
            <div className={s.keyboards}>
                <ButtonInc counter={counterValue}
                           addNumberCount={addNumberCount}/>
                <ButtonReset counter={counterValue}
                             resetCounter={resetCounter}/>
            </div>
        </div>
    );
}

export default Counter;