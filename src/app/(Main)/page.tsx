import Categorys from "@/components/Pages/Landing/Sections/Categorys";
import HeroSection from "@/components/Pages/Landing/Sections/HeroSection";
import Container from "@/components/Ui/Container/Container";

const Home = () => {
  return (
    <Container>
        <HeroSection />
        <Categorys />
    </Container>
  );
}

export default Home