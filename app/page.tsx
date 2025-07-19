import Hero from "./components/hero";
import Services from "./components/services";
import Blog from "./components/blog";
import OurResults from "./components/results";
import Contact from "./components/contact";
import ScrollReveal from "@/components/scroll-reveal";

export default async function Home() {
  return (
    <main>
      <Hero />
      <ScrollReveal delay={0.2}>
        <Services />
      </ScrollReveal>
      <ScrollReveal delay={0.3}>
        <OurResults />
      </ScrollReveal>
      <ScrollReveal delay={0.4}>
        <Contact />
      </ScrollReveal>
      <ScrollReveal delay={0.5}>
        <Blog />
      </ScrollReveal>
    </main>
  );
}
