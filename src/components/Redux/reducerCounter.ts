export type AddNumberCountType = {
    type: 'ADD-NUMBER-COUNT'
    // startValue: number,
    // maxValue: number
}
export type AddNewValueCounterType = {
    type: 'ADD-NEW-VALUE-COUNTER'
    startValue: number,
    maxValue: number
}

const initialState = {
    counterValue: 0 as number,
    startValue: 0 as number,
    maxValue: 0 as number,
    disableButton: true as boolean//ui смысл
}

export type InitialStateType = typeof initialState
export type ActionsReducerCounter = AddNumberCountType | AddNewValueCounterType

export const reducerCounter = (state: InitialStateType = initialState, action: ActionsReducerCounter): InitialStateType => {
    switch (action.type) {
        case 'ADD-NUMBER-COUNT':
            if (state.counterValue + 1 === state.maxValue) {
                return {
                    ...state,
                    counterValue: state.counterValue + 1
                }
                if (state.counterValue + 1 === state.maxValue) {
                    return {...state, disableButton: false}
                }
            }
            return {...state}
        case 'ADD-NEW-VALUE-COUNTER':
            return {
                ...state,
                startValue: action.startValue,
                maxValue: action.maxValue,
                disableButton: false
            }
    }

    return state
}

export const addNumberCounterAC = (): ActionsReducerCounter => {
    return {type: 'ADD-NUMBER-COUNT'}
}
export const addNewValueCounter = (startValue: number, maxValue: number): ActionsReducerCounter => {
    return {type: 'ADD-NUMBER-COUNT'}
}