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
    <main className="relative flex min-h-screen flex-col items-center overflow-x-clip pb-20 pt-6 sm:pt-8">
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
