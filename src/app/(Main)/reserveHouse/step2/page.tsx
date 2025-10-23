import Step2Holder from '@/components/Pages/ReserveHouse/Step2Holder'
import Container from '@/components/Ui/Container/Container'
import Steper from '@/components/Ui/Steper/Steper'
import React from 'react'

const ReserveHouseStep2 = () => {
  return (
    <Container>
      <Steper currentStep={3} />
      <Step2Holder />
    </Container>
  )
}

export default ReserveHouseStep2