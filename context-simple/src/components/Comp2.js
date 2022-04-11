import React, { useContext } from 'react';
import { HeaderContext } from '../App';

export default function Comp2() {
    
    const { count, setCount } = useContext(HeaderContext);
    return (
        <div>
            <h1> Hello from Comp2. Value from App: {count}</h1>
            <button onClick={() => (setCount(count + 1))}> {count} from Comp</button>
        </div>
    );
}
