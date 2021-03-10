import React from 'react';
import s from './ButtonSet.module.css';
import {HelpMessageType} from "../../../../App";

type PropsType = {
    onClick: () => void
    helpMessage: HelpMessageType
}

const ButtonSet: React.FC<PropsType> = (
    {
        onClick,
        helpMessage
    }
) => {

    return (
        <button className={s.button}
                onClick={onClick}
                disabled={helpMessage === 'Enter values and press set' ? false : true}>set</button>
    );
}

export default ButtonSet;
