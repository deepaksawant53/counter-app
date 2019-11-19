import React, { Component } from 'react';
import Counter from './counter';
import { log } from 'util';

class Counters extends Component {
  render() {
    const { onReset, counters, onDelete, onIncrement } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">Reset</button>
        {counters.map(counter =>
          (<Counter key={counter.id} counter={counter} onIncrement={onIncrement} onDelete={onDelete} />
          ))}
      </div>
    );
  }
}
export default Counters;