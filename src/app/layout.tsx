import type { FC, PropsWithChildren } from "react";

import "@/styles/global.css";

import { Box, Stack } from "@mui/material";

import { Navbar } from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <ThemeProvider>
        <Stack component="body" height="100vh">
          <Box flex={1}>{children}</Box>

          <Navbar />
        </Stack>
      </ThemeProvider>
    </html>
  );
};

export default RootLayout;
