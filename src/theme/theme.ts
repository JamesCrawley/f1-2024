"use client";

import { createTheme } from "@mui/material";

import { MuiTypography } from "./components/typography";

import "@fontsource/lato/400.css";

export const theme = createTheme({
  typography: {
    fontFamily: "Lato",
  },
  components: {
    MuiTypography,
  },
});
