import React from 'react';
import s from './Buttons.module.css';

type PropsType = {
    maxValue: number
    addNumberCount: () => void
    counterValue: number
    disableButtonInc: boolean
}

const ButtonInc: React.FC<PropsType> = (
    {
        addNumberCount,
        maxValue,
        counterValue,
        disableButtonInc
    }
) => {

    return (
        <button className={s.button}
                onClick={addNumberCount}
                disabled={disableButtonInc || counterValue === maxValue}
        >inc</button>
    );
}

export default ButtonInc;
