import Hero from "./components/hero";
import Services from "./components/services";
import Blog from "./components/blog";

import OurResults from "./components/results";
import Contact from "./components/contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />

      <OurResults />
      <Contact />
      <Blog />
    </main>
  );
}
