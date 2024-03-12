import type { FC } from "react";

import { Stack, Typography, LinearProgress } from "@mui/material";

import { races } from "@/data/races";

export const RacesProgress: FC = () => {
  const numCompletedRaces = races.filter(
    ({ status }) => status === "completed",
  ).length;

  const numRaces = races.length;

  return (
    <Stack rowGap={1}>
      <Typography textAlign="center">Races Completed</Typography>

      <Stack justifyContent="space-around" position="relative">
        <LinearProgress
          color="error"
          sx={{ height: 36, borderRadius: 4 }}
          value={(numCompletedRaces / numRaces) * 100}
          variant="determinate"
        />

        <Typography
          color="white"
          position="absolute"
          textAlign="center"
          width="100%"
        >
          {numCompletedRaces} / {numRaces}
        </Typography>
      </Stack>
    </Stack>
  );
};
