import React, { useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";

// Pages

import Home from "./pages/Home";
import About from "./pages/About";
import Features from "./pages/Features";
import PageIndicator from "./components/PageIndicator";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  useGLTF.preload("/Car.gltf");

  const [height, setHeight] = useState(window.innerHeight);
  const [width, setWidth] = useState(window.innerWidth);

  const [isBGShown, setIsBGShown] = useState(false);

  const [activeSegment, setActiveSegment] = useState(1);

  useEffect(() => {
    window.addEventListener("resize", (e) => {
      setHeight(e.currentTarget.innerHeight);
      setWidth(e.currentTarget.innerWidth);
    });

    return () => {
      window.removeEventListener("resize", (e) => {
        return;
      });
    };
  }, [height]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset >= height) {
        if (window.pageYOffset > height * 2) {
          setActiveSegment(3);
        } else {
          setActiveSegment(2);
        }

        if (!isBGShown) {
          setIsBGShown(true);
        }
      } else if (window.pageYOffset < height) {
        setActiveSegment(1);

        if (isBGShown) {
          setIsBGShown(false);
        }
      }

      // console.log(
      //   `pageYoffset is ${window.pageYOffset} and height is ${height} so the active segment should be ${activeSegment}`
      // );
    });

    return () => {
      window.removeEventListener("scroll", (e) => {
        return;
      });
    };
  });

  return (
    <div className='App'>
      <PageIndicator activeSegment={activeSegment} />
      <Navbar
        args={{ height, width }}
        isBGShown={isBGShown}
        activeSegment={activeSegment}
        setActiveSegment={setActiveSegment}
      />
      <Footer args={{ height, width }} activeSegment={activeSegment} />
      <Home args={{ height, width }} />
      <About args={{ height, width }} />
      <Features args={{ height, width }} />
    </div>
  );
};

export default App;
