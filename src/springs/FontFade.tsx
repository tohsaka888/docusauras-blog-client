// 字体渐变动画(渐变消失)
import React, { useEffect, ReactNode, useCallback, useContext } from "react";
import { useSpring, animated, config } from "react-spring";
import { fadeContext } from "../context/contexts";

type Props = {
  children?: ReactNode;
};

export default function FontFade({ children }: Props): JSX.Element {
  const [fontStyle, setFontStyle] = useSpring(() => {
    opacity: 0;
  });
  const context = useContext(fadeContext);
  useEffect(() => {
    window.addEventListener("scroll", changeStyle);
    return () => {
      window.removeEventListener("scroll", changeStyle);
    };
  });
  const changeStyle = useCallback(() => {
    setFontStyle.start({
      opacity: context.isShowHeader ? 1 : 0,
      config: {duration: 700},
    });
  }, [context.isShowHeader]);
  return <animated.div style={fontStyle}>{children}</animated.div>;
}
