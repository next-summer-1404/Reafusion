import React, { FC } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import PlaceActionMenu from "../PlaceActionMenu";
import { IHouse } from "@/core/types/IHouse";
import EmptyImage from "../../../../../assets/images/EmptyImages/House Card.png";
import Image from "next/image";
import CustomPagination2 from "@/components/Ui/CustomPagination2";
import { Home } from "lucide-react";
import { cookies } from "next/headers";

interface IProps {
  houses: IHouse[];
  totalPages: number;
  currentPage: number;
}

const PlaceTable: FC<IProps> = async ({ houses, totalPages, currentPage }) => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");
  const tokenValue = token?.value as string;
  console.log(houses)

  return (
    <TableContainer
      elevation={0}
      component={Paper}
      className="!rounded-3xl pt-3 pb-8"
    >
      <Table sx={{ minWidth: 650 }} aria-label="reserves table">
        <TableHead>
          <TableRow>
            <TableCell
              align="right"
              sx={{
                px: 4,
                py: 3,
                width: "360px",
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              نام اقامتگاه
            </TableCell>
            <TableCell
              align="right"
              sx={{
                py: 3,
                px: 0,
                width: "300px",
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              آدرس
            </TableCell>
            <TableCell
              align="right"
              sx={{
                py: 3,
                px: 0,
                width: "150px",
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              قیمت
            </TableCell>
            <TableCell
              align="right"
              sx={{ py: 3, px: 2, fontWeight: "bold", fontSize: 16 }}
            >
               نوع خانه
            </TableCell>
            <TableCell
              align="right"
              sx={{ py: 3, fontWeight: "bold", fontSize: 16 }}
            >
              عملیات
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {houses.length === 0 ? (
            <TableRow>
              <TableCell colSpan={5} align="center" className="py-12">
                <div className="flex flex-col items-center gap-4 text-primary">
                  <div className="bg-lightPrimary rounded-full p-6">
                    <Home className="w-12 h-12 text-primary" />
                  </div>
                  <p className="text-lg font-medium text-primary">خانه‌ای وجود ندارد</p>
                  <p className="text-sm text-primary">
                    فیلترها را تغییر دهید یا یک ملک جدید اضافه کنید.
                  </p>
                </div>
              </TableCell>
            </TableRow>
          ) : (
            houses.map((house) => (
              <TableRow
                key={house.id}
                className="hover:!bg-lightPrimary transition-colors"
              >
                <TableCell
                  component="th"
                  scope="row"
                  className="text-primary"
                  align="right"
                  sx={{ px: 4, py: 2 }}
                >
                  <div className="flex gap-3 items-center text-primary">
                    <Image
                      src={house.photos?.[0] || EmptyImage}
                      alt="houseImage"
                      className="rounded-full size-[40px]"
                      width={40}
                      height={40}
                    />
                    <h3>{house.title}</h3>
                  </div>
                </TableCell>
                <TableCell align="right" sx={{ px: 0, py: 2 }}>
                  {house.address}
                </TableCell>
                <TableCell align="right" sx={{ px: 0, py: 2 }}>
                  {house.price.toLocaleString()} تومان
                </TableCell>
                <TableCell
                  align="right"
                  className="!px-8"
                  sx={{ px: 0, py: 2 }}
                >
                  {house.transaction_type === 'rental' ? 'اجاره' : house.transaction_type === 'mortgage' ? 'رهن' : 'رزرو' }
                </TableCell>
                <TableCell
                  align="right"
                  className="!px-7 cursor-pointer"
                  sx={{ px: 0, py: 2 }}
                >
                  <PlaceActionMenu 
                    houseId={house.id} 
                    houseImg={house.photos} 
                    tokenValue={tokenValue}
                    houseTitle={house.title}
                    houseAddress={house.address}
                    housePrice={house.price}
                    transactionsType={house.transaction_type}
                    houseRate={house.rate as number}
                    houseLastUpdate={house.last_updated}
                    houselocation={house.location}
                    houseCategory={house.categories}
                    capacity={house.capacity}
                    rooms={house.rooms}
                    bathrooms={house.bathrooms}
                    parkings={house.parking}
                    yardType={house.yard_type}
                    tags={house.tags}
                    caption={house.caption}
                  />
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
      {totalPages > 1 && (
        <div className="p-5 pl-5">
          <CustomPagination2
            totalPages={totalPages}
            currentPage={currentPage}
          />
        </div>
      )}
    </TableContainer>
  );
};

export default PlaceTable;
