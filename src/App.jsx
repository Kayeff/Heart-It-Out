import { ReactLenis } from "lenis/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import AnimatedRoutes from "./components/AnimatedRoutes";

export default function App() {
  return (
    <ReactLenis root options={{ autoRaf: true }}>
      <main className="w-full min-h-screen font-Switzer relative bg-anti-flash-white antialiased">
        <ScrollToTop />
        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </main>
    </ReactLenis>
  );
}
