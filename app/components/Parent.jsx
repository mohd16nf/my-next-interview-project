'use client'
import React, { useState } from 'react';
import Child1 from './Child1';
import Child2 from './Child2';

const Parent = () => {
    const [money, setMoney] = useState(0);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px', backgroundColor: '#f0f0f0' }}>
            <h1 style={{ marginBottom: '20px' }}>Money: {money}</h1>
            <div style={{ display: 'flex', gap: '10px' }}>
                <Child1 setMoney={setMoney} />
                <Child2 setMoney={setMoney} />
            </div>
        </div>
    );
};

export default Parent;
