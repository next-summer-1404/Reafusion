import Step2Holder from "@/components/Pages/ReserveHouse/Step2Holder";
import ScrollReveal from "@/components/Ui/Animations/ScrollReveal";
import Container from "@/components/Ui/Container/Container";
import Steper from "@/components/Ui/Steper/Steper";
import React from "react";

const ReserveHouseStep2 = () => {
  return (
    <Container>
      <ScrollReveal>
        <Steper currentStep={3} />
        <Step2Holder />
      </ScrollReveal>
    </Container>
  );
};

export default ReserveHouseStep2;
