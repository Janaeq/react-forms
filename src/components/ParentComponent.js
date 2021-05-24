import React from 'react';
import DisplayData from './DisplayData';
import Form from './Form'

class ParentComponent extends React.Component {
  state = {
    firstName: "",
    lastName: "",
  }

  handleChange = event => {
      this.setState({
          [event.target.name]: event.target.value
        })
  }

  render() {
    return (
        <div>
            <Form
                formData={this.state}
                handleFirstNameChange={this.handleFirstNameChange}
                handleLastNameChange={this.handleLastNameChange}
            />
            <DisplayData formData={this.state}/>
        </div>
    )
  }
}

export default ParentComponent;