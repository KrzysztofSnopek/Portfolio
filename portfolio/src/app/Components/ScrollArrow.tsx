import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { staggerItem } from "../Layouts/WelcomePage";
import ExpandCircleDownTwoToneIcon from "@mui/icons-material/ExpandCircleDownTwoTone";

function ScrollUnmountComponent() {
  const [shouldUnmount, setShouldUnmount] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 100;

      if (window.scrollY > scrollThreshold) {
        setShouldUnmount(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return shouldUnmount ? null : (
    <motion.div
      animate={{ scale: 1.2 }}
      transition={{
        repeat: Infinity,
        repeatType: "reverse",
        duration: 1.3,
      }}
      variants={staggerItem}
      className="fa-3x absolute top-[90vh] left-1/2 -translate-x-1/2"
    >
      <ExpandCircleDownTwoToneIcon sx={{ fontSize: 60 }} />
    </motion.div>
  );
}

export default ScrollUnmountComponent;
