"use client";
import { FC } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { X } from "lucide-react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSearchParams } from "next/navigation";
import { IBookingData } from "@/core/types/IBookingDatas";

interface IProps {
  open: boolean;
  houseId: number;
  BookingList?: IBookingData[];
}

const mockHistory = [
  { id: 1, date: "12 مرداد 1401 - 12:33", editType: "تاریخ رزرو" },
  { id: 2, date: "12 مرداد 1401 - 12:33", editType: "اسامی مسافران" },
  { id: 3, date: "15 شهریور 1401 - 14:20", editType: "تاریخ رزرو" },
];

const EditHistoryModal: FC<IProps> = ({ BookingList }) => {
  const searchParams = useSearchParams();
  const open = searchParams.get("submodal") === "edit";

  const closeModal = () => {
    const url = new URL(window.location.href);
    url.searchParams.delete("submodal");
    window.history.pushState({}, "", url);
  };

  if (!open) return null;

  return (
    <Modal open={open} onClose={closeModal}>
      <Box
        className="
          absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          w-[40%] max-h-[90%] bg-white dark:bg-dark dark:text-whiteColor  flex flex-col rounded-3xl
          text-dark py-8 gap-8 overflow-hidden
        "
      >
        {/* Header */}
        <div className="flex justify-between items-center px-8">
          <h3 className="font-bold text-2xl">تاریخچه تغییرات</h3>
          <button
            onClick={closeModal}
            className="size-12 rounded-full flex justify-center items-center bg-lightGray hover:scale-110 transition-all cursor-pointer"
          >
            <X size={32} strokeWidth={1.5} className="dark:text-dark" />
          </button>
        </div>

        {/* Body */}
        <div className="px-8 overflow-y-auto">
          <TableContainer
            elevation={0}
            component={Paper}
            className="!rounded-3xl py-6 border border-borderColor dark:!bg-background"
          >
            <Table sx={{ minWidth: 400 }}>
              <TableHead>
                <TableRow>
                  <TableCell
                    className="dark:!text-whiteColor"
                    align="right"
                    sx={{ py: 3, fontWeight: "bold", fontSize: 16 }}
                  >
                    تاریخ و ساعت
                  </TableCell>
                  <TableCell
                    className="dark:!text-whiteColor"
                    align="right"
                    sx={{ py: 3, px: 0, fontWeight: "bold", fontSize: 16 }}
                  >
                    نوع تغییر
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {BookingList?.flatMap((booking) => [
                  // ردیف اول: ایجاد رزرو
                  {
                    id: `${booking.id}-created`,
                    date: booking.createdAt,
                    type: "ایجاد رزرو",
                  },
                  // ردیف دوم: آخرین بروزرسانی (فقط اگر متفاوت باشه)
                  ...(booking.updatedAt
                    ? [
                        {
                          id: `${booking.id}-updated`,
                          date: booking.updatedAt,
                          type: "بروزرسانی رزرو",
                        },
                      ]
                    : []),
                ]).map((row) => (
                  <TableRow
                    key={row.id}
                    className="hover:!bg-lightPrimary transition-colors dark:hover:!bg-dark"
                  >
                    <TableCell
                      className="dark:!text-whiteColor"
                      component="th"
                      scope="row"
                      align="right"
                      sx={{ py: 2 }}
                    >
                      {row.date.slice(0, 10)} - {row.date.slice(11, 16)}
                    </TableCell>
                    <TableCell
                      className="dark:!text-whiteColor"
                      align="right"
                      sx={{ py: 2 }}
                    >
                      {row.type}
                    </TableCell>
                  </TableRow>
                )) || (
                  <TableRow>
                    <TableCell
                      className="dark:!text-whiteColor"
                      colSpan={2}
                      align="center"
                      sx={{ py: 3 }}
                    >
                      تاریخچه‌ای یافت نشد
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </Box>
    </Modal>
  );
};

export default EditHistoryModal;
