import React, {useState} from 'react';
import Counter from './components/Counters/Counter/Counter';
import SettingCounter from "./components/Counters/SettingCounter/SettingCounter";
import s from './App.module.css';

const App = () => {

    const [counterValue, setCounterValue] = useState<number>(0)

    const addNumberCount = () => {
        if (counterValue < 5) {
            setCounterValue(counterValue + 1)
        }
    }
    const resetCounter = () => {
        setCounterValue(0)
    }

    return (
        <div className={s.container}>
            <Counter addNumberCount={addNumberCount}
                     counterValue={counterValue}
                     resetCounter={resetCounter}/>
            <SettingCounter/>
        </div>
    );
}

export default App;