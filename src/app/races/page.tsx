import type { FC } from "react";

import { Divider, Stack, Typography } from "@mui/material";

import { races } from "@/constants";

const RacesPage: FC = () => {
  return (
    <Stack p={4} rowGap={4}>
      <Typography mx="auto" variant="lg">
        Races
      </Typography>

      <Divider />

      <Stack rowGap={2}>
        {races.map(({ id, name, circuitName, status }) => {
          return (
            <Stack key={id}>
              <Typography>{name}</Typography>

              <Typography>{circuitName}</Typography>

              <Typography>{status}</Typography>
            </Stack>
          );
        })}
      </Stack>
    </Stack>
  );
};

export default RacesPage;
