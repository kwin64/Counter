import React, {useState} from 'react';
import Counter from './components/Counters/Counter/Counter';
import SettingCounter from "./components/Counters/SettingCounter/SettingCounter";
import s from './App.module.css';

const App = () => {

    const [counterValue, setCounterValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(5)
    const [startValue, setStartValue] = useState<number>(0)

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
                     resetCounter={resetCounter}/>
            <SettingCounter addNewValueCounter={addNewValueCounter}
                            maxValue={maxValue}
                            startValue={startValue}
            />
        </div>
    );
}

export default App;