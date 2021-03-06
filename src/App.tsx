import React, {useEffect, useState} from 'react';
import Counter from './components/Counters/Counter/Counter';
import SettingCounter from "./components/Counters/SettingCounter/SettingCounter";
import s from './App.module.css';
import {useDispatch, useSelector} from "react-redux";
import {
    addNewValueCounterAC,
    addNumberCounterAC,
    InitialStateType,
    resetCounterAC
} from "./components/Redux/reducerCounter";
import {AppStateType} from "./components/Redux/store";

export type HelpMessageType = 0 | 'Incorrect value' | 'Enter values and press set'

const App = () => {
    //bll
    // const [counterValue, setCounterValue] = useState<number>(0)
    // const [maxValue, setMaxValue] = useState<number>(1)
    // const [startValue, setStartValue] = useState<number>(0)

    //ui
    const [helpMessage, setHelpMessage] = useState<HelpMessageType>(0)
    const [disableButtonInc, setDisableButtonInc] = useState<boolean>(true)
    const [disableButtonReset, setDisableButtonReset] = useState<boolean>(true)

    // useEffect(() => {
    //     const valueMaxAsString = localStorage.getItem('counterMaxValue')
    //     const valueStartAsString = localStorage.getItem('counterStartValue')
    //     if (valueMaxAsString && valueStartAsString) {
    //         const newMaxValue = JSON.parse(valueMaxAsString)
    //         const newStartValue = JSON.parse(valueStartAsString)
    //         setMaxValue(newMaxValue)
    //         setStartValue(newStartValue)
    //     }
    // }, [])
    // useEffect(() => {
    //     localStorage.setItem('counterMaxValue', maxValue.toString())
    //     localStorage.setItem('counterStartValue', startValue.toString())
    // }, [maxValue, startValue])

    const dispatch = useDispatch()
    const state = useSelector<AppStateType, InitialStateType>(state => state.reducerCounter)

    const addNumberCount = () => {
        //if (counterValue + 1 <= maxValue) {
            //     setCounterValue(counterValue + 1)
            //     if (counterValue + 1 === maxValue) {
            //         setDisableButtonReset(false)
            //     }
        if (state.counterValue + 1 === state.maxValue) {
            setDisableButtonReset(false)
        }
        dispatch(addNumberCounterAC())
    }
    const addNewValueCounter = (startValue: number, maxValue: number) => {
        dispatch(addNewValueCounterAC(startValue, maxValue))
        setDisableButtonInc(false)
        setHelpMessage(0)
    }

    const resetCounter = () => {
        dispatch(resetCounterAC())
        setDisableButtonReset(true)
    }
    console.log(state.startValue)
    console.log(state.maxValue)
    console.log(state.counterValue)
    return (
        <div className={s.container}>
            <Counter addNumberCount={addNumberCount}
                     resetCounter={resetCounter}
                     counterValue={state.counterValue}
                     maxValue={state.maxValue}
                     helpMessage={helpMessage}
                     disableButtonInc={disableButtonInc}
                     disableButtonReset={disableButtonReset}
            />
            <SettingCounter addNewValueCounter={addNewValueCounter}
                            maxValue={state.maxValue}
                            startValue={state.startValue}
                            setHelpMessage={setHelpMessage}
                            helpMessage={helpMessage}
                            setDisableButtonInc={setDisableButtonInc}
            />
        </div>
    );
}

export default App;