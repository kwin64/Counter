import React, {useState} from 'react';
import Counter from './components/Counters/Counter/Counter';
import SettingCounter from "./components/Counters/SettingCounter/SettingCounter";
import s from './App.module.css';

export type HelpMessageType = 0 | 'Incorrect value' | 'Enter values and press set'

const App = () => {

    const [counterValue, setCounterValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(1)
    const [startValue, setStartValue] = useState<number>(0)
    const [helpMessage, setHelpMessage] = useState<HelpMessageType>(0)

    const addNumberCount = () => {
        if (counterValue + 1 <= maxValue) {
            setCounterValue(counterValue + 1)
        }
    }
    const addNewValueCounter = (startValue: number, maxValue: number) => {
        setCounterValue(startValue)
        setMaxValue(maxValue)
        setStartValue(startValue)
        setHelpMessage(0)
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