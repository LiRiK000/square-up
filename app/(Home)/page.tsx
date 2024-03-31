import { CTA } from "@/components/CTA";
import { Hero } from "./_components/1.Hero/Hero";
import { MarqueeLine } from "./_components/2.Marquee/Marquee";
import { OurServices } from "./_components/3.OurServices/OurServices";
import { ServicesCards } from "./_components/3.OurServices/ServicesCards";
import { WhyChoose } from "./_components/4.WhyChoose/WhyChoose";
import { WhyChooseCards } from "./_components/4.WhyChoose/WhyChooseCards";

export default function Home() {
  return (
    <main className="overflow-x-hidden min-h-full bg-slate-200 dark:bg-[#1a1a1a] overflow-hidden">
      <Hero />
      <MarqueeLine />
      <OurServices />
      <ServicesCards />
      <WhyChoose />
      <WhyChooseCards />
      <CTA />
    </main>
  );
}
