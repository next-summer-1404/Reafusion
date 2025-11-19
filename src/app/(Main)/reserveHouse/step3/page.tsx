import Step3Holder from '@/components/Pages/ReserveHouse/Step3Holder'
import ScrollReveal from '@/components/Ui/Animations/ScrollReveal'
import Container from '@/components/Ui/Container/Container'
import Steper from '@/components/Ui/Steper/Steper'
import React from 'react'

const ReserveHouseStep3 = () => {
  return (
    <Container>
      <ScrollReveal>
          <Steper currentStep={5} />
          <Step3Holder />
      </ScrollReveal>  
    </Container>
  )
}

export default ReserveHouseStep3