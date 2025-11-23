import React, { FC } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IDocumentsDatas } from "@/core/types/IDocumentsResponse";
import Link from "next/link";
import CustomPagination2 from "@/components/Ui/CustomPagination2";
import { Box } from "@mui/material";
import DocumentActionMenu from "../DocumentsActionMenu";
import { cookies } from "next/headers";

interface IProps {
  documents: IDocumentsDatas[];
  totalPages: number;
  currentPage: number;
}

const DocumentsTable: FC<IProps> = async ({ documents, totalPages, currentPage }) => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");
  const tokenValue = token?.value as string;

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
                width: "200px",
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              نوع سند
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
              آیا خوانده شده؟
            </TableCell>
            <TableCell
              align="right"
              sx={{
                py: 3,
                px: 1.5,
                width: "250px",
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              تاریخ ساخت
            </TableCell>
            <TableCell
              align="right"
              sx={{
                width: "260px",
                py: 3,
                px: 5,
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              دیدن سند
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
          {documents.map((items) => (
            <TableRow
              key={items.id}
              className="hover:!bg-lightPrimary transition-colors"
            >
              <TableCell
                component="th"
                scope="row"
                className="!text-primary"
                align="right"
                sx={{ width: "240px", px: 5, py: 2 }}
              >
                {items.documentType === "contract" ? "قرارداد" : "معامله"}
              </TableCell>
              <TableCell align="right" sx={{ px: 3, py: 2 }}>
                <Box
                  sx={{
                    bgcolor: items.signed ? "#008c78" : "#ff5555",
                    color: "white",
                    fontWeight: "bold",
                    borderRadius: 1,
                    px: 1.5,
                    py: 0.5,
                    width: 50,
                    textAlign: "center",
                  }}
                >
                  {items.signed ? "بله" : "خیر"}
                </Box>
              </TableCell>
              <TableCell align="right" sx={{ px: 0, py: 2 }}>
                {items.createdAt.slice(0, 10)} - {items.createdAt.slice(11, 16)}
              </TableCell>
              <TableCell
                align="right"
                className="!px-8 !text-primary hover:!font-bold"
                sx={{ px: 0, py: 2 }}
              >
                <Link href={items.filePath}>دیدن فایل سند</Link>
              </TableCell>
              <TableCell
                align="right"
                className="!px-7 cursor-pointer"
                sx={{ px: 0, py: 2 }}
              >
                <DocumentActionMenu documentId={items.id} token={tokenValue}/>
              </TableCell>
            </TableRow>
          ))}
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

export default DocumentsTable;
