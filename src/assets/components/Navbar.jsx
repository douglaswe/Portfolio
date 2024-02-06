import { Link } from "react-router-dom";
import Logo from "./Logo";
import Theme from "./Theme";
import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const [bgNav, setBgNav] = useState(false);
  const changeBg = () => {
    if (window.scrollY >= 1) {
      setBgNav(true);
    } else {
      setBgNav(false);
    }
  };
  window.addEventListener("scroll", changeBg);

  return (
    <motion.div initial={{ y: -20 }} animate={{ y: 0 }}>
      <nav
        className={`fixed w-full flex flex-col justify-between ${
          bgNav ? "backdrop-blur-sm" : "backdrop-none"
        }`}
      >
        <div className="flex container justify-between items-center p-4 mx-auto">
          <div className="flex items-center justify-center gap-6">
            <Link to="/" className="flex justify-center items-center">
              <Logo className="fill-cdark dark:fill-cwhite hover:-rotate-20" />

              <h1 className="font-squada text-2xl text-cdark dark:text-cwhite">
                Douglas Jose
              </h1>
            </Link>

            <div className="hidden xl:block items-center font-blinker text-cdark dark:text-cwhite">
              <Link
                className="p-2 m-2 hover:bg-ccyan rounded-lg  dark:hover:text-cdark"
                to="/"
              >
                Home
              </Link>
              <Link
                className="p-2 m-2 hover:bg-ccyan rounded-lg  dark:hover:text-cdark"
                to="/about"
              >
                About
              </Link>
              <Link
                className="p-2 m-2 hover:bg-ccyan rounded-lg  dark:hover:text-cdark"
                to="/works"
              >
                Works
              </Link>
              <Link
                className="p-2 m-2 hover:bg-ccyan rounded-lg  dark:hover:text-cdark"
                to="/contact"
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="flex justify-center items-center gap-6">
            <Theme />
            {!menu ? (
              <button
                onClick={() => setMenu((prev) => !prev)}
                aria-label="Menu Button"
                className="text-cdark text-2xl dark:text-cwhite xl:hidden"
              >
                <IoMenu size="24" className="text-cdark dark:text-cwhite" />
              </button>
            ) : (
              <button
                onClick={() => setMenu((prev) => !prev)}
                aria-aria-label="Menu Button"
                className="text-cdark text-2xl dark:text-cwhite xl:hidden"
              >
                <IoClose size="24" className="text-cdark dark:text-cwhite" />
              </button>
            )}
          </div>
        </div>
        <AnimatePresence>
          {menu && (
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0, transition: { duration: 0.2 } }}
              className="container mx-auto px-4"
            >
              <div className="container mx-auto px-4 xl:hidden">
                <div className="flex justify-center font-blinker text-cdark dark:text-cwhite border rounded-lg p-2 gap-2 border-cdark dark:border-cwhite">
                  <Link
                    className="p-2 hover:bg-ccyan rounded-lg  dark:hover:text-cdark"
                    to="/"
                  >
                    Home
                  </Link>
                  <Link
                    className="p-2  hover:bg-ccyan rounded-lg  dark:hover:text-cdark"
                    to="/about"
                  >
                    About
                  </Link>
                  <Link
                    className="p-2  hover:bg-ccyan rounded-lg  dark:hover:text-cdark"
                    to="/works"
                  >
                    Works
                  </Link>
                  <Link
                    className="p-2  hover:bg-ccyan rounded-lg  dark:hover:text-cdark"
                    to="/contact"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.div>
  );
};

export default Navbar;
