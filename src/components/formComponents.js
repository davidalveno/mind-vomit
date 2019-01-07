import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});

    // if the input is needed by a parent, we run this (it will be passed)
    if (!!this.props.handleChange) {
      this.props.handleChange(event);
    }
  }

  render() {
    return (
      <div className="Input">
        <div className="field">
          <div className="control">
            <input className="input is-primary" type="text" value={this.state.value} placeholder={this.props.placeholder} onChange={this.handleChange}></input>
          </div>
        </div>
      </div>
    )
  }
}

class InputWithButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    // the default action will clear the state always.
    if (this.props.handleSubmit) {
      // passing text to the handleSubmit function
      this.props.handleSubmit(this.state.value);
    }
    this.setState({value:''});
  }

  handleChange(event) {
    this.setState({value: event.target.value});

    // if the input is needed by a parent, we run this (it will be passed)
    if (!!this.props.handleChange) {
      this.props.handleChange(event);
    }
  }

  render() {
    return (
      <div className="Input">
        <div className="field has-addons">
          <div className="control">
            <input className="input is-primary" type="text" value={this.state.value} placeholder={this.props.placeholder} onChange={this.handleChange}></input>
          </div>
          <div className="control">
            <a className="button is-primary" onClick={this.handleSubmit}>{this.props.buttonText}</a>
          </div>
        </div>
      </div>
    )
  }
}

export  {Input, InputWithButton};