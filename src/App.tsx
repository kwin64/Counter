import React, {useEffect, useState} from 'react';
import Counter from './components/Counters/Counter/Counter';
import SettingCounter from "./components/Counters/SettingCounter/SettingCounter";
import s from './App.module.css';

export type HelpMessageType = 0 | 'Incorrect value' | 'Enter values and press set'

const App = () => {

    const [counterValue, setCounterValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(1)
    const [startValue, setStartValue] = useState<number>(0)
    const [helpMessage, setHelpMessage] = useState<HelpMessageType>(0)
    const [disableButtonInc, setDisableButtonInc] = useState<boolean>(true)
    const [disableButtonReset, setDisableButtonReset] = useState<boolean>(true)

    useEffect(() => {
        const valueAsString = localStorage.getItem('counterValue')
        if (valueAsString) {
            const newValue = JSON.parse(valueAsString)
            setCounterValue(newValue)
        }
    }, [])
    useEffect(() => {
        localStorage.setItem('counterMaxValue', JSON.stringify(maxValue))
        localStorage.setItem('counterStartValue', JSON.stringify(startValue))
    },[maxValue, startValue])

    const addNumberCount = () => {
        if (counterValue + 1 <= maxValue) {
            setCounterValue(counterValue + 1)
            if (counterValue + 1 === maxValue) {
                setDisableButtonReset(false)
            }
        }
    }
    const addNewValueCounter = (startValue: number, maxValue: number) => {
        setCounterValue(startValue)
        setMaxValue(maxValue)
        setStartValue(startValue)
        setDisableButtonInc(false)
        setHelpMessage(0)
    }
    const resetCounter = () => {
        setCounterValue(startValue)
        setDisableButtonReset(true)
    }

    return (
        <div className={s.container}>
            <Counter addNumberCount={addNumberCount}
                     resetCounter={resetCounter}
                     counterValue={counterValue}
                     maxValue={maxValue}
                     startValue={startValue}
                     helpMessage={helpMessage}
                     disableButtonInc={disableButtonInc}
                     disableButtonReset={disableButtonReset}
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