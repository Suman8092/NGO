import Footer from "../components/footer/Footer";
import FooterCtaSection from "../components/sections/FooterCtaSection";
import FooterImageSection from "../components/sections/FooterImageSection";
import Navbar from "../components/navbar/Navbar";

export default function RootLayout({ children }) {
  return (
    <div className="min-h-screen overflow-clip">
      <Navbar />
      {children}
      <FooterImageSection />
      <FooterCtaSection />
      <Footer />
    </div>
  );
}
