import IconButton from '@/components/Ui/IconButton'
import React, { FormEvent, useState } from 'react'
import CustomSelectOption from '@/components/Ui/ReusableInputs/SelectOption';
import CustomInputText from './../../Ui/ReusableInputs/InputText/index';
import CustomInputDate from './../../Ui/ReusableInputs/InputDate/index';

const CustomerInfoCard = () => {
    const [userName, setUserName] = useState('');
    const [userFamily, setUserFamily] = useState('');
    const [gender, setGender] = useState('');
    const [nationalId, setNationalId] = useState('');
    const [birthDate, setBirthDate] = useState('')

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        sessionStorage.setItem('userName', userName);
        sessionStorage.setItem('userFamily', userFamily);
        sessionStorage.setItem('gender', gender);
        sessionStorage.setItem('nationalId', nationalId);
        sessionStorage.setItem('birthDate', birthDate);
        alert('مشخصات شما با موفیقت ثبت شد')
    }

    return (
        <form onSubmit={handleSubmit} className='flex flex-col gap-8 justify-between p-4 rounded-3xl border border-borderColor bg-whiteColor box-border'>
            <h3 className='text-2xl text-dark font-bold'>مشخصات مسافران</h3>
            <div className='flex flex-wrap gap-6'>
                <CustomInputText
                    labelText='نام شما'
                    value={userName}
                    setState={setUserName}
                    placeholder='نام خود را وارد کنید'
                    customClass='max-md:!w-[47%] max-lg:!w-[48%] max-xl:!w-[31%]'
                />
                <CustomInputText
                    labelText='نام خانوادگی'
                    value={userFamily}
                    setState={setUserFamily}
                    placeholder='نام خانوادگی خود را وارد کنید'
                    customClass='max-md:!w-[47%] max-lg:!w-[48%] max-xl:!w-[31%]'
                />
                {/* enable this select option when you right fuction */}
                <CustomSelectOption
                    labelText='جنسیت'
                    value={gender}
                    setState={setGender}
                    options={[
                        { value: 'male', label: 'مرد' },
                        { value: 'female', label: 'زن' },
                    ]} 
                />
                {/* enable this select option when you right fuction end */}
                <CustomInputText
                    labelText='کد ملی'
                    value={nationalId}
                    setState={setNationalId}
                    placeholder='کد ملی خود را وارد کنید'
                    customClass='max-md:!w-[47%] max-lg:!w-[48%] max-xl:!w-[31%]'
                />
                <CustomInputDate
                    labelText='تاریخ تولد'
                    value={birthDate}
                    setState={setBirthDate}
                />
            </div>
            <div className='flex justify-between w-full'>
                <IconButton title='انتخاب مسافران سابق' iconName='clock' />
                <IconButton title='افزودن مسافر' iconName='addUser' type='submit' />
            </div>
        </form>
    )
}

export default CustomerInfoCard