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

  handleDelete = (counterId) => {
    console.log('Event Handler Called', counterId);
    this.setState({ counters: this.state.counters.filter(counter => counter.id !== counterId) });
  };

  render() {
    return (
      <div>
        {this.state.counters.map(counter =>
          <Counter key={counter.id} counter={counter} onDelete={this.handleDelete} />
        )};
      </div>
    );
  }
}
export default Counters;