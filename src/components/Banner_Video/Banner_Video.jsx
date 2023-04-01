import React, { useState } from "react";
import ReactPlayer from "react-player";
import { Favorite } from "@material-ui/icons";
import RipplePlay from "../RipplePlay/RipplePlay";
import "./Banner_video.scss";
function Banner_Video() {
  const [playing, setPlaying] = useState(false);
  return (
    <>
      <div
        className=" bg-[
#fbfcff] flex items-center flex-col relative"
      >
        <div className="flex items-center my-10">
          <h2 className="text-[#343c35] text-[40px] font-[500] ">
            Video thú cưng
          </h2>
          <span>
            <Favorite className="text-red-500 text-lg" />
          </span>
        </div>
        <div className="w-full md:w-10/12">
          <ReactPlayer
            height={600}
            controls={false}
            width="100%"
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
          />
        </div>
      </div>
    </>
  );
}

export default Banner_Video;
