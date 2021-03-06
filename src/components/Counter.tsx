import React, {useState} from 'react';
import s from './Counter.module.css';
import ButtonInc from "./Buttons/ButtonInc";
import OutputResult from "./OutputResult/OutputResult";
import ButtonReset from "./Buttons/ButtonReset";

const Counter = () => {

    const [counter, setCounter] = useState<number>(0)

    const addNumberCount = () => {
        setCounter(counter + 1)
    }
    const resetCounter = () => {
        setCounter(0)
    }

    return (
        <div className={s.container}>
            <OutputResult counter={counter}/>
            <div className={s.keyboards}>
                <ButtonInc counter={counter}
                           addNumberCount={addNumberCount}/>
                <ButtonReset counter={counter}
                             resetCounter={resetCounter}/>
            </div>
        </div>
    );
}

export default Counter;