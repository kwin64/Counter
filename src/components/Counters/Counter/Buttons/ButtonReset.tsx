import React from 'react';
import s from './Buttons.module.css';

type PropsType = {
    resetCounter: () => void
    disableButtonReset: boolean
}

const ButtonReset: React.FC<PropsType> = (
    {
        resetCounter,
        disableButtonReset
    }
) => {

    return (
        <button className={s.button}
                onClick={resetCounter}
                disabled={disableButtonReset}
        >reset</button>
    );
}

export default ButtonReset;
