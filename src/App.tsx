/**
 * App.tsx
 * Main page container. Keeps section order in one place instead of mixing
 * full UI code directly inside the root component.
 */

import Navbar from "./components/layout/Navbar";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import Skills from "./sections/Skills";

function App() {
  return (
    <main className="min-h-screen bg-[var(--color-black)] text-white">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
    </main>
  );
}

export default App;