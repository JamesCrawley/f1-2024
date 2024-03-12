import type { FC, PropsWithChildren } from "react";

import "@/styles/global.css";

import { Box, Stack } from "@mui/material";

import { Navbar } from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <ThemeProvider>
        <body>
          <Box display="grid" gridTemplateRows="1fr auto" height="100vh">
            <Stack flex={1} maxWidth="600px" overflow="hidden">
              {children}
            </Stack>

            <Navbar />
          </Box>
        </body>
      </ThemeProvider>
    </html>
  );
};

export default RootLayout;
