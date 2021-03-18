import Button from '@material-ui/core/Button';
import React from 'react';
import s from './Buttons.module.css';

type PropsType = {
    resetCounter: () => void
    disableButtonReset: boolean
}

const ButtonReset: React.FC<PropsType> = (
    {
        resetCounter,
        disableButtonReset
    }
) => {

    return (
        <Button className={s.button}
                variant="contained" color="secondary"
                onClick={resetCounter}
                disabled={disableButtonReset}
        >reset</Button>
    );
}

export default ButtonReset;
