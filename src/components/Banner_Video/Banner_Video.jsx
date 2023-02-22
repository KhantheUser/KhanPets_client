import React, { useState } from "react";
import ReactPlayer from "react-player";
import { AiFillHeart } from "react-icons/ai";
import RipplePlay from "../RipplePlay/RipplePlay";
import "./Banner_video.scss";
function Banner_Video() {
  const [playing, setPlaying] = useState(false);
  return (
    <>
      <div className="p-20 bg-black flex items-center flex-col relative">
        {/* <RipplePlay onClick={() => setPlaying(!playing)} /> */}
        <div className="flex items-center mb-10">
          <h2 className="text-white text-2xl ">Một chiếc video thú cưng </h2>
          <span>
            <AiFillHeart className="text-red-500 text-lg" />
          </span>
        </div>
        <ReactPlayer
          height={600}
          controls={false}
          width="80%"
          playing={playing}
          playIcon={<RipplePlay />}
          config={{
            youtube: {
              playerVars: { showinfo: 1 },
            },
            facebook: {
              appId: "12345",
            },
          }}
          url="https://www.youtube.com/watch?v=E0XlDLfxkgI&ab_channel=G%C3%A2ug%C3%A2uMeomeo"
          //   onProgress={handleProgress}
        />
      </div>
    </>
  );
}

export default Banner_Video;
