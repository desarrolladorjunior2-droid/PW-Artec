import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Metrics } from "@/components/sections/metrics";
import { Introduction } from "@/components/sections/introduction";
import { Solutions } from "@/components/sections/solutions";
import { Ecosystem360 } from "@/components/sections/ecosystem-360";
import { Gallery } from "@/components/sections/gallery";
import { Capabilities } from "@/components/sections/capabilities";
import { CaseStudy } from "@/components/sections/case-study";
import { WhyArtec } from "@/components/sections/why-artec";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { SectionSeam } from "@/components/ui/section-seam";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main" className="flex-1">
        <Hero />
        <SectionSeam from="var(--accent)" to="var(--brand-blue)" />
        <Metrics />
        <SectionSeam from="var(--brand-blue)" to="var(--tint-intro)" />
        <Introduction />
        <SectionSeam from="var(--tint-intro)" to="var(--tint-solutions)" />
        <Solutions />
        <SectionSeam from="var(--tint-solutions)" to="var(--brand-green)" />
        <Ecosystem360 />
        <SectionSeam from="var(--brand-green)" to="var(--brand-indigo)" />
        <Gallery />
        <SectionSeam from="var(--brand-indigo)" to="var(--brand-indigo)" />
        <Capabilities />
        <SectionSeam from="var(--brand-indigo)" to="var(--brand-red)" />
        <CaseStudy />
        <SectionSeam from="var(--brand-red)" to="var(--brand-blue)" />
        <WhyArtec />
        <SectionSeam from="var(--brand-blue)" to="var(--brand-green)" />
        <About />
        <SectionSeam from="var(--brand-green)" to="var(--brand-blue)" />
        <Contact />
      </main>
      <SectionSeam from="var(--brand-blue)" to="var(--brand-indigo)" />
      <Footer />
    </>
  );
}
