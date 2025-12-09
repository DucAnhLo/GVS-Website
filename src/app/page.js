import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Benefits from "@/components/Benefits";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
// import Careers from "@/components/Careers";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Benefits />
      <Projects />
      {/* <TechStack /> */}
      {/* <Careers /> */}
    </div>
  );
}
