import React from 'react';
import video from '../../assets/videoplane.mp4'

const Home = () => {
  return (
    <div className='home flex container'>
      <div className="mainText">
        <h1>Create Ever-lasting Memories With Us</h1>
      </div>

      <div className="homeImages flex">
        <div className="videoDiv">
          <video src={video} autoPlay muted loop className='video'></video>
        </div>
      </div>
    </div>
  )
}

export default Home