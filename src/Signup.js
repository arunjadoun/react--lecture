import React, { Component } from "react";
import axios from "axios";



 class Signup extends Component {
   state = {
     name: '',
   };
 /* This is where the magic happens
 */
 handleSubmit = event => {
     event.preventDefault();
     const user = {
       name: this.state.name
     }
     const headers = {
             'Content-Type': 'application/json',
             'Accept': '*/*',
         };

     axios.post('http://localhost:8080/news', { user }, { headers })
       .then(res=>{
         console.log(res);
         console.log(res.data);
         window.location = "/retrieve" //This line of code will redirect you once the submission is succeed
       })
   }
 handleChange = event =>{
     this.setState({ name: event.target.value});
   }
 render() {
     return (
         <form onSubmit = { this.handleSubmit }>
           <label> Person Name:
             <input type = "text" name = "name" onChange= {this.handleChange}/>
           </label>
           <button type = "submit"> Add </button>
         </form>
     );
   }
 }
 export default Signup;