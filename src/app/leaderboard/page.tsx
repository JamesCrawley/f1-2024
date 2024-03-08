import type { FC } from "react";

import { Container, Stack, Typography } from "@mui/material";

const Home: FC = () => {
  return (
    <Stack bgcolor="pink" py={2}>
      <Container fixed>
        <Typography>Leaderboard</Typography>
      </Container>
    </Stack>
  );
};

export default Home;
