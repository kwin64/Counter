import React from "react";
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
        <div className={helpMessage === 'Incorrect value' ? s.error : s.result}>
            <span className={counterValue === maxValue ? s.finalResult : ''}>
                {helpMessage ? helpMessage : counterValue}
            </span>
        </div>
    );
}

export default OutputResult;