import shortid from 'shortid';
import React, { Component } from 'react';
import SubmitForm from './SubmitForm/SubmitForm';
import Contacts from './Contacts/Contacts';

export class App extends Component {
  state = {
    contacts: [],
  };

  onFormResponse = data => {
    this.setState(prevState => {
      return {
        contacts: [
          ...prevState.contacts,
          { id: shortid.generate(), name: data.name },
        ],
      };
    });
  };

  render() {
    const { contacts } = this.state;
    return (
      <div>
        <SubmitForm onSend={this.onFormResponse} />
        <Contacts contacts={contacts} />
      </div>
    );
  }
}
