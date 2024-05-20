import type { FC } from "react";

import { Box, Divider, Stack, Typography } from "@mui/material";
import groupBy from "object.groupby";

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
    .toSorted((a, b) => (parseInt(a.points) < parseInt(b.points) ? 1 : -1));

  return (
    <Stack height="100%" rowGap={2}>
      <Stack bgcolor="white" pt={2} px={2} rowGap={2}>
        <Typography mx="auto" py={0} variant="lg">
          Leaderboard
        </Typography>

        <Divider />
      </Stack>

      <Stack overflow="auto" px={2} rowGap={2}>
        {sortedGroupedPlayers.map(({ points, players }, position) => {
          const color =
            [colors.gold, colors.silver, colors.bronze][position] ?? "initial";

          return (
            <>
              <Stack
                key={points}
                alignItems="center"
                color={color}
                columnGap={2}
                direction="row"
                py={1}
              >
                <Box minWidth="50px">
                  <Typography variant="lg">{++position}</Typography>

                  <Typography>{getOrdinal(position)}</Typography>
                </Box>

                <Stack flex={1} rowGap={1}>
                  {players.map(({ id, name }) => (
                    <Typography key={id}>{name}</Typography>
                  ))}
                </Stack>

                <Stack alignItems="center">
                  <Typography variant="lg">{points}</Typography>

                  <Typography> points</Typography>
                </Stack>
              </Stack>

              <Divider />
            </>
          );
        })}
      </Stack>
    </Stack>
  );
};

export default LeaderboardPage;
