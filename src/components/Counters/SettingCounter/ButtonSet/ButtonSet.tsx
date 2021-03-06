import React from 'react';
import s from './ButtonSet.module.css';

type PropsType = {

}

const ButtonSet: React.FC<PropsType> = (
    {}
) => {

    return (
        <button className={s.button}
                onClick={()=>{}}
                disabled={false}>set</button>
    );
}

export default ButtonSet;
