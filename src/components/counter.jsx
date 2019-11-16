import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 1
  };

  constructor() {
    super();
    console.log("Constructor", this);
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleIncrement() {
    console.log("Increment clicked", this);
  }


  render() {
    return (
      <div>
        <span style={{ fontSize: 10 }} className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
        { /* 
          Below mentioned methods can also be used to bind events
          <button onClick={ () => console.log("Increment clicked", this) } className="btn btn-secondary btn-sm">Increment</button>
          OR
          <button onClick={ this.handleIncrement.bind(this) } className="btn btn-secondary btn-sm">Increment</button>
          OR
          We can change handleIncrement method to a lambda like handleIncrement = () => console.log("Increment clicked", this) and then in our button element
          <button onClick={ this.handleIncrement } className="btn btn-secondary btn-sm">Increment</button>*/
        }
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += (this.state.count === 0) ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}
export default Counter;