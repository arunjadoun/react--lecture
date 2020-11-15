import React, { Component } from 'react'

class Example extends Component {
  constructor(props) {
    super(props);
    this.videoTag = React.createRef()
  }



  componentDidMount() {
    // getting access to webcam
    const constraints = { audio: true, video: true };
   navigator.mediaDevices.getUserMedia(constraints)
    .then(stream => this.videoTag.current.srcObject = stream)
    .catch(console.log);
  }

  render() {
    return (
      <video
        ref={this.videoTag}
        autoPlay
      />
    )
  }
}

export default Example;