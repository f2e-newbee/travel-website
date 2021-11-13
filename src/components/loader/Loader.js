import { React } from "react";
import CircularProgress from "@mui/material/CircularProgress";


/**
 * Loading畫面元件
 */
const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black	bg-opacity-20 z-50">
      <CircularProgress />
    </div>
  );
};

export default Loader;
