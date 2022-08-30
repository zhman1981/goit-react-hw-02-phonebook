import React, { Component } from 'react';
import SubmitForm from './SubmitForm/SubmitForm';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return (
      <div>
        <SubmitForm name={this.state.name} />
      </div>
    );
  }
}
