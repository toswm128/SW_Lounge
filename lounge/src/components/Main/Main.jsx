import React from "react";
import video from "../../assets/video/two swords.mp4";
import "./Main.css";

const Main = () => {
  return (
    <div className="main">
      <div className="content">
        <video
          className="video"
          src={video}
          autoplay="autoplay" //자동 재생 on / off
          loop //반복재생 on / off
          muted // 음소거 on / off
          controls //컨트롤로 on / off
        >
          본 브라우저에서는 영상을 시청 할 수 없습니다.
        </video>
        <div className="introduce">
          SW Lounge는 소프트웨어를 공부하는 학생들에게 휴식할 수 있는 환경을
          만드는 웹 페이지
          ㅇ비니다암니어ㅗㅁ너리ㅏ류ㅓㅗ마ㅓㅠㅗ아느ㅓㅜ퓨로야파ㅐㅡㅓㅠ루앞므퍼ㅜㅠㄹ읖ㅇ너푸
        </div>
      </div>
    </div>
  );
};

export default Main;
