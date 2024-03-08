"use client";

import type { FC } from "react";

import { FormatListNumbered, Leaderboard } from "@mui/icons-material";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import { useRouter } from "next/navigation";

export const Navbar: FC = () => {
  const router = useRouter();

  return (
    <Paper elevation={4}>
      <BottomNavigation
        showLabels
        onChange={(_, newValue) => {
          router.push(newValue);
        }}
      >
        <BottomNavigationAction
          icon={<Leaderboard />}
          label="Leaderboard"
          value="/leaderboard"
        />

        <BottomNavigationAction
          icon={<FormatListNumbered />}
          label="Races"
          value="/races"
        />
      </BottomNavigation>
    </Paper>
  );
};
