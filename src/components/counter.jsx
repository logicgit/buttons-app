import React, { Component } from 'react';

class Counter extends Component {
  state = {
    value: this.props.counter.value,
    tags: ['tag1', 'tag2', 'tag3']
  };

  styles = {
    fontSize: 30,
    fontWeight: "bold"
  }

  handleIncrement = product => {
    this.setState({value: this.state.value + 1});
  }

  render() {
      return (
      <React.Fragment>
        {this.props.children}
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={ () => this.handleIncrement({ product: 1 }) }
          className="btn btn-secondary btn-sm">Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2">Delete
        </button>
        <ul>

        </ul>
      </React.Fragment>
    );
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += (this.state.count === 0) ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
