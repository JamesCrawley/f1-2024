import type { countries, teams, drivers } from "./constants";

export type Country = (typeof countries)[keyof typeof countries];

export type Team = (typeof teams)[keyof typeof teams];

export type Driver = (typeof drivers)[keyof typeof drivers];

export type RaceStatus = "completed" | "inProgress" | "upcoming" | "cancelled";

export type RaceResult = {
  pole: Driver["id"] | null;
  first: Driver["id"] | null;
  last: Driver["id"] | null;
  fastestLap: Driver["id"] | null;
  fastestPitStop: Team["id"] | null;
};

export type SprintRaceResult = {
  pole: Driver["id"] | null;
  first: Driver["id"] | null;
};

export type Race = {
  id: number;
  name: string;
  circuitName: string;
  date: string;
  country: Country;
  status: RaceStatus;
  result: RaceResult;
  sprintRaceResult?: SprintRaceResult;
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

export type WeekendPredictions = {
  racePrediction: RacePrediction;
  sprintRacePrediction?: SprintRacePrediction;
};

export type Player = {
  id: number;
  name: string;
  points: number;
  predictions: Record<string, WeekendPredictions>;
};
