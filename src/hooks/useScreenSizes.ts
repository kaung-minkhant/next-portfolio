import { useMediaQuery } from "./useMediaQuery";

export function useScreenSizes() {
  const smallerThan2XL = useMediaQuery("(max-width: 1535px)");
  const smallerThanXL = useMediaQuery("(max-width: 1279px)");
  const smallerThanLG = useMediaQuery("(max-width: 1023px)");
  const smallerThanMD = useMediaQuery("(max-width: 767px)");
  const smallerThanSM = useMediaQuery("(max-width: 639px)");

  return {
    smallerThan2XL,
    smallerThanXL,
    smallerThanLG,
    smallerThanMD,
    smallerThanSM,
  };
}
