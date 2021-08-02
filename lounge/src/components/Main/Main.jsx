import React from "react";
import "./Main.css";
import video from "../../assets/video/Lounge.mp4";

const Main = () => {
  return (
    <div className="main">
      <video
        className="video"
        src={video}
        autoplay="autoplay" //자동 재생 on / off
        loop //반복재생 on / off
        muted // 음소거 on / off
        poster="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/480px-Instagram_logo_2016.svg.png"
        width="1920"
      >
        본 브라우저에서는 영상을 시청 할 수 없습니다.
      </video>
    </div>
  );
};

export default Main;