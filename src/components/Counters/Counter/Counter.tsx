import React, {useEffect, useState} from 'react';
import s from './Counter.module.css';
import ButtonInc from "./Buttons/ButtonInc";
import OutputResult from "./OutputResult/OutputResult";
import ButtonReset from "./Buttons/ButtonReset";
import {HelpMessageType} from "../../../App";
import SettingCounter from "../SettingCounter/SettingCounter";

type PropsType = {
    addNumberCount: () => void
    counterValue: number
    resetCounter: () => void
    maxValue: number
    startValue: number
    helpMessage: HelpMessageType
    disableSettingsBtn:boolean
}

const Counter: React.FC<PropsType> = (
    {
        addNumberCount,
        counterValue,
        resetCounter,
        maxValue,
        startValue,
        helpMessage,
        disableSettingsBtn
    }
) => {

    return (
        <div className={s.container}>
            <OutputResult counterValue={counterValue}
                          maxValue={maxValue}
                          helpMessage={helpMessage}/>
            <div className={s.keyboards}>
                <ButtonInc helpMessage={helpMessage}
                           addNumberCount={addNumberCount}
                           maxValue={maxValue}
                           counterValue={counterValue}
                           disabled={disableSettingsBtn}
                />
                <ButtonReset maxValue={maxValue}
                             helpMessage={helpMessage}
                             resetCounter={resetCounter}
                             counterValue={startValue}
                             disabled={disableSettingsBtn}
                             />
            </div>
        </div>
    );
}

export default Counter;