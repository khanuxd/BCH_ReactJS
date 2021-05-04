import React, { Component } from 'react';

import Form from '../Components/Form';
import View from '../Components/View';
import Popup from '../Components/Popup';
import NotesList from '../Components/NotesList';


class App extends Component {
  state = {
    notes: [],
    inputData: {
      firstName: "",
      lastName: "",
      phone: "",
      role: "",
      message: "",
    },
    showPopup: false,
  };


  componentDidMount() {
    fetch("http://localhost:3001/notes")
      .then((resp) => resp.json())
      .then((data) => this.setState({ notes: data }));
  };

  changeHandler = (e) => {
    this.setState({
      inputData: {
        ...this.state.inputData,
        [e.target.name]: e.target.value
      }
    });
    // console.log(e.target.value);
  };

  popupHandler = (e) => {
    this.setState({ showPopup: true });
    e.preventDefault();
  };

  sendDataHandler = () => {
    const requestOptions = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(this.state.inputData),
    };
    fetch("http://localhost:3001/notes", requestOptions);
    // .then((resp) => resp.json())
    // .then((data) => this.setState({ postId: data.id }));
    alert("Your note is posted", window.location.reload());
  };

  render() {

    // props object is removed as we have our data decalred in an object

    /* const props = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      phone: this.state.phone,
      role: this.state.role,
      message: this.state.message,
    }; */

    return (
      <div>
        <Form change={this.changeHandler} submit={this.popupHandler} />
        <View {...this.state.inputData} />
        <NotesList notes={this.state.notes} />
        {this.state.showPopup && (
          <Popup {...this.state.inputData} submit={this.sendDataHandler} />
        )}
      </div>
    );
  }
}

export default App;