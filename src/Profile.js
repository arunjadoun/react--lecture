import React, { Component, useState } from 'react'
import ReactPlayer from 'react-player'
import { Link } from "react-router-dom"

function Profile() {
function handleChange(){
        localStorage.clear();
        window.location.href='/logout ';
      }
    const token = localStorage.getItem('token');
    const userName = localStorage.getItem('userName');
    const DATA = [
    	{
    		vid: "qIqzgS676m8",
    		title: "Lecture 1"
    	},
    	{
    		vid: "XN7lOIxYjzg",
    		title: "Lecture 2"
    	},
    ]

                const [vid, uid] = useState(DATA[0].vid)
                const [title, utitle] = useState(DATA[0].title)

const renderVideo = () => {
return (
        <>{title}
        <div className="video-container">
                <iframe width="853" height="480" src={"//www.youtube.com/embed/"+vid+"?rel=0"} frameBorder="0" allowFullScreen></iframe>
              </div>
              </>
    )}

    if(localStorage.getItem('token')){
        return (


        <div className='player-wrapper'>
        <label>
                    Welcome : {userName}
                </label><br/><br/>
            {renderVideo()}
            <br/>

              <div className="collection">
                   {

                   DATA.map(item=>{
                    return <a href="#!" className="collection-item" onClick={()=>{
                    uid(item.vid)
                    utitle(item.title)
                    }}>{item.title}</a>
                   })

                   }
                  </div>

            <br/>
            <button type = "button" onClick= {handleChange}> LogOut </button>
        </div>
        )}
        else{
            return(

                 <div>
                                <p>You are not loggedIn Please login first</p>
                                <ul>
                                    <li><Link to="/login">Log In</Link></li>
                                </ul>
                            </div>

            )
        }
}

export default Profile;