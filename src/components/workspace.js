import React, { Component } from 'react';
import '../css/workspace.css';
import { Input, InputWithButton } from './formComponents';
import Vomit from './vomit';

class Workspace extends Component {
  // the workspace is the main "controller" for all objects.

  idCounter = 0;

  constructor(props) {
    super(props);
    this.state = {
      vomit: [], // the individual ideas
      categories: [], // categories. parent of vomit
      rungs: [], // supporting sentences, etc. 
      composition: [], // complete composition of ideas and rungs
      vomitInput: ''
    };

    this.addVomit = this.addVomit.bind(this);
    this.handleNewVomitChange = this.handleNewVomitChange.bind(this);
    this.deleteVomit = this.deleteVomit.bind(this);
  }

  createId() {
    this.idCounter++;
    return this.idCounter;
  }

  addVomit() {

    let newVomit,
      defaultConfig = {
        text: '',
        category: null,
        id: -1,
        tags: [] // tags that can help categorize
      }


    let config = {
      text: this.state.vomitInput,
      id: this.createId()
    }

    newVomit = Object.assign({}, defaultConfig, config)

    let vomits = [...this.state.vomit, newVomit]

    this.setState({ vomit: vomits });
  }

  handleNewVomitChange(event) {
    this.setState({ vomitInput: event.target.value });
  }

  deleteVomit(id) {
    const newArray = [...this.state.vomit];
    for (let i=0; i <= newArray.length; i++) {
      if (newArray[i].id === id) {
        newArray.splice(i, 1);
        this.setState({vomit: newArray});
        return;
      }
    }
  }

  render() {

    return (
      <div className="Workspace">
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand workspace-navbar">
            <h1 className="title workspace-title">Word Vomit</h1>
            <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
        </nav>
        <div className="workspace container">
          <div className="columns">
            <div className="vomitSummary column">
              <h2 className="title">Ideas</h2>
              <div className="vomitCollection">
                <div className="error">
                  {this.state.vomit.length === 0 && <p>No ideas added. :v</p>}
                </div>
                {this.state.vomit.map((vomit) => 
                  <Vomit config={vomit} key={vomit.id} handleDelete={this.deleteVomit}/>
                )}
              </div>
              <div className="summaryFooter">
                <InputWithButton placeholder="Add Idea" buttonText="Add" handleChange={this.handleNewVomitChange} handleSubmit={this.addVomit} />
              </div>
            </div>
            <div className="categorySummary column">
              <h2 className="title">Categories</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Workspace;