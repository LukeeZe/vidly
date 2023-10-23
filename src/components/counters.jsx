import React, { Component } from 'react';
import Counter from './counter.jsx';

class Counters extends Component {
    
    render() { 
        const { onReset, onDelete, onIncrement, counters, onDecrement} = this.props
        return (<div>
            <button onClick={onReset} className="btn btn-primary btn-sm m-2">Reset</button> {
            counters.map( (counter) => 
                <Counter onDelete={onDelete} onDecrement={onDecrement} onIncrement={onIncrement} key={counter.id} value={counter.value} selected={true} counter={counter} id={counter.id}></Counter>

            )
            } </div>);
    }
}
 
export default Counters;