import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 1,
    tags: []
  };
  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;

    return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
  }
  render() {
    return (
      // When a javascript engine tries to evaluate this operation it will evaluate the 
      //   first opearation which will return true now it will try to evaluate the second operation but it is not a boolean value. So the javascript engine 
      //   will try to convert it in truthy or falsy value. In javascript empty string is falsy here our string has characters so it returns true and hence 
      //   it returns the last value. So if there are 3 operations and all the 3 operations return true then it will print the 3 operand.
      <div>
        {this.state.tags.length === 0 && "Please create a new tag!"}
        {this.renderTags()}
      </div>
    );
  }
}
export default Counter;