import React, { useState, useEffect, useRef } from 'react';
import { Button } from 'antd';

import './RickRoll.css'

export function RickRoll() {
  const videoRef = useRef() // TODO: not working rn
  const [isHidden, setIsHidden] = useState(true);

  function unhideVideo() {
    setIsHidden(false);
    videoRef.current.play();
  }

  return (
    <div>
      <Button className="button" danger type="primary" hidden={!isHidden} onClick={unhideVideo}>Click Me!</Button>
      <video ref={videoRef} hidden={isHidden}>
        <source src="/videos/rickroll.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
