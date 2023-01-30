import React from 'react'
import ReactPlayer from 'react-player';
function Banner_Video() {
  return <ReactPlayer
  height={600}
  autoPlay={true}
  controls={true}
  width='100%'
  url='https://www.youtube.com/watch?v=ZDWqcHQexbU&ab_channel=THANHT%C3%92NGMUSIC'
//   onProgress={handleProgress}
/>
}

export default Banner_Video