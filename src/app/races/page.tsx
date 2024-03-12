import type { FC } from "react";

import { Divider, Stack, Typography } from "@mui/material";

import { races } from "@/data/races";

const RacesPage: FC = () => {
  return (
    <Stack px={2}>
      <Stack
        bgcolor="white"
        position="sticky"
        pt={2}
        rowGap={2}
        top={0}
        zIndex={1}
      >
        <Typography mx="auto" variant="lg">
          Races
        </Typography>

        <Divider />
      </Stack>

      <Stack divider={<Divider />}>
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
