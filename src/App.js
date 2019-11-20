import React, { Component } from 'react';
import NavBar from './components/navbar';
import Counters from './components/counters';
import './App.css';

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ]
  }

  constructor() {
    super();
    console.log("App-Constructor");
  }

  componentDidMount() {
    console.log("App - Mounted");
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
    console.log("App rendered");
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(counter => counter.value !== 0).length} />
        <main className="container">
          <Counters onIncrement={this.handleIncrement} onDelete={this.handleDelete} onReset={this.handleReset} counters={this.state.counters} />
        </main>
      </React.Fragment >
    );
  }
}

export default App;
