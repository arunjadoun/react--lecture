import React, { useState, Component } from 'react';
import axios from "axios";
import { browserHistory } from 'react-router';

class Login extends Component {


  // handle button click of login form

    handleSubmit = event => {
        event.preventDefault();

        const user = {
          name: this.state.name,
          password: this.state.password
        }

        const headers = {
                'Content-Type': 'application/json',
                'Accept': '*/*'
            };

        axios.post('http://localhost:8080/login', { user }, { headers })
          .then(response=>{
            console.log(response);
            console.log(response.data);
            console.log(response.data.token);
            if (response.data.code < 200 || response.data.code >= 300) {
                                          throw new Error(response.statusText);
                                      }
                                      else if (response.status == 200) {
                                                                                console.log('ckkfdhkjheck this: '+response.data.token);
                                                                                localStorage.setItem('token', response.data.token);
                                                                                window.location.href='/profile';

                                                                            }
          })
          .then(response => {


                      })
                      .then(auth => {
                      });
      }
    handleChange = event =>{
        this.setState({ name: event.target.value});
        this.setState({ password: event.target.value});
      }

  render(){
  return (
    <form onSubmit = { this.handleSubmit }>
               <label> User Name:
                 <input type = "text" name = "name" onChange= {this.handleChange}/>
               </label><br/><br/>

                <label> Password:
                                 <input type = "text" name = "password" onChange= {this.handleChange}/>
                               </label><br/><br/>


               <button type = "submit"> Login </button>
             </form>
  );
}
}


export default Login;