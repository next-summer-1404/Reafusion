import React, { FC } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ICategoryDatas } from "@/core/types/ICategoriesResponse";
import CustomPagination2 from "@/components/Ui/CustomPagination2";
import CategoryActionMenu from "../CategoryActionMenu";
import { cookies } from "next/headers";

interface IProps {
  data: ICategoryDatas[];
  totalPages: number;
  currentPage: number;
}

const CategoryTable: FC<IProps> = async ({ data, totalPages, currentPage }) => {
  const cookiesStore = await cookies();
  const token = cookiesStore.get('token')?.value as string;

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
              sx={{
                px: 4,
                py: 3,
                width: "500px",
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              شناسه دسته بندی
            </TableCell>
            <TableCell
            className="dark:!text-whiteColor"
              align="right"
              sx={{
                py: 3,
                px: 0,
                width: "500px",
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              نام دسته بندی
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
                className="!text-primary dark:!text-thidary"
                align="right"
                sx={{ width: "240px", px: 4, py: 2 }}
              >
                {items.id}
              </TableCell>
              <TableCell  align="right" className="!px-8 dark:!text-whiteColor" sx={{ px: 0, py: 2 }}>
                {items.name}
              </TableCell>
              <TableCell
                align="right"
                className="!px-7 cursor-pointer"
                sx={{ px: 0, py: 2 }}
              >
                <CategoryActionMenu currentName={items.name} token={token} id={items.id}/>
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

export default CategoryTable;
