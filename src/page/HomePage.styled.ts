import styled from "styled-components";
import { Paper, TextField } from "@mui/material";

export const HomaPagePaper = styled(Paper)`
  text-align: center;
  border: 1px solid #000;
  height: 200px;
`;

export const HomePageInput = styled(TextField)`
  display: block;
  margin: 0 auto;
  width: 500px;
`;

export const HomePageButtonGroup = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  width: 450px;
`;