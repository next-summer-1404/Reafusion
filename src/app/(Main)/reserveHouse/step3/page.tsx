import Step3Holder from '@/components/Pages/ReserveHouse/Step3Holder'
import Container from '@/components/Ui/Container/Container'
import Steper from '@/components/Ui/Steper/Steper'
import React from 'react'

const ReserveHouseStep3 = () => {
  return (
    <Container>
      <Steper currentStep={5} />
      <Step3Holder />
    </Container>
  )
}

export default ReserveHouseStep3