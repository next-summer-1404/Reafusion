import { Banknote, Building, FileText, ListChecks, UsersRound } from 'lucide-react'
import React, { FC } from 'react'

const steps = [
    { id: 1, label: 'انتخاب هتل', icon: <Building size={40} strokeWidth={1.5} /> },
    { id: 2, label: 'مشخصات مسافران', icon: <UsersRound size={40} strokeWidth={1.5} /> },
    { id: 3, label: 'تایید اطلاعات', icon: <ListChecks size={40} strokeWidth={1.5} /> },
    { id: 4, label: 'پرداخت آنلاین', icon: <Banknote size={40} strokeWidth={1.5} /> },
    { id: 5, label: 'صدور بلیط', icon: <FileText size={40} strokeWidth={1.5} /> },
]

interface IProps {
    currentStep: number;
}

const Steper: FC<IProps> = ({ currentStep = 1 }) => {
    return (
        <div className='relative w-full'>
            {/* lines */}
            <ul className='flex w-full absolute xl:bottom-[40%] bottom-[78px] right-0 justify-between ps-2.5 pe-3'>
                {steps.slice(0, -1).map((step, index) => (
                    <li key={step.id} className='w-[25%] relative bottom-[30px]'>
                        <div
                            className={`h-[8px] w-full transition-all duration-300 ${index + 1 < currentStep ? 'bg-primary' : 'bg-borderColor'
                                }`}
                        ></div>
                    </li>
                ))}
            </ul>
            {/* lines end */}

            {/* icons and labels */}
            <ul className='relative z-10 w-full flex justify-between items-center'>
                {steps.map((step) => {
                    const isActive = step.id === currentStep
                    const isCompleted = step.id < currentStep

                    const circleClass = isActive
                        ? 'bg-lightPrimary text-primary'
                        : isCompleted
                            ? 'bg-primary text-whiteColor'
                            : 'bg-lightGray text-gray'

                    const labelClass = isActive
                        ? 'text-dark font-bold'
                        : isCompleted
                            ? 'text-primary font-bold'
                            : 'text-gray'

                    return (
                        <li key={step.id} className='w-fit flex flex-col gap-4 justify-center items-center'>
                            <div
                                className={`flex justify-center items-center w-[80px] h-[80px] rounded-full transition-all duration-300 ${circleClass}`}
                            >
                                {step.icon}
                            </div>
                            <span className={`transition-all duration-300 ${labelClass}`}>{step.label}</span>
                        </li>
                    )
                })}
            </ul>
            {/* icons and labels end */}
        </div>
    )
}

export default Steper
