import type { FC } from "react";

import { Divider, Stack, Typography } from "@mui/material";

import { RacesProgress } from "@/components/races-progress";
import { races } from "@/data/races";

const RacesPage: FC = () => {
  return (
    <Stack px={2}>
      <Stack bgcolor="white" pt={2} rowGap={2}>
        <Typography mx="auto" variant="lg">
          Races
        </Typography>

        <Divider />

        <RacesProgress />

        <Divider />
      </Stack>

      <Stack divider={<Divider />} overflow="auto">
        {races.map(({ id, name, circuitName, status }) => {
          return (
            <Stack key={id} py={2}>
              <Typography>{name}</Typography>

              <Stack>
                <Typography variant="sm">{circuitName}</Typography>

                <Typography variant="sm">{status}</Typography>
              </Stack>
            </Stack>
          );
        })}
      </Stack>
    </Stack>
  );
};

export default RacesPage;
