import React from 'react';
import s from './ButtonSet.module.css';

type PropsType = {
    onClick: () => void
}

const ButtonSet: React.FC<PropsType> = (
    {
        onClick
    }
) => {

    return (
        <button className={s.button}
                onClick={onClick}
                disabled={false}>set</button>
    );
}

export default ButtonSet;
