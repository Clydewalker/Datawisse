import Nav from "./Components/Nav";
import {
  Hero,
  Logos,
  About,
  Solutions,
  Blog,
  CTA,
  Faq,
  Footer,
} from "./sections";

export default function App() {
  return (
    <main className="bg-smoky-blak relative overflow-hidden">
      <Nav />

      <section className="px-10 pt-56 pb-20">
        <Hero />
      </section>

      <section className="p-8">
        <Logos />
      </section>

      <section className="px-10 pt-32 pb-28">
        <About />
      </section>

      <section className="px-10 pt-32 pb-28">
        <Solutions />
      </section>

      <section className="px-10 pt-32 pb-28">
        <Blog />
      </section>

      <section className="px-10 py-20 bg-[#121311]">
        <CTA />
      </section>

      <section className="px-10 pt-32 pb-28">
        <Faq />
      </section>

      <section className="px-10 pb-12">
        <Footer />
      </section>
    </main>
  );
}
