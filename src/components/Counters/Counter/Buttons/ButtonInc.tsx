import React from 'react';
import s from './Buttons.module.css';

type PropsType = {
    counter: number,
    addNumberCount: () => void,
}

const ButtonInc: React.FC<PropsType> = (
    {
        counter,
        addNumberCount
    }
) => {

    return (
        <button className={s.button}
                onClick={addNumberCount}
                disabled={counter === 5}>inc</button>
    );
}

export default ButtonInc;
