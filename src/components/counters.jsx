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

  handleDelete = () => {
    console.log('Event Handler Called');
  };

  render() {
    return (
      <div>
        {this.state.counters.map(counter =>
          <Counter key={counter.id} value={counter.value} id={counter.id} onDelete={this.handleDelete} />
        )};
      </div>
    );
  }
}
export default Counters;