import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { FC } from 'react';

interface PaginationProps {
    totalPages: number;
    currentPage: number;
    onPageChange: (page: number) => void;
}

const CustomPagination: FC<PaginationProps> = ({ totalPages, currentPage, onPageChange }) => {

    const pages = Array.from({ length: totalPages }, (_, index) => index + 1);


    const handlePrev = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };


    const handleNext = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    return (
        <ul className="flex gap-6 justify-center flex-row-reverse">
            {/* back button */}
            <li
                className={`flex text-2xl text-[#0d3b66] bg-[#F5F5F5] size-14 rounded-full justify-center items-center cursor-pointer hover:bg-[#0d3b66] hover:text-white ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                onClick={handlePrev}
                aria-disabled={currentPage === 1}
                aria-label="صفحه قبلی"
            >
                <ChevronLeft />
            </li>

            {/* back button end */}

            {pages.map((page) => (
                <li
                    key={page}
                    className={`flex text-2xl ${currentPage === page ? 'text-white bg-[#0d3b66]' : 'text-[#0d3b66] bg-[#F5F5F5]'
                        } size-14 rounded-full justify-center items-center cursor-pointer hover:bg-[#0d3b66] hover:text-white`}
                    onClick={() => onPageChange(page)}
                    aria-current={currentPage === page ? 'page' : undefined}
                    aria-label={`صفحه ${page}`}
                >
                    {page}
                </li>
            ))}

            {/* next button */}
            <li
                className={`flex text-2xl text-[#0d3b66] bg-[#F5F5F5] size-14 rounded-full justify-center items-center cursor-pointer hover:bg-[#0d3b66] hover:text-white ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                onClick={handleNext}
                aria-disabled={currentPage === totalPages}
                aria-label="صفحه بعدی"
            >
                <ChevronRight />
            </li>
            {/* next button end*/}
        </ul>
    );
};

export default CustomPagination;