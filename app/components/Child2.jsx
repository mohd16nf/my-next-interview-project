
import React from 'react';

const Child2 = ({ setMoney }) => {
    return (
        <button onClick={() => setMoney(prevMoney => prevMoney - 500)}>
            Decrement by 500
        </button>
    );
};

export default Child2;
