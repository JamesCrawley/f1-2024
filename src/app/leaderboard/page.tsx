import type { FC } from "react";

import { Box, Divider, Stack, Typography } from "@mui/material";
import groupBy from "object.groupby";

import { RacesProgress } from "@/components/races-progress";
import { players } from "@/data/players";
import { getOrdinal } from "@/utils";

const colors = {
  gold: "#c9b037",
  silver: "#b4b4b4",
  bronze: "#ad8a56",
} as const;

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

      <Stack divider={<Divider />}>
        {sortedGroupedPlayers.map(({ points, players }, position) => {
          const color =
            [colors.gold, colors.silver, colors.bronze][position] ?? "initial";

          return (
            <Stack
              key={points}
              alignItems="center"
              color={color}
              columnGap={2}
              direction="row"
              py={2}
            >
              <Box>
                <Typography variant="lg">{++position}</Typography>

                <Typography variant="sm">{getOrdinal(position)}</Typography>
              </Box>

              <Stack flex={1} rowGap={1}>
                {players.map(({ id, name }) => (
                  <Typography key={id} variant="sm">
                    {name}
                  </Typography>
                ))}
              </Stack>

              <Stack alignItems="center" fontWeight="bold">
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
