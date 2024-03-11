import type { countries, teams, drivers } from "../constants";

export type Country = (typeof countries)[keyof typeof countries];

export type Team = (typeof teams)[keyof typeof teams];

export type Driver = (typeof drivers)[keyof typeof drivers];

export type RaceStatus = "completed" | "inProgress" | "upcoming" | "cancelled";

export type Race = {
  id: number;
  name: string;
  circuitName: string;
  date: Date;
  country: Country;
  status: RaceStatus;
  result: {
    pole: Driver | null;
    first: Driver | null;
    last: Driver | null;
    fastestLap: Driver | null;
    fastestPitStop: Team | null;
  };
  sprintResult?: {
    pole: Driver | null;
    first: Driver | null;
  };
};

export type Player = {
  id: number;
  name: string;
  points: number;
  predictions: Predictions;
};

export type Result = {
  pole?: Driver["id"] | null;
  first?: Driver["id"] | null;
  last?: Driver["id"] | null;
  fastestLap?: Driver["id"] | null;
};

export type RacePrediction = {
  pole: Driver["id"] | null;
  first: Driver["id"] | null;
  last: Driver["id"] | null;
  fastestLap: Driver["id"] | null;
  fastestPitStop: Team["id"] | null;
};

export type SprintRacePrediction = {
  pole: Driver["id"] | null;
  first: Driver["id"] | null;
};

export type Predictions = Record<
  string,
  {
    racePrediction: RacePrediction;
    sprintRacePrediction?: SprintRacePrediction;
  }
>;
