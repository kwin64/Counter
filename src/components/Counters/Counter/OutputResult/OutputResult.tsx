import React, {Dispatch, SetStateAction, useState} from "react";
import s from './OutputResult.module.css';
import {HelpMessageType} from "../../../../App";

type PropsType = {
    counterValue: number
    maxValue: number
    helpMessage: HelpMessageType
}

const OutputResult: React.FC<PropsType> = (
    {
        counterValue,
        maxValue,
        helpMessage
    }
) => {

    return (
        <div className={s.result}>
            <span className={counterValue === maxValue ? s.finalResult : ''}>
                {counterValue}</span>
            {/*{helpMessage}{counterValue} как связать?????*/}
            {/*(error ? 'Incorrect value!' : 'Enter values and press `set`')??*/}
        </div>
    );
}

export default OutputResult;