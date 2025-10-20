import IconButton from '@/components/Ui/IconButton'
import React from 'react'
import CustomSelectOption from '@/components/Ui/ReusableInputs/SelectOption';
import CustomInputText from './../../Ui/ReusableInputs/InputText/index';
import CustomInputDate from './../../Ui/ReusableInputs/InputDate/index';

const CustomerInfoCard = () => {
    return (
        <div className='flex flex-col gap-8 justify-between p-4 rounded-3xl border border-borderColor bg-whiteColor box-border'>
            <h3 className='text-2xl text-dark font-bold'>مشخصات مسافران</h3>

            <div className='flex gap-6'>
                <CustomInputText
                    labelText='نام شما'
                    placeholder='نام خود را وارد کنید'
                />

                <CustomInputText
                    labelText='نام خانوادگی'
                    placeholder='نام خانوادگی خود را وارد کنید'
                />

                {/* enable this select option when you right fuction */}
                {/* <CustomSelectOption
                    labelText='جنسیت'
                    options={[
                        { value: 'male', label: 'مرد' },
                        { value: 'female', label: 'زن' },
                    ]} /> */}
                {/* enable this select option when you right fuction end */}


                <CustomInputText
                    labelText='کد ملی'
                    placeholder='کد ملی خود را وارد کنید'
                />

                <CustomInputDate
                    labelText='تاریخ تولد'
                />

            </div>



            <div className='flex justify-between w-full'>
                <IconButton title='انتخاب مسافران سابق' iconName='clock' />
                <IconButton title='افزودن مسافر' iconName='addUser' />
            </div>
        </div>
    )
}

export default CustomerInfoCard