import React, { Component } from 'react'

class Example extends Component {
  constructor(props) {
    super(props);
    this.videoTag = React.createRef()
  }

  componentDidMount() {
    // getting access to webcam
   navigator.mediaDevices
    .getUserMedia({video: true, audio: true})
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