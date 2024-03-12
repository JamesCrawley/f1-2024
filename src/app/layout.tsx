import type { FC, PropsWithChildren } from "react";

import "@/styles/global.css";

import { Box, Stack } from "@mui/material";

import { Navbar } from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Box
            display="grid"
            gridTemplateRows="1fr auto"
            height="100dvh"
            overflow="hidden"
          >
            <Stack flex={1} maxWidth="600px" overflow="hidden">
              {children}
            </Stack>

            <Navbar />
          </Box>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
