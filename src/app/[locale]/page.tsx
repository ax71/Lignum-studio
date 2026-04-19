import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/app/[locale]/home/_components/HeroSections";

export default function LocaleHomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Footer />
    </>
  );
}
