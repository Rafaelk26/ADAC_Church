"use client";

import { useEffect, useState } from "react";


export function animatedNumber(end: number, duration = 2500) {
  
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;

    function animate(time: number) {
      if (!startTime) startTime = time;
      const progress = time - startTime;

      const percentage = Math.min(progress / duration, 1);

      const ease = 1 - Math.pow(1 - percentage, 3);

      setCount(Math.floor(ease * end));

      if (percentage < 1) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  }, [end, duration]);

  return count;
}