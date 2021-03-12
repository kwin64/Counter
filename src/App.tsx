import React, {useEffect, useState} from 'react';
import Counter from './components/Counters/Counter/Counter';
import SettingCounter from "./components/Counters/SettingCounter/SettingCounter";
import s from './App.module.css';

export type HelpMessageType = 'Incorrect value' | 'Enter values and press set'

const App = () => {

    const [counterValue, setCounterValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(1)
    const [startValue, setStartValue] = useState<number>(0)
    const [helpMessage, setHelpMessage] = useState<HelpMessageType>('Enter values and press set')
    const [disableSettingsBtn, setDisableSettingsBtn] = useState<boolean>(true)

    useEffect(() => {
        const valueAsString = localStorage.getItem('counterValue')
        if (valueAsString) {
            const newValue = JSON.parse(valueAsString)
            setCounterValue(newValue)
        }
    }, [])
    useEffect(() => {
        localStorage.setItem('counterValue', JSON.stringify(counterValue))
    },[counterValue])

    const addNumberCount = () => {
        debugger
        if (counterValue + 1 <= maxValue) {
            setCounterValue(counterValue + 1)

        }
    }
    const addNewValueCounter = (startValue: number, maxValue: number) => {
        debugger
        setCounterValue(startValue)
        setMaxValue(maxValue)
        setStartValue(startValue)
        setDisableSettingsBtn(false)
        setHelpMessage('Enter values and press set')
    }
    const resetCounter = () => {
        setCounterValue(startValue)
    }


    return (
        <div className={s.container}>
            <Counter addNumberCount={addNumberCount}
                     counterValue={counterValue}
                     resetCounter={resetCounter}
                     maxValue={maxValue}
                     startValue={startValue}
                     helpMessage={helpMessage}
                     disableSettingsBtn={disableSettingsBtn}
            />
            <SettingCounter addNewValueCounter={addNewValueCounter}
                            maxValue={maxValue}
                            startValue={startValue}
                            setHelpMessage={setHelpMessage}
                            helpMessage={helpMessage}
            />
        </div>
    );
}

export default App;