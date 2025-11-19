import Step1Holder from '@/components/Pages/ReserveHouse/Step1Holder'
import ScrollReveal from '@/components/Ui/Animations/ScrollReveal'
import Container from '@/components/Ui/Container/Container'
import Steper from '@/components/Ui/Steper/Steper'
import React from 'react'

const ReserveHouseStep1 = async () => {
    return (
        <Container>
            <ScrollReveal>
                <Steper currentStep={2} />

                <Step1Holder />
            </ScrollReveal>      
        </Container>
    )
}

export default ReserveHouseStep1