'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { LogoutUser } from '@/core/Apis/Dashboard/LogoutUser';
import { toast } from 'react-toastify';

const Logout = () => {
  const router = useRouter();

  useEffect(() => {
    const handleLogout = async () => {
     const response = await LogoutUser();
       if (response) {
          toast.success('با موفقیت خارج شدید')
          router.push('/login')
       } else {
          toast.error('خروج لغو شد')
       }
    }
    handleLogout();
  }, [router]);

  return <div className='flex justify-center items-center h-full text-[50px] text-primary'>در حال خروج....</div>;
};

export default Logout;