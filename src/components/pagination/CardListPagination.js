import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

/**
 * 分頁
 * @param {number} count: 總筆數 
 * @param {number} page:當前頁數
 * @param {function} handlePageChange:換頁要做的處理 
 */
export default function CardListPagination({
  count = 1,
  page,
  handlePageChange,
}) {
  return (
    <Stack spacing={2}>
      <Pagination count={count} page={page} onChange={handlePageChange} />
    </Stack>
  );
}
