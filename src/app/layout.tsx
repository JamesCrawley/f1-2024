import type { FC, PropsWithChildren } from "react";

import "@/styles/global.css";

import { Box, Stack } from "@mui/material";

import { Navbar } from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <ThemeProvider>
        <Stack
          component="body"
          direction="row"
          justifyContent="center"
          width="100vw"
        >
          <Stack flex={1} height="100vh" maxWidth="600px" overflow="none">
            <Box flex={1} overflow="auto">
              {children}
            </Box>

            <Navbar />
          </Stack>
        </Stack>
      </ThemeProvider>
    </html>
  );
};

export default RootLayout;
