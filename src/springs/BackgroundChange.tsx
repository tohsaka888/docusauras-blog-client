import React, { useState, useContext, useEffect, useCallback } from "react";
import { useTransition, animated } from "@react-spring/web";
import { fadeContext } from "../context/contexts";
import "../css/backgroundChange.css";
import img1 from "../assets/images/1.jpg";
import img2 from "../assets/images/2.jpg";

const slides = [img1, img2];

export default function BackgroundChange() {
  const [index, setIndex] = useState(1);
  const transitions = useTransition(index, {
    key: index,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 2000 },
  });
  const context = useContext(fadeContext);

  useEffect(() => {
    window.addEventListener("scroll", changeImage);
    return () => {
      window.removeEventListener("scroll", changeImage);
    };
  });

  const changeImage = useCallback(() => {
    if (context.height !== -1) {
      setIndex(0);
    } else {
      setIndex(1);
    }
  }, [context.height]);

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
