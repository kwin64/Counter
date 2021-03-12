import React, {useEffect, useState} from 'react';
import s from './Buttons.module.css';
import {HelpMessageType} from "../../../../App";

type PropsType = {
    counterValue: number
    maxValue: number
    resetCounter: () => void
    helpMessage: HelpMessageType
    disabled:boolean
}

const ButtonReset: React.FC<PropsType> = (
    {
        resetCounter,
        disabled
    }
) => {

    return (
        <button className={s.button}
                onClick={resetCounter}
                disabled={disabled}
        >reset</button>
    );
}

export default ButtonReset;
