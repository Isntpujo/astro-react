import { ReactLenis, useLenis } from "lenis/react";
import { useEffect } from "react";

interface ScrollSmoothProps {
  children: React.ReactNode;
}

const ScrollSmooth: React.FC<ScrollSmoothProps> = ({ children }) => {
  const lenis = useLenis(({ scroll }) => {
    console.log("Scroll position:", scroll);
  });

  useEffect(() => {
    function update(time: number) {
      lenis?.raf(time * 1000);
    }
    return () => {};
  }, [lenis]);

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
      }}
    >
      {children}
    </ReactLenis>
  );
};

export default ScrollSmooth;
