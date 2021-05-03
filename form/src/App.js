import React, { Component } from 'react';

import Form from './Components/Form';
import View from './Components/View';
import Popup from './Components/Popup';

import './App.css';

class App extends Component {
  state = {
    firstName: "",
    lastName: "",
    phone: "",
    role: "",
    message: "",
    showPopup: false,
  }

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
    const formData = this.state;

    return (
      <div>
        <Form change={this.changeHandler} submit={this.popupHandler} />
        <View
          firstName={formData.firstName}
          lastName={formData.lastName}
          phone={formData.phone}
          role={formData.role}
          message={formData.message}
        />
        {this.state.showPopup && (
          <Popup
            firstName={formData.firstName}
            lastName={formData.lastName}
            phone={formData.phone}
            role={formData.role}
            message={formData.message}
          />
        )}

      </div>
    );
  }
}

export default App;