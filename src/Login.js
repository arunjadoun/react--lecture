import React, { useState, Component } from 'react';
import axios from "axios";
import { browserHistory } from 'react-router';

class Login extends Component {


  // handle button click of login form

  constructor(props){
  super(props)

  this.state ={
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

        axios.post('http://15.206.68.72:8080/login', this.state, { headers })
          .then(response=>{
            console.log(response);
            console.log(response.data);
            console.log(response.data.token);
            if (response.data.code < 200 || response.data.code >= 300) {
                                          console.log('Login Failed')
                                          alert('Login Failed')
                                      }
                                      else if (response.status == 200) {
                                                                                console.log('ckkfdhkjheck this: '+response.data.token);
                                                                                localStorage.setItem('token', response.data.token);
                                                                                localStorage.setItem('userName', response.data.userName);
                                                                                window.location.href='/profile';

                                                                            }
          })
          .catch(err => {
              // what now?
              alert('Login failed')
              console.log('Login failed')
              console.log(err);
          });
      }
    handleChange = event =>{
        this.setState({ [event.target.name]: event.target.value });
      }

  render(){
  const { username, password } = this.state
  return (
    <form onSubmit = { this.handleSubmit }>
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


export default Login;