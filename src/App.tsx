import React, {useState} from 'react';
import Counter from './components/Counters/Counter/Counter';
import SettingCounter from "./components/Counters/SettingCounter/SettingCounter";
import s from './App.module.css';

export type HelpMessageType = {

}

const App = () => {

    const [counterValue, setCounterValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(2)
    const [startValue, setStartValue] = useState<number>(0)

    const [error, setError] = useState<boolean>(false)
    const [helpMessage, setHelpMessage] = useState<boolean>()



    const addNumberCount = () => {
        if (counterValue + 1 <= maxValue) {
            setCounterValue(counterValue + 1)
        }
    }

    const addNewValueCounter = (startValue: number, maxValue: number) => {
        setCounterValue(startValue)
        setMaxValue(maxValue)
        setStartValue(startValue)
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
                     error={error}/>
            <SettingCounter addNewValueCounter={addNewValueCounter}
                            maxValue={maxValue}
                            startValue={startValue}
                            setError={setError}
            />
        </div>
    );
}

export default App;