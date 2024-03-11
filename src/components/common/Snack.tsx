import React from "react";
/** Style */
import { Alert, Snackbar } from "@mui/material";
import { useAtom } from "jotai";
import { SnackAtom } from "@/atom/SnackAtom";

/** Recoil 사용 -> props or jotai 바로 사용
 * Props 사용시 memorization 생각
 * app.tsx
 */

const Snack: React.FC = () => {
  const [snack, setSnack] = useAtom(SnackAtom);

  const handleClose = () => {
    setSnack({ ...snack, state: false });
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      open={snack.state}
      autoHideDuration={3000}
      onClose={handleClose}
      key={"vertical" + "horizontal"}
    >
      <Alert
        severity={snack.severity}
        variant="filled"
        sx={{ width: '100%' }}
      >
        {snack.message}
      </Alert>
    </Snackbar>
  )
};

export default Snack;