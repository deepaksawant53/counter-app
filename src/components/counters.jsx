import React, { Component } from 'react';
import Counter from './counter';
import { log } from 'util';

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ]
  }

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    // We directly dont do "counters[0].value++;" because array has reference to counter objects
    // and updating a reference would directly make updates in object and in react directly updating and value is a no-no
    // hence we get the counter passed as a argument and then place it inside counter[0] and make the changes.
    counters[index] = { ...counter }
    counters[index].value++;
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    console.log('Event Handler Called', counterId);
    this.setState({ counters: this.state.counters.filter(counter => counter.id !== counterId) });
  };

  handleReset = () => {
    const counters = this.state.counters.map(counter => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleReset} className="btn btn-primary btn-sm m-2">Reset</button>
        {this.state.counters.map(counter =>
          <Counter key={counter.id} counter={counter} onIncrement={this.handleIncrement} onDelete={this.handleDelete} />
        )};
      </div>
    );
  }
}
export default Counters;