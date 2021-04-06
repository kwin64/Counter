export type AddNumberCountType = {
    type: 'ADD-NUMBER-COUNT'
}
export type AddNewValueCounterType = {
    type: 'ADD-NEW-VALUE-COUNTER'
    startValue: number,
    maxValue: number
}
export type ResetCounterType = {
    type: 'RESET-COUNTER'
}

const initialState = {
    counterValue: 0 as number,
    startValue: 0 as number,
    maxValue: 0 as number,
}

export type InitialStateType = typeof initialState
export type ActionsReducerCounter = AddNumberCountType | AddNewValueCounterType | ResetCounterType

export const reducerCounter = (state: InitialStateType = initialState, action: ActionsReducerCounter): InitialStateType => {
    switch (action.type) {
        case 'ADD-NUMBER-COUNT':
            if (state.counterValue + 1 === state.maxValue) {
                return {
                    ...state,
                    counterValue: state.counterValue + 1,
                }
            }
            return {...state}
        case 'ADD-NEW-VALUE-COUNTER':
            return {
                ...state,
                startValue: action.startValue,
                maxValue: action.maxValue,
            }
        case 'RESET-COUNTER':
            return {...state}
    }

    return state
}

export const addNumberCounterAC = (): ActionsReducerCounter => {
    return {type: 'ADD-NUMBER-COUNT'}
}
export const addNewValueCounterAC = (startValue: number, maxValue: number): ActionsReducerCounter => {
    return {type: 'ADD-NEW-VALUE-COUNTER', startValue, maxValue}
}
export const resetCounterAC = (): ActionsReducerCounter => {
    return {type: 'RESET-COUNTER'}
}