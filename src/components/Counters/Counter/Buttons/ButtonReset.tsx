import React, {useEffect} from 'react';
import s from './Buttons.module.css';
import {HelpMessageType} from "../../../../App";

type PropsType = {
    counterValue: number
    maxValue: number
    resetCounter: () => void
    helpMessage: HelpMessageType
}

const ButtonReset: React.FC<PropsType> = (
    {
        counterValue,
        resetCounter,
        maxValue,
        helpMessage
    }
) => {


    return (
        <button className={s.button}
                onClick={resetCounter}
                disabled={maxValue === counterValue || helpMessage ? true : false}>reset</button> //???
    );
}

export default ButtonReset;
