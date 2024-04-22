import { Fragment } from "react";
import type { FC, ReactNode } from "react";

import { Divider, Stack, Typography } from "@mui/material";

// import { RacesProgress } from "@/components/races-progress";
import { completedRaces, inProgressRace, upcomingRaces } from "@/data/races";
import type { Race } from "@/data/types";
import { getCountryFlag } from "@/utils";

const RacesPage: FC = () => {
  return (
    <Stack height="100%">
      <Stack bgcolor="white" pt={2} px={2} rowGap={2}>
        <Typography mx="auto" py={0} variant="lg">
          Races
        </Typography>

        {/* <Divider />

        <RacesProgress /> */}

        <Divider />
      </Stack>

      <Stack overflow="auto" p={2} rowGap={6}>
        {inProgressRace && (
          <Stack>
            <Typography textAlign="center" variant="md">
              Current race
            </Typography>

            <RaceCard race={inProgressRace} />
          </Stack>
        )}

        {upcomingRaces.length > 0 && (
          <Stack rowGap={2}>
            <Typography textAlign="center" variant="md">
              Upcoming races
            </Typography>

            {renderRaces(upcomingRaces)}
          </Stack>
        )}

        {completedRaces.length > 0 && (
          <Stack rowGap={2}>
            <Typography textAlign="center" variant="md">
              Completed races
            </Typography>

            {renderRaces(completedRaces)}
          </Stack>
        )}
      </Stack>
    </Stack>
  );
};

const renderRaces = (races: Array<Race>): ReactNode => {
  return (
    <Stack>
      <Divider />

      <Stack divider={<Divider />}>
        {races.map((race) => {
          return (
            <Fragment key={race.id}>
              <RaceCard race={race} />
            </Fragment>
          );
        })}
      </Stack>
    </Stack>
  );
};

type RaceCardProps = {
  race: Race;
};
const RaceCard: FC<RaceCardProps> = ({
  race: { name, circuitName, country },
}) => {
  return (
    <Stack
      alignItems="center"
      direction="row"
      justifyContent="space-between"
      py={1}
    >
      <Stack rowGap={1}>
        <Typography fontSize={20}>{name}</Typography>

        <Typography fontSize={12} fontStyle="italic">
          {circuitName}
        </Typography>
      </Stack>

      <Typography variant="xl">{getCountryFlag(country.id)}</Typography>
    </Stack>
  );
};

export default RacesPage;
