import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import Programs from "@/components/Programs";
import LocationAdvantage from "@/components/LocationAdvantage";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white selection:bg-primary-100 selection:text-primary-900">
      <Navbar />
      <Hero />
      <TrustStrip />
      <Programs />
      <LocationAdvantage />
      <Footer />
    </main>
  );
}
