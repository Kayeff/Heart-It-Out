import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import PageSection from "./components/PageSection";

export default function App() {
  return (
    <main className="w-full min-h-screen font-Switzer relative">
      <Navbar />
      <Hero />
      <PageSection />
    </main>
  );
}
