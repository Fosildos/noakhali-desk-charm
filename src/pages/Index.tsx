import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import AdminSection from "@/components/AdminSection";
import GallerySection from "@/components/GallerySection";
import OfficeInfoSection from "@/components/OfficeInfoSection";
import NoticesSection from "@/components/NoticesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen flex flex-col">
    <TopBar />
    <Navbar />
    <main className="flex-1">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <AdminSection />
      <GallerySection />
      <OfficeInfoSection />
      <NoticesSection />
      <ContactSection />
    </main>
    <Footer />
  </div>
);

export default Index;
