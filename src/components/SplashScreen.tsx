"use client";

import { useEffect, useState } from "react";
import './SplashScreen.module.css'

export default function SplashScreen() {
  const [loading, setLoading] = useState(true);
  var keys: {
    [key: number]: number;
  } = { 37: 1, 38: 1, 39: 1, 40: 1 };
  function preventDefault(e: any) {
    e.preventDefault();
  }

  function preventDefaultForScrollKeys(e: any) {
    if (keys[e.keyCode]) {
      preventDefault(e);
      return false;
    }
  }

  // modern Chrome requires { passive: false } when adding event
  var supportsPassive = true;

  var wheelOpt = supportsPassive ? { passive: false } : false;
  // var wheelEvent = "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";

  // call this to Disable
  function disableScroll() {
    window.addEventListener("DOMMouseScroll", preventDefault, false); // older FF
    window.addEventListener("wheel", preventDefault, wheelOpt); // modern desktop
    window.addEventListener("touchmove", preventDefault, wheelOpt); // mobile
    window.addEventListener("keydown", preventDefaultForScrollKeys, false);
  }
  function enableScroll() {
    window.removeEventListener("DOMMouseScroll", preventDefault, false);
    window.removeEventListener("wheel", preventDefault, false);
    window.removeEventListener("touchmove", preventDefault, false);
    window.removeEventListener("keydown", preventDefaultForScrollKeys, false);
  }
  useEffect(() => {
    disableScroll();
    setTimeout(() => {
      setLoading(false);
      enableScroll();
    }, 2000);
  }, []);
  if (loading) {
    return (
      <div className="absolute inset-0 z-20 bg-foreground max-h-screen flex flex-col items-center justify-center text-background">
        <div className="loading">
          Loading
          <span className="ring-span"></span>
        </div>

        {/* <Lottie animationData={Loading} /> */}
      </div>
    );
  }
  return null;
}
