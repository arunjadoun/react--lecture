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
  import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
  } from 'react-accessible-accordion';
  import 'react-accessible-accordion/dist/fancy-example.css';
  import { Button } from 'react-bootstrap';
  import SocialFollow from './SocialFollow';
  


function T() {

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

  return (
  <div className="T" >
    <div className="middle" style={divStyle}>
        
    </div>
    <br/>
    <div>
      <div>
    <div className="middle" style={dd}>
    
      <Accordion allowZeroExpanded width="50%">
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Objective
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        Exercitation in fugiat est ut ad ea cupidatat ut in
                        cupidatat occaecat ut occaecat consequat est minim minim
                        esse tempor laborum consequat esse adipisicing eu
                        reprehenderit enim.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Benifits
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        In ad velit in ex nostrud dolore cupidatat consectetur
                        ea in ut nostrud velit in irure cillum tempor laboris
                        sed adipisicing eu esse duis nulla non.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Our Tutors
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        In ad velit in ex nostrud dolore cupidatat consectetur
                        ea in ut nostrud velit in irure cillum tempor laboris
                        sed adipisicing eu esse duis nulla non.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        FAQ
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        In ad velit in ex nostrud dolore cupidatat consectetur
                        ea in ut nostrud velit in irure cillum tempor laboris
                        sed adipisicing eu esse duis nulla non.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
        <br/>
        


        <div className="row">
                {/* Col 1 */}
                <div className="col">
                    <h5 style={{ color: 'red' }}>Liked It ?</h5>
                </div>
                
                <div className="col">
                    <Button variant="dark" size="lg">Book a demo</Button>{' '}
                </div>

                <div className="col">
                <Button variant="dark" size="lg">Download Curriculum</Button>{' '}
                </div>
                
               
        </div>


        <br/>
        

        <br/>
        </div>
        <br/>
        </div>
    </div>
    
    
  </div>
);
  }
export default T;