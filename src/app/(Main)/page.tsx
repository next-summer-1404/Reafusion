import Container from "@/components/Ui/Container/Container";
import Categorys from "@/components/Pages/Landing/Sections/Categorys";
import HeroSection from "@/components/Pages/Landing/Sections/HeroSection";
import SpecialVilas from "@/components/Pages/Landing/Sections/SpecialVilas";
import WhyChoseUs from "@/components/Pages/Landing/Sections/WhyChoseUs";
import BestHouses from "@/components/Pages/Landing/Sections/BestHouses";
import OurFeatures from "@/components/Pages/Landing/Sections/OurFeatures";
import FreeConsultation from "@/components/Pages/Landing/Sections/FreeConsultation";
import UserOpenian from "@/components/Pages/Landing/Sections/UserOpenian";
import RentVilaInBestLocation from "@/components/Pages/Landing/Sections/RentVilaInBestLocation";
import ScrollReveal from "@/components/Ui/Animations/ScrollReveal";

const Home = () => {
  return (
    <>
      <Container>
        <ScrollReveal>
          <HeroSection />
        </ScrollReveal>
        <ScrollReveal>
          <Categorys />
        </ScrollReveal>
        <ScrollReveal>
          <SpecialVilas />
        </ScrollReveal>
      </Container>
      <ScrollReveal>
        <WhyChoseUs />
      </ScrollReveal>
      <Container>
        <ScrollReveal>
          <BestHouses />
        </ScrollReveal>
        <ScrollReveal>
          <RentVilaInBestLocation />
        </ScrollReveal>
        <ScrollReveal>
          <OurFeatures />
        </ScrollReveal>
        <ScrollReveal>
          <FreeConsultation />
        </ScrollReveal>
        <ScrollReveal>
          <UserOpenian />
        </ScrollReveal>
      </Container>
    </>
  );
};

export default Home;
