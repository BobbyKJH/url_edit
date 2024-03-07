import React from "react";
/** Style */
import { Snackbar } from "@mui/material";

/** Recoil 사용 -> props or recoil 바로 사용
 * Props 사용시 memorization 생각
 * app.tsx
 */

const Snack: React.FC = () => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      open={true}
      autoHideDuration={1000}
      sx={{ backgroundColor: "red"}}
      security="success"
      // onClose={handleClose}
      message="I love snacks"
      key={"vertical" + "horizontal"}
    />
  )
};

export default Snack;