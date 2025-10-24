import Step1Holder from '@/components/Pages/ReserveHouse/Step1Holder'
import Container from '@/components/Ui/Container/Container'
import Steper from '@/components/Ui/Steper/Steper'
import React from 'react'

const ReserveHouseStep1 = async () => {
    return (
        <Container>
            <Steper currentStep={2} />

            <Step1Holder />
        </Container>
    )
}

export default ReserveHouseStep1