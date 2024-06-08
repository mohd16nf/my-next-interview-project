import React from 'react';

const Child1 = ({ setMoney }) => {
    return (
        <button onClick={() => setMoney(prevMoney => prevMoney + 1000)}>
            Increment by 1000
        </button>
    );
};

export default Child1;
