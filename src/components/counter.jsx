import React, { Component } from 'react';


class Counter extends Component {

    
   



   

    render() {
        

        return (
            <div className="row">
                <div className="col-1"><span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span></div>
                <div className="col"><button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">+</button>
                <button onClick={() =>  this.props.onDecrement(this.props.counter)} disabled={(this.props.value === 0)? true: false} className="btn btn-secondary btn-sm m-2">-</button>
               
                <button onClick={() => this.props.onDelete(this.props.id)} className="btn btn-danger btn-sm m-2">Delete</button></div>
            
            
            
            
            </div>
            );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { value } = this.props.counter;
       return value === 0 ? "Zero" : value;
    }
}

export default Counter;
