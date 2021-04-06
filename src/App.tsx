import React, {useEffect, useReducer, useState} from 'react';
import Counter from './components/Counters/Counter/Counter';
import SettingCounter from "./components/Counters/SettingCounter/SettingCounter";
import s from './App.module.css';
import {useDispatch, useSelector} from "react-redux";
import {InitialStateType, reducerCounter} from "./components/Redux/reducerCounter";
import {RootReducer} from "./components/Redux/store";

export type HelpMessageType = 0 | 'Incorrect value' | 'Enter values and press set'

const App = () => {
    //bll
    // const [counterValue, setCounterValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(1)
    const [startValue, setStartValue] = useState<number>(0)

    //ui
    const [helpMessage, setHelpMessage] = useState<HelpMessageType>(0)
    const [disableButtonInc, setDisableButtonInc] = useState<boolean>(true)
    const [disableButtonReset, setDisableButtonReset] = useState<boolean>(true)

    useEffect(() => {
        const valueMaxAsString = localStorage.getItem('counterMaxValue')
        const valueStartAsString = localStorage.getItem('counterStartValue')
        if (valueMaxAsString && valueStartAsString) {
            const newMaxValue = JSON.parse(valueMaxAsString)
            const newStartValue = JSON.parse(valueStartAsString)
            setMaxValue(newMaxValue)
            setStartValue(newStartValue)
        }
    }, [])
    useEffect(() => {
        localStorage.setItem('counterMaxValue', maxValue.toString())
        localStorage.setItem('counterStartValue', startValue.toString())
    }, [maxValue, startValue])

    // const dispatch = useDispatch()
    // const state = useSelector<RootReducer, reducerCounter>(state=>state.reducerCounter)

    const [newCounterValue, dispatch] = useReducer(reducerCounter, 0)

    const addNumberCount = () => {
        // if (counterValue + 1 <= maxValue) {
        //     setCounterValue(counterValue + 1)
        //     if (counterValue + 1 === maxValue) {
        //         setDisableButtonReset(false)
        //     }
        // }

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
                     helpMessage={helpMessage}
                     disableButtonInc={disableButtonInc}
                     disableButtonReset={disableButtonReset}
            />
            <SettingCounter addNewValueCounter={addNewValueCounter}
                            maxValue={maxValue}
                            startValue={startValue}
                            setHelpMessage={setHelpMessage}
                            helpMessage={helpMessage}
                            setDisableButtonInc={setDisableButtonInc}
            />
        </div>
    );
}

export default App;