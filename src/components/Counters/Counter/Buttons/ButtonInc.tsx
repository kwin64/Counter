import React, {useEffect, useState} from 'react';
import s from './Buttons.module.css';
import {HelpMessageType} from "../../../../App";

type PropsType = {
    helpMessage: HelpMessageType
    maxValue: number
    addNumberCount: () => void
    counterValue: number
    disabled:boolean
}

const ButtonInc: React.FC<PropsType> = (
    {
        addNumberCount,
        maxValue,
        helpMessage,
        counterValue,
        disabled
    }
) => {

    return (
        <button className={s.button}
                onClick={addNumberCount}
                disabled={disabled}
        >inc</button>
    );
}

export default ButtonInc;
