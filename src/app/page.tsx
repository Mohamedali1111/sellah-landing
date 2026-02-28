import { Hero } from "@/components/sections/Hero";
import { ProblemSolution } from "@/components/sections/ProblemSolution";
import { ForBuyers } from "@/components/sections/ForBuyers";
import { ForSellers } from "@/components/sections/ForSellers";
import { Trust } from "@/components/sections/Trust";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { AppDownload } from "@/components/sections/AppDownload";
import { CTASection } from "@/components/sections/CTA";

export default function Home() {
  return (
    <main className="main-content relative flex min-h-screen w-full max-w-full flex-col items-center overflow-x-hidden pt-6 sm:pt-8">
      <Hero />
      <ProblemSolution />
      <ForBuyers />
      <ForSellers />
      <Trust />
      <HowItWorks />
      <AppDownload />
      <CTASection />
    </main>
  );
}
