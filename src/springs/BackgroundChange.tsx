import React, { useState, useContext, useEffect, useCallback } from "react";
import { useTransition, animated } from "@react-spring/web";
import { fadeContext } from "../context/contexts";
import "../css/backgroundChange.css";
import img1 from "../assets/images/1.jpg";
import img2 from "../assets/images/2.jpg";

const slides = [img1, img2];

export default function BackgroundChange() {
  const context = useContext(fadeContext);
  const transitions = useTransition((context.isShowHeader ? 1 : 0), {
    key: context.isShowHeader ? 1 : 0,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 2000 },
  });


  return (
    <div>
      {transitions((style, i) => (
        <animated.div
          className={"background"}
          style={{
            ...style,
            backgroundImage: `url(${slides[i]})`,
          }}
        />
      ))}
    </div>
  );
}
