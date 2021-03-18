import React from 'react';
import s from './ButtonSet.module.css';
import {HelpMessageType} from "../../../../App";
import {Button} from "@material-ui/core";

type PropsType = {
    onClick: () => void
    helpMessage: HelpMessageType
}

const ButtonSet: React.FC<PropsType> = (
    {
        onClick,
        helpMessage
    }
) => {

    return (
        <Button className={helpMessage === 'Incorrect value' ? s.buttonError : s.button}
                variant="contained" color="primary"
                onClick={onClick}
                disabled={helpMessage === 'Enter values and press set' ? false : true}
        >set</Button>
    );
}

export default ButtonSet;
