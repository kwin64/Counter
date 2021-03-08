import React, {Dispatch, SetStateAction, useState} from "react";
import s from './OutputResult.module.css';

type PropsType = {
    counterValue: number
    maxValue:number
    error:boolean
}

const OutputResult: React.FC<PropsType> = (
    {
        counterValue,
        maxValue,
        error
    }
) => {

    return (
        <div className={s.result}>
            <span className={
                counterValue === maxValue ? s.finalResult : ''}>
                {error ? 'Incorrect value!' : 'Enter values and press `set`'}</span>
        </div>
    );
}

export default OutputResult;