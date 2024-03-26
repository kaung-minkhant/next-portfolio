"use client";

import { cn } from "@/lib/utils";
import { animate, useMotionValue, useTransform, motion } from "framer-motion";
import { HTMLAttributes, useEffect } from "react";
import BlinkingCursor from "./BlinkingCursor";

interface Props extends HTMLAttributes<HTMLSpanElement> {
  textList: string[];
}
export default function TypeAnimation({
  textList,
  className,
  ...props
}: Props) {
  let maxLength = 0;
  if (textList.length !== 0)
    maxLength = textList.reduce((acc, text): number => {
      if (text.length > acc) return text.length;
      return acc;
    }, maxLength);

  const textIndex = useMotionValue(0);
  const baseText = useTransform(textIndex, (v) => textList[v] || "");
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const displayText = useTransform(rounded, (v) => baseText.get().slice(0, v));

  const updatedThisRound = useMotionValue(true);

  useEffect(() => {
    animate(count, maxLength, {
      type: "tween",
      duration: 1,
      ease: "easeIn",
      repeat: Infinity,
      repeatType: "reverse",
      repeatDelay: 1,
      onUpdate(latest) {
        if (updatedThisRound.get() === true && latest > 0) {
          updatedThisRound.set(false);
        } else if (updatedThisRound.get() === false && latest === 0) {
          updatedThisRound.set(true);
          if (textIndex.get() === textList.length - 1) {
            textIndex.set(0);
          } else {
            textIndex.set(textIndex.get() + 1);
          }
        }
      },
    });
  }, [count, maxLength, textIndex, textList.length, updatedThisRound]);
  return (
    <>
      <motion.span className={cn("inline", className)}>
        {displayText}
      </motion.span>
      <BlinkingCursor />
    </>
  );
}
