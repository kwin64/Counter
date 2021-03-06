import React from 'react';
import SettingCounterValues from "./SettingCounterValues/SettingCounterValues";
import ButtonSet from "./ButtonSet/ButtonSet";
import s from './SettingCounter.module.css';

type PropsType = {}

const SettingCounter: React.FC<PropsType> = (
    {}
) => {


    return (
        <div className={s.container}>
            <SettingCounterValues/>
            <div className={s.keyboards}>
                <ButtonSet/>
            </div>
        </div>
    );
}

export default SettingCounter;