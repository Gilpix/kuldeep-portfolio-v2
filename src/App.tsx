/**
 * App.tsx
 * Main page container. Keeps section order in one place instead of mixing
 * full UI code directly inside the root component.
 */

import Navbar from "./components/layout/Navbar";
import About from "./sections/About";
import Hero from "./sections/Hero";

function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <About />
    </main>
  );
}

export default App;