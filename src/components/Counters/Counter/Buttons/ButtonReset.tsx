import React from 'react';
import s from './Buttons.module.css';

type PropsType = {
    counter: number
    startValue: number
    resetCounter: () => void
}

const ButtonReset: React.FC<PropsType> = (
    {
        counter,
        resetCounter,
        startValue
    }
) => {

    return (
        <button className={s.button}
                onClick={resetCounter}
                disabled={counter === startValue}>reset</button>
    );
}

export default ButtonReset;
