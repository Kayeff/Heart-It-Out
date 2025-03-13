import { ReactLenis } from "lenis/react";
import { Suspense, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { AnimatePresence, motion } from "framer-motion";

export default function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <ReactLenis root>
      <main className="w-full min-h-screen font-Switzer relative bg-anti-flash-white antialiased">
        <Navbar />
        <AnimatePresence mode="wait">
          <Suspense
            fallback={
              <div className="text-white text-center py-10">Loading...</div>
            }
          >
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="w-full"
            >
              <Outlet />
            </motion.div>
          </Suspense>
        </AnimatePresence>
        <Footer />
      </main>
    </ReactLenis>
  );
}
