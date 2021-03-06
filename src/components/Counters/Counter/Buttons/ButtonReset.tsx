import React from 'react';
import s from './Buttons.module.css';

type PropsType = {
    counter: number,
    resetCounter: () => void,
}

const ButtonReset: React.FC<PropsType> = (
    {
        counter,
        resetCounter
    }
) => {

    return (
        <button className={s.button}
                onClick={resetCounter}
                disabled={counter === 0}>reset</button>
    );
}

export default ButtonReset;
