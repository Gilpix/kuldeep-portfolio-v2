/**
 * App.tsx
 * Main page container. Keeps section order in one place instead of mixing
 * full UI code directly inside the root component.
 */

import ThemeToggle from "./components/common/ThemeToggle";
import Navbar from "./components/layout/Navbar";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";

function App() {
  return (
    <main className="min-h-screen">
      <ThemeToggle />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
    </main>
  );
}

export default App;
