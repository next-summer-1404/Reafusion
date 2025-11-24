import React, { FC } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IFavoriteData } from "@/core/types/IFavoriteResponse";
import Image from "next/image";
import EmptyImage from '../../../../../assets/images/EmptyImages/House Card.png'
import FavoriteActionMenu from "../FavoriteActionMenu";
import CustomPagination2 from "@/components/Ui/CustomPagination2";
import { cookies } from "next/headers";

interface IProps {
  data: IFavoriteData[];
  totalPages: number;
  currentPage: number;
}

const FavoriteTable: FC<IProps> = async ({ data, totalPages, currentPage }) => {
  const cookiesStore = await cookies();
  const token = cookiesStore.get("token")?.value as string;

  return (
    <TableContainer
      elevation={0}
      component={Paper}
      className="!rounded-3xl pt-3 pb-8 dark:!bg-background"
    >
      <Table sx={{ minWidth: 650 }} aria-label="reserves table">
        <TableHead>
          <TableRow>
            <TableCell
            className="dark:!text-whiteColor"
              align="right"
              sx={{ py: 3, width: "300px", fontWeight: "bold", fontSize: 16 }}
            >
              نام اقامتگاه
            </TableCell>
            <TableCell
            className="dark:!text-whiteColor"
              align="right"
              sx={{
                py: 3,
                px: 0,
                width: "250px",
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              قیمت کل
            </TableCell>
            <TableCell
            className="dark:!text-whiteColor"
              align="right"
              sx={{
                py: 3,
                px: 0,
                width: "450px",
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              آدرس
            </TableCell>
            <TableCell
            className="dark:!text-whiteColor"
              align="right"
              sx={{ py: 3, fontWeight: "bold", fontSize: 16 }}
            >
              عملیات
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((items) => (
            <TableRow
              key={items.id}
              className="hover:!bg-lightPrimary transition-colors dark:hover:!bg-dark"
            >
              <TableCell
                component="th"
                scope="row"
                className="text-primary dark:!text-thidary"
                align="right"
                sx={{ py: 2 }}
              >
                <div className="flex items-center gap-3 text-primary dark:!text-thidary">
                  <Image
                    src={items.house.photos?.[0] || EmptyImage}
                    alt="houseImage"
                    className="rounded-full size-[40px]"
                    width={40}
                    height={40}
                  ></Image>
                  {items.house.title}
                </div>
              </TableCell>
              <TableCell className="dark:!text-whiteColor" align="right" sx={{ px: 0, py: 2 }}>
                {items.house.price} تومان
              </TableCell>
              <TableCell className="dark:!text-whiteColor" align="right" sx={{ px: 0, py: 2 }}>
                {items.house.address}
              </TableCell>
              <TableCell
                align="right"
                className="!px-7 cursor-pointer"
                sx={{ px: 0, py: 2 }}
              >
                <FavoriteActionMenu houseId={items.house_id} favoriteId={items.id} token={token}/>
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
  );
};

export default FavoriteTable;
