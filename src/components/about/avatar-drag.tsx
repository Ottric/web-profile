"use client";

import * as motion from "motion/react-client";

import { useRef } from "react";

export default function DragConstraints() {
  const constraintsRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div ref={constraintsRef} style={constraints} className="absolute top-0 left-0 z-10">
      <motion.div
        drag
        dragConstraints={constraintsRef}
        dragElastic={0.2}
        className="h-20 w-20 cursor-grab rounded-full border-2 bg-[url('/image/profile-img.png')] bg-contain bg-center bg-no-repeat active:cursor-grabbing lg:h-25 lg:w-25"
      />
    </motion.div>
  );
}

/**
 * ==============   Styles   ================
 */

const constraints = {
  width: "100%",
  height: "100%",
  backgroundColor: "var(--hue-1-transparent)",
  borderRadius: 10,
};

// const box = {
//   width: 100,
//   height: 100,
//   backgroundColor: "#ff0088",
//   borderRadius: 10,
// };
