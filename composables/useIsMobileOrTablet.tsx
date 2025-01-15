import { useEffect, useState } from "react";

export const useIsMobileOrTablet = () => {
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  useEffect(() => {
    const updateMedia = () => {
      setIsMobileOrTablet(window.innerWidth <= 1024); // 1024px est la largeur max pour tablette
    };

    updateMedia();
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  return isMobileOrTablet;
};
