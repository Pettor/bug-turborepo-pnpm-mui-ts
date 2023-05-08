import { styled } from "@mui/material/styles";
import Box, { BoxProps } from "@mui/material/Box";
import { StyledComponent } from '@emotion/styled';
import { DetailedHTMLProps, HTMLAttributes } from "react";

export const DivElement: StyledComponent<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = styled("div")(({ theme }) => ({}));
export const BoxElement: StyledComponent<BoxProps> = styled(Box)(({ theme }) => ({}));