import React from 'react';
import s from './Buttons.module.css';

type PropsType = {
    counter: number
    maxValue: number
    addNumberCount: () => void
}

const ButtonInc: React.FC<PropsType> = (
    {
        addNumberCount,
        maxValue,
        counter
    }
) => {

    return (
        <button className={s.button}
                onClick={addNumberCount}
                disabled={counter >= maxValue}>inc</button>
    );
}

export default ButtonInc;
