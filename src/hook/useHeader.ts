/** Jotai */
import { useAtom } from "jotai";
import HeaderAtom from "@/components/jotai/HeaderAtom";

const useHeader = () => {
  const [open, setOpen] = useAtom(HeaderAtom);

  const handleOpenHeader = () => {
    setOpen(true);
  }

  const handleCloseHeader = () => {
    setOpen(false);
  }

  return {open, setOpen, handleOpenHeader, handleCloseHeader};
};

export default useHeader;