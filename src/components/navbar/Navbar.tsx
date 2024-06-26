"use client";

import type { FC } from "react";

import { CalendarMonth, FormatListNumbered } from "@mui/icons-material";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import { useRouter } from "next/navigation";

export const Navbar: FC = () => {
  const router = useRouter();

  return (
    <Paper square variant="outlined">
      <BottomNavigation
        showLabels
        onChange={(_, newValue) => {
          router.push(newValue);
        }}
      >
        <BottomNavigationAction
          icon={<FormatListNumbered />}
          label="Leaderboard"
          value="/leaderboard"
        />

        <BottomNavigationAction
          icon={<CalendarMonth />}
          label="Races"
          value="/races"
        />
      </BottomNavigation>
    </Paper>
  );
};
