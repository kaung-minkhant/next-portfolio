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
      className="rounded-full size-[300px] lg:size-[300px] xl:size-[400px] overflow-hidden"
      variants={ImageVariants}
      animate="float"
    >
      <Image src={image} alt={alt} className="lg:scale-100 xl:scale-105" />
    </motion.div>
  );
}
