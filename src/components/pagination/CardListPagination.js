import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

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
