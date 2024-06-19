import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Unique from "@/components/Unique";
import HowItWorks from "@/components/HowItWorks";
import Perspective from "@/components/Perspective";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full min-h-screen bg-white p-[10px]">
        <Hero />
        <Unique />
        <HowItWorks />
        <Perspective />
      </main>
    </>
  );
}
