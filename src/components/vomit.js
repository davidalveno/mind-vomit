import React, { Component } from 'react';
import '../css/vomit.css'

class Vomit extends Component {

  constructor(props) {
    super(props);
    this.state = props.config;

    this.delete = this.delete.bind(this);
  }

  delete(event) {
    this.props.handleDelete(this.state.id);
  }

  render() {
    return (
      <article className="message is-primary">
        <div className="message-body">
          {this.state.text}
          <div className="buttons are-small">
            <a className="button is-small is-warning">Edit</a>
            <a className="button is-small is-danger" onClick={this.delete}>Delete</a>
          </div>
        </div>
      </article>

    )
  }
}

export default Vomit;