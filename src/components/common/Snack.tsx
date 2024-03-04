import React from "react";
/** Style */
import { Snackbar } from "@mui/material";

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