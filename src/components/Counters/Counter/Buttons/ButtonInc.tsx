import React from 'react';
import s from './Buttons.module.css';
import {Button} from "@material-ui/core";

type PropsType = {
    maxValue: number
    addNumberCount: () => void
    counterValue: number
    disableButtonInc: boolean
}

const ButtonInc: React.FC<PropsType> = (
    {
        addNumberCount,
        maxValue,
        counterValue,
        disableButtonInc
    }
) => {

    return (
        <Button className={s.button}
                variant="contained" color="primary"
                onClick={addNumberCount}
                disabled={disableButtonInc || counterValue === maxValue}
        >inc</Button>
    );
}

export default ButtonInc;
