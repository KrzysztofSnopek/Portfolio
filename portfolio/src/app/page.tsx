"use client";

import { useState } from "react";
import { WelcomePage } from "./Layouts/WelcomePage";
import { motion, AnimatePresence } from "framer-motion";
import MovingStars from "./Components/MovingStars";

const App: React.FC = () => {
  const [isWelcoming, setIsWelcoming] = useState<boolean>(true);

  const handleHideWelcome = () => {
    setIsWelcoming(false);
  };

  return (
    <>
      {isWelcoming ? (
        <AnimatePresence>
          <motion.div
            onClick={handleHideWelcome}
            animate={{ opacity: 1 }}
            whileTap={{ opacity: 0 }}
            transition={{ duration: 2, ease: "backOut" }}
            className="w-full h-screen"
          >
            <WelcomePage />
          </motion.div>
        </AnimatePresence>
      ) : (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "backIn" }}
            className="w-full"
          >
            <MovingStars />
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
};

export default App;
