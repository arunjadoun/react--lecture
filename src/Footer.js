import React from "react";
import "./Footer.css"

// const Footer = () => (
//   <div className="footer">
//     <div className="container">
//         <div className="row">
//                 {/* Col 1 */}
//                 <div className="col">
//                     <h4>ECTECH INC</h4>
//                     <ul className="list-unstyled">
//                         <li>Plot no 234</li>
//                         <li>Bahodapur wale</li>
//                         <li>Gwalior</li>
//                     </ul>
//                 </div>
//                 {/* Col 2 */}
//                 <div className="col">
//                     <h4>About Us</h4>
//                     <ul className="list-unstyled">
//                         <li>Welcome to Edtech</li>
//                         <li>We are dedicated to give you </li>
//                         <li>indepth knowledge of trading concepts</li>
//                     </ul>
//                 </div>
//                 {/* Col 3 */}
//                 <div className="col">
//                     <h4>Contact Us</h4>
//                     <ul className="list-unstyled">
//                         <li>Kaish Mangal</li>
//                         <li>7996000000</li>
//                         <li>dummy@dummy.com</li>
//                     </ul>
//                 </div>
//         </div>

//     </div>
//     <div className="row">
//         <p className="col-sm">
//             &copy;{new Date().getFullYear()} EDTECH INC | All rights reserved | Terms od service | Privacy
//         </p>
//     </div>
//   </div>
// );


var style = {
    backgroundColor: "#F8F8F8",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "65px",
    width: "100%",
    
}

var phantom = {
  display: 'block',
  padding: '20px',
  height: '60px',
  width: '100%',
}

function Footer({ children }) {
    return (
        <div>
            <div style={phantom} />
            <div className="row" style={style}>
                <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '5vh'}}>



                {/* Col 1 */}
                <div className="col" style={{fontWeight: 'bold', fontStyle: 'italic'}}>
                    ECTECH INC<br/>
                        Plot no 234
                        <br/>Bahodapur wale
                        <br/>Gwalior
                </div>
                {/* Col 2 */}
                <div className="col" style={{fontWeight: 'bold', fontStyle: 'italic'}}>
                    About Us
                    <br/>Welcome to Edtech
                    <br/>We are dedicated to give you
                </div>
                {/* Col 3 */}
                <div className="col" style={{fontWeight: 'bold', fontStyle: 'italic'}}>
                    Contact Us
                    <br/>Kaish Mangal
                        <br/>7996000000
                        <br/>dummy@dummy.com
                </div>
                </div>


                
    



            </div>
            
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        
        
        </div>
    )
}

export default Footer;