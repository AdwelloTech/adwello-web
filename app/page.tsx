import Hero from "./components/hero";
import Services from "./components/services";
import OurResults from "./components/results";
import ContactForm from "./components/contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <OurResults />
      <ContactForm />
    </main>
  );
}
