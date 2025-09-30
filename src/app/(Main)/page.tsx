import Container from "@/components/Ui/Container/Container";
import Categorys from "@/components/Pages/Landing/Sections/Categorys";
import HeroSection from "@/components/Pages/Landing/Sections/HeroSection";
import SpecialVilas from "@/components/Pages/Landing/Sections/SpecialVilas";
import WhyChoseUs from "@/components/Pages/Landing/Sections/WhyChoseUs";

const Home = () => {
  return (
    <>
      <Container>
            <HeroSection />
            <Categorys />
            <SpecialVilas />
      </Container>
      <WhyChoseUs />
    </>
  );
};

export default Home;
