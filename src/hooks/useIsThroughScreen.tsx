import { MutableRefObject, useEffect, useState } from "react";

export default function useIsThroughScreen(
  elementRef: MutableRefObject<HTMLDivElement | undefined>,
  initialValue: boolean
): boolean {
  const [isInside, setIsInside] = useState<boolean>(initialValue);
  useEffect(() => {
    const scrollEvent = () => {
      // 距离屏幕顶部的距离
      const top =
        elementRef.current && elementRef.current.getBoundingClientRect().top;
      // 距离屏幕底部的巨鹿
      const bottom =
        elementRef.current && elementRef.current.getBoundingClientRect().bottom;
      if (top && bottom) {
        if (
          (top >= 0 && top <= window.innerHeight) ||
          (bottom >= 0 && bottom <= window.innerHeight) ||
          (top <= 0 && bottom >= window.innerHeight)
        ) {
          setIsInside(true);
        } else {
          setIsInside(false);
        }
      }
    };
    window.addEventListener("scroll", scrollEvent);
    return () => {
      window.removeEventListener("scroll", scrollEvent);
    };
  }, [elementRef]);
  return isInside;
}
