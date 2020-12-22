import React from "react";
import {
  BrowserRouter,
  Route,
  Link,
  Switch,
  NavLink,
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Login from "./Login";
import Logout from "./Logout";
import Signup from "./Signup";
import Profile from "./Profile";
import Example from "./Example";
import background from "./img/home.jpeg";
import Footer from './Footer'
import SocialFollow from './SocialFollow'
import T from './T'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import {Img} from 'react-image'
import { Button } from 'react-bootstrap';

function App() {
    const isLoggedIn = localStorage.getItem('token');
    const dd = {
      width: '64.7%',
      height: '100px',
      position: 'relative',
      left: '17.7%',
    }
    const divStyle = {
      width: '100%',
      height: '500px',
      backgroundImage: `url(${background})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'contain'   
    };
    const facebook = {
      width: '1%',
      height: '5px',
      backgroundImage: `url(${background})`,
      backgroundRepeat: 'no-repeat',
      flex: 1
      
      
    };
  return (
    <div>
      <div className="middle">
      <BrowserRouter>
        <div >
          <div className="header" style={{ display: "flex" }}>
          <div style={{fontWeight: 'bold', fontStyle: 'italic', fontSize: 20}}>
          EDTECH
          </div>
           <SocialFollow/>

            
            
          </div>
          
          <div className="contenty">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/logout" component={Logout} />
              <Route path="/contact" component={Contact} />
              <Route path="/about-us" component={About} />
              <Route path="/register" component={Signup} />
              <Route path="/profile" component={Profile} />
              <Route path="/example" component={Example} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
      </div>
      <div>
      <T/></div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      {/* <Footer/> */}
  <Footer/>

    
    
    
    </div>
  );
}

export default App;