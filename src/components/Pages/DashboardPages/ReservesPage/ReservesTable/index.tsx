import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CustomBadge from "@/components/Ui/CustomBadge";
import CustomBadge2 from "@/components/Ui/CustomBadge/CustomBadge2";
import Link from "next/link";
import ActionMenuButton from "../ActionMenuButton";
import HouseDetailModal from "../HouseDetailModal/HouseDetailModal";
import CustomPagination2 from "@/components/Ui/CustomPagination2";
import { FC } from "react";
import { IBookingData } from "@/core/types/IBookingDatas";
import { GetHouseDetail } from "@/core/Apis/GetHouseDetail";
import { IHouseDetailData } from "@/core/types/IHouseDetailData";
import { cookies } from "next/headers";
import BookingPaymentModal from "../BookingPaymentModal";

interface IProps {
  data: IBookingData[];
  totalPages: number;
  currentPage: number;
  selectedHouseId?: number;
  activeSubModal?: string;
}

const ReservesTable: FC<IProps> = async ({ data, totalPages, currentPage, selectedHouseId, activeSubModal}) => {
  let houseDetail: IHouseDetailData | undefined;
  if (selectedHouseId && !isNaN(selectedHouseId)) {
    try {
      const response = await GetHouseDetail(selectedHouseId.toString());
      houseDetail = response.data;
      console.log(houseDetail)
    } catch (error) {
      console.error("خطا در دریافت جزئیات:", error);
    }
  }

  const cookieStore = await cookies();
  const token = cookieStore.get("token");
  const tokenValue = token?.value as string;
  const decodToken = JSON.parse(Buffer.from(tokenValue.split(".")[1], 'base64url').toString('utf-8'));

  return (
    <>
      <TableContainer elevation={0} component={Paper} className="!rounded-3xl py-6">
        <Table sx={{ minWidth: 650 }} aria-label="reserves table">
          <TableHead>
            <TableRow>
              <TableCell align="right" sx={{ py: 3, fontWeight: "bold", fontSize: 16 }}>نام اقامتگاه</TableCell>
              <TableCell align="right" sx={{ py: 3, px: 0, fontWeight: "bold", fontSize: 16 }}>تاریخ رزرو</TableCell>
              <TableCell align="right" sx={{ py: 3, px: 0, fontWeight: "bold", fontSize: 16 }}>قیمت</TableCell>
              <TableCell align="right" sx={{ py: 3, px: 0, fontWeight: "bold", fontSize: 16 }}>اطلاعات مسافر</TableCell>
              <TableCell align="right" sx={{ py: 3, px: 0, fontWeight: "bold", fontSize: 16 }}>وضعیت رزرو</TableCell>
              <TableCell align="right" sx={{ py: 3, px: 0, fontWeight: "bold", fontSize: 16 }}>وضعیت پرداخت</TableCell>
              <TableCell align="right" sx={{ py: 3, fontWeight: "bold", fontSize: 16 }}>عملیات</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {data.map((item) => (
              <TableRow key={item.id} className="hover:!bg-lightPrimary transition-colors">
                <TableCell component="th" scope="row" align="right" sx={{ py: 2 }}>
                  <Link href="#" className="text-primary hover:underline">
                    {item.house.title}
                  </Link>
                </TableCell>
                <TableCell align="right" sx={{ px: 0, py: 2 }}>
                  {item.reservedDates[0]?.value.split("T")[0] || "-"}
                </TableCell>
                <TableCell align="right" sx={{ px: 0, py: 2 }}>
                  {parseInt(item.house.price).toLocaleString()} تومان
                </TableCell>
                <TableCell align="right" className="!px-8" sx={{ px: 0, py: 2 }}>
                  {item.traveler_details.length} نفر
                </TableCell>
                <TableCell align="right" sx={{ px: 0, py: 2 }}>
                  <CustomBadge title={item.status} />
                </TableCell>
                <TableCell align="right" sx={{ px: 0, py: 2 }}>
                  <CustomBadge2 title={item.status} />
                </TableCell>
                <TableCell align="right" sx={{ py: 2 }}>
                  <ActionMenuButton houseId={item.houseId} role={decodToken.role} reserveId={item.id} currentPage={currentPage} tokenValue={tokenValue}/>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {totalPages > 1 && (
          <div className="p-5 pl-5">
            <CustomPagination2 totalPages={totalPages} currentPage={currentPage} />
          </div>
        )}
      </TableContainer>
      <HouseDetailModal
        houseId={selectedHouseId?.toString()}
        activeSubModal={activeSubModal}
        houseDetail={houseDetail}
        BookingList={data}
      />
      <BookingPaymentModal booking={data}/>
    </>
  );
};

export default ReservesTable;