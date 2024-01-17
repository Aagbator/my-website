import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { FloatingSocials } from "./components/floating-socials";
import { Polygon } from "./components/polygon";
import { Skills } from "./components/skills";
import { Experience } from "./components/experience";
import { About } from "./components/about";
import { Works } from "./components/works";

export default function Home() {
  return (
    <main className="min-h-screen items-center justify-between">
      <Header />
      <Hero />
      <Skills />
      <Experience />
      <About />
      <Works />
      <FloatingSocials />

      {/* <div className="z-10 max-w-2xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center text-black">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">src/app/page.tsx</code>
        </p>
      </div> */}
    </main>
  );
}
