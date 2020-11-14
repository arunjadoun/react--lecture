import React, { useState, Component } from 'react';
import axios from "axios";
import { browserHistory } from 'react-router';

class Signup extends Component {


  // handle button click of login form

  constructor(props){
  super(props)

  this.state ={
    name: '',
    gender: '',
    email: '',
    mobile: '',
    dob: '',
    username: '',
    password: ''
  }
  }

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state)

        const headers = {
                'Content-Type': 'application/json',
                'Accept': '*/*'
            };

        axios.post('http://15.206.68.72:8080/register', this.state, { headers })
          .then(response=>{
            console.log(response);
            console.log(response.data);
            console.log(response.data.token);
            if (response.data.code < 200 || response.data.code >= 300) {
                                          console.log('Signup Failed')
                                          alert('Signup Failed')
                                      }
                                      else if (response.status == 200) {
                                                                                console.log('ckkfdhkjheck this: '+response.data.token);
                                                                                alert('Success');
                                                                                window.location.href='/login';

                                                                            }
          })
          .catch(err => {
              // what now?
              alert('Signup failed')
              console.log('Signup failed')
              console.log(err);
          });
      }
    handleChange = event =>{
        this.setState({ [event.target.name]: event.target.value });
      }

  render(){
  const { name, gender, email, mobile, dob, username, password } = this.state
  return (
    <form onSubmit = { this.handleSubmit }>
               <label>  Name:
                                <input type = "text" name = "name" value={name} onChange= {this.handleChange}/>
                              </label>
               <label> Gender:
                                <input type = "text" name = "gender" value={gender} onChange= {this.handleChange}/>
                              </label>
               <label> Email:
                                <input type = "text" name = "email" value={email} onChange= {this.handleChange}/>
                              </label>
               <label> Mobile:
                                <input type = "text" name = "mobile" value={mobile} onChange= {this.handleChange}/>
                              </label>
               <label> Date Of Birth:
                                <input type = "date" name = "dob" value={dob} onChange= {this.handleChange}/>
                              </label>
               <label> User Name:
                 <input type = "text" name = "username" value={username} onChange= {this.handleChange}/>
               </label>

                <label> Password:
                                 <input type = "text" name = "password" value={password} onChange= {this.handleChange}/>
                               </label>


               <button type = "submit"> Login </button>
             </form>
  );
}
}


export default Signup;