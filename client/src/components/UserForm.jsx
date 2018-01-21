import React from 'react';

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      practitioner: false,
      specialty: '',
    }

    this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
    this.handleChangeLastName = this.handleChangeLastName.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePhysician = this.handleChangePhysician.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }
  
  handleChangeFirstName(event) {
    this.setState({ firstName: event.target.value});
    console.log(event.target.value);
  }
  handleChangeLastName(event) {
    this.setState({ lastName: event.target.value });
    console.log(event.target.value);
  }
  handleChangeEmail(event) {
    this.setState({ email: event.target.value })
    console.log(event.target.value);
  }
  handleChangePhysician(event) {
    this.setState({ practitioner: !this.state.practitioner });
    console.log(this.state.practitioner);
  }
  submitForm(event){
    console.log(this.state);
    event.preventDefault();
  }
  render() {
    return (
      <div>
        <form>
          <label>
            First Name
            <input type='text' value={this.state.firstName} onChange={this.handleChangeFirstName}/>
          </label>
          <label>
            Last Name
            <input type='text' value={this.state.lastName} onChange={this.handleChangeLastName} />
          </label>
          <label>
            Email
            <input type='text' value={this.state.email} onChange={this.handleChangeEmail} />
          </label>
          <label>
            Are you a physician?
            <input type='checkbox' onChange={this.handleChangePhysician} />
          </label>
          <input type='button' value="Submit Info" onClick={this.submitForm}/>
        </form>
      </div>
    )
  }
};

export default UserForm;