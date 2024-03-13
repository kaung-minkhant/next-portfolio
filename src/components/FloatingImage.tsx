"use client";
import { Variant, motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

interface Props {
  image: StaticImageData;
  alt: string;
}
const ImageVariants = {
  float: {
    y: [0, -10, 0],
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatDelay: 0,
      ease: 'linear',
      times: [0, 0.5, 1]
    }
  },
};
export default function FloatingImage({ image, alt }: Props) {
  return (
    <motion.div
      className="rounded-full w-[300px] h-[300px] overflow-hidden"
      variants={ImageVariants}
      animate="float"
    >
      <Image src={image} alt={alt} />
    </motion.div>
  );
}
