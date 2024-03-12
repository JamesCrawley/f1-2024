import type { FC } from "react";

import { Divider, Stack, Typography } from "@mui/material";
import groupBy from "object.groupby";

import { RacesProgress } from "@/components/races-progress";
import { players } from "@/data/players";
import { getOrdinal } from "@/utils";

const LeaderboardPage: FC = () => {
  const groupedPlayers = groupBy(players, ({ points }) => points);

  const sortedGroupedPlayers = Object.entries(groupedPlayers)
    .map(([points, players]) => ({ points, players }))
    .toSorted((a, b) => (a.points < b.points ? 1 : -1));

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
          Leaderboard
        </Typography>

        <Divider />

        <RacesProgress />

        <Divider />
      </Stack>

      <Stack py={2}>
        {sortedGroupedPlayers.map(({ points, players }, position) => {
          return (
            <Stack
              key={points}
              alignItems="center"
              bgcolor={position % 2 === 0 ? "#e9ecef" : "none"}
              borderRadius={4}
              columnGap={2}
              direction="row"
              p={2}
            >
              <Typography variant="lg">
                {++position}

                <Typography variant="sm">{getOrdinal(position)}</Typography>
              </Typography>

              <Stack flex={1} rowGap={1}>
                {players.map(({ id, name }) => (
                  <Typography key={id} variant="sm">
                    {name}
                  </Typography>
                ))}
              </Stack>

              <Stack alignItems="center">
                <Typography variant="lg">{points}</Typography>

                <Typography variant="sm"> points</Typography>
              </Stack>
            </Stack>
          );
        })}
      </Stack>
    </Stack>
  );
};

export default LeaderboardPage;
