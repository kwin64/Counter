import React from "react";
import s from './OutputResult.module.css';

type PropsType = {
    counter: number,
}

const OutputResult: React.FC<PropsType> = (
    {
        counter
    }
) => {

    return (
        <div className={s.result}>
            <span className={counter === 5 ? s.finalResult : ''}>{counter}</span>
        </div>
    );
}

export default OutputResult;