import React, { Component } from 'react';

import Form from './Components/Form';
import View from './Components/View';
import Popup from './Components/Popup';
import NotesList from './Components/NotesList';


class App extends Component {
  state = {
    notes: [],
    firstName: "",
    lastName: "",
    phone: "",
    role: "",
    message: "",
    showPopup: false,
  }


  componentDidMount() {
    fetch("http://localhost:3001/notes")
      .then(resp => resp.json())
      .then(data => this.setState({ notes: data }))
  };

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(e.target.value);
  };

  popupHandler = (e) => {
    this.setState({ showPopup: true });
    e.preventDefault();
  };

  render() {

    const props = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      phone: this.state.phone,
      role: this.state.role,
      message: this.state.message,
    };

    return (
      <div>
        <Form change={this.changeHandler} submit={this.popupHandler} />
        <View {...props} />
        <NotesList notes={this.state.notes} />
        {this.state.showPopup && (
          <Popup {...props} />
        )}
      </div>
    );
  }
}

export default App;