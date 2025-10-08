import CustomPagination from '@/components/Ui/CustomPagination'
import React, { useState } from 'react'

const HouseListGrid = () => {

  const [currentPage, setCurrentPage] = useState<number>(1);

  // dynamic from api
  const totalPages: number = 1;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // send api requset
    console.log(`تغییر به صفحه: ${page}`);
  };

  return (
    <div className='flex flex-col gap-10'>
      {/* house list */}
      <div className='bg-red-700'>
        list ha ha ha
      </div>
      {/* house list end */}

      {/* pagination */}
      <CustomPagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
      {/* pagination end */}
    </div>
  )
}

export default HouseListGrid