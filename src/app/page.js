import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
// import Careers from "@/components/Careers";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Projects />
      <TechStack />
      {/* <Careers /> */}
    </div>
  );
}
