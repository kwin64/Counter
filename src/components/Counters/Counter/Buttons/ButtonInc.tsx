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
                disabled={false}>inc</button>
    );
}

export default ButtonInc;
