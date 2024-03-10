import { atom } from "jotai";

export enum severityEnum {
  ERROR = "error",
  SUCCESS = "success"
}

interface Props {
  state: boolean,
  severity: severityEnum,
  message: string | null
}

export const SnackAtom = atom<Props>({
  state: false,
  severity: severityEnum.SUCCESS,
  message: null
}); 