import React, { FC } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { X } from 'lucide-react';

interface IProps {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
    filtersAction: () => void;
}

const FiltersModal: FC<IProps> = ({ open, onClose, children, filtersAction }) => {
    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box
                className="
                    absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                    w-[560px] bg-white flex flex-col rounded-3xl
                    text-dark p-8 gap-8
                "
            >
                {/* modal header */}
                <div className='flex justify-between items-center'>
                    <h3 className='font-bold text-2xl'>فیلتر ها</h3>
                    <div
                        onClick={onClose}
                        className='size-12 rounded-full flex justify-center items-center bg-lightGray cursor-pointer hover:scale-110 transition-all'
                    >
                        <X size={32} strokeWidth={1.5} />
                    </div>
                </div>
                {/* modal header end */}

                {/* modal body */}
                {children}
                {/* modal body end */}

                {/* modal action */}
                <div className='flex justify-between gap-6'>
                    <button onClick={onClose} className='rounded-2xl border border-gray text-gray p-3 cursor-pointer w-1/2'>
                        انصراف
                    </button>

                    <button onClick={filtersAction} className='bg-primary rounded-2xl text-white p-3 cursor-pointer w-1/2'>
                        اعمال فیلتر
                    </button>
                </div>
                {/* modal action end */}
            </Box>
        </Modal>
    );
};

export default FiltersModal;