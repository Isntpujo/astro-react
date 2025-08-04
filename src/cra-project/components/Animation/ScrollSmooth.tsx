import { ReactLenis, useLenis } from "lenis/react";

interface ScrollSmoothProps {
  children: React.ReactNode;
}

const ScrollSmooth: React.FC<ScrollSmoothProps> = ({ children }) => {
  const lenis = useLenis(({ scroll }) => {
    console.log("Scroll position:", scroll);
    // Ini bisa di pake buat animasi trigger juga
  });

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.08,
      }}
    >
      {children}
    </ReactLenis>
  );
};

export default ScrollSmooth;
