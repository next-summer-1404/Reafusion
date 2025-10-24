import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { FC } from 'react';
import Link from 'next/link';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
}

const CustomPagination: FC<PaginationProps> = ({ totalPages, currentPage }) => {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <ul className="flex gap-6 justify-center flex-row-reverse max-xl:mt-11">
      {/* دکمه قبلی */}
      <li
        className={`flex text-2xl text-primary bg-lightGray size-14 rounded-full justify-center items-center ${
          currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:bg-pritext-primary dark:hover:bg-thidary hover:text-whiteColor'
        }`}
        aria-disabled={currentPage === 1}
        aria-label="صفحه قبلی"
      >
        {currentPage > 1 ? (
          <Link href={`?page=${currentPage - 1}`}>
            <ChevronLeft />
          </Link>
        ) : (
          <ChevronLeft />
        )}
      </li>

      {/* شماره صفحات */}
      {pages.map((page) => (
        <li
          key={page}
          className={`flex text-2xl ${
            currentPage === page ? 'text-whiteColor bg-primary dark:bg-thidary' : 'text-primary bg-lightGray cursor-pointer hover:bg-primary dark:hover:bg-thidary hover:text-whiteColor'
          } size-14 rounded-full justify-center items-center`}
          aria-current={currentPage === page ? 'page' : undefined}
          aria-label={`صفحه ${page}`}
        >
          <Link href={`?page=${page}`}>{page}</Link>
        </li>
      ))}

      {/* دکمه بعدی */}
      <li
        className={`flex text-2xl text-primary bg-lightGray size-14 rounded-full justify-center items-center ${
          currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:bg-primary  dark:hover:bg-thidary hover:text-whiteColor'
        }`}
        aria-disabled={currentPage === totalPages}
        aria-label="صفحه بعدی"
      >
        {currentPage < totalPages ? (
          <Link href={`?page=${currentPage + 1}`}>
            <ChevronRight />
          </Link>
        ) : (
          <ChevronRight />
        )}
      </li>
    </ul>
  );
};

export default CustomPagination;