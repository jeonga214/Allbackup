import React from 'react'
import ReactPlayer from 'react-player'

function ReactVideo() {
  const endVideo = () =>{
    console.log('끝');
  }
  const playVideo = ()=>{
    console.log('플레이');
  }

  return (
    <div>
      <h2>ReactVideo</h2>
      <ReactPlayer
      playing = {true}
      controls
      muted
      onEnded={endVideo}
      onPlay={playVideo}
      url='./puppies.mp4'
      />

    </div>
  )
}

export default ReactVideo