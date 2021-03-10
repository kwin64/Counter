import React from 'react';
import s from './Buttons.module.css';
import {HelpMessageType} from "../../../../App";

type PropsType = {
    helpMessage: HelpMessageType
    maxValue: number
    addNumberCount: () => void
    counterValue: number
}

const ButtonInc: React.FC<PropsType> = (
    {
        addNumberCount,
        maxValue,
        helpMessage,
        counterValue
    }
) => {

    return (
        <button className={s.button}
                onClick={addNumberCount}
                disabled={true ? maxValue === counterValue : false}>inc</button> //????
    );
}

export default ButtonInc;
